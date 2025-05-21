"use client";

import type { FC } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks, History } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, listItemAnimation } from '@/lib/animation-variants';

interface RecentClassificationsPanelProps {
  classifications: string[];
}

const focusGlowStyles = "focus-within:ring-2 focus-within:ring-primary focus-within:ring-opacity-75 focus-within:shadow-[0_0_10px_hsl(var(--primary))] transition-all duration-200";

const RecentClassificationsPanel: FC<RecentClassificationsPanelProps> = ({ classifications }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className={cn(
          "w-full shadow-xl rounded-xl bg-card/95 backdrop-blur-sm border-secondary/30 transform transition-all duration-300 hover:shadow-secondary/30",
          focusGlowStyles
      )}>
        <CardHeader>
          <motion.div 
            className="flex items-center mb-1"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <History className="w-6 h-6 mr-2 text-secondary-foreground" />
            <CardTitle className="text-xl font-semibold text-secondary-foreground">Recently Classified</CardTitle>
          </motion.div>
          <CardDescription className="text-sm">Your last few classified items.</CardDescription>
        </CardHeader>
        <CardContent>
          {classifications.length === 0 ? (
            <motion.p 
              className="text-sm text-muted-foreground italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              No classifications yet. Upload an image to get started!
            </motion.p>
          ) : (
            <motion.ul 
              className="space-y-2"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {classifications.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center text-base text-foreground bg-muted/30 p-2 rounded-md shadow-sm"
                  variants={listItemAnimation}
                  whileHover={{ 
                    scale: 1.03,
                    backgroundColor: "rgba(var(--accent), 0.1)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ListChecks className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RecentClassificationsPanel;
