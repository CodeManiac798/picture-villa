import type { NavConfig } from '@/types/navigation';

/*
 * Services-led IA — clients buy by shoot type, not by room.
 * The 18 spaces live one level down, inside "Spaces".
 */
export const NAV_CONFIG: NavConfig = {
  primary: [
    { label: 'Spaces', href: '/spaces' },
    { label: 'Pre-Wedding', href: '/shoots/pre-wedding' },
    { label: 'Fashion', href: '/shoots/fashion-editorial' },
    { label: 'Films', href: '/shoots/films-campaigns' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About', href: '/experience' },
  ],
  cta: {
    label: 'Book a Visit',
    href: '/book',
  },
};
