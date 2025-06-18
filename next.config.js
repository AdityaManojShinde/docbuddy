/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  swcMinify: true,
  output: 'standalone',
  experimental: {
    // This will allow Next.js to attempt to use the wasm version of SWC
    // if the native version fails to load
    fallbackNodePolyfills: false
  }
};

module.exports = nextConfig;