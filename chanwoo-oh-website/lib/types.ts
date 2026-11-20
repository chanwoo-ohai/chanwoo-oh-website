/** A string available in both supported languages. */
export type L = { en: string; ko: string };
export type Lang = 'en' | 'ko';

export type LinkItem = { label: string; href: string | null };

export type ProjectStatus = 'exhibited' | 'completed' | 'in-development' | 'development' | 'concept' | 'planned';

export type CaseSection = {
  /** Section key — used for the heading and ordering. */
  key:
    | 'overview'
    | 'problem'
    | 'motivation'
    | 'design'
    | 'implementation'
    | 'architecture'
    | 'media'
    | 'results'
    | 'challenges'
    | 'future'
    | 'reflection';
  body?: L;
  bullets?: L[];
};

export type MediaItem = {
  type: 'image' | 'video';
  /** Path inside /public, e.g. /images/projects/missing-piece/01.jpg */
  src: string;
  alt: L;
  caption?: L;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  subtitle: L;
  category: L;
  status: ProjectStatus;
  summary: L;
  /** Optional date or period, shown only when provided. */
  period?: L;
  technologies: string[];
  /** Real external links only. Leave null until they exist. */
  links: { github: string | null; demo: string | null };
  /** Optional real cover image in /public. When null, an abstract illustration is used. */
  cover: string | null;
  highlight?: { value: string; label: L };
  facts?: { label: L; value: L }[];
  features?: L[];
  researchQuestion?: L;
  sections: CaseSection[];
  media: MediaItem[];
  featured: boolean;
};

export type Experience = {
  slug: string;
  title: L;
  org: L;
  location: L;
  date: L;
  description: L;
  tags: L[];
  note?: L;
};

export type ResearchInterest = {
  id: string;
  icon: 'users' | 'scale' | 'compass' | 'heart' | 'brain' | 'palette';
  title: L;
  body: L;
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  abstract?: string;
  doi?: string;
  pdf?: string;
  projectPage?: string;
};
