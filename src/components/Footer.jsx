import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        {/* Back to top floating button */}
        <div className="footer-top-row">
          <button 
            onClick={scrollToTop} 
            className="back-to-top-btn"
            aria-label="Back to top of page"
            title="Scroll to top"
          >
            <ArrowUp size={18} />
            <span>Back to top</span>
          </button>
        </div>

        {/* Brand Mark */}
        <div className="footer-brand">
          <span className="brand-bracket">[</span>
          <span className="brand-initials">{personal.initials}</span>
          <span className="brand-bracket">]</span>
        </div>

        {/* Tagline */}
        <p className="footer-tagline">
          Crafting exceptional cross-platform Flutter mobile apps & intelligent AI workflows.
        </p>

        {/* Social Links */}
        <div className="footer-socials">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="footer-social-link"
            aria-label="Email Abdullah"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Copyright Line */}
        <div className="footer-copyright">
          <p>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <p className="footer-tech-stack">
            Built with React & Vanilla CSS Tokens • Designed for High Performance
          </p>
        </div>
      </div>
    </footer>
  );
}
