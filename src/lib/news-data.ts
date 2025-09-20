export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  imageUrl: string;
  featuredImage: string;
  slug: string;
  readTime: number;
  featured: boolean;
}

export const newsCategories = [
  'All',
  'Game Development',
  'Company News',
  'Industry Insights',
  'Technology',
  'Community'
];

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Introducing Our Revolutionary Game Engine: DeckEngine 2.0',
    excerpt: 'After two years of development, we\'re excited to unveil DeckEngine 2.0, featuring advanced AI-driven procedural generation and real-time ray tracing capabilities.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    author: 'Sarah Chen',
    publishedAt: '2024-01-15',
    category: 'Technology',
    tags: ['Game Engine', 'AI', 'Ray Tracing', 'Innovation'],
    imageUrl: '/images/news/deck-engine-2.jpg',
    featuredImage: '/images/news/deck-engine-2.jpg',
    slug: 'deck-engine-2-0',
    readTime: 8,
    featured: true
  },
  {
    id: '2',
    title: 'Behind the Scenes: Creating Immersive Worlds in Quantum Realms',
    excerpt: 'Dive deep into our creative process and discover how our team crafted the breathtaking environments of our latest AAA title.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    author: 'Marcus Rodriguez',
    publishedAt: '2024-01-12',
    category: 'Game Development',
    tags: ['World Building', 'Art Direction', 'Quantum Realms'],
    imageUrl: '/images/news/quantum-realms-dev.jpg',
    featuredImage: '/images/news/quantum-realms-dev.jpg',
    slug: 'quantum-realms-behind-scenes',
    readTime: 6,
    featured: true
  },
  {
    id: '3',
    title: 'DeckDanis Wins \'Studio of the Year\' at Global Gaming Awards',
    excerpt: 'We\'re honored to receive this prestigious recognition for our commitment to innovation and excellence in game development.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    author: 'Emily Watson',
    publishedAt: '2024-01-10',
    category: 'Company News',
    tags: ['Awards', 'Recognition', 'Achievement'],
    imageUrl: '/images/news/studio-award.jpg',
    featuredImage: '/images/news/studio-award.jpg',
    slug: 'studio-of-the-year-award',
    readTime: 4,
    featured: false
  },
  {
    id: '4',
    title: 'The Future of Gaming: AI and Procedural Generation',
    excerpt: 'Exploring how artificial intelligence is revolutionizing game development and creating infinite possibilities for players.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    author: 'Dr. Alex Kim',
    publishedAt: '2024-01-08',
    category: 'Industry Insights',
    tags: ['AI', 'Procedural Generation', 'Future Tech'],
    imageUrl: '/images/news/ai-gaming.jpg',
    featuredImage: '/images/news/ai-gaming.jpg',
    slug: 'future-of-gaming-ai',
    readTime: 10,
    featured: false
  },
  {
    id: '5',
    title: 'Community Spotlight: Player-Created Content in Neon Nights',
    excerpt: 'Celebrating the incredible creativity of our community and showcasing the most impressive player-generated content.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    author: 'Jessica Park',
    publishedAt: '2024-01-05',
    category: 'Community',
    tags: ['Community', 'User Generated Content', 'Neon Nights'],
    imageUrl: '/images/news/community-content.jpg',
    featuredImage: '/images/news/community-content.jpg',
    slug: 'community-spotlight-neon-nights',
    readTime: 5,
    featured: false
  },
  {
    id: '6',
    title: 'Expanding Our Team: 50 New Positions Open Across All Departments',
    excerpt: 'Join our growing family! We\'re looking for talented individuals to help us create the next generation of gaming experiences.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    author: 'Michael Thompson',
    publishedAt: '2024-01-03',
    category: 'Company News',
    tags: ['Hiring', 'Careers', 'Growth'],
    imageUrl: '/images/news/team-expansion.jpg',
    featuredImage: '/images/news/team-expansion.jpg',
    slug: 'team-expansion-50-positions',
    readTime: 3,
    featured: false
  },
  {
    id: '7',
    title: 'Technical Deep Dive: Optimizing Performance for Next-Gen Consoles',
    excerpt: 'Learn about our optimization techniques and how we achieve stunning visuals while maintaining 60fps on the latest gaming hardware.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    author: 'David Liu',
    publishedAt: '2024-01-01',
    category: 'Technology',
    tags: ['Performance', 'Optimization', 'Next-Gen'],
    imageUrl: '/images/news/performance-optimization.jpg',
    featuredImage: '/images/news/performance-optimization.jpg',
    slug: 'performance-optimization-next-gen',
    readTime: 12,
    featured: false
  },
  {
    id: '8',
    title: 'Year in Review: 2023 Achievements and 2024 Roadmap',
    excerpt: 'Reflecting on our accomplishments this year and sharing our exciting plans for the future of DeckDanis.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    author: 'CEO Daniel Decker',
    publishedAt: '2023-12-31',
    category: 'Company News',
    tags: ['Year Review', 'Roadmap', 'Future Plans'],
    imageUrl: '/images/news/year-review.jpg',
    featuredImage: '/images/news/year-review.jpg',
    slug: 'year-review-2023-roadmap-2024',
    readTime: 7,
    featured: false
  }
];

export function getArticlesByCategory(category: string): NewsArticle[] {
  if (category === 'All') {
    return newsArticles;
  }
  return newsArticles.filter(article => article.category === category);
}

export function getFeaturedArticles(): NewsArticle[] {
  return newsArticles.filter(article => article.featured);
}

export function searchArticles(query: string): NewsArticle[] {
  const lowercaseQuery = query.toLowerCase();
  return newsArticles.filter(article => 
    article.title.toLowerCase().includes(lowercaseQuery) ||
    article.excerpt.toLowerCase().includes(lowercaseQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

export function getArticleById(id: string): NewsArticle | undefined {
  return newsArticles.find(article => article.id === id);
}
