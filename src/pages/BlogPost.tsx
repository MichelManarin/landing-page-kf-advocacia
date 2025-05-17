import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './BlogPost.css';

// Definir interfaces para os tipos
interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  image: string;
  content: string;
  tags: string[];
}

interface RelatedPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
}

// Posts relacionados vazios
const relatedPosts: RelatedPost[] = [];

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Em uma implementação real, você buscaria o post do backend usando o slug
    console.log('Post slug:', slug);
    
    // Simular carregamento
    setLoading(true);
    
    // Simular que não há post (em uma implementação real, isso viria do servidor)
    setTimeout(() => {
      setLoading(false);
      // Como não temos posts ainda, definimos como null
      setPost(null);
    }, 500);
    
    // Atualiza o título da página para SEO
    document.title = 'Blog | Artigos Jurídicos | Karoline Francisco';
    
    // Atualiza a meta description para SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Blog jurídico com artigos sobre direito previdenciário, direito de família e ações de cobrança em Orleans-SC.');
    }
    
    // Scroll para o topo da página
    window.scrollTo(0, 0);
  }, [slug]);

  // Se estiver carregando, mostrar indicador de carregamento
  if (loading) {
    return (
      <>
        <Header />
        <main className="blog-post-container">
          <div className="loading-indicator">
            <p>Carregando...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Se não houver post, mostrar mensagem e botão para voltar
  if (!post) {
    return (
      <>
        <Header />
        <main className="blog-post-container">
          <div className="post-not-found">
            <h1>Artigo não encontrado</h1>
            <p>O artigo que você está procurando ainda não está disponível ou foi removido.</p>
            <div className="post-not-found-actions">
              <button onClick={() => navigate('/blog')} className="back-button">
                Voltar para o Blog
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="blog-post-container">
        <article className="blog-post">
          <div className="container">
            {/* Breadcrumbs para SEO */}
            <nav className="breadcrumbs" aria-label="breadcrumb">
              <ol>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li aria-current="page">{post.title}</li>
              </ol>
            </nav>
            
            {/* Cabeçalho do post */}
            <header className="post-header">
              <div className="post-meta">
                <span className="category">{post.category}</span>
                <span className="date">{post.date}</span>
                <span className="author">por {post.author}</span>
              </div>
              <h1>{post.title}</h1>
            </header>
            
            {/* Imagem destacada */}
            <div className="featured-image">
              <img src={post.image} alt={post.title} />
            </div>
            
            {/* Conteúdo do post */}
            <div 
              className="post-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Tags para SEO */}
            <div className="post-tags">
              <h3>Tags:</h3>
              <ul>
                {post.tags.map((tag, index) => (
                  <li key={index}>
                    <Link to={`/blog/tag/${tag.replace(/\s+/g, '-')}`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Autor */}
            <div className="post-author">
              <div className="author-avatar">
                <img src="/author.jpg" alt={post.author} />
              </div>
              <div className="author-bio">
                <h3>{post.author}</h3>
                <p>Advogada especializada em Direito Previdenciário em Orleans-SC. OAB/SC 12345.</p>
                <Link to="/sobre" className="more-about">Saiba mais</Link>
              </div>
            </div>
            
            {/* CTA */}
            <div className="post-cta">
              <h3>Precisa de assistência com sua aposentadoria em Orleans?</h3>
              <p>Entre em contato para uma consulta personalizada sobre seus direitos previdenciários.</p>
              <Link to="/contato" className="cta-button">Fale com um advogado</Link>
            </div>
          </div>
        </article>
        
        {/* Posts relacionados */}
        {relatedPosts.length > 0 && (
          <section className="related-posts">
            <div className="container">
              <h2>Artigos Relacionados</h2>
              <div className="related-grid">
                {relatedPosts.map(post => (
                  <article key={post.id} className="related-card">
                    <div className="image-container">
                      <img src={post.image} alt={post.title} />
                      <span className="category">{post.category}</span>
                    </div>
                    <div className="post-content">
                      <h3>
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p>{post.excerpt}</p>
                      <Link to={`/blog/${post.slug}`} className="read-more">Ler mais</Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Rich snippets para SEO - Artigo */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "image": `https://karolinefrancisco.com${post.image}`,
            "datePublished": "2024-07-15T08:00:00+00:00",
            "dateModified": "2024-07-15T08:00:00+00:00",
            "author": {
              "@type": "Person",
              "name": post.author,
              "url": "https://karolinefrancisco.com/sobre"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Karoline Francisco Advocacia",
              "logo": {
                "@type": "ImageObject",
                "url": "https://karolinefrancisco.com/logo.jpg"
              }
            },
            "description": `${post.title}. Informações jurídicas para moradores de Orleans-SC sobre direitos previdenciários.`,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://karolinefrancisco.com/blog/${post.slug}`
            },
            "keywords": post.tags.join(", ")
          })
        }} />
        
        {/* Rich snippets para SEO - BreadcrumbList */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://karolinefrancisco.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://karolinefrancisco.com/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `https://karolinefrancisco.com/blog/${post.slug}`
              }
            ]
          })
        }} />
      </main>
      <Footer />
    </>
  );
}

export default BlogPost; 