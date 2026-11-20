import type { L, ResearchInterest } from '@/lib/types';

export const researchIntro = {
  title: { en: 'Research Interests', ko: '연구 관심 분야' } as L,
  subtitle: { en: 'Understanding humans. Designing better AI.', ko: '사람을 이해하고, 더 나은 AI를 설계합니다.' } as L,
  note: {
    en: 'These are current areas of interest that guide my learning and future research — not completed research outcomes.',
    ko: '아래는 현재 공부하고 앞으로 연구하고 싶은 관심 분야이며, 완료된 연구 성과가 아닙니다.',
  } as L,
};

export const interests: ResearchInterest[] = [
  {
    id: 'hai',
    icon: 'users',
    title: { en: 'Human-AI Interaction', ko: 'Human-AI Interaction' },
    body: {
      en: 'Exploring how people interact with AI systems and how interaction design can support effective human-AI collaboration.',
      ko: '사람이 AI 시스템과 어떻게 상호작용하는지, 그리고 인터랙션 설계가 어떻게 효과적인 인간-AI 협업을 도울 수 있는지 탐구합니다.',
    },
  },
  {
    id: 'trust',
    icon: 'scale',
    title: { en: 'AI Trust & Reliance', ko: 'AI 신뢰와 의존' },
    body: {
      en: 'Investigating how users develop trust in AI and how interfaces can encourage appropriate reliance while reducing overreliance.',
      ko: '사용자가 AI를 어떻게 신뢰하게 되는지, 그리고 인터페이스가 과의존을 줄이면서 적절한 의존을 유도할 수 있는 방법을 탐구합니다.',
    },
  },
  {
    id: 'agency',
    icon: 'compass',
    title: { en: 'Human Agency', ko: '인간의 주도성' },
    body: {
      en: 'Exploring how AI systems can preserve human autonomy, independent thinking, and decision-making capabilities.',
      ko: 'AI 시스템이 사람의 자율성, 독립적인 사고, 의사결정 능력을 어떻게 지킬 수 있는지 탐구합니다.',
    },
  },
  {
    id: 'hcai',
    icon: 'heart',
    title: { en: 'Human-Centered AI', ko: '사람 중심 AI' },
    body: {
      en: 'Designing intelligent systems that prioritize human needs, values, accessibility, and well-being.',
      ko: '사람의 필요, 가치, 접근성, 웰빙을 우선하는 지능형 시스템을 설계합니다.',
    },
  },
  {
    id: 'cog',
    icon: 'brain',
    title: { en: 'Cognitive Psychology & AI', ko: '인지심리학과 AI' },
    body: {
      en: 'Understanding how cognitive processes, attention, perception, and judgment influence interactions with intelligent technologies.',
      ko: '인지 과정, 주의, 지각, 판단이 지능형 기술과의 상호작용에 어떤 영향을 주는지 이해하고자 합니다.',
    },
  },
  {
    id: 'creative',
    icon: 'palette',
    title: { en: 'Creative AI & Interactive Media', ko: '크리에이티브 AI와 인터랙티브 미디어' },
    body: {
      en: 'Exploring the intersection of artificial intelligence, computational creativity, digital art, and interactive human experiences.',
      ko: '인공지능, 계산적 창의성, 디지털 아트, 인터랙티브 경험이 만나는 지점을 탐구합니다.',
    },
  },
];

export const vision = {
  title: { en: 'My Research Vision', ko: '연구 비전' } as L,
  question: {
    en: 'How can we design AI that empowers human judgment rather than replacing it?',
    ko: '어떻게 하면 사람의 판단을 대신하지 않고, 더 강하게 만드는 AI를 설계할 수 있을까?',
  } as L,
  paragraphs: [
    {
      en: 'As artificial intelligence becomes increasingly integrated into everyday life, people are developing new forms of trust and reliance on intelligent systems.',
      ko: '인공지능이 일상 깊숙이 들어오면서, 사람들은 지능형 시스템에 대해 새로운 형태의 신뢰와 의존을 형성하고 있습니다.',
    },
    {
      en: 'I am interested in exploring how interface design, AI explanations, uncertainty communication, and reflective interactions can help users maintain appropriate trust while preserving their ability to think critically and make independent decisions.',
      ko: '인터페이스 설계, AI의 설명, 불확실성 전달, 성찰을 이끄는 상호작용이 사용자가 적절한 신뢰를 유지하면서도 비판적으로 사고하고 스스로 결정하는 능력을 지키는 데 어떻게 도움이 될 수 있는지 탐구하고 싶습니다.',
    },
    {
      en: 'My goal is to contribute to AI systems that are not only technically capable but also responsible, transparent, and genuinely human-centered.',
      ko: '기술적으로 뛰어날 뿐 아니라 책임 있고 투명하며 진정으로 사람 중심적인 AI 시스템에 기여하는 것이 목표입니다.',
    },
  ] as L[],
  questions: [
    { en: 'How does AI influence human decision-making?', ko: 'AI는 사람의 의사결정에 어떤 영향을 미칠까?' },
    { en: 'When do people become overly reliant on AI?', ko: '사람은 언제 AI에 지나치게 의존하게 될까?' },
    { en: 'How can interface design support appropriate trust?', ko: '인터페이스 설계는 어떻게 적절한 신뢰를 도울 수 있을까?' },
    { en: 'How can AI preserve human agency and creativity?', ko: 'AI는 어떻게 사람의 주도성과 창의성을 지킬 수 있을까?' },
    { en: 'What makes human-AI collaboration meaningful?', ko: '무엇이 인간-AI 협업을 의미 있게 만들까?' },
  ] as L[],
};
