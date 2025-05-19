import { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaBalanceScale, FaUserFriends, FaFileInvoiceDollar, FaMapMarkerAlt, FaCheck, FaWhatsapp, FaQuestionCircle } from 'react-icons/fa';

const AdvogadaOrleans = () => {
  useEffect(() => {
    // Atualiza o título da página para SEO
    document.title = 'Advogada em Orleans - Karoline Francisco | Especialista em Direito';
    
    // Atualiza a meta description para SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Advogada em Orleans - Karoline Francisco, especialista em Direito Previdenciário, Família e Ações de Cobrança. Atendimento personalizado para moradores de Orleans-SC e região.');
    }
    
    // Scroll para o topo ao carregar a página
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5548991472830?text=Olá,%20gostaria%20de%20informações%20sobre%20seus%20serviços%20jurídicos%20em%20Orleans.', '_blank');
  };

  // Dados estruturados para melhorar o SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Karoline Francisco - Advogada em Orleans',
    description: 'Advogada Karoline Francisco oferece serviços jurídicos especializados em Orleans SC, com foco em direito previdenciário e família.',
    url: 'https://karolinefrancisco.com/advogada-orleans',
    telephone: '+5548991472830',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Orleans',
      addressRegion: 'SC',
      addressCountry: 'BR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-28.3581',
      longitude: '-49.2939'
    },
    openingHours: 'Mo-Fr 08:00-18:00',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços Jurídicos',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Direito Previdenciário em Orleans'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Direito de Família em Orleans'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ações de Cobrança em Orleans'
          }
        }
      ]
    }
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Header />
      <main className="advogada-orleans-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>Advogada em Orleans SC - Karoline Francisco</h1>
              <h2>Karoline Francisco - OAB/SC 64.256</h2>
              <p>Assistência jurídica especializada para Orleans e região com foco em Direito Previdenciário, Direito de Família e Ações de Cobrança. Atendimento personalizado realizado pela Dra. Karoline Francisco.</p>
              
              <button 
                onClick={handleWhatsAppClick}
                className="whatsapp-button"
                aria-label="Entrar em contato com a advogada Karoline Francisco pelo WhatsApp"
              >
                <div className="whatsapp-icon">
                  <FaWhatsapp size={24} />
                </div>
                <span>Fale com a advogada Karoline</span>
                <div className="button-arrow">→</div>
              </button>
            </div>
          </div>
        </section>
        
        {/* Serviços Section */}
        <section className="orleans-services-section">
          <div className="container">
            <h2>Serviços Jurídicos da Advogada Karoline Francisco em Orleans</h2>
            <p className="section-description">A advogada Karoline Francisco oferece serviços jurídicos completos para moradores de Orleans e cidades vizinhas, sempre com atendimento personalizado e dedicado a cada cliente.</p>
            
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <FaBalanceScale />
                </div>
                <h3>Direito Previdenciário em Orleans</h3>
                <p>Orientação especializada pela Dra. Karoline Francisco para benefícios do INSS, aposentadorias, auxílio-doença e revisões de benefícios para moradores de Orleans-SC.</p>
                <ul className="service-list">
                  <li><FaCheck className="check-icon" /> Aposentadorias</li>
                  <li><FaCheck className="check-icon" /> Auxílio-doença</li>
                  <li><FaCheck className="check-icon" /> Aposentadoria por invalidez</li>
                  <li><FaCheck className="check-icon" /> Pensão por morte</li>
                  <li><FaCheck className="check-icon" /> Revisão de benefícios</li>
                </ul>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <FaUserFriends />
                </div>
                <h3>Direito de Família em Orleans</h3>
                <p>Suporte jurídico pela advogada Karoline Francisco para questões familiares com sensibilidade e profissionalismo para famílias e residentes de Orleans-SC.</p>
                <ul className="service-list">
                  <li><FaCheck className="check-icon" /> Divórcio</li>
                  <li><FaCheck className="check-icon" /> Pensão alimentícia</li>
                  <li><FaCheck className="check-icon" /> Guarda de filhos</li>
                  <li><FaCheck className="check-icon" /> Inventário e partilha</li>
                  <li><FaCheck className="check-icon" /> União estável</li>
                </ul>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <FaFileInvoiceDollar />
                </div>
                <h3>Ações de Cobrança em Orleans</h3>
                <p>Recuperação de créditos e solução de conflitos financeiros de forma eficiente pela advogada Karoline Francisco para empresas e pessoas de Orleans-SC.</p>
                <ul className="service-list">
                  <li><FaCheck className="check-icon" /> Cobranças judiciais</li>
                  <li><FaCheck className="check-icon" /> Negociação de dívidas</li>
                  <li><FaCheck className="check-icon" /> Execução de títulos</li>
                  <li><FaCheck className="check-icon" /> Protesto de títulos</li>
                  <li><FaCheck className="check-icon" /> Recuperação de crédito</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Diferenciais Section */}
        <section className="diferenciais-section">
          <div className="container">
            <h2>Por que escolher a advogada Karoline Francisco em Orleans?</h2>
            <div className="diferenciais-grid">
              <div className="diferencial-card">
                <h3>Atendimento Humanizado</h3>
                <p>A Dra. Karoline Francisco trata cada cliente com atenção e cuidado, entendendo a importância de seu caso e fornecendo suporte emocional e jurídico durante todo o processo.</p>
              </div>
              
              <div className="diferencial-card">
                <h3>Conhecimento Local</h3>
                <p>Como advogada atuante em Orleans, Karoline Francisco conhece profundamente as peculiaridades locais, os tribunais da região e a jurisprudência específica de Santa Catarina.</p>
              </div>
              
              <div className="diferencial-card">
                <h3>Transparência</h3>
                <p>Comunicação clara sobre honorários, prazos e possibilidades, sem surpresas ou promessas irreais durante os processos jurídicos.</p>
              </div>
              
              <div className="diferencial-card">
                <h3>Foco no Resultado</h3>
                <p>Desenvolvimento de estratégias jurídicas personalizadas para cada caso, visando sempre alcançar os melhores resultados possíveis para os clientes.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container">
            <h2>Perguntas Frequentes sobre Advogados em Orleans</h2>
            <div className="faq-container">
              <div className="faq-item">
                <div className="faq-question">
                  <FaQuestionCircle className="faq-icon" />
                  <h3>Quais são os tribunais que atendem a comarca de Orleans-SC?</h3>
                </div>
                <div className="faq-answer">
                  <p>Orleans é atendida pelo Fórum da Comarca de Orleans, vinculado ao Tribunal de Justiça de Santa Catarina. Para questões trabalhistas, os processos são encaminhados para a Vara do Trabalho de Criciúma e para questões federais, o Juizado Especial Federal e a Justiça Federal de Criciúma são responsáveis pelos processos.</p>
                </div>
              </div>
              
              <div className="faq-item">
                <div className="faq-question">
                  <FaQuestionCircle className="faq-icon" />
                  <h3>Quanto custa um advogado em Orleans para causas previdenciárias?</h3>
                </div>
                <div className="faq-answer">
                  <p>Os honorários para causas previdenciárias em Orleans geralmente seguem a tabela da OAB/SC, podendo variar entre 10% a 30% do valor conquistado ao final do processo. Em nosso escritório, oferecemos a primeira consulta gratuita para avaliação do caso e apresentação dos custos de forma transparente.</p>
                </div>
              </div>
              
              <div className="faq-item">
                <div className="faq-question">
                  <FaQuestionCircle className="faq-icon" />
                  <h3>Quais documentos devo levar em uma primeira consulta com advogado em Orleans?</h3>
                </div>
                <div className="faq-answer">
                  <p>Para a primeira consulta, recomenda-se levar seus documentos pessoais (RG, CPF), comprovante de residência em Orleans ou região, e documentos específicos relacionados ao seu caso. Para questões previdenciárias, traga seu CNIS e carta de concessão de benefícios; para direito de família, documentos que comprovem o matrimônio ou união estável; para ações de cobrança, os contratos e comprovantes de pagamentos ou inadimplência.</p>
                </div>
              </div>
              
              <div className="faq-item">
                <div className="faq-question">
                  <FaQuestionCircle className="faq-icon" />
                  <h3>Atende outras cidades além de Orleans?</h3>
                </div>
                <div className="faq-answer">
                  <p>Sim, além de Orleans, atendemos clientes de cidades vizinhas como Lauro Müller, Urussanga, Braço do Norte, São Ludgero e Grão Pará. Oferecemos também atendimento remoto para todo o estado de Santa Catarina em casos específicos.</p>
                </div>
              </div>
              
              <div className="faq-item">
                <div className="faq-question">
                  <FaQuestionCircle className="faq-icon" />
                  <h3>Qual é o tempo médio de uma causa previdenciária em Orleans?</h3>
                </div>
                <div className="faq-answer">
                  <p>O tempo médio para resolução de causas previdenciárias em Orleans varia entre 1 a 3 anos, dependendo da complexidade do caso, da necessidade de perícias médicas e da atual demanda processual da Justiça Federal de Criciúma, que atende a região. Processos administrativos junto ao INSS em Orleans podem ser resolvidos em prazos menores.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Área de Atuação */}
        <section className="area-atuacao-section">
          <div className="container">
            <h2>Área de Atuação em Orleans e Região</h2>
            <div className="area-content">
              <div className="area-text">
                <p>Atendemos clientes em Orleans e nas cidades vizinhas, oferecendo serviços jurídicos de excelência com conhecimento das particularidades locais.</p>
                <ul className="area-list">
                  <li><FaMapMarkerAlt className="map-icon" /> Orleans - SC</li>
                  <li><FaMapMarkerAlt className="map-icon" /> Lauro Müller</li>
                  <li><FaMapMarkerAlt className="map-icon" /> Urussanga</li>
                  <li><FaMapMarkerAlt className="map-icon" /> Braço do Norte</li>
                  <li><FaMapMarkerAlt className="map-icon" /> São Ludgero</li>
                  <li><FaMapMarkerAlt className="map-icon" /> Grão Pará</li>
                </ul>
                <p className="area-note">Consulte disponibilidade para outras cidades da região.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="orleans-cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Precisa de um advogado em Orleans?</h2>
              <p>Entre em contato agora para uma avaliação inicial do seu caso. Atendimento personalizado e focado em resultados.</p>
              <div className="cta-buttons">
                <button 
                  onClick={handleWhatsAppClick}
                  className="cta-button primary"
                >
                  <FaWhatsapp size={20} className="button-icon" />
                  Fale com um advogado
                </button>
                
              </div>
            </div>
          </div>
        </section>
        
        {/* Rich snippets para SEO - Breadcrumbs */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://karolinefrancisco.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Advogada em Orleans",
                "item": "https://karolinefrancisco.com/advogada-orleans"
              }
            ]
          })
        }} />
      </main>
      <Footer />
    </>
  );
};

export default AdvogadaOrleans; 