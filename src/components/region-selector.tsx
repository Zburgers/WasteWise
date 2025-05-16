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

interface RegionSelectorProps {
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
}

const RegionSelector: FC<RegionSelectorProps> = ({ selectedRegion, setSelectedRegion }) => {
  return (
    <div className="w-full max-w-xs mx-auto space-y-2">
      <Label htmlFor="region-select" className="text-sm font-medium text-foreground">Select Your Region:</Label>
      <Select value={selectedRegion} onValueChange={setSelectedRegion}>
        <SelectTrigger id="region-select" className="w-full bg-card">
          <SelectValue placeholder="Select region" />
        </SelectTrigger>
        <SelectContent>
          {REGIONS.map((region) => (
            <SelectItem key={region.value} value={region.value}>
              {region.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default RegionSelector;
