
"use client";

import type { FC } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { REGIONS } from "@/lib/types";
import { cn } from "@/lib/utils";

interface RegionSelectorProps {
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
}

const focusGlowStyles = "focus:ring-2 focus:ring-primary focus:ring-opacity-75 focus:shadow-[0_0_10px_hsl(var(--primary))] transition-all duration-200";

const RegionSelector: FC<RegionSelectorProps> = ({ selectedRegion, setSelectedRegion }) => {
  return (
    <div className="w-full max-w-xs mx-auto space-y-2">
      <Label htmlFor="region-select" className="text-sm font-medium text-foreground">Select Your Region:</Label>
      <Select value={selectedRegion} onValueChange={setSelectedRegion}>
        <SelectTrigger id="region-select" className={cn("w-full bg-card/95 backdrop-blur-sm", focusGlowStyles)}>
          <SelectValue placeholder="Select region" />
        </SelectTrigger>
        <SelectContent className="bg-card/95 backdrop-blur-md">
          {REGIONS.map((region) => (
            <SelectItem key={region.value} value={region.value} className={cn("focus:bg-primary/20", focusGlowStyles)}>
              {region.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default RegionSelector;
