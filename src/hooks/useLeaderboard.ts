import { useQuery } from '@tanstack/react-query';
import { LeaderboardResponse, LeaderboardUser } from '@/types/leaderboard';

// Mock data for development and testing - smaller dataset with eco-themed badges
const ALL_MOCK_USERS: LeaderboardUser[] = [
  {
    id: 'user-1',
    walletAddress: '0x1abc...def1',
    totalPoints: 1200,
    badgeLevel: 3,
    badges: [
      { name: 'Eco Master', imageUrl: '/static/Ecomaster.png' },
      { name: 'Recycling Warrior', imageUrl: '/static/recyclingwarrior.png' }
    ]
  },
  {
    id: 'user-2',
    walletAddress: '0x2abc...def2',
    totalPoints: 950,
    badgeLevel: 2,
    badges: [{ name: 'Recycling Warrior', imageUrl: '/static/recyclingwarrior.png' }]
  },
  {
    id: 'user-3',
    walletAddress: '0x3abc...def3',
    totalPoints: 800,
    badgeLevel: 2,
    badges: [{ name: 'Eco Rookie', imageUrl: '/static/ecorookiebadge.png' }]
  },
  {
    id: 'user-4',
    walletAddress: '0x4abc...def4',
    totalPoints: 650,
    badgeLevel: 1,
    badges: [{ name: 'Eco Rookie', imageUrl: '/static/ecorookiebadge.png' }]
  },
  {
    id: 'user-5',
    walletAddress: '0x5abc...def5',
    totalPoints: 500,
    badgeLevel: 1,
    badges: []
  },
  {
    id: 'user-6',
    walletAddress: '0x6abc...def6',
    totalPoints: 450,
    badgeLevel: 1,
    badges: [{ name: 'Eco Rookie', imageUrl: '/static/ecorookiebadge.png' }]
  },
  {
    id: 'user-7',
    walletAddress: '0x7abc...def7',
    totalPoints: 380,
    badgeLevel: 1,
    badges: []
  },
  {
    id: 'user-8',
    walletAddress: '0x8abc...def8',
    totalPoints: 320,
    badgeLevel: 1,
    badges: [{ name: 'Eco Rookie', imageUrl: '/static/ecorookiebadge.png' }]
  },
  {
    id: 'user-9',
    walletAddress: '0x9abc...def9',
    totalPoints: 290,
    badgeLevel: 1,
    badges: []
  },
  {
    id: 'user-10',
    walletAddress: '0x10bc...def0',
    totalPoints: 250,
    badgeLevel: 1,
    badges: []
  },
  {
    id: 'user-11',
    walletAddress: '0x11bc...def1',
    totalPoints: 220,
    badgeLevel: 1,
    badges: []
  },
  {
    id: 'user-12',
    walletAddress: '0x12bc...def2',
    totalPoints: 190,
    badgeLevel: 1,
    badges: []
  },
  {
    id: 'user-13',
    walletAddress: '0x13bc...def3',
    totalPoints: 160,
    badgeLevel: 1,
    badges: []
  },
  {
    id: 'user-14',
    walletAddress: '0x14bc...def4',
    totalPoints: 140,
    badgeLevel: 1,
    badges: []
  },
  {
    id: 'user-15',
    walletAddress: '0x15bc...def5',
    totalPoints: 120,
    badgeLevel: 1,
    badges: []
  }
];

