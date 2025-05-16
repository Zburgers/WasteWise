"use client";

import { useState } from 'react';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import RegionSelector from "@/components/region-selector";
import WasteClassifier from "@/components/waste-classifier";
import AiChatbot from "@/components/ai-chatbot";
import EducationalPanel from "@/components/educational-panel";
import { REGIONS } from "@/lib/types";
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  const [selectedRegion, setSelectedRegion] = useState<string>(REGIONS.find(r => r.value === "global")?.label || "Global (Default)");

  const handleRegionChange = (regionValue: string) => {
    const region = REGIONS.find(r => r.value === regionValue);
    setSelectedRegion(region ? region.label : "Global (Default)");
  };
  
  // Get the value for the RegionSelector component
  const currentRegionValue = REGIONS.find(r => r.label === selectedRegion)?.value || "global";


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="w-full max-w-5xl mx-auto space-y-10">
          <section aria-labelledby="region-selection-heading">
            <h2 id="region-selection-heading" className="sr-only">Region Selection</h2>
            <RegionSelector selectedRegion={currentRegionValue} setSelectedRegion={handleRegionChange} />
            <p className="text-center text-sm text-muted-foreground mt-2">
              Selected region: <strong>{selectedRegion}</strong>. Advice will be tailored accordingly.
            </p>
          </section>

          <Separator />

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <section aria-labelledby="waste-classifier-heading" className="space-y-6">
               <h2 id="waste-classifier-heading" className="sr-only">Waste Classifier</h2>
              <WasteClassifier selectedRegion={selectedRegion} />
            </section>
            <section aria-labelledby="ai-chatbot-heading" className="space-y-6">
              <h2 id="ai-chatbot-heading" className="sr-only">AI Chatbot</h2>
              <AiChatbot selectedRegion={selectedRegion} />
            </section>
          </div>
          
          <Separator />

          <section aria-labelledby="educational-info-heading" className="mt-10">
            <h2 id="educational-info-heading" className="sr-only">Educational Information</h2>
            <EducationalPanel />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
