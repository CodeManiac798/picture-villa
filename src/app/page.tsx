import type { Metadata } from 'next';
import { SITE } from '@/lib/constants/site';
import { Arrival } from '@/components/sections/Arrival';
import { TheWorlds } from '@/components/sections/TheWorlds';
import { TwentyMinutes } from '@/components/sections/TwentyMinutes';
import { TheProof } from '@/components/sections/TheProof';
import { CinematicInterlude } from '@/components/sections/CinematicInterlude';
import { ConciergeCTA } from '@/components/sections/ConciergeCTA';

export const metadata: Metadata = {
  title: `${SITE.name} — Luxury Photoshoot Venue in Delhi NCR`,
  alternates: { canonical: '/' },
};

/*
 * Homepage V4 — "the visit." Six movements, one day at the estate.
 *
 *   I.   ARRIVAL        — one photograph, one line.        (golden)
 *   II.  THE WORLDS     — the atlas; the light turns.      (day → dusk)
 *   III. TWENTY MINUTES — the estate reveal, one breath.   (golden)
 *   IV.  THE PROOF      — authority, then real moments.    (night → day)
 *   V.   NIGHT          — Raj Mahal. The peak.             (night)
 *   VI.  THE INVITATION — the gates open.                  (golden)
 *
 * Full-bleed is the default; the card is the exception. Every photograph
 * is identified by its slate. The scroll is a steadicam.
 */
export default function HomePage() {
  return (
    <>
      <Arrival />
      <TheWorlds />
      <TwentyMinutes />
      <TheProof />
      <CinematicInterlude />
      <ConciergeCTA />
    </>
  );
}
