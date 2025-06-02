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
          content="Karoline Francisco - Advogada em Orleans. Especialista em Direito."
        />
        <meta name="keywords" content="Karoline Francisco, advogada Orleans, direito previdenciário, advogada SC, INSS Orleans, escritório advocacia Orleans, direito família Orleans" />
        <meta name="author" content="Karoline Francisco" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Karoline Francisco - Advogada" />
        <meta property="og:locale" content="pt_BR" />

        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "rpv41q93cw");
            `
          }}
        />

        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17088118383"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17088118383');
            `
          }}
        />

        {/* Neurolead Script
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(a,b,c,d){try{var e=b.head||b.getElementsByTagName("head")[0];var f=b.createElement("script");f.setAttribute("src",c);f.setAttribute("charset","UTF-8");f.defer=true;a.neuroleadId=d;e.appendChild(f)}catch(g){}})(window,document,"https://cdn.leadster.com.br/neurolead/neurolead.min.js","2SSMRMfri8tVCzqncNZStzSaw")
            `
          }}
        />*/}
        

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
              serviceType: ['Direito Previdenciário', 'Direito de Família', 'Direito Penal'],
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