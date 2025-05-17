import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Inss from './pages/Inss';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ScrollToTop from './components/ScrollToTop';
import AdvogadaOrleans from './pages/AdvogadaOrleans';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inss" element={<Inss />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/advogada-orleans" element={<AdvogadaOrleans />} />
      </Routes>
    </Router>
  );
}

export default App;
