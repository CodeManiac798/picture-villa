import { Reveal } from '@/components/ui/Reveal';

/*
 * MOVEMENT III — TWENTY MINUTES FROM DELHI.
 *
 * The estate reveal, compressed to its one true sentence. A breath
 * between the worlds and the proof — short by design. The stats are
 * said once, as a single quiet line, and never again.
 */
export function TwentyMinutes() {
  return (
    <section
      className="relative px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
      style={{
        background:
          'radial-gradient(100% 80% at 50% 110%, rgba(216,199,174,0.55), transparent 65%), linear-gradient(180deg, #F4EADB 0%, #EDE5D8 100%)',
      }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="text-display-xl text-balance text-[--color-ink]">
            Step through the gate, and the world changes.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="slate mt-8 text-[--color-mist]">
            Eighteen worlds &middot; Three private acres &middot; Twenty minutes from the city
          </p>
        </Reveal>
      </div>
    </section>
  );
}
