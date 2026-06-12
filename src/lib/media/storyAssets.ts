import type { StoryArchetype } from './types';

/*
 * "Choose Your Story" — six shoot archetypes.
 *
 * These are psychological self-insertion prompts, not service categories.
 * The question the visitor answers: "Which version of our story are we?"
 *
 * File structure:
 *   /public/images/prewedding/story-romantic.jpg
 *   /public/images/prewedding/story-royal.jpg
 *   ... etc.
 *
 * grade: CSS gradient placeholder — warm, distinct per archetype.
 * Keep the same tonal warmth as the hero frames; avoid anything cold.
 */

export const STORY_ARCHETYPES: StoryArchetype[] = [
  {
    id: 'romantic',
    number: '01',
    name: 'Romantic',
    descriptor: 'Intimate',
    emotionalCopy: 'Soft light, quiet moments, just the two of you.',
    grade: 'linear-gradient(168deg, #F9E5DE 0%, #E8A99A 42%, #C26B5D 78%, #7E3428 100%)',
    media: {
      image: {
        src: '/images/hero/pre wedding 3.jpg',
        alt: 'Intimate couple in warm golden light at The Picture Villa',
      },
    },
  },
  {
    id: 'royal',
    number: '02',
    name: 'Royal',
    descriptor: 'Grand',
    emotionalCopy: 'Palace light. The two of you looking like royalty.',
    grade: 'linear-gradient(168deg, #F2E1C3 0%, #D4A54A 45%, #8B6027 78%, #4A3318 100%)',
    media: {
      image: {
        src: '/images/hero/raj-mahal.jpg',
        alt: 'Couple in front of the illuminated Raj Mahal palace at The Picture Villa',
      },
    },
  },
  {
    id: 'editorial',
    number: '03',
    name: 'Editorial',
    descriptor: 'Artistic',
    emotionalCopy: 'Magazine light. Every frame worthy of a cover.',
    grade: 'linear-gradient(168deg, #EDE5D6 0%, #C5AF88 48%, #7D6140 80%, #3E3022 100%)',
    media: {
      image: {
        src: '/images/fashion/fashion2.jpg',
        alt: 'Editorial group fashion shoot in flowing black ensembles at The Picture Villa',
      },
    },
  },
  {
    id: 'cinematic',
    number: '04',
    name: 'Cinematic',
    descriptor: 'Filmic',
    emotionalCopy: 'Your story, told like the opening of a film.',
    grade: 'linear-gradient(168deg, #E8D4BE 0%, #B07B52 48%, #5C3828 80%, #2C1A10 100%)',
    media: {
      image: {
        src: '/images/hero/pre wedding 2.jpeg',
        alt: 'Couple in a cinematic amber-lit library at The Picture Villa',
      },
      video: {
        src: '/images/prewedding/story-cinematic.mp4',
        poster: '/images/prewedding/story-cinematic-poster.jpg',
      },
    },
  },
  {
    id: 'garden-luxury',
    number: '05',
    name: 'Garden Luxury',
    descriptor: 'Lush',
    emotionalCopy: 'Wild blooms, dappled shade, golden afternoon.',
    grade: 'linear-gradient(168deg, #EDECD8 0%, #C5C087 48%, #7A7838 80%, #3C3A1C 100%)',
    media: {
      image: {
        src: '/images/fashion/fashion3.jpg',
        alt: 'A model in a blush saree amid the lush glass-house garden at The Picture Villa',
      },
    },
  },
  {
    id: 'fashion',
    number: '06',
    name: 'Fashion',
    descriptor: 'Striking',
    emotionalCopy: 'High fashion. Your looks deserve a stage this beautiful.',
    grade: 'linear-gradient(168deg, #F5EDE3 0%, #D4BFA0 48%, #9A7554 80%, #4C3828 100%)',
    media: {
      image: {
        src: '/images/hero/fashion 1.jpg',
        alt: 'Two women in vibrant Indian editorial fashion at The Picture Villa',
      },
    },
  },
];
