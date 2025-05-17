import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Sobre() {
  useEffect(() => {
    // Atualiza o título da página para SEO
    document.title = 'Sobre | Advogada em Orleans - Karoline Francisco';
    
    // Atualiza a meta description para SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Conheça a Dra. Karoline Francisco, advogada em Orleans-SC. Experiência e dedicação em Direito Previdenciário e Família, atendendo toda a região.');
    }
  }, []);

  return (
    <>
      <Header />
      <main className="sobre-container">
        <section className="hero-sobre">
          <div className="container">
            <h1>Sobre Karoline Francisco</h1>
            <h2>Advogada em Orleans-SC</h2>
          </div>
        </section>
        
        <section className="perfil-advogada">
          <div className="container">
            <div className="imagem-perfil">
              {/* Imagem da advogada */}
              <div className="img-placeholder">Foto da Advogada</div>
            </div>
            
            <div className="bio-advogada">
              <h2>Dra. Karoline Francisco</h2>
              <h3>OAB/SC 12345</h3>
              <p>
                Advogada atuante na cidade de Orleans e região, com experiência e especialização 
                nas áreas de Direito Previdenciário, Direito de Família e Ações de Cobrança.
              </p>
              <p>
                Graduada em Direito pela Universidade Federal de Santa Catarina (UFSC), 
                com pós-graduação em Direito Previdenciário pela PUC-RS.
              </p>
              <p>
                Com um escritório localizado no centro de Orleans-SC, atende clientes de toda 
                a região com dedicação e comprometimento, buscando sempre os melhores resultados 
                para seus clientes.
              </p>
            </div>
          </div>
        </section>
        
        <section className="areas-atuacao">
          <div className="container">
            <h2>Áreas de Atuação em Orleans e Região</h2>
            
            <div className="cards-areas">
              <div className="card">
                <h3>Direito Previdenciário</h3>
                <p>
                  Atendimento especializado em benefícios do INSS, como aposentadorias, 
                  auxílio-doença, pensão por morte e BPC/LOAS para moradores de Orleans e região.
                </p>
              </div>
              
              <div className="card">
                <h3>Direito de Família</h3>
                <p>
                  Assessoria jurídica em divórcios, pensão alimentícia, guarda de filhos e 
                  partilha de bens, com atendimento humanizado em Orleans.
                </p>
              </div>
              
              <div className="card">
                <h3>Ações de Cobrança</h3>
                <p>
                  Representação jurídica em processos de cobrança, execução de títulos e 
                  negociação de dívidas para clientes de Orleans e cidades vizinhas.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="filosofia">
          <div className="container">
            <h2>Filosofia de Trabalho</h2>
            <p>
              O escritório da Dra. Karoline Francisco em Orleans tem como princípios o atendimento 
              personalizado, a ética profissional e o compromisso com os interesses dos clientes. 
              Cada caso é tratado com a devida atenção e dedicação, buscando sempre a melhor 
              solução jurídica.
            </p>
            <p>
              Atendemos clientes em Orleans e em toda a região sul de Santa Catarina, oferecendo 
              serviços jurídicos de qualidade e com preços justos.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Sobre; 