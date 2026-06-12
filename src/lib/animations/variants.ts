import type { Variants, Transition } from 'framer-motion';

/* ─── EASING ─────────────────────────────────────────────────────────────── */

export const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;
export const EASE_IN_OUT = [0.4, 0, 0.2, 1] as const;

/* ─── TRANSITIONS ────────────────────────────────────────────────────────── */

export const transitionBase: Transition = {
  duration: 0.6,
  ease: EASE_LUXURY,
};

export const transitionSlow: Transition = {
  duration: 0.9,
  ease: EASE_LUXURY,
};

export const transitionFast: Transition = {
  duration: 0.3,
  ease: EASE_IN_OUT,
};

/* ─── VARIANTS ───────────────────────────────────────────────────────────── */

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitionBase },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: transitionBase },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: transitionBase },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: transitionBase },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: transitionSlow },
};

/* Image reveal — clip-path wipe from bottom */
export const imageReveal: Variants = {
  hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 1.0, ease: EASE_LUXURY },
  },
};

/* Stagger container */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

/* Line draw — for decorative horizontal rules */
export const lineDraw: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: EASE_LUXURY, delay: 0.2 },
  },
};

/* Mobile menu slide */
export const menuSlide: Variants = {
  hidden: { x: '100%' },
  visible: {
    x: '0%',
    transition: { duration: 0.45, ease: EASE_LUXURY },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.35, ease: EASE_IN_OUT },
  },
};

/* Overlay backdrop */
export const backdropFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

/* Cinematic rise + blur — the hero's primary entrance feel. Copy doesn't just
   fade, it settles into focus. */
export const blurRise: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.1, ease: EASE_LUXURY },
  },
};

/* Slower stagger for hero copy — lets each line land with weight. */
export const heroStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

/* Parallax — applied via useScroll / useTransform in components */
export const PARALLAX_FACTOR = 0.25;
