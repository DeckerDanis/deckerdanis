import { Metadata } from 'next';
import CareersContent from '@/components/CareersContent';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join our team and help create the next generation of epic RPG games. Explore open positions and grow your career with RPG Studio.',
  keywords: ['careers', 'jobs', 'game development', 'RPG Studio', 'hiring', 'employment'],
  openGraph: {
    title: 'Careers | RPG Studio',
    description: 'Join our team and help create the next generation of epic RPG games. Explore open positions and grow your career with RPG Studio.',
    type: 'website',
  },
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <CareersContent />
    </main>
  );
}
