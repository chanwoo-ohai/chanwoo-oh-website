import type { Metadata } from 'next';
import { AllProjects } from '@/components/Blocks';
import { PageHero } from '@/components/Section';
import { ui } from '@/data/ui';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected projects by Chanwoo Oh across Human-AI Interaction, interactive media, computer vision, and product design.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="PROJECTS" title={ui.selectedProjects} subtitle={ui.selectedProjectsSub} />
      <section className="container-site pb-10 pt-6">
        <AllProjects />
      </section>
    </>
  );
}
