import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // Only apply to API routes that require authentication
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // Skip auth for public routes and specific endpoints
    if (request.nextUrl.pathname.startsWith('/api/public/') || 
        request.nextUrl.pathname.startsWith('/api/leaderboard') ||
        request.nextUrl.pathname.startsWith('/api/health') ||
        request.nextUrl.pathname.startsWith('/api/user-exists') ||
        request.nextUrl.pathname.startsWith('/api/user-register')) {
      return NextResponse.next();
    }

    // For protected routes, check for Authorization header
    // This is a simplified check - in a real app, you would validate the token
    const authHeader = request.headers.get('Authorization');
    if (!authHeader) {
      return new NextResponse(
        JSON.stringify({ error: 'Authentication required' }),
        { status: 401, headers: { 'content-type': 'application/json' } }
      );
    }

    return NextResponse.next();
  }

  // For non-API routes, just continue
  return NextResponse.next();
}

export const config = {
  matcher: ['/api/:path*']
}; 