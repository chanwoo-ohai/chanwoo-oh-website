import type { Metadata } from 'next';
import { InterestsGrid, PublicationsList, Vision } from '@/components/Blocks';
import { PageHero } from '@/components/Section';
import { researchIntro } from '@/data/research';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Research interests and vision of Chanwoo Oh: Human-AI Interaction, AI trust and reliance, human agency, and human-centered AI.',
  alternates: { canonical: '/research' },
};

export default function ResearchPage() {
  return (
    <>
      <PageHero eyebrow="RESEARCH" title={researchIntro.title} subtitle={researchIntro.subtitle} />
      <section className="container-site pb-24">
        <InterestsGrid />
      </section>
      <Vision />
      <PublicationsList />
    </>
  );
}
