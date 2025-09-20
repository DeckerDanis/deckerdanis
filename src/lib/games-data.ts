export interface Game {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  genre: string[];
  platform: string[];
  releaseDate: string;
  status: 'released' | 'early-access' | 'coming-soon';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  images: {
    thumbnail: string;
    hero: string;
    screenshots: string[];
  };
  videos: {
    trailer: string;
    gameplay?: string[];
  };
  features: string[];
  systemRequirements: {
    minimum: {
      os: string;
      processor: string;
      memory: string;
      graphics: string;
      storage: string;
    };
    recommended: {
      os: string;
      processor: string;
      memory: string;
      graphics: string;
      storage: string;
    };
  };
  developer: string;
  publisher: string;
  tags: string[];
}

export const gamesData: Game[] = [
  {
    id: '1',
    title: 'Mystic Realms',
    slug: 'mystic-realms',
    description: 'Embark on an epic journey through mystical realms filled with ancient magic and legendary creatures.',
    longDescription: 'Mystic Realms is an immersive fantasy RPG that takes you on an unforgettable adventure through enchanted lands. Master powerful spells, forge alliances with mythical beings, and uncover the secrets of an ancient civilization. With over 100 hours of gameplay, dynamic weather systems, and a branching storyline that adapts to your choices, every playthrough offers a unique experience.',
    genre: ['RPG', 'Fantasy', 'Adventure'],
    platform: ['PC', 'PlayStation 5', 'Xbox Series X/S'],
    releaseDate: '2024-03-15',
    status: 'released',
    price: 59.99,
    rating: 4.8,
    reviewCount: 2847,
    images: {
      thumbnail: '/images/games/mystic-realms-thumb.jpg',
      hero: '/images/games/mystic-realms-hero.jpg',
      screenshots: [
        '/images/games/mystic-realms-1.jpg',
        '/images/games/mystic-realms-2.jpg',
        '/images/games/mystic-realms-3.jpg',
        '/images/games/mystic-realms-4.jpg'
      ]
    },
    videos: {
      trailer: '/videos/mystic-realms-trailer.mp4',
      gameplay: ['/videos/mystic-realms-gameplay-1.mp4']
    },
    features: [
      'Open World Exploration',
      'Dynamic Magic System',
      'Creature Companions',
      'Branching Storylines',
      'Crafting & Enchanting',
      'Multiplayer Co-op'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-8400 / AMD Ryzen 5 2600',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 1060 / AMD RX 580',
        storage: '50 GB available space'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i7-10700K / AMD Ryzen 7 3700X',
        memory: '16 GB RAM',
        graphics: 'NVIDIA RTX 3070 / AMD RX 6700 XT',
        storage: '50 GB available space (SSD recommended)'
      }
    },
    developer: 'RPG Studio',
    publisher: 'RPG Studio',
    tags: ['Magic', 'Open World', 'Story Rich', 'Fantasy', 'Co-op']
  },
  {
    id: '2',
    title: 'Dragon\'s Legacy',
    slug: 'dragons-legacy',
    description: 'Unite the kingdoms and forge your destiny in this epic fantasy adventure filled with dragons and ancient prophecies.',
    longDescription: 'Dragon\'s Legacy is a grand strategy RPG where you must unite fractured kingdoms under one banner while navigating political intrigue and ancient dragon magic. Command armies, build alliances, and discover your true heritage as the last Dragonborn. With deep character customization, tactical combat, and a world that reacts to your every decision, your legacy will be remembered for generations.',
    genre: ['RPG', 'Strategy', 'Fantasy'],
    platform: ['PC', 'PlayStation 5', 'Xbox Series X/S', 'Nintendo Switch'],
    releaseDate: '2024-06-20',
    status: 'released',
    price: 49.99,
    originalPrice: 59.99,
    rating: 4.6,
    reviewCount: 1923,
    images: {
      thumbnail: '/images/games/dragons-legacy-thumb.jpg',
      hero: '/images/games/dragons-legacy-hero.jpg',
      screenshots: [
        '/images/games/dragons-legacy-1.jpg',
        '/images/games/dragons-legacy-2.jpg',
        '/images/games/dragons-legacy-3.jpg'
      ]
    },
    videos: {
      trailer: '/videos/dragons-legacy-trailer.mp4'
    },
    features: [
      'Kingdom Management',
      'Dragon Bonding',
      'Political Intrigue',
      'Tactical Combat',
      'Character Customization',
      'Multiple Endings'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-7400 / AMD Ryzen 5 1600',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 1050 Ti / AMD RX 570',
        storage: '35 GB available space'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i7-9700K / AMD Ryzen 7 2700X',
        memory: '16 GB RAM',
        graphics: 'NVIDIA RTX 3060 / AMD RX 6600 XT',
        storage: '35 GB available space (SSD recommended)'
      }
    },
    developer: 'RPG Studio',
    publisher: 'RPG Studio',
    tags: ['Dragons', 'Strategy', 'Politics', 'Fantasy', 'Kingdom Building']
  },
  {
    id: '3',
    title: 'Shadow Chronicles',
    slug: 'shadow-chronicles',
    description: 'Navigate the shadows and uncover dark secrets in this atmospheric dark fantasy tale of mystery and horror.',
    longDescription: 'Shadow Chronicles plunges you into a world where light and darkness wage an eternal war. As a Shadow Walker, you possess the unique ability to traverse between realms, uncovering conspiracies that threaten both worlds. With psychological horror elements, puzzle-solving mechanics, and a haunting narrative, this game will challenge your perception of reality itself.',
    genre: ['RPG', 'Horror', 'Mystery'],
    platform: ['PC', 'PlayStation 5', 'Xbox Series X/S'],
    releaseDate: '2024-10-31',
    status: 'early-access',
    price: 39.99,
    rating: 4.4,
    reviewCount: 856,
    images: {
      thumbnail: '/images/games/shadow-chronicles-thumb.jpg',
      hero: '/images/games/shadow-chronicles-hero.jpg',
      screenshots: [
        '/images/games/shadow-chronicles-1.jpg',
        '/images/games/shadow-chronicles-2.jpg'
      ]
    },
    videos: {
      trailer: '/videos/shadow-chronicles-trailer.mp4'
    },
    features: [
      'Dual Realm Exploration',
      'Psychological Horror',
      'Puzzle Mechanics',
      'Atmospheric Storytelling',
      'Shadow Abilities',
      'Multiple Realities'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-8400 / AMD Ryzen 5 2600',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 1060 / AMD RX 580',
        storage: '25 GB available space'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i7-10700K / AMD Ryzen 7 3700X',
        memory: '16 GB RAM',
        graphics: 'NVIDIA RTX 3070 / AMD RX 6700 XT',
        storage: '25 GB available space (SSD recommended)'
      }
    },
    developer: 'RPG Studio',
    publisher: 'RPG Studio',
    tags: ['Horror', 'Mystery', 'Psychological', 'Dark Fantasy', 'Puzzle']
  },
  {
    id: '4',
    title: 'Stellar Odyssey',
    slug: 'stellar-odyssey',
    description: 'Explore the vast cosmos in this space-faring RPG adventure filled with alien civilizations and cosmic mysteries.',
    longDescription: 'Stellar Odyssey takes you on an interstellar journey across the galaxy. Captain your own starship, discover new worlds, and interact with diverse alien species. With a focus on exploration, diplomacy, and space combat, you\'ll shape the fate of entire civilizations while uncovering the mysteries of an ancient cosmic force.',
    genre: ['RPG', 'Sci-Fi', 'Space'],
    platform: ['PC', 'PlayStation 5', 'Xbox Series X/S'],
    releaseDate: '2025-02-14',
    status: 'coming-soon',
    price: 69.99,
    rating: 0,
    reviewCount: 0,
    images: {
      thumbnail: '/images/games/stellar-odyssey-thumb.jpg',
      hero: '/images/games/stellar-odyssey-hero.jpg',
      screenshots: [
        '/images/games/stellar-odyssey-1.jpg',
        '/images/games/stellar-odyssey-2.jpg',
        '/images/games/stellar-odyssey-3.jpg'
      ]
    },
    videos: {
      trailer: '/videos/stellar-odyssey-trailer.mp4'
    },
    features: [
      'Space Exploration',
      'Alien Diplomacy',
      'Ship Customization',
      'Planetary Colonization',
      'Cosmic Mysteries',
      'Multiplayer Fleet Battles'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i7-8700K / AMD Ryzen 7 2700X',
        memory: '12 GB RAM',
        graphics: 'NVIDIA RTX 3060 / AMD RX 6600 XT',
        storage: '60 GB available space'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i9-10900K / AMD Ryzen 9 3900X',
        memory: '32 GB RAM',
        graphics: 'NVIDIA RTX 4070 / AMD RX 7700 XT',
        storage: '60 GB available space (NVMe SSD recommended)'
      }
    },
    developer: 'RPG Studio',
    publisher: 'RPG Studio',
    tags: ['Space', 'Exploration', 'Sci-Fi', 'Diplomacy', 'Fleet Combat']
  },
  {
    id: '5',
    title: 'Legends of Aethermoor',
    slug: 'legends-of-aethermoor',
    description: 'Master the elements and become a legendary mage in this magical realm filled with ancient secrets and powerful artifacts.',
    longDescription: 'Legends of Aethermoor is a spell-crafting RPG where magic is not just a tool, but an art form. Create your own spells by combining elemental essences, explore floating islands suspended in the sky, and uncover the lost history of the Aethermages. With a unique magic system that rewards creativity and experimentation, every mage\'s journey is truly their own.',
    genre: ['RPG', 'Fantasy', 'Magic'],
    platform: ['PC', 'PlayStation 5', 'Xbox Series X/S'],
    releaseDate: '2024-12-05',
    status: 'coming-soon',
    price: 54.99,
    rating: 0,
    reviewCount: 0,
    images: {
      thumbnail: '/images/games/aethermoor-thumb.jpg',
      hero: '/images/games/aethermoor-hero.jpg',
      screenshots: [
        '/images/games/aethermoor-1.jpg',
        '/images/games/aethermoor-2.jpg'
      ]
    },
    videos: {
      trailer: '/videos/aethermoor-trailer.mp4'
    },
    features: [
      'Spell Crafting System',
      'Floating Island Exploration',
      'Elemental Magic',
      'Ancient Artifacts',
      'Mage Academy',
      'Magical Creatures'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-9400F / AMD Ryzen 5 3600',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 1660 / AMD RX 5500 XT',
        storage: '40 GB available space'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i7-11700K / AMD Ryzen 7 5700X',
        memory: '16 GB RAM',
        graphics: 'NVIDIA RTX 3070 / AMD RX 6700 XT',
        storage: '40 GB available space (SSD recommended)'
      }
    },
    developer: 'RPG Studio',
    publisher: 'RPG Studio',
    tags: ['Magic', 'Spell Crafting', 'Fantasy', 'Exploration', 'Academy']
  }
];

export const getGameBySlug = (slug: string): Game | undefined => {
  return gamesData.find(game => game.slug === slug);
};

export const getGamesByGenre = (genre: string): Game[] => {
  return gamesData.filter(game => game.genre.includes(genre));
};

export const getGamesByStatus = (status: string): Game[] => {
  return gamesData.filter(game => game.status === status);
};

export const getAllGenres = (): string[] => {
  const genres = new Set<string>();
  gamesData.forEach(game => {
    game.genre.forEach(g => genres.add(g));
  });
  return Array.from(genres).sort();
};

export const getAllPlatforms = (): string[] => {
  const platforms = new Set<string>();
  gamesData.forEach(game => {
    game.platform.forEach(p => platforms.add(p));
  });
  return Array.from(platforms).sort();
};
