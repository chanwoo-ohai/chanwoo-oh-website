'use client';

import Link from 'next/link';
import { Download } from 'lucide-react';
import { education, profile, skills } from '@/data/profile';
import { interests } from '@/data/research';
import { experiences } from '@/data/experiences';
import { isPlanned, projects, statusLabel } from '@/data/projects';
import { ui } from '@/data/ui';
import type { L } from '@/lib/types';
import { useLang } from '@/lib/i18n';
import { FadeIn } from './FadeIn';

export function CVView() {
  const { t } = useLang();
  return (
    <div className="container-site">
      <FadeIn className="mb-14">
        {profile.cvAvailable ? (
          <a href={profile.cvPath} download className="btn-primary">
            <Download size={17} aria-hidden /> {t(ui.downloadCv)}
          </a>
        ) : (
          <button type="button" disabled aria-disabled="true" className="btn-secondary cursor-not-allowed opacity-60">
            <Download size={17} aria-hidden /> {t(ui.cvSoon)}
          </button>
        )}
      </FadeIn>
      <div className="space-y-4">
        <Row title={ui.education}>
          {education.map((e, i) => (
            <div key={i}>
              <p className="font-display text-lg font-bold text-ink">{t(e.school)}</p>
              <p className="text-muted">{t(e.degree)}</p>
              <p className="text-muted">{t(e.period)}</p>
            </div>
          ))}
        </Row>
        <Row title={{ en: 'Research Interests', ko: '연구 관심 분야' }}>
          <ul className="flex flex-wrap gap-2">{interests.map((i) => <li key={i.id} className="tag">{t(i.title)}</li>)}</ul>
        </Row>
        <Row title={{ en: 'Selected Projects', ko: '주요 프로젝트' }}>
          <ul className="space-y-4">
            {projects.map((p) => (
              <li key={p.slug} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <Link href={`/projects/${p.slug}`} className="font-semibold text-ink hover:text-accent">
                  {p.title} <span className="font-normal text-muted">— {t(p.subtitle)}</span>
                </Link>
                <span className={`shrink-0 text-sm ${isPlanned(p.status) ? 'text-muted' : 'text-accent'}`}>{t(statusLabel[p.status])}{p.period ? ` · ${t(p.period)}` : ''}</span>
              </li>
            ))}
          </ul>
        </Row>
        <Row title={ui.internationalExp}>
          <ul className="space-y-4">
            {experiences.map((e) => (
              <li key={e.slug} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <span className="font-semibold text-ink">{t(e.title)} <span className="font-normal text-muted">— {t(e.org)}, {t(e.location)}</span></span>
                <span className="shrink-0 text-sm text-muted">{t(e.date)}</span>
              </li>
            ))}
          </ul>
        </Row>
        <Row title={ui.tools}>
          <dl className="space-y-3">
            {skills.map((g, i) => (
              <div key={i} className="grid gap-1 sm:grid-cols-[220px_1fr]">
                <dt className="font-semibold text-ink">{t(g.group)}</dt>
                <dd className="text-muted">{g.items.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </Row>
        <Row title={ui.languages}>
          <dl className="space-y-2">
            {profile.languages.map((l, i) => (
              <div key={i} className="grid gap-1 sm:grid-cols-[220px_1fr]">
                <dt className="font-semibold text-ink">{t(l.name)}</dt>
                <dd className="text-muted">{t(l.level)}</dd>
              </div>
            ))}
          </dl>
        </Row>
      </div>
    </div>
  );
}

function Row({ title, children }: { title: L; children: React.ReactNode }) {
  const { t } = useLang();
  return (
    <FadeIn as="section" className="grid gap-4 border-t border-line py-8 md:grid-cols-[240px_1fr] md:gap-12">
      <h2 className="label pt-1">{t(title)}</h2>
      <div className="text-[16px] leading-relaxed">{children}</div>
    </FadeIn>
  );
}
