import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: 'www.drupal.org',
      },
      {
        protocol: 'https',
        hostname: 'bizweb.dktcdn.net',
      },
    ]
  },
};

export default nextConfig;
