export type SpaceCategory =
  | 'palatial'      // Raj Mahal, Royal Jaipur
  | 'international' // Moroccan, Italian, French, Roman, Colonial, Dubrovnik
  | 'natural'       // Japanese Flower Tunnel, Tree House, Sit Out
  | 'intimate'      // Library, Bedroom, Dressing Room, Glass House
  | 'social';       // Rustic Cafe, Colonnade, Old English Sit Out

export type UseCase =
  | 'pre-wedding'
  | 'wedding'
  | 'fashion'
  | 'bridal'
  | 'commercial'
  | 'music-video'
  | 'editorial';

export interface SpaceImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
}

export interface Space {
  id: string;
  slug: string;
  name: string;
  category: SpaceCategory;
  tagline: string;
  description: string;
  atmosphere: string;        // one evocative sentence for luxury feel
  features: string[];        // list of notable elements
  bestFor: UseCase[];
  images: SpaceImage[];
  coverImage: SpaceImage;
  coverReady?: boolean;      // true once a real cover photo exists (else gradient placeholder)
  accentColor?: string;      // optional per-space tint for hover states
  order: number;             // display order in spaces grid
}

export interface SpaceFilter {
  category?: SpaceCategory;
  useCase?: UseCase;
}
