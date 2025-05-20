import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import { successResponse, errorResponse, getWalletAddress } from '@/lib/api-utils';
import { PrismaClient } from '@prisma/client';

const POINTS_PER_SORT = 5;

export async function POST(request: NextRequest) {
  try {
    const walletAddress = getWalletAddress(request.headers);
    if (!walletAddress) {
      return errorResponse('Authentication required', 401);
    }

    const body = await request.json();
    const { itemType } = body;

    if (!itemType) {
      return errorResponse('Item type is required');
    }

    // Get or create user
    let user = await prisma.user.findUnique({
      where: { walletAddress },
    });

    if (!user) {
      user = await prisma.user.create({
        data: { walletAddress },
      });
    }

    // Create sort event and update user points in a transaction
    const result = await prisma.$transaction(async (tx: PrismaClient) => {
      // Create sort event
      const sortEvent = await tx.sortEvent.create({
        data: {
          userId: user!.id,
          itemType,
          pointsEarned: POINTS_PER_SORT,
        },
      });

      // Update user points
      const updatedUser = await tx.user.update({
        where: { id: user!.id },
        data: {
          totalPoints: { increment: POINTS_PER_SORT },
          lastLogin: new Date(),
        },
        include: {
          challenges: {
            include: {
              challenge: true,
            },
          },
        },
      });

      // Update active challenges
      const activeChallenges = updatedUser.challenges.filter(
        (uc) => !uc.isCompleted && uc.challenge.isActive
      );

      for (const userChallenge of activeChallenges) {
        const newProgress = userChallenge.progress + 1;
        const isCompleted = newProgress >= userChallenge.challenge.goal;

        await tx.userChallenge.update({
          where: { id: userChallenge.id },
          data: {
            progress: newProgress,
            isCompleted,
          },
        });

        // If challenge completed, award points
        if (isCompleted) {
          await tx.user.update({
            where: { id: user!.id },
            data: {
              totalPoints: {
                increment: userChallenge.challenge.rewardPoints,
              },
            },
          });
        }
      }

      return {
        sortEvent,
        user: updatedUser,
        challenges: activeChallenges,
      };
    });

    return successResponse(result);
  } catch (error) {
    console.error('Sort event error:', error);
    return errorResponse('Failed to process sort event', 500);
  }
} 