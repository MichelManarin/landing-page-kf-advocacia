import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Karoline Francisco - Advogada em Orleans SC. Especialista em Direito Previdenciário e Direito de Família."
        />
        <meta name="keywords" content="Karoline Francisco, advogada Orleans, direito previdenciário, advogada SC, INSS Orleans, escritório advocacia Orleans, direito família Orleans" />
        <meta name="author" content="Karoline Francisco" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Karoline Francisco - Advogada" />
        <meta property="og:locale" content="pt_BR" />

        {/* Schema.org markup para Advogado */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LegalService',
              name: 'Karoline Francisco - Advogada',
              description: 'Escritório de advocacia especializado em Direito Previdenciário e Direito de Família em Orleans, Santa Catarina.',
              url: 'https://karolinefrancisco.com',
              telephone: '+5548991472830',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Orleans',
                addressRegion: 'SC',
                addressCountry: 'BR'
              },
              priceRange: '$$',
              openingHours: 'Mo-Fr 08:00-18:00',
              sameAs: [
                'https://www.instagram.com/dra.karolinefrancisco/',
                'https://www.facebook.com/drakarolinefrancisco/'
              ],
              serviceType: ['Direito Previdenciário', 'Direito de Família', 'Ações de Cobrança'],
              areaServed: {
                '@type': 'City',
                name: 'Orleans',
                '@id': 'https://www.wikidata.org/wiki/Q56450694'
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 