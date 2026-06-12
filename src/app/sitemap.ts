import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants/site';
import { SPACE_SLUGS } from '@/lib/data/spaces';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/spaces`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/gallery`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/experience`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/book`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ];

  const spacePages: MetadataRoute.Sitemap = SPACE_SLUGS.map((slug) => ({
    url: `${base}/spaces/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...spacePages];
}
