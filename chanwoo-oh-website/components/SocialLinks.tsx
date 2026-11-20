'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/profile';

/** Renders only links that actually exist in data/profile.ts. */
export function SocialLinks({ size = 'md' }: { size?: 'md' | 'lg' }) {
  const items = [
    { href: `mailto:${profile.email}`, label: 'Email', icon: Mail, external: false },
    profile.links.linkedin && { href: profile.links.linkedin, label: 'LinkedIn', icon: Linkedin, external: true },
    profile.links.github && { href: profile.links.github, label: 'GitHub', icon: Github, external: true },
  ].filter(Boolean) as { href: string; label: string; icon: typeof Mail; external: boolean }[];

  return (
    <ul className="flex flex-wrap items-center gap-2">
      {items.map(({ href, label, icon: Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className={`inline-flex items-center gap-2 rounded-full border border-line text-ink transition-colors hover:border-ink ${
              size === 'lg' ? 'px-5 py-3 text-[15px]' : 'px-4 py-2 text-[13px]'
            } font-medium`}
          >
            <Icon size={size === 'lg' ? 18 : 15} aria-hidden />
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
