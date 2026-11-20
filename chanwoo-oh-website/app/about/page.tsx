import type { Metadata } from 'next';
import { AboutBlock, SkillsBlock } from '@/components/Blocks';
import { PageHero, SectionHeading } from '@/components/Section';
import { ui } from '@/data/ui';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Chanwoo Oh — AI undergraduate at Sungkyunkwan University interested in Human-AI Interaction and human-centered AI.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="ABOUT" title={ui.aboutMe} />
      <section className="container-site pb-20">
        <AboutBlock full />
      </section>
      <section className="section pt-0">
        <SectionHeading eyebrow="TOOLKIT" title={ui.tools} subtitle={ui.toolsSub} />
        <SkillsBlock />
      </section>
    </>
  );
}
