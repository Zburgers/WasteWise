// This is a simple static endpoint that doesn't require any database access
// It can be used to test if the API structure works correctly

import { NextResponse } from 'next/server';

// Force Node.js runtime for this API route
export const runtime = 'nodejs';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: {
      message: 'Static API endpoint is working',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      mockLeaderboard: [
        { id: '1', position: 1, walletAddress: '0x1abc...def1', points: 1000 },
        { id: '2', position: 2, walletAddress: '0x2abc...def2', points: 900 },
        { id: '3', position: 3, walletAddress: '0x3abc...def3', points: 800 },
        { id: '4', position: 4, walletAddress: '0x4abc...def4', points: 700 },
        { id: '5', position: 5, walletAddress: '0x5abc...def5', points: 600 }
      ]
    }
  });
}
