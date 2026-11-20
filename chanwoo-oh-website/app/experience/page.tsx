import type { Metadata } from 'next';
import { ExperienceTimeline } from '@/components/Blocks';
import { PageHero } from '@/components/Section';
import { experienceIntro } from '@/data/experiences';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'International experiences of Chanwoo Oh, including an exhibition at Tokyo Polytechnic University.',
  alternates: { canonical: '/experience' },
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero eyebrow="GLOBAL EXPERIENCES" title={experienceIntro.title} subtitle={experienceIntro.subtitle} />
      <section className="container-site pb-10">
        <ExperienceTimeline />
      </section>
    </>
  );
}
