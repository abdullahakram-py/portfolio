import React from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Smartphone, 
  Layers, 
  Bot, 
  Sparkles,
  CheckCircle
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenCV, onNotify }) {
  const { personal } = portfolioData;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    onNotify?.({
      type: 'success',
      message: 'Email address copied to clipboard!'
    });
  };

  return (
    <section id="hero" className="hero-section">
      {/* Subtle Background Glows */}
      <div className="hero-bg-glow hero-bg-glow-1" aria-hidden="true" />
      <div className="hero-bg-glow hero-bg-glow-2" aria-hidden="true" />

      <div className="container hero-container">
        {/* Left Column: Introduction & CTAs (7 columns) */}
        <div className="hero-content">
          {/* Availability Status Pill (FR-6) */}
          <div className="status-pill hero-status-badge">
            <span className="status-dot" />
            <span>{personal.availability}</span>
          </div>

          <p className="hero-greeting">{personal.greeting}</p>
          <h1 className="hero-name">{personal.name}</h1>
          <h2 className="hero-subtitle">{personal.title}</h2>
          
          <p className="hero-statement">
            "{personal.statement}"
          </p>

          {/* Primary & Secondary Action CTAs (FR-5) */}
          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary hero-btn-main">
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>
            <button onClick={onOpenCV} className="btn btn-secondary hero-btn-cv">
              <FileDown size={18} />
              <span>Download CV</span>
            </button>
          </div>

          {/* Social Links (FR-5) */}
          <div className="hero-socials">
            <span className="hero-socials-label">Connect:</span>
            <div className="hero-social-links">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Visit Abdullah's GitHub Profile"
                title="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Visit Abdullah's LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>
              <button
                onClick={handleCopyEmail}
                className="social-icon-btn"
                aria-label="Copy Email Address"
                title="Copy Email: abdullah.akram.dev@gmail.com"
              >
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Photo / Interactive Device Showcase (5 columns) */}
        <div className="hero-visual">
          <div className="hero-photo-wrapper">
            {/* Ambient Animated Gradient Frame */}
            <div className="hero-photo-glow" aria-hidden="true" />
            
            {/* Custom High-Fidelity Tech Portrait Frame */}
            <div className="hero-avatar-frame">
              <div className="avatar-art-container">
                <svg viewBox="0 0 320 320" className="avatar-svg-art" aria-label="M. Abdullah Akram Avatar">
                  <defs>
                    <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0175C2" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#54C5F8" stopOpacity="0.08" />
                    </linearGradient>
                    <linearGradient id="flutterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#54C5F8" />
                      <stop offset="100%" stopColor="#0175C2" />
                    </linearGradient>
                  </defs>

                  {/* Geometric Tech Circle Backdrop */}
                  <circle cx="160" cy="160" r="140" fill="url(#avatarGrad)" stroke="var(--primary)" strokeWidth="2" strokeDasharray="6 6" />
                  
                  {/* Clean Silhouette / Developer Avatar Illustration */}
                  <g transform="translate(40, 35)">
                    {/* Head & Hair */}
                    <circle cx="120" cy="80" r="50" fill="var(--bg-surface-elevated)" stroke="var(--border-color)" strokeWidth="2" />
                    <path d="M 75 75 Q 120 30 165 75 Q 160 50 120 45 Q 80 50 75 75 Z" fill="var(--primary)" />
                    
                    {/* Glasses & Friendly Tech Persona */}
                    <rect x="95" y="70" width="22" height="15" rx="4" fill="none" stroke="var(--text-primary)" strokeWidth="2.5" />
                    <rect x="123" y="70" width="22" height="15" rx="4" fill="none" stroke="var(--text-primary)" strokeWidth="2.5" />
                    <line x1="117" y1="76" x2="123" y2="76" stroke="var(--text-primary)" strokeWidth="2.5" />
                    
                    {/* Smile */}
                    <path d="M 108 98 Q 120 108 132 98" fill="none" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round" />

                    {/* Torso & Smart Tech Shirt */}
                    <path d="M 50 200 C 50 145 90 135 120 135 C 150 135 190 145 190 200 Z" fill="var(--bg-card-hover)" stroke="var(--border-color)" strokeWidth="2" />
                    <path d="M 105 135 L 120 160 L 135 135" fill="none" stroke="var(--primary)" strokeWidth="2" />
                  </g>

                  {/* Flutter Logo Emblem overlay */}
                  <g transform="translate(210, 205) scale(0.65)">
                    <rect width="64" height="64" rx="16" fill="var(--bg-surface)" stroke="var(--border-color)" strokeWidth="2" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.15))" />
                    <path d="M 38 12 L 18 32 L 25 39 L 52 12 Z" fill="#54C5F8" />
                    <path d="M 38 34 L 26 46 L 33 53 L 45 41 L 52 48 L 52 34 Z" fill="#0175C2" />
                  </g>
                </svg>
              </div>

              {/* Floating Interactive Skill Pills */}
              <div className="floating-badge badge-flutter" title="Specialized in Flutter & Dart">
                <Smartphone size={16} className="text-primary" />
                <span>Flutter & Dart</span>
              </div>

              <div className="floating-badge badge-ai" title="AI & Automation Integration">
                <Bot size={16} className="text-primary" />
                <span>AI & n8n Workflows</span>
              </div>

              <div className="floating-badge badge-arch" title="Clean Code & Architecture">
                <Layers size={16} className="text-primary" />
                <span>Clean Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
