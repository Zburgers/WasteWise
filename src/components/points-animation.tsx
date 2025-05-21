"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PointsAnimationProps {
  points: number;
  isVisible: boolean;
  onComplete: () => void;
}

export function PointsAnimation({ points, isVisible, onComplete }: PointsAnimationProps) {
  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            y: -40,
            scale: 1,
            transition: {
              duration: 0.7,
              type: "spring",
              stiffness: 200,
              damping: 20
            }
          }}
          exit={{ 
            opacity: 0, 
            y: -80, 
            scale: 0.6,
            transition: {
              duration: 0.5
            }
          }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
        >
          <motion.div 
            className="text-3xl font-bold text-primary px-6 py-3 rounded-full bg-background/95 backdrop-blur-sm shadow-lg border border-primary/20"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(34, 197, 94, 0.2)",
                "0 0 0 10px rgba(34, 197, 94, 0.0)",
                "0 0 0 0 rgba(34, 197, 94, 0)"
              ],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: 0,
              ease: "easeInOut"
            }}
          >
            +{points} points!
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
