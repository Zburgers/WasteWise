// This was the old src/app/page.tsx, now moved to /dashboard
"use client";

import { useState, useEffect } from 'react';
import RegionSelector from "@/components/region-selector";
import WasteClassifier from "@/components/waste-classifier";
import AiChatBubble from "@/components/ai-chat-bubble"; 
import EducationalPanel from "@/components/educational-panel";
import RecentClassificationsPanel from "@/components/recent-classifications-panel";
import { REGIONS } from "@/lib/types";
import { Separator } from '@/components/ui/separator';
import { useWeb3Auth } from "@/hooks/useWeb3Auth";

export default function DashboardPage() {
  const [selectedRegion, setSelectedRegion] = useState<string>(REGIONS.find(r => r.value === "global")?.label || "Global (Default)");
  const [lastClassifiedItem, setLastClassifiedItem] = useState<string | null>(null);
  const [recentClassifications, setRecentClassifications] = useState<string[]>([]); // New state
  const { user } = useWeb3Auth();

  // Mock stats (replace with real data in future)
  const stats = {
    points: 1250,
    challengesCompleted: 8,
    itemsSorted: 15,
  };

  const handleRegionChange = (regionValue: string) => {
    const region = REGIONS.find(r => r.value === regionValue);
    setSelectedRegion(region ? region.label : "Global (Default)");
  };
  
  const currentRegionValue = REGIONS.find(r => r.label === selectedRegion)?.value || "global";

  const handleClassificationComplete = (wasteType: string) => {
    setLastClassifiedItem(wasteType);
    setRecentClassifications(prev => {
      const updated = [wasteType, ...prev.filter(item => item.toLowerCase() !== wasteType.toLowerCase())]; // Add to front, remove duplicates (case-insensitive)
      return updated.slice(0, 3); // Keep last 3
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full max-w-6xl mx-auto space-y-10">
        {/* User Stats Panel */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between bg-card/90 backdrop-blur-md rounded-xl shadow-lg p-6 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-bold text-white">
                {user ? user.address.slice(0, 6) + '...' + user.address.slice(-4) : <span>?</span>}
              </div>
              <div>
                <div className="text-lg font-semibold text-foreground">{user ? user.address : "Not Connected"}</div>
                <div className="text-sm text-muted-foreground">Your Wallet</div>
              </div>
            </div>
            <div className="flex gap-6 mt-6 md:mt-0">
              <div className="flex flex-col items-center bg-background/80 rounded-lg px-6 py-3 shadow">
                <span className="text-2xl font-bold text-primary">{stats.points.toLocaleString()}</span>
                <span className="text-xs text-muted-foreground mt-1">Points</span>
              </div>
              <div className="flex flex-col items-center bg-background/80 rounded-lg px-6 py-3 shadow">
                <span className="text-2xl font-bold text-primary">{stats.challengesCompleted}</span>
                <span className="text-xs text-muted-foreground mt-1">Challenges Completed</span>
              </div>
              <div className="flex flex-col items-center bg-background/80 rounded-lg px-6 py-3 shadow">
                <span className="text-2xl font-bold text-primary">{stats.itemsSorted}</span>
                <span className="text-xs text-muted-foreground mt-1">Items Sorted</span>
              </div>
            </div>
          </div>
        </section>
        <section aria-labelledby="region-selection-heading" className="mt-8">
          <h2 id="region-selection-heading" className="text-3xl font-semibold text-center mb-6 text-primary">
            WasteWise Dashboard
          </h2>
          <RegionSelector selectedRegion={currentRegionValue} setSelectedRegion={handleRegionChange} />
          <p className="text-center text-sm text-muted-foreground mt-2">
            Selected region: <strong>{selectedRegion}</strong>. Advice will be tailored accordingly.
          </p>
        </section>

        <Separator />

        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <section aria-labelledby="waste-classifier-heading" className="space-y-6 lg:col-span-2">
             <h2 id="waste-classifier-heading" className="sr-only">Waste Classifier</h2>
            <WasteClassifier 
              selectedRegion={selectedRegion} 
              onClassificationComplete={handleClassificationComplete} 
            />
          </section>
          <div className="space-y-6 lg:col-span-1">
            <section aria-labelledby="educational-info-heading">
              <h2 id="educational-info-heading" className="sr-only">Educational Information</h2>
              <EducationalPanel />
            </section>
            <section aria-labelledby="recent-classifications-heading">
              <h2 id="recent-classifications-heading" className="sr-only">Recent Classifications</h2>
              <RecentClassificationsPanel classifications={recentClassifications} />
            </section>
          </div>
        </div>
      </div>
      <AiChatBubble selectedRegion={selectedRegion} lastClassifiedItem={lastClassifiedItem} />
    </div>
  );
}
