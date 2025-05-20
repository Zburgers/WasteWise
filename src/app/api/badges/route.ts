import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import { successResponse, errorResponse, getWalletAddress } from '@/lib/api-utils';

interface Badge {
  id: string;
  name: string;
  description: string;
  requiredPoints: number;
  nftTokenId: string | null;
  imageUrl: string;
}

interface UserBadge {
  badgeId: string;
  minted: boolean;
}

export async function GET(request: NextRequest) {
  try {
    const walletAddress = getWalletAddress(request.headers);
    if (!walletAddress) {
      return errorResponse('Authentication required', 401);
    }

    // Get user
    const user = await prisma.user.findUnique({
      where: { walletAddress },
      include: {
        badges: {
          include: {
            badge: true,
          },
        },
      },
    });

    if (!user) {
      return errorResponse('User not found', 404);
    }

    // Get all badges
    const allBadges = await prisma.badge.findMany({
      orderBy: {
        requiredPoints: 'asc',
      },
    });

    // Map badges with earned status
    const badges = allBadges.map((badge: Badge) => {
      const userBadge = user.badges.find((ub: UserBadge) => ub.badgeId === badge.id);
      return {
        ...badge,
        earned: !!userBadge,
        minted: userBadge?.minted || false,
      };
    });

    return successResponse({
      badges,
      totalEarned: user.badges.length,
      totalBadges: allBadges.length,
    });
  } catch (error) {
    console.error('Badges error:', error);
    return errorResponse('Failed to fetch badges', 500);
  }
}

export async function POST(request: NextRequest) {
  try {
    const walletAddress = getWalletAddress(request.headers);
    if (!walletAddress) {
      return errorResponse('Authentication required', 401);
    }

    const body = await request.json();
    const { badgeId } = body;

    if (!badgeId) {
      return errorResponse('Badge ID is required');
    }

    // Get user and badge
    const [user, badge] = await Promise.all([
      prisma.user.findUnique({
        where: { walletAddress },
        include: {
          badges: {
            where: {
              badgeId,
            },
          },
        },
      }),
      prisma.badge.findUnique({
        where: { id: badgeId },
      }),
    ]);

    if (!user) {
      return errorResponse('User not found', 404);
    }

    if (!badge) {
      return errorResponse('Badge not found', 404);
    }

    // Check if user has earned the badge
    const userBadge = user.badges[0];
    if (!userBadge) {
      return errorResponse('Badge not earned yet');
    }

    if (userBadge.minted) {
      return errorResponse('Badge already minted');
    }

    // TODO: Implement NFT minting logic here
    // For now, just mark as minted
    await prisma.userBadge.update({
      where: { id: userBadge.id },
      data: { minted: true },
    });

    return successResponse({
      message: 'Badge minted successfully',
      badge: {
        ...badge,
        minted: true,
      },
    });
  } catch (error) {
    console.error('Mint badge error:', error);
    return errorResponse('Failed to mint badge', 500);
  }
} 