import { NextRequest, NextResponse } from 'next/server';
import { getGameUpdate } from '@/lib/cms-api';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    
    if (!slug) {
      return NextResponse.json(
        { error: 'Game update slug is required' },
        { status: 400 }
      );
    }
    
    const response = await getGameUpdate(slug);
    
    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=1200'
      }
    });
  } catch (error) {
    console.error('Game update API error:', error);
    
    if (error instanceof Error && error.message.includes('not found')) {
      return NextResponse.json(
        { error: 'Game update not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to fetch game update' },
      { status: 500 }
    );
  }
}