// Different leaderboard filtered mock data for weekly view
const WEEKLY_MOCK_USERS: LeaderboardUser[] = [
  {
    id: 'user-3',
    walletAddress: '0x3abc...def3',
    totalPoints: 320,
    badgeLevel: 2,
    badges: [{ name: 'Eco Rookie', imageUrl: '/static/ecorookiebadge.png' }]
  },
  {
    id: 'user-1',
    walletAddress: '0x1abc...def1',
    totalPoints: 290,
    badgeLevel: 3,
    badges: [
      { name: 'Eco Master', imageUrl: '/static/Ecomaster.png' },
      { name: 'Recycling Warrior', imageUrl: '/static/recyclingwarrior.png' }
    ]
  },
  {
    id: 'user-2',
    walletAddress: '0x2abc...def2',
    totalPoints: 210,
    badgeLevel: 2,
    badges: [{ name: 'Recycling Warrior', imageUrl: '/static/recyclingwarrior.png' }]
  },
  {
    id: 'user-5',
    walletAddress: '0x5abc...def5',
    totalPoints: 180,
    badgeLevel: 1,
    badges: []
  },
  {
    id: 'user-8',
    walletAddress: '0x8abc...def8',
    totalPoints: 160,
    badgeLevel: 1,
    badges: [{ name: 'Eco Rookie', imageUrl: '/static/ecorookiebadge.png' }]
  },
  {
    id: 'user-4',
    walletAddress: '0x4abc...def4',
    totalPoints: 150,
    badgeLevel: 1,
    badges: [{ name: 'Eco Rookie', imageUrl: '/static/ecorookiebadge.png' }]
  },
  {
    id: 'user-9',
    walletAddress: '0x9abc...def9',
    totalPoints: 140,
    badgeLevel: 1,
    badges: []
  },
  {
    id: 'user-6',
    walletAddress: '0x6abc...def6',
    totalPoints: 120,
    badgeLevel: 1,
    badges: [{ name: 'Eco Rookie', imageUrl: '/static/ecorookiebadge.png' }]
  },
  {
    id: 'user-7',
    walletAddress: '0x7abc...def7',
    totalPoints: 110,
    badgeLevel: 1,
    badges: []
  },
  {
    id: 'user-12',
    walletAddress: '0x12bc...def2',
    totalPoints: 100,
    badgeLevel: 1,
    badges: []
  },
  {
    id: 'user-10',
    walletAddress: '0x10bc...def0',
    totalPoints: 90,
    badgeLevel: 1,
    badges: []
  },
  {
    id: 'user-13',
    walletAddress: '0x13bc...def3',
    totalPoints: 80,
    badgeLevel: 1,
    badges: []
  },
  {
    id: 'user-11',
    walletAddress: '0x11bc...def1',
    totalPoints: 70,
    badgeLevel: 1,
    badges: []
  },
  {
    id: 'user-14',
    walletAddress: '0x14bc...def4',
    totalPoints: 60,
    badgeLevel: 1,
    badges: []
  },
  {
    id: 'user-15',
    walletAddress: '0x15bc...def5',
    totalPoints: 50,
    badgeLevel: 1,
    badges: []
  }
];

// Different leaderboard filtered mock data for monthly view
const MONTHLY_MOCK_USERS: LeaderboardUser[] = [
  {
    id: 'user-1',
    walletAddress: '0x1abc...def1',
    totalPoints: 780,
    badgeLevel: 3,
    badges: [
      { name: 'Eco Master', imageUrl: '/static/Ecomaster.png' },
      { name: 'Recycling Warrior', imageUrl: '/static/recyclingwarrior.png' }
    ]
  },
  {
    id: 'user-2',
    walletAddress: '0x2abc...def2',
    totalPoints: 550,
    badgeLevel: 2,
    badges: [{ name: 'Recycling Warrior', imageUrl: '/static/recyclingwarrior.png' }]
  },
  {
    id: 'user-4',
    walletAddress: '0x4abc...def4',
    totalPoints: 420,
    badgeLevel: 1,
    badges: [{ name: 'Eco Rookie', imageUrl: '/static/ecorookiebadge.png' }]
  },
  {
    id: 'user-3',
    walletAddress: '0x3abc...def3',
    totalPoints: 380,
    badgeLevel: 2,
    badges: [{ name: 'Eco Rookie', imageUrl: '/static/ecorookiebadge.png' }]
  },
  {
    id: 'user-6',
    walletAddress: '0x6abc...def6',
    totalPoints: 350,
    badgeLevel: 1,
    badges: [{ name: 'Eco Rookie', imageUrl: '/static/ecorookiebadge.png' }]
  },
  {
    id: 'user-5',
    walletAddress: '0x5abc...def5',
    totalPoints: 320,
    badgeLevel: 1,
    badges: []
  },
  {
    id: 'user-8',
    walletAddress: '0x8abc...def8',
    totalPoints: 290,
    badgeLevel: 1,
    badges: [{ name: 'Eco Rookie', imageUrl: '/static/ecorookiebadge.png' }]
  },
  {
    id: 'user-7',
    walletAddress: '0x7abc...def7',
    totalPoints: 270,
    badgeLevel: 1,
    badges: []
  },
  {
    id: 'user-10',
    walletAddress: '0x10bc...def0',
    totalPoints: 240,
    badgeLevel: 1,
    badges: []
  },
  {
    id: 'user-9',
    walletAddress: '0x9abc...def9',
    totalPoints: 230,
    badgeLevel: 1,
    badges: []
  },
  {
    id: 'user-11',
    walletAddress: '0x11bc...def1',
    totalPoints: 210,
    badgeLevel: 1,
    badges: []
  },
  {
    id: 'user-12',
    walletAddress: '0x12bc...def2',
    totalPoints: 190,
    badgeLevel: 1,
    badges: []
  },
  {
    id: 'user-13',
    walletAddress: '0x13bc...def3',
    totalPoints: 180,
    badgeLevel: 1,
    badges: []
  },
  {
    id: 'user-15',
    walletAddress: '0x15bc...def5',
    totalPoints: 160,
    badgeLevel: 1,
    badges: []
  },
  {
    id: 'user-14',
    walletAddress: '0x14bc...def4',
    totalPoints: 150,
    badgeLevel: 1,
    badges: []
  }
];

