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
  FaHeart
} from 'react-icons/fa';
import { RiMentalHealthLine, RiHeartPulseLine } from 'react-icons/ri';
import { BiBrain } from 'react-icons/bi';
import { GiHealing } from 'react-icons/gi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { IoMdMedical } from 'react-icons/io';
import { motion, useInView } from 'framer-motion';
import Head from 'next/head';
import Layout from '@/components/Layout';
import styles from '../styles/AuxilioMaternidade.module.css';

// Declaração do tipo gtag para TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const AuxilioMaternidade = () => {
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
    window.open('https://wa.me/5548991472830?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20verificar%20meu%20direito%20ao%20salário-maternidade.', '_blank');
  };

  return (
    <Layout>
      <Head>
        <title>Salário-Maternidade INSS | Entenda seus direitos | Consulta jurídica especializada</title>
        <meta
          name="description"
          content="Está grávida ou adotou uma criança? Entenda se você tem direito ao salário-maternidade do INSS. Consulta com advogado especializado em direito previdenciário."
        />
        <meta name="keywords" content="salário maternidade, auxílio maternidade, INSS, benefício previdenciário, licença maternidade, advogado previdenciário Orleans, direito previdenciário, maternidade INSS Orleans" />
        <meta name="author" content="Karoline Francisco" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://karolinefrancisco.com/auxilio-maternidade" />
        <meta property="og:title" content="Salário-Maternidade INSS | Entenda seus direitos | Karoline Francisco" />
        <meta property="og:description" content="Está grávida ou adotou uma criança? Entenda se você tem direito ao salário-maternidade do INSS. Consulta com advogado especializado em direito previdenciário." />
        <meta property="og:site_name" content="Karoline Francisco - Advogada" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://karolinefrancisco.com/auxilio-maternidade" />
        <meta property="twitter:title" content="Salário-Maternidade INSS | Entenda seus direitos" />
        <meta property="twitter:description" content="Está grávida ou adotou uma criança? Entenda se você tem direito ao salário-maternidade do INSS." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://karolinefrancisco.com/auxilio-maternidade" />
        
        {/* Schema.org markup para a página */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Salário-Maternidade INSS - Entenda seus direitos',
              description: 'Guia completo sobre salário-maternidade do INSS. Entenda se você tem direito ao benefício por maternidade, adoção ou guarda.',
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
                '@id': 'https://karolinefrancisco.com/auxilio-maternidade'
              },
              datePublished: '2024-01-15',
              dateModified: '2024-01-15',
              keywords: 'salário maternidade, auxílio maternidade, INSS, benefício previdenciário, licença maternidade'
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
              <h2 className={styles["section-title"]} style={{ color: '#1a5276' }}>O QUE É O SALÁRIO-MATERNIDADE?</h2>
              
              <div className={styles["info-card"]}>
                <h3>
                  <span className={styles["info-card-icon"]}>
                    <FaInfoCircle size={22} />
                  </span>
                  Benefício por maternidade e adoção
                </h3>
                <p>O salário-maternidade é um benefício previdenciário pago pelo INSS às seguradas que acabaram de ter um filho, seja por parto ou adoção, ou que obtiveram guarda judicial para fins de adoção. <strong>É um direito fundamental da mulher trabalhadora.</strong></p>
              </div>
              
              <div className={styles["info-card"]}>
                <h3>
                  <span className={styles["info-card-icon"]}>
                    <HiOutlineDocumentText size={22} />
                  </span>
                  Principal característica
                </h3>
                <p>O benefício é pago durante o período de <strong>afastamento do trabalho</strong> por motivo de parto, adoção ou guarda judicial. O período padrão é de 120 dias, podendo ser estendido em casos especiais.</p>
              </div>
              
              <div className={styles["info-card"]}>
                <h3>
                  <span className={styles["info-card-icon"]}>
                    <FaMoneyBillWave size={22} />
                  </span>
                  Valor do benefício
                </h3>
                <p>Para empregadas com carteira assinada, o valor corresponde ao salário integral. Para contribuintes individuais e facultativas, é calculado com base na média das contribuições, limitado ao teto do INSS.</p>
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
                    <FaBaby size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Seguradas do INSS</h4>
                    <p>Mulheres que contribuem para a Previdência Social como empregadas, autônomas, domésticas ou rurais</p>
                  </div>
                </div>
                <div className={styles["requirement-item"]}>
                  <div className={styles["requirement-icon"]}>
                    <FaCalendarCheck size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Carência mínima</h4>
                    <p>10 meses de contribuição para parto normal, sem carência para adoção ou em casos de parto prematuro</p>
                  </div>
                </div>
                <div className={styles["requirement-item"]}>
                  <div className={styles["requirement-icon"]}>
                    <HiOutlineDocumentText size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Documentação necessária</h4>
                    <p>Certidão de nascimento da criança, atestado médico ou documentos de adoção/guarda judicial</p>
                  </div>
                </div>
                <div className={styles["requirement-item"]}>
                  <div className={styles["requirement-icon"]}>
                    <FaUserAlt size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Qualidade de segurada</h4>
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
                    <FaBaby size={32} />
                  </div>
                  <h3>Parto normal ou cesárea</h3>
                  <p>Nascimento de filho, seja parto normal ou cesárea, com direito a 120 dias de benefício</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaHeart size={32} />
                  </div>
                  <h3>Adoção de criança</h3>
                  <p>Adoção de criança de qualquer idade, com direito ao mesmo período de benefício</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaFileContract size={32} />
                  </div>
                  <h3>Guarda judicial</h3>
                  <p>Obtenção de guarda judicial para fins de adoção, mesmo que a adoção não se concretize</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <IoMdMedical size={32} />
                  </div>
                  <h3>Parto prematuro</h3>
                  <p>Nascimento prematuro, incluindo casos de natimorto após 23 semanas de gestação</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaUserTie size={32} />
                  </div>
                  <h3>Trabalhadoras domésticas</h3>
                  <p>Empregadas domésticas com carteira assinada têm os mesmos direitos das demais trabalhadoras</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaHome size={32} />
                  </div>
                  <h3>Contribuintes individuais</h3>
                  <p>Autônomas, empresárias e contribuintes facultativas também têm direito ao benefício</p>
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
                  <h3>Por quanto tempo posso receber o salário-maternidade?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>O período padrão é de 120 dias (4 meses). Em casos de parto prematuro, o período pode ser estendido. Para adoção, o período é o mesmo, independente da idade da criança adotada.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>Posso trabalhar enquanto recebo salário-maternidade?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>Não. O salário-maternidade é incompatível com o trabalho durante o período de licença. O objetivo é garantir o cuidado com o bebê e a recuperação da mãe.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>E se o INSS negar meu pedido de salário-maternidade?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>É possível recorrer da decisão administrativamente ou judicialmente. Muitas vezes a negativa ocorre por falta de documentação adequada ou interpretação incorreta das regras pelo INSS.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>Preciso estar trabalhando para ter direito ao benefício?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>Não necessariamente. Você precisa ter qualidade de segurada, ou seja, estar contribuindo ou dentro do período de graça. Mesmo desempregadas podem ter direito se estiverem nessa condição.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>O pai também tem direito ao salário-maternidade?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>Em casos específicos, sim. Se a mãe falecer durante o parto ou licença, o pai pode receber o benefício pelo período restante. Para adoção, apenas um dos pais pode receber o benefício.</p>
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

export default AuxilioMaternidade; 