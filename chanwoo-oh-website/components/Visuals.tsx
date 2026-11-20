'use client';

import Image from 'next/image';
import { Brain, Compass, HeartHandshake, Palette, Scale, Users } from 'lucide-react';
import type { ResearchInterest } from '@/lib/types';
import { profile } from '@/data/profile';
import { ui } from '@/data/ui';
import { useLang } from '@/lib/i18n';

export const interestIcons: Record<ResearchInterest['icon'], typeof Users> = {
  users: Users,
  scale: Scale,
  compass: Compass,
  heart: HeartHandshake,
  brain: Brain,
  palette: Palette,
};

/** Real photo when provided in data/profile.ts; otherwise a neutral, clearly abstract placeholder. */
export function ProfilePhoto() {
  const { t } = useLang();
  if (profile.photo) {
    return (
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] bg-surface">
        <Image src={profile.photo} alt={`${t(profile.name)} — portrait`} fill priority sizes="(min-width: 1024px) 440px, 90vw" className="object-cover" />
      </div>
    );
  }
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-line bg-surface" role="img" aria-label={t(ui.photoPlaceholder)}>
      <svg viewBox="0 0 400 500" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0V24" fill="none" stroke="rgb(var(--line))" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="500" fill="url(#grid)" />
        {/* abstract node network: human (left) ↔ AI (right) */}
        {[[120, 210], [170, 300], [230, 230], [280, 320], [200, 380], [290, 190]].map(([x, y], i, a) =>
          a.slice(i + 1).map(([x2, y2], j) => (
            <line key={`${i}-${j}`} x1={x} y1={y} x2={x2} y2={y2} stroke="rgb(var(--muted))" strokeOpacity=".25" strokeWidth="1.2" />
          ))
        )}
        <circle cx="120" cy="210" r="34" fill="rgb(var(--card))" stroke="rgb(var(--ink))" strokeWidth="2" />
        <circle cx="290" cy="190" r="26" fill="rgb(var(--accent))" />
        {[[170, 300], [230, 230], [280, 320], [200, 380]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 2 ? 8 : 11} fill="rgb(var(--card))" stroke="rgb(var(--muted))" strokeWidth="1.5" />
        ))}
      </svg>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
        <span className="font-display text-5xl font-extrabold tracking-tight text-ink/90">CO</span>
        <span className="rounded-full bg-card px-3 py-1 text-xs font-medium text-muted ring-1 ring-line">{t(ui.photoPlaceholder)}</span>
      </div>
    </div>
  );
}

const A = 'rgb(var(--accent))';
const I = 'rgb(var(--ink))';
const M = 'rgb(var(--muted))';
const C = 'rgb(var(--card))';

