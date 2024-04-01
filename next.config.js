/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  experimental: {
    webpackBuildWorker: true,
    serverSourceMaps: false,
  },
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
