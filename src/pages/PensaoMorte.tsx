import { useRef } from 'react';
import { 
  FaWhatsapp, 
  FaCheck, 
  FaArrowRight, 
  FaMoneyBillWave,
  FaUserInjured,
  FaFileContract,
  FaCalendarCheck,
  FaUserAlt,
  FaHandshake,
  FaTrophy,
  FaPhoneAlt,
  FaInfoCircle,
  FaQuestionCircle,
  FaClipboardCheck,
  FaExclamationCircle,
  FaCommentDots,
  FaHeartbeat,
  FaHeart,
  FaUserFriends,
  FaHome,
  FaShieldAlt,
  FaUsers,
  FaClock
} from 'react-icons/fa';
import { RiMentalHealthLine, RiHeartPulseLine } from 'react-icons/ri';
import { BiBrain } from 'react-icons/bi';
import { GiReceiveMoney } from 'react-icons/gi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { IoMdMedical } from 'react-icons/io';
import { motion, useInView } from 'framer-motion';
import Head from 'next/head';
import Layout from '@/components/Layout';
import styles from '../styles/PensaoMorte.module.css';

// Declaração do tipo gtag para TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const PensaoMorte = () => {
  // Refs para animar quando elementos entrarem na tela
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  
  // Configurações mais responsivas para mobile
  const section2InView = useInView(section2Ref, { once: true, amount: 0.1, margin: "0px 0px -100px 0px" });
  const section3InView = useInView(section3Ref, { once: true, amount: 0.1, margin: "0px 0px -100px 0px" });
  const section4InView = useInView(section4Ref, { once: true, amount: 0.1, margin: "0px 0px -100px 0px" });
  const section5InView = useInView(section5Ref, { once: true, amount: 0.1, margin: "0px 0px -100px 0px" });
  const section6InView = useInView(section6Ref, { once: true, amount: 0.1, margin: "0px 0px -100px 0px" });

  const handleWhatsAppClick = () => {
    // Event snippet for Clique de saída conversion page
    // Só dispara a conversão se o usuário veio de um anúncio do Google Ads
    try {
      if (typeof window !== 'undefined' && window.gtag) {
        const urlParams = new URLSearchParams(window.location.search);
        const gclid = urlParams.get('gclid'); // Google Click ID
        const utm_source = urlParams.get('utm_source');
        const utm_medium = urlParams.get('utm_medium');
        
        // Verifica se veio de um anúncio do Google Ads
        const isFromGoogleAds = gclid || 
                               (utm_source === 'google' && utm_medium === 'cpc') ||
                               (utm_source === 'google' && utm_medium === 'ppc') ||
                               utm_source === 'googleads';
        
        if (isFromGoogleAds) {
          window.gtag('event', 'conversion', {'send_to': 'AW-17088118383/OAxWCJL-lM4aEO_8n9Q_'});
        }
      }
    } catch (error) {
      // Se houver erro na verificação ou no gtag, apenas loga o erro
      // mas continua com o redirecionamento para o WhatsApp
      console.error('Erro ao processar conversão do Google Ads:', error);
    }
    
    // Sempre redireciona para o WhatsApp, independente de erros acima
    window.open('https://wa.me/5548991472830?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20verificar%20meu%20direito%20à%20pensão%20por%20morte.', '_blank');
  };

  return (
    <Layout>
      <Head>
        <title>Pensão por Morte INSS | Entenda seus direitos | Consulta jurídica especializada</title>
        <meta
          name="description"
          content="Perdeu um familiar segurado do INSS? Entenda se você tem direito à pensão por morte. Benefício para cônjuges, filhos e dependentes. Consulta com advogado especializado."
        />
        <meta name="keywords" content="pensão por morte, INSS, benefício previdenciário, dependentes, cônjuge, filhos, advogado previdenciário Orleans, direito previdenciário, pensão INSS Orleans" />
        <meta name="author" content="Karoline Francisco" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://karolinefrancisco.com/pensao-morte" />
        <meta property="og:title" content="Pensão por Morte INSS | Entenda seus direitos | Karoline Francisco" />
        <meta property="og:description" content="Perdeu um familiar segurado do INSS? Entenda se você tem direito à pensão por morte. Benefício para cônjuges, filhos e dependentes. Consulta com advogado especializado." />
        <meta property="og:site_name" content="Karoline Francisco - Advogada" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://karolinefrancisco.com/pensao-morte" />
        <meta property="twitter:title" content="Pensão por Morte INSS | Entenda seus direitos" />
        <meta property="twitter:description" content="Perdeu um familiar segurado do INSS? Entenda se você tem direito à pensão por morte. Benefício para cônjuges, filhos e dependentes." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://karolinefrancisco.com/pensao-morte" />
        
        {/* Schema.org markup para a página */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Pensão por Morte INSS - Entenda seus direitos',
              description: 'Guia completo sobre pensão por morte do INSS. Entenda se você tem direito ao benefício como dependente do segurado falecido.',
              author: {
                '@type': 'Person',
                name: 'Karoline Francisco',
                jobTitle: 'Advogada',
                url: 'https://karolinefrancisco.com'
              },
              publisher: {
                '@type': 'Organization',
                name: 'Karoline Francisco - Advogada',
                url: 'https://karolinefrancisco.com'
              },
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': 'https://karolinefrancisco.com/pensao-morte'
              },
              datePublished: '2024-01-15',
              dateModified: '2024-01-15',
              keywords: 'pensão por morte, INSS, benefício previdenciário, dependentes, advogado previdenciário'
            })
          }}
        />
      </Head>
      <main className={styles["page"]}>
        {/* Seção 2 - Informações sobre o benefício */}
        <section className={styles["information"]} ref={section2Ref}>
          <div className="container">
            <motion.div 
              className={styles["information-content"]}
              initial={{ opacity: 0, y: 50 }}
              animate={section2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={styles["section-title"]} style={{ color: '#1a5276' }}>O QUE É A PENSÃO POR MORTE?</h2>
              
              <div className={styles["info-card"]}>
                <h3>
                  <span className={styles["info-card-icon"]}>
                    <FaInfoCircle size={22} />
                  </span>
                  Proteção para a família
                </h3>
                <p>A pensão por morte é um benefício previdenciário pago pelo INSS aos dependentes do segurado que faleceu. <strong>É um direito garantido para proteger financeiramente a família</strong> que dependia economicamente do segurado falecido.</p>
              </div>
              
              <div className={styles["info-card"]}>
                <h3>
                  <span className={styles["info-card-icon"]}>
                    <HiOutlineDocumentText size={22} />
                  </span>
                  Quem são os dependentes
                </h3>
                <p>São considerados dependentes: <strong>cônjuge, companheiro(a), filhos menores de 21 anos ou inválidos</strong>, pais e irmãos menores de 21 anos ou inválidos. Cada classe de dependente tem suas regras específicas para recebimento do benefício.</p>
              </div>
              
              <div className={styles["info-card"]}>
                <h3>
                  <span className={styles["info-card-icon"]}>
                    <FaMoneyBillWave size={22} />
                  </span>
                  Valor do benefício
                </h3>
                <p>O valor da pensão por morte é calculado com base no benefício que o segurado recebia ou teria direito a receber. <strong>O valor pode variar conforme o número de dependentes</strong> e as regras vigentes na data do óbito.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seção 3 - Requisitos */}
        <section className={styles["requirements"]} ref={section3Ref}>
          <div className="container">
            <motion.div 
              className={styles["requirements-content"]}
              initial={{ opacity: 0, y: 50 }}
              animate={section3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={styles["section-title"]} style={{ color: '#1a5276' }}>QUEM PODE TER DIREITO?</h2>
              <div className={styles["requirements-grid"]}>
                <div className={styles["requirement-item"]}>
                  <div className={styles["requirement-icon"]}>
                    <FaUsers size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Dependentes habilitados</h4>
                    <p>Cônjuge, companheiro(a), filhos menores de 21 anos ou inválidos, pais (se não houver dependentes da primeira classe)</p>
                  </div>
                </div>
                <div className={styles["requirement-item"]}>
                  <div className={styles["requirement-icon"]}>
                    <FaFileContract size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Qualidade de segurado</h4>
                    <p>O falecido deve ter qualidade de segurado do INSS ou ter cumprido carência mínima de 18 contribuições mensais</p>
                  </div>
                </div>
                <div className={styles["requirement-item"]}>
                  <div className={styles["requirement-icon"]}>
                    <FaShieldAlt size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Dependência econômica</h4>
                    <p>Para cônjuge e filhos a dependência é presumida. Para outros dependentes deve ser comprovada</p>
                  </div>
                </div>
                <div className={styles["requirement-item"]}>
                  <div className={styles["requirement-icon"]}>
                    <FaClock size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Prazo para solicitação</h4>
                    <p>Deve ser solicitada em até 180 dias após o óbito para receber valores retroativos desde a data da morte</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seção 4 - Situações Comuns */}
        <section className={styles["situations"]} ref={section4Ref}>
          <div className="container">
            <motion.div 
              className={styles["situations-content"]}
              initial={{ opacity: 0, y: 50 }}
              animate={section4InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={styles["section-title"]}>SITUAÇÕES MAIS COMUNS</h2>
              <div className={styles["situations-grid"]}>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaHeart size={32} />
                  </div>
                  <h3>Cônjuge Viúvo(a)</h3>
                  <p>Cônjuge ou companheiro(a) que dependia economicamente do segurado falecido</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaUserFriends size={32} />
                  </div>
                  <h3>Filhos Menores</h3>
                  <p>Filhos menores de 21 anos ou filhos inválidos de qualquer idade do segurado falecido</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaUsers size={32} />
                  </div>
                  <h3>Pais Dependentes</h3>
                  <p>Pais que comprovem dependência econômica do segurado falecido (quando não há cônjuge ou filhos)</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaHome size={32} />
                  </div>
                  <h3>União Estável</h3>
                  <p>Companheiro(a) em união estável que comprove a convivência e dependência econômica</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaShieldAlt size={32} />
                  </div>
                  <h3>Morte por Acidente</h3>
                  <p>Casos de morte por acidente de trabalho ou doença ocupacional com regras específicas</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaClipboardCheck size={32} />
                  </div>
                  <h3>Aposentado Falecido</h3>
                  <p>Dependentes de segurado que já recebia aposentadoria ou auxílio-doença quando faleceu</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seção 5 - FAQ */}
        <section className={styles["faq"]} ref={section5Ref}>
          <div className="container">
            <motion.div 
              className={styles["faq-content"]}
              initial={{ opacity: 0, y: 50 }}
              animate={section5InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={styles["section-title"]}>PERGUNTAS FREQUENTES</h2>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>Por quanto tempo recebo a pensão por morte?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>Para cônjuges, o tempo varia conforme a idade e tempo de casamento. Filhos recebem até 21 anos ou enquanto forem inválidos. Pais recebem enquanto comprovarem dependência econômica.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>Posso receber pensão e trabalhar ao mesmo tempo?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>Sim, a pensão por morte é compatível com o trabalho e com outros benefícios previdenciários próprios, como aposentadoria. Não há impedimento para trabalhar recebendo pensão.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>E se o segurado não tinha carência suficiente?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>Se a morte foi por acidente ou doença do trabalho, não é exigida carência. Para morte por doença comum, são necessárias 18 contribuições, mas há exceções que um advogado pode analisar.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>Como comprovar união estável para pensão?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>Pode ser comprovada através de documentos como conta bancária conjunta, plano de saúde, declaração de imposto de renda, testemunhas, entre outros. Cada caso é analisado individualmente.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seção 6 - Contato */}
        <section className={styles["contact"]} ref={section6Ref}>
          <div className="container">
            <motion.div 
              className={styles["contact-content"]}
              initial={{ opacity: 0, y: 50 }}
              animate={section6InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={styles["contact-title"]}>FICOU DÚVIDA, ENTRE EM CONTATO COM UM ESPECIALISTA EM DIREITO PREVIDENCIÁRIO</h2>
              <div className={styles["contact-options"]}>
                <button 
                  className={styles["contact-button"]}
                  onClick={handleWhatsAppClick}
                >
                  <FaWhatsapp size={24} />
                  <div className={styles["button-text"]}>
                    <span className={styles["button-primary"]}>Fale com um advogado</span>
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default PensaoMorte; 