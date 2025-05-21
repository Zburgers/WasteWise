// This was the old src/app/page.tsx, now moved to /dashboard
"use client";

import { useState, useEffect } from 'react';
import RegionSelector from "@/components/region-selector";
import WasteClassifier from "@/components/waste-classifier";
import AiChatBubble from "@/components/ai-chat-bubble"; 
import EducationalPanel from "@/components/educational-panel";
import RecentClassificationsPanel from "@/components/recent-classifications-panel";
import { ConfettiCelebration } from "@/components/confetti-celebration";
import { REGIONS } from "@/lib/types";
import { Separator } from '@/components/ui/separator';
import { useWeb3Auth } from "@/hooks/useWeb3Auth";
import { useUserStats } from "@/hooks/useUserStats";
import { Progress } from "@/components/ui/progress";
import { PointsAnimation } from "@/components/points-animation";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "@/components/ui/use-toast";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { staggerContainer, fadeInUp, progressAnimation, countAnimation, pageTransition, cardHover, pulseAnimation, listItemAnimation } from "@/lib/animation-variants";

const LEVELS = [
  { name: "Beginner", requiredPoints: 0 },
  { name: "Eco Enthusiast", requiredPoints: 100 },
  { name: "Green Guardian", requiredPoints: 500 },
  { name: "Waste Warrior", requiredPoints: 1000 },
  { name: "Eco Master", requiredPoints: 2000 }
];

