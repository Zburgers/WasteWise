"use client";

import { useState, type FC, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Target, CheckCircle, Zap, PlusCircle, Activity, Star, Award, Trophy, GlassWater, ShoppingBag, Apple, Recycle } from 'lucide-react';
import type { Challenge, UserChallenge } from '@/lib/types';
import LogActionModal from '@/components/log-action-modal';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import ChallengeCard from '@/components/challenge-card';
import Link from 'next/link';

// Mock Data - In a real app, this would come from a backend
const MOCK_AVAILABLE_CHALLENGES: Challenge[] = [
  { id: 'plastic_bottle_free_week', title: 'Plastic Bottle Free Week', description: 'Avoid using any single-use plastic bottles for 7 days.', icon: GlassWater, category: 'plastic', goal: 7, unit: 'days' },
  { id: 'reusable_bag_hero', title: 'Reusable Bag Hero', description: 'Use reusable bags for all your shopping trips for one week.', icon: ShoppingBag, category: 'plastic', goal: 5, unit: 'shopping trips' },
  { id: 'compost_champion', title: 'Compost Champion', description: 'Compost all your food scraps for 5 consecutive days.', icon: Apple, category: 'food_waste', goal: 5, unit: 'days' },
  { id: 'no_takeout_containers', title: 'No Takeout Waste', description: 'Avoid single-use takeout containers for 3 meals.', icon: Zap, category: 'general', goal: 3, unit: 'meals' },
  { id: 'recycling_master', title: 'Recycling Master', description: 'Properly sort and recycle 15 items according to local guidelines.', icon: Recycle, category: 'recycling', goal: 15, unit: 'items' },
  { id: 'energy_saver', title: 'Energy Saver', description: 'Reduce your energy consumption by turning off unused electronics for a week.', icon: Target, category: 'energy', goal: 7, unit: 'days' },
  { id: 'water_conservation', title: 'Water Guardian', description: 'Track and reduce your water usage by 20% for 5 days.', icon: CheckCircle, category: 'water', goal: 5, unit: 'days' },
  { id: 'zero_waste_weekend', title: 'Zero Waste Weekend', description: 'Go an entire weekend without creating any landfill waste.', icon: Award, category: 'general', goal: 1, unit: 'weekend' },
];

