import Link from 'next/link';
import './BlogPreview.css';

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
    <section className="blog-preview" id="blog">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Blog Jurídico</h2>
          <p className="section-subtitle">Artigos e informações sobre direito em Orleans</p>
        </div>
        
        {recentPosts.length > 0 ? (
          <div className="blog-preview-grid">
            {recentPosts.map(post => (
              <article key={post.id} className="blog-preview-card">
                <div className="blog-preview-image">
                  <img 
                    src={post.image} 
                    alt={`${post.title} - Artigo jurídico por Advogada em Orleans SC`} 
                    title={`${post.title} | Advocacia especializada em ${post.category}`} 
                  />
                  <span className="blog-preview-category">{post.category}</span>
                </div>
                <div className="blog-preview-content">
                  <h3 className="blog-preview-title">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="blog-preview-excerpt">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="blog-preview-link">
                    Ler mais
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="blog-preview-empty">
            <p>Em breve, novos artigos estarão disponíveis.</p>
          </div>
        )}
        
        <div className="blog-preview-cta">
          <Link href="/blog" className="blog-preview-button">
            Ver todos os artigos
          </Link>
          <Link href="/contato" className="blog-preview-button blog-preview-button-contact">
            Fale com um advogado
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview; 