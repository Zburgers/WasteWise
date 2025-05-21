/**
 * Leaderboard API Route
 * 
 * This API is currently disabled as we're using dummy data for the MVP.
 * 
 * Future Implementation Notes:
 * 1. Database Integration:
 *    - Uses Prisma ORM with PostgreSQL
 *    - Tables: User, SortEvent, Badge, UserBadge
 * 
 * 2. Features to implement:
 *    - Real-time leaderboard updates
 *    - Time-based filtering (weekly/monthly/all-time)
 *    - Pagination with customizable limits
 *    - User rank calculation
 *    - Badge display integration
 * 
 * 3. Performance Considerations:
 *    - Implement caching for frequent requests
 *    - Add rate limiting
 *    - Optimize database queries for large datasets
 * 
 * 4. Security:
 *    - Add proper authentication checks
 *    - Implement request validation
 *    - Add rate limiting per user
 */

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
  // Return dummy data for MVP
  return NextResponse.json({
    success: true,
    data: {
      users: [
        {
          id: '1',
          walletAddress: '0x1234...5678',
          totalPoints: 1500,
          badgeLevel: 3,
          badges: [
            { name: 'Eco Warrior', imageUrl: '/badges/eco-warrior.png' }
          ]
        },
        {
          id: '2',
          walletAddress: '0x8765...4321',
          totalPoints: 1200,
          badgeLevel: 2,
          badges: [
            { name: 'Eco Rookie', imageUrl: '/badges/eco-rookie.png' }
          ]
        }
      ],
      pagination: {
        page: 1,
        limit: 10,
        total: 2,
        pages: 1
      },
      userRank: 1
    }
  });

  /* Original implementation commented out for future reference
  try {
    console.log('Leaderboard API called', new Date().toISOString());
    const walletAddress = getWalletAddress(request.headers);
    console.log('Wallet address from headers:', walletAddress || 'Not authenticated');
    const page = Number(request.nextUrl.searchParams.get('page')) || 1;
    const limit = Math.min(Number(request.nextUrl.searchParams.get('limit')) || 10, 50); // Cap at 50 for performance
    const timeFilter = request.nextUrl.searchParams.get('timeFilter') || 'all';
    const skip = (page - 1) * limit;

    console.log('Fetching users with params:', { page, limit, skip, timeFilter });

    // Get top users based on time filter
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
        sortEvents: timeFilter !== 'all' ? {
          where: {
            createdAt: {
              gte: timeFilter === 'weekly' 
                ? new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                : new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
            }
          },
          select: {
            pointsEarned: true
          }
        } : undefined
      },
      orderBy: {
        totalPoints: 'desc'
      },
      skip,
      take: limit,
    }).catch((error: Error) => {
      console.error('Error fetching users:', error);
      throw new Error('Database error while fetching users');
    });

    // Calculate points based on time filter
    const usersWithFilteredPoints = users.map((user: LeaderboardUser & { sortEvents?: Array<{ pointsEarned: number }> }) => {
      if (timeFilter === 'all') {
        return user;
      }
      
      const filteredPoints = user.sortEvents?.reduce((sum: number, event: { pointsEarned: number }) => sum + event.pointsEarned, 0) || 0;
      return {
        ...user,
        totalPoints: filteredPoints
      };
    });

    // Sort users by filtered points if needed
    const sortedUsers = timeFilter === 'all' 
      ? usersWithFilteredPoints 
      : usersWithFilteredPoints.sort((a: { totalPoints: number }, b: { totalPoints: number }) => b.totalPoints - a.totalPoints);

    console.log(`Found ${sortedUsers.length} users`);

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
      users: sortedUsers.map((user: LeaderboardUser) => ({
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
  */
}
