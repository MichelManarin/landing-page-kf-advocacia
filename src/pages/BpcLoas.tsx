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
  FaShieldAlt
} from 'react-icons/fa';
import { RiMentalHealthLine, RiHeartPulseLine } from 'react-icons/ri';
import { BiBrain } from 'react-icons/bi';
import { GiReceiveMoney } from 'react-icons/gi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { IoMdMedical } from 'react-icons/io';
import { motion, useInView } from 'framer-motion';
import Head from 'next/head';
import Layout from '@/components/Layout';
import styles from '../styles/BpcLoas.module.css';

// Declaração do tipo gtag para TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const BpcLoas = () => {
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
    window.open('https://wa.me/5548991472830?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20verificar%20meu%20direito%20ao%20BPC%20LOAS.', '_blank');
  };

  return (
    <Layout>
      <Head>
        <title>BPC LOAS | Benefício Assistencial | Entenda seus direitos | Consulta jurídica especializada</title>
        <meta
          name="description"
          content="Idoso ou pessoa com deficiência de baixa renda? Entenda se você tem direito ao BPC LOAS, benefício assistencial de um salário mínimo. Consulta com advogado especializado."
        />
        <meta name="keywords" content="BPC LOAS, benefício assistencial, idoso, pessoa com deficiência, baixa renda, salário mínimo, advogado previdenciário Orleans, direito assistencial, BPC LOAS Orleans" />
        <meta name="author" content="Karoline Francisco" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://karolinefrancisco.com/bpc-loas" />
        <meta property="og:title" content="BPC LOAS | Benefício Assistencial | Entenda seus direitos | Karoline Francisco" />
        <meta property="og:description" content="Idoso ou pessoa com deficiência de baixa renda? Entenda se você tem direito ao BPC LOAS, benefício assistencial de um salário mínimo. Consulta com advogado especializado." />
        <meta property="og:site_name" content="Karoline Francisco - Advogada" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://karolinefrancisco.com/bpc-loas" />
        <meta property="twitter:title" content="BPC LOAS | Benefício Assistencial | Entenda seus direitos" />
        <meta property="twitter:description" content="Idoso ou pessoa com deficiência de baixa renda? Entenda se você tem direito ao BPC LOAS, benefício assistencial de um salário mínimo." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://karolinefrancisco.com/bpc-loas" />
        
        {/* Schema.org markup para a página */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'BPC LOAS - Benefício Assistencial - Entenda seus direitos',
              description: 'Guia completo sobre BPC LOAS. Entenda se você tem direito ao benefício assistencial para idosos e pessoas com deficiência.',
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
                '@id': 'https://karolinefrancisco.com/bpc-loas'
              },
              datePublished: '2024-01-15',
              dateModified: '2024-01-15',
              keywords: 'BPC LOAS, benefício assistencial, idoso, pessoa com deficiência, advogado previdenciário'
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
                  BPC LOAS
                </h1>
                <p className={styles["subtitle"]}>
                  É idoso ou pessoa com deficiência de baixa renda? Você pode ter direito ao BPC LOAS, 
                  benefício assistencial de um salário mínimo. Entenda como funciona e quais são os requisitos.
                </p>
              </div>
              
              <div className={styles["hero-image"]}>
                <div className={styles["image-container"]}>
                  <img 
                    src="/assets/loas.png" 
                    alt="BPC LOAS - Benefício assistencial para idosos e pessoas com deficiência" 
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
              <h2 className={styles["section-title"]} style={{ color: '#1a5276' }}>O QUE É O BPC LOAS?</h2>
              
              <div className={styles["info-card"]}>
                <h3>
                  <span className={styles["info-card-icon"]}>
                    <FaInfoCircle size={22} />
                  </span>
                  Benefício assistencial para quem precisa
                </h3>
                <p>O BPC LOAS é um benefício assistencial garantido pela Constituição Federal que paga <strong>um salário mínimo mensal</strong> para idosos a partir de 65 anos e pessoas com deficiência que comprovem não possuir meios de prover a própria manutenção nem tê-la provida por sua família.</p>
              </div>
              
              <div className={styles["info-card"]}>
                <h3>
                  <span className={styles["info-card-icon"]}>
                    <HiOutlineDocumentText size={22} />
                  </span>
                  Não precisa ter contribuído
                </h3>
                <p>Diferente dos benefícios previdenciários, o BPC LOAS <strong>não exige contribuição prévia</strong> ao INSS. É um direito social garantido a quem se encontra em situação de vulnerabilidade social e econômica, independentemente de ter trabalhado com carteira assinada.</p>
              </div>
              
              <div className={styles["info-card"]}>
                <h3>
                  <span className={styles["info-card-icon"]}>
                    <FaMoneyBillWave size={22} />
                  </span>
                  Valor e características
                </h3>
                <p>O valor do BPC LOAS é de <strong>um salário mínimo</strong> e não gera direito ao 13º salário. O benefício é intransferível, não deixa pensão por morte e pode ser revisado a cada dois anos para verificar a manutenção das condições que deram origem ao direito.</p>
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
                    <FaUserAlt size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Idade ou deficiência</h4>
                    <p>Idosos a partir de 65 anos ou pessoas com deficiência de qualquer idade que impeça a vida independente e o trabalho</p>
                  </div>
                </div>
                <div className={styles["requirement-item"]}>
                  <div className={styles["requirement-icon"]}>
                    <GiReceiveMoney size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Baixa renda familiar</h4>
                    <p>Renda familiar per capita inferior a 1/4 do salário mínimo (atualmente R$ 330,00)</p>
                  </div>
                </div>
                <div className={styles["requirement-item"]}>
                  <div className={styles["requirement-icon"]}>
                    <FaFileContract size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Inscrição no CadÚnico</h4>
                    <p>Estar inscrito no Cadastro Único para Programas Sociais (CadÚnico) com dados atualizados</p>
                  </div>
                </div>
                <div className={styles["requirement-item"]}>
                  <div className={styles["requirement-icon"]}>
                    <FaShieldAlt size={24} />
                  </div>
                  <div className={styles["requirement-content"]}>
                    <h4>Não receber outros benefícios</h4>
                    <p>Não receber nenhum benefício previdenciário ou assistencial, exceto auxílio-acidente e pensão especial</p>
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
                    <FaUserFriends size={32} />
                  </div>
                  <h3>Idosos em Vulnerabilidade</h3>
                  <p>Pessoas com 65 anos ou mais que não possuem renda suficiente para se manter</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaUserFriends size={32} />
                  </div>
                  <h3>Deficiência Física</h3>
                  <p>Pessoas com deficiências físicas que impedem o trabalho e a vida independente</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <RiMentalHealthLine size={32} />
                  </div>
                  <h3>Deficiência Intelectual</h3>
                  <p>Pessoas com deficiência intelectual ou transtornos mentais que limitam a capacidade laboral</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <IoMdMedical size={32} />
                  </div>
                  <h3>Doenças Graves</h3>
                  <p>Portadores de doenças graves que causam incapacidade permanente para o trabalho</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaUserFriends size={32} />
                  </div>
                  <h3>Família de Baixa Renda</h3>
                  <p>Famílias com renda per capita inferior a 1/4 do salário mínimo</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaHome size={32} />
                  </div>
                  <h3>Situação de Rua</h3>
                  <p>Pessoas em situação de rua ou extrema vulnerabilidade social</p>
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
                  <h3>Qual a diferença entre BPC LOAS e aposentadoria?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>O BPC LOAS é um benefício assistencial que não exige contribuição prévia, enquanto a aposentadoria é um benefício previdenciário que exige tempo de contribuição. O BPC não gera 13º salário nem pensão por morte.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>Como é calculada a renda familiar para o BPC?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>A renda familiar é a soma de todos os rendimentos dos membros da família dividida pelo número de pessoas. Considera-se família o requerente, cônjuge, filhos solteiros menores de 21 anos e pais que vivam sob o mesmo teto.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>O BPC pode ser cortado depois de concedido?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>Sim, o BPC pode ser suspenso se houver melhora na condição socioeconômica da família ou na condição de saúde da pessoa com deficiência. Por isso é importante manter os dados atualizados no CadÚnico.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>Posso trabalhar recebendo BPC LOAS?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>Pessoas com deficiência podem trabalhar e manter o BPC, desde que a atividade seja compatível com a deficiência. Se a renda do trabalho ultrapassar os limites, o benefício pode ser suspenso, mas pode ser reativado se a pessoa perder o emprego.</p>
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

export default BpcLoas; 