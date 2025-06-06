import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './BlogPost.module.css';

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
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (!slug) return; // Esperar até que o slug esteja disponível

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
        <main className={styles["blog-post-container"]}>
          <div className={styles["loading-indicator"]}>
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
        <main className={styles["blog-post-container"]}>
          <div className={styles["post-not-found"]}>
            <h1>Artigo não encontrado</h1>
            <p>O artigo que você está procurando ainda não está disponível ou foi removido.</p>
            <div className={styles["post-not-found-actions"]}>
              <button onClick={() => router.push('/blog')} className={styles["back-button"]}>
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
      <main className={styles["blog-post-container"]}>
        <article className={styles["blog-post"]}>
          <div className="container">
            {/* Breadcrumbs para SEO */}
            <nav className={styles.breadcrumbs} aria-label="breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li aria-current="page">{post.title}</li>
              </ol>
            </nav>
            
            {/* Cabeçalho do post */}
            <header className={styles["post-header"]}>
              <div className={styles["post-meta"]}>
                <span className={styles.category}>{post.category}</span>
                <span className={styles.date}>{post.date}</span>
                <span className={styles.author}>por {post.author}</span>
              </div>
              <h1>{post.title}</h1>
            </header>
            
            {/* Imagem destacada */}
            <div className={styles["featured-image"]}>
              <img 
                src={post.image} 
                alt={`Artigo jurídico: ${post.title} - Advocacia em Orleans | Karoline Francisco`} 
                title={`${post.title} | Blog Jurídico - Advogada em Orleans`} 
              />
            </div>
            
            {/* Conteúdo do post */}
            <div 
              className={styles["post-content"]}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Tags para SEO */}
            <div className={styles["post-tags"]}>
              <h3>Tags:</h3>
              <ul>
                {post.tags.map((tag, index) => (
                  <li key={index}>
                    <Link href={`/blog/tag/${tag.replace(/\s+/g, '-')}`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Autor */}
            <div className={styles["post-author"]}>
              <div className={styles["author-avatar"]}>
                <img 
                  src="/author.jpg" 
                  alt="Dra. Karoline Francisco - Advogada em Orleans SC" 
                  title="Karoline Francisco - Autora do Blog Jurídico" 
                />
              </div>
              <div className={styles["author-bio"]}>
                <h3>{post.author}</h3>
                <p>Advogada especializada em Direito Previdenciário em Orleans-SC. OAB/SC 12345.</p>
                <Link href="/sobre" className={styles["more-about"]}>Saiba mais</Link>
              </div>
            </div>
            
            {/* CTA */}
            <div className={styles["post-cta"]}>
              <h3>Precisa de assistência com sua aposentadoria em Orleans?</h3>
              <p>Entre em contato para uma consulta personalizada sobre seus direitos previdenciários.</p>
              <Link href="/contato" className={styles["cta-button"]}>Fale com um advogado</Link>
            </div>
          </div>
        </article>
        
        {/* Posts relacionados */}
        {relatedPosts.length > 0 && (
          <section className={styles["related-posts"]}>
            <div className="container">
              <h2>Artigos Relacionados</h2>
              <div className={styles["related-grid"]}>
                {relatedPosts.map(post => (
                  <article key={post.id} className={styles["related-card"]}>
                    <div className={styles["image-container"]}>
                      <img 
                        src={post.image} 
                        alt={`Artigo relacionado: ${post.title} - Consultoria jurídica em Orleans SC`} 
                        title={`${post.title} | Artigos jurídicos relacionados`} 
                      />
                      <span className={styles.category}>{post.category}</span>
                    </div>
                    <div className={styles["post-content"]}>
                      <h3>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p>{post.excerpt}</p>
                      <Link href={`/blog/${post.slug}`} className="read-more">Ler mais</Link>
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
};

export default BlogPost; 