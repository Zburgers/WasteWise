import { NextRequest } from 'next/server';
import { successResponse, errorResponse, getWalletAddress } from '@/lib/api-utils';
import { prisma } from '@/lib/prisma';
import { SortEvent } from '@/generated/prisma/client';

// Force Node.js runtime for this API route
export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    const walletAddress = getWalletAddress(request.headers);
    if (!walletAddress) {
      return errorResponse('Authentication required', 401);
    }

    // Find the user
    const user = await prisma.user.findUnique({
      where: { walletAddress },
      select: {
        id: true,
        totalPoints: true,
        itemsSorted: true,
        challengesCompleted: true,
        currentStreak: true,
      },
    });

    if (!user) {
      return errorResponse('User not found', 404);
    }

    return successResponse({
      totalPoints: user.totalPoints,
      itemsSorted: user.itemsSorted,
      challengesCompleted: user.challengesCompleted,
      currentStreak: user.currentStreak,
      achievements: [] // TODO: Implement achievements
    });
  } catch (error) {
    console.error('User points error:', error);
    // Return a more generic error to the client for security
    return errorResponse('Failed to fetch user points', 500);
  }
} 