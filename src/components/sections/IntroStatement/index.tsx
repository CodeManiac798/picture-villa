import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Reveal } from '@/components/ui/Reveal';

/*
 * Estate context — lands after the spaces reveal, answering "and this is
 * 20 minutes from Delhi." Mobile reads image → headline → stats; the body
 * copy is desktop dwell-time material and hidden on phones.
 */
export function IntroStatement() {
  return (
    <section className="relative bg-[--color-cream]">
      <Container className="relative z-10 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* Statement */}
          <div className="order-2 lg:order-none lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:pr-8">
            <Reveal>
              <p className="text-eyebrow text-[--color-gold]">The Estate</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-heading text-balance mt-5 text-[--color-ink] max-w-[20ch]">
                Step through the gate, and{' '}
                <span className="accent-serif text-[--color-gold]">the world changes.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2} className="hidden sm:block">
              <p className="mt-6 max-w-[46ch] text-body-lg text-[--color-mist] leading-relaxed">
                Palace courts, flower tunnels, Mediterranean terraces — eighteen
                built worlds across three private acres, each made for one thing:
                making you look unforgettable.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-7 sm:mt-8 flex items-center gap-8">
                <div>
                  <p className="font-display text-3xl text-[--color-ink]">18</p>
                  <p className="text-label mt-1 text-[--color-mist]">Worlds</p>
                </div>
                <div className="h-10 w-px bg-[--color-sandstone]" aria-hidden="true" />
                <div>
                  <p className="font-display text-3xl text-[--color-ink]">03</p>
                  <p className="text-label mt-1 text-[--color-mist]">Private acres</p>
                </div>
                <div className="h-10 w-px bg-[--color-sandstone]" aria-hidden="true" />
                <div>
                  <p className="font-display text-3xl text-[--color-ink]">20</p>
                  <p className="text-label mt-1 text-[--color-mist]">Mins from the city</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Photograph — leads on mobile, sits beside the statement on desktop */}
          <div className="order-1 lg:order-none lg:col-span-5 lg:col-start-8 lg:row-start-1 relative">
            <Reveal y={44}>
              <figure className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-card)] bg-[--color-beige] shadow-[0_30px_70px_-28px_rgba(40,24,16,0.5)]">
                  <Image
                    src="/images/hero/pre wedding 2.jpeg"
                    alt="A couple sharing a quiet moment in the library at The Picture Villa"
                    fill
                    className="object-cover object-center transition-transform duration-[1200ms] ease-[--ease-luxury] group-hover:scale-[1.05]"
                    sizes="(max-width: 1024px) 90vw, 38vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#1a120c]/70 to-transparent" aria-hidden="true" />
                  <figcaption className="text-label absolute inset-x-0 bottom-0 flex items-baseline justify-between p-4 text-[--color-ivory]/95">
                    <span>The Library</span>
                    <span className="text-[--color-ivory]/75">14 / 18</span>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
