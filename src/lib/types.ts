
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

// New types for Challenges feature
export interface Challenge {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType; // Lucide icon component
  category: string; // e.g., 'plastic', 'food_waste', 'general'
  goal: number; // e.g., 7 (days), 10 (items)
  unit: string; // e.g., 'days', 'items avoided', 'actions'
  durationDays?: number; // Optional: for time-based challenges
}

export interface UserChallenge extends Challenge {
  userId: string; // Or some user identifier
  status: 'available' | 'active' | 'completed';
  currentProgress: number;
  startDate?: Date;
  completedDate?: Date;
}
