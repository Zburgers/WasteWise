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

    // Determine newly earned badges and create UserBadge entries
    const newlyEarnedBadges: string[] = [];
    const existingUserBadgeIds = new Set(user.badges.map(ub => ub.badgeId));

    for (const badge of allBadges) {
      let earned = false;
      // Check earning criteria based on badge requirements
      if (user.totalPoints >= badge.requiredPoints) {
         // This is a simplified example; real badges might have other criteria (e.g., itemsSorted, challengesCompleted)
         // TODO: Implement more complex badge earning logic based on other user stats
         earned = true;
      }

      if (earned && !existingUserBadgeIds.has(badge.id)) {
         // Badge is newly earned, create a UserBadge entry
         await prisma.userBadge.create({
           data: {
             userId: user.id,
             badgeId: badge.id,
           },
         });
         newlyEarnedBadges.push(badge.id);
      }
    }

    // Re-fetch user with updated badges if any were newly earned
    let updatedUser = user;
    if (newlyEarnedBadges.length > 0) {
      updatedUser = await prisma.user.findUnique({
         where: { walletAddress },
         include: {
           badges: {
             include: { badge: true },
           },
         },
      }) || user; // Fallback to original user if re-fetch fails
    }

    // Map badges with earned status (including newly earned ones)
    const badgesWithStatus = allBadges.map((badge: Badge) => {
      const userBadge = updatedUser.badges.find((ub: UserBadge & { badge: Badge }) => ub.badgeId === badge.id);
      return {
        ...badge,
        earned: !!userBadge,
        minted: userBadge?.minted || false,
      };
    });

    return successResponse({
      badges: badgesWithStatus,
      totalEarned: updatedUser.badges.length,
      totalBadges: allBadges.length,
      newlyEarnedBadgeIds: newlyEarnedBadges, // Optionally return IDs of newly earned badges
    });
  } catch (error) {
    console.error('Badges error:', error);
    // Return a more generic error to the client for security
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