/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  webpack(config) {
    return config;
  },
  // Configuração do diretório de origem
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Redireciona URLs com caixa alta para minúsculas para evitar conteúdo duplicado
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.karolinefrancisco.com',
          },
        ],
        destination: 'https://karolinefrancisco.com/:path*',
        permanent: true,
        basePath: false,
      },
      // Redireciona URLs de formato antigo para o novo (exemplo)
      {
        source: '/advogado-orleans',
        destination: '/advogada-orleans',
        permanent: true,
      },
      {
        source: '/advogada-orleans-sc',
        destination: '/advogada-orleans',
        permanent: true,
      },
    ];
  },
  // Adiciona headers para melhorar segurança e desempenho
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig; 