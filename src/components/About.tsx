import { FaGraduationCap, FaHandshake, FaInstagram } from 'react-icons/fa';

const About = () => {
  return (
    <section id="sobre" className="section bg-white">
      <div className="about-bg">
        <div className="about-shape about-shape-1"></div>
        <div className="about-shape about-shape-2"></div>
      </div>
      
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">Sobre Dra. Karoline Francisco</h2>
          <div className="about-subtitle">OAB/SC 64.256</div>
        </div>
        
        <div className="about-container">
          <div className="about-content" style={{ width: '100%' }}>
            <div className="about-card" style={{ maxWidth: '100%' }}>
              <div className="about-card-content">
                <div className="about-card-decoration"></div>
                <h3>Perfil Profissional</h3>
                <p>
                  Advogada em Orleans-Sc com formação sólida e experiência prática, ofereço assistência jurídica personalizada
                  e eficaz para proteger seus direitos e interesses. Minha abordagem combina
                  conhecimento técnico com atendimento humanizado, buscando sempre as melhores
                  soluções para cada caso.
                </p>
                <p>
                  Especialista em Direito Previdenciário, com atuação destacada em processos junto ao INSS,
                  além de expertise em Direito de Família e Direito Penal. Pós-graduada em Direito Processual Civil,
                  trabalho com dedicação e compromisso para alcançar os melhores resultados para meus clientes.
                </p>
                
                <div className="about-credentials">
                  <div className="credential-item">
                    <div className="credential-icon">
                      <FaGraduationCap />
                    </div>
                    <div className="credential-text">
                      <h4>Formação Acadêmica</h4>
                      <p>Bacharelado em Direito</p>
                    </div>
                  </div>
                  
                  <div className="credential-item">
                    <div className="credential-icon">
                      <FaHandshake />
                    </div>
                    <div className="credential-text">
                      <h4>Experiência</h4>
                      <p>Advocacia especializada</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-cta">
          <div className="about-cta-text">
            <h3>Precisa de assistência jurídica?</h3>
            <p>Siga-me no Instagram <strong>@advkarolinefrancisco</strong> e assista aos vídeos para conhecer mais sobre seus direitos.</p>
          </div>
          <a href="https://www.instagram.com/advkarolinefrancisco/" target="_blank" rel="noopener noreferrer" className="about-cta-button" style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
            <FaInstagram style={{ marginRight: '8px' }} /> Ver Instagram
            <span className="about-cta-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About; 