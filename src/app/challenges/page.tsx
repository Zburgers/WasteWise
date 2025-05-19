
"use client";

import { useState, type FC, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Target, CheckCircle, Zap, PlusCircle, Activity, Star, Award, Trophy, GlassWater, ShoppingBag, Apple } from 'lucide-react';
import type { Challenge, UserChallenge } from '@/lib/types';
import LogActionModal from '@/components/log-action-modal';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import ChallengeCard from '@/components/challenge-card'; // Updated import

// Mock Data - In a real app, this would come from a backend
const MOCK_AVAILABLE_CHALLENGES: Challenge[] = [
  { id: 'plastic_bottle_free_week', title: 'Plastic Bottle Free Week', description: 'Avoid using any single-use plastic bottles for 7 days.', icon: GlassWater, category: 'plastic', goal: 7, unit: 'days' },
  { id: 'reusable_bag_hero', title: 'Reusable Bag Hero', description: 'Use reusable bags for all your shopping trips for one week.', icon: ShoppingBag, category: 'plastic', goal: 5, unit: 'shopping trips' },
  { id: 'compost_champion', title: 'Compost Champion', description: 'Compost all your food scraps for 5 consecutive days.', icon: Apple, category: 'food_waste', goal: 5, unit: 'days' },
  { id: 'no_takeout_containers', title: 'No Takeout Waste', description: 'Avoid single-use takeout containers for 3 meals.', icon: Zap, category: 'general', goal: 3, unit: 'meals' },
];


export default function ChallengesPage() {
  const { toast } = useToast();
  const [availableChallenges, setAvailableChallenges] = useState<Challenge[]>(MOCK_AVAILABLE_CHALLENGES);
  const [userChallenges, setUserChallenges] = useState<UserChallenge[]>([]);
  const [selectedChallengeForLog, setSelectedChallengeForLog] = useState<UserChallenge | null>(null);
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("available");


  const handleJoinChallenge = (challengeId: string) => {
    const challengeToJoin = availableChallenges.find(c => c.id === challengeId);
    if (challengeToJoin && !userChallenges.some(uc => uc.id === challengeId)) {
      const newUserChallenge: UserChallenge = {
        ...challengeToJoin,
        userId: 'mockUser', 
        status: 'active',
        currentProgress: 0,
        startDate: new Date(),
      };
      setUserChallenges(prev => [...prev, newUserChallenge]);
      toast({ title: "Challenge Joined!", description: `You've started the "${challengeToJoin.title}" challenge.`, className: "bg-accent text-accent-foreground border-accent/50" });
    }
  };

  const handleLogAction = (challenge: UserChallenge) => {
    setSelectedChallengeForLog(challenge);
    setIsLogModalOpen(true);
  };
  
  const handleSaveLog = (challengeId: string, progressIncrement: number) => {
    setUserChallenges(prevUserChallenges =>
      prevUserChallenges.map(uc => {
        if (uc.id === challengeId) {
          const newProgress = Math.min(uc.currentProgress + progressIncrement, uc.goal);
          let newStatus = uc.status;
          if (newProgress >= uc.goal) {
            newStatus = 'completed';
            toast({
              title: "Challenge Completed!",
              description: `Congratulations on completing "${uc.title}"!`,
              variant: "default",
              className: "bg-green-600 border-green-700 text-white"
            });
          }
          return { ...uc, currentProgress: newProgress, status: newStatus, completedDate: newStatus === 'completed' ? new Date() : uc.completedDate };
        }
        return uc;
      })
    );
    toast({ title: "Progress Logged!", description: `Your progress for "${selectedChallengeForLog?.title}" has been updated.`, className: "bg-primary/80 text-primary-foreground border-primary/50" });
  };


  const getFilteredChallenges = (status: 'available' | 'active' | 'completed') => {
    if (status === 'available') {
      return availableChallenges.filter(ac => !userChallenges.some(uc => uc.id === ac.id));
    }
    return userChallenges.filter(uc => uc.status === status);
  };

  const getIconForTab = (tabValue: string) => {
    switch(tabValue) {
      case 'available': return <Target className="w-5 h-5 mr-2" />;
      case 'active': return <Activity className="w-5 h-5 mr-2" />;
      case 'completed': return <Trophy className="w-5 h-5 mr-2" />;
      default: return <Star className="w-5 h-5 mr-2" />;
    }
  }

  const renderContentForTab = (status: 'available' | 'active' | 'completed', noItemsMessage: string) => {
    const challengesToDisplay = status === 'available' ? getFilteredChallenges('available') : userChallenges.filter(uc => uc.status === status);
    
    return (
      <div className="bg-card/90 backdrop-blur-sm p-6 rounded-lg mt-2 min-h-[300px]">
        {challengesToDisplay.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challengesToDisplay.map(challenge => (
              <ChallengeCard
                key={challenge.id}
                challenge={challenge} // UserChallenge extends Challenge, so this is fine
                userChallengeData={status !== 'available' ? challenge as UserChallenge : undefined}
                onJoin={status === 'available' ? handleJoinChallenge : undefined}
                onLogAction={status === 'active' ? handleLogAction : undefined}
                isJoined={status !== 'available'}
                isActiveChallengeTab={activeTab === status && status === 'active'}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-10 text-lg">{noItemsMessage}</p>
        )}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">
          Waste Reduction Challenges
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Join challenges, track your progress, and make a real impact! Every small action counts towards a greener planet.
        </p>
      </header>

      <Tabs defaultValue="available" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 bg-card shadow-md p-1 rounded-lg">
          {['available', 'active', 'completed'].map(tabValue => (
            <TabsTrigger
              key={tabValue} 
              value={tabValue} 
              className="py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-md transition-all duration-200 ease-in-out flex items-center justify-center"
            >
             {getIconForTab(tabValue)} {tabValue.charAt(0).toUpperCase() + tabValue.slice(1)} Challenges
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="available">
          {renderContentForTab('available', "No new challenges available right now, or you've joined them all! Great job!")}
        </TabsContent>

        <TabsContent value="active">
           {renderContentForTab('active', 'You have no active challenges. Why not join one from the "Available" tab?')}
        </TabsContent>

        <TabsContent value="completed">
          {renderContentForTab('completed', "You haven't completed any challenges yet. Keep up the great work on your active ones!")}
        </TabsContent>
      </Tabs>

      {selectedChallengeForLog && (
        <LogActionModal
          isOpen={isLogModalOpen}
          setIsOpen={setIsLogModalOpen}
          challenge={selectedChallengeForLog}
          onSave={handleSaveLog}
        />
      )}
    </div>
  );
}
