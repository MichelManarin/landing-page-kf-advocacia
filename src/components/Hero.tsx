import { FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5548991472830?text=Olá,%20gostaria%20de%20informações%20sobre%20seus%20serviços%20jurídicos.', '_blank');
  };

  return (
    <section id="home">
      <div className="hero-bg">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className={`md:w-1/2 mb-10 hero-content ${isVisible ? 'visible' : ''}`}>
            <div className="badge">Advocacia Especializada</div>
            <h1 className="text-4xl font-bold text-secondary mb-4">
              Proteção jurídica <span className="highlight">especializada</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Soluções jurídicas personalizadas para seus direitos no INSS, Direito de Família e Direito Penal. <Link href="/advogada-orleans" className="advogada-link">Advogada em Orleans-SC</Link> com atendimento personalizado.
            </p>
            
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
          
          <div className={`md:w-1/2 flex justify-center hero-card-container ${isVisible ? 'visible' : ''}`}>
            <div className="hero-card">
              <div className="card-header">
                <h2 className="text-2xl font-bold text-secondary">Atendimento Personalizado</h2>
                <div className="card-decoration"></div>
              </div>
              
              <ul className="feature-list">
                <li className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">Análise detalhada do seu caso</div>
                </li>
                <li className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">Acompanhamento em todas as etapas</div>
                </li>
                <li className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">Comunicação clara e objetiva</div>
                </li>
              </ul>
              
              <div className="card-badge">
                OAB/SC 64.256
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 