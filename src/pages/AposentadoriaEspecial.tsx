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
  FaIndustry,
  FaShieldAlt,
  FaHardHat
} from 'react-icons/fa';
import { RiMentalHealthLine, RiHeartPulseLine } from 'react-icons/ri';
import { BiBrain } from 'react-icons/bi';
import { GiChemicalDrop, GiRadioactive, GiMining } from 'react-icons/gi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { IoMdMedical } from 'react-icons/io';
import { motion, useInView } from 'framer-motion';
import Head from 'next/head';
import Layout from '@/components/Layout';
import styles from '../styles/AposentadoriaEspecial.module.css';

// Declaração do tipo gtag para TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const AposentadoriaEspecial = () => {
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
    window.open('https://wa.me/5548991472830?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20verificar%20meu%20direito%20à%20aposentadoria%20especial.', '_blank');
  };

  return (
    <Layout>
      <Head>
        <title>Aposentadoria Especial INSS | Entenda seus direitos | Consulta jurídica especializada</title>
        <meta
          name="description"
          content="Trabalhou exposto a agentes nocivos? Entenda se você tem direito à aposentadoria especial do INSS com tempo reduzido de contribuição. Consulta com advogado especializado."
        />
        <meta name="keywords" content="aposentadoria especial, INSS, benefício previdenciário, agentes nocivos, tempo reduzido, advogado previdenciário Orleans, direito previdenciário, aposentadoria especial INSS Orleans" />
        <meta name="author" content="Karoline Francisco" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://karolinefrancisco.com/aposentadoria-especial" />
        <meta property="og:title" content="Aposentadoria Especial INSS | Entenda seus direitos | Karoline Francisco" />
        <meta property="og:description" content="Trabalhou exposto a agentes nocivos? Entenda se você tem direito à aposentadoria especial do INSS com tempo reduzido de contribuição. Consulta com advogado especializado." />
        <meta property="og:site_name" content="Karoline Francisco - Advogada" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://karolinefrancisco.com/aposentadoria-especial" />
        <meta property="twitter:title" content="Aposentadoria Especial INSS | Entenda seus direitos" />
        <meta property="twitter:description" content="Trabalhou exposto a agentes nocivos? Entenda se você tem direito à aposentadoria especial do INSS com tempo reduzido de contribuição." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://karolinefrancisco.com/aposentadoria-especial" />
        
        {/* Schema.org markup para a página */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Aposentadoria Especial INSS - Entenda seus direitos',
              description: 'Guia completo sobre aposentadoria especial do INSS. Entenda se você tem direito ao benefício por exposição a agentes nocivos.',
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
                '@id': 'https://karolinefrancisco.com/aposentadoria-especial'
              },
              datePublished: '2024-01-15',
              dateModified: '2024-01-15',
              keywords: 'aposentadoria especial, INSS, benefício previdenciário, agentes nocivos, advogado previdenciário'
            })
          }}
        />
      </Head>
      <main className={styles["page"]}>
        {/* Seção Hero - Simples e elegante */}
        <section className={styles["hero"]}>
          <div className="container">
            <motion.div 
              className={styles["hero-content"]}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className={styles["hero-text"]}>
                <h1 className={styles["title"]}>
                  Aposentadoria Especial INSS
                </h1>
                <p className={styles["subtitle"]}>
                  Trabalhou exposto a agentes nocivos? Você pode ter direito à aposentadoria com tempo reduzido de contribuição. 
                  Entenda como funciona este benefício previdenciário e quais são os requisitos necessários.
                </p>
              </div>
              
              <div className={styles["hero-image"]}>
                <div className={styles["image-container"]}>
                  {/* Aqui você pode colocar a imagem gerada no ChatGPT */}
                  <img 
                    src="/assets/aposentadoria-especial.png" 
                    alt="Aposentadoria Especial - Trabalhador com equipamentos de proteção" 
                    className={styles["hero-img"]}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seção 2 - Informações sobre o benefício */}
        <section className={styles["information"]} ref={section2Ref}>
          <div className="container">
            <motion.div 
              className={styles["information-content"]}
              initial={{ opacity: 0, y: 50 }}
              animate={section2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={styles["section-title"]} style={{ color: '#1a5276' }}>O QUE É A APOSENTADORIA ESPECIAL?</h2>
              
              <div className={styles["info-card"]}>
                <h3>
                  <span className={styles["info-card-icon"]}>
                    <FaInfoCircle size={22} />
                  </span>
                  Benefício para exposição a agentes nocivos
                </h3>
                <p>A aposentadoria especial é um benefício previdenciário destinado aos trabalhadores que exerceram atividades <strong>expostos a agentes nocivos à saúde</strong> como ruído, calor, produtos químicos, radiação, entre outros. Permite aposentar-se com tempo reduzido de contribuição.</p>
              </div>
              
              <div className={styles["info-card"]}>
                <h3>
                  <span className={styles["info-card-icon"]}>
                    <HiOutlineDocumentText size={22} />
                  </span>
                  Principal vantagem
                </h3>
                <p>O grande diferencial da aposentadoria especial é o <strong>tempo reduzido de contribuição</strong>: 15, 20 ou 25 anos, dependendo do grau de exposição aos agentes nocivos, em vez dos 35 anos (homens) ou 30 anos (mulheres) da aposentadoria comum.</p>
              </div>
              
              <div className={styles["info-card"]}>
                <h3>
                  <span className={styles["info-card-icon"]}>
                    <FaMoneyBillWave size={22} />
                  </span>
                  Valor do benefício
                </h3>
                <p>O valor da aposentadoria especial é calculado com base na <strong>média de todas as contribuições</strong> desde julho de 1994, aplicando-se as regras de transição ou as novas regras conforme a data de entrada do requerimento.</p>
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
                    <FaShieldAlt size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Exposição a agentes nocivos</h4>
                    <p>Trabalhadores expostos a agentes físicos, químicos ou biológicos prejudiciais à saúde</p>
                  </div>
                </div>
                <div className={styles["requirement-item"]}>
                  <div className={styles["requirement-icon"]}>
                    <FaCalendarCheck size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Tempo especial mínimo</h4>
                    <p>15, 20 ou 25 anos de exposição, dependendo do grau de nocividade do agente</p>
                  </div>
                </div>
                <div className={styles["requirement-item"]}>
                  <div className={styles["requirement-icon"]}>
                    <FaFileContract size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Comprovação da exposição</h4>
                    <p>PPP (Perfil Profissiográfico Previdenciário) e outros documentos que comprovem a exposição</p>
                  </div>
                </div>
                <div className={styles["requirement-item"]}>
                  <div className={styles["requirement-icon"]}>
                    <FaClipboardCheck size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Qualidade de segurado</h4>
                    <p>Estar em dia com as contribuições previdenciárias ou dentro do período de graça</p>
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
              <h2 className={styles["section-title"]}>ATIVIDADES MAIS COMUNS</h2>
              <div className={styles["situations-grid"]}>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <GiMining size={32} />
                  </div>
                  <h3>Mineração</h3>
                  <p>Trabalho em minas subterrâneas com exposição a poeiras minerais e agentes químicos</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <GiChemicalDrop size={32} />
                  </div>
                  <h3>Indústria Química</h3>
                  <p>Exposição a produtos químicos, solventes, ácidos e outras substâncias nocivas</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaIndustry size={32} />
                  </div>
                  <h3>Metalurgia</h3>
                  <p>Trabalho com fornos, altas temperaturas, fumos metálicos e ruído excessivo</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <GiRadioactive size={32} />
                  </div>
                  <h3>Radiação</h3>
                  <p>Profissionais da saúde, energia nuclear e outras atividades com exposição à radiação</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaHardHat size={32} />
                  </div>
                  <h3>Construção Civil</h3>
                  <p>Exposição a ruído, vibração, poeiras e produtos químicos em obras</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <IoMdMedical size={32} />
                  </div>
                  <h3>Área da Saúde</h3>
                  <p>Exposição a agentes biológicos, radiação e produtos químicos hospitalares</p>
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
                  <h3>Qual a diferença entre aposentadoria especial e comum?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>A aposentadoria especial permite aposentar-se com tempo reduzido (15, 20 ou 25 anos) devido à exposição a agentes nocivos, enquanto a comum exige 35 anos (homens) ou 30 anos (mulheres) de contribuição.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>Como comprovar a exposição a agentes nocivos?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>Através do PPP (Perfil Profissiográfico Previdenciário), LTCAT (Laudo Técnico das Condições Ambientais do Trabalho), carteira de trabalho e outros documentos que comprovem a atividade especial.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>Posso converter tempo comum em especial?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>Não é possível converter tempo comum em especial. Porém, é possível converter tempo especial em comum com acréscimo de 40% (homens) ou 20% (mulheres) para fins de aposentadoria por tempo de contribuição.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>A empresa não forneceu o PPP. E agora?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>É possível buscar outras formas de comprovação como laudos técnicos, perícias judiciais, testemunhas e documentos que demonstrem a exposição. Um advogado especializado pode ajudar a reunir essas provas.</p>
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

export default AposentadoriaEspecial; 