import { useQuery } from '@tanstack/react-query';
import { LeaderboardResponse, LeaderboardUser } from '@/types/leaderboard';

// Mock data for development and testing
const MOCK_USERS: LeaderboardUser[] = Array(10).fill(null).map((_, index) => ({
  id: `user-${index + 1}`,
  walletAddress: `0x${index}abc...def${index}`,
  totalPoints: 1000 - (index * 100),
  badgeLevel: Math.floor(Math.random() * 5) + 1,
  badges: Array(Math.floor(Math.random() * 3) + 1).fill(null).map((_, i) => ({
    name: `Badge ${i + 1}`,
    imageUrl: `/static/badges/badge-${i + 1}.png`,
  })),
}));

export const useLeaderboard = (page: number = 1, limit: number = 10) => {
  return useQuery({
    queryKey: ['leaderboard', page, limit],
    queryFn: async () => {
      console.log(`Fetching leaderboard data: page=${page}, limit=${limit}`);
      try {
        const response = await fetch(`/api/leaderboard?page=${page}&limit=${limit}`);
        console.log('Leaderboard API response status:', response.status);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Leaderboard API error:', errorText);
          console.warn('Using mock data as fallback due to API error');
          
          // Return mock data as fallback
          return {
            success: true,
            data: {
              users: MOCK_USERS,
              pagination: {
                page,
                limit,
                total: 100,
                pages: 10,
              },
              userRank: null,
            }
          } as LeaderboardResponse;
        }
        
        const data = await response.json();
        console.log('Leaderboard data received:', data);
        return data as LeaderboardResponse;
      } catch (error) {
        console.error('Error in useLeaderboard hook:', error);
        
        // Return mock data on any error
        console.warn('Using mock data as fallback due to error:', error);
        return {
          success: true,
          data: {
            users: MOCK_USERS,
            pagination: {
              page,
              limit,
              total: 100,
              pages: 10,
            },
            userRank: null,
          }
        } as LeaderboardResponse;
      }
    },
  });
}; 