import { Reveal } from '@/components/ui/Reveal';
import { GRAIN } from '@/lib/constants/textures';

/*
 * MOVEMENT III — TWENTY MINUTES FROM DELHI.
 *
 * The estate reveal, compressed to its one true sentence. A warm-lit dusk
 * breath between the worlds and the proof — the day has turned, the light
 * is low and golden. Stats said once, as a single slate line, never again.
 */
export function TwentyMinutes() {
  return (
    <section className="bg-field-dusk relative px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: GRAIN }} aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="text-display-xl text-balance text-[--color-ivory]">
            Step through the gate, and the world changes.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="slate mt-8 text-[--color-sandstone]">
            Eighteen worlds &middot; Three private acres &middot; Twenty minutes from the city
          </p>
        </Reveal>
      </div>
    </section>
  );
}
