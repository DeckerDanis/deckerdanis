import { DefaultSeoProps } from 'next-seo';

export const defaultSEO: DefaultSeoProps = {
  title: 'RPG Studio | Epic Fantasy Games & Adventures',
  description: 'Discover immersive RPG games from RPG Studio. Explore mystical realms, epic adventures, and unforgettable gaming experiences.',
  canonical: 'https://rpgstudio.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rpgstudio.com',
    siteName: 'RPG Studio',
    title: 'RPG Studio | Epic Fantasy Games & Adventures',
    description: 'Discover immersive RPG games from RPG Studio. Explore mystical realms, epic adventures, and unforgettable gaming experiences.',
    images: [
      {
        url: 'https://rpgstudio.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RPG Studio - Epic Fantasy Games',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@rpgstudio',
    site: '@rpgstudio',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'keywords',
      content: 'RPG, fantasy games, role playing games, adventure games, indie games, gaming studio',
    },
    {
      name: 'author',
      content: 'RPG Studio',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
};

// SEO configurations for specific pages
export const pageSEO = {
  home: {
    title: 'RPG Studio | Epic Fantasy Games & Adventures',
    description: 'Discover immersive RPG games from RPG Studio. Explore mystical realms, epic adventures, and unforgettable gaming experiences with our collection of fantasy games.',
    canonical: 'https://rpgstudio.com',
  },
  games: {
    title: 'Games Library | RPG Studio',
    description: 'Browse our complete collection of RPG games. From mystical realms to space adventures, discover your next epic gaming experience.',
    canonical: 'https://rpgstudio.com/games',
  },
  careers: {
    title: 'Careers | Join RPG Studio',
    description: 'Join our passionate team of game developers, artists, and storytellers. Explore career opportunities at RPG Studio.',
    canonical: 'https://rpgstudio.com/careers',
  },
  contact: {
    title: 'Contact Us | RPG Studio',
    description: 'Get in touch with RPG Studio. We\'d love to hear from you about our games, partnerships, or any questions you might have.',
    canonical: 'https://rpgstudio.com/contact',
  },
};

// Generate game-specific SEO
export const generateGameSEO = (game: {
  title: string;
  description: string;
  slug: string;
  images: { thumbnail: string };
  genre: string[];
  platform: string[];
}) => ({
  title: `${game.title} | RPG Studio`,
  description: game.description,
  canonical: `https://rpgstudio.com/games/${game.slug}`,
  openGraph: {
    title: game.title,
    description: game.description,
    url: `https://rpgstudio.com/games/${game.slug}`,
    type: 'article',
    images: [
      {
        url: `https://rpgstudio.com${game.images.thumbnail}`,
        width: 400,
        height: 300,
        alt: `${game.title} - RPG Studio Game`,
        type: 'image/svg+xml',
      },
    ],
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: `${game.title}, ${game.genre.join(', ')}, ${game.platform.join(', ')}, RPG, fantasy game`,
    },
    {
      property: 'game:genre',
      content: game.genre.join(', '),
    },
    {
      property: 'game:platform',
      content: game.platform.join(', '),
    },
  ],
});
