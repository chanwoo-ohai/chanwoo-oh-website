'use client';

import type { L } from '@/lib/types';
import { useLang } from '@/lib/i18n';
import { FadeIn } from './FadeIn';

export function SectionHeading({ eyebrow, title, subtitle, as = 'h2' }: { eyebrow?: string; title: L; subtitle?: L; as?: 'h1' | 'h2' }) {
  const { t } = useLang();
  const H = as;
  return (
    <FadeIn className="mb-12 max-w-3xl">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <H className={as === 'h1' ? 'display-1' : 'display-2'}>{t(title)}</H>
      {subtitle && <p className="mt-4 text-lg leading-relaxed text-muted">{t(subtitle)}</p>}
    </FadeIn>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: L; subtitle?: L }) {
  return (
    <div className="container-site pb-6 pt-16 md:pt-24">
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} as="h1" />
    </div>
  );
}
