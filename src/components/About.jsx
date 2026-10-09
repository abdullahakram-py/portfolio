import React from 'react';
import { 
  MapPin, 
  GraduationCap, 
  Crosshair, 
  Briefcase, 
  Sparkles,
  CheckCircle2,
  Terminal,
  Code2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Terminal size={14} />
            <span>01. About Me</span>
          </div>
          <h2 className="section-title">Engineering With Purpose & Precision</h2>
          <p className="section-subtitle">
            Bridging elegant cross-platform mobile experiences with smart backend and AI automation systems.
          </p>
        </div>

        {/* Two-Column Grid: Narrative Left, Quick Facts Right (FR-7 & FR-8) */}
        <div className="about-grid">
          {/* Left Column: Narrative Summary */}
          <div className="about-narrative">
            <div className="about-story-card">
              <p className="about-paragraph highlight-paragraph">
                {personal.summary[0]}
              </p>
              <p className="about-paragraph">
                {personal.summary[1]}
              </p>
            </div>

            {/* Value Highlights */}
            <div className="about-highlights-grid">
              <div className="about-highlight-item">
                <div className="highlight-icon-box">
                  <Code2 size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="highlight-title">Mobile Craftsmanship</h4>
                  <p className="highlight-desc">Pixel-perfect Flutter UIs engineered for speed, fluid 60fps animations, and zero clutter.</p>
                </div>
              </div>

              <div className="about-highlight-item">
                <div className="highlight-icon-box">
                  <Sparkles size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="highlight-title">AI & Workflow Integration</h4>
                  <p className="highlight-desc">Embedding LLM features, voice agents (Vapi), and scalable automation nodes (n8n).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Facts Card (FR-8) */}
          <div className="about-facts-wrapper">
            <div className="card quick-facts-card">
              <div className="quick-facts-header">
                <h3 className="quick-facts-title">Quick Facts</h3>
                <span className="quick-facts-badge">At a Glance</span>
              </div>

              <ul className="quick-facts-list">
                <li className="quick-fact-item">
                  <div className="fact-icon-wrap">
                    <MapPin size={18} />
                  </div>
                  <div className="fact-details">
                    <span className="fact-label">Location</span>
                    <strong className="fact-value">{personal.quickFacts.location}</strong>
                  </div>
                </li>

                <li className="quick-fact-item">
                  <div className="fact-icon-wrap">
                    <GraduationCap size={18} />
                  </div>
                  <div className="fact-details">
                    <span className="fact-label">Education</span>
                    <strong className="fact-value">{personal.quickFacts.education}</strong>
                  </div>
                </li>

                <li className="quick-fact-item">
                  <div className="fact-icon-wrap">
                    <Crosshair size={18} />
                  </div>
                  <div className="fact-details">
                    <span className="fact-label">Focus Areas</span>
                    <strong className="fact-value">{personal.quickFacts.focus}</strong>
                  </div>
                </li>

                <li className="quick-fact-item">
                  <div className="fact-icon-wrap">
                    <Briefcase size={18} />
                  </div>
                  <div className="fact-details">
                    <span className="fact-label">Current Role</span>
                    <strong className="fact-value">{personal.quickFacts.currentRole}</strong>
                  </div>
                </li>
              </ul>

              {/* Verified Status Banner */}
              <div className="quick-facts-footer">
                <CheckCircle2 size={16} className="text-success" />
                <span>Available immediately for full-time & remote roles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
