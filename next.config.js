/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  experimental: {
    webpackBuildWorker: true,
    serverSourceMaps: false,
  },
  productionBrowserSourceMaps: false,
  webpack: (config, { dev }) => {
    if (config.cache && !dev) {
      config.cache = Object.freeze({
        type: 'memory',
      });
      config.cache.maxMemoryGenerations = 0;
    }
    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
