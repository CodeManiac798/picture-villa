import type { MediaSlot } from './types';

/*
 * Hero frame media slots — 3 floating frames, pre-wedding leads.
 *
 * TO PLUG IN REAL MEDIA:
 *   1. Place files under /public/images/hero/
 *   2. Set image.src (or video.src + video.poster) on the relevant frame.
 *   3. Set image.priority = true on the preWedding frame (it's above the fold).
 *   4. Supply a blurDataURL for instant placeholder while the image loads.
 *   5. Provide mobileSrc variants (portrait-cropped, ~640px wide) for < 768px.
 *
 * File naming convention:
 *   /public/images/hero/pre-wedding.jpg          ← primary still
 *   /public/images/hero/pre-wedding.mp4          ← optional loop video
 *   /public/images/hero/pre-wedding-poster.jpg   ← video poster frame
 *   /public/images/hero/mobile/pre-wedding.jpg   ← mobile variant
 */

export interface HeroFrameAsset extends MediaSlot {
  frameId: 'preWedding' | 'editorial' | 'cinematic';
  caption: string;
  eyebrow: string;
}

export const HERO_FRAME_ASSETS: HeroFrameAsset[] = [
  {
    frameId: 'preWedding',
    eyebrow: 'Pre-Wedding · Golden Hour',
    caption: 'Just the two of you',
    image: {
      src: '/images/hero/pre-wedding.jpg',
      alt: 'A couple at The Picture Villa during golden hour — soft warm light, architectural backdrop',
      priority: true,
      mobileSrc: '/images/hero/mobile/pre-wedding.jpg',
    },
    video: {
      src: '/images/hero/pre-wedding.mp4',
      poster: '/images/hero/pre-wedding-poster.jpg',
      mobileSrc: '/images/hero/mobile/pre-wedding.mp4',
    },
  },
  {
    frameId: 'editorial',
    eyebrow: 'Fashion',
    caption: 'Editorial light',
    image: {
      src: '/images/hero/editorial.jpg',
      alt: 'Fashion editorial shoot at The Picture Villa — dramatic architectural light',
    },
  },
  {
    frameId: 'cinematic',
    eyebrow: 'Cinematic',
    caption: 'Films at the villa',
    image: {
      src: '/images/hero/cinematic.jpg',
      alt: 'Cinematic frame from a brand film shot at The Picture Villa',
    },
  },
];
