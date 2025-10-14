import { NextResponse } from 'next/server';

export async function GET() {
  // This is a simple endpoint that always returns unauthenticated
  // Sanity handles its own authentication when users visit /studio
  // This endpoint is just for the UI flow

  return NextResponse.json({
    isAuthenticated: false,
    message: 'Please proceed to Sanity Studio for authentication'
  });
}
