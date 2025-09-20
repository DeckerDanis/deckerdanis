// Mock CMS data and API functions

export interface Game {
  id: string;
  title: string;
  slug: string;
  releaseDate: string;
  trailerURL: string;
  storeLinks: {
    steam?: string;
    epic?: string;
    gog?: string;
  };
  keyFeatures: string[];
  heroImage: string;
  gallery: string[];
  description: string;
  genre: string;
  platform: string[];
}

export interface JobPosting {
  id: string;
  title: string;
  location: string;
  description: string;
  applyLink: string;
  isActive: boolean;
}

export interface PageContent {
  id: string;
  slug: string;
  title: string;
  content: string;
  seoTitle?: string;
  seoDescription?: string;
  featuredImage?: string;
}

// Mock data
const mockGames: Game[] = [
  {
    id: '1',
    title: 'Mystic Realms',
    slug: 'mystic-realms',
    releaseDate: '2024-03-15',
    trailerURL: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    storeLinks: {
      steam: 'https://store.steampowered.com/app/123456',
      epic: 'https://store.epicgames.com/en-US/p/mystic-realms',
    },
    keyFeatures: [
      'Open-world exploration',
      'Dynamic magic system',
      'Epic boss battles',
      'Multiplayer co-op',
    ],
    heroImage: '/images/games/mystic-realms-hero.jpg',
    gallery: [
      '/images/games/mystic-realms-1.jpg',
      '/images/games/mystic-realms-2.jpg',
      '/images/games/mystic-realms-3.jpg',
    ],
    description: 'Embark on an epic journey through mystical realms filled with ancient magic and legendary creatures.',
    genre: 'RPG',
    platform: ['PC', 'PlayStation', 'Xbox'],
  },
  {
    id: '2',
    title: 'Shadow Chronicles',
    slug: 'shadow-chronicles',
    releaseDate: '2024-06-20',
    trailerURL: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    storeLinks: {
      steam: 'https://store.steampowered.com/app/789012',
    },
    keyFeatures: [
      'Stealth-based gameplay',
      'Branching storylines',
      'Character customization',
      'PvP combat',
    ],
    heroImage: '/images/games/shadow-chronicles-hero.jpg',
    gallery: [
      '/images/games/shadow-chronicles-1.jpg',
      '/images/games/shadow-chronicles-2.jpg',
    ],
    description: 'Master the art of shadows in this tactical RPG where every choice shapes your destiny.',
    genre: 'Action RPG',
    platform: ['PC', 'Nintendo Switch'],
  },
  {
    id: '3',
    title: 'Dragon\'s Legacy',
    slug: 'dragons-legacy',
    releaseDate: '2024-09-10',
    trailerURL: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    storeLinks: {
      steam: 'https://store.steampowered.com/app/345678',
      epic: 'https://store.epicgames.com/en-US/p/dragons-legacy',
      gog: 'https://www.gog.com/game/dragons_legacy',
    },
    keyFeatures: [
      'Dragon companion system',
      'Massive world to explore',
      'Crafting and building',
      'Guild warfare',
    ],
    heroImage: '/images/games/dragons-legacy-hero.jpg',
    gallery: [
      '/images/games/dragons-legacy-1.jpg',
      '/images/games/dragons-legacy-2.jpg',
      '/images/games/dragons-legacy-3.jpg',
      '/images/games/dragons-legacy-4.jpg',
    ],
    description: 'Forge an unbreakable bond with dragons and build your legacy in this expansive fantasy world.',
    genre: 'MMORPG',
    platform: ['PC', 'PlayStation', 'Xbox'],
  },
];

