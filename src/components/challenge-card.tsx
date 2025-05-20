
"use client";

import type { FC } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PlusCircle, Activity, CheckCircle, Sparkles, Target, Calendar, Trophy, Share } from 'lucide-react';
import type { Challenge, UserChallenge } from '@/lib/types'; // Assuming types are defined here
import { cn } from '@/lib/utils';


interface ChallengeCardProps {
  challenge: Challenge; // Base challenge data
  userChallengeData?: UserChallenge; // User's specific progress on this challenge
  onJoin?: (challengeId: string) => void;
  onLogAction?: (challenge: UserChallenge) => void;
  isJoined: boolean;
  isActiveChallengeTab: boolean; // To know if we are on the "Active Challenges" tab
}

const ChallengeCard: FC<ChallengeCardProps> = ({
  challenge,
  userChallengeData,
  onJoin,
  onLogAction,
  isJoined,
  isActiveChallengeTab
}) => {
  const IconComponent = challenge.icon;
  const progressPercent = userChallengeData?.currentProgress && challenge.goal > 0
    ? (userChallengeData.currentProgress / challenge.goal) * 100
    : 0;

  const currentProgressDisplay = userChallengeData?.currentProgress ?? 0;

  return (
    <Card className={cn(
      "w-full flex flex-col shadow-xl rounded-xl overflow-hidden transition-all duration-300 text-white",
      userChallengeData?.status === 'completed' 
        ? 'border-green-500/70 bg-gradient-to-br from-green-500/5 to-green-500/10 hover:shadow-green-500/30' 
        : 'border-[#49597a] bg-[#14223b] hover:shadow-[0_5px_20px_0px_rgba(34,171,243,0.3)]',
      "transform hover:-translate-y-1"
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center mb-2">
            <div className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center",
              userChallengeData?.status === 'completed' 
                ? 'bg-green-500/20' 
                : 'bg-primary/20'
            )}>
              <IconComponent className={cn(
                "w-6 h-6", 
                userChallengeData?.status === 'completed' 
                  ? 'text-green-500' 
                  : 'text-primary'
              )} />
            </div>
            <div className="ml-3">
              <CardTitle className={cn(
                "text-xl", 
                userChallengeData?.status === 'completed' 
                  ? 'text-green-400' 
                  : 'text-[#22abf3]'
              )}>
                {challenge.title}
              </CardTitle>
              <CardDescription className="text-xs mt-1">
                <span className="px-2 py-0.5 rounded-full bg-[#22abf3]/20 text-[#22abf3]">
                  {challenge.category.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </span>
              </CardDescription>
            </div>
          </div>
          {userChallengeData?.status === 'completed' && (
            <div className="p-1.5 bg-green-800/50 rounded-full shadow-sm">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
          )}
        </div>
        <p className="text-sm text-gray-300 leading-relaxed pt-2 min-h-[60px]">{challenge.description}</p>
      </CardHeader>

      <CardContent className="flex-grow space-y-4 pt-0 pb-4">
        <div className="flex items-center gap-2">
          <div className="bg-[#0d1526] px-3 py-1.5 rounded-lg inline-flex items-center border border-[#49597a]">
            <Target className="w-4 h-4 text-[#22abf3] mr-2" />
            <span className="text-sm font-medium text-gray-300">{challenge.goal} {challenge.unit}</span>
          </div>
          
          {userChallengeData?.startDate && (
            <div className="bg-[#0d1526] px-3 py-1.5 rounded-lg inline-flex items-center border border-[#49597a]">
              <Calendar className="w-4 h-4 text-[#22abf3] mr-2" />
              <span className="text-sm font-medium text-gray-300">
                {new Date(userChallengeData.startDate).toLocaleDateString('en-US', {month: 'short', day: 'numeric'})}
              </span>
            </div>
          )}
        </div>

        {isJoined && userChallengeData?.status === 'active' && (
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-[#22abf3]">Progress</span>
              <span className="text-sm font-medium text-[#22abf3]">{currentProgressDisplay} / {challenge.goal}</span>
            </div>
            <Progress 
              value={progressPercent} 
              className="w-full h-2.5 bg-[#0d1526] [&>div]:bg-[#22abf3] rounded-full" 
            />
          </div>
        )}
        
        {userChallengeData?.status === 'completed' && (
          <div className="flex items-center justify-center text-green-600 dark:text-green-400 p-3 bg-green-500/10 rounded-lg border border-green-500/30">
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                <Trophy className="w-5 h-5 text-amber-500" />
                <Sparkles className="w-5 h-5 ml-2 animate-pulse" />
              </div>
              <p className="font-semibold text-sm mt-1">Challenge Completed!</p>
              {userChallengeData.completedDate && (
                <p className="text-xs text-muted-foreground mt-1">
                  Completed on {new Date(userChallengeData.completedDate).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="mt-auto p-4 pt-2">
        {!isJoined && onJoin && (
          <Button 
            onClick={() => onJoin(challenge.id)} 
            className="w-full bg-[#22abf3] hover:bg-[#22abf3]/90 text-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-[#22abf3]/30"
          >
            <PlusCircle className="mr-2 h-5 w-5" /> Join Challenge
          </Button>
        )}
        {isJoined && userChallengeData?.status === 'active' && onLogAction && isActiveChallengeTab && (
          <Button 
            onClick={() => onLogAction(userChallengeData)} 
            className="w-full bg-[#22abf3] hover:bg-[#22abf3]/90 text-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-[#22abf3]/30"
          >
            <Activity className="mr-2 h-5 w-5" /> Log Progress
          </Button>
        )}
        {userChallengeData?.status === 'completed' && (
          <Button 
            variant="outline" 
            className="w-full border-green-500/50 text-green-400 hover:bg-green-500/20"
            onClick={() => alert('Sharing feature coming soon!')}
          >
            <Share className="mr-2 h-5 w-5" /> Share Achievement
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ChallengeCard;
