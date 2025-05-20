export interface LeaderboardUser {
  id: string;
  walletAddress: string;
  totalPoints: number;
  badgeLevel: number;
  badges: Array<{
    name: string;
    imageUrl: string;
  }>;
}

export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export interface LeaderboardData {
  users: LeaderboardUser[];
  pagination: PaginationInfo;
  userRank: number | null;
}

export interface LeaderboardResponse {
  success: boolean;
  data: LeaderboardData;
} 