import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ theme, toggleTheme, onOpenCV }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Brand Logo / Initials */}
        <a 
          href="#hero" 
          className="navbar-brand"
          onClick={(e) => handleNavClick(e, '#hero')}
          aria-label="Abdullah Akram Portfolio Home"
        >
          <span className="brand-bracket">[</span>
          <span className="brand-initials">{portfolioData.personal.initials}</span>
          <span className="brand-bracket">]</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-links" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Controls */}
        <div className="navbar-actions">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun size={20} className="theme-icon sun-icon" />
            ) : (
              <Moon size={20} className="theme-icon moon-icon" />
            )}
          </button>

          {/* Download CV Outlined Button */}
          <button 
            onClick={onOpenCV}
            className="btn btn-secondary btn-sm navbar-cv-btn"
            aria-label="Download CV"
          >
            <FileDown size={16} />
            <span>Download CV</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`mobile-drawer ${mobileMenuOpen ? 'mobile-drawer-open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="mobile-nav-links">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="mobile-drawer-footer">
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <FileDown size={18} />
              <span>Download CV (PDF)</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
