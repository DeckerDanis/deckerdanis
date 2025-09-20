import { Metadata } from 'next';
import GamesLibrary from '@/components/GamesLibrary';

export const metadata: Metadata = {
  title: 'Games Library',
  description: 'Explore our collection of epic RPG games. From mystical realms to legendary adventures, discover your next gaming obsession.',
  openGraph: {
    title: 'Games Library | RPG Studio',
    description: 'Explore our collection of epic RPG games. From mystical realms to legendary adventures, discover your next gaming obsession.',
  },
};

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <GamesLibrary />
    </main>
  );
}
