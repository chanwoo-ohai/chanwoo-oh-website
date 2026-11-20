import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/research', '/projects', '/experience', '/cv', '/contact'];
  return [
    ...routes.map((r) => ({ url: `${siteUrl}${r}`, changeFrequency: 'monthly' as const, priority: r === '' ? 1 : 0.7 })),
    ...projects.map((p) => ({ url: `${siteUrl}/projects/${p.slug}`, changeFrequency: 'monthly' as const, priority: 0.6 })),
  ];
}
