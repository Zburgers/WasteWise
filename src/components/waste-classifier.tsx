"use client";

import { useState, type FC, type ChangeEvent } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, UploadCloud, AlertCircle, CheckCircle2, Info, Recycle } from 'lucide-react';
import { classifyWasteImage, type ClassifyWasteImageOutput } from '@/ai/flows/classify-waste-image';
import { getDisposalAdvice, type GetDisposalAdviceOutput } from '@/ai/flows/get-disposal-advice';
import { useToast } from "@/hooks/use-toast";
import { useWeb3Auth } from "@/hooks/useWeb3Auth";
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, cardHover } from '@/lib/animation-variants';

interface WasteClassifierProps {
  selectedRegion: string;
  onClassificationComplete: (wasteType: string) => void; // Callback for when classification is done
}

const focusGlowStyles = "focus:ring-2 focus:ring-primary focus:ring-opacity-75 focus:shadow-[0_0_10px_hsl(var(--primary))] transition-all duration-200";

const WasteClassifier: FC<WasteClassifierProps> = ({ selectedRegion, onClassificationComplete }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [photoDataUri, setPhotoDataUri] = useState<string | null>(null);
  const [classificationResult, setClassificationResult] = useState<ClassifyWasteImageOutput | null>(null);
  const [isLoadingClassification, setIsLoadingClassification] = useState(false);
  const [classificationError, setClassificationError] = useState<string | null>(null);

  const [disposalAdvice, setDisposalAdvice] = useState<GetDisposalAdviceOutput | null>(null);
  const [isFetchingAdvice, setIsFetchingAdvice] = useState(false);
  const [adviceError, setAdviceError] = useState<string | null>(null);

  const { toast } = useToast();
  const { user } = useWeb3Auth();

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setClassificationError("Please upload a valid image file (e.g., JPG, PNG).");
        toast({ title: "Invalid File Type", description: "Please upload an image.", variant: "destructive" });
        return;
      }
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setClassificationError("Image size should not exceed 5MB.");
        toast({ title: "File Too Large", description: "Image size should be less than 5MB.", variant: "destructive" });
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setPhotoDataUri(reader.result as string);
        setClassificationResult(null);
        setDisposalAdvice(null);
        setClassificationError(null);
        setAdviceError(null);
        setIsFetchingAdvice(false);
      };
      reader.onerror = () => {
        setClassificationError("Failed to read the image file.");
        toast({ title: "File Read Error", description: "Could not read the image file.", variant: "destructive" });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClassifySubmit = async () => {
    if (!photoDataUri) {
      setClassificationError("Please select an image first.");
      toast({ title: "No Image", description: "Please upload an image to classify.", variant: "destructive"});
      return;
    }
    setIsLoadingClassification(true);
    setClassificationError(null);
    setClassificationResult(null);
    setDisposalAdvice(null); 
    setAdviceError(null);

    try {
      const result = await classifyWasteImage({ photoDataUri });
      setClassificationResult(result);
      await handleClassification(result.wasteType);
      toast({
        title: "Classification Successful",
        description: `Identified as: ${result.wasteType}`,
      });
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "An unknown error occurred during classification.";
      setClassificationError(`Classification failed: ${errorMessage}`);
      toast({
        title: "Classification Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoadingClassification(false);
    }
  };

  const handleGetDisposalAdvice = async () => {
    if (!classificationResult) {
      setAdviceError("Cannot fetch advice without a classification result.");
      toast({ title: "Missing Classification", description: "Please classify an image first.", variant: "destructive" });
      return;
    }

    setIsFetchingAdvice(true);
    setAdviceError(null);
    setDisposalAdvice(null);
    toast({ title: "Fetching Advice", description: `Getting disposal tips for ${classificationResult.wasteType}...` });

    try {
      const advice = await getDisposalAdvice({ query: classificationResult.wasteType, region: selectedRegion });
      setDisposalAdvice(advice);
      toast({ title: "Advice Received", description: `Showing disposal advice for ${advice.itemName}` });
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "An unknown error occurred while fetching advice.";
      setAdviceError(`Failed to fetch advice: ${errorMessage}`);
      toast({ title: "Advice Error", description: errorMessage, variant: "destructive" });
    } finally {
      setIsFetchingAdvice(false);
    }
  };

  const handleClassification = async (wasteType: string) => {
    try {
      // Call the sort-event API
      const response = await fetch('/api/sort-event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-address': user?.address || ''
        },
        body: JSON.stringify({
          itemType: wasteType
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.success) {
        // Notify parent component
        onClassificationComplete(wasteType);
      } else {
        throw new Error(data.error || 'Failed to record classification');
      }
    } catch (error) {
      console.error('Error recording classification:', error);
      toast({
        title: "Classification Record Error",
        description: "Failed to record classification, but the item was still classified.",
        variant: "destructive"
      });
      // Still notify parent component even if API call fails
      onClassificationComplete(wasteType);
    }
  };

  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <Card className={cn("w-full shadow-lg rounded-xl overflow-hidden bg-card/95 backdrop-blur-sm", focusGlowStyles)}>
          <CardHeader>
            <motion.div className="flex items-center">
              <motion.div
                initial={{ rotateY: 90 }}
                animate={{ rotateY: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <UploadCloud className="w-7 h-7 mr-2" />
              </motion.div>
              <CardTitle className="text-2xl font-semibold text-primary">Waste Image Classifier</CardTitle>
            </motion.div>
            <CardDescription>Upload an image of a waste item to classify it using AI. Then, get disposal advice.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <div className="space-y-2">
              <Label htmlFor="waste-image-upload" className="text-base">Upload Image</Label>
              <Input id="waste-image-upload" type="file" accept="image/*" onChange={handleImageChange} className={cn("file:text-primary file:font-semibold hover:file:bg-primary/10", focusGlowStyles)} />
            </div>

            {imagePreview && (
              <motion.div 
                className="mt-4 border border-border rounded-lg p-2 bg-muted/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-sm text-muted-foreground mb-2 text-center">Image Preview:</p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <Image src={imagePreview} alt="Waste item preview" width={300} height={300} className="rounded-md object-contain max-h-60 w-auto mx-auto shadow-md" data-ai-hint="uploaded waste" />
                </motion.div>
              </motion.div>
            )}

            {classificationError && (
              <Alert variant="destructive" className="mt-4">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Classification Error</AlertTitle>
                <AlertDescription>{classificationError}</AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter className="p-6">
            <Button onClick={handleClassifySubmit} disabled={isLoadingClassification || !imagePreview} className={cn("w-full bg-primary hover:bg-primary/90 text-primary-foreground", focusGlowStyles)}>
              {isLoadingClassification ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Analyzing Waste...
                </>
              ) : (
                "Analyze Waste Image"
              )}
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      <AnimatePresence>
        {classificationResult && !isLoadingClassification && (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <Card className={cn("mt-6 bg-secondary/30 border-primary/50 shadow-md rounded-xl bg-card/95 backdrop-blur-sm", focusGlowStyles)}>
              <CardHeader>
                <motion.div 
                  className="flex items-center text-primary"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
                  >
                    <CheckCircle2 className="w-6 h-6 mr-2" />
                  </motion.div>
                  <CardTitle>Classification Result</CardTitle>
                </motion.div>
              </CardHeader>
              <CardContent className="space-y-2 text-foreground">
                <motion.p 
                  className="text-lg"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <strong>Type:</strong> {classificationResult.wasteType}
                </motion.p>
                <motion.p 
                  className="text-lg"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <strong>Confidence:</strong> {(classificationResult.confidence * 100).toFixed(2)}%
                </motion.p>
              </CardContent>
              <CardFooter className="p-6">
                <Button 
                  onClick={handleGetDisposalAdvice} 
                  disabled={isFetchingAdvice} 
                  className={cn("w-full bg-green-600 hover:bg-green-700 text-white", focusGlowStyles)}
                >
                  {isFetchingAdvice ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Fetching Advice...
                    </>
                  ) : (
                    <>
                      <Info className="mr-2 h-5 w-5" /> Get Disposal Advice for {classificationResult.wasteType}
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}

        {isFetchingAdvice && (
          <div className="mt-4 flex flex-col justify-center items-center space-y-2 p-6 border rounded-lg shadow-sm bg-card/95 backdrop-blur-sm">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-muted-foreground">Fetching disposal advice for {classificationResult?.wasteType}...</p>
          </div>
        )}

        {adviceError && !isFetchingAdvice && (
          <Alert variant="destructive" className="mt-4 bg-card/95 backdrop-blur-sm">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Advice Error</AlertTitle>
            <AlertDescription>{adviceError}</AlertDescription>
          </Alert>
        )}

        {disposalAdvice && !isFetchingAdvice && (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <Card className={cn("mt-6 border-green-500/50 shadow-lg rounded-xl bg-card/95 backdrop-blur-sm", focusGlowStyles)}>
              <CardHeader className="bg-green-50 dark:bg-green-900/30 rounded-t-xl">
                <motion.div 
                  className="flex items-center text-green-700 dark:text-green-300"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <motion.div
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
                  >
                    <Recycle className="w-7 h-7 mr-2" />
                  </motion.div>
                  <CardTitle>Disposal Advice: {disposalAdvice.itemName}</CardTitle>
                </motion.div>
                {disposalAdvice.regionalConsiderations && (
                  <CardDescription className="pt-1 text-sm text-green-600 dark:text-green-400/90">
                    <strong>Regional Notes ({selectedRegion}):</strong> {disposalAdvice.regionalConsiderations}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-2">Disposal Options:</h4>
                  {disposalAdvice.disposalOptions.map((option, index) => (
                    <div key={index} className="mb-4 p-4 border rounded-md bg-background/70 shadow-sm backdrop-blur-xs">
                      <p className="font-medium text-md text-primary-darker flex items-center">
                        <Info className="w-5 h-5 mr-2 text-accent" /> {option.method}
                      </p>
                      <p className="text-sm mt-1 pl-1"><span className="font-semibold">Instructions:</span> {option.instructions}</p>
                      {option.binColor && <p className="text-sm mt-1 pl-1"><span className="font-semibold">Typical Bin Color:</span> {option.binColor} (check locally)</p>}
                      {option.notes && <p className="text-sm mt-1 pl-1 italic text-muted-foreground"><span className="font-semibold">Note:</span> {option.notes}</p>}
                    </div>
                  ))}
                </div>
                {disposalAdvice.ecoFriendlyAlternatives && disposalAdvice.ecoFriendlyAlternatives.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-lg text-primary mb-1">Eco-Friendly Alternatives:</h4>
                    <ul className="list-disc list-inside text-sm space-y-1 pl-4">
                      {disposalAdvice.ecoFriendlyAlternatives.map((alt, i) => <li key={i}>{alt}</li>)}
                    </ul>
                  </div>
                )}
                {disposalAdvice.generalTips && disposalAdvice.generalTips.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-lg text-primary mb-1">General Tips:</h4>
                    <ul className="list-disc list-inside text-sm space-y-1 pl-4">
                      {disposalAdvice.generalTips.map((tip, i) => <li key={i}>{tip}</li>)}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default WasteClassifier;