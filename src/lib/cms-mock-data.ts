import { 
  CMSBlogPost, 
  CMSAuthor, 
  CMSCategory, 
  CMSTag, 
  CMSGameUpdate, 
  CMSNewsArticle, 
  CMSPage,
  CMSGameContent,
  CMSImage
} from './cms-types';

// Mock Images
const mockImages: Record<string, CMSImage> = {
  authorAvatar1: {
    id: 'img_001',
    url: '/images/authors/john-doe.jpg',
    alt: 'John Doe Avatar',
    width: 200,
    height: 200,
    formats: {
      thumbnail: { url: '/images/authors/john-doe-thumb.jpg', width: 50, height: 50 },
      small: { url: '/images/authors/john-doe-small.jpg', width: 100, height: 100 }
    }
  },
  blogFeatured1: {
    id: 'img_002',
    url: '/images/blog/game-development-insights.jpg',
    alt: 'Game Development Insights',
    width: 1200,
    height: 630,
    formats: {
      thumbnail: { url: '/images/blog/game-development-insights-thumb.jpg', width: 300, height: 157 },
      medium: { url: '/images/blog/game-development-insights-med.jpg', width: 800, height: 420 }
    }
  },
  gameScreenshot1: {
    id: 'img_003',
    url: '/images/games/mystic-realms/screenshot-1.jpg',
    alt: 'Mystic Realms Gameplay Screenshot',
    width: 1920,
    height: 1080
  }
};

// Mock Authors
const mockAuthors: CMSAuthor[] = [
  {
    id: 'author_001',
    name: 'John Doe',
    email: 'john.doe@deckerdanis.com',
    bio: 'Lead Game Designer with 10+ years of experience in RPG development.',
    avatar: mockImages.authorAvatar1,
    social: {
      twitter: '@johndoe_dev',
      linkedin: 'linkedin.com/in/johndoe',
      github: 'github.com/johndoe'
    }
  },
  {
    id: 'author_002',
    name: 'Sarah Chen',
    email: 'sarah.chen@deckerdanis.com',
    bio: 'Community Manager and Content Creator passionate about gaming culture.',
    social: {
      twitter: '@sarahchen_games'
    }
  }
];

// Mock Categories
const mockCategories: CMSCategory[] = [
  {
    id: 'cat_001',
    name: 'Development',
    slug: 'development',
    description: 'Behind-the-scenes content about game development',
    color: '#8B5CF6'
  },
  {
    id: 'cat_002',
    name: 'Community',
    slug: 'community',
    description: 'Community highlights and player stories',
    color: '#06B6D4'
  },
  {
    id: 'cat_003',
    name: 'Updates',
    slug: 'updates',
    description: 'Game updates and patch notes',
    color: '#10B981'
  }
];

// Mock Tags
const mockTags: CMSTag[] = [
  { id: 'tag_001', name: 'RPG', slug: 'rpg' },
  { id: 'tag_002', name: 'Game Design', slug: 'game-design' },
  { id: 'tag_003', name: 'Community', slug: 'community' },
  { id: 'tag_004', name: 'Tutorial', slug: 'tutorial' },
  { id: 'tag_005', name: 'Behind the Scenes', slug: 'behind-the-scenes' }
];

