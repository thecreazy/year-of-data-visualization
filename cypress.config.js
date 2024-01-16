const { defineConfig } = require('cypress');

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
  viewportWidth: 1366,
  viewportHeight: 800,
  video: true,
  videoCompression: true,
  videosFolder: './public/videos',
  e2e: {
    setupNodeEvents(on, config) {},
  },
});
