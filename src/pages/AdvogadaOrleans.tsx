import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaBalanceScale, FaUserFriends, FaFileInvoiceDollar, FaMapMarkerAlt, FaCheck, FaWhatsapp } from 'react-icons/fa';

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

  return (
    <>
      <Header />
      <main className="advogada-orleans-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>Advogada em Orleans - SC</h1>
              <h2>Karoline Francisco - OAB/SC 64.256</h2>
              <p>Assistência jurídica especializada para Orleans e região com foco em Direito Previdenciário, Direito de Família e Ações de Cobrança.</p>
              
              <button 
                onClick={handleWhatsAppClick}
                className="whatsapp-button"
              >
                <div className="whatsapp-icon">
                  <FaWhatsapp size={24} />
                </div>
                <span>Fale com um advogado</span>
                <div className="button-arrow">→</div>
              </button>
            </div>
          </div>
        </section>
        
        {/* Serviços Section */}
        <section className="orleans-services-section">
          <div className="container">
            <h2>Serviços Jurídicos em Orleans</h2>
            <p className="section-description">Ofereço serviços jurídicos completos para moradores de Orleans e cidades vizinhas, sempre com atendimento personalizado e dedicado a cada cliente.</p>
            
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <FaBalanceScale />
                </div>
                <h3>Direito Previdenciário em Orleans</h3>
                <p>Orientação especializada para benefícios do INSS, aposentadorias, auxílio-doença e revisões de benefícios para moradores de Orleans-SC.</p>
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
                <p>Suporte jurídico para questões familiares com sensibilidade e profissionalismo para famílias e residentes de Orleans-SC.</p>
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
                <p>Recuperação de créditos e solução de conflitos financeiros de forma eficiente para empresas e pessoas de Orleans-SC.</p>
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
            <h2>Por que escolher esta advogada em Orleans?</h2>
            <div className="diferenciais-grid">
              <div className="diferencial-card">
                <h3>Atendimento Humanizado</h3>
                <p>Tratamos cada cliente com atenção e cuidado, entendendo a importância de seu caso e fornecendo suporte emocional e jurídico durante todo o processo.</p>
              </div>
              
              <div className="diferencial-card">
                <h3>Conhecimento Local</h3>
                <p>Como advogada atuante em Orleans, conheço profundamente as peculiaridades locais, os tribunais da região e a jurisprudência específica de Santa Catarina.</p>
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
                <Link to="/contato" className="cta-button secondary">
                  Ver formas de contato
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Rich snippets para SEO - Local Business */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Advogada em Orleans - Karoline Francisco",
            "image": "https://karolinefrancisco.com/perfil.jpg",
            "url": "https://karolinefrancisco.com/advogada-orleans",
            "telephone": "+5548991472830",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Principal, 123",
              "addressLocality": "Orleans",
              "addressRegion": "SC",
              "postalCode": "88870-000",
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-28.3584",
              "longitude": "-49.2918"
            },
            "description": "Advogada em Orleans especializada em Direito Previdenciário, Direito de Família e Ações de Cobrança. Atendimento personalizado para Orleans-SC e região.",
            "areaServed": {
              "@type": "City",
              "name": "Orleans",
              "sameAs": "https://pt.wikipedia.org/wiki/Orleans_(Santa_Catarina)"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Serviços Jurídicos em Orleans",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Direito Previdenciário em Orleans"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Direito de Família em Orleans"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Ações de Cobrança em Orleans"
                  }
                }
              ]
            },
            "keywords": "advogada em orleans, advogado orleans sc, direito previdenciário orleans, advogada família orleans"
          })
        }} />
      </main>
      <Footer />
    </>
  );
};

export default AdvogadaOrleans; 