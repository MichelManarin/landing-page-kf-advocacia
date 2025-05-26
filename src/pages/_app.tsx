import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';

// Definições de SEO por página
const pageSEO: Record<string, { 
  title: string; 
  description: string; 
  ogImage?: string;
  canonicalUrl?: string;
}> = {
  '/': {
    title: 'Karoline Francisco | Advogada em Orleans SC | Especialista em Direito',
    description: 'Karoline Francisco, advogada especializada em Direito Previdenciário, Família e Direito Penal em Orleans. Agende uma consulta!',
    ogImage: '/images/karoline-francisco-advogada.jpg',
    canonicalUrl: 'https://karolinefrancisco.com/'
  },
  '/advogada-orleans': {
    title: 'Advogada em Orleans - Karoline Francisco | Especialista em Direito',
    description: 'Advogada em Orleans - Karoline Francisco, especialista em Direito Previdenciário, Família e Direito Penal. Atendimento personalizado em Orleans-SC.',
    ogImage: '/images/advogada-orleans.jpg',
    canonicalUrl: 'https://karolinefrancisco.com/advogada-orleans'
  },
  '/inss': {
    title: 'Direito Previdenciário | Advogada INSS Orleans | Karoline Francisco',
    description: 'Especialista em Direito Previdenciário e benefícios do INSS em Orleans. Aposentadorias, auxílio-doença, BPC, revisões de benefícios e mais.',
    ogImage: '/images/direito-previdenciario.jpg',
    canonicalUrl: 'https://karolinefrancisco.com/inss'
  },
  '/sobre': {
    title: 'Sobre Karoline Francisco | Advogada em Orleans SC',
    description: 'Conheça a trajetória e especialidades da advogada Karoline Francisco, atuante em Orleans e região de Santa Catarina.',
    ogImage: '/images/sobre-karoline-francisco.jpg',
    canonicalUrl: 'https://karolinefrancisco.com/sobre'
  },
  '/blog': {
    title: 'Blog Jurídico | Karoline Francisco | Advogada em Orleans',
    description: 'Dicas e informações jurídicas sobre Direito Previdenciário, Direito de Família e outros temas relevantes para Orleans e região.',
    ogImage: '/images/blog-juridico.jpg',
    canonicalUrl: 'https://karolinefrancisco.com/blog'
  },
  '/contato': {
    title: 'Contato | Advogada Karoline Francisco | Orleans SC',
    description: 'Entre em contato com a advogada Karoline Francisco em Orleans. Agende uma consulta jurídica e receba orientação especializada.',
    ogImage: '/images/contato-advogada.jpg',
    canonicalUrl: 'https://karolinefrancisco.com/contato'
  }
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPath = router.pathname;
  
  // SEO metadata para a página atual
  const seo = pageSEO[currentPath] || {
    title: 'Karoline Francisco | Advogada em Orleans SC',
    description: 'Karoline Francisco, advogada especializada em Orleans. Atendimento em Direito Previdenciário, Família e outros.',
  };

  useEffect(() => {
    // Implementação do ScrollToTop para Next.js
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        {seo.ogImage && <meta property="og:image" content={seo.ogImage} />}
        {seo.canonicalUrl && <link rel="canonical" href={seo.canonicalUrl} />}
        <meta property="og:url" content={`https://karolinefrancisco.com${currentPath}`} />
      </Head>
      <Component {...pageProps} />
    </>
  );
} 