import type { L, Project, ProjectStatus } from '@/lib/types';

export const statusLabel: Record<ProjectStatus, L> = {
  exhibited: { en: 'Exhibited', ko: '전시 완료' },
  completed: { en: 'Completed', ko: '완료' },
  'in-development': { en: 'In Development', ko: '개발 중' },
  development: { en: 'Development Project', ko: '개발 프로젝트' },
  concept: { en: 'Product Concept', ko: '제품 콘셉트' },
  planned: { en: 'Planned / Upcoming', ko: '계획 중' },
};

/** Statuses treated as "work in progress / future plans" so they are visually separated. */
export const isPlanned = (s: ProjectStatus) => s === 'planned' || s === 'concept';

/**
 * Projects.
 * - Add real images to /public/images/projects/<slug>/ and list them in `media`.
 * - Sections without content are not rendered.
 * - Only add `links` that actually exist.
 */
export const projects: Project[] = [
  {
    slug: 'sittalk',
    number: '01',
    title: 'SitTalk',
    subtitle: { en: 'AI-Powered Collaborative Storytelling', ko: 'AI 기반 협업 스토리텔링' },
    category: { en: 'Human-AI Interaction · AI Application · Social Computing', ko: 'Human-AI Interaction · AI 애플리케이션 · 소셜 컴퓨팅' },
    status: 'in-development',
    summary: {
      en: 'A location- and emotion-based collaborative storytelling platform that enables people sharing the same space and emotional state to create stories together.',
      ko: '같은 공간과 같은 감정을 공유하는 사람들이 함께 이야기를 만들어 가는 위치·감정 기반 협업 스토리텔링 플랫폼입니다.',
    },
    technologies: ['React Native', 'Expo', 'Supabase', 'Generative AI'],
    links: { github: null, demo: null },
    cover: null,
    features: [
      { en: 'Location-based interaction', ko: '위치 기반 상호작용' },
      { en: 'Emotion-based participation', ko: '감정 기반 참여' },
      { en: 'Collaborative storytelling', ko: '협업 스토리텔링' },
      { en: 'AI-generated visual content', ko: 'AI 생성 이미지' },
      { en: 'Community voting and ranking', ko: '커뮤니티 투표와 랭킹' },
      { en: 'Personal storytelling archives', ko: '개인 스토리 아카이브' },
    ],
    researchQuestion: {
      en: 'How can AI facilitate collaborative creativity and meaningful social interactions among people sharing physical spaces?',
      ko: 'AI는 같은 물리적 공간에 있는 사람들 사이의 협업적 창의성과 의미 있는 사회적 상호작용을 어떻게 도울 수 있을까?',
    },
    sections: [
      {
        key: 'overview',
        body: {
          en: 'Users select a location and emotion, contribute a sentence to an ongoing story, and experience collaborative narratives enhanced by AI-generated imagery.',
          ko: '사용자는 장소와 감정을 고르고, 이어지는 이야기에 한 문장을 더하며, AI가 만든 이미지로 풍성해진 공동의 이야기를 경험합니다.',
        },
      },
      {
        key: 'motivation',
        body: {
          en: 'The project explores how artificial intelligence can facilitate creativity, social connection, and meaningful engagement within physical spaces.',
          ko: '이 프로젝트는 인공지능이 물리적 공간 안에서 창의성, 사회적 연결, 의미 있는 참여를 어떻게 이끌어 낼 수 있는지 탐구합니다.',
        },
      },
      {
        key: 'results',
        body: { en: 'Currently in development.', ko: '현재 개발 중입니다.' },
      },
    ],
    media: [],
    featured: true,
  },
  {
    slug: 'the-missing-piece',
    number: '02',
    title: 'The Missing Piece',
    subtitle: { en: 'Interactive Media Installation', ko: '인터랙티브 미디어 설치 작품' },
    category: { en: 'Interactive Media · Computer Vision · Creative Technology', ko: '인터랙티브 미디어 · 컴퓨터 비전 · 크리에이티브 테크놀로지' },
    status: 'exhibited',
    period: { en: 'January 13–16, 2026', ko: '2026년 1월 13–16일' },
    summary: {
      en: 'An interactive media installation exploring identity, incompleteness, and human connection through real-time facial interaction.',
      ko: '실시간 얼굴 인터랙션을 통해 정체성, 불완전함, 그리고 사람 사이의 연결을 탐구한 인터랙티브 미디어 설치 작품입니다.',
    },
    technologies: ['p5.js', 'ml5.js', 'Face Mesh', 'Delaunay Triangulation', 'K-means Clustering', 'Real-time Computer Vision', 'Generative Visualization'],
    links: { github: null, demo: null },
    cover: null,
    facts: [
      { label: { en: 'Exhibition', ko: '전시' }, value: { en: 'International Exchange Exhibition', ko: '국제교류 전시' } },
      { label: { en: 'Venue', ko: '장소' }, value: { en: 'Tokyo Polytechnic University, Japan', ko: '도쿄공예대학, 일본' } },
      { label: { en: 'Dates', ko: '기간' }, value: { en: 'January 13–16, 2026', ko: '2026년 1월 13–16일' } },
    ],
    researchQuestion: {
      en: 'How can an interactive system invite people to bring their own memories and relationships into the experience?',
      ko: '인터랙티브 시스템은 어떻게 사람들이 자신의 기억과 관계를 경험 안으로 가져오도록 이끌 수 있을까?',
    },
    sections: [
      {
        key: 'overview',
        body: {
          en: 'A participant’s face is transformed into fragmented geometric pieces, with one piece intentionally left empty. The face becomes complete when the participant presents a personally meaningful photo from their smartphone — symbolizing the relationship between individuality and connection.',
          ko: '참여자의 얼굴은 기하학적 조각으로 나뉘고, 그중 한 조각은 일부러 비워 둡니다. 참여자가 휴대폰으로 자신에게 소중한 사진을 보여 주면 빈 조각이 채워지며 얼굴이 완성됩니다. 개인과 연결의 관계를 상징합니다.',
        },
      },
      {
        key: 'motivation',
        body: {
          en: 'The work asks how people find a temporary sense of completeness through the people and memories that matter to them.',
          ko: '사람은 자신에게 소중한 사람과 기억을 통해 어떻게 잠시나마 완전함을 느끼는지 질문하는 작품입니다.',
        },
      },
      {
        key: 'design',
        bullets: [
          { en: 'The camera detects the participant’s face in real time.', ko: '카메라가 참여자의 얼굴을 실시간으로 인식합니다.' },
          { en: 'The face is reconstructed into seven geometric fragments, one of which stays empty.', ko: '얼굴은 일곱 개의 기하학적 조각으로 재구성되고, 그중 하나는 비어 있습니다.' },
          { en: 'Showing a meaningful photo fills the missing fragment and completes the face.', ko: '소중한 사진을 보여 주면 빈 조각이 채워지고 얼굴이 완성됩니다.' },
        ],
      },
      {
        key: 'implementation',
        bullets: [
          { en: 'Real-time facial landmarks with ml5.js FaceMesh in p5.js.', ko: 'p5.js 환경에서 ml5.js FaceMesh로 얼굴 랜드마크를 실시간 추출' },
          { en: 'Delaunay triangulation to turn landmarks into a geometric mesh.', ko: 'Delaunay 삼각분할로 랜드마크를 기하학적 메시로 변환' },
          { en: 'K-means clustering to group triangles into seven fragments.', ko: 'K-means 군집화로 삼각형들을 일곱 개의 조각으로 묶음' },
        ],
      },
      {
        key: 'results',
        body: {
          en: 'Installed, operated, and presented at the international exchange exhibition at Tokyo Polytechnic University, including Q&A with Japanese students and faculty feedback.',
          ko: '도쿄공예대학 국제교류 전시에서 작품을 설치·운영하고 발표했으며, 일본 학생들과 질의응답을 하고 교수진의 피드백을 받았습니다.',
        },
      },
    ],
    media: [],
    featured: true,
  },
  {
    slug: 'traffic-sign-recognition',
    number: '03',
    title: 'CNN-Based Traffic Sign Recognition',
    subtitle: { en: 'Image Classification on GTSRB', ko: 'GTSRB 이미지 분류' },
    category: { en: 'Machine Learning · Computer Vision', ko: '머신러닝 · 컴퓨터 비전' },
    status: 'completed',
    summary: {
      en: 'A convolutional neural network project developed to classify traffic signs using the German Traffic Sign Recognition Benchmark (GTSRB).',
      ko: '독일 교통표지판 인식 벤치마크(GTSRB)를 이용해 교통표지판을 분류하는 합성곱 신경망 프로젝트입니다.',
    },
    technologies: ['Python', 'PyTorch', 'Convolutional Neural Networks', 'Image Classification'],
    links: { github: null, demo: null },
    cover: null,
    highlight: { value: '97.41%', label: { en: 'Test Accuracy', ko: '테스트 정확도' } },
    facts: [
      { label: { en: 'Classes', ko: '클래스' }, value: { en: '43 traffic sign classes', ko: '교통표지판 43종' } },
      { label: { en: 'Training images', ko: '학습 이미지' }, value: { en: '26,640', ko: '26,640장' } },
      { label: { en: 'Test images', ko: '테스트 이미지' }, value: { en: '12,630', ko: '12,630장' } },
    ],
    sections: [
      {
        key: 'overview',
        body: {
          en: 'Built and evaluated a CNN image classifier on the 43-class GTSRB dataset, covering data preprocessing, training, validation, and evaluation.',
          ko: '43개 클래스의 GTSRB 데이터셋으로 CNN 이미지 분류 모델을 만들고, 전처리부터 학습, 검증, 평가까지 진행했습니다.',
        },
      },
      {
        key: 'results',
        body: { en: 'Achieved 97.41% accuracy on the test set.', ko: '테스트 세트에서 97.41%의 정확도를 달성했습니다.' },
      },
    ],
    media: [],
    featured: true,
  },
  {
    slug: 'verse72',
    number: '04',
    title: 'Verse72',
    subtitle: { en: 'Interactive Memorization Platform', ko: '인터랙티브 암송 학습 플랫폼' },
    category: { en: 'EdTech · Gamification · Learning Experience', ko: '에듀테크 · 게이미피케이션 · 학습 경험' },
    status: 'development',
    summary: {
      en: 'A gamified memorization platform designed to support structured learning and long-term engagement through interactive practice.',
      ko: '인터랙티브한 연습을 통해 체계적인 학습과 꾸준한 참여를 돕도록 설계한 게이미피케이션 암송 플랫폼입니다.',
    },
    technologies: [],
    links: { github: null, demo: null },
    cover: null,
    features: [
      { en: 'Multiple-choice quizzes', ko: '객관식 퀴즈' },
      { en: 'Fill-in-the-blank exercises', ko: '빈칸 채우기' },
      { en: 'Sentence reconstruction', ko: '문장 재구성' },
      { en: 'Learning progression', ko: '학습 진행 단계' },
      { en: 'Ranking systems', ko: '랭킹 시스템' },
      { en: 'Personalized review', ko: '맞춤형 복습' },
    ],
    sections: [
      {
        key: 'overview',
        body: {
          en: 'The platform explores how digital interactions, feedback systems, and gamification can improve motivation and memorization experiences for Scripture learning.',
          ko: '디지털 상호작용, 피드백 시스템, 게이미피케이션이 성경 암송 학습의 동기와 경험을 어떻게 높일 수 있는지 탐구합니다.',
        },
      },
      {
        key: 'design',
        bullets: [
          { en: 'Learning experience design', ko: '학습 경험 설계' },
          { en: 'Motivation and engagement', ko: '동기와 참여' },
          { en: 'Gamification', ko: '게이미피케이션' },
          { en: 'User-centered interface design', ko: '사용자 중심 인터페이스 설계' },
        ],
      },
    ],
    media: [],
    featured: false,
  },
  {
    slug: 'clipp',
    number: '05',
    title: 'CLIPP',
    subtitle: { en: 'Magnetic Charging Cable for Wireless Earbuds', ko: '무선 이어폰용 자석 충전 케이블' },
    category: { en: 'Product Innovation · Entrepreneurship', ko: '제품 혁신 · 창업' },
    status: 'concept',
    summary: {
      en: 'A product concept addressing the inconvenience of wireless earbud battery depletion through a magnetic, wearable charging cable.',
      ko: '무선 이어폰 배터리가 떨어지는 불편함을 착용형 자석 충전 케이블로 해결하려는 제품 콘셉트입니다.',
    },
    technologies: [],
    links: { github: null, demo: null },
    cover: null,
    sections: [
      {
        key: 'overview',
        body: {
          en: 'This project explores how everyday technological frustrations can be transformed into practical product innovation through user-centered design.',
          ko: '일상 속 기술의 불편함을 사용자 중심 설계를 통해 실용적인 제품 혁신으로 바꾸는 과정을 탐구합니다.',
        },
      },
      {
        key: 'problem',
        body: {
          en: 'Wireless earbuds run out of battery at inconvenient moments, and charging them usually means stopping use and carrying a separate case.',
          ko: '무선 이어폰은 불편한 순간에 배터리가 떨어지고, 충전하려면 사용을 멈추고 케이스를 따로 챙겨야 합니다.',
        },
      },
    ],
    media: [],
    featured: false,
  },
  {
    slug: 'driveguard-ai',
    number: '06',
    title: 'DriveGuard AI',
    subtitle: { en: 'Driver Drowsiness Detection', ko: '운전자 졸음 감지' },
    category: { en: 'Computer Vision · Applied AI', ko: '컴퓨터 비전 · 응용 AI' },
    status: 'planned',
    summary: {
      en: 'A proposed computer vision system designed to detect prolonged eye closure and potential driver drowsiness using image classification and real-time monitoring.',
      ko: '이미지 분류와 실시간 모니터링으로 운전자의 장시간 눈 감김과 졸음을 감지하는 컴퓨터 비전 시스템을 계획하고 있습니다.',
    },
    technologies: ['Python', 'Convolutional Neural Networks', 'Computer Vision', 'Real-time Alert Systems'],
    links: { github: null, demo: null },
    cover: null,
    sections: [
      {
        key: 'results',
        body: {
          en: 'This is a planned project. Development has not started yet.',
          ko: '계획 중인 프로젝트이며, 아직 개발을 시작하지 않았습니다.',
        },
      },
    ],
    media: [],
    featured: false,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
