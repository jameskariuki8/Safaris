import type { NextConfig } from "next";

const nextConfig: any = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
    turbopack: false,
  },
};

export default nextConfig;
