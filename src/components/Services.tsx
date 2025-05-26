import { 
  FaBalanceScale, 
  FaHospital, 
  FaHandHoldingHeart, 
  FaRegClock, 
  FaUserFriends, 
  FaChild, 
  FaHome, 
  FaFileContract, 
  FaMoneyBillWave, 
  FaFileInvoiceDollar, 
  FaHandshake, 
  FaClipboardCheck,
  FaUserInjured,
  FaGavel,
  FaShieldAlt,
  FaSearch
} from 'react-icons/fa';
import Link from 'next/link';

const Services = () => {
  return (
    <section id="servicos" className="section bg-gray-50">
      <div className="container">
        <div className="service-header">
          <span className="service-subtitle">Especialidades Jurídicas</span>
          <h2 className="section-title">Áreas de Atuação</h2>
          <p className="service-description">
            Oferecemos serviços jurídicos especializados com atendimento humanizado e 
            personalizado para cada caso.
          </p>
        </div>
        
        <div className="services-grid">
          {/* INSS Service */}
          <div className="service-card">
            <div className="service-icon-container primary">
              <FaBalanceScale className="service-main-icon" />
            </div>
            <h3 className="service-title">Direito Previdenciário</h3>
            <p className="service-text">
              Especialista em questões relacionadas ao INSS, garantindo seus direitos previdenciários.
            </p>
            
            <div className="service-divider"></div>
            
            <ul className="service-features">
              <li className="service-feature-item">
                <div className="feature-icon-container">
                  <FaRegClock />
                </div>
                <span>Aposentadorias</span>
              </li>
              <li className="service-feature-item">
                <div className="feature-icon-container">
                  <FaHospital />
                </div>
                <span>Auxílio-Doença</span>
              </li>
              <li className="service-feature-item">
                <div className="feature-icon-container">
                  <FaUserInjured />
                </div>
                <Link href="/auxilio-acidente" className="feature-link">
                  <span>Auxílio-Acidente</span>
                </Link>
              </li>
              <li className="service-feature-item">
                <div className="feature-icon-container">
                  <FaHandHoldingHeart />
                </div>
                <span>Pensão por Morte</span>
              </li>
              <li className="service-feature-item">
                <div className="feature-icon-container">
                  <FaClipboardCheck />
                </div>
                <span>Revisão de Benefícios</span>
              </li>
            </ul>
          </div>
          
          {/* Family Law Service */}
          <div className="service-card">
            <div className="service-icon-container secondary">
              <FaUserFriends className="service-main-icon" />
            </div>
            <h3 className="service-title">Direito de Família</h3>
            <p className="service-text">
              Suporte jurídico para questões familiares com sensibilidade e profissionalismo.
            </p>
            
            <div className="service-divider"></div>
            
            <ul className="service-features">
              <li className="service-feature-item">
                <div className="feature-icon-container">
                  <FaFileContract />
                </div>
                <span>Divórcio</span>
              </li>
              <li className="service-feature-item">
                <div className="feature-icon-container">
                  <FaMoneyBillWave />
                </div>
                <span>Pensão Alimentícia</span>
              </li>
              <li className="service-feature-item">
                <div className="feature-icon-container">
                  <FaChild />
                </div>
                <span>Guarda de Filhos</span>
              </li>
              <li className="service-feature-item">
                <div className="feature-icon-container">
                  <FaHome />
                </div>
                <span>Inventário e Partilha</span>
              </li>
            </ul>
          </div>
          
          {/* Criminal Law Service */}
          <div className="service-card">
            <div className="service-icon-container tertiary">
              <FaGavel className="service-main-icon" />
            </div>
            <h3 className="service-title">Direito Penal</h3>
            <p className="service-text">
              Defesa especializada em processos penais com atuação estratégica e dedicada.
            </p>
            
            <div className="service-divider"></div>
            
            <ul className="service-features">
              <li className="service-feature-item">
                <div className="feature-icon-container">
                  <FaShieldAlt />
                </div>
                <span>Defesa em processos criminais</span>
              </li>
              <li className="service-feature-item">
                <div className="feature-icon-container">
                  <FaSearch />
                </div>
                <span>Orientação durante a investigação</span>
              </li>
              <li className="service-feature-item">
                <div className="feature-icon-container">
                  <FaHandshake />
                </div>
                <span>Negociação de acordos</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 