import type { GalleryItem } from './types';

/*
 * "Stories From The Villa" — curated social proof gallery.
 *
 * This is NOT a raw Instagram feed. Every item is hand-selected,
 * premium-cropped, and represents the best of what gets shot here.
 *
 * File structure:
 *   /public/images/social-proof/
 *     sp-01.jpg ... sp-12.jpg
 *
 * span values control masonry visual weight:
 *   'tall'   → portrait, 2 row-spans  (use for intimate couple moments)
 *   'wide'   → landscape, spans 2 cols (use for grand estate / drone shots)
 *   'square' → 1×1                    (use for details, fashion closeups)
 *
 * Aim for a mix: ~4 tall, ~2 wide, ~3 square across 9 items.
 */

export const STORIES_GALLERY: GalleryItem[] = [
  {
    id: 'sp-01',
    category: 'prewedding',
    span: 'tall',
    image: {
      src: '/images/prewedding/pre - 11.jpg',
      alt: 'Couple beneath glowing Moroccan lanterns at night at The Picture Villa',
    },
    caption: 'Lantern Nights',
  },
  {
    id: 'sp-02',
    category: 'fashion',
    span: 'square',
    image: {
      src: '/images/fashion/fashion2.jpg',
      alt: 'Editorial group fashion shoot at The Picture Villa',
    },
    caption: 'Editorial',
  },
  {
    id: 'sp-03',
    category: 'prewedding',
    span: 'square',
    image: {
      src: '/images/prewedding/pre wedding 3.jpg',
      alt: 'Intimate couple in warm golden light at The Picture Villa',
    },
    caption: 'Golden Hour',
  },
  {
    id: 'sp-04',
    category: 'space',
    span: 'wide',
    image: {
      src: '/images/spaces/The collonade.jpeg',
      alt: 'The Moroccan colonnade of The Picture Villa illuminated at dusk',
    },
    caption: 'The Colonnade',
  },
  {
    id: 'sp-05',
    category: 'prewedding',
    span: 'tall',
    image: {
      src: '/images/hero/raj-mahal.jpg',
      alt: 'Couple before the illuminated Raj Mahal palace at The Picture Villa',
    },
    caption: 'Raj Mahal',
  },
  {
    id: 'sp-06',
    category: 'cinematic',
    span: 'square',
    image: {
      src: '/images/prewedding/pre wedding 2.jpeg',
      alt: 'Couple in a cinematic amber-lit library at The Picture Villa',
    },
    caption: 'The Library',
  },
  {
    id: 'sp-07',
    category: 'fashion',
    span: 'tall',
    image: {
      src: '/images/fashion/fashion3.jpg',
      alt: 'Blush saree editorial in the glass-house garden at The Picture Villa',
    },
    caption: 'Fashion',
  },
  {
    id: 'sp-08',
    category: 'prewedding',
    span: 'wide',
    image: {
      src: '/images/prewedding/pre wed 5.jpg',
      alt: 'A couple laughing on whitewashed steps at The Picture Villa',
    },
    caption: 'Santorini Steps',
  },
  {
    id: 'sp-09',
    category: 'space',
    span: 'square',
    image: {
      src: '/images/fashion/fashion8.jpeg',
      alt: 'Menswear editorial in navy bandhgala at The Picture Villa',
    },
    caption: 'Menswear',
  },
];
