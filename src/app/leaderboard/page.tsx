'use client';

import { useState, useEffect } from 'react';
import { useLeaderboard } from '@/hooks/useLeaderboard';
import { LeaderboardUser } from '@/types/leaderboard';
import { BadgeDisplay } from '@/components/leaderboard/BadgeDisplay';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Target, Award, Star, Trophy, Gift } from 'lucide-react';

type TimeFilter = 'all' | 'weekly' | 'monthly';

export default function LeaderboardPage() {
  const [page, setPage] = useState(1);
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('all');
  const { data, isLoading, error, refetch } = useLeaderboard(page, 5, timeFilter);
  
  // Update the leaderboard when time filter changes
  useEffect(() => {
    setPage(1); // Reset to first page when changing filters
  }, [timeFilter]);

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">
      <div className="animate-pulse flex flex-col items-center">
        <div className="h-12 w-60 bg-green-100 rounded mb-4"></div>
        <div className="h-64 w-full max-w-3xl bg-green-50 rounded"></div>
      </div>
    </div>;
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen text-red-500">
      <div className="bg-red-50 p-6 rounded-lg border border-red-200">
        <h2 className="text-lg font-semibold">Error loading leaderboard</h2>
        <p>Please try again later</p>
      </div>
    </div>;
  }

  if (!data?.success) {
    return <div className="flex justify-center items-center min-h-screen">
      <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
        <h2 className="text-lg font-semibold">Failed to load leaderboard</h2>
        <p>Please try again later</p>
      </div>
    </div>;
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
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">Eco Warriors Leaderboard</h1>
          <p className="max-w-[700px] mx-auto text-gray-300 text-lg mb-6">
            Compete with fellow eco-warriors, earn points, and climb the ranks as you contribute to a sustainable future.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/challenges" className="inline-flex">
              <Button variant="outline" className="border-[#49597a] text-white hover:bg-[#22abf3] hover:text-white hover:border-[#22abf3]">
                <Target className="mr-2 h-5 w-5" /> View Challenges
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

      <div className="container mx-auto px-4 py-8 min-h-screen bg-gradient-to-b from-background via-background to-background/95">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-primary text-center">
            {timeFilter === 'all' ? 'Eco Warriors Leaderboard' : 
             timeFilter === 'weekly' ? 'Weekly Eco Champions' : 
             'Monthly Green Leaders'}
          </h1>
        
        {/* Time Period Filter */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-md shadow-sm bg-white" role="group">
            <button
              type="button"
              onClick={() => setTimeFilter('all')}
              className={`px-4 py-2 text-sm font-medium border rounded-l-lg ${
                timeFilter === 'all' 
                  ? 'bg-primary border-primary text-primary-foreground' 
                  : 'bg-card border-border text-muted-foreground hover:bg-accent/10 hover:text-accent-foreground'
              }`}
            >
              All Time
            </button>
            <button
              type="button"
              onClick={() => setTimeFilter('monthly')}
              className={`px-4 py-2 text-sm font-medium border ${
                timeFilter === 'monthly' 
                  ? 'bg-primary border-primary text-primary-foreground' 
                  : 'bg-card border-border text-muted-foreground hover:bg-accent/10 hover:text-accent-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setTimeFilter('weekly')}
              className={`px-4 py-2 text-sm font-medium border rounded-r-lg ${
                timeFilter === 'weekly' 
                  ? 'bg-primary border-primary text-primary-foreground' 
                  : 'bg-card border-border text-muted-foreground hover:bg-accent/10 hover:text-accent-foreground'
              }`}
            >
              Weekly
            </button>
          </div>
        </div>
        
        {/* Explanation */}
        <div className="bg-accent/10 p-4 rounded-lg border border-accent/20 shadow-sm mb-6 text-center">
          <p className="text-accent-foreground">
            {timeFilter === 'all' 
              ? 'These eco-warriors have earned the most points since the beginning!' 
              : timeFilter === 'weekly' 
                ? 'The most active recyclers this week - updated every Sunday!' 
                : 'Top contributors for this month - see who\'s leading the green revolution!'}
          </p>
        </div>
        
        {/* User's Rank */}
        {data.data.userRank && (
          <div className="bg-card/20 p-4 rounded-lg mb-6 border border-border shadow-sm">
            <h2 className="font-semibold text-primary flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              Your Rank: <span className="text-lg ml-1">#{data.data.userRank}</span>
            </h2>
          </div>
        )}

        {/* Leaderboard Table */}
        <div className="bg-card rounded-lg shadow-md overflow-hidden border border-border">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-muted/20">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">Rank</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">Points</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">Level</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">Badges</th>
                </tr>
              </thead>
            <tbody className="divide-y divide-border/30">
              {data.data.users.map((user: LeaderboardUser, index: number) => {
                // Calculate actual rank based on the page number, 5 items per page
                const rank = ((page - 1) * 5) + index + 1;
                const isTopThree = rank <= 3;
                
                return (
                  <tr key={user.id} className={isTopThree ? 'bg-primary/10' : ''}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {isTopThree ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 text-accent-foreground font-bold">
                          {rank === 1 ? '🥇' : rank === 2 ? '🥈' : '🥉'}
                        </span>
                      ) : (
                        <span className="text-muted-foreground">#{rank}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-card-foreground">
                      {user.walletAddress}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-sm font-semibold rounded-full bg-accent/20 text-accent-foreground">
                        {user.totalPoints} pts
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                      Level {user.badgeLevel}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                      <BadgeDisplay badges={user.badges} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 border border-border rounded-lg disabled:opacity-50 text-primary hover:bg-accent/10 hover:border-accent transition-colors disabled:hover:bg-transparent disabled:text-muted-foreground"
          >
            Previous
          </button>
          <span className="px-4 py-2 bg-card rounded-lg border border-border text-primary font-medium">
            Page {page} of {data.data.pagination.pages}
          </span>
          <button
            onClick={() => setPage(p => Math.min(data.data.pagination.pages, p + 1))}
            disabled={page === data.data.pagination.pages}
            className="px-4 py-2 border border-border rounded-lg disabled:opacity-50 text-primary hover:bg-accent/10 hover:border-accent transition-colors disabled:hover:bg-transparent disabled:text-muted-foreground"
          >
            Next
          </button>
        </div>

        {/* Information Sections */}
        <section className="mt-16 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* How Points Work */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <Star className="w-12 h-12 text-[#22abf3] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-primary">How Points Work</h3>
              <p className="text-muted-foreground">
                Earn points by completing eco-challenges, recycling items correctly, and engaging with the community. 
                The more consistent you are, the higher you'll climb!
              </p>
            </div>

            {/* Rankings and Tiers */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <Trophy className="w-12 h-12 text-[#22abf3] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-primary">Rankings and Tiers</h3>
              <p className="text-muted-foreground">
                Progress through different tiers from Bronze to Elite as you accumulate points. 
                Each tier unlocks new badges and special recognition in the community.
              </p>
            </div>

            {/* Monthly Rewards */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <Gift className="w-12 h-12 text-[#22abf3] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-primary">Monthly Rewards</h3>
              <p className="text-muted-foreground">
                Top performers each month receive exclusive eco-friendly rewards and recognition. 
                Your contributions to sustainability don't go unnoticed!
              </p>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-6 text-primary">Our Collective Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-4">
                <div className="text-3xl font-bold text-[#22abf3] mb-2">1.2K+</div>
                <div className="text-muted-foreground">Active Participants</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-[#22abf3] mb-2">45K+</div>
                <div className="text-muted-foreground">Items Recycled</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-[#22abf3] mb-2">8.5K</div>
                <div className="text-muted-foreground">Challenges Completed</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-[#22abf3] mb-2">12T</div>
                <div className="text-muted-foreground">CO₂ Saved</div>
              </div>
            </div>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
}