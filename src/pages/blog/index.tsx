import Head from 'next/head';
import Layout from '@/components/Layout';
import { FaSearch, FaBookOpen } from 'react-icons/fa';
import Link from 'next/link';
import styles from '../Blog.module.css';

const Blog = () => {
  return (
    <Layout>
      <Head>
        <title>Blog - Karoline Francisco Advogada</title>
        <meta
          name="description"
          content="Blog de conteúdos jurídicos sobre Direito Previdenciário, Direito de Família e Ações de Cobrança."
        />
      </Head>
      <div className={styles["blog-container"]}>
        {/* Hero section */}
        <section className={styles["hero-blog"]}>
          <div className="container">
            <h1>Blog Jurídico</h1>
            <p>
              Artigos, dicas e informações sobre Direito Previdenciário, Família e Ações de Cobrança
            </p>
          </div>
        </section>

        {/* Filtros e Busca */}
        <section className={styles["blog-filters"]}>
          <div className="container">
            <div className={styles["search-box"]}>
              <input 
                type="text" 
                placeholder="Buscar artigos..."
              />
              <button>
                <FaSearch />
              </button>
            </div>
            
            <div className={styles["category-filters"]}>
              <button className={styles.active}>
                Todos
              </button>
              <button>
                Previdenciário
              </button>
              <button>
                Família
              </button>
              <button>
                Ações de Cobrança
              </button>
            </div>
          </div>
        </section>

        {/* Posts em Destaque */}
        <section className={styles["featured-posts"]}>
          <div className="container">
            <h2>Nossos Artigos</h2>
            
            {/* Placeholder para posts futuros */}
            <div className={styles["no-results"]}>
              <div className={styles["featured-icon"]}>
                <FaBookOpen />
              </div>
              <h3>Conteúdo em construção</h3>
              <p>
                Estamos preparando artigos de qualidade sobre temas jurídicos relevantes. 
                Em breve, novos conteúdos estarão disponíveis nesta seção.
              </p>
              <Link href="/#contato" className={styles["cta-button"]}>
                Entre em contato
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles["blog-cta"]}>
          <div className="container">
            <div className={styles["cta-content"]}>
              <h2>
                Precisa de assessoria jurídica especializada?
              </h2>
              <p>
                Entre em contato para uma análise personalizada do seu caso. Oferecemos atendimento 
                especializado em Direito Previdenciário, Direito de Família e Ações de Cobrança.
              </p>
              <Link href="/#contato" className={styles["cta-button"]}>
                Fale com um advogado
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog; 