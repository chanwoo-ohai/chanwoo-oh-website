'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLang } from '@/lib/i18n';
import { ui } from '@/data/ui';

export function ThemeToggle() {
  const { t } = useLang();
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains('dark')), []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {}
  };
  return (
    <button type="button" onClick={toggle} aria-label={t(ui.theme)} title={t(ui.theme)} className="icon-btn">
      {dark ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />}
    </button>
  );
}

export function LangToggle() {
  const { lang, setLang, t } = useLang();
  return (
    <button
      type="button"
      onClick={() => setLang(lang === 'en' ? 'ko' : 'en')}
      aria-label={t(ui.lang)}
      title={t(ui.lang)}
      className="icon-btn w-auto px-3 text-[13px] font-semibold tracking-wide"
    >
      <span className={lang === 'en' ? 'text-ink' : 'text-muted'}>EN</span>
      <span className="mx-1 text-line">/</span>
      <span className={lang === 'ko' ? 'text-ink' : 'text-muted'}>KR</span>
    </button>
  );
}
