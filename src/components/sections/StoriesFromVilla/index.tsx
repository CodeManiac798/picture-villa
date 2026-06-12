import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';
import { GRAIN } from '@/lib/constants/textures';
import { STORIES_GALLERY } from '@/lib/media/galleryAssets';
import { SITE } from '@/lib/constants/site';
import type { GalleryItem } from '@/lib/media/types';

/*
 * "Stories From The Villa" — curated social proof gallery.
 *
 * Mobile composition: heading → CTA → photos (one visual stack, top to bottom).
 * Desktop composition: heading | See More → photos → CTA at bottom.
 *
 * The mobile order was intentionally inverted from desktop: showing the CTA
 * before the grid pulls it into the heading's immediate context, making
 * heading + CTA feel like one unit rather than a disconnected footer.
 */

const CATEGORY_GRADES: Record<GalleryItem['category'], string> = {
  prewedding: 'linear-gradient(165deg, #F5DBCF 0%, #E4AA90 42%, #B06A52 78%, #6E3A2A 100%)',
  fashion:    'linear-gradient(165deg, #EDE5D6 0%, #C5AF88 45%, #7D5F3E 80%, #3E2E1C 100%)',
  cinematic:  'linear-gradient(165deg, #E5D0BC 0%, #B07850 48%, #5C3626 80%, #2A1810 100%)',
  bts:        'linear-gradient(165deg, #F2E8D6 0%, #D6BC8A 48%, #A88245 80%, #5C4420 100%)',
  space:      'linear-gradient(165deg, #F0E5D5 0%, #D8C2A0 45%, #A08264 78%, #5A4030 100%)',
};

const SPAN_CLASSES: Record<GalleryItem['span'], string> = {
  tall:   'row-span-2',
  wide:   'col-span-2',
  square: '',
};

function GalleryCell({ item, index }: { item: GalleryItem; index: number }) {
  const aspectClass = item.span === 'tall' ? 'aspect-[3/4]' : item.span === 'wide' ? 'aspect-[16/9]' : 'aspect-square';

  return (
    <Reveal delay={index * 0.05} y={14}>
      <div className={`group relative overflow-hidden rounded-[var(--radius-card)] ${SPAN_CLASSES[item.span]}`}>
        <div className={`relative w-full overflow-hidden ${aspectClass}`}>
          <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]">
            {item.image?.src ? (
              <Image
                src={item.image.src}
                alt={item.image.alt ?? ''}
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0" style={{ background: CATEGORY_GRADES[item.category] }} aria-hidden="true" />
            )}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: GRAIN }} aria-hidden="true" />
          </div>

          <div className="absolute inset-0 bg-[--color-ink]/0 transition-colors duration-500 group-hover:bg-[--color-ink]/25" aria-hidden="true" />

          {item.caption && (
            <div className="absolute inset-x-0 bottom-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
              <div className="bg-gradient-to-t from-black/65 via-black/15 to-transparent p-4">
                <p className="text-label text-white/90">{item.caption}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export function StoriesFromVilla() {
  return (
    <section className="relative bg-[--color-ivory] py-14 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Header — heading + desktop "See More" link */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between sm:gap-5">
          <div>
            <Reveal>
              <p className="text-eyebrow text-[--color-gold]">Stories From The Villa</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-heading text-balance mt-4 max-w-[18ch] text-[--color-ink]">
                Real moments,{' '}
                <span className="accent-serif text-[--color-mist]">real people.</span>
              </h2>
            </Reveal>
          </div>

          {/* Desktop only — on mobile the CTA moves below the heading */}
          <Reveal delay={0.12}>
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden sm:inline-flex items-center gap-2.5 pb-1 text-label uppercase tracking-[0.18em] text-[--color-mist] transition-colors duration-300 hover:text-[--color-ink]"
            >
              See More
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </Reveal>
        </div>

        {/* Mobile CTA — sits immediately after the heading, before the photos */}
        <div className="mt-5 sm:hidden">
          <p className="text-body text-[--color-mist]">More stories every week on Instagram.</p>
          <a
            href={SITE.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-lift mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[--color-sandstone] px-7 text-label uppercase tracking-[0.18em] text-[--color-charcoal] transition-colors duration-300 hover:border-[--color-charcoal]"
          >
            {SITE.social.instagramHandle}
          </a>
        </div>

        {/* Photo grid */}
        <div className="mt-6 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {STORIES_GALLERY.map((item, i) => (
            <GalleryCell key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Desktop CTA — hidden on mobile (handled above) */}
        <div className="hidden sm:block">
          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-row items-center justify-center gap-6">
              <p className="text-body text-[--color-mist]">
                More stories every week on Instagram.
              </p>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[--color-sandstone] px-7 text-label uppercase tracking-[0.18em] text-[--color-charcoal] transition-colors duration-300 hover:border-[--color-charcoal]"
              >
                {SITE.social.instagramHandle}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
