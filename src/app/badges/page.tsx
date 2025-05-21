'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Award, Star, Trophy, Target, Recycle, CheckCircle } from 'lucide-react';
import BadgeCard from '@/components/badge-card';
import MintNFTModal from '@/components/mint-nft-modal';
import { useToast } from '@/hooks/use-toast';
import type { Badge, UserBadge } from '@/lib/types';
import { cn } from '@/lib/utils';

const MOCK_BADGES: Badge[] = [
  {
    id: '1',
    name: 'Eco Rookie',
    description: 'Earned for sorting your first waste item correctly.',
    imageUrl: '/static/ecorookiebadge.png',
    requiredPoints: 0, // Always unlocked
    category: 'starter',
    level: 'beginner',
    icon: Award,
  },
  {
    id: '2',
    name: 'Recycling Warrior',
    description: 'Awarded for sorting 50 items correctly in the waste classifier.',
    imageUrl: '/static/recyclingwarrior.png',
    requiredPoints: 50,
    category: 'recycling',
    level: 'intermediate',
    icon: Recycle,
  },
  {
    id: '3',
    name: 'Eco Master',
    description: 'Achieved by correctly sorting 200 waste items and becoming a waste management expert.',
    imageUrl: '/static/Ecomaster.png',
    requiredPoints: 200,
    category: 'expert',
    level: 'advanced',
    icon: CheckCircle,
  },
  {
    id: '4',
    name: 'Challenge Champion',
    description: 'Complete your first environmental challenge to earn this badge.',
    imageUrl: '/static/recyclingwarrior.png', // Placeholder - should have a unique image
    requiredPoints: 75,
    category: 'challenges',
    level: 'intermediate',
    icon: Trophy,
  },
  {
    id: '5',
    name: 'Community Leader',
    description: 'Reach the top 10 on the leaderboard to earn this prestigious badge.',
    imageUrl: '/static/Ecomaster.png', // Placeholder - should have a unique image
    requiredPoints: 250,
    category: 'community',
    level: 'advanced',
    icon: Star,
  },
];

// Mock user data - in a real app this would come from a database
const mockUserPoints = 150;
const mockUserBadges: UserBadge[] = [
  {
    ...MOCK_BADGES[0],
    userId: 'user123',
    unlocked: true,
    dateUnlocked: new Date('2025-04-15'),
    nftMinted: true,
    nftId: 'nft-123',
    nftMintDate: new Date('2025-04-16'),
  },
  {
    ...MOCK_BADGES[1],
    userId: 'user123',
    unlocked: true,
    dateUnlocked: new Date('2025-05-01'),
    nftMinted: false,
  },
];

