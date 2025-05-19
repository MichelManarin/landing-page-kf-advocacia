import Head from 'next/head';
import Layout from '@/components/Layout';

const AdvogadaOrleans = () => {
  return (
    <Layout>
      <Head>
        <title>Advogada em Orleans SC - Karoline Francisco</title>
        <meta
          name="description"
          content="Advogada em Orleans especializada em Direito Previdenciário, Direito de Família e Ações de Cobrança. Atendimento personalizado na região."
        />
      </Head>
      <main className="advogada-orleans-page">
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>Advogada em Orleans SC</h1>
              <h2>Especialista em Direito Previdenciário e Família</h2>
              <p>
                Serviços jurídicos personalizados para a região de Orleans e Sul de Santa Catarina.
                Atendimento humanizado com foco na defesa dos seus direitos.
              </p>
            </div>
          </div>
        </section>

        <div className="container py-16">
          <h2 className="text-3xl font-bold text-secondary mb-6 text-center">
            Conteúdo em construção
          </h2>
          <p className="text-center text-lg">
            Em breve, mais informações sobre nossos serviços em Orleans.
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default AdvogadaOrleans; 