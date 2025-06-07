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
import styles from '../styles/AuxilioAcidente.module.css';

// Declaração do tipo gtag para TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const AuxilioAcidente = () => {
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
    window.open('https://wa.me/5548991472830?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20verificar%20meu%20direito%20ao%20auxílio-acidente.', '_blank');
  };

  return (
    <Layout>
      <Head>
        <title>Auxílio-Acidente INSS | Entenda seus direitos | Consulta jurídica especializada</title>
        <meta
          name="description"
          content="Sofreu um acidente e ficou com sequelas? Entenda se você tem direito ao auxílio-acidente do INSS mesmo continuando a trabalhar. Consulta com advogado especializado."
        />
        <meta name="keywords" content="auxílio acidente, INSS, benefício previdenciário, sequelas acidente, advogado previdenciário Orleans, direito previdenciário, auxílio acidente trabalhando, benefício INSS Orleans" />
        <meta name="author" content="Karoline Francisco" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://karolinefrancisco.com/auxilio-acidente" />
        <meta property="og:title" content="Auxílio-Acidente INSS | Entenda seus direitos | Karoline Francisco" />
        <meta property="og:description" content="Sofreu um acidente e ficou com sequelas? Entenda se você tem direito ao auxílio-acidente do INSS mesmo continuando a trabalhar. Consulta com advogado especializado." />
        <meta property="og:site_name" content="Karoline Francisco - Advogada" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://karolinefrancisco.com/auxilio-acidente" />
        <meta property="twitter:title" content="Auxílio-Acidente INSS | Entenda seus direitos" />
        <meta property="twitter:description" content="Sofreu um acidente e ficou com sequelas? Entenda se você tem direito ao auxílio-acidente do INSS mesmo continuando a trabalhar." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://karolinefrancisco.com/auxilio-acidente" />
        
        {/* Schema.org markup para a página */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Auxílio-Acidente INSS - Entenda seus direitos',
              description: 'Guia completo sobre auxílio-acidente do INSS. Entenda se você tem direito ao benefício mesmo continuando a trabalhar.',
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
                '@id': 'https://karolinefrancisco.com/auxilio-acidente'
              },
              datePublished: '2024-01-15',
              dateModified: '2024-01-15',
              keywords: 'auxílio acidente, INSS, benefício previdenciário, sequelas acidente, advogado previdenciário'
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
                  Auxílio-Acidente INSS
                </h1>
                <p className={styles["subtitle"]}>
                  Sofreu um acidente e ficou com sequelas? Você pode ter direito ao auxílio-acidente mesmo continuando a trabalhar. 
                  Entenda como funciona este benefício previdenciário e quais são os requisitos necessários.
                </p>
              </div>
              
              <div className={styles["hero-image"]}>
                <div className={styles["image-container"]}>
                  <img 
                    src="/assets/auxilio-acidente.png" 
                    alt="Auxílio-Acidente - Trabalhador com sequelas de acidente" 
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
              <h2 className={styles["section-title"]} style={{ color: '#1a5276' }}>O QUE É O AUXÍLIO-ACIDENTE?</h2>
              
              <div className={styles["info-card"]}>
                <h3>
                  <span className={styles["info-card-icon"]}>
                    <FaInfoCircle size={22} />
                  </span>
                  Um direito pouco conhecido
                </h3>
                <p>O auxílio-acidente é um benefício previdenciário pago pelo INSS aos trabalhadores que sofreram acidentes (de qualquer natureza) e ficaram com sequelas permanentes que reduzem sua capacidade para o trabalho. <strong>É um benefício que muitos têm direito mas desconhecem.</strong></p>
              </div>
              
              <div className={styles["info-card"]}>
                <h3>
                  <span className={styles["info-card-icon"]}>
                    <HiOutlineDocumentText size={22} />
                  </span>
                  Principal característica
                </h3>
                <p>Diferente de outros benefícios, o auxílio-acidente é <strong>compatível com o trabalho</strong>. Isso significa que você pode continuar trabalhando normalmente e ainda assim receber este benefício mensal como uma compensação pela redução da sua capacidade laboral.</p>
              </div>
              
              <div className={styles["info-card"]}>
                <h3>
                  <span className={styles["info-card-icon"]}>
                    <FaMoneyBillWave size={22} />
                  </span>
                  Valor do benefício
                </h3>
                <p>Pela regra atual, o Auxílio-Acidente é pago mensalmente e seu valor é calculado com base em um percentual do salário de benefício, conforme as normas do INSS.</p>
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
                    <FaUserInjured size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Acidentados com sequelas</h4>
                    <p>Trabalhadores que sofreram acidentes (de qualquer natureza) e possuem sequelas permanentes</p>
                  </div>
                </div>
                <div className={styles["requirement-item"]}>
                  <div className={styles["requirement-icon"]}>
                    <FaCheck size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Segurados com capacidade reduzida</h4>
                    <p>Segurados do INSS que têm sequelas que reduzem sua capacidade para o trabalho habitual</p>
                  </div>
                </div>
                <div className={styles["requirement-item"]}>
                  <div className={styles["requirement-icon"]}>
                    <FaClipboardCheck size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Pós auxílio-doença</h4>
                    <p>Pessoas que já receberam auxílio-doença e após a alta médica ficaram com limitações</p>
                  </div>
                </div>
                <div className={styles["requirement-item"]}>
                  <div className={styles["requirement-icon"]}>
                    <FaInfoCircle size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Sem carência</h4>
                    <p>Não é necessário tempo mínimo de contribuição (carência) para ter direito ao benefício</p>
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
                    <FaUserInjured size={32} />
                  </div>
                  <h3>Membro amputado</h3>
                  <p>Redução de movimentos em braços, mãos, pernas ou pés, que reduzem a capacidade de trabalho</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaExclamationCircle size={32} />
                  </div>
                  <h3>Problemas na coluna</h3>
                  <p>Hérnias de disco, lombalgias crônicas ou outras condições que que reduzem a capacidade de trabalho</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaFileContract size={32} />
                  </div>
                  <h3>Sequelas de fraturas</h3>
                  <p>Limitações decorrentes de fraturas ósseas que deixaram algum tipo de comprometimento</p>
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
                  <h3>É possível receber o auxílio-acidente mesmo trabalhando?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>Sim. Uma das principais características do auxílio-acidente é justamente ser compatível com o trabalho. Você pode continuar trabalhando normalmente e ainda assim receber este benefício como compensação pela redução da sua capacidade laboral.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>Qualquer tipo de acidente dá direito ao benefício?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>O acidente pode ser de qualquer natureza (trabalho, trânsito, doméstico, etc.), desde que resulte em sequelas permanentes que reduzam a capacidade para o trabalho. O importante são as consequências do acidente, não sua origem.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>Há prazo para solicitar o auxílio-acidente?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>Você tem até 5 anos pra correr atrás dos valores atrasados, mas o direito de pedir o benefício não acaba. O ideal é procurar um advogado o quanto antes pra não perder dinheiro.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>O INSS costuma negar inicialmente esse benefício?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>Infelizmente, é comum que o INSS negue inicialmente muitos pedidos de auxílio-acidente, mesmo quando o segurado tem direito. Por isso, muitos recorrem à justiça para ter seu direito reconhecido, contando com o apoio de advogados especializados.</p>
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

export default AuxilioAcidente; 