export interface ClassificationOutput {
  wasteType: string;
  confidence: number;
}

export interface AdviceOutput {
  advice: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

export const REGIONS = [
  { value: "north_america", label: "North America" },
  { value: "europe", label: "Europe" },
  { value: "asia", label: "Asia" },
  { value: "south_america", label: "South America" },
  { value: "africa", label: "Africa" },
  { value: "oceania", label: "Oceania" },
  { value: "global", label: "Global (Default)" },
];
