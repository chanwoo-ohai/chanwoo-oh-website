'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { footer, profile } from '@/data/profile';
import { nav } from '@/data/ui';
import { useLang } from '@/lib/i18n';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  const { t } = useLang();
  const [year, setYear] = useState(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return (
    <footer className="mt-24 border-t border-line">
      <div className="container-site grid gap-10 py-14 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-display text-2xl font-extrabold tracking-tight text-ink">{t(profile.name)}</p>
          <p className="mt-2 text-sm text-muted">{footer.tagline}</p>
          <p className="mt-6 max-w-md font-display text-lg font-semibold text-ink">{t(footer.quote)}</p>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-muted transition-colors hover:text-ink">
                  {t(n.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="container-site flex flex-col gap-2 border-t border-line py-6 text-xs text-muted sm:flex-row sm:justify-between">
        <p>© {year} Chanwoo Oh. All rights reserved.</p>
        <p>{t(profile.location)}</p>
      </div>
    </footer>
  );
}
