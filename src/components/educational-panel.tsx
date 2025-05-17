
"use client";

import type { FC } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, BarChart3, Leaf, AlertTriangle, TrendingUp } from 'lucide-react'; // Added more icons
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const factsAndStats = [
  {
    type: "fact",
    icon: <Lightbulb className="w-6 h-6 mr-2 text-yellow-400" />,
    title: "Recycling Power 💡",
    content: "Recycling one aluminum can saves enough energy to run a TV for 3 hours. That's a whole movie!",
  },
  {
    type: "stat",
    icon: <BarChart3 className="w-6 h-6 mr-2 text-blue-400" />,
    title: "Daily Waste Footprint 👣",
    content: "The average person generates over 4 pounds (nearly 2kg) of trash every single day.",
  },
  {
    type: "fact",
    icon: <AlertTriangle className="w-6 h-6 mr-2 text-orange-400" />,
    title: "Plastic Bottle Problem 🍼",
    content: "Globally, humans buy a million plastic bottles per minute! Most are not recycled.",
  },
  {
    type: "stat",
    icon: <TrendingUp className="w-6 h-6 mr-2 text-red-400" />,
    title: "E-waste Crisis 📱",
    content: "Electronic waste (e-waste) is the fastest-growing domestic waste stream. Handle with care!",
  },
  {
    type: "fact",
    icon: <Leaf className="w-6 h-6 mr-2 text-green-400" />,
    title: "Composting Magic 🌱",
    content: "Composting organic waste like food scraps can reduce landfill volume by up to 30% and create rich soil.",
  }
];

const focusGlowStyles = "focus-within:ring-2 focus-within:ring-primary focus-within:ring-opacity-75 focus-within:shadow-[0_0_10px_hsl(var(--primary))] transition-all duration-200";


const EducationalPanel: FC = () => {
  const [randomIndex, setRandomIndex] = useState(0);
  
  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * factsAndStats.length));
  }, []);

  const item = factsAndStats[randomIndex];
  
  if(!item) return null;

  return (
    <Card className={cn(
        "w-full shadow-xl rounded-xl bg-card/95 backdrop-blur-sm border-primary/20 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/30",
        focusGlowStyles // Applying to card if it can gain focus, e.g. if it has focusable elements or is made focusable
    )}>
      <CardHeader>
        <div className="flex items-center mb-2">
          {item.icon}
          <CardTitle className="text-xl font-semibold text-primary ml-1">{item.title}</CardTitle>
        </div>
        <CardDescription className="text-sm">Quick Sustainability Insights</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-base text-foreground leading-relaxed">{item.content}</p>
      </CardContent>
    </Card>
  );
};

export default EducationalPanel;
