// Configurações centralizadas de SEO
export const seoConfig = {
  defaultTitle: 'Karoline Francisco - Advogada em Orleans | Direito Previdenciário',
  titleTemplate: '%s | Karoline Francisco - Advogada',
  defaultDescription: 'Advogada especializada em Direito Previdenciário em Orleans, SC. Auxílios do INSS, aposentadorias, BPC e mais. Consulta jurídica especializada.',
  siteUrl: 'https://karolinefrancisco.com',
  defaultImage: '/images/og-image.jpg',
  twitterHandle: '@drakarolinefrancisco',
  facebookAppId: '',
};

// Meta tags específicas para páginas de auxílios
export const auxiliosMetaTags = {
  'auxilio-acidente': {
    title: 'Auxílio-Acidente INSS | Entenda seus direitos | Consulta jurídica especializada',
    description: 'Sofreu um acidente e ficou com sequelas? Entenda se você tem direito ao auxílio-acidente do INSS mesmo continuando a trabalhar. Consulta com advogado especializado.',
    keywords: 'auxílio acidente, INSS, benefício previdenciário, sequelas acidente, advogado previdenciário Orleans, direito previdenciário, auxílio acidente trabalhando, benefício INSS Orleans',
  },
  'auxilio-doenca': {
    title: 'Auxílio-Doença INSS | Entenda seus direitos | Consulta jurídica especializada',
    description: 'Está doente e não consegue trabalhar? Entenda se você tem direito ao auxílio-doença do INSS. Consulta com advogado especializado em direito previdenciário.',
    keywords: 'auxílio doença, INSS, benefício previdenciário, incapacidade temporária, advogado previdenciário Orleans, direito previdenciário, auxílio doença negado, benefício INSS Orleans',
  },
  'auxilio-maternidade': {
    title: 'Salário-Maternidade INSS | Entenda seus direitos | Consulta jurídica especializada',
    description: 'Teve um bebê ou adotou uma criança? Entenda se você tem direito ao salário-maternidade do INSS. Consulta com advogado especializado em direito previdenciário.',
    keywords: 'salário maternidade, auxílio maternidade, INSS, benefício previdenciário, maternidade, adoção, advogado previdenciário Orleans, direito previdenciário, licença maternidade',
  },
  'aposentadoria-idade': {
    title: 'Aposentadoria por Idade INSS | Entenda seus direitos | Consulta jurídica especializada',
    description: 'Atingiu a idade mínima para aposentadoria? Entenda se você tem direito à aposentadoria por idade do INSS. Consulta com advogado especializado em direito previdenciário.',
    keywords: 'aposentadoria por idade, INSS, benefício previdenciário, aposentadoria, idade mínima, advogado previdenciário Orleans, direito previdenciário, aposentadoria INSS Orleans',
  },
  'aposentadoria-invalidez': {
    title: 'Aposentadoria por Invalidez INSS | Entenda seus direitos | Consulta jurídica especializada',
    description: 'Ficou incapacitado permanentemente para o trabalho? Entenda se você tem direito à aposentadoria por invalidez do INSS. Consulta com advogado especializado.',
    keywords: 'aposentadoria por invalidez, INSS, benefício previdenciário, incapacidade permanente, advogado previdenciário Orleans, direito previdenciário, invalidez INSS Orleans',
  },
  'aposentadoria-especial': {
    title: 'Aposentadoria Especial INSS | Entenda seus direitos | Consulta jurídica especializada',
    description: 'Trabalhou em atividade insalubre ou perigosa? Entenda se você tem direito à aposentadoria especial do INSS. Consulta com advogado especializado.',
    keywords: 'aposentadoria especial, INSS, benefício previdenciário, atividade insalubre, atividade perigosa, advogado previdenciário Orleans, direito previdenciário, aposentadoria especial Orleans',
  },
  'bpc-loas': {
    title: 'BPC LOAS | Benefício Assistencial | Entenda seus direitos | Consulta jurídica especializada',
    description: 'É idoso ou pessoa com deficiência de baixa renda? Entenda se você tem direito ao BPC LOAS. Consulta com advogado especializado em direito previdenciário.',
    keywords: 'BPC, LOAS, benefício assistencial, idoso, pessoa com deficiência, baixa renda, advogado previdenciário Orleans, direito previdenciário, BPC Orleans',
  },
  'pensao-morte': {
    title: 'Pensão por Morte INSS | Entenda seus direitos | Consulta jurídica especializada',
    description: 'Perdeu um familiar segurado do INSS? Entenda se você tem direito à pensão por morte. Consulta com advogado especializado em direito previdenciário.',
    keywords: 'pensão por morte, INSS, benefício previdenciário, dependente, morte segurado, advogado previdenciário Orleans, direito previdenciário, pensão morte Orleans',
  },
  'auxilios-inss': {
    title: 'Auxílios do INSS | Conheça todos os seus direitos | Consulta jurídica especializada',
    description: 'Conheça todos os auxílios e benefícios do INSS que você pode ter direito. Auxílio-doença, auxílio-acidente, aposentadoria e muito mais. Consulta com advogado especializado.',
    keywords: 'auxílios INSS, benefícios previdenciários, auxílio doença, auxílio acidente, aposentadoria, BPC, salário maternidade, advogado previdenciário Orleans, direito previdenciário',
  },
};

