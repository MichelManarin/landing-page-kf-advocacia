import { useState, useEffect, useRef } from 'react';
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
  FaHome,
  FaBaby,
  FaWheelchair,
  FaUserTie,
  FaShieldAlt,
  FaHeart,
  FaGraduationCap,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { RiMentalHealthLine, RiHeartPulseLine } from 'react-icons/ri';
import { BiBrain } from 'react-icons/bi';
import { GiHealing } from 'react-icons/gi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { IoMdMedical } from 'react-icons/io';
import { motion, useInView } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '../styles/AuxiliosINSS.module.css';

// Declaração do tipo gtag para TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const AuxiliosINSS = () => {
  const [isVisible, setIsVisible] = useState(false);
  
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
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Efeito para animação ao carregar a página
    const heroContent = document.querySelector(`.${styles["hero-content"]}`);
    if (heroContent) {
      setTimeout(() => {
        heroContent.classList.add(styles.visible);
      }, 100);
    }
  }, []);

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
    window.open('https://wa.me/5548991472830?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20verificar%20meus%20direitos%20aos%20benefícios%20do%20INSS.', '_blank');
  };

  return (
    <Layout>
      <Head>
        <title>Auxílios do INSS | Conheça todos os seus direitos | Consulta jurídica especializada</title>
        <meta
          name="description"
          content="Conheça todos os auxílios e benefícios do INSS que você pode ter direito. Auxílio-doença, auxílio-acidente, aposentadoria e muito mais. Consulta com advogado especializado."
        />
        <meta name="keywords" content="auxílios INSS, benefícios previdenciários, auxílio doença, auxílio acidente, aposentadoria, BPC, salário maternidade, advogado previdenciário Orleans, direito previdenciário" />
        <meta name="author" content="Karoline Francisco" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://karolinefrancisco.com/auxilios-inss" />
        <meta property="og:title" content="Auxílios do INSS | Conheça todos os seus direitos | Karoline Francisco" />
        <meta property="og:description" content="Conheça todos os auxílios e benefícios do INSS que você pode ter direito. Auxílio-doença, auxílio-acidente, aposentadoria e muito mais." />
        <meta property="og:site_name" content="Karoline Francisco - Advogada" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://karolinefrancisco.com/auxilios-inss" />
        <meta property="twitter:title" content="Auxílios do INSS | Conheça todos os seus direitos" />
        <meta property="twitter:description" content="Conheça todos os auxílios e benefícios do INSS que você pode ter direito. Consulta com advogado especializado." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://karolinefrancisco.com/auxilios-inss" />
        
        {/* Schema.org markup para a página */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Auxílios do INSS - Conheça todos os seus direitos',
              description: 'Guia completo sobre todos os auxílios e benefícios do INSS. Entenda seus direitos previdenciários.',
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
                '@id': 'https://karolinefrancisco.com/auxilios-inss'
              },
              datePublished: '2024-01-15',
              dateModified: '2024-01-15',
              keywords: 'auxílios INSS, benefícios previdenciários, direito previdenciário'
            })
          }}
        />
      </Head>
      <main className={styles["page"]}>
        {/* Seção 1 - Hero com headline informativa */}
        <section className={styles["hero"]}>
          <div className={styles["hero-bg"]}>
            <div className={`${styles["shape"]} ${styles["shape-1"]}`}></div>
            <div className={`${styles["shape"]} ${styles["shape-2"]}`}></div>
          </div>
          <div className="container">
            <div className={`${styles["hero-content"]} ${isVisible ? styles.visible : ''}`}>
              <h1 className={styles["title"]}>
                CONHEÇA TODOS OS BENEFÍCIOS DO INSS QUE VOCÊ TEM DIREITO
              </h1>
              <p className={styles["subtitle"]}>
                O sistema previdenciário brasileiro oferece <strong>diversos benefícios</strong> aos trabalhadores e segurados. Entre eles estão o <em>auxílio-doença</em>, <em>aposentadoria por idade</em>, <strong>auxílio-acidente</strong> e <strong>BPC</strong>. É importante conhecer seus direitos previdenciários para acessá-los adequadamente.
              </p>
              <div className={styles["cta-container"]}>
                <button 
                  className={styles["cta-button"]}
                  onClick={handleWhatsAppClick}
                >
                  <div className={styles["whatsapp-icon"]}>
                    <FaWhatsapp size={20} />
                  </div>
                  <span>Fale com um advogado</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 2 - Informações sobre os benefícios */}
        <section className={styles["information"]} ref={section2Ref}>
          <div className="container">
            <motion.div 
              className={styles["information-content"]}
              initial={{ opacity: 0, y: 50 }}
              animate={section2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={styles["section-title"]} style={{ color: '#1a5276' }}>PRINCIPAIS BENEFÍCIOS DO INSS</h2>
              
              <Link href="/auxilio-doenca" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className={styles["info-card"]} style={{ cursor: 'pointer' }}>
                  <h3>
                    <span className={styles["info-card-icon"]}>
                      <FaHeartbeat size={22} />
                    </span>
                    Auxílio-Doença
                    <FaExternalLinkAlt size={14} style={{ marginLeft: 'auto', opacity: 0.6, color: '#1a5276' }} />
                  </h3>
                  <p>Benefício temporário pago ao segurado que fica <strong>incapacitado para o trabalho</strong> por mais de 15 dias devido a doença ou acidente. É necessário passar por perícia médica do INSS.</p>
                </div>
              </Link>
              
              <Link href="/auxilio-acidente" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className={styles["info-card"]} style={{ cursor: 'pointer' }}>
                  <h3>
                    <span className={styles["info-card-icon"]}>
                      <FaUserInjured size={22} />
                    </span>
                    Auxílio-Acidente
                    <FaExternalLinkAlt size={14} style={{ marginLeft: 'auto', opacity: 0.6, color: '#1a5276' }} />
                  </h3>
                  <p>Benefício mensal pago ao trabalhador que sofreu acidente e ficou com <strong>sequelas permanentes</strong> que reduzem sua capacidade laboral. Pode ser recebido mesmo trabalhando.</p>
                </div>
              </Link>
              
              <Link href="/auxilio-maternidade" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className={styles["info-card"]} style={{ cursor: 'pointer' }}>
                  <h3>
                    <span className={styles["info-card-icon"]}>
                      <FaBaby size={22} />
                    </span>
                    Salário-Maternidade
                    <FaExternalLinkAlt size={14} style={{ marginLeft: 'auto', opacity: 0.6, color: '#1a5276' }} />
                  </h3>
                  <p>Auxílio pago durante o período de <strong>afastamento por maternidade</strong>, adoção ou guarda judicial. Direito garantido a trabalhadoras urbanas, rurais e domésticas.</p>
                </div>
              </Link>
              
              <Link href="/aposentadoria-idade" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className={styles["info-card"]} style={{ cursor: 'pointer' }}>
                  <h3>
                    <span className={styles["info-card-icon"]}>
                      <FaUserTie size={22} />
                    </span>
                    Aposentadoria por Idade
                    <FaExternalLinkAlt size={14} style={{ marginLeft: 'auto', opacity: 0.6, color: '#1a5276' }} />
                  </h3>
                  <p>Benefício permanente para trabalhadores que atingiram a <strong>idade mínima</strong> (65 anos homens, 62 anos mulheres) e cumpriram o tempo mínimo de contribuição de 15 anos.</p>
                </div>
              </Link>
              
              <Link href="/bpc-loas" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className={styles["info-card"]} style={{ cursor: 'pointer' }}>
                  <h3>
                    <span className={styles["info-card-icon"]}>
                      <FaHeart size={22} />
                    </span>
                    BPC LOAS
                    <FaExternalLinkAlt size={14} style={{ marginLeft: 'auto', opacity: 0.6, color: '#1a5276' }} />
                  </h3>
                  <p>Benefício assistencial de <strong>um salário mínimo</strong> para idosos a partir de 65 anos e pessoas com deficiência de baixa renda. Não exige contribuição prévia ao INSS.</p>
                </div>
              </Link>
              
              <Link href="/pensao-morte" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className={styles["info-card"]} style={{ cursor: 'pointer' }}>
                  <h3>
                    <span className={styles["info-card-icon"]}>
                      <FaHome size={22} />
                    </span>
                    Pensão por Morte
                    <FaExternalLinkAlt size={14} style={{ marginLeft: 'auto', opacity: 0.6, color: '#1a5276' }} />
                  </h3>
                  <p>Benefício previdenciário pago aos <strong>dependentes do segurado falecido</strong>. Protege financeiramente cônjuges, filhos e outros dependentes habilitados.</p>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Seção 3 - Tipos de Auxílios */}
        <section className={styles["benefits"]} ref={section3Ref}>
          <div className="container">
            <motion.div 
              className={styles["benefits-content"]}
              initial={{ opacity: 0, y: 50 }}
              animate={section3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={styles["section-title"]} style={{ color: '#1a5276' }}>TIPOS DE AUXÍLIOS E BENEFÍCIOS</h2>
              <div className={styles["benefits-grid"]}>
                <Link href="/auxilio-doenca" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className={styles["benefit-item"]} style={{ cursor: 'pointer' }}>
                    <div className={styles["benefit-icon"]}>
                      <FaHeartbeat size={32} />
                    </div>
                    <div className={styles["benefit-content"]}>
                      <h4>
                        Auxílio-Doença
                        <FaExternalLinkAlt size={12} style={{ marginLeft: '8px', opacity: 0.6, color: '#1a5276' }} />
                      </h4>
                      <p>Para quem está temporariamente incapacitado para o trabalho por doença ou acidente</p>
                    </div>
                  </div>
                </Link>
                <Link href="/auxilio-acidente" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className={styles["benefit-item"]} style={{ cursor: 'pointer' }}>
                    <div className={styles["benefit-icon"]}>
                      <FaUserInjured size={32} />
                    </div>
                    <div className={styles["benefit-content"]}>
                      <h4>
                        Auxílio-Acidente
                        <FaExternalLinkAlt size={12} style={{ marginLeft: '8px', opacity: 0.6, color: '#1a5276' }} />
                      </h4>
                      <p>Benefício mensal para quem sofreu acidente e ficou com sequelas permanentes</p>
                    </div>
                  </div>
                </Link>
                <Link href="/aposentadoria-idade" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className={styles["benefit-item"]} style={{ cursor: 'pointer' }}>
                    <div className={styles["benefit-icon"]}>
                      <FaUserTie size={32} />
                    </div>
                    <div className={styles["benefit-content"]}>
                      <h4>
                        Aposentadoria por Idade
                        <FaExternalLinkAlt size={12} style={{ marginLeft: '8px', opacity: 0.6, color: '#1a5276' }} />
                      </h4>
                      <p>Para trabalhadores que atingiram a idade mínima e tempo de contribuição</p>
                    </div>
                  </div>
                </Link>
                <Link href="/aposentadoria-especial" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className={styles["benefit-item"]} style={{ cursor: 'pointer' }}>
                    <div className={styles["benefit-icon"]}>
                      <FaCalendarCheck size={32} />
                    </div>
                    <div className={styles["benefit-content"]}>
                      <h4>
                        Aposentadoria Especial
                        <FaExternalLinkAlt size={12} style={{ marginLeft: '8px', opacity: 0.6, color: '#1a5276' }} />
                      </h4>
                      <p>Para trabalhadores expostos a agentes nocivos à saúde com tempo reduzido de contribuição</p>
                    </div>
                  </div>
                </Link>
                <Link href="/aposentadoria-invalidez" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className={styles["benefit-item"]} style={{ cursor: 'pointer' }}>
                    <div className={styles["benefit-icon"]}>
                      <FaWheelchair size={32} />
                    </div>
                    <div className={styles["benefit-content"]}>
                      <h4>
                        Aposentadoria por Invalidez
                        <FaExternalLinkAlt size={12} style={{ marginLeft: '8px', opacity: 0.6, color: '#1a5276' }} />
                      </h4>
                      <p>Para trabalhadores permanentemente incapacitados para qualquer atividade</p>
                    </div>
                  </div>
                </Link>
                <Link href="/auxilio-maternidade" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className={styles["benefit-item"]} style={{ cursor: 'pointer' }}>
                    <div className={styles["benefit-icon"]}>
                      <FaBaby size={32} />
                    </div>
                    <div className={styles["benefit-content"]}>
                      <h4>
                        Salário-Maternidade
                        <FaExternalLinkAlt size={12} style={{ marginLeft: '8px', opacity: 0.6, color: '#1a5276' }} />
                      </h4>
                      <p>Benefício pago durante o período de afastamento por maternidade</p>
                    </div>
                  </div>
                </Link>
                <Link href="/bpc-loas" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className={styles["benefit-item"]} style={{ cursor: 'pointer' }}>
                    <div className={styles["benefit-icon"]}>
                      <FaHeart size={32} />
                    </div>
                    <div className={styles["benefit-content"]}>
                      <h4>
                        BPC (LOAS)
                        <FaExternalLinkAlt size={12} style={{ marginLeft: '8px', opacity: 0.6, color: '#1a5276' }} />
                      </h4>
                      <p>Benefício assistencial para idosos e pessoas com deficiência de baixa renda</p>
                    </div>
                  </div>
                </Link>
                <Link href="/pensao-morte" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className={styles["benefit-item"]} style={{ cursor: 'pointer' }}>
                    <div className={styles["benefit-icon"]}>
                      <FaHome size={32} />
                    </div>
                    <div className={styles["benefit-content"]}>
                      <h4>
                        Pensão por Morte
                        <FaExternalLinkAlt size={12} style={{ marginLeft: '8px', opacity: 0.6, color: '#1a5276' }} />
                      </h4>
                      <p>Benefício pago aos dependentes do segurado que faleceu</p>
                    </div>
                  </div>
                </Link>
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
              <h2 className={styles["section-title"]}>QUANDO PROCURAR SEUS DIREITOS</h2>
              <div className={styles["situations-grid"]}>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaExclamationCircle size={32} />
                  </div>
                  <h3>Benefício Negado</h3>
                  <p>O INSS negou seu pedido mas você acredita ter direito ao benefício</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaMoneyBillWave size={32} />
                  </div>
                  <h3>Valor Incorreto</h3>
                  <p>Você recebe o benefício mas acredita que o valor está abaixo do correto</p>
                </div>
                <div className={styles["situation-card"]}>
                  <div className={styles["situation-icon"]}>
                    <FaQuestionCircle size={32} />
                  </div>
                  <h3>Dúvidas sobre Direitos</h3>
                  <p>Não sabe se tem direito a algum benefício ou auxílio do INSS</p>
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
                  <h3>Posso receber mais de um benefício do INSS ao mesmo tempo?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>Em alguns casos sim. Por exemplo, é possível receber auxílio-acidente junto com salário do trabalho, ou pensão por morte junto com aposentadoria própria. Cada situação tem suas regras específicas.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>O que fazer quando o INSS nega meu benefício?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>Você pode fazer um recurso administrativo no próprio INSS ou entrar com ação judicial. Muitas vezes, com a ajuda de um advogado especializado, é possível reverter a negativa e conseguir o benefício.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>Há prazo para solicitar benefícios do INSS?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>Para receber valores atrasados, você tem até 5 anos. Mas o direito ao benefício em si não prescreve. O ideal é procurar orientação jurídica o quanto antes para não perder dinheiro.</p>
                </div>
              </div>
              
              <div className={styles["faq-item"]}>
                <div className={styles["faq-question"]}>
                  <span className={styles["question-icon"]}><FaQuestionCircle /></span>
                  <h3>Preciso de advogado para pedir benefícios do INSS?</h3>
                </div>
                <div className={styles["faq-answer"]}>
                  <p>Não é obrigatório, mas é altamente recomendado. Um advogado especializado conhece todas as regras, pode identificar direitos que você desconhece e aumenta muito suas chances de sucesso.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>


      </main>
    </Layout>
  );
};

export default AuxiliosINSS; 