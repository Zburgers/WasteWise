"use client";

import { useCallback, useEffect, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

interface ConfettiCelebrationProps {
  fire: boolean;
}

export function ConfettiCelebration({ fire }: ConfettiCelebrationProps) {
  const refAnimationInstance = useRef<any>(null);

  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio: number, opts: any) => {
    refAnimationInstance.current?.({
      ...opts,
      origin: { y: 0.7 },
      particleCount: Math.floor(200 * particleRatio),
    });
  }, []);

  const fireConfetti = useCallback(() => {
    // Create multiple bursts with slight delays for a more dynamic effect
    setTimeout(() => {
      makeShot(0.25, {
        spread: 26,
        startVelocity: 55,
        colors: ['#4CAF50', '#8BC34A', '#CDDC39', '#FFD700', '#FFA500']
      });
    }, 0);

    setTimeout(() => {
      makeShot(0.2, {
        spread: 60,
        colors: ['#2E7D32', '#1B5E20', '#43A047', '#66BB6A', '#81C784']
      });
    }, 200);

    setTimeout(() => {
      makeShot(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
        colors: ['#388E3C', '#1B5E20', '#43A047', '#66BB6A', '#81C784']
      });
    }, 400);

    setTimeout(() => {
      makeShot(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
        colors: ['#4CAF50', '#8BC34A', '#CDDC39', '#FFD700', '#FFA500']
      });
    }, 600);
  }, [makeShot]);

  useEffect(() => {
    if (fire) {
      fireConfetti();
      
      // Add multiple bursts of confetti for a more celebratory effect
      const timers = [
        setTimeout(() => fireConfetti(), 300),
        setTimeout(() => fireConfetti(), 700),
        setTimeout(() => fireConfetti(), 1200)
      ];
      
      return () => {
        timers.forEach(timer => clearTimeout(timer));
      };
    }
  }, [fire, fireConfetti]);

  return (
    <ReactCanvasConfetti
      onInit={getInstance}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 100
      }}
    />
  );
}
