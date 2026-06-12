import type { Metadata } from 'next';
import { SITE } from '@/lib/constants/site';
import { HeroSection } from '@/components/sections/HeroSection';
import { IntroStatement } from '@/components/sections/IntroStatement';
import { ChooseYourStory } from '@/components/sections/ChooseYourStory';
import { ShootCategories } from '@/components/sections/ShootCategories';
import { SpacesPreview } from '@/components/sections/SpacesPreview';
import { CinematicInterlude } from '@/components/sections/CinematicInterlude';
import { EditorialStory } from '@/components/sections/EditorialStory';
import { StoriesFromVilla } from '@/components/sections/StoriesFromVilla';
import { GalleryMoments } from '@/components/sections/GalleryMoments';
import { ConciergeCTA } from '@/components/sections/ConciergeCTA';

export const metadata: Metadata = {
  title: `${SITE.name} — Luxury Photoshoot Venue in Delhi NCR`,
  alternates: { canonical: '/' },
};

/*
 * Homepage arc (V3 — narrative flow):
 *
 *   hero          → "This looks beautiful."
 *   spaces        → "This place feels unreal."        (the product leads)
 *   intro         → "And it's 20 minutes from Delhi." (context after the reveal)
 *   choose-story  → "We could look like this."        (self-insertion once desire exists)
 *   interlude     → "Holy sh*t."                      (the peak, now earned)
 *   editorial     → authority — brands shoot here
 *   stories       → human proof — people shoot here
 *   categories    → "What exactly could we create?"   (rational support, late)
 *   gallery       → final visual payoff
 *   cta           → "We should visit."
 *
 * Sequence is intentional: emotion before information, proof before decision.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SpacesPreview />
      <IntroStatement />
      <ChooseYourStory />
      <CinematicInterlude />
      <EditorialStory />
      <StoriesFromVilla />
      <ShootCategories />
      <GalleryMoments />
      <ConciergeCTA />
    </>
  );
}
