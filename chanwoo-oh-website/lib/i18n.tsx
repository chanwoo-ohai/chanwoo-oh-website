'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import type { L, Lang } from './types';

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (v: L) => string };
const LangContext = createContext<Ctx>({ lang: 'en', setLang: () => {}, t: (v) => v.en });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('lang');
      if (saved === 'ko' || saved === 'en') setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem('lang', l);
    } catch {}
  }, []);

  const t = useCallback((v: L) => v[lang] ?? v.en, [lang]);
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

/** Renders a bilingual string in the current language. */
export function T({ v }: { v: L }) {
  const { t } = useLang();
  return <>{t(v)}</>;
}
