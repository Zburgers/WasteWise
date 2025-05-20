import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import { successResponse, errorResponse, getWalletAddress } from '@/lib/api-utils';
import type { Prisma } from '@prisma/client';

type SortEvent = {
  id: string;
  userId: string;
  itemType: string;
  pointsEarned: number;
  createdAt: Date;
};

export async function GET(request: NextRequest) {
  try {
    const walletAddress = getWalletAddress(request.headers);
    if (!walletAddress) {
      return errorResponse('Authentication required', 401);
    }

    const user = await prisma.user.findUnique({
      where: { walletAddress },
      include: {
        badges: {
          include: {
            badge: true,
          },
        },
        challenges: {
          include: {
            challenge: true,
          },
          where: {
            isCompleted: false,
          },
        },
        sortEvents: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 10,
        },
      },
    });

    if (!user) {
      return errorResponse('User not found', 404);
    }

    // Calculate badge level based on points
    const badgeLevel = Math.floor(user.totalPoints / 1000) + 1;

    // Update badge level if needed
    if (badgeLevel !== user.badgeLevel) {
      await prisma.user.update({
        where: { id: user.id },
        data: { badgeLevel },
      });
      user.badgeLevel = badgeLevel;
    }

    return successResponse({
      user: {
        ...user,
        sortEvents: user.sortEvents.map((event: SortEvent) => ({
          ...event,
          createdAt: event.createdAt.toISOString(),
        })),
      },
    });
  } catch (error) {
    console.error('User profile error:', error);
    return errorResponse('Failed to fetch user profile', 500);
  }
} 