/*
 * Shared media types for The Picture Villa asset system.
 *
 * Public folder structure (all under /public/images/):
 *   /hero/          — hero frame images + videos
 *   /prewedding/    — pre-wedding shoot gallery
 *   /fashion/       — fashion & editorial gallery
 *   /spaces/        — individual space photography  (pre-existing)
 *   /gallery/       — general gallery               (pre-existing)
 *   /social-proof/  — curated "Stories From The Villa" grid
 *   /clients/       — client logo assets             (pre-existing)
 *   /og/            — Open Graph images              (pre-existing)
 *   /bts/           — behind-the-scenes
 *   /drone/         — aerial footage + stills
 *
 * All src paths are relative to /public, e.g. '/images/hero/pre-wedding.jpg'.
 */

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  /** Load eagerly — set true for above-the-fold images only. */
  priority?: boolean;
  /** base64 blur placeholder for next/image — generate via plaiceholder or similar. */
  blurDataURL?: string;
  /** Portrait-cropped mobile variant served on screens < 768px. */
  mobileSrc?: string;
}

export interface VideoAsset {
  src: string;
  /** Poster frame — shown before video loads + fallback if autoplay blocked. */
  poster: string;
  /** Mobile-optimised video (lower resolution / portrait crop) for < 768px. */
  mobileSrc?: string;
}

export interface MediaSlot {
  /** Provide image, video, or both. Video takes precedence if both present. */
  image?: ImageAsset;
  video?: VideoAsset;
  caption?: string;
}

export interface GalleryItem extends MediaSlot {
  id: string;
  category: 'prewedding' | 'fashion' | 'cinematic' | 'bts' | 'space';
  /** Visual weight in the masonry grid — affects which row-span variant is applied. */
  span: 'tall' | 'wide' | 'square';
}

export interface StoryArchetype {
  id: string;
  number: string;
  name: string;
  /** One word — shown as eyebrow on the card at all times. */
  descriptor: string;
  /** One line — revealed on hover (desktop) or always (mobile). */
  emotionalCopy: string;
  /** CSS gradient used as placeholder until real media arrives. */
  grade: string;
  media: MediaSlot;
}

export interface SpaceAsset {
  slug: string;
  name: string;
  cover: ImageAsset;
  gallery: ImageAsset[];
}
