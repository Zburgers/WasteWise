"use client";

import type { FC } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, BarChart3 } from 'lucide-react';

const factsAndStats = [
  {
    type: "fact",
    icon: <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />,
    title: "Recycling Fact",
    content: "Recycling one aluminum can saves enough energy to run a TV for 3 hours.",
  },
  {
    type: "stat",
    icon: <BarChart3 className="w-5 h-5 mr-2 text-blue-500" />,
    title: "Waste Statistic",
    content: "The average person generates over 4 pounds of trash every day.",
  },
  {
    type: "fact",
    icon: <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />,
    title: "Plastic Fact",
    content: "Americans use 2.5 million plastic bottles every hour! Most of them are thrown away.",
  },
  {
    type: "stat",
    icon: <BarChart3 className="w-5 h-5 mr-2 text-blue-500" />,
    title: "E-waste Stat",
    content: "Electronic waste (e-waste) is the fastest-growing waste stream in the world.",
  },
  {
    type: "fact",
    icon: <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />,
    title: "Composting Fact",
    content: "Composting organic waste can reduce landfill volume by up to 30%.",
  }
];

// Simple component to display one random fact/stat
const EducationalPanel: FC = () => {
  // Pick a random fact or stat to display.
  // This will run on client so it's okay. If it were server component, Math.random() would be an issue.
  const [randomIndex, setRandomIndex] = useState(0);
  
  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * factsAndStats.length));
  }, []);

  const item = factsAndStats[randomIndex];
  
  if(!item) return null; // Should not happen if factsAndStats is not empty

  return (
    <Card className="w-full shadow-lg rounded-xl bg-card">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-primary flex items-center">
          {item.icon} {item.title}
        </CardTitle>
        <CardDescription>Did you know?</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-base text-foreground">{item.content}</p>
      </CardContent>
    </Card>
  );
};

// Need to import useState and useEffect
import { useState, useEffect } from 'react';
export default EducationalPanel;
