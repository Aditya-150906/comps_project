import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bike, Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header-scrolled glass-panel' : ''}`}>
      <div className="header-container">
        <Link to="/" className="brand">
          <span className="brand-text">VELO<span className="text-gradient">MOVE</span></span>
        </Link>
        
        <nav className={`desktop-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <Link to="/fleet" className="nav-link" onClick={() => setMobileMenuOpen(false)}>// FLEET</Link>
          <Link to="/locations" className="nav-link" onClick={() => setMobileMenuOpen(false)}>// LOCATIONS</Link>
          <Link to="/pricing" className="nav-link" onClick={() => setMobileMenuOpen(false)}>// PRICING</Link>
        </nav>

        <div className="header-actions">
          <Link to="/login" className="btn btn-glass login-btn" style={{ textDecoration: 'none' }} onClick={() => setMobileMenuOpen(false)}>SYS.LOGIN</Link>
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
