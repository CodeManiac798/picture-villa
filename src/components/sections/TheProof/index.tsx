import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';
import { SITE } from '@/lib/constants/site';
import { GRAIN } from '@/lib/constants/textures';

/*
 * MOVEMENT IV — THE PROOF. One movement, two registers.
 *
 * Authority (dark): "you've already seen this place" + the brands.
 * Intimacy (light): a tight strip of real moments, captioned with slates
 * BELOW the photographs — art-book style, perfectly readable, no overlay.
 *
 * Replaces EditorialStory + StoriesFromVilla + GalleryMoments. Proof is a
 * scene, not an archive: six images maximum, every one earning its place.
 */

const CLIENTS = ['Nykaa', 'Spotify India', 'Paytm', "Pond's", 'Nestlé'] as const;

const MOMENTS = [
  {
    src: '/images/prewedding/pre wedding 4.jpg',
    alt: 'A couple framed in the glass-house doorway at The Picture Villa',
    slate: 'The Glass House — First light',
  },
  {
    src: '/images/prewedding/pre wed 5.jpg',
    alt: 'A couple laughing together on whitewashed steps at The Picture Villa',
    slate: 'Santorini Steps — Golden hour',
  },
  {
    src: '/images/prewedding/pre wedding 3.jpg',
    alt: 'An intimate couple in warm golden light at The Picture Villa',
    slate: 'The Gardens — Golden hour',
  },
  {
    src: '/images/hero/pre wedding 2.jpeg',
    alt: 'A couple sharing a quiet moment in the amber-lit library at The Picture Villa',
    slate: 'World 14 — The Library',
  },
  {
    src: '/images/hero/fashion 1.jpg',
    alt: 'A fashion editorial shoot at The Picture Villa',
    slate: 'Editorial — Campaign light',
  },
] as const;

export function TheProof() {
  return (
    <section aria-label="Proof — campaigns and real moments at The Picture Villa">
      {/* ── Authority — dark register ─────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-[--color-ink]">
        {/* Mobile: the photograph as its own block — text never overlaps it */}
        <div className="relative h-[42vh] overflow-hidden sm:hidden" aria-hidden="true">
          <Image
            src="/images/fashion/fashion7.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-[#171412]" />
        </div>

        {/* Desktop: full-bleed with warm graded overlay */}
        <div className="absolute inset-0 hidden overflow-hidden sm:block" aria-hidden="true">
          <Image
            src="/images/fashion/fashion7.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(100deg, rgba(18,11,7,0.94) 0%, rgba(18,11,7,0.82) 42%, rgba(24,15,9,0.55) 75%, rgba(36,22,13,0.45) 100%)',
            }}
          />
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: GRAIN }} />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-10 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <Reveal>
            <p className="slate text-[--color-gold-light]">The Proof — seen by millions</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-display-xl mt-5 max-w-[16ch] text-balance text-[--color-ivory]">
              You&apos;ve already seen this place. You just didn&apos;t know where.
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-7 max-w-[50ch] text-body-lg leading-relaxed text-[--color-ivory]/85">
              This estate is the quiet constant behind campaign films, music
              videos and editorials seen by millions — the location crews
              don&apos;t talk about, and audiences always recognise.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-12 flex flex-wrap items-baseline gap-x-10 gap-y-4 border-t border-[--color-ivory]/15 pt-8">
              <p className="slate text-[--color-sandstone]">Seen in work for</p>
              {CLIENTS.map((name) => (
                <span key={name} className="font-display text-lg text-[--color-ivory]/90 sm:text-xl">
                  {name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── Real moments — light register, slates below the photographs ───── */}
      <div className="bg-field-warm relative py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: GRAIN }} aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal>
            <p className="slate text-[--color-mist]">Real moments — from the estate</p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div
            className="mt-8 flex gap-5 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-12"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
            }}
          >
            {MOMENTS.map((moment) => (
              <figure
                key={moment.src}
                className="w-[72vw] flex-none sm:w-[340px]"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-base)] bg-[--color-beige]">
                  <Image
                    src={moment.src}
                    alt={moment.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 72vw, 340px"
                  />
                </div>
                <figcaption className="slate mt-3 text-[--color-mist]">
                  {moment.slate}
                </figcaption>
              </figure>
            ))}
            <div className="w-1 flex-none" aria-hidden="true" />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 px-5 text-center sm:px-8">
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[--color-sandstone] px-7 text-label text-[--color-charcoal] transition-colors duration-300 hover:border-[--color-charcoal]"
            >
              {SITE.social.instagramHandle} — more every week
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
