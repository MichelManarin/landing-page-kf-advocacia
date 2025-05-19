import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '@/components/Layout';
import { FaArrowLeft, FaCalendarAlt, FaUserAlt, FaShareAlt, FaWhatsapp } from 'react-icons/fa';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Formatar o título do slug para exibição
  const formatTitle = (slug: string | string[] | undefined) => {
    if (!slug) return '';
    const title = typeof slug === 'string' ? slug : slug[0];
    return title
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const currentDate = new Date().toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Layout>
      <Head>
        <title>{formatTitle(slug)} - Karoline Francisco Advogada</title>
        <meta
          name="description"
          content={`Artigo jurídico sobre ${formatTitle(slug)}. Informações especializadas sobre direito previdenciário, família e ações de cobrança.`}
        />
      </Head>
      <main className="blog-post-page">
        {/* Hero section */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <button 
                onClick={() => router.push('/blog')}
                className="flex items-center text-primary mb-6 hover:underline"
              >
                <FaArrowLeft className="mr-2" /> Voltar para o Blog
              </button>
              
              <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                {formatTitle(slug)}
              </h1>
              
              <div className="flex items-center text-gray-500 mb-8">
                <div className="flex items-center mr-6">
                  <FaCalendarAlt className="mr-2" />
                  <span>{currentDate}</span>
                </div>
                <div className="flex items-center">
                  <FaUserAlt className="mr-2" />
                  <span>Karoline Francisco</span>
                </div>
              </div>
              
              <div className="h-64 bg-gray-200 rounded-lg mb-8 flex items-center justify-center">
                <span className="text-gray-500">Imagem em construção</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg">
                <div className="bg-gray-50 p-6 rounded-lg mb-8 text-center">
                  <h2 className="text-xl font-bold text-secondary mb-4">Conteúdo em desenvolvimento</h2>
                  <p className="text-gray-600">
                    Este artigo está sendo produzido por nossa equipe e será publicado em breve.
                    Agradecemos sua compreensão e interesse em nosso conteúdo.
                  </p>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
                  Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus 
                  rhoncus ut eleifend nibh porttitor.
                </p>
                
                <p className="text-gray-600 mb-6">
                  Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl 
                  tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor 
                  posuere. Praesent id metus massa, ut blandit odio.
                </p>
              </div>
              
              {/* Share section */}
              <div className="border-t border-gray-200 mt-10 pt-8">
                <h3 className="text-lg font-bold text-secondary mb-4 flex items-center">
                  <FaShareAlt className="mr-2" /> Compartilhe este artigo
                </h3>
                <div className="flex gap-3">
                  <button className="p-3 bg-[#25D366] text-white rounded-full hover:opacity-90">
                    <FaWhatsapp />
                  </button>
                </div>
              </div>
              
              {/* CTA section */}
              <div className="bg-primary bg-opacity-10 rounded-lg p-8 mt-10">
                <h3 className="text-xl font-bold text-secondary mb-3">
                  Precisa de ajuda com seu caso?
                </h3>
                <p className="text-gray-600 mb-6">
                  Entre em contato conosco para uma consulta personalizada sobre sua situação jurídica.
                </p>
                <button 
                  onClick={() => router.push('/#contato')}
                  className="py-3 px-6 bg-primary text-white rounded-md hover:bg-opacity-90 transition-all"
                >
                  Fale com um advogado
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
};

export default BlogPost; 