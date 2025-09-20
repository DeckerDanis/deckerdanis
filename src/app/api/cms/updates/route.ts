import { NextRequest, NextResponse } from 'next/server';
import { getGameUpdates } from '@/lib/cms-api';
import { CMSQueryParams } from '@/lib/cms-types';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Parse query parameters
    const params: CMSQueryParams = {
      page: parseInt(searchParams.get('page') || '1'),
      pageSize: parseInt(searchParams.get('pageSize') || '10'),
      sort: searchParams.get('sort') || undefined,
      filters: {}
    };
    
    // Parse filters
    const status = searchParams.get('status');
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    
    if (status) params.filters!.status = status;
    if (category) params.filters!.category = category;
    if (search) params.filters!.search = search;
    
    const response = await getGameUpdates(params);
    
    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600'
      }
    });
  } catch (error) {
    console.error('Game updates API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch game updates' },
      { status: 500 }
    );
  }
}
