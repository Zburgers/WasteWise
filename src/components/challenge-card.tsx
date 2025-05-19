
"use client";

import type { FC } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PlusCircle, Activity, CheckCircle, Sparkles } from 'lucide-react';
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
      "w-full flex flex-col shadow-xl rounded-xl overflow-hidden transition-all duration-300 hover:shadow-primary/40",
      userChallengeData?.status === 'completed' ? 'border-green-500/70 bg-green-500/5' : 'border-primary/30 bg-card/95 backdrop-blur-sm',
      "transform hover:-translate-y-1"
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center mb-2">
            <IconComponent className={cn("w-10 h-10 mr-3", userChallengeData?.status === 'completed' ? 'text-green-500' : 'text-primary')} />
            <div>
              <CardTitle className={cn("text-xl", userChallengeData?.status === 'completed' ? 'text-green-600' : 'text-accent')}>{challenge.title}</CardTitle>
              <CardDescription className="text-xs text-muted-foreground mt-1">Category: {challenge.category.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</CardDescription>
            </div>
          </div>
          {userChallengeData?.status === 'completed' && (
            <div className="p-1 bg-green-100 dark:bg-green-800/50 rounded-full">
              <CheckCircle className="w-6 h-6 text-green-500 dark:text-green-400" />
            </div>
          )}
        </div>
        <p className="text-sm text-foreground/90 leading-relaxed pt-1 min-h-[40px]">{challenge.description}</p>
      </CardHeader>

      <CardContent className="flex-grow space-y-3 pt-0 pb-4">
        <div className="text-sm">
          <p className="text-foreground">
            <strong>Goal:</strong> <span className="text-muted-foreground">{challenge.goal} {challenge.unit}</span>
          </p>
        </div>

        {isJoined && userChallengeData?.status === 'active' && (
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium text-primary">Progress:</span>
              <span className="text-xs font-medium text-primary">{currentProgressDisplay} / {challenge.goal}</span>
            </div>
            <Progress value={progressPercent} className="w-full h-2.5 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-accent" />
          </div>
        )}
         {userChallengeData?.status === 'completed' && (
          <div className="flex items-center text-green-600 dark:text-green-400 p-2 bg-green-500/10 rounded-md">
            <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
            <p className="font-semibold text-sm">Awesome! You've completed this challenge!</p>
          </div>
        )}
      </CardContent>

      <CardFooter className="mt-auto p-4">
        {!isJoined && onJoin && (
          <Button onClick={() => onJoin(challenge.id)} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-transform hover:scale-105">
            <PlusCircle className="mr-2 h-5 w-5" /> Join Challenge
          </Button>
        )}
        {isJoined && userChallengeData?.status === 'active' && onLogAction && isActiveChallengeTab && (
          <Button onClick={() => onLogAction(userChallengeData)} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105">
            <Activity className="mr-2 h-5 w-5" /> Log Action
          </Button>
        )}
        {/* No button for completed challenges on the card, or if not on active tab */}
      </CardFooter>
    </Card>
  );
};

export default ChallengeCard;
