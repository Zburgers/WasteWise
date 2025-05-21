import { NextRequest } from 'next/server';
import { successResponse, errorResponse, getWalletAddress } from '@/lib/api-utils';
import { prisma } from '@/lib/prisma';
import { UserChallenge, Challenge } from '@/generated/prisma/client';

export async function GET(request: NextRequest) {
  try {
    const walletAddress = getWalletAddress(request.headers);
    if (!walletAddress) {
      return errorResponse('Authentication required', 401);
    }

    // Find the user and include challenges
    const user = await prisma.user.findUnique({
      where: { walletAddress },
      select: {
        challengesCompleted: true,
        itemsSorted: true,
        challenges: {
          where: {
            isCompleted: false,
          },
          include: {
            challenge: true,
          },
        },
        completedChallenges: {
           where: {
            isCompleted: true,
          },
          include: {
            challenge: true,
          },
        },
      }
    });

    if (!user) {
      return errorResponse('User not found', 404);
    }

    // Find available challenges
    const availableChallenges = await prisma.challenge.findMany({
      where: {
        isActive: true,
      },
    });

    return successResponse({
      active: user.challenges.map((uc: UserChallenge & { challenge: Challenge }) => ({
        id: uc.id,
        progress: uc.progress,
        isCompleted: uc.isCompleted,
        challenge: uc.challenge,
      })),
      completed: user.completedChallenges.map((uc: UserChallenge & { challenge: Challenge }) => ({
         id: uc.id,
        progress: uc.progress,
        isCompleted: uc.isCompleted,
        challenge: uc.challenge,
      })),
      available: availableChallenges.map((c: Challenge) => ({
        id: c.id,
        title: c.title,
        description: c.description,
        goal: c.goal,
        rewardPoints: c.rewardPoints,
        isActive: c.isActive,
        category: (c as any).category, // Assuming category is on the Challenge model
        icon: (c as any).icon, // Assuming icon is on the Challenge model
        unit: (c as any).unit, // Assuming unit is on the Challenge model
      })),
      stats: {
        totalCompleted: user.challengesCompleted,
        currentStreak: Math.floor(user.itemsSorted / 5), // Assuming 5 items sorted per streak unit for now
        bestStreak: Math.floor(user.itemsSorted / 5) // Assuming best streak is current streak for now
      }
    });
  } catch (error) {
    console.error('Challenges error:', error);
    // Return a more generic error to the client for security
    return errorResponse('Failed to fetch challenges', 500);
  }
}

export async function POST(request: NextRequest) {
  try {
    const walletAddress = getWalletAddress(request.headers);
    if (!walletAddress) {
      return errorResponse('Authentication required', 401);
    }

    const body = await request.json();
    const { challengeId } = body;

    if (!challengeId) {
      return errorResponse('Challenge ID is required', 400);
    }

    // Find the user and challenge
    const [user, challenge] = await Promise.all([
      prisma.user.findUnique({
        where: { walletAddress },
        select: { id: true },
      }),
      prisma.challenge.findUnique({
        where: { id: challengeId },
        select: { id: true, isActive: true },
      }),
    ]);

    if (!user) {
      return errorResponse('User not found', 404);
    }

    if (!challenge || !challenge.isActive) {
      return errorResponse('Challenge not found or not active', 404);
    }

    // Check if user has already joined this challenge
    const existingUserChallenge = await prisma.userChallenge.findUnique({
      where: {
        userId_challengeId: {
          userId: user.id,
          challengeId: challengeId,
        },
      },
    });

    if (existingUserChallenge) {
      return errorResponse('Challenge already joined', 409);
    }

    // Create new user challenge entry
    const newUserChallenge = await prisma.userChallenge.create({
      data: {
        userId: user.id,
        challengeId: challengeId,
        progress: 0,
        isCompleted: false,
      },
      include: { // Include challenge details in the response
        challenge: true,
      },
    });

    return successResponse({
      message: 'Challenge joined successfully',
      userChallenge: newUserChallenge,
    });

  } catch (error) {
    console.error('Join challenge error:', error);
    // Return a more generic error to the client for security
    return errorResponse('Failed to join challenge', 500);
  }
} 