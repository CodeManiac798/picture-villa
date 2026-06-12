'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLockBodyScroll } from '@/lib/hooks/useLockBodyScroll';
import { NAV_CONFIG } from '@/lib/constants/navigation';
import { SITE } from '@/lib/constants/site';
import { buildBookingWhatsAppUrl } from '@/lib/utils/whatsapp';

const NAV_CONTAINER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.12 } },
};

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const NAV_ITEM = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  useLockBodyScroll(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className="fixed inset-0 z-[60] flex flex-col bg-[--color-ivory]"
      role="dialog"
      aria-label="Navigation menu"
      aria-modal="true"
    >
      {/* Atmospheric warm glow — barely perceptible */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72"
        style={{ background: 'radial-gradient(ellipse at 100% 100%, rgba(176,138,87,0.09), transparent 65%)' }}
        aria-hidden="true"
      />

      {/* Header — estate name as home link, close on right */}
      <div className="relative z-10 flex items-center justify-between px-6 pt-8 pb-6">
        <Link
          href="/"
          onClick={onClose}
          className="text-eyebrow text-[--color-mist] transition-colors duration-200 hover:text-[--color-charcoal]"
          aria-label="The Picture Villa — Home"
        >
          The Picture Villa
        </Link>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="-mr-2 p-2 text-[--color-charcoal] transition-colors duration-200 hover:text-[--color-gold]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Nav links — vertically centred in the remaining space */}
      <motion.nav
        variants={NAV_CONTAINER}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-1 flex-col justify-center border-t border-[--color-beige]/50 px-6"
        aria-label="Mobile primary navigation"
      >
        {NAV_CONFIG.primary.map((item) => (
          <motion.div key={item.href} variants={NAV_ITEM}>
            <Link
              href={item.href}
              onClick={onClose}
              className="block border-b border-[--color-beige]/50 py-5 font-display text-[1.75rem] font-light text-[--color-ink] transition-colors duration-300 hover:text-[--color-gold]"
            >
              {item.label}
            </Link>
          </motion.div>
        ))}

        {/* Instagram — secondary, recessed, a quiet exit below the nav */}
        <motion.div variants={NAV_ITEM} className="mt-6">
          <a
            href={SITE.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center gap-2 text-eyebrow text-[--color-mist] transition-colors duration-200 hover:text-[--color-gold]"
          >
            Instagram
            <svg viewBox="0 0 8 8" className="h-2 w-2" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M1 7L7 1M7 1H3M7 1V5" />
            </svg>
          </a>
        </motion.div>
      </motion.nav>

      {/* CTAs */}
      <div className="relative z-10 flex flex-col gap-3 border-t border-[--color-beige]/50 px-6 pb-10 pt-6">
        <Link
          href={NAV_CONFIG.cta.href}
          onClick={onClose}
          className="flex h-12 items-center justify-center rounded-full bg-[--color-ink] text-label uppercase tracking-[0.18em] text-[--color-ivory] transition-colors duration-200 hover:bg-[--color-charcoal]"
        >
          Book a Visit
        </Link>
        <a
          href={buildBookingWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="flex h-12 items-center justify-center gap-2 rounded-full border border-[--color-sandstone] text-label uppercase tracking-[0.18em] text-[--color-charcoal] transition-colors duration-200 hover:border-[--color-charcoal]"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-[#25D366]" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
