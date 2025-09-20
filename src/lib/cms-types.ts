// Mock CMS Types - Simulating Strapi/Sanity/Contentful structure

export interface CMSImage {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
  formats?: {
    thumbnail?: { url: string; width: number; height: number };
    small?: { url: string; width: number; height: number };
    medium?: { url: string; width: number; height: number };
    large?: { url: string; width: number; height: number };
  };
}

export interface CMSAuthor {
  id: string;
  name: string;
  email: string;
  bio?: string;
  avatar?: CMSImage;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface CMSCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
}

export interface CMSTag {
  id: string;
  name: string;
  slug: string;
}

export interface CMSBlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: CMSImage;
  author: CMSAuthor;
  category: CMSCategory;
  tags: CMSTag[];
  publishedAt: string;
  updatedAt: string;
  status: 'draft' | 'published' | 'archived';
  readingTime: number;
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogImage?: CMSImage;
  };
}

export interface CMSGameUpdate {
  id: string;
  title: string;
  slug: string;
  version: string;
  gameId: string;
  gameName: string;
  description: string;
  changelog: string;
  releaseDate: string;
  downloadUrl?: string;
  fileSize?: string;
  platforms: string[];
  isHotfix: boolean;
  isMajorUpdate: boolean;
  images: CMSImage[];
  author: CMSAuthor;
}

export interface CMSNewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: CMSImage;
  author: CMSAuthor;
  publishedAt: string;
  updatedAt: string;
  status: 'draft' | 'published' | 'archived';
  type: 'announcement' | 'press-release' | 'community' | 'development';
  priority: 'low' | 'medium' | 'high';
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogImage?: CMSImage;
  };
}

export interface CMSPage {
  id: string;
  title: string;
  slug: string;
  content: string;
  template: 'default' | 'landing' | 'game-detail' | 'about';
  publishedAt: string;
  updatedAt: string;
  status: 'draft' | 'published' | 'archived';
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogImage?: CMSImage;
  };
  components?: CMSComponent[];
}

export interface CMSComponent {
  id: string;
  type: 'hero' | 'text-block' | 'image-gallery' | 'cta-section' | 'testimonials' | 'features';
  data: Record<string, any>;
  order: number;
}

export interface CMSGameContent {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  genre: string[];
  platforms: string[];
  releaseDate: string;
  status: 'development' | 'early-access' | 'released' | 'coming-soon';
  price: {
    base: number;
    currency: string;
    discount?: {
      percentage: number;
      validUntil: string;
    };
  };
  media: {
    logo?: CMSImage;
    coverImage: CMSImage;
    screenshots: CMSImage[];
    trailers: {
      id: string;
      title: string;
      url: string;
      thumbnail: CMSImage;
      duration: number;
    }[];
  };
  systemRequirements: {
    minimum: Record<string, string>;
    recommended: Record<string, string>;
  };
  features: string[];
  dlc?: {
    id: string;
    name: string;
    description: string;
    price: number;
    releaseDate: string;
    image: CMSImage;
  }[];
  reviews?: {
    score: number;
    source: string;
    quote?: string;
    url?: string;
  }[];
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogImage?: CMSImage;
  };
}

// API Response Types
export interface CMSApiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface CMSApiListResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Query Parameters
export interface CMSQueryParams {
  page?: number;
  pageSize?: number;
  sort?: string;
  filters?: Record<string, any>;
  populate?: string[];
  fields?: string[];
  publicationState?: 'live' | 'preview';
}

// CMS Configuration
export interface CMSConfig {
  apiUrl: string;
  apiKey?: string;
  environment: 'development' | 'staging' | 'production';
  cacheTimeout: number;
  defaultPageSize: number;
}
