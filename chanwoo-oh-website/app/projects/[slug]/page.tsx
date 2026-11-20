import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectDetail } from '@/components/ProjectDetail';
import { getProject, projects } from '@/data/projects';

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${p.title} — ${p.subtitle.en}`,
    description: p.summary.en,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: { title: `${p.title} — ${p.subtitle.en}`, description: p.summary.en, url: `/projects/${p.slug}` },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  return <ProjectDetail p={p} />;
}
