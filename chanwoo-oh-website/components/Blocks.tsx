'use client';

import Link from 'next/link';
import { ArrowRight, ArrowUpRight, FileText, MapPin, Mail } from 'lucide-react';
import { bio, education, profile, skills, slogan } from '@/data/profile';
import { interests, researchIntro, vision } from '@/data/research';
import { experienceIntro, experiences } from '@/data/experiences';
import { isPlanned, projects, statusLabel } from '@/data/projects';
import { publications } from '@/data/publications';
import { ui } from '@/data/ui';
import type { Project } from '@/lib/types';
import { useLang } from '@/lib/i18n';
import { FadeIn } from './FadeIn';
import { SectionHeading } from './Section';
import { SocialLinks } from './SocialLinks';
import { ProfilePhoto, ProjectCover, interestIcons } from './Visuals';

/* ---------------- Buttons ---------------- */
export function CvButton({ variant = 'primary' }: { variant?: 'primary' | 'secondary' }) {
  const { t } = useLang();
  const cls = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  return (
    <Link href="/cv" className={cls}>
      <FileText size={17} aria-hidden /> {t(ui.viewCv)}
    </Link>
  );
}

/* ---------------- Hero ---------------- */
export function Hero() {
  const { t } = useLang();
  return (
    <section className="container-site grid items-center gap-12 pb-20 pt-12 md:pt-20 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
      <div>
        <FadeIn>
          <p className="eyebrow">{slogan.label}</p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h1 className="whitespace-pre-line font-display text-[clamp(2.9rem,7vw,5.6rem)] font-extrabold leading-[0.98] tracking-tightest text-ink">
            {t(slogan.main)}
          </h1>
        </FadeIn>
        <FadeIn delay={0.12} className="mt-10">
          <p className="font-display text-2xl font-bold text-ink">{t(profile.name)}</p>
          <p className="mt-1 text-[17px] font-medium text-accent">{t(profile.role)}</p>
          <p className="mt-1 text-[15px] text-muted">{t(profile.affiliation)}</p>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">{t(slogan.heroDescription)}</p>
        </FadeIn>
        <FadeIn delay={0.18} className="mt-8 flex flex-wrap gap-3">
          <CvButton />
          <Link href="/projects" className="btn-secondary">
            {t(ui.exploreProjects)} <ArrowRight size={17} aria-hidden />
          </Link>
        </FadeIn>
        <FadeIn delay={0.22} className="mt-6">
          <SocialLinks />
        </FadeIn>
      </div>
      <FadeIn delay={0.1} className="mx-auto w-full max-w-[440px]">
        <ProfilePhoto />
      </FadeIn>
    </section>
  );
}

