"use client";

import type { FC } from 'react';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Lock, CheckCircle, Sparkles, Eye } from 'lucide-react';
import type { Badge, UserBadge } from '@/lib/types';
import { cn } from '@/lib/utils';
import ViewNFTDetailsModal from './view-nft-details-modal';

interface BadgeCardProps {
  badge: Badge;
  userBadge?: UserBadge;
  userPoints: number;
  onMintNFT?: (badgeId: string) => void;
}

const BadgeCard: FC<BadgeCardProps> = ({
  badge,
  userBadge,
  userPoints,
  onMintNFT,
}) => {
  const [isNftDetailsModalOpen, setIsNftDetailsModalOpen] = useState(false);
  const isUnlocked = userBadge?.unlocked || badge.id === '1' || userPoints >= badge.requiredPoints;
  const canMintNFT = isUnlocked && (!userBadge?.nftMinted);

  const handleViewNFT = () => {
    setIsNftDetailsModalOpen(true);
  };

  return (
    <>
      <Card className={cn(
      "w-full flex flex-col shadow-xl rounded-xl overflow-hidden transition-all duration-300 text-white",
      userBadge?.nftMinted 
        ? 'border-green-500/70 bg-gradient-to-br from-green-500/5 to-green-500/10 hover:shadow-green-500/30' 
        : isUnlocked 
          ? 'border-[#49597a] bg-[#14223b] hover:shadow-[0_5px_20px_0px_rgba(34,171,243,0.3)]'
          : 'border-[#49597a] bg-[#14223b] opacity-70',
      "transform hover:-translate-y-1"
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center mb-2">
            <div className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center",
              userBadge?.nftMinted 
                ? 'bg-green-500/20' 
                : isUnlocked 
                  ? 'bg-primary/20'
                  : 'bg-gray-500/20'
            )}>
              <Award className={cn(
                "w-6 h-6", 
                userBadge?.nftMinted 
                  ? 'text-green-500' 
                  : isUnlocked 
                    ? 'text-[#22abf3]'
                    : 'text-gray-400'
              )} />
            </div>
            <div className="ml-3">
              <CardTitle className={cn(
                "text-xl", 
                userBadge?.nftMinted 
                  ? 'text-green-400' 
                  : isUnlocked 
                    ? 'text-[#22abf3]'
                    : 'text-gray-400'
              )}>
                {badge.name}
              </CardTitle>
              {badge.category && (
                <CardDescription className="text-xs mt-1">
                  <span className="px-2 py-0.5 rounded-full bg-[#22abf3]/20 text-[#22abf3]">
                    {badge.category.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                  </span>
                </CardDescription>
              )}
            </div>
          </div>
          {userBadge?.nftMinted && (
            <div className="p-1.5 bg-green-800/50 rounded-full shadow-sm">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
          )}
          {!isUnlocked && (
            <div className="p-1.5 bg-gray-800/50 rounded-full shadow-sm">
              <Lock className="w-6 h-6 text-gray-400" />
            </div>
          )}
        </div>
        <p className="text-sm text-gray-300 leading-relaxed pt-2 min-h-[60px]">{badge.description}</p>
      </CardHeader>

      <CardContent className="flex-grow space-y-4 pt-0 pb-4">
        <div className="flex items-center gap-2">
          <div className="bg-[#0d1526] px-3 py-1.5 rounded-lg inline-flex items-center border border-[#49597a]">
            <Award className="w-4 h-4 text-[#22abf3] mr-2" />
            <span className="text-sm font-medium text-gray-300">
              {badge.requiredPoints} points required
            </span>
          </div>
        </div>
        
        {!isUnlocked && (
          <div className="flex items-center justify-center text-gray-400 p-3 bg-gray-500/10 rounded-lg border border-gray-500/30">
            <div className="flex flex-col items-center">
              <Lock className="w-5 h-5 mb-1" />
              <p className="font-semibold text-sm">
                {userPoints}/{badge.requiredPoints} points collected
              </p>
            </div>
          </div>
        )}
        
        {userBadge?.nftMinted && (
          <div className="flex items-center justify-center text-green-600 dark:text-green-400 p-3 bg-green-500/10 rounded-lg border border-green-500/30">
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                <CheckCircle className="w-5 h-5 text-green-500" />
                <Sparkles className="w-5 h-5 ml-2 animate-pulse" />
              </div>
              <p className="font-semibold text-sm mt-1">NFT Minted!</p>
              {userBadge.nftMintDate && (
                <p className="text-xs text-muted-foreground mt-1">
                  Minted on {new Date(userBadge.nftMintDate).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
        )}

        {userBadge?.unlocked && !userBadge?.nftMinted && (
          <div className="flex items-center justify-center text-[#22abf3] p-3 bg-[#22abf3]/10 rounded-lg border border-[#22abf3]/30">
            <div className="flex flex-col items-center">
              <Award className="w-5 h-5 mb-1" />
              <p className="font-semibold text-sm">
                Badge Unlocked!
              </p>
              {userBadge.dateUnlocked && (
                <p className="text-xs text-muted-foreground mt-1">
                  Unlocked on {new Date(userBadge.dateUnlocked).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="mt-auto p-4 pt-2">
        {canMintNFT && onMintNFT && (
          <Button 
            onClick={() => onMintNFT(badge.id)} 
            className="w-full bg-[#22abf3] hover:bg-[#22abf3]/90 text-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-[#22abf3]/30"
          >
            <Award className="mr-2 h-5 w-5" /> Mint NFT
          </Button>
        )}
        {userBadge?.nftMinted && (
          <Button 
            variant="outline" 
            className="w-full border-green-500/50 text-green-400 hover:bg-green-500/20"
            onClick={handleViewNFT}
          >
            <Eye className="mr-2 h-5 w-5" /> View NFT
          </Button>
        )}
        {!isUnlocked && (
          <Button 
            variant="outline" 
            className="w-full border-[#49597a] text-gray-400 hover:bg-[#22abf3]/10 opacity-70 cursor-not-allowed"
            disabled
          >
            <Lock className="mr-2 h-5 w-5" /> Locked
          </Button>
        )}
      </CardFooter>
    </Card>
    
    {/* NFT Details Modal */}
    {userBadge?.nftMinted && (
      <ViewNFTDetailsModal
        isOpen={isNftDetailsModalOpen}
        setIsOpen={setIsNftDetailsModalOpen}
        userBadge={userBadge}
      />
    )}
    </>
  );
};

export default BadgeCard;
