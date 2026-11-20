import { AboutBlock, ContactBlock, ExperienceSection, FeaturedProjects, Hero, InterestsGrid, SkillsBlock, Vision } from '@/components/Blocks';
import { SectionHeading } from '@/components/Section';
import { researchIntro } from '@/data/research';
import { ui } from '@/data/ui';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="section border-t border-line" aria-labelledby="about">
        <SectionHeading eyebrow="ABOUT" title={ui.aboutMe} />
        <AboutBlock />
      </section>
      <section className="section pt-0">
        <SectionHeading eyebrow="RESEARCH" title={researchIntro.title} subtitle={researchIntro.subtitle} />
        <InterestsGrid />
      </section>
      <Vision showLink />
      <section className="section">
        <SectionHeading eyebrow="PROJECTS" title={ui.selectedProjects} subtitle={ui.selectedProjectsSub} />
        <FeaturedProjects />
      </section>
      <section className="section pt-0">
        <ExperienceSection />
      </section>
      <section className="section pt-0">
        <SectionHeading eyebrow="TOOLKIT" title={ui.tools} subtitle={ui.toolsSub} />
        <SkillsBlock />
      </section>
      <section className="container-site">
        <ContactBlock />
      </section>
    </>
  );
}
