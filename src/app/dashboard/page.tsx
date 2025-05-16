// This was the old src/app/page.tsx, now moved to /dashboard
"use client";

import { useState, useEffect } from 'react';
// Header is removed, Navbar will handle global navigation
import RegionSelector from "@/components/region-selector";
import WasteClassifier from "@/components/waste-classifier";
// AiChatbot is replaced by AiChatBubble
import AiChatBubble from "@/components/ai-chat-bubble"; // New chat bubble
import EducationalPanel from "@/components/educational-panel";
import { REGIONS } from "@/lib/types";
import { Separator } from '@/components/ui/separator';

export default function DashboardPage() { // Renamed from HomePage
  const [selectedRegion, setSelectedRegion] = useState<string>(REGIONS.find(r => r.value === "global")?.label || "Global (Default)");

  const handleRegionChange = (regionValue: string) => {
    const region = REGIONS.find(r => r.value === regionValue);
    setSelectedRegion(region ? region.label : "Global (Default)");
  };
  
  // Get the value for the RegionSelector component
  const currentRegionValue = REGIONS.find(r => r.label === selectedRegion)?.value || "global";

  return (
    // Removed Header component call
    // Removed flex flex-col min-h-screen bg-background as RootLayout handles this
    <div className="container mx-auto px-4 py-8"> {/* Adjusted padding, main layout in RootLayout */}
      <div className="w-full max-w-5xl mx-auto space-y-10">
        <section aria-labelledby="region-selection-heading" className="mt-8"> {/* Added margin top */}
          <h2 id="region-selection-heading" className="text-3xl font-semibold text-center mb-6 text-primary">
            WasteWise Dashboard
          </h2>
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
          <section aria-labelledby="educational-info-heading" className="space-y-6 md:mt-0">
            <h2 id="educational-info-heading" className="sr-only">Educational Information</h2>
            <EducationalPanel />
            {/* The AiChatbot used to be here, now it's a floating bubble */}
          </section>
        </div>
      </div>
      <AiChatBubble selectedRegion={selectedRegion} /> {/* Add the chat bubble */}
    </div>
    // Removed Footer component call, RootLayout handles this
  );
}
