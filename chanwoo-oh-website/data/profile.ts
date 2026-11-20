import type { L } from '@/lib/types';

/**
 * Personal information.
 * To add a link later, replace `null` with the real URL — buttons appear automatically.
 */
export const profile = {
  name: { en: 'Chanwoo Oh', ko: '오찬우' } as L,
  wordmark: 'CHANWOO OH.',
  role: { en: 'AI Student & Aspiring Human-AI Interaction Researcher', ko: 'AI 전공 학부생 · Human-AI Interaction 연구자 지망' } as L,
  university: { en: 'Sungkyunkwan University', ko: '성균관대학교' } as L,
  affiliation: { en: 'Sungkyunkwan University, South Korea', ko: '성균관대학교, 대한민국' } as L,
  // Official English major name can be updated here.
  major: { en: 'Artificial Intelligence', ko: '인공지능융합전공' } as L,
  status: { en: 'Undergraduate Student', ko: '학부 재학' } as L,
  graduation: { en: 'Expected Graduation: February 2027', ko: '졸업 예정: 2027년 2월' } as L,
  location: { en: 'Seoul, South Korea', ko: '대한민국 서울' } as L,
  email: 'chanwu2021@gmail.com',
  links: {
    linkedin: null as string | null, // e.g. 'https://www.linkedin.com/in/…'
    github: null as string | null, // e.g. 'https://github.com/…'
  },
  /** Put a photo at /public/images/profile.jpg and set this to '/images/profile.jpg'. */
  photo: null as string | null,
  /** Put your CV at /public/cv.pdf and set this to true. */
  cvAvailable: false,
  cvPath: '/cv.pdf',
  languages: [
    { name: { en: 'Korean', ko: '한국어' } as L, level: { en: 'Native', ko: '모국어' } as L },
    { name: { en: 'English', ko: '영어' } as L, level: { en: 'TEPS 471 · OPIc Advanced Low (AL)', ko: 'TEPS 471 · OPIc AL' } as L },
  ],
};

export const slogan = {
  label: 'ARTIFICIAL INTELLIGENCE · HUMAN-COMPUTER INTERACTION',
  main: { en: 'Technology,\nwith humans\nat its center.', ko: '기술,\n그 중심에는\n사람이 있다.' } as L,
  sub: {
    en: 'Exploring how artificial intelligence can empower human thinking, creativity, and meaningful connections.',
    ko: '인공지능이 사람의 사고와 창의성, 그리고 의미 있는 관계를 어떻게 더 풍부하게 할 수 있는지 탐구합니다.',
  } as L,
  heroDescription: {
    en: 'I am interested in understanding how artificial intelligence shapes human thinking, decision-making, creativity, and social interaction. My goal is to design intelligent systems that empower people while preserving human agency.',
    ko: '인공지능이 사람의 사고, 의사결정, 창의성, 사회적 상호작용에 어떤 영향을 미치는지에 관심이 있습니다. 사람의 주도성을 지키면서 사람에게 힘이 되는 지능형 시스템을 설계하는 것이 목표입니다.',
  } as L,
};

export const bio: L[] = [
  {
    en: 'I am an undergraduate student studying Artificial Intelligence at Sungkyunkwan University in South Korea.',
    ko: '저는 성균관대학교에서 인공지능을 공부하고 있는 학부생입니다.',
  },
  {
    en: 'My interests lie at the intersection of artificial intelligence, human-computer interaction, cognitive psychology, and creative technology. I am particularly interested in how intelligent systems influence human trust, decision-making, creativity, and autonomy.',
    ko: '인공지능, 인간-컴퓨터 상호작용, 인지심리학, 크리에이티브 테크놀로지가 만나는 지점에 관심이 있습니다. 특히 지능형 시스템이 사람의 신뢰, 의사결정, 창의성, 자율성에 어떤 영향을 주는지 궁금합니다.',
  },
  {
    en: 'Through AI-powered application development, interactive media installations, and international academic experiences, I have explored how technology can create meaningful human experiences.',
    ko: 'AI 애플리케이션 개발, 인터랙티브 미디어 설치 작품, 국제 학술 교류를 통해 기술이 어떻게 사람에게 의미 있는 경험을 만들 수 있는지 탐구해 왔습니다.',
  },
  {
    en: 'My long-term goal is to contribute to the development of responsible and human-centered AI systems that augment human capabilities rather than replace human judgment.',
    ko: '장기적으로는 사람의 판단을 대체하는 대신 사람의 능력을 확장하는, 책임 있고 사람 중심적인 AI 시스템을 만드는 데 기여하고 싶습니다.',
  },
];

export const education = [
  {
    school: { en: 'Sungkyunkwan University', ko: '성균관대학교' } as L,
    degree: { en: 'B.S. Candidate · Major in Artificial Intelligence', ko: '학사 과정 · 인공지능융합전공' } as L,
    period: { en: 'Expected Graduation: February 2027', ko: '2027년 2월 졸업 예정' } as L,
  },
];

export const skills: { group: L; items: string[] }[] = [
  { group: { en: 'Programming', ko: '프로그래밍' }, items: ['Python', 'JavaScript', 'TypeScript', 'SQL'] },
  { group: { en: 'Artificial Intelligence', ko: '인공지능' }, items: ['PyTorch', 'Machine Learning', 'Convolutional Neural Networks', 'Computer Vision', 'Generative AI'] },
  { group: { en: 'Application Development', ko: '애플리케이션 개발' }, items: ['React Native', 'Expo', 'Supabase'] },
  { group: { en: 'Creative Technology', ko: '크리에이티브 테크놀로지' }, items: ['p5.js', 'ml5.js', 'TouchDesigner', 'Generative Design', 'Interactive Media'] },
  { group: { en: 'Research Interests & Methods', ko: '연구 관심 및 방법' }, items: ['Human-Computer Interaction', 'Human-AI Interaction', 'User-Centered Design', 'Cognitive Psychology', 'Statistical Analysis'] },
];

export const footer = {
  tagline: 'Human-Centered AI · Creative Technology · Human-AI Interaction',
  quote: { en: '“Building technology that understands and empowers people.”', ko: '“사람을 이해하고, 사람에게 힘이 되는 기술을 만듭니다.”' } as L,
};
