import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Blog.css';

// Definir interface para o tipo de post
interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  featured: boolean;
  image: string;
}

// Arrays vazios para futura implementação
const blogPosts: BlogPost[] = [];

function Blog() {
  const [filterCategory, setFilterCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filtrar posts baseado na categoria e termo de busca
  const filteredPosts = blogPosts.filter(post => {
    const matchCategory = filterCategory === '' || post.category === filterCategory;
    const matchSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });
  
  // Posts em destaque
  const featuredPosts = blogPosts.filter(post => post.featured);
  
  useEffect(() => {
    // Atualiza o título da página para SEO
    document.title = 'Blog | Advogada em Orleans - Artigos Jurídicos | Karoline Francisco';
    
    // Atualiza a meta description para SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Blog jurídico com artigos sobre direito previdenciário, família e ações de cobrança em Orleans-SC. Informações e dicas jurídicas para moradores da região.');
    }
  }, []);

  return (
    <>
      <Header />
      <main className="blog-container">
        <section className="hero-blog">
          <div className="container">
            <h1>Blog Jurídico - Advogada em Orleans</h1>
            <p>Artigos e informações sobre direito previdenciário, família e ações de cobrança para Orleans e região</p>
          </div>
        </section>
        
        {/* Barra de busca e filtros */}
        <section className="blog-filters">
          <div className="container">
            <div className="search-box">
              <input 
                type="text" 
                placeholder="Buscar artigos..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="button">Buscar</button>
            </div>
            
            <div className="category-filters">
              <button 
                className={filterCategory === '' ? 'active' : ''} 
                onClick={() => setFilterCategory('')}
              >
                Todos
              </button>
              <button 
                className={filterCategory === 'Direito Previdenciário' ? 'active' : ''} 
                onClick={() => setFilterCategory('Direito Previdenciário')}
              >
                Previdenciário
              </button>
              <button 
                className={filterCategory === 'Direito de Família' ? 'active' : ''} 
                onClick={() => setFilterCategory('Direito de Família')}
              >
                Família
              </button>
              <button 
                className={filterCategory === 'Ações de Cobrança' ? 'active' : ''} 
                onClick={() => setFilterCategory('Ações de Cobrança')}
              >
                Cobrança
              </button>
            </div>
          </div>
        </section>
        
        {/* Posts em destaque */}
        {featuredPosts.length > 0 ? (
          <section className="featured-posts">
            <div className="container">
              <h2>Artigos em Destaque</h2>
              <div className="featured-grid">
                {featuredPosts.map(post => (
                  <article key={post.id} className="featured-card">
                    <div className="image-container">
                      <img 
                        src={post.image} 
                        alt={`Artigo em destaque: ${post.title} - Blog jurídico em Orleans SC`} 
                        title={`${post.title} | Artigo em destaque sobre ${post.category}`} 
                      />
                    </div>
                    <div className="post-content">
                      <span className="category">{post.category}</span>
                      <h3>
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p>{post.excerpt}</p>
                      <div className="post-meta">
                        <span className="date">{post.date}</span>
                        <Link to={`/blog/${post.slug}`} className="read-more">Ler mais</Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}
        
        {/* Lista de posts */}
        <section className="post-list">
          <div className="container">
            <h2>Artigos Recentes</h2>
            
            {filteredPosts.length === 0 ? (
              <div className="no-results">
                <p>Em breve, novos artigos estarão disponíveis.</p>
              </div>
            ) : (
              <div className="posts-grid">
                {filteredPosts.map(post => (
                  <article key={post.id} className="post-card">
                    <div className="image-container">
                      <img 
                        src={post.image} 
                        alt={`${post.title} - Artigo sobre ${post.category} em Orleans SC`} 
                        title={`${post.title} | Blog Jurídico Karoline Francisco`} 
                      />
                      <span className="category">{post.category}</span>
                    </div>
                    <div className="post-content">
                      <h3>
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p>{post.excerpt}</p>
                      <div className="post-meta">
                        <span className="date">{post.date}</span>
                        <Link to={`/blog/${post.slug}`} className="read-more">Ler mais</Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
        
        {/* Call to action */}
        <section className="blog-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Precisa de assistência jurídica em Orleans?</h2>
              <p>Entre em contato para uma consulta. Atendimento especializado em Direito Previdenciário, Direito de Família e Ações de Cobrança em Orleans-SC.</p>
              <Link to="/contato" className="cta-button">Fale com um advogado</Link>
            </div>
          </div>
        </section>
        
        {/* Rich snippets para SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "headline": "Blog Jurídico - Advogada em Orleans",
            "description": "Artigos e informações sobre direito previdenciário, família e ações de cobrança para Orleans e região",
            "keywords": "advocacia orleans, direito previdenciário orleans, direito família orleans",
            "url": "https://karolinefrancisco.com/blog",
            "author": {
              "@type": "Person",
              "name": "Karoline Francisco",
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
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://karolinefrancisco.com/blog"
            }
          })
        }} />
      </main>
      <Footer />
    </>
  );
}

export default Blog; 