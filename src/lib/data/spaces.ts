import type { Space } from '@/types/space';

/*
 * Canonical space data.
 * Images: drop files into /public/images/spaces/<slug>/
 * File names: cover.jpg, 01.jpg, 02.jpg … 06.jpg (per space)
 * Replace placeholder blurDataURL with actual LQIP base64 strings.
 */

export const SPACES: Space[] = [
  {
    id: 'raj-mahal',
    slug: 'raj-mahal',
    name: 'Raj Mahal',
    category: 'palatial',
    tagline: 'Royal grandeur reimagined',
    description:
      'A palatial backdrop inspired by Rajputana heritage — arched doorways, ornate detailing, and rich textures that transport you to a royal court.',
    atmosphere: 'Opulent and commanding, with a timeless regal stillness.',
    features: ['Grand arched entryway', 'Ornate wall detailing', 'Warm ambient lighting', 'High ceilings'],
    bestFor: ['pre-wedding', 'bridal', 'editorial', 'fashion'],
    images: [],
    coverImage: { src: '/images/spaces/raj-mahal.jpg', alt: 'Raj Mahal — illuminated palatial courtyard at The Picture Villa', width: 1200, height: 1500 },
    coverReady: true,
    accentColor: '#C9A96E',
    order: 1,
  },
  {
    id: 'royal-jaipur',
    slug: 'royal-jaipur',
    name: 'Royal Jaipur',
    category: 'palatial',
    tagline: 'The Pink City, distilled',
    description:
      'Inspired by the legendary architecture of Jaipur — carved stone textures, warm terracotta, and the unmistakable charm of Rajasthan.',
    atmosphere: 'Warm, regal and deeply Indian — with a lyrical softness.',
    features: ['Jaipur-inspired stone carvings', 'Warm terracotta palette', 'Decorative niches', 'Ornate columns'],
    bestFor: ['pre-wedding', 'bridal', 'fashion', 'editorial'],
    images: [],
    coverImage: { src: '/images/spaces/royal-jaipur/cover.jpg', alt: 'Royal Jaipur space at The Picture Villa', width: 1200, height: 800 },
    accentColor: '#D4854A',
    order: 2,
  },
  {
    id: 'the-colonnade',
    slug: 'the-colonnade',
    name: 'The Colonnade',
    category: 'social',
    tagline: 'Architecture as backdrop',
    description:
      'A series of elegant columns framing light and shadow in equal measure — creating natural depth and a sense of grandeur at every angle.',
    atmosphere: 'Architectural and airy, with a classical Mediterranean calm.',
    features: ['Symmetrical columns', 'Dappled natural light', 'Multiple depth layers', 'Stone flooring'],
    bestFor: ['fashion', 'editorial', 'commercial', 'pre-wedding'],
    images: [],
    coverImage: { src: '/images/spaces/The collonade.jpeg', alt: 'The Colonnade — Moroccan-pink facade lit at dusk at The Picture Villa', width: 1200, height: 800 },
    coverReady: true,
    order: 3,
  },
  {
    id: 'arches-of-dubrovnik',
    slug: 'arches-of-dubrovnik',
    name: 'Arches of Dubrovnik',
    category: 'international',
    tagline: 'The Adriatic coast, in Delhi',
    description:
      'Weathered stone arches and old-world European coastal architecture — evoking the sun-bleached beauty of Croatia\'s walled city.',
    atmosphere: 'Romantic, textured and deeply cinematic.',
    features: ['Aged stone arches', 'Coastal aesthetic', 'Multiple arch frames', 'Warm stone tones'],
    bestFor: ['pre-wedding', 'fashion', 'editorial', 'music-video'],
    images: [],
    coverImage: { src: '/images/spaces/arches-of-dubrovnik/cover.jpg', alt: 'Arches of Dubrovnik at The Picture Villa', width: 1200, height: 800 },
    order: 4,
  },
  {
    id: 'the-moroccan-setup',
    slug: 'the-moroccan-setup',
    name: 'The Moroccan Setup',
    category: 'international',
    tagline: 'Marrakech magic',
    description:
      'Intricate geometric tile patterns, lantern-style lighting, and rich jewel-toned textiles inspired by the medinas of Morocco.',
    atmosphere: 'Exotic, layered and moody — with a rich sensory depth.',
    features: ['Geometric zellige tiles', 'Lantern lighting', 'Rich textiles', 'Arched windows'],
    bestFor: ['fashion', 'editorial', 'bridal', 'music-video'],
    images: [],
    coverImage: { src: '/images/spaces/the-moroccan-setup/cover.jpg', alt: 'The Moroccan Setup at The Picture Villa', width: 1200, height: 800 },
    order: 5,
  },
  {
    id: 'the-italian-setup',
    slug: 'the-italian-setup',
    name: 'The Italian Setup',
    category: 'international',
    tagline: 'La dolce vita',
    description:
      'Sun-drenched Mediterranean aesthetics — rustic terracotta, climbing vines, wrought iron and the timeless romance of the Italian countryside.',
    atmosphere: 'Warm, golden-hued and effortlessly romantic.',
    features: ['Mediterranean terracotta', 'Climbing greenery', 'Wrought iron accents', 'Rustic textures'],
    bestFor: ['pre-wedding', 'fashion', 'editorial'],
    images: [],
    coverImage: { src: '/images/spaces/the-italian-setup/cover.jpg', alt: 'The Italian Setup at The Picture Villa', width: 1200, height: 800 },
    order: 6,
  },
  {
    id: 'colonial-villa',
    slug: 'colonial-villa',
    name: 'Colonial Villa',
    category: 'international',
    tagline: 'Old world refinement',
    description:
      'Classic colonial architecture with wide verandahs, shuttered windows and the understated elegance of a bygone era.',
    atmosphere: 'Stately, serene and full of quiet character.',
    features: ['Shuttered colonial windows', 'Wide verandah', 'Period detailing', 'Cream and white palette'],
    bestFor: ['pre-wedding', 'fashion', 'editorial', 'commercial'],
    images: [],
    coverImage: { src: '/images/spaces/colonial-villa/cover.jpg', alt: 'Colonial Villa at The Picture Villa', width: 1200, height: 800 },
    order: 7,
  },
  {
    id: 'roman-curtains-with-pillars',
    slug: 'roman-curtains-with-pillars',
    name: 'Roman Curtains with Pillars',
    category: 'international',
    tagline: 'Classical grandeur',
    description:
      'Sweeping draped fabric between Corinthian columns — evoking the theatre and drama of ancient Rome with a fashion-forward sensibility.',
    atmosphere: 'Dramatic, theatrical and classically beautiful.',
    features: ['Draped fabric backdrops', 'Classical pillars', 'Theatrical depth', 'Adjustable draping'],
    bestFor: ['fashion', 'editorial', 'bridal', 'commercial'],
    images: [],
    coverImage: { src: '/images/spaces/roman-curtains-with-pillars/cover.jpg', alt: 'Roman Curtains with Pillars at The Picture Villa', width: 1200, height: 800 },
    order: 8,
  },
  {
    id: 'japanese-flower-tunnel',
    slug: 'japanese-flower-tunnel',
    name: 'Japanese Flower Tunnel',
    category: 'natural',
    tagline: 'A passage through bloom',
    description:
      'An immersive tunnel of cascading florals — inspired by the wisteria and cherry blossom paths of Japan, creating a dreamlike canopy overhead.',
    atmosphere: 'Ethereal, romantic and irresistibly photogenic.',
    features: ['Overhead floral canopy', 'Tunnel perspective', 'Soft diffused light', 'Seasonal colour palette'],
    bestFor: ['pre-wedding', 'bridal', 'fashion', 'editorial'],
    images: [],
    coverImage: { src: '/images/spaces/japanese-flower-tunnel/cover.jpg', alt: 'Japanese Flower Tunnel at The Picture Villa', width: 1200, height: 800 },
    accentColor: '#E8A0B4',
    order: 9,
  },
  {
    id: 'the-tree-house',
    slug: 'the-tree-house',
    name: 'The Tree House',
    category: 'natural',
    tagline: 'Elevated in nature',
    description:
      'A whimsical elevated structure nestled within the canopy — raw wood, dappled light and the romance of a secret perch above the world.',
    atmosphere: 'Playful, intimate and deeply organic.',
    features: ['Elevated platform', 'Natural wood structure', 'Tree canopy surroundings', 'Open-air feel'],
    bestFor: ['pre-wedding', 'fashion', 'editorial', 'music-video'],
    images: [],
    coverImage: { src: '/images/spaces/the-tree-house/cover.jpg', alt: 'The Tree House at The Picture Villa', width: 1200, height: 800 },
    order: 10,
  },
  {
    id: 'sit-out-area',
    slug: 'sit-out-area',
    name: 'Sit Out Area',
    category: 'natural',
    tagline: 'Open sky, open possibilities',
    description:
      'A gracious outdoor terrace with garden views — lush greenery, natural light and the unhurried ease of an estate garden.',
    atmosphere: 'Fresh, open and luminously natural.',
    features: ['Open-air terrace', 'Garden views', 'Natural light', 'Versatile layout'],
    bestFor: ['pre-wedding', 'fashion', 'commercial', 'editorial'],
    images: [],
    coverImage: { src: '/images/spaces/sit-out-area/cover.jpg', alt: 'Sit Out Area at The Picture Villa', width: 1200, height: 800 },
    order: 11,
  },
  {
    id: 'old-english-sit-out-area',
    slug: 'old-english-sit-out-area',
    name: 'Old English Sit Out',
    category: 'social',
    tagline: 'English garden charm',
    description:
      'A garden terrace with the gentle nostalgia of an English country estate — wicker furniture, climbing roses and soft afternoon light.',
    atmosphere: 'Nostalgic, romantic and quietly charming.',
    features: ['Vintage garden furniture', 'English garden aesthetic', 'Soft afternoon light', 'Floral elements'],
    bestFor: ['pre-wedding', 'bridal', 'fashion', 'editorial'],
    images: [],
    coverImage: { src: '/images/spaces/old english.jpg', alt: 'Old English Sit Out — blue velvet wing chairs and warm panelling at The Picture Villa', width: 1200, height: 800 },
    coverReady: true,
    order: 12,
  },
  {
    id: 'rustic-cafe-and-bar',
    slug: 'rustic-cafe-and-bar',
    name: 'Rustic Cafe & Bar',
    category: 'social',
    tagline: 'Warmth in every frame',
    description:
      'An intimate cafe-bar setting with exposed brick, warm Edison bulbs and the lived-in warmth of a neighbourhood haunt turned editorial set.',
    atmosphere: 'Warm, intimate and full of textural character.',
    features: ['Exposed brick walls', 'Edison bulb lighting', 'Bar counter', 'Vintage cafe props'],
    bestFor: ['fashion', 'commercial', 'music-video', 'editorial'],
    images: [],
    coverImage: { src: '/images/spaces/rustic cafe.jpg', alt: 'Rustic Cafe & Bar — hand-lettered ‘Love Bites’ wall at The Picture Villa', width: 1200, height: 800 },
    coverReady: true,
    order: 13,
  },
  {
    id: 'the-library',
    slug: 'the-library',
    name: 'The Library',
    category: 'intimate',
    tagline: 'Intellectual luxury',
    description:
      'Floor-to-ceiling bookshelves, leather accents and warm reading light — the aesthetic of a private gentleman\'s library with a contemporary twist.',
    atmosphere: 'Sophisticated, contemplative and rich with texture.',
    features: ['Full-wall bookshelves', 'Leather accents', 'Warm reading light', 'Period furniture'],
    bestFor: ['fashion', 'editorial', 'commercial', 'bridal'],
    images: [],
    coverImage: { src: '/images/spaces/the library.jpg', alt: 'The Library — leather reading chair and full-height bookshelves at The Picture Villa', width: 1000, height: 1500 },
    coverReady: true,
    order: 14,
  },
  {
    id: 'bedroom',
    slug: 'bedroom',
    name: 'Bedroom',
    category: 'intimate',
    tagline: 'Intimate and editorial',
    description:
      'A curated bedroom suite with linen textures, soft natural light and the kind of effortless elegance that elevates bridal and fashion shoots.',
    atmosphere: 'Soft, intimate and quietly luxurious.',
    features: ['Styled bed setup', 'Soft natural light', 'Linen textures', 'Muted colour palette'],
    bestFor: ['bridal', 'fashion', 'editorial'],
    images: [],
    coverImage: { src: '/images/spaces/bedroom/cover.jpg', alt: 'Bedroom set at The Picture Villa', width: 1200, height: 800 },
    order: 15,
  },
  {
    id: 'the-dressing-room',
    slug: 'the-dressing-room',
    name: 'The Dressing Room',
    category: 'intimate',
    tagline: 'Behind the glamour',
    description:
      'A vanity-lit dressing room with mirror arrangements, makeup station and the backstage aesthetic beloved by fashion editorials.',
    atmosphere: 'Glamorous, reflective and full of creative energy.',
    features: ['Vanity mirrors with lighting', 'Makeup station', 'Wardrobe space', 'Reflective surfaces'],
    bestFor: ['fashion', 'bridal', 'editorial'],
    images: [],
    coverImage: { src: '/images/spaces/the-dressing-room/cover.jpg', alt: 'The Dressing Room at The Picture Villa', width: 1200, height: 800 },
    order: 16,
  },
  {
    id: 'french-kitchen',
    slug: 'french-kitchen',
    name: 'French Kitchen',
    category: 'intimate',
    tagline: 'Parisian domesticity',
    description:
      'A charming French countryside kitchen — open shelving, copper pots, handmade tiles and the warm light of a Parisian apartment afternoon.',
    atmosphere: 'Charming, domestic and warmly lit.',
    features: ['Open kitchen shelving', 'Handmade tiles', 'Copper cookware props', 'Warm ambient light'],
    bestFor: ['commercial', 'fashion', 'editorial', 'music-video'],
    images: [],
    coverImage: { src: '/images/spaces/french-kitchen/cover.jpg', alt: 'French Kitchen at The Picture Villa', width: 1200, height: 800 },
    order: 17,
  },
  {
    id: 'the-glass-house',
    slug: 'the-glass-house',
    name: 'The Glass House',
    category: 'intimate',
    tagline: 'Light as architecture',
    description:
      'A greenhouse-style glass structure flooded with natural light — plants, glass panels and the botanical elegance of an indoor garden.',
    atmosphere: 'Bright, airy and organically luxurious.',
    features: ['Glass panels', 'Abundant natural light', 'Indoor botanical elements', 'Clean geometric lines'],
    bestFor: ['fashion', 'editorial', 'commercial', 'pre-wedding'],
    images: [],
    coverImage: { src: '/images/spaces/the-glass-house/cover.jpg', alt: 'The Glass House at The Picture Villa', width: 1200, height: 800 },
    order: 18,
  },
];

export function getSpaceBySlug(slug: string): Space | undefined {
  return SPACES.find((s) => s.slug === slug);
}

export function getSpacesByCategory(category: Space['category']): Space[] {
  return SPACES.filter((s) => s.category === category).sort((a, b) => a.order - b.order);
}

export function getSpacesByUseCase(useCase: Space['bestFor'][number]): Space[] {
  return SPACES.filter((s) => s.bestFor.includes(useCase)).sort((a, b) => a.order - b.order);
}

export const SPACE_SLUGS = SPACES.map((s) => s.slug);
