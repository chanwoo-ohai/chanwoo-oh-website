'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from 'lucide-react';
import { projects, statusLabel } from '@/data/projects';
import { ui } from '@/data/ui';
import type { CaseSection, Project } from '@/lib/types';
import { useLang } from '@/lib/i18n';
import { FadeIn } from './FadeIn';
import { StatusPill } from './Blocks';
import { ProjectCover } from './Visuals';

const ORDER: CaseSection['key'][] = ['overview', 'problem', 'motivation', 'design', 'implementation', 'architecture', 'media', 'results', 'challenges', 'future', 'reflection'];

export function ProjectDetail({ p }: { p: Project }) {
  const { t } = useLang();
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];
  const sections = ORDER.map((k) => p.sections.find((s) => s.key === k)).filter((s): s is CaseSection => !!s && (!!s.body || !!s.bullets?.length));

  return (
    <article>
      {/* 1. Hero */}
      <header className="container-site pb-10 pt-12 md:pt-20">
        <FadeIn>
          <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink">
            <ArrowLeft size={15} aria-hidden /> {t(ui.back)}
          </Link>
        </FadeIn>
        <FadeIn delay={0.05} className="mt-8 flex flex-wrap items-center gap-3">
          <span className="font-display text-sm font-bold text-muted">PROJECT {p.number}</span>
          <StatusPill p={p} />
        </FadeIn>
        <FadeIn delay={0.08}>
          <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.6rem)] font-extrabold leading-[1.02] tracking-tightest text-ink">{p.title}</h1>
          <p className="mt-3 font-display text-2xl font-semibold text-muted md:text-3xl">{t(p.subtitle)}</p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">{t(p.summary)}</p>
        </FadeIn>
        {(p.links.github || p.links.demo) && (
          <FadeIn delay={0.1} className="mt-8 flex flex-wrap gap-3">
            {p.links.demo && <a href={p.links.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">{t(ui.demo)} <ArrowUpRight size={16} aria-hidden /></a>}
            {p.links.github && <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="btn-secondary"><Github size={16} aria-hidden /> {t(ui.github)}</a>}
          </FadeIn>
        )}
      </header>

      <FadeIn className="container-site">
        <ProjectCover slug={p.slug} cover={p.cover} alt={`${p.title} cover`} className="aspect-[16/8] rounded-[28px] ring-1 ring-line" />
      </FadeIn>

      {/* Meta */}
      <div className="container-site mt-12">
      <div className="grid gap-px overflow-hidden rounded-[24px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        <Meta label={t(ui.category)} value={t(p.category)} />
        <Meta label={t(ui.status)} value={t(statusLabel[p.status])} />
        {p.period && <Meta label="Date" value={t(p.period)} />}
        {p.technologies.length > 0 && <Meta label={t(ui.technologies)} value={p.technologies.join(' · ')} wide={!p.period} />}
      </div>
      </div>

      {(p.highlight || p.facts?.length) && (
        <div className="container-site mt-12 grid gap-6 md:grid-cols-[1fr_1.4fr]">
          {p.highlight && (
            <FadeIn className="card flex flex-col justify-center p-10">
              <p className="font-display text-[clamp(3.2rem,8vw,5.5rem)] font-extrabold leading-none tracking-tightest text-accent">{p.highlight.value}</p>
              <p className="mt-3 text-lg font-semibold text-ink">{t(p.highlight.label)}</p>
            </FadeIn>
          )}
          {p.facts?.length ? (
            <FadeIn className={`card p-8 ${p.highlight ? '' : 'md:col-span-2'}`}>
              <dl className="divide-y divide-line">
                {p.facts.map((f, i) => (
                  <div key={i} className="flex items-baseline justify-between gap-6 py-4 first:pt-0 last:pb-0">
                    <dt className="text-[15px] text-muted">{t(f.label)}</dt>
                    <dd className="text-right font-display text-lg font-bold text-ink">{t(f.value)}</dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          ) : null}
        </div>
      )}

      {/* Case study */}
      <div className="container-site mt-20 grid gap-16 lg:grid-cols-[240px_1fr]">
        <nav aria-label="Sections" className="hidden lg:block">
          <ul className="sticky top-28 space-y-2 text-sm">
            {sections.map((s) => (
              <li key={s.key}><a href={`#${s.key}`} className="text-muted hover:text-ink">{t(ui.sections[s.key])}</a></li>
            ))}
            {p.media.length > 0 && <li><a href="#media" className="text-muted hover:text-ink">{t(ui.sections.media)}</a></li>}
          </ul>
        </nav>
        <div className="max-w-3xl space-y-16">
          {p.researchQuestion && (
            <FadeIn className="border-l-4 border-accent pl-6">
              <p className="label">{t(ui.researchQuestion)}</p>
              <p className="mt-2 font-display text-2xl font-bold leading-snug text-ink">{t(p.researchQuestion)}</p>
            </FadeIn>
          )}
          {p.features?.length ? (
            <FadeIn>
              <h2 className="h-case">{t(ui.coreFeatures)}</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {p.features.map((f, i) => (
                  <li key={i} className="card flex items-center gap-3 p-4 text-[15px] font-medium text-ink">
                    <span className="font-display text-xs font-bold text-accent">{String(i + 1).padStart(2, '0')}</span>
                    {t(f)}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ) : null}
          {sections.map((s) => (
            <FadeIn key={s.key}>
              <section id={s.key} className="scroll-mt-28">
                <h2 className="h-case">{t(ui.sections[s.key])}</h2>
                {s.body && <p className="mt-5 text-lg leading-relaxed text-muted">{t(s.body)}</p>}
                {s.bullets && (
                  <ol className="mt-5 space-y-3">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex gap-4 text-lg leading-relaxed text-muted">
                        <span className="mt-1 font-display text-sm font-bold text-accent">{String(i + 1).padStart(2, '0')}</span>
                        <span>{t(b)}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </section>
            </FadeIn>
          ))}
          {p.media.length > 0 && (
            <section id="media" className="scroll-mt-28">
              <h2 className="h-case">{t(ui.sections.media)}</h2>
              <div className="mt-6 grid gap-6">
                {p.media.map((m, i) => (
                  <figure key={i}>
                    {m.type === 'image' ? (
                      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface">
                        <Image src={m.src} alt={t(m.alt)} fill sizes="(min-width:1024px) 768px, 100vw" className="object-cover" />
                      </div>
                    ) : (
                      <video src={m.src} controls playsInline className="w-full rounded-2xl bg-surface" aria-label={t(m.alt)} />
                    )}
                    {m.caption && <figcaption className="mt-2 text-sm text-muted">{t(m.caption)}</figcaption>}
                  </figure>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Next */}
      <div className="container-site mt-28">
        <Link href={`/projects/${next.slug}`} className="group flex items-center justify-between gap-6 border-y border-line py-10">
          <div>
            <p className="label">{t(ui.next)}</p>
            <p className="mt-2 font-display text-3xl font-extrabold tracking-tight text-ink group-hover:text-accent md:text-4xl">{next.title}</p>
          </div>
          <ArrowRight size={32} className="shrink-0 text-ink transition-transform group-hover:translate-x-1" aria-hidden />
        </Link>
      </div>
    </article>
  );
}

function Meta({ label, value, wide }: { label: string; value: string; wide?: boolean }) {
  return (
    <div className={`bg-card p-6 ${wide ? 'lg:col-span-2' : ''}`}>
      <p className="label">{label}</p>
      <p className="mt-2 text-[15px] font-medium leading-relaxed text-ink">{value}</p>
    </div>
  );
}
