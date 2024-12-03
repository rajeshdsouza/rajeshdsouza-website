/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  output: 'standalone',
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn-images-1.medium.com'
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com'
      }
    ]
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  swcMinify: true,
  reactStrictMode: true,
};

module.exports = withBundleAnalyzer(nextConfig);