// Mock Blog Posts
export const mockBlogPosts: CMSBlogPost[] = [
  {
    id: 'post_001',
    title: 'The Art of Creating Immersive RPG Worlds',
    slug: 'art-of-creating-immersive-rpg-worlds',
    excerpt: 'Discover the techniques and philosophies behind building game worlds that captivate players for hundreds of hours.',
    content: `# The Art of Creating Immersive RPG Worlds

Creating an immersive RPG world is both an art and a science. It requires careful attention to detail, consistent world-building, and a deep understanding of what makes players feel truly engaged...

## World Building Fundamentals

Every great RPG world starts with a strong foundation. This includes:

- **Consistent Lore**: Every element should feel like it belongs
- **Rich History**: Past events that shape the current world
- **Diverse Cultures**: Different societies with unique customs
- **Environmental Storytelling**: Let the world tell its own story

## Character Development

Characters are the heart of any RPG. They should feel real, with their own motivations, flaws, and growth arcs...`,
    featuredImage: mockImages.blogFeatured1,
    author: mockAuthors[0],
    category: mockCategories[0],
    tags: [mockTags[0], mockTags[1], mockTags[4]],
    publishedAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    status: 'published',
    readingTime: 8,
    seo: {
      metaTitle: 'The Art of Creating Immersive RPG Worlds | DeckerDanis Blog',
      metaDescription: 'Learn the techniques behind building captivating RPG worlds that keep players engaged for hundreds of hours.',
      keywords: ['RPG', 'game development', 'world building', 'game design'],
      ogImage: mockImages.blogFeatured1
    }
  },
  {
    id: 'post_002',
    title: 'Community Spotlight: Player-Created Content',
    slug: 'community-spotlight-player-created-content',
    excerpt: 'Celebrating the amazing mods, fan art, and stories created by our incredible community.',
    content: `# Community Spotlight: Player-Created Content

Our community never ceases to amaze us with their creativity and passion...`,
    author: mockAuthors[1],
    category: mockCategories[1],
    tags: [mockTags[2], mockTags[0]],
    publishedAt: '2024-01-10T14:30:00Z',
    updatedAt: '2024-01-10T14:30:00Z',
    status: 'published',
    readingTime: 5,
    seo: {
      metaTitle: 'Community Spotlight: Player-Created Content | DeckerDanis',
      metaDescription: 'Celebrating amazing mods, fan art, and stories from our incredible gaming community.',
      keywords: ['community', 'fan art', 'mods', 'player content']
    }
  }
];

// Mock Game Updates
export const mockGameUpdates: CMSGameUpdate[] = [
  {
    id: 'update_001',
    title: 'Mystic Realms: The Shadow Update',
    slug: 'mystic-realms-shadow-update',
    version: '2.1.0',
    gameId: 'game_001',
    gameName: 'Mystic Realms',
    description: 'A major content update introducing the Shadow Realm, new character classes, and enhanced combat mechanics.',
    changelog: `## New Features
- Shadow Realm: Explore a dark parallel dimension
- Shadow Knight class: Master dark magic and stealth
- Enhanced combat system with combo attacks
- 15 new quests and storylines

## Improvements
- Improved AI behavior for NPCs
- Better performance optimization
- Enhanced graphics and lighting effects

## Bug Fixes
- Fixed inventory sorting issues
- Resolved quest progression bugs
- Fixed audio synchronization problems`,
    releaseDate: '2024-01-20T00:00:00Z',
    downloadUrl: 'https://store.steampowered.com/app/mystic-realms',
    fileSize: '2.3 GB',
    platforms: ['PC', 'Steam Deck'],
    isHotfix: false,
    isMajorUpdate: true,
    images: [mockImages.gameScreenshot1],
    author: mockAuthors[0]
  }
];

// Mock News Articles
export const mockNewsArticles: CMSNewsArticle[] = [
  {
    id: 'news_001',
    title: 'DeckerDanis Studios Announces Partnership with Indie Game Collective',
    slug: 'partnership-indie-game-collective',
    excerpt: 'We\'re excited to announce our new partnership that will bring more amazing indie games to players worldwide.',
    content: `# DeckerDanis Studios Announces Partnership with Indie Game Collective

We're thrilled to announce our strategic partnership with the Indie Game Collective...`,
    author: mockAuthors[1],
    publishedAt: '2024-01-18T09:00:00Z',
    updatedAt: '2024-01-18T09:00:00Z',
    status: 'published',
    type: 'announcement',
    priority: 'high',
    seo: {
      metaTitle: 'DeckerDanis Partners with Indie Game Collective | Press Release',
      metaDescription: 'DeckerDanis Studios announces strategic partnership to bring more indie games to players worldwide.',
      keywords: ['partnership', 'indie games', 'announcement', 'collaboration']
    }
  }
];

