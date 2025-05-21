import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const { walletAddress } = await request.json();

    if (!walletAddress) {
      return NextResponse.json({ error: 'Wallet address is required' }, { status: 400 });
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: {
        walletAddress,
      },
    });

    return NextResponse.json({ exists: !!user, user });
  } catch (error) {
    console.error('[API] Error checking if user exists:', error);
    // Return a more generic error to the client for security
    return NextResponse.json(
      { error: 'Failed to check user existence' },
      { status: 500 }
    );
  }
}
