/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://yodv.canellariccardo.it',
  generateRobotsTxt: true,
  transform: async (config, path) => {
    const day = path.split('/')[2];
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      images: [
        {
          loc: {
            href: day
              ? `https://yodv.canellariccardo.it/screen/${day}.png`
              : `https://yodv.canellariccardo.it/screen/home.png`,
          },
          title: `Screen of the day ${day}`,
        },
      ],
    };
  },
};
