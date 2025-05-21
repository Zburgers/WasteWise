import { NextResponse } from 'next/server';

export type ApiResponse<T = any> = {
  success: boolean;
  data?: T;
  error?: string;
};

export function successResponse<T>(data: T): NextResponse {
  console.log('Success response being created with data:', data);
  return NextResponse.json({
    success: true,
    data,
  });
}

export function errorResponse(message: string, status = 400): NextResponse {
  return NextResponse.json(
    {
      success: false,
      error: message,
    },
    { status }
  );
}

export function getWalletAddress(headers: Headers): string | null {
  // Try to get the wallet address from the Authorization header first
  const authHeader = headers.get('authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7); // Remove 'Bearer ' prefix
  }
  
  // Fall back to the x-user-address header if Authorization is not present
  const address = headers.get('x-user-address');
  if (!address) {
    console.warn('No wallet address found in headers');
    return null;
  }
  
  return address;
}

export async function getUserByWallet(walletAddress: string) {
  const { prisma } = await import('./prisma');
  return prisma.user.findUnique({
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
      },
    },
  });
} 