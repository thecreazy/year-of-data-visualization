const { defineConfig } = require('cypress');

const viewport =
  process.env.VIDEO_TYPE === 'youtube'
    ? {
        viewportWidth: 1080,
        viewportHeight: 2006,
      }
    : {
        viewportWidth: 1366,
        viewportHeight: 800,
      };

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
  video: true,
  videosFolder: './public/videos',
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push(
            `--window-size=${viewport.viewportWidth},${viewport.viewportHeight}`
          );
          return launchOptions;
        }
      });
    },
  },
  ...viewport,
});
