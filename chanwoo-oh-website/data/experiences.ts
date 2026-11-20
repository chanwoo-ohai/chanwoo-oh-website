import type { Experience, L } from '@/lib/types';

export const experienceIntro = {
  title: { en: 'Beyond Borders', ko: 'Beyond Borders' } as L,
  subtitle: {
    en: 'Learning through international collaboration and cultural exchange.',
    ko: '국제 협업과 문화 교류를 통해 배웁니다.',
  } as L,
};

export const experiences: Experience[] = [
  {
    slug: 'tokyo-polytechnic',
    title: { en: 'International Exchange Exhibition', ko: '국제교류 전시' },
    org: { en: 'Tokyo Polytechnic University', ko: '도쿄공예대학' },
    location: { en: 'Tokyo, Japan', ko: '일본 도쿄' },
    date: { en: 'January 13–16, 2026', ko: '2026년 1월 13–16일' },
    description: {
      en: 'International exchange exhibition featuring an interactive media installation exploring human identity and connection.',
      ko: '사람의 정체성과 연결을 탐구한 인터랙티브 미디어 설치 작품을 선보인 국제교류 전시입니다.',
    },
    tags: [
      { en: 'International academic exchange', ko: '국제 학술 교류' },
      { en: 'Interactive media exhibition', ko: '인터랙티브 미디어 전시' },
      { en: 'Creative technology', ko: '크리에이티브 테크놀로지' },
      { en: 'Cross-cultural communication', ko: '문화 간 소통' },
    ],
  },
  {
    slug: 'mit-exchange',
    title: { en: 'Academic Exchange with MIT Students', ko: 'MIT 학생들과의 학술 교류' },
    org: { en: 'SKKU-BA-DIVE Global Learning Program', ko: 'SKKU-BA-DIVE 글로벌 학습 프로그램' },
    location: { en: 'United States', ko: '미국' },
    date: { en: 'January 2023', ko: '2023년 1월' },
    description: {
      en: 'Participated in academic and cultural exchanges with MIT students through an international university program.',
      ko: '대학 국제 프로그램을 통해 MIT 학생들과 학술·문화 교류에 참여했습니다.',
    },
    tags: [
      { en: 'Cross-cultural communication', ko: '문화 간 소통' },
      { en: 'Academic discussions', ko: '학술 토론' },
      { en: 'Global perspectives on technology', ko: '기술에 대한 글로벌 관점' },
      { en: 'International networking', ko: '국제 네트워킹' },
    ],
  },
  {
    slug: 'microsoft-visit',
    title: { en: 'Microsoft Headquarters Visit', ko: 'Microsoft 본사 방문' },
    org: { en: 'SKKU-BA-DIVE Global Learning Program', ko: 'SKKU-BA-DIVE 글로벌 학습 프로그램' },
    location: { en: 'Seattle, United States', ko: '미국 시애틀' },
    date: { en: 'January 2023', ko: '2023년 1월' },
    description: {
      en: 'Visited Microsoft headquarters and participated in discussions with technology industry professionals, gaining exposure to global technology development and professional collaboration.',
      ko: 'Microsoft 본사를 방문해 기술 업계 전문가들과 이야기를 나누며 글로벌 기술 개발과 협업 방식을 가까이에서 접했습니다.',
    },
    tags: [
      { en: 'Industry exposure', ko: '산업 현장 경험' },
      { en: 'Global technology', ko: '글로벌 기술' },
    ],
  },
];
