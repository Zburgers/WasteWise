import { NextResponse } from 'next/server';

// Force Node.js runtime for this API route
export const runtime = 'nodejs';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: {
      status: 'ok',
      timestamp: new Date().toISOString(),
      message: 'WasteWise API is running'
    }
  });
}