/** Abstract cover illustrations — used until real project images are added. */
function CoverArt({ slug }: { slug: string }) {
  switch (slug) {
    case 'sittalk':
      return (
        <g>
          <path d="M150 120h180a20 20 0 0 1 20 20v70a20 20 0 0 1-20 20H210l-30 26v-26h-30a20 20 0 0 1-20-20v-70a20 20 0 0 1 20-20z" fill={C} stroke={I} strokeWidth="3" />
          <path d="M270 190h170a20 20 0 0 1 20 20v60a20 20 0 0 1-20 20h-26v24l-28-24H270a20 20 0 0 1-20-20v-60a20 20 0 0 1 20-20z" fill={A} />
          {[0, 1, 2].map((i) => <rect key={i} x="160" y={142 + i * 22} width={i === 2 ? 90 : 150} height="8" rx="4" fill={M} opacity=".45" />)}
          {[0, 1].map((i) => <rect key={i} x="282" y={214 + i * 22} width={i ? 100 : 150} height="8" rx="4" fill="#fff" opacity=".8" />)}
          <path d="M520 110c-16 0-28 12-28 28 0 22 28 50 28 50s28-28 28-50c0-16-12-28-28-28z" fill="none" stroke={I} strokeWidth="3" />
          <circle cx="520" cy="138" r="9" fill={A} />
        </g>
      );
    case 'the-missing-piece': {
      const P: [string, string][] = [
        ['330,60 410,100 330,160', I], ['330,60 250,100 330,160', M], ['250,100 330,160 258,230', A],
        ['410,100 330,160 402,230', I], ['258,230 330,160 402,230 330,270', M], ['258,230 330,270 330,350 280,310', A],
      ];
      return (
        <g>
          {P.map(([pts, c], i) => <polygon key={i} points={pts} fill={c} opacity={c === M ? 0.35 : 0.9} stroke={C} strokeWidth="4" strokeLinejoin="round" />)}
          <polygon points="402,230 330,270 330,350 380,310" fill="none" stroke={A} strokeWidth="3" strokeDasharray="9 7" strokeLinejoin="round" />
          <rect x="470" y="210" width="62" height="110" rx="12" fill={I} />
          <rect x="478" y="224" width="46" height="74" rx="4" fill={A} opacity=".85" />
        </g>
      );
    }
    case 'traffic-sign-recognition':
      return (
        <g>
          {Array.from({ length: 12 }).map((_, i) => {
            const x = 150 + (i % 6) * 70, y = 110 + Math.floor(i / 6) * 90;
            const s = i % 3;
            const hl = i === 7;
            const col = hl ? A : I;
            return s === 0 ? <circle key={i} cx={x} cy={y} r="24" fill="none" stroke={col} strokeWidth={hl ? 5 : 3} opacity={hl ? 1 : 0.55} />
              : s === 1 ? <polygon key={i} points={`${x},${y - 26} ${x + 26},${y + 20} ${x - 26},${y + 20}`} fill="none" stroke={col} strokeWidth={hl ? 5 : 3} opacity={hl ? 1 : 0.55} strokeLinejoin="round" />
              : <rect key={i} x={x - 22} y={y - 22} width="44" height="44" rx="8" transform={`rotate(45 ${x} ${y})`} fill="none" stroke={col} strokeWidth={hl ? 5 : 3} opacity={hl ? 1 : 0.55} />;
          })}
          <text x="330" y="335" textAnchor="middle" fontFamily="Manrope Variable, Inter Variable, sans-serif" fontWeight="800" fontSize="54" fill={I}>97.41%</text>
        </g>
      );
    case 'verse72':
      return (
        <g>
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${190 + i * 22} ${110 + i * 26})`}>
              <rect width="260" height="170" rx="18" fill={C} stroke={i === 2 ? I : M} strokeWidth="2.5" opacity={i === 2 ? 1 : 0.6} />
            </g>
          ))}
          <g transform="translate(234 162)">
            <rect x="0" y="40" width="80" height="10" rx="5" fill={M} opacity=".5" />
            <rect x="92" y="34" width="80" height="22" rx="6" fill="none" stroke={A} strokeWidth="3" strokeDasharray="6 5" />
            <rect x="0" y="74" width="150" height="10" rx="5" fill={M} opacity=".5" />
            <rect x="0" y="104" width="110" height="10" rx="5" fill={M} opacity=".5" />
            <circle cx="200" cy="0" r="16" fill={A} />
            <path d="M193 0l5 5 9-10" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
          </g>
        </g>
      );
    case 'clipp':
      return (
        <g>
          <path d="M210 230c0-50 40-90 90-90" fill="none" stroke={I} strokeWidth="6" strokeLinecap="round" />
          <path d="M450 230c0-50-40-90-90-90" fill="none" stroke={I} strokeWidth="6" strokeLinecap="round" />
          <path d="M300 140h60" stroke={I} strokeWidth="6" strokeLinecap="round" />
          <circle cx="210" cy="250" r="30" fill={C} stroke={I} strokeWidth="4" />
          <circle cx="450" cy="250" r="30" fill={C} stroke={I} strokeWidth="4" />
          <rect x="196" y="270" width="28" height="56" rx="14" fill={I} />
          <rect x="436" y="270" width="28" height="56" rx="14" fill={I} />
          {[0, 1, 2].map((i) => <path key={i} d={`M${170 - i * 12} ${222 - i * 8}a${46 + i * 14} ${46 + i * 14} 0 0 0 0 ${56 + i * 16}`} fill="none" stroke={A} strokeWidth="3" opacity={1 - i * 0.3} />)}
        </g>
      );
    case 'driveguard-ai':
      return (
        <g>
          <path d="M190 220c40-60 240-60 280 0-40 60-240 60-280 0z" fill={C} stroke={I} strokeWidth="4" />
          <circle cx="330" cy="220" r="38" fill={I} />
          <circle cx="342" cy="208" r="9" fill={C} />
          <rect x="170" y="150" width="320" height="140" rx="10" fill="none" stroke={A} strokeWidth="3" strokeDasharray="12 10" />
          <text x="330" y="335" textAnchor="middle" fontFamily="Inter Variable, sans-serif" fontWeight="700" fontSize="18" letterSpacing="4" fill={M}>PLANNED</text>
        </g>
      );
    default:
      return null;
  }
}

export function ProjectCover({ slug, cover, alt, className = '' }: { slug: string; cover: string | null; alt: string; className?: string }) {
  if (cover) {
    return (
      <div className={`relative overflow-hidden bg-surface ${className}`}>
        <Image src={cover} alt={alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
      </div>
    );
  }
  return (
    <div className={`relative overflow-hidden bg-surface ${className}`} role="img" aria-label={alt}>
      <svg viewBox="0 0 660 400" className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-[1.02]" preserveAspectRatio="xMidYMid meet" aria-hidden>
        <CoverArt slug={slug} />
      </svg>
    </div>
  );
}
