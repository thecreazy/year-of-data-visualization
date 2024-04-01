/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  experimental: {
    webpackBuildWorker: true,
  },
};

module.exports = nextConfig;
