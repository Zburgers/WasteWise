// Simple in-memory store for MVP
interface SortEvent {
  id: string;
  itemType: string;
  pointsEarned: number;
  createdAt: Date;
}

interface Challenge {
  id: string;
  title: string;
  description: string;
  progress: number;
  goal: number;
  reward: {
    points: number;
    badge: string;
  };
  deadline: Date | null;
  isCompleted: boolean;
}

interface UserData {
  points: number;
  challengesCompleted: number;
  itemsSorted: number;
  sortEvents: SortEvent[];
  activeChallenges: Challenge[];
  completedChallenges: Challenge[];
}

const store = new Map<string, UserData>();

function createInitialChallenges(): Challenge[] {
  return [{
    id: '1',
    title: 'Sort 5 Items',
    description: 'Sort 5 items to earn bonus points',
    progress: 0,
    goal: 5,
    reward: {
      points: 25,
      badge: 'Sorting Novice'
    },
    deadline: null,
    isCompleted: false
  }];
}

export function getUserData(walletAddress: string): UserData {
  if (!store.has(walletAddress)) {
    // Initialize new user with default values
    store.set(walletAddress, {
      points: 30,
      challengesCompleted: 1,
      itemsSorted: 0,
      sortEvents: [],
      activeChallenges: createInitialChallenges(),
      completedChallenges: []
    });
  }
  return store.get(walletAddress)!;
}

export function updateUserData(walletAddress: string, itemType: string): UserData {
  const userData = getUserData(walletAddress);
  const pointsEarned = 5; // 5 points per sort

  // Create new sort event
  const sortEvent: SortEvent = {
    id: Date.now().toString(),
    itemType,
    pointsEarned,
    createdAt: new Date()
  };

  // Update user data
  userData.sortEvents.push(sortEvent);
  userData.points += pointsEarned;
  userData.itemsSorted += 1;

  // Update challenges
  userData.activeChallenges.forEach(challenge => {
    if (!challenge.isCompleted) {
      challenge.progress += 1;
      if (challenge.progress >= challenge.goal) {
        challenge.isCompleted = true;
        userData.challengesCompleted += 1;
        userData.points += challenge.reward.points;
        
        // Move to completed challenges
        userData.completedChallenges.push(challenge);
        userData.activeChallenges = userData.activeChallenges.filter(c => c.id !== challenge.id);
        
        // Create new challenge if needed
        if (userData.activeChallenges.length === 0) {
          const newChallenge: Challenge = {
            id: Date.now().toString(),
            title: `Sort ${(userData.itemsSorted + 5)} Items`,
            description: `Sort ${(userData.itemsSorted + 5)} items to earn bonus points`,
            progress: 0,
            goal: 5,
            reward: {
              points: 25,
              badge: 'Sorting Novice'
            },
            deadline: null,
            isCompleted: false
          };
          userData.activeChallenges.push(newChallenge);
        }
      }
    }
  });

  store.set(walletAddress, userData);
  return userData;
}

export function getWeeklyPoints(userData: UserData): number {
  const now = new Date();
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  return userData.sortEvents
    .filter(event => event.createdAt >= weekAgo)
    .reduce((sum, event) => sum + event.pointsEarned, 0);
}

export function getMonthlyPoints(userData: UserData): number {
  const now = new Date();
  const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  return userData.sortEvents
    .filter(event => event.createdAt >= monthAgo)
    .reduce((sum, event) => sum + event.pointsEarned, 0);
} 