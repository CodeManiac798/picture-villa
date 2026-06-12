'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { GRAIN } from '@/lib/constants/textures';
import { Reveal } from '@/components/ui/Reveal';

/*
 * MOVEMENT II — THE WORLDS. The signature of the site.
 *
 * The atlas: each world is entered full-bleed, identified by its slate
 * ("WORLD 14 — THE LIBRARY · LATE AFTERNOON") and given one line of voice.
 * Plates run seamlessly, and the light turns as you walk — afternoon,
 * golden hour, dusk — so the page itself moves through the day.
 *
 * Closes on the dusk register with the atlas line: the numbering has
 * already told the visitor there are more worlds than they've seen.
 */

interface World {
  number: string;
  name: string;
  slug: string;
  time: string;
  voice: string;
  src: string;
  alt: string;
  /** deepening warm tint — the day turning */
  tint: string;
}

const WORLDS: World[] = [
  {
    number: '14',
    name: 'The Library',
    slug: 'the-library',
    time: 'Late afternoon',
    voice: 'Quiet moments, turned cinematic.',
    src: '/images/spaces/the library.jpg',
    alt: 'The Library — leather reading chair and full-height bookshelves at The Picture Villa',
    tint: 'transparent',
  },
  {
    number: '12',
    name: 'Old English Sit Out',
    slug: 'old-english-sit-out-area',
    time: 'Golden hour',
    voice: 'The two of you, looking like a film still.',
    src: '/images/spaces/old english.jpg',
    alt: 'Old English Sit Out — blue velvet wing chairs and warm panelling at The Picture Villa',
    tint: 'linear-gradient(180deg, transparent 40%, rgba(58,47,37,0.14) 100%)',
  },
  {
    number: '03',
    name: 'The Colonnade',
    slug: 'the-colonnade',
    time: 'Dusk',
    voice: 'And then the light turns.',
    src: '/images/spaces/The collonade.jpeg',
    alt: 'The Colonnade — Moroccan-pink facade lit at dusk at The Picture Villa',
    tint: 'linear-gradient(180deg, rgba(42,33,25,0.10) 0%, rgba(42,33,25,0.26) 100%)',
  },
];

function WorldPlate({ world }: { world: World }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  // Slow vertical crane while the plate is on screen — filmed, not placed.
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <Link ref={ref} href={`/spaces/${world.slug}`} className="group relative block h-[92svh] overflow-hidden bg-[--color-ink]">
      <motion.div className="absolute -inset-[7%]" style={reduce ? undefined : { y }}>
        <Image
          src={world.src}
          alt={world.alt}
          fill
          className="object-cover object-center transition-transform duration-[2000ms] ease-[--ease-luxury] group-hover:scale-[1.03]"
          sizes="100vw"
        />
      </motion.div>

      {/* The day turning — per-plate warm tint */}
      <div className="absolute inset-0" style={{ background: world.tint }} aria-hidden="true" />

      {/* Scrim under the slate + voice — deep enough to read on any image */}
      <div className="absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-[#140d08]/92 via-[#140d08]/45 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: GRAIN }} aria-hidden="true" />
      {/* Lens vignette — cinematic depth around the frame */}
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 170px 34px rgba(20,13,8,0.42)' }} aria-hidden="true" />

      {/* Slate + voice */}
      <div className="absolute inset-x-0 bottom-0 pb-12 sm:pb-14">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal>
            <p className="slate flex flex-wrap items-baseline gap-x-3 text-[--color-gold-light]">
              <span>World {world.number} — {world.name}</span>
              <span className="text-[--color-ivory]/70">{world.time}</span>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-display-lg mt-4 max-w-[18ch] text-[--color-ivory]">
              {world.voice}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="slate mt-6 inline-flex items-center gap-3 text-[--color-ivory]/70 transition-colors duration-300 group-hover:text-[--color-ivory]">
              Enter this world
              <span className="h-px w-8 bg-[--color-gold-light]/70 transition-all duration-500 ease-[--ease-luxury] group-hover:w-14" aria-hidden="true" />
            </p>
          </Reveal>
        </div>
      </div>
    </Link>
  );
}

export function TheWorlds() {
  return (
    <section aria-label="The worlds of The Picture Villa">
      {/* Opening breath — orientation before immersion */}
      <div className="bg-field-warm relative px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: GRAIN }} aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl">
          <Reveal>
            <p className="slate text-[--color-mist]">The Worlds — eighteen sets, one estate</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-display-xl mt-5 max-w-[16ch] text-[--color-ink]">
              A different world, every few steps.
            </h2>
          </Reveal>
        </div>
      </div>

      {/* The plates — seamless, the light turning */}
      {WORLDS.map((world) => (
        <WorldPlate key={world.slug} world={world} />
      ))}

      {/* Atlas closer — the lit dusk register */}
      <div className="bg-field-dusk relative px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: GRAIN }} aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl text-center">
          <Reveal>
            <p className="text-display-lg mx-auto max-w-[20ch] text-[--color-ivory]">
              — and fifteen more worlds beyond these.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <Link
              href="/spaces"
              className="hover-lift mt-9 inline-flex h-[52px] items-center justify-center gap-3 rounded-full bg-[--color-ivory] px-9 text-label text-[--color-ink]"
            >
              Explore all 18 spaces
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
