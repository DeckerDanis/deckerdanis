import { 
  CMSBlogPost, 
  CMSGameUpdate, 
  CMSNewsArticle, 
  CMSPage, 
  CMSGameContent,
  CMSApiResponse,
  CMSApiListResponse,
  CMSQueryParams,
  CMSConfig
} from './cms-types';
import { 
  mockBlogPosts, 
  mockGameUpdates, 
  mockNewsArticles, 
  mockPages, 
  mockGameContent 
} from './cms-mock-data';

// CMS Configuration
const cmsConfig: CMSConfig = {
  apiUrl: process.env.NEXT_PUBLIC_CMS_API_URL || 'https://api.deckerdanis.com',
  apiKey: process.env.CMS_API_KEY,
  environment: (process.env.NODE_ENV as 'development' | 'staging' | 'production') || 'development',
  cacheTimeout: 5 * 60 * 1000, // 5 minutes
  defaultPageSize: 10
};

// Simple in-memory cache for development
const cache = new Map<string, { data: any; timestamp: number }>();

// Cache utilities
function getCacheKey(endpoint: string, params?: CMSQueryParams): string {
  const paramString = params ? JSON.stringify(params) : '';
  return `${endpoint}_${paramString}`;
}

function getFromCache<T>(key: string): T | null {
  const cached = cache.get(key);
  if (!cached) return null;
  
  const isExpired = Date.now() - cached.timestamp > cmsConfig.cacheTimeout;
  if (isExpired) {
    cache.delete(key);
    return null;
  }
  
  return cached.data as T;
}

function setCache<T>(key: string, data: T): void {
  cache.set(key, { data, timestamp: Date.now() });
}

// Utility functions for mock data filtering and pagination
function applyFilters<T extends Record<string, any>>(data: T[], filters?: Record<string, any>): T[] {
  if (!filters) return data;
  
  return data.filter(item => {
    return Object.entries(filters).every(([key, value]) => {
      if (key === 'status' && item.status) {
        return item.status === value;
      }
      if (key === 'category' && item.category) {
        return item.category.slug === value || item.category.id === value;
      }
      if (key === 'author' && item.author) {
        return item.author.id === value || item.author.name.toLowerCase().includes(value.toLowerCase());
      }
      if (key === 'search' && typeof value === 'string') {
        const searchTerm = value.toLowerCase();
        return (
          item.title?.toLowerCase().includes(searchTerm) ||
          item.excerpt?.toLowerCase().includes(searchTerm) ||
          item.content?.toLowerCase().includes(searchTerm)
        );
      }
      return true;
    });
  });
}

function applySorting<T extends Record<string, any>>(data: T[], sort?: string): T[] {
  if (!sort) return data;
  
  const [field, direction = 'asc'] = sort.split(':');
  
  return [...data].sort((a, b) => {
    let aValue = a[field];
    let bValue = b[field];
    
    // Handle nested fields (e.g., 'author.name')
    if (field.includes('.')) {
      const fields = field.split('.');
      aValue = fields.reduce((obj, f) => obj?.[f], a);
      bValue = fields.reduce((obj, f) => obj?.[f], b);
    }
    
    // Handle date sorting
    if (field.includes('Date') || field.includes('At')) {
      aValue = new Date(aValue).getTime();
      bValue = new Date(bValue).getTime();
    }
    
    if (aValue < bValue) return direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return direction === 'asc' ? 1 : -1;
    return 0;
  });
}