type TimeFilter = 'all' | 'weekly' | 'monthly';

export const useLeaderboard = (page: number = 1, limit: number = 10, timeFilter: TimeFilter = 'all') => {
  return useQuery({
    queryKey: ['leaderboard', page, limit, timeFilter],
    queryFn: async () => {
      console.log(`Using mock leaderboard data: page=${page}, limit=${limit}, timeFilter=${timeFilter}`);
      
      // Get the appropriate mock data based on time filter
      let allMockUsers = ALL_MOCK_USERS;
      if (timeFilter === 'weekly') allMockUsers = WEEKLY_MOCK_USERS;
      if (timeFilter === 'monthly') allMockUsers = MONTHLY_MOCK_USERS;
      
      // Calculate pagination
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedUsers = allMockUsers.slice(startIndex, endIndex);
      
      // Return mock data
      return {
        success: true,
        data: {
          users: paginatedUsers,
          pagination: {
            page,
            limit,
            total: 15, // Fixed total count to 15 entries (5 per page × 3 pages)
            pages: 3,  // Fixed number of pages to 3
          },
          userRank: null,
        }
      } as LeaderboardResponse;

      /* Original API call commented out for future reference
      try {
        const response = await fetch(`/api/leaderboard?page=${page}&limit=${limit}&timeFilter=${timeFilter}`);
        console.log('Leaderboard API response status:', response.status);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Leaderboard API error:', errorText);
          console.warn('Using mock data as fallback due to API error');
          
          // Get the appropriate mock data based on time filter
          let allMockUsers = ALL_MOCK_USERS;
          if (timeFilter === 'weekly') allMockUsers = WEEKLY_MOCK_USERS;
          if (timeFilter === 'monthly') allMockUsers = MONTHLY_MOCK_USERS;
          
          // Calculate pagination
          const startIndex = (page - 1) * limit;
          const endIndex = startIndex + limit;
          const paginatedUsers = allMockUsers.slice(startIndex, endIndex);
          
          // Return mock data as fallback
          return {
            success: true,
            data: {
              users: paginatedUsers,
              pagination: {
                page,
                limit,
                total: 15, // Fixed total count to 15 entries (5 per page × 3 pages)
                pages: 3,  // Fixed number of pages to 3
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
        
        // Get the appropriate mock data based on time filter
        let allMockUsers = ALL_MOCK_USERS;
        if (timeFilter === 'weekly') allMockUsers = WEEKLY_MOCK_USERS;
        if (timeFilter === 'monthly') allMockUsers = MONTHLY_MOCK_USERS;
        
        // Calculate pagination
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedUsers = allMockUsers.slice(startIndex, endIndex);
        
        // Return mock data on any error
        console.warn('Using mock data as fallback due to error:', error);
        return {
          success: true,
          data: {
            users: paginatedUsers,
            pagination: {
              page,
              limit,
              total: 15, // Fixed total count to 15 entries (5 per page × 3 pages)
              pages: 3,  // Fixed number of pages to 3
            },
            userRank: null,
          }
        } as LeaderboardResponse;
      }
      */
    },
  });
}; 