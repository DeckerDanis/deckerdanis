import { Metadata } from 'next';
import NewsContent from '@/components/NewsContent';

export const metadata: Metadata = {
  title: 'News & Updates | RPG Studio',
  description: 'Stay up to date with the latest news, game updates, development insights, and announcements from RPG Studio.',
  keywords: ['news', 'updates', 'blog', 'game development', 'announcements', 'RPG Studio'],
  openGraph: {
    title: 'News & Updates | RPG Studio',
    description: 'Stay up to date with the latest news, game updates, development insights, and announcements from RPG Studio.',
    type: 'website',
  },
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <NewsContent />
    </main>
  );
}
