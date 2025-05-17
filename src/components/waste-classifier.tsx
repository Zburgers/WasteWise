
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

interface WasteClassifierProps {
  selectedRegion: string;
  onClassificationComplete: (wasteType: string) => void; // Callback for when classification is done
}

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
      }
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
      onClassificationComplete(result.wasteType); // Notify parent component
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

  return (
    <div className="space-y-6">
      <Card className="w-full shadow-lg rounded-xl overflow-hidden">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-primary flex items-center">
            <UploadCloud className="w-7 h-7 mr-2" /> Waste Image Classifier
          </CardTitle>
          <CardDescription>Upload an image of a waste item to classify it using AI. Then, get disposal advice.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div className="space-y-2">
            <Label htmlFor="waste-image-upload" className="text-base">Upload Image</Label>
            <Input id="waste-image-upload" type="file" accept="image/*" onChange={handleImageChange} className="file:text-primary file:font-semibold hover:file:bg-primary/10" />
          </div>

          {imagePreview && (
            <div className="mt-4 border border-border rounded-lg p-2 bg-muted/20">
              <p className="text-sm text-muted-foreground mb-2 text-center">Image Preview:</p>
              <Image src={imagePreview} alt="Waste item preview" width={300} height={300} className="rounded-md object-contain max-h-60 w-auto mx-auto shadow-md" data-ai-hint="uploaded waste" />
            </div>
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
          <Button onClick={handleClassifySubmit} disabled={isLoadingClassification || !imagePreview} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
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

      {classificationResult && !isLoadingClassification && (
        <Card className="mt-6 bg-secondary/30 border-primary/50 shadow-md rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-primary">
              <CheckCircle2 className="w-6 h-6 mr-2" /> Classification Result
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-foreground">
            <p className="text-lg"><strong>Type:</strong> {classificationResult.wasteType}</p>
            <p className="text-lg"><strong>Confidence:</strong> {(classificationResult.confidence * 100).toFixed(2)}%</p>
          </CardContent>
          <CardFooter className="p-6">
            <Button 
              onClick={handleGetDisposalAdvice} 
              disabled={isFetchingAdvice} 
              className="w-full bg-green-600 hover:bg-green-700 text-white"
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
      )}

      {isFetchingAdvice && (
          <div className="mt-4 flex flex-col justify-center items-center space-y-2 p-6 border rounded-lg shadow-sm">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="text-muted-foreground">Fetching disposal advice for {classificationResult?.wasteType}...</p>
          </div>
      )}

      {adviceError && !isFetchingAdvice && (
        <Alert variant="destructive" className="mt-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Advice Error</AlertTitle>
          <AlertDescription>{adviceError}</AlertDescription>
        </Alert>
      )}

      {disposalAdvice && !isFetchingAdvice && (
        <Card className="mt-6 border-green-500/50 shadow-lg rounded-xl">
          <CardHeader className="bg-green-50 dark:bg-green-900/20 rounded-t-xl">
            <CardTitle className="flex items-center text-green-700 dark:text-green-300">
              <Recycle className="w-7 h-7 mr-2" /> Disposal Advice: {disposalAdvice.itemName}
            </CardTitle>
            {disposalAdvice.regionalConsiderations && (
              <CardDescription className="pt-1 text-sm">
                <strong>Regional Notes ({selectedRegion}):</strong> {disposalAdvice.regionalConsiderations}
              </CardDescription>
            )}
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div>
              <h4 className="font-semibold text-lg text-primary mb-2">Disposal Options:</h4>
              {disposalAdvice.disposalOptions.map((option, index) => (
                <div key={index} className="mb-4 p-4 border rounded-md bg-background shadow-sm">
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
      )}
    </div>
  );
};

export default WasteClassifier;
