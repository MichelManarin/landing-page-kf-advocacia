import Link from 'next/link';
import styles from './BlogPreview.module.css';

// Definir interface para o tipo de post
interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
}

// Array vazio de posts para futura implementação
const recentPosts: BlogPost[] = [];

const BlogPreview = () => {
  return (
    <section className={styles["blog-preview"]} id="blog">
      <div className="container">
        <div className={styles["section-header"]}>
          <h2 className={styles["section-title"]}>Blog Jurídico</h2>
          <p className={styles["section-subtitle"]}>Artigos e informações sobre direito em Orleans</p>
        </div>
        
        {recentPosts.length > 0 ? (
          <div className={styles["blog-preview-grid"]}>
            {recentPosts.map(post => (
              <article key={post.id} className={styles["blog-preview-card"]}>
                <div className={styles["blog-preview-image"]}>
                  <img 
                    src={post.image} 
                    alt={`${post.title} - Artigo jurídico por Advogada em Orleans SC`} 
                    title={`${post.title} | Advocacia especializada em ${post.category}`} 
                  />
                  <span className={styles["blog-preview-category"]}>{post.category}</span>
                </div>
                <div className={styles["blog-preview-content"]}>
                  <h3 className={styles["blog-preview-title"]}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className={styles["blog-preview-excerpt"]}>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className={styles["blog-preview-link"]}>
                    Ler mais
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className={styles["blog-preview-empty"]}>
            <p>Em breve, novos artigos estarão disponíveis.</p>
          </div>
        )}
        
        <div className={styles["blog-preview-cta"]}>
          <Link href="/blog" className={styles["blog-preview-button"]}>
            Ver todos os artigos
          </Link>
          <Link href="/contato" className={`${styles["blog-preview-button"]} ${styles["blog-preview-button-contact"]}`}>
            Fale com um advogado
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview; 