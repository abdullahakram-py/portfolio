import React, { useEffect } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  MapPin, 
  Phone,
  FileDown,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function CVModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const { personal, skills, experience, projects, education } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="cv-title">
      <div className="modal-container cv-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* CV Modal Toolbar */}
        <div className="modal-header cv-modal-header no-print">
          <div className="cv-modal-badge">
            <Sparkles size={16} className="text-primary" />
            <span id="cv-title">Curriculum Vitae Preview (M. Abdullah Akram)</span>
          </div>

          <div className="cv-modal-actions">
            <button 
              onClick={handlePrint}
              className="btn btn-primary btn-sm"
              title="Print or Save as PDF"
            >
              <Printer size={16} />
              <span>Print / Save PDF</span>
            </button>
            <button 
              onClick={onClose}
              className="modal-close-btn"
              aria-label="Close CV preview"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Formatted Printable CV Document */}
        <div className="cv-document-paper">
          {/* CV Header */}
          <div className="cv-paper-header">
            <h1 className="cv-name">{personal.name}</h1>
            <p className="cv-headline">{personal.headline}</p>

            <div className="cv-contacts-row">
              <span className="cv-contact-item">
                <MapPin size={13} /> {personal.location}
              </span>
              <span className="cv-divider">|</span>
              <span className="cv-contact-item">
                <Mail size={13} /> {personal.email}
              </span>
              <span className="cv-divider">|</span>
              <span className="cv-contact-item">
                <Phone size={13} /> {personal.phone}
              </span>
              <span className="cv-divider">|</span>
              <span className="cv-contact-item">
                <Linkedin size={13} /> {personal.linkedinUser}
              </span>
              <span className="cv-divider">|</span>
              <span className="cv-contact-item">
                <Github size={13} /> {personal.githubUser}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="cv-paper-section">
            <h3 className="cv-section-heading">Professional Summary</h3>
            <div className="cv-section-line" />
            <p className="cv-text">{personal.summary[0]}</p>
            <p className="cv-text" style={{ marginTop: '6px' }}>{personal.summary[1]}</p>
          </div>

          {/* Technical Skills */}
          <div className="cv-paper-section">
            <h3 className="cv-section-heading">Technical Skills</h3>
            <div className="cv-section-line" />
            <div className="cv-skills-table">
              {skills.map((s) => (
                <div key={s.category} className="cv-skill-row">
                  <strong className="cv-skill-category">{s.category}:</strong>
                  <span className="cv-skill-items">{s.items.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="cv-paper-section">
            <h3 className="cv-section-heading">Professional Experience</h3>
            <div className="cv-section-line" />
            {experience.map((exp) => (
              <div key={exp.company} className="cv-item-block">
                <div className="cv-item-top">
                  <span className="cv-item-role">{exp.role}</span>
                  <span className="cv-item-dates">{exp.period}</span>
                </div>
                <div className="cv-item-sub">
                  <span>{exp.company}</span>
                  <span> • </span>
                  <span>{exp.location}</span>
                </div>
                <ul className="cv-bullets-list">
                  {exp.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Flagship Projects */}
          <div className="cv-paper-section">
            <h3 className="cv-section-heading">Key Projects</h3>
            <div className="cv-section-line" />
            {projects.map((proj) => (
              <div key={proj.id} className="cv-item-block">
                <div className="cv-item-top">
                  <span className="cv-item-role">{proj.title} ({proj.role})</span>
                  <span className="cv-item-dates">{proj.tech.slice(0, 3).join(', ')}</span>
                </div>
                <p className="cv-text" style={{ marginBottom: '4px' }}>{proj.shortDesc}</p>
                <ul className="cv-bullets-list">
                  {proj.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                    <li key={fIdx}>{feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="cv-paper-section">
            <h3 className="cv-section-heading">Education</h3>
            <div className="cv-section-line" />
            {education.map((edu) => (
              <div key={edu.institution} className="cv-item-block">
                <div className="cv-item-top">
                  <span className="cv-item-role">{edu.degree}</span>
                  <span className="cv-item-dates">{edu.period}</span>
                </div>
                <div className="cv-item-sub">
                  <span>{edu.institution}</span>
                  <span> — </span>
                  <span style={{ color: '#0175C2', fontWeight: 600 }}>{edu.status}</span>
                </div>
                {edu.highlight && <p className="cv-text" style={{ fontStyle: 'italic' }}>{edu.highlight}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
