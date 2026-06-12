export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;         // lucide-react icon name
  useCases: string[];
  ctaLabel: string;
}

export const SERVICES: Service[] = [
  {
    id: 'pre-wedding',
    name: 'Pre-Wedding',
    tagline: 'Love, before the vows',
    description:
      'Cinematic pre-wedding shoots across 18 distinct spaces — from palatial Indian backdrops to romantic European settings.',
    icon: 'Heart',
    useCases: ['Couples', 'Courtship', 'Candid', 'Styled shoots'],
    ctaLabel: 'Plan your shoot',
  },
  {
    id: 'fashion',
    name: 'Fashion & Editorial',
    tagline: 'Where style meets setting',
    description:
      'A venue that speaks the language of high fashion. Diverse, atmospheric spaces that make every frame an editorial statement.',
    icon: 'Aperture',
    useCases: ['Lookbooks', 'Editorial', 'Campaign shoots', 'E-commerce'],
    ctaLabel: 'Book the space',
  },
  {
    id: 'bridal',
    name: 'Bridal',
    tagline: 'Your finest portrait',
    description:
      'Intimate, beautifully lit spaces designed to make the bride the centre of every frame — with elegance that matches the occasion.',
    icon: 'Sparkles',
    useCases: ['Bridal portraits', 'Jewellery shoots', 'Trousseau', 'Mehendi'],
    ctaLabel: 'Book a bridal session',
  },
  {
    id: 'commercial',
    name: 'Commercial & Brand',
    tagline: 'Trusted by the best brands',
    description:
      'A professional location trusted by Nykaa Fashions, Paytm, Spotify India, Ponds and Nestle for brand campaigns and product shoots.',
    icon: 'Building2',
    useCases: ['Brand campaigns', 'Product shoots', 'Advertising', 'Catalogue'],
    ctaLabel: 'Request a quote',
  },
  {
    id: 'music-video',
    name: 'Music Video',
    tagline: 'Scenes that amplify sound',
    description:
      'Cinematic, versatile spaces with production depth — ideal for Bollywood, Punjabi and independent music video productions.',
    icon: 'Music',
    useCases: ['Bollywood', 'Punjabi songs', 'Independent artists', 'Music productions'],
    ctaLabel: 'Discuss your project',
  },
];

export const NOTABLE_CLIENTS = [
  'Nykaa Fashions',
  'Paytm',
  'Spotify India',
  'Ponds',
  'Nestle India',
];
