import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getCurrentSession } from './lib/session';

export async function middleware(request: NextRequest) {
  // Only apply to API routes
  if (!request.nextUrl.pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  // Skip auth for public routes and leaderboard
  if (request.nextUrl.pathname.startsWith('/api/public/') || 
      request.nextUrl.pathname.startsWith('/api/leaderboard') ||
      request.nextUrl.pathname.startsWith('/api/health')) {
    console.log('Skipping auth for public route:', request.nextUrl.pathname);
    return NextResponse.next();
  }

  try {
    const session = await getCurrentSession();
    if (!session) {
      return new NextResponse(
        JSON.stringify({ error: 'Authentication required' }),
        { status: 401, headers: { 'content-type': 'application/json' } }
      );
    }

    // Add user info to request headers for API routes
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-address', session.address);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch (error) {
    console.error('Auth middleware error:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'content-type': 'application/json' } }
    );
  }
}

export const config = {
  matcher: '/api/:path*',
  runtime: 'nodejs'
}; 