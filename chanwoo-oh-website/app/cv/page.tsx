import type { Metadata } from 'next';
import { CVView } from '@/components/CVView';
import { PageHero } from '@/components/Section';
import { ui } from '@/data/ui';

export const metadata: Metadata = {
  title: 'CV',
  description: 'Curriculum vitae of Chanwoo Oh.',
  alternates: { canonical: '/cv' },
};

export default function CvPage() {
  return (
    <>
      <PageHero eyebrow="CV" title={ui.cvTitle} />
      <CVView />
    </>
  );
}