export default function BadgesPage() {
  const { toast } = useToast();
  const [userPoints] = useState(mockUserPoints);
  const [userBadges, setUserBadges] = useState<UserBadge[]>(mockUserBadges);
  const [selectedBadgeForMinting, setSelectedBadgeForMinting] = useState<Badge | null>(null);
  const [isNftModalOpen, setIsNftModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  // Get unique categories from all badges
  const availableCategories = ["all", ...new Set(MOCK_BADGES.map(b => b.category))];

  const handleMintNFT = (badgeId: string) => {
    setUserBadges(prevUserBadges =>
      prevUserBadges.map(ub => {
        if (ub.id === badgeId) {
          return { 
            ...ub, 
            nftMinted: true, 
            nftId: `nft-${Math.random().toString(36).substring(2, 9)}`,
            nftMintDate: new Date() 
          };
        }
        return ub;
      })
    );

    // Show success toast
    toast({ 
      title: "NFT Minted Successfully!", 
      description: `Your badge has been minted as an NFT and added to your digital wallet.`,
      className: "bg-green-600 border-green-700 text-white"
    });
  };

  const openMintModal = (badge: Badge) => {
    setSelectedBadgeForMinting(badge);
    setIsNftModalOpen(true);
  };

  const getIconForTab = (tabValue: string) => {
    switch(tabValue) {
      case 'all': return <Award className="w-5 h-5 mr-2" />;
      case 'unlocked': return <CheckCircle className="w-5 h-5 mr-2" />;
      case 'minted': return <Trophy className="w-5 h-5 mr-2" />;
      default: return <Star className="w-5 h-5 mr-2" />;
    }
  }

  const getFilteredBadges = (status: 'all' | 'unlocked' | 'minted' | 'locked') => {
    let filteredBadges: (Badge | UserBadge)[] = [];
    
    switch(status) {
      case 'all':
        filteredBadges = MOCK_BADGES.map(badge => {
          const userBadge = userBadges.find(ub => ub.id === badge.id);
          return userBadge || badge;
        });
        break;
      case 'unlocked':
        filteredBadges = userBadges.filter(badge => badge.unlocked && !badge.nftMinted);
        break;
      case 'minted':
        filteredBadges = userBadges.filter(badge => badge.nftMinted);
        break;
      case 'locked':
        const unlockedIds = new Set(userBadges.map(badge => badge.id));
        filteredBadges = MOCK_BADGES.filter(badge => !unlockedIds.has(badge.id) && userPoints < badge.requiredPoints);
        break;
    }

    // Apply category filter if not "all"
    if (categoryFilter !== "all") {
      filteredBadges = filteredBadges.filter(b => b.category === categoryFilter);
    }
    
    return filteredBadges;
  };

  const renderContentForTab = (status: 'all' | 'unlocked' | 'minted' | 'locked', noItemsMessage: string) => {
    const badgesToDisplay = getFilteredBadges(status);
    
    return (
      <div className="bg-[#0d1526] backdrop-blur-sm p-6 rounded-lg mt-2 min-h-[300px]">
        {/* Category filters */}
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
        
        {badgesToDisplay.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {badgesToDisplay.map(badge => (
              <BadgeCard
                key={badge.id}
                badge={badge}
                userBadge={'unlocked' in badge ? badge : undefined}
                userPoints={userPoints}
                onMintNFT={
                  ('unlocked' in badge && badge.unlocked && !badge.nftMinted) 
                    ? () => openMintModal(badge) 
                    : undefined
                }
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
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">Achievement Badges</h1>
          <p className="max-w-[700px] mx-auto text-gray-300 text-lg mb-6">
            Collect badges for your environmental achievements and mint them as NFTs to showcase your commitment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/challenges" className="inline-flex">
              <Button variant="outline" className="border-[#49597a] text-white hover:bg-[#22abf3] hover:text-white hover:border-[#22abf3]">
                <Target className="mr-2 h-5 w-5" /> View Challenges
              </Button>
            </Link>
            <Link href="/leaderboard" className="inline-flex">
              <Button variant="outline" className="border-[#49597a] text-white hover:bg-[#22abf3] hover:text-white hover:border-[#22abf3]">
                <Trophy className="mr-2 h-5 w-5" /> Leaderboard
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto p-4 pb-12">
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-6 bg-[#14223b] shadow-md p-1 rounded-lg">
            {['all', 'unlocked', 'minted', 'locked'].map(tabValue => (
              <TabsTrigger
                key={tabValue} 
                value={tabValue} 
                className="h-12 text-base px-6 py-3 rounded-md flex items-center justify-center font-semibold transition-all duration-200 ease-in-out data-[state=active]:bg-[#22abf3] data-[state=active]:text-white data-[state=active]:shadow-lg"
              >
               {getIconForTab(tabValue)} {tabValue.charAt(0).toUpperCase() + tabValue.slice(1)} Badges
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all">
            {renderContentForTab('all', "No badges available at the moment. Complete challenges to earn badges!")}
          </TabsContent>

          <TabsContent value="unlocked">
            {renderContentForTab('unlocked', "You haven't unlocked any badges yet that aren't already minted as NFTs.")}
          </TabsContent>

          <TabsContent value="minted">
            {renderContentForTab('minted', "You haven't minted any badges as NFTs yet. Mint your unlocked badges to show them off!")}
          </TabsContent>

          <TabsContent value="locked">
            {renderContentForTab('locked', "You've unlocked all available badges. Great job!")}
          </TabsContent>
        </Tabs>
        
        {/* Stats Section */}
        <div className="mt-12 bg-[#14223b] rounded-xl p-6 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-white mb-4">Your Badge Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0d1526] p-4 rounded-lg shadow-md border border-[#49597a]">
              <h3 className="text-lg font-medium text-[#22abf3] mb-2">Total Points</h3>
              <p className="text-2xl font-bold text-white">{userPoints}</p>
            </div>
            <div className="bg-[#0d1526] p-4 rounded-lg shadow-md border border-[#49597a]">
              <h3 className="text-lg font-medium text-[#22abf3] mb-2">Badges Unlocked</h3>
              <p className="text-2xl font-bold text-white">{userBadges.filter(b => b.unlocked).length}</p>
            </div>
            <div className="bg-[#0d1526] p-4 rounded-lg shadow-md border border-[#49597a]">
              <h3 className="text-lg font-medium text-[#22abf3] mb-2">NFTs Minted</h3>
              <p className="text-2xl font-bold text-white">{userBadges.filter(b => b.nftMinted).length}</p>
            </div>
          </div>
        </div>
        
        {/* Info Section */}
        <div className="mt-12 bg-[#14223b] rounded-xl p-6 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-[#22abf3] mb-2">About Badges</h2>
              <p className="text-gray-300">
                Badges represent your environmental achievements within WasteWise. Earn them by sorting waste correctly,
                completing challenges, and participating in community activities.
              </p>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-[#22abf3] mb-2">NFT Badges</h2>
              <p className="text-gray-300">
                Turn your achievements into unique digital collectibles by minting them as NFTs. These are stored on the blockchain
                and serve as verifiable proof of your environmental contributions.
              </p>
            </div>
          </div>
        </div>

        {selectedBadgeForMinting && (
          <MintNFTModal
            isOpen={isNftModalOpen}
            setIsOpen={setIsNftModalOpen}
            badge={selectedBadgeForMinting}
            onMint={handleMintNFT}
          />
        )}
      </div>
    </div>
  );
} 