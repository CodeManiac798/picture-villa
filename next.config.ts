import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /*
   * Image optimization.
   * remotePatterns: add Cloudinary / Supabase / S3 domains here when images
   * are hosted externally. For now all images are local (public/).
   */
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
  },

  /*
   * Experimental features.
   */
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
};

export default nextConfig;
