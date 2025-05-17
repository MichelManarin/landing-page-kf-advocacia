import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  FaWhatsapp, 
  FaCheck, 
  FaArrowRight, 
  FaFileAlt, 
  FaHandHoldingUsd, 
  FaHeartbeat, 
  FaUsers,
  FaUserAlt
} from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

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

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5548991472830?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20verificar%20meus%20direitos%20junto%20ao%20INSS.', '_blank');
  };

  return (
    <>
      <Header />
      <main className="inss-page">
        {/* Seção 1 - Headline de impacto */}
        <section className="inss-hero">
          <div className="inss-hero-bg">
            <div className="inss-shape inss-shape-1"></div>
            <div className="inss-shape inss-shape-2"></div>
          </div>
          <div className="container">
            <div className={`inss-hero-content ${isVisible ? 'visible' : ''}`}>
              <h1 className="inss-title">Você pode ter dinheiro para receber do INSS e nem sabe disso!</h1>
              <p className="inss-description">
                Descubra em poucos cliques se você tem direito a algum benefício.
              </p>
              <button 
                className="inss-cta-button"
                onClick={handleWhatsAppClick}
              >
                <span>Quero fazer a verificação gratuita</span>
                <div className="inss-button-icon">
                  <FaArrowRight />
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Seção 2 - Validação/Autoridade */}
        <section className="inss-authority" ref={section2Ref}>
          <div className="container">
            <motion.div 
              className="authority-content"
              initial={{ opacity: 0, y: 50 }}
              animate={section2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <div className="authority-image-container">
                <div className="authority-icon">
                  <FaUserAlt size={64} />
                </div>
                <div className="authority-badge">OAB/SC 64.256</div>
              </div>
              <div className="authority-text">
                <h2>Dra. Karoline Francisco</h2>
                <p className="authority-subtitle">Especialista em Direito Previdenciário</p>
                <p className="authority-description">
                  Advogada especialista em direito previdenciário, com mais de 100 casos resolvidos com sucesso.
                  Atuo para garantir que você receba todos os seus direitos junto ao INSS.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seção 3 - Dor e identificação */}
        <section className="inss-pain" ref={section3Ref}>
          <div className="container">
            <motion.div 
              className="pain-content"
              initial={{ opacity: 0, y: 50 }}
              animate={section3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="pain-title">A maioria das pessoas nem imagina que tem direito.</h2>
              <div className="pain-items">
                <div className="pain-item">
                  <div className="pain-icon">
                    <FaCheck />
                  </div>
                  <p>Trabalhou com carteira assinada?</p>
                </div>
                <div className="pain-item">
                  <div className="pain-icon">
                    <FaCheck />
                  </div>
                  <p>Já ficou afastado por doença ou acidente?</p>
                </div>
                <div className="pain-item">
                  <div className="pain-icon">
                    <FaCheck />
                  </div>
                  <p>Já contribuiu com o INSS mesmo que só um pouco?</p>
                </div>
              </div>
              <div className="pain-highlight">
                Se você respondeu SIM para qualquer uma dessas perguntas, 
                <strong> você pode ter direitos não reconhecidos!</strong>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seção 4 - Benefício e Ganho */}
        <section className="inss-benefits" ref={section4Ref}>
          <div className="container">
            <motion.div 
              className="benefits-content"
              initial={{ opacity: 0, y: 50 }}
              animate={section4InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="benefits-title">Você pode receber valores atrasados ou garantir sua aposentadoria.</h2>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <FaHeartbeat />
                  </div>
                  <h3>Benefícios por incapacidade</h3>
                  <p>Auxílio-doença, aposentadoria por invalidez e outros direitos quando você não pode trabalhar.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <FaFileAlt />
                  </div>
                  <h3>Revisões de aposentadoria</h3>
                  <p>Verificação de cálculos incorretos que podem estar diminuindo seu benefício mensal.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <FaUsers />
                  </div>
                  <h3>Pensão por morte</h3>
                  <p>Garantia de direitos para dependentes após o falecimento do beneficiário ou contribuinte.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">
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

        {/* Seção 6 - Prova social */}
        <section className="inss-testimonials" ref={section6Ref}>
          <div className="container">
            <motion.div 
              className="testimonials-content"
              initial={{ opacity: 0, y: 50 }}
              animate={section6InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="testimonials-title">Quem já passou por aqui disse…</h2>
              <div className="testimonials-grid">
                <div className="testimonial-card">
                  <div className="testimonial-quote">"</div>
                  <p className="testimonial-text">
                    Eu não sabia que tinha direito a uma revisão do meu benefício. Graças à análise feita pela Dra. Karoline, 
                    consegui um aumento significativo na minha aposentadoria.
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">MT</div>
                    <div className="author-info">
                      <h4>Maria T.</h4>
                      <p>Florianópolis, SC</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-quote">"</div>
                  <p className="testimonial-text">
                    Meu pedido de auxílio-doença havia sido negado pelo INSS. Com o apoio jurídico especializado,
                    conseguimos reverter a decisão e ainda receber os valores atrasados.
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">JS</div>
                    <div className="author-info">
                      <h4>João S.</h4>
                      <p>São José, SC</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-quote">"</div>
                  <p className="testimonial-text">
                    Após anos tentando sozinha, finalmente consegui o BPC para meu filho com deficiência.
                    O atendimento foi humano e eficiente do início ao fim.
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">CR</div>
                    <div className="author-info">
                      <h4>Cristina R.</h4>
                      <p>Palhoça, SC</p>
                    </div>
                  </div>
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
      <Footer />
    </>
  );
};

export default Inss; 