/* ---------------- About ---------------- */
export function AboutBlock({ full = false }: { full?: boolean }) {
  const { t } = useLang();
  const paras = full ? bio : bio.slice(0, 2);
  return (
    <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
      <div className="space-y-6">
        {paras.map((p, i) => (
          <FadeIn key={i} delay={i * 0.04}>
            <p className={i === 0 ? 'font-display text-2xl font-semibold leading-snug text-ink md:text-[28px]' : 'text-lg leading-relaxed text-muted'}>{t(p)}</p>
          </FadeIn>
        ))}
        {!full && (
          <FadeIn>
            <Link href="/about" className="link-arrow">
              {t(ui.aboutMe)} <ArrowRight size={16} aria-hidden />
            </Link>
          </FadeIn>
        )}
      </div>
      <FadeIn className="space-y-8">
        <div className="card p-7">
          <p className="label">{t(ui.education)}</p>
          {education.map((e, i) => (
            <div key={i} className="mt-4">
              <p className="font-display text-lg font-bold text-ink">{t(e.school)}</p>
              <p className="mt-1 text-[15px] text-muted">{t(e.degree)}</p>
              <p className="mt-1 text-[15px] text-muted">{t(e.period)}</p>
            </div>
          ))}
        </div>
        <div className="card p-7">
          <p className="label">{t(ui.background)}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {['AI / Machine Learning', 'Computer Vision', 'Human-Computer Interaction', 'Interactive Media', 'App Development'].map((s) => (
              <li key={s} className="tag">{s}</li>
            ))}
          </ul>
        </div>
        {full && (
          <div className="card p-7">
            <p className="label">{t(ui.languages)}</p>
            <dl className="mt-4 space-y-3">
              {profile.languages.map((l, i) => (
                <div key={i} className="flex items-baseline justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
                  <dt className="font-semibold text-ink">{t(l.name)}</dt>
                  <dd className="text-right text-[15px] text-muted">{t(l.level)}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </FadeIn>
    </div>
  );
}

/* ---------------- Research ---------------- */
export function InterestsGrid() {
  const { t } = useLang();
  return (
    <>
      <ul className="grid gap-px overflow-hidden rounded-[28px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {interests.map((it, i) => {
          const Icon = interestIcons[it.icon];
          return (
            <FadeIn as="li" key={it.id} delay={(i % 3) * 0.05} className="group bg-card p-8 transition-colors hover:bg-surface">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface text-accent ring-1 ring-line transition-colors group-hover:bg-card">
                  <Icon size={21} strokeWidth={1.8} aria-hidden />
                </span>
                <span className="font-display text-sm font-bold text-muted">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-8 font-display text-xl font-bold text-ink">{t(it.title)}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{t(it.body)}</p>
            </FadeIn>
          );
        })}
      </ul>
      <p className="mt-5 text-sm text-muted">{t(researchIntro.note)}</p>
    </>
  );
}

export function Vision({ showLink = false }: { showLink?: boolean }) {
  const { t } = useLang();
  return (
    <section className="bg-ink text-bg dark:bg-surface dark:text-ink">
      <div className="container-site py-24 md:py-32">
        <FadeIn>
          <p className="eyebrow !text-bg/60 dark:!text-muted">{t(vision.title)}</p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <blockquote className="max-w-5xl font-display text-[clamp(2rem,4.6vw,3.8rem)] font-extrabold leading-[1.08] tracking-tight">“{t(vision.question)}”</blockquote>
        </FadeIn>
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div className="space-y-5">
            {vision.paragraphs.map((p, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <p className="text-lg leading-relaxed opacity-80">{t(p)}</p>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p className="label !text-current opacity-60">{t(ui.questions)}</p>
            <ol className="mt-4">
              {vision.questions.map((q, i) => (
                <li key={i} className="flex gap-5 border-t border-current/15 py-4 text-[17px] font-medium" style={{ borderColor: 'rgb(127 127 127 / .25)' }}>
                  <span className="font-display text-sm font-bold text-accent dark:text-accent">{String(i + 1).padStart(2, '0')}</span>
                  {t(q)}
                </li>
              ))}
            </ol>
          </FadeIn>
        </div>
        {showLink && (
          <FadeIn className="mt-12">
            <Link href="/research" className="inline-flex items-center gap-2 text-[15px] font-semibold underline-offset-4 hover:underline">
              {t(ui.readVision)} <ArrowRight size={16} aria-hidden />
            </Link>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

export function PublicationsList() {
  const { t } = useLang();
  if (publications.length === 0) return null;
  return (
    <section className="container-site mt-24">
      <SectionHeading eyebrow="PUBLICATIONS" title={ui.publications} />
      <ol className="space-y-6">
        {publications.map((p) => (
          <li key={p.title} className="card p-7">
            <p className="font-display text-lg font-bold text-ink">{p.title}</p>
            <p className="mt-1 text-[15px] text-muted">{p.authors}</p>
            <p className="mt-1 text-[15px] italic text-muted">{p.venue}, {p.year}</p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm">
              {p.doi && <a className="link-arrow" href={`https://doi.org/${p.doi}`} target="_blank" rel="noopener noreferrer">DOI <ArrowUpRight size={14} aria-hidden /></a>}
              {p.pdf && <a className="link-arrow" href={p.pdf} target="_blank" rel="noopener noreferrer">PDF <ArrowUpRight size={14} aria-hidden /></a>}
              {p.projectPage && <a className="link-arrow" href={p.projectPage}>Project <ArrowUpRight size={14} aria-hidden /></a>}
            </div>
            {p.abstract && <p className="mt-4 text-[15px] leading-relaxed text-muted">{p.abstract}</p>}
          </li>
        ))}
      </ol>
      <span className="sr-only">{t(ui.publications)}</span>
    </section>
  );
}

/* ---------------- Projects ---------------- */
export function StatusPill({ p }: { p: Project }) {
  const { t } = useLang();
  const planned = isPlanned(p.status);
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${planned ? 'border border-dashed border-muted/60 text-muted' : 'bg-surface text-ink ring-1 ring-line'}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${p.status === 'exhibited' || p.status === 'completed' ? 'bg-accent' : planned ? 'bg-muted/60' : 'bg-amber-500'}`} aria-hidden />
      {t(statusLabel[p.status])}
    </span>
  );
}

export function ProjectCard({ p, large = false }: { p: Project; large?: boolean }) {
  const { t } = useLang();
  return (
    <Link href={`/projects/${p.slug}`} className="group block focus-visible:outline-none" aria-label={`${p.title} — ${t(ui.viewProject)}`}>
      <ProjectCover slug={p.slug} cover={p.cover} alt={`${p.title} cover`} className={`rounded-[24px] ring-1 ring-line ${large ? 'aspect-[16/10]' : 'aspect-[4/3]'}`} />
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <span className="font-display text-sm font-bold text-muted">{p.number}</span>
        <StatusPill p={p} />
      </div>
      <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink transition-colors group-hover:text-accent">
        {p.title}
        <span className="font-semibold text-muted"> — {t(p.subtitle)}</span>
      </h3>
      <p className="mt-1 text-sm font-medium text-accent">{t(p.category)}</p>
      <p className="mt-3 text-[15px] leading-relaxed text-muted">{t(p.summary)}</p>
      {p.technologies.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {p.technologies.slice(0, 5).map((s) => <li key={s} className="tag">{s}</li>)}
        </ul>
      )}
      <span className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-ink">
        {t(ui.viewProject)} <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
      </span>
    </Link>
  );
}

export function FeaturedProjects() {
  const { t } = useLang();
  const featured = projects.filter((p) => p.featured);
  return (
    <>
      <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
        {featured.map((p, i) => (
          <FadeIn key={p.slug} delay={(i % 2) * 0.06} className={i === 0 ? 'md:col-span-2' : ''}>
            <ProjectCard p={p} large={i === 0} />
          </FadeIn>
        ))}
      </div>
      <FadeIn className="mt-14">
        <Link href="/projects" className="btn-secondary">
          {t(ui.allProjects)} <ArrowRight size={17} aria-hidden />
        </Link>
      </FadeIn>
    </>
  );
}

export function AllProjects() {
  const { t } = useLang();
  const built = projects.filter((p) => !isPlanned(p.status));
  const planned = projects.filter((p) => isPlanned(p.status));
  return (
    <>
      <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
        {built.map((p, i) => (
          <FadeIn key={p.slug} delay={(i % 2) * 0.06}>
            <ProjectCard p={p} />
          </FadeIn>
        ))}
      </div>
      {planned.length > 0 && (
        <div className="mt-28">
          <SectionHeading eyebrow="IN THE PIPELINE" title={ui.inProgressPlans} subtitle={ui.inProgressPlansSub} />
          <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
            {planned.map((p, i) => (
              <FadeIn key={p.slug} delay={(i % 2) * 0.06}>
                <ProjectCard p={p} />
              </FadeIn>
            ))}
          </div>
        </div>
      )}
      <span className="sr-only">{t(ui.allProjects)}</span>
    </>
  );
}

/* ---------------- Experience ---------------- */
export function ExperienceTimeline() {
  const { t } = useLang();
  return (
    <ol className="relative">
      {experiences.map((e, i) => (
        <FadeIn as="li" key={e.slug} delay={i * 0.05} className="grid gap-4 border-t border-line py-10 md:grid-cols-[220px_1fr] md:gap-12">
          <div>
            <p className="font-display text-sm font-bold text-accent">{t(e.date)}</p>
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted">
              <MapPin size={14} aria-hidden /> {t(e.location)}
            </p>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-ink">{t(e.title)}</h3>
            <p className="mt-1 text-[15px] font-medium text-muted">{t(e.org)}</p>
            <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-muted">{t(e.description)}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {e.tags.map((tg, j) => <li key={j} className="tag">{t(tg)}</li>)}
            </ul>
          </div>
        </FadeIn>
      ))}
    </ol>
  );
}

export function ExperienceSection() {
  return (
    <>
      <SectionHeading eyebrow="GLOBAL EXPERIENCES" title={experienceIntro.title} subtitle={experienceIntro.subtitle} />
      <ExperienceTimeline />
    </>
  );
}

/* ---------------- Skills ---------------- */
const lastSpan = (i: number) => {
  const n = skills.length;
  if (i !== n - 1) return '';
  const md = n % 2 === 1 ? 'md:col-span-2' : '';
  const lg = n % 3 === 2 ? 'lg:col-span-2' : n % 3 === 1 ? 'lg:col-span-3' : 'lg:col-span-1';
  return `${md} ${lg}`;
};
export function SkillsBlock() {
  const { t } = useLang();
  return (
    <dl className="grid gap-px overflow-hidden rounded-[28px] border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
      {skills.map((g, i) => (
        <FadeIn key={i} delay={(i % 3) * 0.04} className={`bg-card p-8 ${lastSpan(i)}`}>
          <dt className="label">{t(g.group)}</dt>
          <dd className="mt-4">
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => <li key={s} className="tag">{s}</li>)}
            </ul>
          </dd>
        </FadeIn>
      ))}
    </dl>
  );
}

/* ---------------- Contact ---------------- */
export function ContactBlock({ asH1 = false }: { asH1?: boolean }) {
  const { t } = useLang();
  const H = asH1 ? 'h1' : 'h2';
  return (
    <div className="card overflow-hidden">
      <div className="grid gap-10 p-8 md:p-14 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="eyebrow">CONTACT</p>
          <H className="display-1">{t(ui.contactTitle)}</H>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{t(ui.contactBody)}</p>
          <a href={`mailto:${profile.email}`} className="btn-primary mt-8">
            <Mail size={17} aria-hidden /> {t(ui.sendEmail)}
          </a>
        </div>
        <dl className="space-y-6 self-end">
          <div>
            <dt className="label">{t(ui.email)}</dt>
            <dd className="mt-1"><a href={`mailto:${profile.email}`} className="text-lg font-semibold text-ink underline-offset-4 hover:underline">{profile.email}</a></dd>
          </div>
          <div>
            <dt className="label">{t(ui.location)}</dt>
            <dd className="mt-1 text-lg font-semibold text-ink">{t(profile.location)}</dd>
          </div>
          <div>
            <dt className="sr-only">Links</dt>
            <dd><SocialLinks /></dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
