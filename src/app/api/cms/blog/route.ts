import { NextRequest, NextResponse } from 'next/server';
import { getBlogPosts } from '@/lib/cms-api';
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
    const author = searchParams.get('author');
    const search = searchParams.get('search');
    
    if (status) params.filters!.status = status;
    if (category) params.filters!.category = category;
    if (author) params.filters!.author = author;
    if (search) params.filters!.search = search;
    
    const response = await getBlogPosts(params);
    
    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600'
      }
    });
  } catch (error) {
    console.error('Blog posts API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}
