"use client";

import { useState, type FC, type ChangeEvent } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, UploadCloud, AlertCircle, CheckCircle2 } from 'lucide-react';
import { classifyWasteImage, type ClassifyWasteImageOutput } from '@/ai/flows/classify-waste-image';
import { useToast } from "@/hooks/use-toast";

interface WasteClassifierProps {
  selectedRegion: string; // Though not directly used by classifyWasteImage, it's good practice for context
}

const WasteClassifier: FC<WasteClassifierProps> = ({ selectedRegion }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [photoDataUri, setPhotoDataUri] = useState<string | null>(null);
  const [classificationResult, setClassificationResult] = useState<ClassifyWasteImageOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Basic client-side validation for image type and size (optional)
      if (!file.type.startsWith('image/')) {
        setError("Please upload a valid image file (e.g., JPG, PNG).");
        toast({ title: "Invalid File Type", description: "Please upload an image.", variant: "destructive" });
        return;
      }
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setError("Image size should not exceed 5MB.");
        toast({ title: "File Too Large", description: "Image size should be less than 5MB.", variant: "destructive" });
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setPhotoDataUri(reader.result as string);
        setClassificationResult(null); // Reset previous result
        setError(null); // Clear previous errors
      };
      reader.onerror = () => {
        setError("Failed to read the image file.");
        toast({ title: "File Read Error", description: "Could not read the image file.", variant: "destructive" });
      }
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!photoDataUri) {
      setError("Please select an image first.");
      toast({ title: "No Image", description: "Please upload an image to classify.", variant: "destructive"});
      return;
    }
    setIsLoading(true);
    setError(null);
    setClassificationResult(null);

    try {
      const result = await classifyWasteImage({ photoDataUri });
      setClassificationResult(result);
      toast({
        title: "Classification Successful",
        description: `Identified as: ${result.wasteType}`,
      });
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "An unknown error occurred during classification.";
      setError(`Classification failed: ${errorMessage}`);
      toast({
        title: "Classification Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full shadow-lg rounded-xl overflow-hidden">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-primary flex items-center">
          <UploadCloud className="w-7 h-7 mr-2" /> Waste Image Classifier
        </CardTitle>
        <CardDescription>Upload an image of a waste item to classify it using AI.</CardDescription>
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

        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {classificationResult && (
          <Card className="mt-6 bg-secondary/30 border-primary/50">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <CheckCircle2 className="w-6 h-6 mr-2" /> Classification Result
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-foreground">
              <p className="text-lg"><strong>Type:</strong> {classificationResult.wasteType}</p>
              <p className="text-lg"><strong>Confidence:</strong> {(classificationResult.confidence * 100).toFixed(2)}%</p>
              <p className="text-sm mt-2 text-muted-foreground">
                For detailed disposal advice based on this item and your region ({selectedRegion}), please use the 'Chat with Waste Wizard' feature.
              </p>
            </CardContent>
          </Card>
        )}
      </CardContent>
      <CardFooter className="p-6">
        <Button onClick={handleSubmit} disabled={isLoading || !imagePreview} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Analyzing...
            </>
          ) : (
            "Analyze Waste"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WasteClassifier;
