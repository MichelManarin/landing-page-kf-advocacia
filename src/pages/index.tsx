import Head from 'next/head';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Karoline Francisco - Advogada em Orleans SC</title>
        <meta
          name="description"
          content="Karoline Francisco - Advogada em Orleans SC. Especialista em Direito Previdenciário e Direito de Família."
        />
      </Head>
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
    </Layout>
  );
} 