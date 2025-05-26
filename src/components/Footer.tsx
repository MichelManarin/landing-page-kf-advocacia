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
import Link from 'next/link';
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
              <p>Fale com um advogado</p>
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
                <img 
                  src={logoSrc.src} 
                  alt="Karoline Francisco Advogada em Orleans - Serviços Jurídicos Especializados" 
                  title="Escritório de Advocacia em Orleans - Karoline Francisco" 
                  className="footer-logo" 
                  width={50}
                  height={50}
                />
                <div className="footer-logo-text">
                  <h2>Karoline Francisco</h2>
                  <p>ADVOGADA</p>
                </div>
              </div>
              <p className="footer-description">
                Serviços jurídicos especializados em Direito Previdenciário, 
                Direito de Família e Direito Penal.
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
                <li><Link href="/#servicos" title="Direito Previdenciário em Orleans">Direito Previdenciário</Link></li>
                <li><Link href="/inss" title="Aposentadorias e Benefícios INSS em Orleans">Aposentadorias INSS</Link></li>
                <li><Link href="/#servicos" title="Advogada para Direito de Família em Orleans">Direito de Família</Link></li>
                <li><Link href="/#servicos" title="Direito Penal em Orleans">Direito Penal</Link></li>
                <li><Link href="/advogada-orleans" title="Advogada especializada em Orleans">Advogada em Orleans</Link></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h3>Links Rápidos</h3>
              <ul>
                <li><Link href="/" title="Página inicial - Advocacia em Orleans">Home</Link></li>
                <li><Link href="/#sobre" title="Sobre Karoline Francisco - Advogada em Orleans">Sobre</Link></li>
                <li><Link href="/#servicos" title="Serviços jurídicos em Orleans">Serviços</Link></li>
                <li><Link href="/blog" title="Blog jurídico - Advogada em Orleans">Blog</Link></li>
                <li><Link href="/#contato" title="Entre em contato com advogada em Orleans">Contato</Link></li>
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
                  title="Karoline Francisco - Advogada em Orleans no LinkedIn"
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
                  title="Siga a Advogada Karoline Francisco no Instagram"
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
                  title="Fale com a Advogada em Orleans pelo WhatsApp"
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
          <p className="developer-info"><strong>Desenvolvido por Manatech</strong> | CNPJ 43.314.545/0001-85 | <a href="mailto:michelmanarin@gmail.com">michelmanarin@gmail.com</a></p>
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