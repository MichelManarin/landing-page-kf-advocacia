import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Contato() {
  useEffect(() => {
    // Atualiza o título da página para SEO
    document.title = 'Contato | Advogada em Orleans - Karoline Francisco';
    
    // Atualiza a meta description para SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Entre em contato com a advogada Karoline Francisco em Orleans-SC. Especialista em Direito Previdenciário e Família. Atendimento personalizado na região.');
    }
  }, []);

  return (
    <>
      <Header />
      <main className="contato-container">
        <section className="hero-contato">
          <div className="container">
            <h1>Contato - Advogada em Orleans</h1>
            <p>Entre em contato para agendar uma consulta ou tirar suas dúvidas</p>
          </div>
        </section>
        
        <section className="info-contato">
          <div className="container">
            <div className="card-contato">
              <h2>Karoline Francisco</h2>
              <h3>Advogada especialista em Orleans-SC</h3>
              <p><strong>Endereço:</strong> Rua Principal, 123 - Centro, Orleans - SC, 88870-000</p>
              <p><strong>Telefone/WhatsApp:</strong> (48) 99999-9999</p>
              <p><strong>Email:</strong> contato@karolinefrancisco.com</p>
              <p><strong>Horário de Atendimento:</strong> Segunda a Sexta das 9h às 18h</p>
            </div>
            
            <div className="form-contato">
              <h2>Envie uma mensagem</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="nome">Nome completo</label>
                  <input type="text" id="nome" name="nome" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="telefone">Telefone/WhatsApp</label>
                  <input type="tel" id="telefone" name="telefone" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="assunto">Assunto</label>
                  <select id="assunto" name="assunto" required>
                    <option value="">Selecione um assunto</option>
                    <option value="previdenciario">Direito Previdenciário</option>
                    <option value="familia">Direito de Família</option>
                    <option value="cobranca">Ações de Cobrança</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="mensagem">Mensagem</label>
                  <textarea id="mensagem" name="mensagem" rows={5} required></textarea>
                </div>
                
                <button type="submit" className="btn-primary">Enviar mensagem</button>
              </form>
            </div>
          </div>
        </section>
        
        <section className="mapa-container">
          <h2>Localização do Escritório em Orleans</h2>
          <div className="mapa">
            {/* Aqui você pode adicionar um iframe com o Google Maps */}
            <div className="mapa-placeholder">
              <p>Mapa do Google com a localização exata do escritório em Orleans-SC</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Contato; 