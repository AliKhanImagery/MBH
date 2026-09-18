import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/industrial-automation-pg',
        destination: '/solutions',
        permanent: true,
      },
      {
        source: '/instrumentation-pg',
        destination: '/solutions',
        permanent: true,
      },
      {
        source: '/gas-sense-and-alarm-system-pg',
        destination: '/solutions',
        permanent: true,
      },
      {
        source: '/energy-audits',
        destination: '/solutions',
        permanent: true,
      },
      {
        source: '/switch-gears',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/food-beverages',
        destination: '/industries',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/career',
        destination: '/about',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
