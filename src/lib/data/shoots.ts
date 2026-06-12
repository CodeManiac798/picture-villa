import type { Space, UseCase } from '@/types/space';
import { SPACES } from '@/lib/data/spaces';

/*
 * Shoot categories — the way clients actually buy.
 * People arrive wanting an aesthetic ("a shoot like this"), not a specific
 * room. Each category maps to UseCases already encoded on every space via
 * `bestFor`, so the 18 spaces stay in the data layer but surface through
 * the lens of intent.
 */

export interface ShootCategory {
  slug: string;
  navLabel: string;   // tight label for the navbar
  name: string;       // full editorial title
  eyebrow: string;
  headline: string;   // emotional, set in display serif
  intro: string;      // one premium paragraph
  description: string; // SEO / meta
  useCases: UseCase[];        // pulls related spaces via bestFor
  featuredSlugs: string[];    // hero-worthy picks, in order
  accent: string;             // luminous placeholder tint
  cover: string;              // real cover image
  coverAlt: string;
}

export const SHOOT_CATEGORIES: ShootCategory[] = [
  {
    slug: 'pre-wedding',
    navLabel: 'Pre-Wedding',
    name: 'Pre-Wedding & Bridal',
    eyebrow: 'Love, before the vows',
    headline: 'Eighteen ways to remember the beginning.',
    intro:
      'A single afternoon that moves from a Rajput palace court to a flower tunnel to a Mediterranean terrace — without ever leaving the estate. Pre-wedding films and portraits with the production value of a destination, twenty minutes from the city.',
    description:
      'Cinematic pre-wedding and bridal shoots across 18 handcrafted spaces at The Picture Villa — palatial, garden and European-inspired backdrops in Delhi NCR.',
    useCases: ['pre-wedding', 'bridal', 'wedding'],
    featuredSlugs: ['japanese-flower-tunnel', 'arches-of-dubrovnik', 'the-italian-setup', 'old-english-sit-out-area'],
    accent: '#D8A6B0',
    cover: '/images/prewedding/pre - 11.jpg',
    coverAlt: 'Couple beneath glowing Moroccan lanterns at night at The Picture Villa',
  },
  {
    slug: 'fashion-editorial',
    navLabel: 'Fashion',
    name: 'Fashion & Editorial',
    eyebrow: 'Where style meets setting',
    headline: 'Every wall is a backdrop. Every corner, a story.',
    intro:
      'Atmospheric, textured spaces built for the lens — zellige tiles, draped Roman columns, a vanity-lit dressing room, a wall of books. The kind of locations stylists chase across continents, kept and lit on three private acres.',
    description:
      'Fashion and editorial shoot locations at The Picture Villa — diverse, atmospheric backdrops for lookbooks, campaigns and editorial photography in Delhi NCR.',
    useCases: ['fashion', 'editorial'],
    featuredSlugs: ['the-moroccan-setup', 'roman-curtains-with-pillars', 'the-library', 'the-dressing-room'],
    accent: '#A9B4C2',
    cover: '/images/fashion/fashion3.jpg',
    coverAlt: 'Editorial fashion portrait in the glass-house garden at The Picture Villa',
  },
  {
    slug: 'films-campaigns',
    navLabel: 'Films',
    name: 'Films & Campaigns',
    eyebrow: 'Trusted by the brands you know',
    headline: 'The location crews don’t talk about.',
    intro:
      'Production-ready spaces with the depth films and campaigns demand — chosen by Nykaa, Spotify India, Paytm, Pond’s and Nestlé. Multiple worlds in one call sheet, room to light, and the discretion of a private estate.',
    description:
      'Film, music video and brand campaign locations at The Picture Villa — production-ready cinematic spaces in Delhi NCR, trusted by leading brands.',
    useCases: ['music-video', 'commercial'],
    featuredSlugs: ['rustic-cafe-and-bar', 'the-colonnade', 'french-kitchen', 'the-glass-house'],
    accent: '#C2A878',
    cover: '/images/hero/colonade.jpeg',
    coverAlt: 'The cinematic Moroccan-lit facade of The Picture Villa at dusk',
  },
];

export const SHOOT_SLUGS = SHOOT_CATEGORIES.map((c) => c.slug);

export function getShootBySlug(slug: string): ShootCategory | undefined {
  return SHOOT_CATEGORIES.find((c) => c.slug === slug);
}

/* All spaces matching any of a category's use cases, in display order. */
export function getSpacesForShoot(category: ShootCategory): Space[] {
  return SPACES
    .filter((s) => category.useCases.some((u) => s.bestFor.includes(u)))
    .sort((a, b) => a.order - b.order);
}

/* Featured picks first (in declared order), then the rest of the matches. */
export function getCuratedSpacesForShoot(category: ShootCategory): Space[] {
  const all = getSpacesForShoot(category);
  const featured = category.featuredSlugs
    .map((slug) => all.find((s) => s.slug === slug))
    .filter((s): s is Space => Boolean(s));
  const rest = all.filter((s) => !category.featuredSlugs.includes(s.slug));
  return [...featured, ...rest];
}
