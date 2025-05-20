// filepath: /home/naki/WasteWise/src/app/api/leaderboard/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { errorResponse, getWalletAddress } from '@/lib/api-utils';

// Force Node.js runtime for this API route
export const runtime = 'nodejs';

interface LeaderboardUser {
  id: string;
  walletAddress: string;
  totalPoints: number;
  badgeLevel: number;
  badges: Array<{
    badge: {
      name: string;
      imageUrl: string;
    };
  }>;
}

export async function GET(request: NextRequest) {
  try {
    console.log('Leaderboard API called', new Date().toISOString());
    const walletAddress = getWalletAddress(request.headers);
    console.log('Wallet address from headers:', walletAddress);
    const page = Number(request.nextUrl.searchParams.get('page')) || 1;
    const limit = Number(request.nextUrl.searchParams.get('limit')) || 10;
    const skip = (page - 1) * limit;

    console.log('Fetching users with params:', { page, limit, skip });

    // Get top users
    const users = await prisma.user.findMany({
      select: {
        id: true,
        walletAddress: true,
        totalPoints: true,
        badgeLevel: true,
        badges: {
          select: {
            badge: {
              select: {
                name: true,
                imageUrl: true,
              },
            },
          },
        },
      },
      orderBy: {
        totalPoints: 'desc',
      },
      skip,
      take: limit,
    }).catch((error: Error) => {
      console.error('Error fetching users:', error);
      throw new Error('Database error while fetching users');
    });

    console.log(`Found ${users.length} users`);

    // Get total count for pagination
    const total = await prisma.user.count().catch((error: Error) => {
      console.error('Error counting users:', error);
      throw new Error('Database error while counting users');
    });

    console.log('Total users:', total);

    // Get current user's rank if authenticated
    let userRank = null;
    if (walletAddress) {
      try {
        const userWithRank = await prisma.$queryRaw`
          SELECT rank
          FROM (
            SELECT 
              "walletAddress",
              ROW_NUMBER() OVER (ORDER BY "totalPoints" DESC) as rank
            FROM "User"
          ) ranked
          WHERE "walletAddress" = ${walletAddress}
        `;
        if (userWithRank && Array.isArray(userWithRank) && userWithRank.length > 0) {
          userRank = Number(userWithRank[0].rank);
          console.log('User rank:', userRank);
        }
      } catch (error) {
        console.error('Error fetching user rank:', error);
        // Don't throw here, just log the error and continue
      }
    }

    const response = {
      users: users.map((user: LeaderboardUser) => ({
        ...user,
        walletAddress: `${user.walletAddress.slice(0, 6)}...${user.walletAddress.slice(-4)}`,
        badges: user.badges.map((b: { badge: { name: string; imageUrl: string } }) => b.badge),
      })),
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
      userRank,
    };

    console.log('Sending response:', response);
    // Use NextResponse directly instead of helper function
    return NextResponse.json({
      success: true,
      data: response
    });
  } catch (error) {
    console.error('Leaderboard error:', error);
    return errorResponse(
      error instanceof Error ? error.message : 'Failed to fetch leaderboard',
      500
    );
  }
}
