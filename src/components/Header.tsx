import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import logoSrc from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="navbar-bg"></div>
      <div className="container">
        <div className="navbar">
          <div className="logo-container">
            <Link to="/" className="logo-wrapper">
              <img src={logoSrc} alt="Karoline Francisco Advogada" className="logo" />
            </Link>
            <div className="logo-text">
              <h1 className="brand-name">Karoline Francisco</h1>
              <p className="brand-title">ADVOGADA</p>
            </div>
          </div>

          <nav className="desktop-menu">
            <Link to="/" className="nav-link">Home</Link>
            <a href="/#servicos" className="nav-link">Serviços</a>
            <a href="/#sobre" className="nav-link">Sobre</a>
            <Link to="/inss" className="nav-link">INSS</Link>
            <a href="/#contato" className="nav-link">Contato</a>
          </nav>

          <div className="mobile-menu-button">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="hamburger-button"
              aria-label="Menu"
            >
              {isOpen ? (
                <IoClose size={24} className="icon-close" />
              ) : (
                <FaBars size={22} className="icon-menu" />
              )}
              <span className="menu-circle"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-container">
          <Link 
            to="/" 
            className="mobile-nav-link"
            onClick={() => setIsOpen(false)}
          >
            <span className="link-number">01</span>
            <span className="link-text">Home</span>
          </Link>
          <a 
            href="/#servicos" 
            className="mobile-nav-link"
            onClick={() => setIsOpen(false)}
          >
            <span className="link-number">02</span>
            <span className="link-text">Serviços</span>
          </a>
          <a 
            href="/#sobre" 
            className="mobile-nav-link"
            onClick={() => setIsOpen(false)}
          >
            <span className="link-number">03</span>
            <span className="link-text">Sobre</span>
          </a>
          <Link 
            to="/inss" 
            className="mobile-nav-link"
            onClick={() => setIsOpen(false)}
          >
            <span className="link-number">04</span>
            <span className="link-text">INSS</span>
          </Link>
          <a 
            href="/#contato" 
            className="mobile-nav-link"
            onClick={() => setIsOpen(false)}
          >
            <span className="link-number">05</span>
            <span className="link-text">Contato</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header; 