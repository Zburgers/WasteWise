
"use client";

import type { FC } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks, History } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RecentClassificationsPanelProps {
  classifications: string[];
}

const focusGlowStyles = "focus-within:ring-2 focus-within:ring-primary focus-within:ring-opacity-75 focus-within:shadow-[0_0_10px_hsl(var(--primary))] transition-all duration-200";

const RecentClassificationsPanel: FC<RecentClassificationsPanelProps> = ({ classifications }) => {
  return (
    <Card className={cn(
        "w-full shadow-xl rounded-xl bg-card/95 backdrop-blur-sm border-secondary/30 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-secondary/30",
        focusGlowStyles
    )}>
      <CardHeader>
        <div className="flex items-center mb-1">
          <History className="w-6 h-6 mr-2 text-secondary-foreground" />
          <CardTitle className="text-xl font-semibold text-secondary-foreground">Recently Classified</CardTitle>
        </div>
        <CardDescription className="text-sm">Your last few classified items.</CardDescription>
      </CardHeader>
      <CardContent>
        {classifications.length === 0 ? (
          <p className="text-sm text-muted-foreground italic">No classifications yet. Upload an image to get started!</p>
        ) : (
          <ul className="space-y-2">
            {classifications.map((item, index) => (
              <li key={index} className="flex items-center text-base text-foreground bg-muted/30 p-2 rounded-md shadow-sm">
                <ListChecks className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentClassificationsPanel;
