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
  FaBaby,
  FaHome,
  FaUserTie,
  FaHeart,
  FaClock,
  FaCalculator,
  FaIdCard
} from 'react-icons/fa';
import { RiMentalHealthLine, RiHeartPulseLine } from 'react-icons/ri';
import { BiBrain } from 'react-icons/bi';
import { GiHealing } from 'react-icons/gi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { IoMdMedical } from 'react-icons/io';
import { motion, useInView } from 'framer-motion';
import Head from 'next/head';
import Layout from '@/components/Layout';
import styles from '../styles/AposentadoriaIdade.module.css';

// Declaração do tipo gtag para TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const AposentadoriaIdade = () => {
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
    window.open('https://wa.me/5548991472830?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20verificar%20meu%20direito%20à%20aposentadoria%20por%20idade.', '_blank');
  };

  return (
    <Layout>
      <Head>
        <title>Aposentadoria por Idade INSS | Entenda seus direitos | Consulta jurídica especializada</title>
        <meta
          name="description"
          content="Atingiu a idade mínima para aposentadoria? Entenda se você tem direito à aposentadoria por idade do INSS. Consulta com advogado especializado em direito previdenciário."
        />
        <meta name="keywords" content="aposentadoria por idade, INSS, benefício previdenciário, aposentadoria, idade mínima, advogado previdenciário Orleans, direito previdenciário, aposentadoria INSS Orleans" />
        <meta name="author" content="Karoline Francisco" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://karolinefrancisco.com/aposentadoria-idade" />
        <meta property="og:title" content="Aposentadoria por Idade INSS | Entenda seus direitos | Karoline Francisco" />
        <meta property="og:description" content="Atingiu a idade mínima para aposentadoria? Entenda se você tem direito à aposentadoria por idade do INSS. Consulta com advogado especializado em direito previdenciário." />
        <meta property="og:site_name" content="Karoline Francisco - Advogada" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://karolinefrancisco.com/aposentadoria-idade" />
        <meta property="twitter:title" content="Aposentadoria por Idade INSS | Entenda seus direitos" />
        <meta property="twitter:description" content="Atingiu a idade mínima para aposentadoria? Entenda se você tem direito à aposentadoria por idade do INSS." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://karolinefrancisco.com/aposentadoria-idade" />
        
        {/* Schema.org markup para a página */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Aposentadoria por Idade INSS - Entenda seus direitos',
              description: 'Guia completo sobre aposentadoria por idade do INSS. Entenda se você tem direito ao benefício por idade e tempo de contribuição.',
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
                '@id': 'https://karolinefrancisco.com/aposentadoria-idade'
              },
              datePublished: '2024-01-15',
              dateModified: '2024-01-15',
              keywords: 'aposentadoria por idade, INSS, benefício previdenciário, aposentadoria, idade mínima'
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
                  Aposentadoria por Idade INSS
                </h1>
                <p className={styles["subtitle"]}>
                  Atingiu a idade mínima para se aposentar? Você pode ter direito à aposentadoria por idade do INSS. 
                  Entenda como funciona este benefício e quais são os requisitos necessários.
                </p>
              </div>
              
              <div className={styles["hero-image"]}>
                <div className={styles["image-container"]}>
                  <img 
                    src="/assets/aposentadoria-por-idade.png" 
                    alt="Aposentadoria por Idade - Benefício previdenciário por idade mínima" 
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
              <h2 className={styles["section-title"]} style={{ color: '#1a5276' }}>O QUE É A APOSENTADORIA POR IDADE?</h2>
              
              <div className={styles["info-card"]}>
                <h3>
                  <span className={styles["info-card-icon"]}>
                    <FaInfoCircle size={22} />
                  </span>
                  Benefício permanente por idade
                </h3>
                <p>A aposentadoria por idade é um benefício previdenciário pago pelo INSS aos segurados que atingiram a idade mínima exigida e cumpriram o tempo mínimo de contribuição. <strong>É um direito fundamental do trabalhador brasileiro.</strong></p>
              </div>
              
              <div className={styles["info-card"]}>
                <h3>
                  <span className={styles["info-card-icon"]}>
                    <FaClock size={22} />
                  </span>
                  Idades mínimas atuais
                </h3>
                <p>Após a reforma da previdência, a idade mínima é de <strong>65 anos para homens</strong> e <strong>62 anos para mulheres</strong>. Além disso, é necessário ter pelo menos 15 anos de contribuição ao INSS.</p>
              </div>
              
              <div className={styles["info-card"]}>
                <h3>
                  <span className={styles["info-card-icon"]}>
                    <FaCalculator size={22} />
                  </span>
                  Valor do benefício
                </h3>
                <p>O valor é calculado com base na média de todas as contribuições desde julho de 1994, aplicando-se um percentual que varia conforme o tempo de contribuição, com valor mínimo de um salário mínimo.</p>
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
                    <FaClock size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Idade mínima</h4>
                    <p>65 anos para homens e 62 anos para mulheres (regra atual após a reforma da previdência)</p>
                  </div>
                </div>
                <div className={styles["requirement-item"]}>
                  <div className={styles["requirement-icon"]}>
                    <FaCalendarCheck size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Tempo de contribuição</h4>
                    <p>Mínimo de 15 anos de contribuição ao INSS, independente do sexo</p>
                  </div>
                </div>
                <div className={styles["requirement-item"]}>
                  <div className={styles["requirement-icon"]}>
                    <HiOutlineDocumentText size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Documentação necessária</h4>
                    <p>RG, CPF, carteira de trabalho, carnês de contribuição e comprovantes de atividade rural (se houver)</p>
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
                    <FaUserTie size={32} />
                  </div>
                  <h3>Trabalhador urbano</h3>
                  <p>Empregados com carteira assinada, autônomos e empresários que contribuíram para o INSS</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaHome size={32} />
                  </div>
                  <h3>Trabalhador rural</h3>
                  <p>Agricultores familiares, pescadores artesanais e trabalhadores rurais em regime de economia familiar</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaIdCard size={32} />
                  </div>
                  <h3>Contribuinte individual</h3>
                  <p>Profissionais autônomos, empresários e prestadores de serviços que contribuem por conta própria</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaFileContract size={32} />
                  </div>
                  <h3>Empregado doméstico</h3>
                  <p>Trabalhadores domésticos com carteira assinada que contribuíram para a previdência social</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaCalculator size={32} />
                  </div>
                  <h3>Regras de transição</h3>
                  <p>Quem estava próximo de se aposentar antes da reforma pode ter direito a regras mais vantajosas</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaMoneyBillWave size={32} />
                  </div>
                  <h3>Revisão de benefício</h3>
                  <p>Aposentados que acreditam que o valor está incorreto podem solicitar revisão do cálculo</p>
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
                  <h3>Qual é a idade mínima para aposentadoria por idade?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>Após a reforma da previdência, a idade mínima é de 65 anos para homens e 62 anos para mulheres. Além disso, é necessário ter pelo menos 15 anos de contribuição ao INSS.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>Como é calculado o valor da aposentadoria por idade?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>O valor é calculado com base na média de todas as contribuições desde julho de 1994. Aplica-se 60% dessa média mais 2% para cada ano que exceder 15 anos de contribuição para mulheres e 20 anos para homens.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>Posso me aposentar com menos de 15 anos de contribuição?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>Não. O tempo mínimo de contribuição de 15 anos é obrigatório para ter direito à aposentadoria por idade. Quem não atingir esse tempo não conseguirá se aposentar por essa modalidade.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>Existe diferença entre trabalhador urbano e rural?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>Sim. Trabalhadores rurais em regime de economia familiar podem se aposentar aos 60 anos (homens) e 55 anos (mulheres), mantendo as regras anteriores à reforma da previdência.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>O que são as regras de transição?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>São regras especiais para quem já contribuía antes da reforma da previdência (2019). Podem permitir aposentadoria com idades menores ou cálculos mais vantajosos, dependendo do tempo de contribuição já cumprido.</p>
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

export default AposentadoriaIdade; 