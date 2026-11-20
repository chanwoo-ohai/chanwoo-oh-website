import type { Metadata } from 'next';
import { ContactBlock } from '@/components/Blocks';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Chanwoo Oh.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <section className="container-site pt-16 md:pt-24">
      <ContactBlock asH1 />
    </section>
  );
}
