import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { SITE, OG_IMAGE } from '@/lib/constants/site';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { WhatsAppCTA } from '@/components/conversion/WhatsAppCTA';
import { StickyContact } from '@/components/conversion/StickyContact';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Luxury Photoshoot Venue in Delhi NCR`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'photoshoot venue Delhi',
    'luxury shoot location Delhi NCR',
    'pre-wedding shoot Delhi',
    'fashion shoot location Gurgaon',
    'photoshoot studio Bijwasan',
    'wedding photography location Delhi',
    'editorial shoot venue India',
    'The Picture Villa',
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Luxury Photoshoot Venue in Delhi NCR`,
    description: SITE.description,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE.name} — 18 luxury shoot spaces` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — Luxury Photoshoot Venue in Delhi NCR`,
    description: SITE.description,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F8F5F0',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-body bg-page antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Desktop floating WhatsApp */}
        <div className="hidden lg:block">
          <WhatsAppCTA variant="floating" />
        </div>

        {/* Mobile sticky bottom bar — appears after scroll */}
        <StickyContact />
      </body>
    </html>
  );
}
