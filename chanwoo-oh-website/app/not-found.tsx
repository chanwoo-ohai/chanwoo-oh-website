'use client';

import Link from 'next/link';
import { ui } from '@/data/ui';
import { useLang } from '@/lib/i18n';

export default function NotFound() {
  const { t } = useLang();
  return (
    <section className="container-site flex min-h-[60vh] flex-col items-start justify-center">
      <p className="eyebrow">404</p>
      <h1 className="display-1">{t(ui.notFound)}</h1>
      <Link href="/" className="btn-primary mt-8">{t(ui.goHome)}</Link>
    </section>
  );
}
