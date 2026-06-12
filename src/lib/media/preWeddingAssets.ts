import type { ImageAsset } from './types';

/*
 * Pre-wedding shoot media collection.
 *
 * These feed the pre-wedding section (when built) and can be drawn from
 * for any section that showcases couple photography.
 *
 * File structure:
 *   /public/images/prewedding/
 *     pw-01.jpg  pw-02.jpg  ... pw-24.jpg
 *     /mobile/   ← portrait-cropped mobile variants
 *
 * TO ADD MEDIA:
 *   1. Place assets in /public/images/prewedding/
 *   2. Fill src, add an emotionally specific alt description.
 *   3. Add blurDataURL (base64 tiny placeholder) for smooth loading.
 *   4. Mark the hero/feature image as priority: true.
 */

export interface PreWeddingShot extends ImageAsset {
  /** Short romantic descriptor — used in captions, not UI labels. */
  moment?: string;
  space?: string;
}

export const PRE_WEDDING_ASSETS: PreWeddingShot[] = [
  {
    src: '/images/prewedding/pw-01.jpg',
    alt: 'Couple in embrace during golden hour at The Picture Villa',
    priority: true,
    moment: 'First light',
    space: 'Raj Mahal Courtyard',
  },
  {
    src: '/images/prewedding/pw-02.jpg',
    alt: 'Bride and groom walking through flower tunnel at The Picture Villa',
    moment: 'The walk',
    space: 'Flower Tunnel',
  },
  {
    src: '/images/prewedding/pw-03.jpg',
    alt: 'Intimate moment on the colonial verandah',
    moment: 'Quiet together',
    space: 'Colonial Verandah',
  },
  {
    src: '/images/prewedding/pw-04.jpg',
    alt: 'Couple silhouetted against the Moroccan arch at dusk',
    moment: 'Golden silhouette',
    space: 'Moroccan Arch',
  },
  {
    src: '/images/prewedding/pw-05.jpg',
    alt: 'Aerial view of couple in the garden grounds',
    moment: 'From above',
    space: 'Estate Grounds',
  },
  {
    src: '/images/prewedding/pw-06.jpg',
    alt: 'Close portrait of the couple in soft morning light',
    moment: 'Morning glow',
    space: 'Rose Garden',
  },
];
