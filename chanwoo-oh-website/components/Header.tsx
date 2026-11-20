'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { nav, ui } from '@/data/ui';
import { profile } from '@/data/profile';
import { useLang } from '@/lib/i18n';
import { LangToggle, ThemeToggle } from './ThemeToggle';

export function Header() {
  const pathname = usePathname();
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-line bg-bg/90 backdrop-blur-md' : 'border-b border-transparent bg-bg'
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-bg">
        {t(ui.skip)}
      </a>
      <div className="container-site flex h-16 items-center justify-between gap-6">
        <Link href="/" className="font-display text-[15px] font-extrabold tracking-[0.08em] text-ink">
          {profile.wordmark}
        </Link>
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  aria-current={isActive(n.href) ? 'page' : undefined}
                  className={`relative rounded-full px-3 py-2 text-[14px] font-medium transition-colors ${
                    isActive(n.href) ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  {t(n.label)}
                  {isActive(n.href) && <span className="absolute bottom-0.5 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-accent" aria-hidden />}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-1">
          <LangToggle />
          <ThemeToggle />
          <button
            type="button"
            className="icon-btn lg:hidden"
            aria-label={open ? t(ui.close) : t(ui.menu)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-bg lg:hidden"
          >
            <ul className="container-site flex flex-col py-6">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    aria-current={isActive(n.href) ? 'page' : undefined}
                    className={`flex items-center justify-between border-b border-line py-4 font-display text-2xl font-bold ${
                      isActive(n.href) ? 'text-accent' : 'text-ink'
                    }`}
                  >
                    {t(n.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