export default function ChallengesPage() {
  const { toast } = useToast();
  const [availableChallenges, setAvailableChallenges] = useState<Challenge[]>(MOCK_AVAILABLE_CHALLENGES);
  const [userChallenges, setUserChallenges] = useState<UserChallenge[]>([]);
  const [selectedChallengeForLog, setSelectedChallengeForLog] = useState<UserChallenge | null>(null);
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("available");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  // Get unique categories from all challenges
  const availableCategories = ["all", ...new Set(MOCK_AVAILABLE_CHALLENGES.map(c => c.category))];

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
    let completedChallenge: UserChallenge | null = null;
    
    setUserChallenges(prevUserChallenges =>
      prevUserChallenges.map(uc => {
        if (uc.id === challengeId) {
          const newProgress = Math.min(uc.currentProgress + progressIncrement, uc.goal);
          let newStatus = uc.status;
          if (newProgress >= uc.goal) {
            newStatus = 'completed';
            completedChallenge = { ...uc, currentProgress: newProgress, status: newStatus, completedDate: new Date() };
          }
          return { ...uc, currentProgress: newProgress, status: newStatus, completedDate: newStatus === 'completed' ? new Date() : uc.completedDate };
        }
        return uc;
      })
    );

    // Show progress toast
    toast({ 
      title: "Progress Logged!", 
      description: `Your progress for "${selectedChallengeForLog?.title}" has been updated.`, 
      className: "bg-primary/80 text-primary-foreground border-primary/50" 
    });

    // Show completion toast if challenge was completed
    if (completedChallenge) {
      toast({
        title: "Challenge Completed!",
        description: `Congratulations on completing "${completedChallenge.title}"!`,
        variant: "default",
        className: "bg-green-600 border-green-700 text-white"
      });
    }
  };

  const getFilteredChallenges = (status: 'available' | 'active' | 'completed') => {
    if (status === 'available') {
      let filtered = availableChallenges.filter(ac => !userChallenges.some(uc => uc.id === ac.id));
      // Apply category filter if not "all"
      if (categoryFilter !== "all") {
        filtered = filtered.filter(c => c.category === categoryFilter);
      }
      return filtered;
    }
    let result = userChallenges.filter(uc => uc.status === status);
    // Apply category filter if not "all" and on active tab
    if (categoryFilter !== "all" && status === 'active') {
      result = result.filter(c => c.category === categoryFilter);
    }
    return result;
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
    const challengesToDisplay = getFilteredChallenges(status);
    
    return (
      <div className="bg-[#0d1526] backdrop-blur-sm p-6 rounded-lg mt-2 min-h-[300px]">
        {/* Category filters for available and active tabs */}
        {(status === 'available' || status === 'active') && (
          <div className="mb-6 bg-[#14223b] p-4 rounded-lg">
            <div className="flex items-center flex-wrap">
              <h3 className="text-sm font-medium mr-3 text-white mb-2">Filter by Category:</h3>
              <div className="flex flex-wrap gap-2">
                {availableCategories.map((category) => (
                  <Button 
                    key={category} 
                    onClick={() => setCategoryFilter(category)} 
                    variant={categoryFilter === category ? "default" : "outline"}
                    size="sm"
                    className={
                      categoryFilter === category 
                        ? "bg-[#22abf3] text-white hover:bg-[#22abf3]/90 border-none flex items-center h-9 py-0" 
                        : "bg-transparent hover:bg-[#22abf3]/10 text-white border border-[#49597a] hover:border-[#22abf3] flex items-center h-9 py-0"
                    }
                  >
                    {category === 'all' ? 'All' : category.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {challengesToDisplay.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challengesToDisplay.map(challenge => (
              <ChallengeCard
                key={challenge.id}
                challenge={challenge}
                userChallengeData={status !== 'available' ? challenge as UserChallenge : undefined}
                onJoin={status === 'available' ? handleJoinChallenge : undefined}
                onLogAction={status === 'active' ? handleLogAction : undefined}
                isJoined={status !== 'available'}
                isActiveChallengeTab={activeTab === status && status === 'active'}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-300 py-10 text-lg">{noItemsMessage}</p>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center text-white overflow-x-hidden bg-[#0c1424]">
      {/* Hero Banner */}
      <section className="w-full py-12 md:py-16 bg-[#0c1424] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 -z-10">
          {/* Decorative background shapes */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">Environmental Challenges</h1>
          <p className="max-w-[700px] mx-auto text-gray-300 text-lg mb-6">
            Join challenges, track your progress, and make a real difference in the world while earning badges.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/leaderboard" className="inline-flex">
              <Button variant="outline" className="border-[#49597a] text-white hover:bg-[#22abf3] hover:text-white hover:border-[#22abf3]">
                <Trophy className="mr-2 h-5 w-5" /> View Leaderboard
              </Button>
            </Link>
            <Link href="/badges" className="inline-flex">
              <Button variant="outline" className="border-[#49597a] text-white hover:bg-[#22abf3] hover:text-white hover:border-[#22abf3]">
                <Award className="mr-2 h-5 w-5" /> Your Badges
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto p-4 pb-12">
        <Tabs defaultValue="available" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 bg-[#14223b] shadow-md p-1 rounded-lg">
            {['available', 'active', 'completed'].map(tabValue => (
              <TabsTrigger
                key={tabValue} 
                value={tabValue} 
                className="h-12 text-base px-6 py-3 rounded-md flex items-center justify-center font-semibold transition-all duration-200 ease-in-out data-[state=active]:bg-[#22abf3] data-[state=active]:text-white data-[state=active]:shadow-lg"
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
      
      {/* Stats Section */}
      {userChallenges.length > 0 && (
        <div className="mt-12 bg-[#14223b] rounded-xl p-6 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-white mb-4">Your Impact Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0d1526] p-4 rounded-lg shadow-md border border-[#49597a]">
              <h3 className="text-lg font-medium text-[#22abf3] mb-2">Active Challenges</h3>
              <p className="text-2xl font-bold text-white">{userChallenges.filter(c => c.status === 'active').length}</p>
            </div>
            <div className="bg-[#0d1526] p-4 rounded-lg shadow-md border border-[#49597a]">
              <h3 className="text-lg font-medium text-[#22abf3] mb-2">Completed Challenges</h3>
              <p className="text-2xl font-bold text-white">{userChallenges.filter(c => c.status === 'completed').length}</p>
            </div>
            <div className="bg-[#0d1526] p-4 rounded-lg shadow-md border border-[#49597a]">
              <h3 className="text-lg font-medium text-[#22abf3] mb-2">Total Actions</h3>
              <p className="text-2xl font-bold text-white">{userChallenges.reduce((sum, challenge) => sum + (challenge.currentProgress || 0), 0)}</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Tips & Motivation Section */}
      <div className="mt-12 bg-[#14223b] rounded-xl p-6 shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-[#22abf3] mb-2">Why Challenges Matter</h2>
            <p className="text-gray-300">
              Every small action adds up to create a significant environmental impact. By completing these challenges,
              you're not just earning badges – you're helping reduce waste, conserve resources, and protect our planet.
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-[#22abf3] mb-2">Tips for Success</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Start with simpler challenges to build momentum</li>
              <li>Track your progress daily to stay motivated</li>
              <li>Share your journey with friends to inspire others</li>
              <li>Remember that consistency is more important than perfection</li>
            </ul>
          </div>
        </div>
      </div>

      {selectedChallengeForLog && (
        <LogActionModal
          isOpen={isLogModalOpen}
          setIsOpen={setIsLogModalOpen}
          challenge={selectedChallengeForLog}
          onSave={handleSaveLog}
        />
      )}
    </div>
  </div>
  );
}
