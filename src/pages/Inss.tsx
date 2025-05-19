import { useState, useEffect, useRef } from 'react';
import { 
  FaWhatsapp, 
  FaCheck, 
  FaArrowRight, 
  FaFileAlt, 
  FaHandHoldingUsd, 
  FaHeartbeat, 
  FaUsers,
  FaUserAlt,
  FaBalanceScale,
  FaHandshake,
  FaTrophy
} from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import Head from 'next/head';
import Layout from '@/components/Layout';
import styles from '../styles/Inss.module.css';

const Inss = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Refs para animar quando elementos entrarem na tela
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);
  
  const section2InView = useInView(section2Ref, { once: true, amount: 0.3 });
  const section3InView = useInView(section3Ref, { once: true, amount: 0.3 });
  const section4InView = useInView(section4Ref, { once: true, amount: 0.3 });
  const section5InView = useInView(section5Ref, { once: true, amount: 0.3 });
  const section6InView = useInView(section6Ref, { once: true, amount: 0.3 });
  const section7InView = useInView(section7Ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Efeito para animação ao carregar a página
    const heroContent = document.querySelector(`.${styles["inss-hero-content"]}`);
    if (heroContent) {
      setTimeout(() => {
        heroContent.classList.add(styles.visible);
      }, 100);
    }
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5548991472830?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20verificar%20meus%20direitos%20junto%20ao%20INSS.', '_blank');
  };

  return (
    <Layout>
      <Head>
        <title>Aposentadoria e Benefícios INSS | Karoline Francisco Advogada</title>
        <meta
          name="description"
          content="Assessoria jurídica especializada em Direito Previdenciário. Aposentadoria, auxílio-doença, BPC/LOAS e outros benefícios do INSS."
        />
      </Head>
      <main className={styles["inss-page"]}>
        {/* Seção 1 - Headline de impacto */}
        <section className={styles["inss-hero"]}>
          <div className={styles["inss-hero-bg"]}>
            <div className={`${styles["inss-shape"]} ${styles["inss-shape-1"]}`}></div>
            <div className={`${styles["inss-shape"]} ${styles["inss-shape-2"]}`}></div>
          </div>
          <div className="container">
            <div className={`${styles["inss-hero-content"]} ${isVisible ? styles.visible : ''}`}>
              <h1 className={styles["inss-title"]}>Você pode ter dinheiro para receber do INSS e nem sabe disso!</h1>
              <p className={styles["inss-description"]}>
                Descubra em poucos cliques se você tem direito a algum benefício.
              </p>
              <button 
                className={styles["inss-cta-button"]}
                onClick={handleWhatsAppClick}
              >
                <span>Fale com um advogado</span>
                <div className={styles["inss-button-icon"]}>
                  <FaArrowRight />
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Seção 2 - Validação/Autoridade */}
        <section className={styles["inss-authority"]} ref={section2Ref}>
          <div className="container">
            <motion.div 
              className={styles["authority-content"]}
              initial={{ opacity: 0, y: 50 }}
              animate={section2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles["authority-image-container"]}>
                <div className={styles["authority-icon"]}>
                  <FaUserAlt size={64} />
                </div>
                <div className={styles["authority-badge"]}>OAB/SC 64.256</div>
              </div>
              <div className={styles["authority-text"]}>
                <h2>Dra. Karoline Francisco</h2>
                <p className={styles["authority-subtitle"]}>Especialista em Direito Previdenciário</p>
                <p className={styles["authority-description"]}>
                  Advogada especialista em direito previdenciário, com mais de 10 anos de experiência profissional.
                  Atuo para garantir que você receba todos os seus direitos junto ao INSS.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seção 3 - Dor e identificação */}
        <section className={styles["inss-pain"]} ref={section3Ref}>
          <div className="container">
            <motion.div 
              className={styles["pain-content"]}
              initial={{ opacity: 0, y: 50 }}
              animate={section3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={styles["pain-title"]}>A maioria das pessoas nem imagina que tem direito.</h2>
              <div className={styles["pain-items"]}>
                <div className={styles["pain-item"]}>
                  <div className={styles["pain-icon"]}>
                    <FaCheck />
                  </div>
                  <p>Trabalhou com carteira assinada?</p>
                </div>
                <div className={styles["pain-item"]}>
                  <div className={styles["pain-icon"]}>
                    <FaCheck />
                  </div>
                  <p>Já ficou afastado por doença ou acidente?</p>
                </div>
                <div className={styles["pain-item"]}>
                  <div className={styles["pain-icon"]}>
                    <FaCheck />
                  </div>
                  <p>Já contribuiu com o INSS mesmo que só um pouco?</p>
                </div>
              </div>
              <div className={styles["pain-highlight"]}>
                Se você respondeu SIM para qualquer uma dessas perguntas, 
                <strong> você pode ter direitos não reconhecidos!</strong>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seção 4 - Benefício e Ganho */}
        <section className={styles["inss-benefits"]} ref={section4Ref}>
          <div className="container">
            <motion.div 
              className={styles["benefits-content"]}
              initial={{ opacity: 0, y: 50 }}
              animate={section4InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={styles["benefits-title"]}>Você pode receber valores atrasados ou garantir sua aposentadoria.</h2>
              <div className={styles["benefits-grid"]}>
                <div className={styles["benefit-card"]}>
                  <div className={styles["benefit-icon"]}>
                    <FaHeartbeat />
                  </div>
                  <h3>Benefícios por incapacidade</h3>
                  <p>Auxílio-doença, aposentadoria por invalidez e outros direitos quando você não pode trabalhar.</p>
                </div>
                <div className={styles["benefit-card"]}>
                  <div className={styles["benefit-icon"]}>
                    <FaFileAlt />
                  </div>
                  <h3>Revisões de aposentadoria</h3>
                  <p>Verificação de cálculos incorretos que podem estar diminuindo seu benefício mensal.</p>
                </div>
                <div className={styles["benefit-card"]}>
                  <div className={styles["benefit-icon"]}>
                    <FaUsers />
                  </div>
                  <h3>Pensão por morte</h3>
                  <p>Garantia de direitos para dependentes após o falecimento do beneficiário ou contribuinte.</p>
                </div>
                <div className={styles["benefit-card"]}>
                  <div className={styles["benefit-icon"]}>
                    <FaHandHoldingUsd />
                  </div>
                  <h3>BPC/LOAS</h3>
                  <p>Benefício para idosos e pessoas com deficiência de baixa renda, mesmo sem ter contribuído.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seção 5 - Como funciona */}
        <section className="inss-process" ref={section5Ref}>
          <div className="container">
            <motion.div 
              className="process-content"
              initial={{ opacity: 0, y: 50 }}
              animate={section5InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="process-title">Veja como é simples descobrir</h2>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3>Fale conosco pelo WhatsApp</h3>
                    <p>Entre em contato para uma análise personalizada do seu caso.</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3>Receba a análise</h3>
                    <p>Nossa equipe especializada irá avaliar seu caso e possibilidades.</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3>Saiba se tem direito e como agir</h3>
                    <p>Se identificarmos direitos, te orientamos em todo o processo.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seção 6 - Por que nos escolher */}
        <section className="inss-why-choose-us" ref={section6Ref}>
          <div className="container">
            <motion.div 
              className="why-choose-content"
              initial={{ opacity: 0, y: 50 }}
              animate={section6InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="why-choose-title">Por que escolher nosso escritório?</h2>
              <div className="why-choose-grid">
                <div className="why-choose-card">
                  <div className="why-choose-icon">
                    <FaBalanceScale />
                  </div>
                  <h3>Experiência Especializada</h3>
                  <p>
                    Conhecimento técnico profundo em direito previdenciário e larga experiência
                    em casos complexos junto ao INSS.
                  </p>
                </div>
                <div className="why-choose-card">
                  <div className="why-choose-icon">
                    <FaHandshake />
                  </div>
                  <h3>Atendimento Humanizado</h3>
                  <p>
                    Tratamos cada cliente de forma única, com empatia e dedicação para 
                    entender completamente suas necessidades.
                  </p>
                </div>
                <div className="why-choose-card">
                  <div className="why-choose-icon">
                    <FaFileAlt />
                  </div>
                  <h3>Transparência Total</h3>
                  <p>
                    Comunicação clara desde o início, com explicações detalhadas sobre 
                    seu caso, possibilidades e custos envolvidos.
                  </p>
                </div>
                <div className="why-choose-card">
                  <div className="why-choose-icon">
                    <FaTrophy />
                  </div>
                  <h3>Resultados Comprovados</h3>
                  <p>
                    Histórico de sucesso em conquistar direitos e valores atrasados para 
                    nossos clientes em todo o estado.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seção 7 - CTA final */}
        <section className="inss-final-cta" ref={section7Ref}>
          <div className="container">
            <motion.div 
              className="final-cta-content"
              initial={{ opacity: 0, y: 50 }}
              animate={section7InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="final-cta-title">Não deixe um direito seu para depois.</h2>
              <p className="final-cta-description">
                Faça a verificação gratuita agora mesmo.
              </p>
              <button 
                className="final-cta-button"
                onClick={handleWhatsAppClick}
              >
                <div className="whatsapp-icon">
                  <FaWhatsapp />
                </div>
                <span>Fale com um advogado</span>
              </button>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Inss; 