const mockJobs: JobPosting[] = [
  {
    id: '1',
    title: 'Senior Game Developer',
    location: 'Remote / San Francisco, CA',
    description: `We are looking for a passionate Senior Game Developer to join our team and help create the next generation of RPG experiences.

**Responsibilities:**
- Design and implement gameplay systems
- Collaborate with artists and designers
- Optimize game performance
- Mentor junior developers

**Requirements:**
- 5+ years of game development experience
- Proficiency in C# and Unity
- Experience with multiplayer systems
- Strong problem-solving skills`,
    applyLink: 'mailto:careers@rpgstudio.com?subject=Senior Game Developer Application',
    isActive: true,
  },
  {
    id: '2',
    title: 'UI/UX Designer',
    location: 'Los Angeles, CA',
    description: `Join our creative team as a UI/UX Designer and help craft intuitive and beautiful game interfaces.

**Responsibilities:**
- Design user interfaces for games
- Create wireframes and prototypes
- Conduct user research and testing
- Collaborate with development team

**Requirements:**
- 3+ years of UI/UX design experience
- Proficiency in Figma, Adobe Creative Suite
- Experience with game UI design
- Strong portfolio showcasing your work`,
    applyLink: 'mailto:careers@rpgstudio.com?subject=UI/UX Designer Application',
    isActive: true,
  },
  {
    id: '3',
    title: '3D Environment Artist',
    location: 'Austin, TX',
    description: `We're seeking a talented 3D Environment Artist to create stunning game worlds that players will love to explore.

**Responsibilities:**
- Create 3D environments and props
- Work with concept art to realize artistic vision
- Optimize assets for game performance
- Collaborate with level designers

**Requirements:**
- 4+ years of 3D modeling experience
- Proficiency in Maya, Blender, or 3ds Max
- Experience with Substance Suite
- Strong understanding of game art pipelines`,
    applyLink: 'mailto:careers@rpgstudio.com?subject=3D Environment Artist Application',
    isActive: true,
  },
];

const mockPageContent: PageContent[] = [
  {
    id: '1',
    slug: 'about',
    title: 'About Our Studio',
    content: `We are a passionate team of game developers dedicated to creating immersive RPG experiences that transport players to extraordinary worlds.

Founded in 2018, our studio has grown from a small indie team to a recognized name in the RPG genre. We believe in the power of storytelling, innovative gameplay mechanics, and stunning visual design to create games that resonate with players long after they've put down the controller.

Our mission is to push the boundaries of what's possible in role-playing games while maintaining the heart and soul that makes RPGs special - deep character development, meaningful choices, and epic adventures that feel personal to every player.`,
    seoTitle: 'About RPG Studio - Passionate Game Developers',
    seoDescription: 'Learn about our passionate team of RPG developers creating immersive gaming experiences since 2018.',
    featuredImage: '/images/about-hero.jpg',
  },
];

// API simulation functions
export const cmsApi = {
  // Games
  async getAllGames(): Promise<Game[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockGames;
  },

  async getGameBySlug(slug: string): Promise<Game | null> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockGames.find(game => game.slug === slug) || null;
  },

  async getGameSlugs(): Promise<string[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockGames.map(game => game.slug);
  },

  // Jobs
  async getActiveJobs(): Promise<JobPosting[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    return mockJobs.filter(job => job.isActive);
  },

  // Page Content
  async getPageContent(slug: string): Promise<PageContent | null> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockPageContent.find(page => page.slug === slug) || null;
  },
};

// React Query hooks
export const useGames = () => {
  const { useQuery } = require('@tanstack/react-query');
  return useQuery({
    queryKey: ['games'],
    queryFn: cmsApi.getAllGames,
  });
};

export const useGame = (slug: string) => {
  const { useQuery } = require('@tanstack/react-query');
  return useQuery({
    queryKey: ['game', slug],
    queryFn: () => cmsApi.getGameBySlug(slug),
    enabled: !!slug,
  });
};

export const useJobs = () => {
  const { useQuery } = require('@tanstack/react-query');
  return useQuery({
    queryKey: ['jobs'],
    queryFn: cmsApi.getActiveJobs,
  });
};

export const usePageContent = (slug: string) => {
  const { useQuery } = require('@tanstack/react-query');
  return useQuery({
    queryKey: ['pageContent', slug],
    queryFn: () => cmsApi.getPageContent(slug),
    enabled: !!slug,
  });
};