// Mock Pages
export const mockPages: CMSPage[] = [
  {
    id: 'page_001',
    title: 'About DeckerDanis Studios',
    slug: 'about',
    content: `# About DeckerDanis Studios

Founded in 2020, DeckerDanis Studios is an independent game development company...`,
    template: 'about',
    publishedAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T12:00:00Z',
    status: 'published',
    seo: {
      metaTitle: 'About Us | DeckerDanis Studios',
      metaDescription: 'Learn about DeckerDanis Studios, our mission, team, and passion for creating immersive RPG experiences.',
      keywords: ['about', 'game studio', 'team', 'mission']
    }
  }
];

// Mock Game Content
export const mockGameContent: CMSGameContent[] = [
  {
    id: 'game_001',
    name: 'Mystic Realms',
    slug: 'mystic-realms',
    shortDescription: 'An epic fantasy RPG where magic and mystery collide in a world of ancient secrets.',
    fullDescription: `Embark on an unforgettable journey through the Mystic Realms, where ancient magic flows through every stone and shadow. As a chosen hero, you'll uncover long-lost secrets, forge powerful alliances, and face challenges that will test your courage and wisdom.

Explore vast landscapes filled with mystical creatures, hidden treasures, and forgotten ruins. Master multiple schools of magic, craft legendary weapons, and shape your destiny in a world where every choice matters.`,
    genre: ['RPG', 'Fantasy', 'Adventure'],
    platforms: ['PC', 'Steam Deck', 'PlayStation 5', 'Xbox Series X/S'],
    releaseDate: '2023-06-15T00:00:00Z',
    status: 'released',
    price: {
      base: 49.99,
      currency: 'USD',
      discount: {
        percentage: 20,
        validUntil: '2024-02-01T00:00:00Z'
      }
    },
    media: {
      coverImage: mockImages.gameScreenshot1,
      screenshots: [mockImages.gameScreenshot1],
      trailers: [
        {
          id: 'trailer_001',
          title: 'Mystic Realms - Launch Trailer',
          url: 'https://youtube.com/watch?v=example',
          thumbnail: mockImages.gameScreenshot1,
          duration: 120
        }
      ]
    },
    systemRequirements: {
      minimum: {
        'OS': 'Windows 10 64-bit',
        'Processor': 'Intel Core i5-8400 / AMD Ryzen 5 2600',
        'Memory': '8 GB RAM',
        'Graphics': 'NVIDIA GTX 1060 / AMD RX 580',
        'DirectX': 'Version 12',
        'Storage': '50 GB available space'
      },
      recommended: {
        'OS': 'Windows 11 64-bit',
        'Processor': 'Intel Core i7-10700K / AMD Ryzen 7 3700X',
        'Memory': '16 GB RAM',
        'Graphics': 'NVIDIA RTX 3070 / AMD RX 6700 XT',
        'DirectX': 'Version 12',
        'Storage': '50 GB available space (SSD recommended)'
      }
    },
    features: [
      'Epic single-player campaign (60+ hours)',
      'Dynamic magic system with 8 schools of magic',
      'Branching storylines with multiple endings',
      'Crafting system for weapons and armor',
      'Companion system with unique character arcs',
      'Open world exploration with hidden secrets',
      'Photo mode for capturing epic moments'
    ],
    reviews: [
      {
        score: 9.2,
        source: 'GameReviewer',
        quote: 'A masterpiece of storytelling and world-building.',
        url: 'https://gamereviewer.com/mystic-realms-review'
      },
      {
        score: 8.8,
        source: 'RPG Central',
        quote: 'The magic system is incredibly deep and satisfying.'
      }
    ],
    seo: {
      metaTitle: 'Mystic Realms - Epic Fantasy RPG | DeckerDanis Studios',
      metaDescription: 'Embark on an epic fantasy adventure in Mystic Realms. Master ancient magic, explore vast worlds, and shape your destiny.',
      keywords: ['fantasy RPG', 'magic system', 'open world', 'adventure game'],
      ogImage: mockImages.gameScreenshot1
    }
  }
];
