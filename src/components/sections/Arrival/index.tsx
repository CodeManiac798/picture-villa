'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { GRAIN } from '@/lib/constants/textures';

/*
 * MOVEMENT I — ARRIVAL.
 *
 * One full-bleed photograph. One serif line. One action.
 * Beauty payoff inside two seconds; nothing competes with the image.
 * The slow settle on load + slight recede on scroll-away are the only
 * motion — both read as camera, not decoration.
 */
export function Arrival() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <section ref={ref} className="relative isolate h-[100svh] overflow-hidden bg-[--color-ink]">
      {/* The photograph — settles on arrival, recedes slowly on scroll */}
      <motion.div className="absolute -inset-[3%]" style={reduce ? undefined : { y }}>
        <motion.div
          className="relative h-full w-full"
          initial={reduce ? false : { scale: 1.07 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/hero/pre wedding.jpg"
            alt="A couple in an intimate embrace between warm brick columns at The Picture Villa"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </motion.div>

      {/* Warm cinematic grade — golden hour, never a flat raw photo */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(178deg, rgba(42,24,12,0.18) 0%, transparent 32%, transparent 52%, rgba(28,16,9,0.32) 100%)' }}
        aria-hidden="true"
      />
      {/* Sun bleed — warm light crawling in from the top corner */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(72% 56% at 80% 6%, rgba(255,226,182,0.34), transparent 60%)' }}
        aria-hidden="true"
      />

      {/* Scrims — top for the navbar, bottom for the line. Warm black, never grey. */}
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#140d08]/60 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#140d08]/90 via-[#140d08]/42 to-transparent" aria-hidden="true" />

      {/* Film grain — reserved for full-bleed cinema panels */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: GRAIN }} aria-hidden="true" />

      {/* Lens vignette — cinematic edge depth */}
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 200px 44px rgba(20,12,7,0.42)' }} aria-hidden="true" />

      {/* The line */}
      <div className="absolute inset-x-0 bottom-0 z-10 pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.p
            className="slate text-[--color-gold-light]"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          >
            The Picture Villa — Bijwasan, New Delhi
          </motion.p>

          <motion.h1
            className="text-display-2xl mt-5 max-w-[14ch] text-[--color-ivory]"
            initial={reduce ? false : { opacity: 0, y: 24, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
          >
            Where your story looks beautiful.
          </motion.h1>

          <motion.div
            className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 1.05 }}
          >
            <Link
              href="/spaces"
              className="hover-lift inline-flex h-[54px] items-center justify-center gap-2.5 rounded-full bg-[--color-ivory] px-9 text-label text-[--color-ink]"
            >
              Explore the Villa
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <p className="slate text-[--color-ivory]/70">
              Trusted by over 1,200 couples &amp; brands
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
