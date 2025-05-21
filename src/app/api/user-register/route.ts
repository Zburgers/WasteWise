import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const { walletAddress, name, email } = await request.json();

    if (!walletAddress) {
      return NextResponse.json({ error: 'Wallet address is required' }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        walletAddress,
      },
    });

    if (existingUser) {
      // User exists, update their information
      const updatedUser = await prisma.user.update({
        where: {
          walletAddress,
        },
        data: {
          lastLogin: new Date(),
          ...(name && { name }),
          ...(email && { email }),
        },
      });

      return NextResponse.json({
        success: true,
        message: 'User profile updated',
        user: updatedUser,
        isNewUser: false
      });
    }

    // Create a new user if they don't exist
    const newUser = await prisma.user.create({
      data: {
        walletAddress,
        name,
        email,
        lastLogin: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      message: 'User registered successfully',
      user: newUser,
      isNewUser: true
    });

  } catch (error) {
    console.error('[API] Error registering user:', error);
    // Return a more generic error to the client for security
    return NextResponse.json(
      { error: 'Failed to process user registration' },
      { status: 500 }
    );
  }
}