// Schema.org estruturado para páginas de auxílios
export const generateArticleSchema = (page: string, url: string) => {
  const metaTags = auxiliosMetaTags[page as keyof typeof auxiliosMetaTags];
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: metaTags?.title || seoConfig.defaultTitle,
    description: metaTags?.description || seoConfig.defaultDescription,
    author: {
      '@type': 'Person',
      name: 'Karoline Francisco',
      jobTitle: 'Advogada',
      url: seoConfig.siteUrl,
      sameAs: [
        'https://www.instagram.com/dra.karolinefrancisco/',
        'https://www.facebook.com/drakarolinefrancisco/'
      ]
    },
    publisher: {
      '@type': 'Organization',
      name: 'Karoline Francisco - Advogada',
      url: seoConfig.siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${seoConfig.siteUrl}/images/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    datePublished: '2024-01-15',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: metaTags?.keywords || '',
    inLanguage: 'pt-BR',
    isAccessibleForFree: true,
    about: {
      '@type': 'Thing',
      name: 'Direito Previdenciário',
      description: 'Área do direito que trata dos benefícios da Previdência Social'
    }
  };
};

// Schema.org para serviços jurídicos
export const legalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Karoline Francisco - Advogada',
  description: 'Escritório de advocacia especializado em Direito Previdenciário e Direito de Família em Orleans, Santa Catarina.',
  url: seoConfig.siteUrl,
  telephone: '+5548991472830',
  email: 'contato@karolinefrancisco.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Orleans',
    addressRegion: 'SC',
    addressCountry: 'BR',
    postalCode: '88870-000'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -28.3594,
    longitude: -49.3914
  },
  priceRange: '$$',
  openingHours: 'Mo-Fr 08:00-18:00',
  sameAs: [
    'https://www.instagram.com/dra.karolinefrancisco/',
    'https://www.facebook.com/drakarolinefrancisco/'
  ],
  serviceType: [
    'Direito Previdenciário',
    'Auxílio-Doença',
    'Auxílio-Acidente',
    'Aposentadoria',
    'BPC LOAS',
    'Pensão por Morte',
    'Salário-Maternidade'
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Orleans',
      '@id': 'https://www.wikidata.org/wiki/Q56450694'
    },
    {
      '@type': 'State',
      name: 'Santa Catarina'
    }
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços Jurídicos',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Consultoria em Direito Previdenciário',
          description: 'Análise de direitos previdenciários e orientação jurídica especializada'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Auxílio-Doença',
          description: 'Assessoria para obtenção de auxílio-doença do INSS'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Auxílio-Acidente',
          description: 'Assessoria para obtenção de auxílio-acidente do INSS'
        }
      }
    ]
  }
};

// FAQ Schema para páginas de auxílios
export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}; 