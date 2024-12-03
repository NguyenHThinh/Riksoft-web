/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_PUBLIC_URL || 'https://riksoft.vn', // endpoint web
  generateRobotsTxt: true,       // generate file robots.txt
  sitemapSize: 7000,             // maximum URL in each file sitemap
  changefreq: 'daily',
  priority: 0.7,
  // exclude: ['/secret-page', '/admin/*'], // hidden URL
  // additionalPaths: async (config) => [
  //   await config.transform(config, '/additional-page'),
  // ],
  robotsTxtOptions: {  //config seach bot
    policies: [
      { userAgent: '*', allow: '/' }, //config all search bot accept all page with root /
      // { userAgent: 'Googlebot', disallow: '/secret-page' }, // config for ggbot block access to /secret-page
    ],
    // additionalSitemaps: [ //add sitemap URL
    //   'https://riksoft.com/riksoft-sitemap-1.xml',
    //   'https://riksoft.com/riksoft-sitemap-2.xml',
    // ],
  },
}
