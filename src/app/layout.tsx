import type { Metadata } from "next";
import { Inter, Orbitron, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'DeckDanis | Epic Gaming Experiences & Adventures',
    template: '%s | DeckDanis',
  },
  description: 'Discover immersive games from DeckDanis Studios. Explore extraordinary worlds, epic adventures, and unforgettable gaming experiences.',
  keywords: ['gaming', 'video games', 'adventure games', 'indie games', 'gaming studio', 'DeckDanis'],
  authors: [{ name: 'DeckDanis Studios' }],
  creator: 'DeckDanis Studios',
  publisher: 'DeckDanis Studios',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://deckdanis.com',
    siteName: 'DeckDanis',
    title: 'DeckDanis | Epic Gaming Experiences & Adventures',
    description: 'Discover immersive games from DeckDanis Studios. Explore extraordinary worlds, epic adventures, and unforgettable gaming experiences.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DeckDanis - Epic Gaming Experiences',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@deckdanis',
    creator: '@deckdanis',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${orbitron.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