function applyPagination<T>(data: T[], page = 1, pageSize = cmsConfig.defaultPageSize): {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
} {
  const total = data.length;
  const pageCount = Math.ceil(total / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  
  return {
    data: data.slice(startIndex, endIndex),
    pagination: {
      page,
      pageSize,
      pageCount,
      total
    }
  };
}

// Simulate API delay for realistic behavior
function simulateDelay(ms = 100): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Error simulation for testing
function shouldSimulateError(): boolean {
  // 5% chance of error in development for testing
  return cmsConfig.environment === 'development' && Math.random() < 0.05;
}

// Blog Posts API
export async function getBlogPosts(params?: CMSQueryParams): Promise<CMSApiListResponse<CMSBlogPost>> {
  const cacheKey = getCacheKey('blog-posts', params);
  const cached = getFromCache<CMSApiListResponse<CMSBlogPost>>(cacheKey);
  
  if (cached) {
    return cached;
  }
  
  await simulateDelay();
  
  if (shouldSimulateError()) {
    throw new Error('Failed to fetch blog posts');
  }
  
  let filteredData = applyFilters(mockBlogPosts, params?.filters);
  filteredData = applySorting(filteredData, params?.sort || 'publishedAt:desc');
  
  const result = applyPagination(filteredData, params?.page, params?.pageSize);
  
  const response: CMSApiListResponse<CMSBlogPost> = {
    data: result.data,
    meta: {
      pagination: result.pagination
    }
  };
  
  setCache(cacheKey, response);
  return response;
}

export async function getBlogPost(slug: string): Promise<CMSApiResponse<CMSBlogPost>> {
  const cacheKey = getCacheKey(`blog-post-${slug}`);
  const cached = getFromCache<CMSApiResponse<CMSBlogPost>>(cacheKey);
  
  if (cached) {
    return cached;
  }
  
  await simulateDelay();
  
  if (shouldSimulateError()) {
    throw new Error(`Failed to fetch blog post: ${slug}`);
  }
  
  const post = mockBlogPosts.find(p => p.slug === slug);
  
  if (!post) {
    throw new Error(`Blog post not found: ${slug}`);
  }
  
  const response: CMSApiResponse<CMSBlogPost> = {
    data: post,
    meta: {}
  };
  
  setCache(cacheKey, response);
  return response;
}

// Game Updates API
export async function getGameUpdates(params?: CMSQueryParams): Promise<CMSApiListResponse<CMSGameUpdate>> {
  const cacheKey = getCacheKey('game-updates', params);
  const cached = getFromCache<CMSApiListResponse<CMSGameUpdate>>(cacheKey);
  
  if (cached) {
    return cached;
  }
  
  await simulateDelay();
  
  if (shouldSimulateError()) {
    throw new Error('Failed to fetch game updates');
  }
  
  let filteredData = applyFilters(mockGameUpdates, params?.filters);
  filteredData = applySorting(filteredData, params?.sort || 'releaseDate:desc');
  
  const result = applyPagination(filteredData, params?.page, params?.pageSize);
  
  const response: CMSApiListResponse<CMSGameUpdate> = {
    data: result.data,
    meta: {
      pagination: result.pagination
    }
  };
  
  setCache(cacheKey, response);
  return response;
}

export async function getGameUpdate(slug: string): Promise<CMSApiResponse<CMSGameUpdate>> {
  const cacheKey = getCacheKey(`game-update-${slug}`);
  const cached = getFromCache<CMSApiResponse<CMSGameUpdate>>(cacheKey);
  
  if (cached) {
    return cached;
  }
  
  await simulateDelay();
  
  if (shouldSimulateError()) {
    throw new Error(`Failed to fetch game update: ${slug}`);
  }
  
  const update = mockGameUpdates.find(u => u.slug === slug);
  
  if (!update) {
    throw new Error(`Game update not found: ${slug}`);
  }
  
  const response: CMSApiResponse<CMSGameUpdate> = {
    data: update,
    meta: {}
  };
  
  setCache(cacheKey, response);
  return response;
}

// News Articles API
export async function getNewsArticles(params?: CMSQueryParams): Promise<CMSApiListResponse<CMSNewsArticle>> {
  const cacheKey = getCacheKey('news-articles', params);
  const cached = getFromCache<CMSApiListResponse<CMSNewsArticle>>(cacheKey);
  
  if (cached) {
    return cached;
  }
  
  await simulateDelay();
  
  if (shouldSimulateError()) {
    throw new Error('Failed to fetch news articles');
  }
  
  let filteredData = applyFilters(mockNewsArticles, params?.filters);
  filteredData = applySorting(filteredData, params?.sort || 'publishedAt:desc');
  
  const result = applyPagination(filteredData, params?.page, params?.pageSize);
  
  const response: CMSApiListResponse<CMSNewsArticle> = {
    data: result.data,
    meta: {
      pagination: result.pagination
    }
  };
  
  setCache(cacheKey, response);
  return response;
}

// Pages API
export async function getPage(slug: string): Promise<CMSApiResponse<CMSPage>> {
  const cacheKey = getCacheKey(`page-${slug}`);
  const cached = getFromCache<CMSApiResponse<CMSPage>>(cacheKey);
  
  if (cached) {
    return cached;
  }
  
  await simulateDelay();
  
  if (shouldSimulateError()) {
    throw new Error(`Failed to fetch page: ${slug}`);
  }
  
  const page = mockPages.find(p => p.slug === slug);
  
  if (!page) {
    throw new Error(`Page not found: ${slug}`);
  }
  
  const response: CMSApiResponse<CMSPage> = {
    data: page,
    meta: {}
  };
  
  setCache(cacheKey, response);
  return response;
}

// Game Content API
export async function getGames(params?: CMSQueryParams): Promise<CMSApiListResponse<CMSGameContent>> {
  const cacheKey = getCacheKey('games', params);
  const cached = getFromCache<CMSApiListResponse<CMSGameContent>>(cacheKey);
  
  if (cached) {
    return cached;
  }
  
  await simulateDelay();
  
  if (shouldSimulateError()) {
    throw new Error('Failed to fetch games');
  }
  
  let filteredData = applyFilters(mockGameContent, params?.filters);
  filteredData = applySorting(filteredData, params?.sort || 'releaseDate:desc');
  
  const result = applyPagination(filteredData, params?.page, params?.pageSize);
  
  const response: CMSApiListResponse<CMSGameContent> = {
    data: result.data,
    meta: {
      pagination: result.pagination
    }
  };
  
  setCache(cacheKey, response);
  return response;
}

export async function getGame(slug: string): Promise<CMSApiResponse<CMSGameContent>> {
  const cacheKey = getCacheKey(`game-${slug}`);
  const cached = getFromCache<CMSApiResponse<CMSGameContent>>(cacheKey);
  
  if (cached) {
    return cached;
  }
  
  await simulateDelay();
  
  if (shouldSimulateError()) {
    throw new Error(`Failed to fetch game: ${slug}`);
  }
  
  const game = mockGameContent.find(g => g.slug === slug);
  
  if (!game) {
    throw new Error(`Game not found: ${slug}`);
  }
  
  const response: CMSApiResponse<CMSGameContent> = {
    data: game,
    meta: {}
  };
  
  setCache(cacheKey, response);
  return response;
}

// Utility functions for React components
export function clearCache(): void {
  cache.clear();
}

export function getCacheStats(): { size: number; keys: string[] } {
  return {
    size: cache.size,
    keys: Array.from(cache.keys())
  };
}

// Error boundary helper
export class CMSError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public endpoint?: string
  ) {
    super(message);
    this.name = 'CMSError';
  }
}

// React hooks for easier integration
export function useCMSErrorHandler() {
  return (error: unknown) => {
    if (error instanceof CMSError) {
      console.error(`CMS Error [${error.statusCode}] at ${error.endpoint}:`, error.message);
    } else {
      console.error('Unexpected CMS error:', error);
    }
  };
}
