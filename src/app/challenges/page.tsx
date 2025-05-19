
"use client";

import { useState, type FC, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Target, CheckCircle, Zap, PlusCircle, Activity, Star, Award, Trophy, GlassWater, ShoppingBag, Apple } from 'lucide-react';
import type { Challenge, UserChallenge } from '@/lib/types';
import LogActionModal from '@/components/log-action-modal'; // We'll create this
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

// Mock Data - In a real app, this would come from a backend
const MOCK_AVAILABLE_CHALLENGES: Challenge[] = [
  { id: 'plastic_bottle_free_week', title: 'Plastic Bottle Free Week', description: 'Avoid using any single-use plastic bottles for 7 days.', icon: GlassWater, category: 'plastic', goal: 7, unit: 'days' },
  { id: 'reusable_bag_hero', title: 'Reusable Bag Hero', description: 'Use reusable bags for all your shopping trips for one week.', icon: ShoppingBag, category: 'plastic', goal: 5, unit: 'shopping trips' },
  { id: 'compost_champion', title: 'Compost Champion', description: 'Compost all your food scraps for 5 consecutive days.', icon: Apple, category: 'food_waste', goal: 5, unit: 'days' },
  { id: 'no_takeout_containers', title: 'No Takeout Waste', description: 'Avoid single-use takeout containers for 3 meals.', icon: Zap, category: 'general', goal: 3, unit: 'meals' },
];

interface ChallengeCardProps {
  challenge: Challenge;
  userChallenge?: UserChallenge;
  onJoinChallenge: (challengeId: string) => void;
  onLogAction: (challenge: UserChallenge) => void;
  isJoined: boolean;
  isActiveTab: boolean;
}

const ChallengeCard: FC<ChallengeCardProps> = ({ challenge, userChallenge, onJoinChallenge, onLogAction, isJoined, isActiveTab }) => {
  const Icon = challenge.icon;
  const progress = userChallenge ? (userChallenge.currentProgress / userChallenge.goal) * 100 : 0;

  return (
    <Card className="w-full shadow-lg hover:shadow-primary/30 transition-shadow duration-300 bg-card/95 backdrop-blur-sm border-primary/20">
      <CardHeader>
        <div className="flex items-center mb-2">
          <Icon className="w-8 h-8 mr-3 text-primary" />
          <CardTitle className="text-xl text-accent">{challenge.title}</CardTitle>
        </div>
        <CardDescription className="text-muted-foreground h-12 overflow-hidden">{challenge.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-sm">
          <p><strong className="text-foreground">Category:</strong> <span className="text-muted-foreground">{challenge.category.replace('_', ' ')}</span></p>
          <p><strong className="text-foreground">Goal:</strong> <span className="text-muted-foreground">{challenge.goal} {challenge.unit}</span></p>
        </div>
        {isJoined && userChallenge && userChallenge.status === 'active' && (
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium text-primary">Progress:</span>
              <span className="text-xs font-medium text-primary">{userChallenge.currentProgress} / {challenge.goal} {challenge.unit}</span>
            </div>
            <Progress value={progress} className="w-full h-2 [&>div]:bg-primary" />
          </div>
        )}
         {isJoined && userChallenge && userChallenge.status === 'completed' && (
          <div className="flex items-center text-green-500">
            <CheckCircle className="w-5 h-5 mr-2" />
            <p className="font-semibold">Challenge Completed!</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        {!isJoined && (
          <Button onClick={() => onJoinChallenge(challenge.id)} className="w-full bg-primary hover:bg-primary/90">
            <PlusCircle className="mr-2" /> Join Challenge
          </Button>
        )}
        {isJoined && userChallenge && userChallenge.status === 'active' && isActiveTab && (
          <Button onClick={() => onLogAction(userChallenge)} className="w-full bg-accent hover:bg-accent/90">
            <Activity className="mr-2" /> Log Action
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};


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
        userId: 'mockUser', // Replace with actual user ID in a real app
        status: 'active',
        currentProgress: 0,
        startDate: new Date(),
      };
      setUserChallenges(prev => [...prev, newUserChallenge]);
      toast({ title: "Challenge Joined!", description: `You've started the "${challengeToJoin.title}" challenge.` });
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
    toast({ title: "Progress Logged!", description: `Your progress for "${selectedChallengeForLog?.title}" has been updated.` });
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
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 bg-card shadow-md">
          {['available', 'active', 'completed'].map(tabValue => (
            <TabsTrigger key={tabValue} value={tabValue} className="py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-200 ease-in-out flex items-center justify-center">
             {getIconForTab(tabValue)} {tabValue.charAt(0).toUpperCase() + tabValue.slice(1)} Challenges
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="available">
          {getFilteredChallenges('available').length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredChallenges('available').map(challenge => (
                <ChallengeCard
                  key={challenge.id}
                  challenge={challenge}
                  onJoinChallenge={handleJoinChallenge}
                  onLogAction={() => {}} // Not applicable here
                  isJoined={false}
                  isActiveTab={activeTab === "available"}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-10">No new challenges available right now, or you've joined them all! Great job!</p>
          )}
        </TabsContent>

        <TabsContent value="active">
           {getFilteredChallenges('active').length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredChallenges('active').map(userChallenge => (
                <ChallengeCard
                  key={userChallenge.id}
                  challenge={userChallenge}
                  userChallenge={userChallenge}
                  onJoinChallenge={() => {}} // Not applicable
                  onLogAction={handleLogAction}
                  isJoined={true}
                  isActiveTab={activeTab === "active"}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-10">You have no active challenges. Why not join one from the "Available" tab?</p>
          )}
        </TabsContent>

        <TabsContent value="completed">
          {getFilteredChallenges('completed').length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredChallenges('completed').map(userChallenge => (
                <ChallengeCard
                  key={userChallenge.id}
                  challenge={userChallenge}
                  userChallenge={userChallenge}
                  onJoinChallenge={() => {}} // Not applicable
                  onLogAction={() => {}} // Not applicable
                  isJoined={true}
                  isActiveTab={activeTab === "completed"}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-10">You haven't completed any challenges yet. Keep up the great work on your active ones!</p>
          )}
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
