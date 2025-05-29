/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://karolinefrancisco.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://karolinefrancisco.com/sitemap.xml',
    ],
  },
  exclude: ['/404', '/500'],
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  transform: async (config, path) => {
    // Configurações específicas para diferentes tipos de páginas
    const customPriorities = {
      '/': 1.0,
      '/advogada-orleans': 0.9,
      '/auxilios-inss': 0.9,
      '/auxilio-acidente': 0.8,
      '/auxilio-doenca': 0.8,
      '/auxilio-maternidade': 0.8,
      '/aposentadoria-idade': 0.8,
      '/aposentadoria-invalidez': 0.8,
      '/aposentadoria-especial': 0.8,
      '/bpc-loas': 0.8,
      '/pensao-morte': 0.8,
      '/inss': 0.8,
      '/sobre': 0.7,
      '/blog': 0.7,
      '/contato': 0.6,
    };

    const changefreqMap = {
      '/blog': 'weekly',
      '/': 'monthly',
    };

    return {
      loc: path,
      changefreq: changefreqMap[path] || config.changefreq,
      priority: customPriorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
}; 