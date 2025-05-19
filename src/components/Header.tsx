import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import logoSrc from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

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

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="navbar-bg"></div>
      <div className="container">
        <div className="navbar">
          <div className="logo-container">
            <Link href="/" className="logo-wrapper">
              <img 
                src={logoSrc.src} 
                alt="Karoline Francisco Advogada em Orleans - Especialista em Direito Previdenciário e Família" 
                title="Karoline Francisco - Advogada em Orleans SC" 
                className="logo" 
                width={80}
                height={80}
              />
            </Link>
            <div className="logo-text">
              <h1 className="brand-name">Karoline Francisco</h1>
              <p className="brand-title">ADVOGADA</p>
            </div>
          </div>

          <nav className="desktop-menu">
            <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
            <Link href="/#servicos" className="nav-link">Serviços</Link>
            <Link href="/#sobre" className="nav-link">Sobre</Link>
            <Link href="/inss" className={`nav-link ${isActive('/inss') ? 'active' : ''}`}>INSS</Link>
            <Link href="/blog" className={`nav-link ${isActive('/blog') ? 'active' : ''}`}>Blog</Link>
            <Link href="/#contato" className="nav-link">Contato</Link>
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
            href="/" 
            className="mobile-nav-link"
            onClick={() => setIsOpen(false)}
          >
            <span className="link-number">01</span>
            <span className="link-text">Home</span>
          </Link>
          <Link 
            href="/#servicos" 
            className="mobile-nav-link"
            onClick={() => setIsOpen(false)}
          >
            <span className="link-number">02</span>
            <span className="link-text">Serviços</span>
          </Link>
          <Link 
            href="/#sobre" 
            className="mobile-nav-link"
            onClick={() => setIsOpen(false)}
          >
            <span className="link-number">03</span>
            <span className="link-text">Sobre</span>
          </Link>
          <Link 
            href="/inss" 
            className="mobile-nav-link"
            onClick={() => setIsOpen(false)}
          >
            <span className="link-number">04</span>
            <span className="link-text">INSS</span>
          </Link>
          <Link 
            href="/blog" 
            className="mobile-nav-link"
            onClick={() => setIsOpen(false)}
          >
            <span className="link-number">05</span>
            <span className="link-text">Blog</span>
          </Link>
          <Link 
            href="/#contato" 
            className="mobile-nav-link"
            onClick={() => setIsOpen(false)}
          >
            <span className="link-number">06</span>
            <span className="link-text">Contato</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 