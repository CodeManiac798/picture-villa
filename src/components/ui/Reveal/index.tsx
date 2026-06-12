'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { EASE_LUXURY } from '@/lib/animations/variants';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Vertical travel distance in px */
  y?: number;
}

/* Scroll-triggered reveal — the single motion primitive for section content. */
export function Reveal({ children, className, delay = 0, y = 28 }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: EASE_LUXURY, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
