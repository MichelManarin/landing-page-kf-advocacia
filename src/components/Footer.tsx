import { 
  FaInstagram, 
  FaLinkedin, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope,
  FaWhatsapp,
  FaClock,
  FaChevronUp
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logoSrc from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const checkScrollPosition = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScrollPosition);
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5548991472830?text=Olá,%20gostaria%20de%20informações%20sobre%20seus%20serviços%20jurídicos.', '_blank');
  };

  return (
    <footer>
      <div className="footer-decoration">
        <div className="footer-shape footer-shape-1"></div>
        <div className="footer-shape footer-shape-2"></div>
      </div>
      
      <div className="pre-footer">
        <div className="container">
          <div className="pre-footer-content">
            <div className="pre-footer-text">
              <h3>Precisa de orientação jurídica?</h3>
              <p>Entre em contato para uma consulta inicial gratuita.</p>
            </div>
            <button 
              className="footer-cta-button"
              onClick={handleWhatsAppClick}
            >
              <FaWhatsapp size={20} className="mr-2" />
              Fale com um advogado
            </button>
          </div>
        </div>
      </div>
      
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <div className="footer-logo-container">
                <img src={logoSrc} alt="Karoline Francisco Advogada" className="footer-logo" />
                <div className="footer-logo-text">
                  <h2>Karoline Francisco</h2>
                  <p>ADVOGADA</p>
                </div>
              </div>
              <p className="footer-description">
                Serviços jurídicos especializados em Direito Previdenciário, 
                Direito de Família e Ações de Cobrança.
              </p>
              <div className="footer-contact-info">
                <div className="footer-contact-item">
                  <FaPhoneAlt className="footer-contact-icon" />
                  <span>(48) 9 9147-2830</span>
                </div>
                <div className="footer-contact-item">
                  <FaEnvelope className="footer-contact-icon" />
                  <span>karolinefrancisco@hotmail.com</span>
                </div>
                <div className="footer-contact-item">
                  <FaMapMarkerAlt className="footer-contact-icon" />
                  <span>Orleans, SC</span>
                </div>
                <div className="footer-contact-item">
                  <FaClock className="footer-contact-icon" />
                  <span>Seg-Sex: 9h às 18h</span>
                </div>
              </div>
            </div>
            
            <div className="footer-links">
              <h3>Áreas de Atuação</h3>
              <ul>
                <li><a href="#servicos">Direito Previdenciário</a></li>
                <li><Link to="/inss">Aposentadorias INSS</Link></li>
                <li><a href="#servicos">Direito de Família</a></li>
                <li><a href="#servicos">Ações de Cobrança</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h3>Links Rápidos</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#contato">Contato</a></li>
              </ul>
            </div>
            
            <div className="footer-social">
              <h3>Redes Sociais</h3>
              <div className="social-icons">
                <a 
                  href="https://www.linkedin.com/in/karoline-francisco-950986276" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="social-icon-link"
                >
                  <div className="social-icon">
                    <FaLinkedin />
                  </div>
                </a>
                <a 
                  href="https://www.instagram.com/advkarolinefrancisco/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="social-icon-link"
                >
                  <div className="social-icon">
                    <FaInstagram />
                  </div>
                </a>
                <a 
                  href="https://wa.me/5548991472830" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="social-icon-link"
                >
                  <div className="social-icon whatsapp">
                    <FaWhatsapp />
                  </div>
                </a>
              </div>
              
              <div className="footer-oab">
                <div className="oab-badge">
                  OAB/SC 64.256
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>© {currentYear} Karoline Francisco Advocacia. Todos os direitos reservados.</p>
          <p className="developer-info">Desenvolvido por Manatech | CNPJ 43.314.545/0001-85</p>
        </div>
      </div>
      
      {showScrollTop && (
        <button 
          className="scroll-top-button" 
          onClick={handleScrollTop}
          aria-label="Voltar ao topo"
        >
          <FaChevronUp />
        </button>
      )}
    </footer>
  );
};

export default Footer; 