export default function DashboardPage() {
  const [selectedRegion, setSelectedRegion] = useState<string>(REGIONS.find(r => r.value === "global")?.label || "Global (Default)");
  const [lastClassifiedItem, setLastClassifiedItem] = useState<string | null>(null);
  const [recentClassifications, setRecentClassifications] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const { user } = useWeb3Auth();
  const { stats, isLoading, updateStats } = useUserStats();
  const [showPointsAnimation, setShowPointsAnimation] = useState(false);
  const [pointsToShow, setPointsToShow] = useState(0);
  const [previousPoints, setPreviousPoints] = useState(0);
  
  // Initialize previousPoints with the initial stats value once loaded
  useEffect(() => {
    if (!isLoading && stats.points > 0 && previousPoints === 0) {
      setPreviousPoints(stats.points);
    }
  }, [isLoading, stats.points, previousPoints]);
  const [streak, setStreak] = useState<number>(0);
  const [lastClassificationDate, setLastClassificationDate] = useState<Date | null>(null);

  // Calculate level and progress
  const getCurrentLevel = (points: number) => {
    for (let i = LEVELS.length - 1; i >= 0; i--) {
      if (points >= LEVELS[i].requiredPoints) {
        return {
          current: LEVELS[i],
          next: LEVELS[i + 1],
          progress: i < LEVELS.length - 1 
            ? ((points - LEVELS[i].requiredPoints) / (LEVELS[i + 1].requiredPoints - LEVELS[i].requiredPoints)) * 100
            : 100
        };
      }
    }
    return { current: LEVELS[0], next: LEVELS[1], progress: 0 };
  };

  const levelInfo = getCurrentLevel(stats.points);

  const handleRegionChange = (regionValue: string) => {
    const region = REGIONS.find(r => r.value === regionValue);
    setSelectedRegion(region ? region.label : "Global (Default)");
  };
  
  const currentRegionValue = REGIONS.find(r => r.label === selectedRegion)?.value || "global";

  const handleClassificationComplete = async (wasteType: string) => {
    setLastClassifiedItem(wasteType);
    setRecentClassifications(prev => {
      const updated = [wasteType, ...prev.filter(item => item.toLowerCase() !== wasteType.toLowerCase())];
      return updated.slice(0, 3);
    });
    
    // Update streak
    updateStreak(new Date());
    
    // Update stats after classification
    await updateStats();
  };

  const updateStreak = (currentDate: Date) => {
    if (!lastClassificationDate) {
      setStreak(1);
    } else {
      const previousDate = new Date(lastClassificationDate);
      const diffDays = Math.floor((currentDate.getTime() - previousDate.getTime()) / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) {
        setStreak(prev => prev + 1);
        // Celebrate streak milestones
        if ((streak + 1) % 5 === 0) {
          toast({
            title: "🔥 Streak Milestone!",
            description: `You've maintained a ${streak + 1} day streak! Keep it up!`,
            className: "bg-orange-600 text-white border-orange-700",
            duration: 4000,
          });
        }
      } else if (diffDays > 1) {
        setStreak(1);
      }
    }
    setLastClassificationDate(currentDate);
  };

  useEffect(() => {
    // Only show animation when there's an actual increase in points and not on initial load
    if (stats.points > previousPoints && previousPoints > 0) {
      setPointsToShow(stats.points - previousPoints);
      setShowPointsAnimation(true);

      // Check for level up
      const previousLevel = getCurrentLevel(previousPoints);
      const currentLevel = getCurrentLevel(stats.points);
      
      if (currentLevel.current.name !== previousLevel.current.name) {
        // Level up celebration
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000); // Reset after 5 seconds
        
        toast({
          title: "🎉 Level Up!",
          description: `Congratulations! You've reached ${currentLevel.current.name} level!`,
          className: "bg-green-600 text-white border-green-700",
          duration: 5000,
        });
        
        // Play celebration sound
        const audio = new Audio("/static/level-up.mp3");
        audio.play().catch(e => console.log('Audio play failed:', e));
      }
    }
    setPreviousPoints(stats.points);
  }, [stats.points, previousPoints]);

  // Format wallet address for display
  const formatAddress = (address?: string) => {
    if (!address) return "Not Connected";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <motion.div 
      className="container mx-auto px-4 py-8"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ConfettiCelebration fire={showConfetti} />
      <PointsAnimation 
        points={pointsToShow}
        isVisible={showPointsAnimation}
        onComplete={() => setShowPointsAnimation(false)}
      />
      <motion.div 
        className="w-full max-w-6xl mx-auto space-y-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* User Stats Panel */}
        <motion.section 
          className="mb-8"
          variants={fadeInUp}
        >
          <div className="flex flex-col md:flex-row items-center justify-between bg-card/90 backdrop-blur-md rounded-xl shadow-lg p-6 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 overflow-hidden rounded-full flex-shrink-0">
                <Avatar className="h-full w-full">
                  <AvatarImage src={user?.profileImage} alt="Profile" />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-accent flex flex-col items-center justify-center text-white p-1 text-center text-xs">
                    {user ? (
                      <>
                        {user.address.slice(0, 2).toUpperCase()}
                        <span className="block text-[10px]">{formatAddress(user.address)}</span>
                      </>
                    ) : (
                      "WW"
                    )}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-col gap-1 flex-grow min-w-0">
                <div className="text-sm text-muted-foreground">Your Wallet</div>
                <div className="text-lg font-semibold text-foreground truncate">
                  {formatAddress(user?.address)}
                </div>
                
                <div className="flex flex-col gap-1.5 mt-1">
                  {user ? (
                    <>
                      <div className="text-sm font-medium text-primary">{levelInfo.current.name}</div>
                      <div className="w-full">
                        <motion.div className="relative h-2 w-full bg-muted overflow-hidden rounded-full">
                          <motion.div
                            className="h-full bg-primary"
                            initial={{ width: 0 }}
                            animate={{ width: `${levelInfo.progress}%` }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                          />
                        </motion.div>
                      </div>
                      {levelInfo.next && (
                        <motion.div 
                          className="text-xs text-muted-foreground"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {stats.points} / {levelInfo.next.requiredPoints} points to {levelInfo.next.name}
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <div className="text-sm text-muted-foreground">Connect wallet to see stats</div>
                  )}
                </div>
              </div>
            </div>
            {user && ( // Only show stats boxes if user is connected
              <div className="flex gap-6 mt-6 md:mt-0">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center bg-background/80 rounded-lg px-6 py-3 shadow hover:shadow-lg transition-all duration-200"
                >
                  <span className="text-2xl font-bold text-primary">
                    {isLoading ? "..." : (
                      <motion.span
                        key={stats.points}
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 10 
                        }}
                      >
                        {stats.points.toLocaleString()}
                      </motion.span>
                    )}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">Points</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center bg-background/80 rounded-lg px-6 py-3 shadow hover:shadow-lg transition-all duration-200"
                >
                  <span className="text-2xl font-bold text-primary">
                    {isLoading ? "..." : (
                      <motion.span
                        key={stats.challengesCompleted}
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 10 
                        }}
                      >
                        {stats.challengesCompleted}
                      </motion.span>
                    )}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">Challenges</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center bg-background/80 rounded-lg px-6 py-3 shadow hover:shadow-lg transition-all duration-200"
                >
                  <span className="text-2xl font-bold text-primary">
                    {isLoading ? "..." : (
                      <motion.span
                        key={stats.itemsSorted}
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 10 
                        }}
                      >
                        {stats.itemsSorted}
                      </motion.span>
                    )}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">Items Sorted</span>
                </motion.div>
                {/* Streak Stat */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center bg-background/80 rounded-lg px-6 py-3 shadow hover:shadow-lg transition-all duration-200"
                >
                  <span className="text-2xl font-bold text-primary">
                    {isLoading ? "..." : (
                      <motion.span
                        key={stats.currentStreak}
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 10 
                        }}
                      >
                        {stats.currentStreak}
                      </motion.span>
                    )}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">Day Streak 🔥</span>
                </motion.div>
              </div>
            )}
          </div>
        </motion.section>
        <motion.section 
          aria-labelledby="region-selection-heading" 
          className="mt-8"
          variants={fadeInUp}
        >
          <motion.h2 
            id="region-selection-heading" 
            className="text-3xl font-semibold text-center mb-6 text-primary"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            WasteWise Dashboard
          </motion.h2>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <RegionSelector selectedRegion={currentRegionValue} setSelectedRegion={handleRegionChange} />
          </motion.div>
          <motion.p 
            className="text-center text-sm text-muted-foreground mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Selected region: <strong>{selectedRegion}</strong>. Advice will be tailored accordingly.
          </motion.p>
        </motion.section>

        <Separator />

        <motion.div 
          className="grid lg:grid-cols-3 gap-10 items-start"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.section 
            aria-labelledby="waste-classifier-heading" 
            className="space-y-6 lg:col-span-2"
            variants={fadeInUp}
          >
             <h2 id="waste-classifier-heading" className="sr-only">Waste Classifier</h2>
            <WasteClassifier 
              selectedRegion={selectedRegion} 
              onClassificationComplete={handleClassificationComplete} 
            />
          </motion.section>
          <motion.div 
            className="space-y-6 lg:col-span-1"
            variants={staggerContainer}
          >
            <motion.section 
              aria-labelledby="educational-info-heading"
              variants={fadeInUp}
            >
              <h2 id="educational-info-heading" className="sr-only">Educational Information</h2>
              <EducationalPanel />
            </motion.section>
            <motion.section 
              aria-labelledby="recent-classifications-heading"
              variants={fadeInUp}
            >
              <h2 id="recent-classifications-heading" className="sr-only">Recent Classifications</h2>
              <RecentClassificationsPanel classifications={recentClassifications} />
            </motion.section>
          </motion.div>
        </motion.div>
      </motion.div>
      <AiChatBubble selectedRegion={selectedRegion} lastClassifiedItem={lastClassifiedItem} />
    </motion.div>
  );
}
