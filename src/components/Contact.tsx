import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5548991472830?text=Olá,%20gostaria%20de%20informações%20sobre%20seus%20serviços%20jurídicos.', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:karolinefrancisco@hotmail.com';
  };

  return (
    <section id="contato" className="section bg-gray-50">
      <div className="container">
        <div className="contact-header">
          <span className="contact-subtitle">Estamos à disposição</span>
          <h2 className="section-title">Entre em Contato</h2>
          <p className="contact-description">
            Estou à disposição para esclarecer suas dúvidas e ajudar a encontrar a melhor solução jurídica para o seu caso.
          </p>
        </div>
        
        <div className="contact-container">
          <div className="contact-info-card">
            <div className="card-header">
              <h3 className="card-title">Informações de Contato</h3>
              <div className="card-decoration"></div>
            </div>
            
            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-content">
                  <h4>Telefone</h4>
                  <p>(48) 9 9147-2830</p>
                </div>
              </div>
              
              <div className="contact-info-item click-item" onClick={handleEmailClick}>
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-content">
                  <h4>E-mail</h4>
                  <p>karolinefrancisco@hotmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="whatsapp-card">
            <div className="whatsapp-content">
              <h3>Atendimento Imediato</h3>
              <p>
                Precisa de uma resposta rápida? Fale diretamente com nossa equipe para um atendimento ágil e eficiente.
              </p>
              <button 
                onClick={handleWhatsAppClick}
                className="whatsapp-contact-button"
              >
                <div className="whatsapp-button-icon">
                  <FaWhatsapp size={22} />
                </div>
                <span>Fale com um advogado</span>
                <div className="whatsapp-button-arrow">→</div>
              </button>
            </div>
            <div className="whatsapp-decoration">
              <div className="decoration-circle"></div>
              <div className="decoration-circle"></div>
              <div className="decoration-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 