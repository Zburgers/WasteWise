import { NextRequest } from 'next/server';
import { successResponse, errorResponse, getWalletAddress } from '@/lib/api-utils';
import { prisma } from '@/lib/prisma';
import { UserChallenge, Challenge } from '@/generated/prisma/client';

// Force Node.js runtime for this API route
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const walletAddress = getWalletAddress(request.headers);
    if (!walletAddress) {
      return errorResponse('Authentication required', 401);
    }

    const body = await request.json();
    const { itemType } = body;

    if (!itemType) {
      return errorResponse('Item type is required', 400);
    }

    // Find the user
    let user = await prisma.user.findUnique({
      where: { walletAddress },
      include: {
        challenges: {
          where: {
            isCompleted: false,
          },
          include: {
            challenge: true,
          },
        },
      },
      select: {
        id: true,
        walletAddress: true,
        totalPoints: true,
        badgeLevel: true,
        itemsSorted: true,
        challengesCompleted: true,
        currentStreak: true,
        lastSortEventDate: true,
        challenges: {
          where: {
            isCompleted: false,
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

    // Determine points earned (example: 5 points per sort)
    const pointsEarned = 5;

    // Calculate streak
    const now = new Date();
    let newStreak = user.currentStreak;

    if (user.lastSortEventDate) {
      const lastSortDate = new Date(user.lastSortEventDate);
      const diffTime = Math.abs(now.getTime() - lastSortDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        // Sorted on consecutive days
        newStreak += 1;
      } else if (diffDays > 1) {
        // Streak broken
        newStreak = 1;
      }
      // If diffDays is 0 (sorted multiple times today), streak doesn't change.
    } else {
      // First sort ever
      newStreak = 1;
    }

    // Update user's total points, items sorted, and streak info
    user = await prisma.user.update({
      where: { walletAddress: user.walletAddress },
      data: {
        totalPoints: user.totalPoints + pointsEarned,
        itemsSorted: user.itemsSorted + 1,
        currentStreak: newStreak,
        lastSortEventDate: now,
      },
      include: { // Include challenges again to return updated progress
        challenges: {
          where: {
            isCompleted: false,
          },
          include: {
            challenge: true,
          },
        },
      },
    });

    // Create a new sort event record
    const sortEvent = await prisma.sortEvent.create({
      data: {
        userId: user.id,
        itemType,
        pointsEarned,
      },
    });

    // Update user challenges based on the sort event
    const updatedChallenges = await Promise.all(user.challenges.map(async (userChallenge: UserChallenge & { challenge: Challenge }) => {
      // Assuming challenges are based on items sorted
      const newProgress = userChallenge.progress + 1;
      const isCompleted = newProgress >= userChallenge.challenge.goal;

      if (isCompleted && !userChallenge.isCompleted) {
        // Mark challenge as completed and add reward points
        user = await prisma.user.update({
          where: { id: user.id },
          data: {
            totalPoints: user.totalPoints + userChallenge.challenge.rewardPoints,
            challengesCompleted: user.challengesCompleted + 1, // Increment completed challenges count
          },
        });

        return prisma.userChallenge.update({
          where: { id: userChallenge.id },
          data: {
            progress: newProgress,
            isCompleted: true,
          },
          include: { challenge: true },
        });
      } else {
        // Just update progress if not completed or already completed
        return prisma.userChallenge.update({
          where: { id: userChallenge.id },
          data: {
            progress: newProgress,
          },
          include: { challenge: true },
        });
      }
    }));

    // Recalculate badge level based on updated total points
    const newBadgeLevel = Math.floor(user.totalPoints / 1000) + 1; // Assuming 1000 points per badge level
    if (newBadgeLevel !== user.badgeLevel) {
       await prisma.user.update({
        where: { id: user.id },
        data: { badgeLevel: newBadgeLevel },
      });
      user.badgeLevel = newBadgeLevel; // Update user object for the response
    }


    return successResponse({
      sortEvent,
      user: {
        id: user.id,
        walletAddress: user.walletAddress,
        totalPoints: user.totalPoints,
        badgeLevel: user.badgeLevel,
        itemsSorted: user.itemsSorted,
        challengesCompleted: user.challengesCompleted,
      },
      challenges: updatedChallenges.map(uc => ({
        id: uc.id,
        progress: uc.progress,
        isCompleted: uc.isCompleted,
        challenge: { // Include challenge details
          title: uc.challenge.title,
          rewardPoints: uc.challenge.rewardPoints,
        }
      })),
    });
  } catch (error) {
    console.error('Sort event error:', error);
    return errorResponse('Failed to process sort event', 500);
  }
} 