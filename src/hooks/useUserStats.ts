import { useState, useEffect } from 'react';
import { useWeb3Auth } from './useWeb3Auth';

interface UserStats {
  points: number;
  challengesCompleted: number;
  itemsSorted: number;
  currentStreak: number;
}

export function useUserStats() {
  const [stats, setStats] = useState<UserStats>({
    points: 0,
    challengesCompleted: 0,
    itemsSorted: 0,
    currentStreak: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useWeb3Auth();

  const fetchUserStats = async () => {
    if (!user?.address) {
      setIsLoading(false);
      return;
    }
    
    try {
      setError(null);
      // Fetch user points
      const pointsResponse = await fetch('/api/user-points', {
        headers: {
          'Authorization': `Bearer ${user.address}`
        }
      });
      
      if (!pointsResponse.ok) {
        throw new Error(`Points API error: ${pointsResponse.status}`);
      }
      
      const pointsData = await pointsResponse.json();
      
      // Fetch challenges
      const challengesResponse = await fetch('/api/challenges', {
        headers: {
          'Authorization': `Bearer ${user.address}`
        }
      });
      
      if (!challengesResponse.ok) {
        throw new Error(`Challenges API error: ${challengesResponse.status}`);
      }
      
      const challengesData = await challengesResponse.json();
      
      if (pointsData.success && challengesData.success) {
        setStats({
          points: pointsData.data.totalPoints || 0,
          challengesCompleted: challengesData.data.stats?.totalCompleted || 0,
          itemsSorted: pointsData.data.itemsSorted || 0,
          currentStreak: pointsData.data.currentStreak || 0
        });
      } else {
        throw new Error(pointsData.error || challengesData.error || 'Failed to fetch user stats');
      }
    } catch (error) {
      console.error('Error fetching user stats:', error);
      setError(error instanceof Error ? error.message : 'Failed to fetch user stats');
      // Keep default values on error
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserStats();
  }, [user?.address]);

  const updateStats = async () => {
    await fetchUserStats();
  };

  return { stats, isLoading, error, updateStats };
} 