import type { Metadata } from 'next';
import ContactContent from '@/components/ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with DeckerDanis Studios. We\'d love to hear from you about our games, partnerships, or any questions you might have.',
  keywords: ['contact', 'support', 'feedback', 'partnership', 'game studio', 'customer service'],
  openGraph: {
    title: 'Contact Us | DeckerDanis Studios',
    description: 'Get in touch with DeckerDanis Studios. We\'d love to hear from you about our games, partnerships, or any questions you might have.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us | DeckerDanis Studios',
    description: 'Get in touch with DeckerDanis Studios. We\'d love to hear from you about our games, partnerships, or any questions you might have.',
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactContent />
    </main>
  );
}
