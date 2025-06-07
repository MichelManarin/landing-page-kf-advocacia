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
  FaWheelchair,
  FaUserTie
} from 'react-icons/fa';
import { RiMentalHealthLine, RiHeartPulseLine } from 'react-icons/ri';
import { BiBrain } from 'react-icons/bi';
import { GiHealing } from 'react-icons/gi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { IoMdMedical } from 'react-icons/io';
import { motion, useInView } from 'framer-motion';
import Head from 'next/head';
import Layout from '@/components/Layout';
import styles from '../styles/AposentadoriaInvalidez.module.css';

// Declaração do tipo gtag para TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const AposentadoriaInvalidez = () => {
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
    window.open('https://wa.me/5548991472830?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20verificar%20meu%20direito%20à%20aposentadoria%20por%20invalidez.', '_blank');
  };

  return (
    <Layout>
      <Head>
        <title>Aposentadoria por Invalidez INSS | Entenda seus direitos | Consulta jurídica especializada</title>
        <meta
          name="description"
          content="Está incapacitado permanentemente para o trabalho? Entenda se você tem direito à aposentadoria por invalidez do INSS. Consulta com advogado especializado."
        />
        <meta name="keywords" content="aposentadoria por invalidez, INSS, benefício previdenciário, incapacidade permanente, advogado previdenciário Orleans, direito previdenciário, aposentadoria invalidez INSS Orleans" />
        <meta name="author" content="Karoline Francisco" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://karolinefrancisco.com/aposentadoria-invalidez" />
        <meta property="og:title" content="Aposentadoria por Invalidez INSS | Entenda seus direitos | Karoline Francisco" />
        <meta property="og:description" content="Está incapacitado permanentemente para o trabalho? Entenda se você tem direito à aposentadoria por invalidez do INSS. Consulta com advogado especializado." />
        <meta property="og:site_name" content="Karoline Francisco - Advogada" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://karolinefrancisco.com/aposentadoria-invalidez" />
        <meta property="twitter:title" content="Aposentadoria por Invalidez INSS | Entenda seus direitos" />
        <meta property="twitter:description" content="Está incapacitado permanentemente para o trabalho? Entenda se você tem direito à aposentadoria por invalidez do INSS." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://karolinefrancisco.com/aposentadoria-invalidez" />
        
        {/* Schema.org markup para a página */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Aposentadoria por Invalidez INSS - Entenda seus direitos',
              description: 'Guia completo sobre aposentadoria por invalidez do INSS. Entenda se você tem direito ao benefício por incapacidade permanente.',
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
                '@id': 'https://karolinefrancisco.com/aposentadoria-invalidez'
              },
              datePublished: '2024-01-15',
              dateModified: '2024-01-15',
              keywords: 'aposentadoria por invalidez, INSS, benefício previdenciário, incapacidade permanente, advogado previdenciário'
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
                  Aposentadoria por Invalidez INSS
                </h1>
                <p className={styles["subtitle"]}>
                  Ficou permanentemente incapacitado para o trabalho? Você pode ter direito à aposentadoria por invalidez do INSS. 
                  Entenda como funciona este benefício e quais são os requisitos necessários.
                </p>
              </div>
              
              <div className={styles["hero-image"]}>
                <div className={styles["image-container"]}>
                  <img 
                    src="/assets/aposentadoria-invalidez.png" 
                    alt="Aposentadoria por Invalidez - Benefício por incapacidade total e permanente" 
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
              <h2 className={styles["section-title"]} style={{ color: '#1a5276' }}>O QUE É A APOSENTADORIA POR INVALIDEZ?</h2>
              
              <div className={styles["info-card"]}>
                <h3>
                  <span className={styles["info-card-icon"]}>
                    <FaInfoCircle size={22} />
                  </span>
                  Benefício para incapacidade total
                </h3>
                <p>A aposentadoria por invalidez é um benefício previdenciário pago pelo INSS aos trabalhadores que ficaram <strong>permanentemente incapacitados para qualquer atividade laboral</strong>. É destinada a quem não pode mais exercer nenhum tipo de trabalho devido a doença ou acidente.</p>
              </div>
              
              <div className={styles["info-card"]}>
                <h3>
                  <span className={styles["info-card-icon"]}>
                    <HiOutlineDocumentText size={22} />
                  </span>
                  Principal característica
                </h3>
                <p>Diferente do auxílio-doença, a aposentadoria por invalidez é <strong>permanente e incompatível com o trabalho</strong>. O segurado não pode exercer atividade remunerada enquanto recebe este benefício, pois pressupõe incapacidade total e definitiva.</p>
              </div>
              
              <div className={styles["info-card"]}>
                <h3>
                  <span className={styles["info-card-icon"]}>
                    <FaMoneyBillWave size={22} />
                  </span>
                  Valor do benefício
                </h3>
                <p>O valor da aposentadoria por invalidez corresponde a <strong>100% do salário de benefício</strong>. Em casos especiais, quando o segurado necessita de assistência permanente de outra pessoa, pode haver acréscimo de 25% no valor.</p>
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
                    <FaWheelchair size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Incapacidade total e permanente</h4>
                    <p>Trabalhadores que ficaram permanentemente incapacitados para qualquer atividade laboral</p>
                  </div>
                </div>
                <div className={styles["requirement-item"]}>
                  <div className={styles["requirement-icon"]}>
                    <FaCalendarCheck size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Carência de 12 meses</h4>
                    <p>É necessário ter contribuído por pelo menos 12 meses (exceto em casos de acidente ou doenças graves)</p>
                  </div>
                </div>
                <div className={styles["requirement-item"]}>
                  <div className={styles["requirement-icon"]}>
                    <IoMdMedical size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Comprovação médica</h4>
                    <p>A incapacidade deve ser comprovada através de perícia médica do INSS</p>
                  </div>
                </div>
                <div className={styles["requirement-item"]}>
                  <div className={styles["requirement-icon"]}>
                    <FaUserTie size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Qualidade de segurado</h4>
                    <p>Deve estar em dia com as contribuições ou dentro do período de graça</p>
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
                    <BiBrain size={32} />
                  </div>
                  <h3>Doenças neurológicas</h3>
                  <p>AVC, Alzheimer, Parkinson, esclerose múltipla e outras condições que impedem o trabalho</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <RiHeartPulseLine size={32} />
                  </div>
                  <h3>Problemas cardíacos graves</h3>
                  <p>Insuficiência cardíaca, infarto com sequelas graves e outras cardiopatias incapacitantes</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaWheelchair size={32} />
                  </div>
                  <h3>Deficiências físicas severas</h3>
                  <p>Amputações, paralisia, lesões medulares e outras condições que impedem qualquer trabalho</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <RiMentalHealthLine size={32} />
                  </div>
                  <h3>Transtornos mentais graves</h3>
                  <p>Esquizofrenia, transtorno bipolar grave, depressão severa e outros transtornos incapacitantes</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <IoMdMedical size={32} />
                  </div>
                  <h3>Câncer em estágio avançado</h3>
                  <p>Neoplasias malignas que impedem permanentemente a capacidade de trabalho</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <GiHealing size={32} />
                  </div>
                  <h3>Doenças degenerativas</h3>
                  <p>Artrite reumatoide, fibromialgia severa e outras condições progressivas incapacitantes</p>
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
                  <h3>Posso trabalhar recebendo aposentadoria por invalidez?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>Não. A aposentadoria por invalidez é incompatível com qualquer atividade remunerada, pois pressupõe incapacidade total e permanente para o trabalho. Se o segurado voltar a trabalhar, o benefício será suspenso.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>Qual a diferença entre aposentadoria por invalidez e auxílio-doença?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>O auxílio-doença é temporário e para incapacidade parcial, enquanto a aposentadoria por invalidez é permanente e para incapacidade total. O auxílio-doença pode ser compatível com algumas atividades, já a aposentadoria por invalidez não.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>É possível converter auxílio-doença em aposentadoria por invalidez?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>Sim. Se durante o recebimento do auxílio-doença ficar comprovado que a incapacidade é permanente e total, o benefício pode ser convertido em aposentadoria por invalidez através de nova perícia médica.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>O que é o acréscimo de 25% na aposentadoria por invalidez?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>É um adicional concedido quando o aposentado por invalidez necessita de assistência permanente de outra pessoa para atividades básicas da vida diária, como se alimentar, se vestir ou se locomover.</p>
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

export default AposentadoriaInvalidez; 