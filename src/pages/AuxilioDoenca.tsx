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
  FaHeartbeat
} from 'react-icons/fa';
import { RiMentalHealthLine, RiHeartPulseLine } from 'react-icons/ri';
import { BiBrain } from 'react-icons/bi';
import { GiHealing } from 'react-icons/gi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { IoMdMedical } from 'react-icons/io';
import { motion, useInView } from 'framer-motion';
import Head from 'next/head';
import Layout from '@/components/Layout';
import styles from '../styles/AuxilioDoenca.module.css';

// Declaração do tipo gtag para TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const AuxilioDoenca = () => {
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
    window.open('https://wa.me/5548991472830?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20verificar%20meu%20direito%20ao%20auxílio-doença.', '_blank');
  };

  return (
    <Layout>
      <Head>
        <title>Auxílio-Doença INSS | Entenda seus direitos | Consulta jurídica especializada</title>
        <meta
          name="description"
          content="Está doente e não consegue trabalhar? Entenda se você tem direito ao auxílio-doença do INSS. Consulta com advogado especializado em direito previdenciário."
        />
        <meta name="keywords" content="auxílio doença, INSS, benefício previdenciário, incapacidade temporária, advogado previdenciário Orleans, direito previdenciário, auxílio doença negado, benefício INSS Orleans" />
        <meta name="author" content="Karoline Francisco" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://karolinefrancisco.com/auxilio-doenca" />
        <meta property="og:title" content="Auxílio-Doença INSS | Entenda seus direitos | Karoline Francisco" />
        <meta property="og:description" content="Está doente e não consegue trabalhar? Entenda se você tem direito ao auxílio-doença do INSS. Consulta com advogado especializado em direito previdenciário." />
        <meta property="og:site_name" content="Karoline Francisco - Advogada" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://karolinefrancisco.com/auxilio-doenca" />
        <meta property="twitter:title" content="Auxílio-Doença INSS | Entenda seus direitos" />
        <meta property="twitter:description" content="Está doente e não consegue trabalhar? Entenda se você tem direito ao auxílio-doença do INSS." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://karolinefrancisco.com/auxilio-doenca" />
        
        {/* Schema.org markup para a página */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Auxílio-Doença INSS - Entenda seus direitos',
              description: 'Guia completo sobre auxílio-doença do INSS. Entenda se você tem direito ao benefício por incapacidade temporária.',
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
                '@id': 'https://karolinefrancisco.com/auxilio-doenca'
              },
              datePublished: '2024-01-15',
              dateModified: '2024-01-15',
              keywords: 'auxílio doença, INSS, benefício previdenciário, incapacidade temporária, advogado previdenciário'
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
                  Auxílio-Doença INSS
                </h1>
                <p className={styles["subtitle"]}>
                  Está doente e não consegue trabalhar? Você pode ter direito ao auxílio-doença do INSS. 
                  Entenda como funciona este benefício previdenciário e quais são os requisitos necessários.
                </p>
              </div>
              
              <div className={styles["hero-image"]}>
                <div className={styles["image-container"]}>
                  <img 
                    src="/assets/auxilio-doenca.png" 
                    alt="Auxílio-Doença - Benefício por incapacidade temporária" 
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
              <h2 className={styles["section-title"]} style={{ color: '#1a5276' }}>O QUE É O AUXÍLIO-DOENÇA?</h2>
              
              <div className={styles["info-card"]}>
                <h3>
                  <span className={styles["info-card-icon"]}>
                    <FaInfoCircle size={22} />
                  </span>
                  Benefício por incapacidade temporária
                </h3>
                <p>O auxílio-doença é um benefício previdenciário pago pelo INSS aos trabalhadores que ficam temporariamente incapacitados para o trabalho devido a doença ou acidente. <strong>É um direito fundamental do trabalhador que contribui para a Previdência Social.</strong></p>
              </div>
              
              <div className={styles["info-card"]}>
                <h3>
                  <span className={styles["info-card-icon"]}>
                    <HiOutlineDocumentText size={22} />
                  </span>
                  Principal característica
                </h3>
                <p>Diferente da aposentadoria por invalidez, o auxílio-doença é <strong>temporário</strong>. Isso significa que você recebe o benefício enquanto estiver incapacitado para o trabalho, com revisões médicas periódicas para avaliar sua recuperação.</p>
              </div>
              
              <div className={styles["info-card"]}>
                <h3>
                  <span className={styles["info-card-icon"]}>
                    <FaMoneyBillWave size={22} />
                  </span>
                  Valor do benefício
                </h3>
                <p>O valor do auxílio-doença corresponde a 91% do salário de benefício, calculado com base na média das suas contribuições. O benefício não pode ser inferior ao salário mínimo vigente.</p>
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
                    <FaHeartbeat size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Incapacidade temporária</h4>
                    <p>Trabalhadores que estão temporariamente incapacitados para exercer suas atividades laborais</p>
                  </div>
                </div>
                <div className={styles["requirement-item"]}>
                  <div className={styles["requirement-icon"]}>
                    <FaCalendarCheck size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Carência de 12 meses</h4>
                    <p>Ter contribuído por pelo menos 12 meses para o INSS (exceto em casos de acidente ou doenças graves)</p>
                  </div>
                </div>
                <div className={styles["requirement-item"]}>
                  <div className={styles["requirement-icon"]}>
                    <IoMdMedical size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Comprovação médica</h4>
                    <p>Apresentar documentos médicos que comprovem a incapacidade para o trabalho</p>
                  </div>
                </div>
                <div className={styles["requirement-item"]}>
                  <div className={styles["requirement-icon"]}>
                    <FaUserAlt size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Qualidade de segurado</h4>
                    <p>Estar em dia com as contribuições ou dentro do período de graça do INSS</p>
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
                    <RiMentalHealthLine size={32} />
                  </div>
                  <h3>Transtornos mentais</h3>
                  <p>Depressão, ansiedade, síndrome do pânico e outros transtornos que impedem o trabalho</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaHeartbeat size={32} />
                  </div>
                  <h3>Doenças cardíacas</h3>
                  <p>Problemas cardiovasculares que limitam a capacidade de trabalho do segurado</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <GiHealing size={32} />
                  </div>
                  <h3>Lesões ortopédicas</h3>
                  <p>Fraturas, lesões na coluna, problemas articulares que impedem as atividades laborais</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <BiBrain size={32} />
                  </div>
                  <h3>Doenças neurológicas</h3>
                  <p>AVC, epilepsia, esclerose múltipla e outras condições neurológicas incapacitantes</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <IoMdMedical size={32} />
                  </div>
                  <h3>Câncer</h3>
                  <p>Tratamentos oncológicos que impedem temporariamente o exercício das atividades profissionais</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaUserInjured size={32} />
                  </div>
                  <h3>Acidentes</h3>
                  <p>Acidentes de trabalho, trânsito ou domésticos que resultem em incapacidade temporária</p>
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
                  <h3>Quanto tempo posso ficar recebendo auxílio-doença?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>Não há prazo máximo definido em lei. O benefício é mantido enquanto persistir a incapacidade para o trabalho, sendo reavaliado periodicamente pelo INSS através de perícias médicas.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>Posso trabalhar enquanto recebo auxílio-doença?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>Não. O auxílio-doença é incompatível com o trabalho. Se você estiver recebendo o benefício e for flagrado trabalhando, pode ter o benefício cancelado e ainda ter que devolver os valores recebidos.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>E se o INSS negar meu pedido de auxílio-doença?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>É comum o INSS negar pedidos de auxílio-doença, mesmo quando o segurado tem direito. Nesses casos, é possível recorrer administrativamente ou judicialmente. Um advogado especializado pode ajudar a reverter a decisão.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>Preciso de atestado médico para solicitar o benefício?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>Sim. É necessário apresentar documentos médicos que comprovem sua incapacidade, como atestados, laudos, exames e relatórios médicos. Quanto mais documentação, melhor para comprovar seu direito.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>Doenças mentais dão direito ao auxílio-doença?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>Sim. Transtornos mentais como depressão, ansiedade, síndrome do pânico, entre outros, podem dar direito ao auxílio-doença, desde que comprovada a incapacidade para o trabalho através de documentação médica adequada.</p>
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
              <h2 className={styles["contact-title"]}>FICOU COM DÚVIDA? ENTRE EM CONTATO COM UM ESPECIALISTA EM DIREITO PREVIDENCIÁRIO</h2>
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

export default AuxilioDoenca; 