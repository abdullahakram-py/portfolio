import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  Sparkles, 
  Code,
  GraduationCap,
  Layers
} from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectCardMockup from './ProjectCardMockup';

export default function ProjectModal({ project, projects, onClose, onSelectProject }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'ArrowLeft') {
        handlePrev();
      }
      if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project]);

  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const handlePrev = () => onSelectProject(prevProject);
  const handleNext = () => onSelectProject(nextProject);

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Bar */}
        <div className="modal-header">
          <div className="modal-header-meta">
            <span className="modal-category-badge">{project.categoryLabel}</span>
            <span className="modal-role-badge">{project.role}</span>
          </div>

          <button 
            onClick={onClose} 
            className="modal-close-btn"
            aria-label="Close project modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-body">
          {/* Main Title & Subtitle */}
          <h2 id="modal-title" className="modal-title">{project.title}</h2>
          <p className="modal-short-desc">{project.shortDesc}</p>

          {/* Action Links (GitHub & Live Demo) */}
          <div className="modal-actions-bar">
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-sm"
              >
                <ExternalLink size={16} />
                <span>Live Interactive Demo</span>
              </a>
            )}
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary btn-sm"
              >
                <GithubIcon size={16} />
                <span>View Source Code</span>
              </a>
            )}
          </div>

          {/* Project Interactive Hero Showcase */}
          <div className="modal-hero-showcase">
            <ProjectCardMockup projectId={project.id} />
          </div>

          {/* Detailed Sections (FR-13) */}
          <div className="modal-sections-grid">
            {/* Overview */}
            <div className="modal-section-card">
              <div className="modal-sec-header">
                <Sparkles size={18} className="text-primary" />
                <h3>Overview</h3>
              </div>
              <p className="modal-sec-text">{project.overview}</p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="modal-two-col">
              <div className="modal-section-card problem-card">
                <div className="modal-sec-header">
                  <AlertTriangle size={18} className="text-error" />
                  <h3>The Problem</h3>
                </div>
                <p className="modal-sec-text">{project.problem}</p>
              </div>

              <div className="modal-section-card solution-card">
                <div className="modal-sec-header">
                  <Lightbulb size={18} className="text-success" />
                  <h3>The Solution</h3>
                </div>
                <p className="modal-sec-text">{project.solution}</p>
              </div>
            </div>

            {/* Key Features */}
            <div className="modal-section-card">
              <div className="modal-sec-header">
                <CheckCircle2 size={18} className="text-primary" />
                <h3>Key Features</h3>
              </div>
              <ul className="modal-features-list">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="modal-feature-item">
                    <span className="feature-check">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Chips */}
            <div className="modal-section-card">
              <div className="modal-sec-header">
                <Code size={18} className="text-primary" />
                <h3>Technology Stack</h3>
              </div>
              <div className="modal-tech-chips">
                {project.tech.map((t) => (
                  <span key={t} className="chip chip-code">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* What I Learned */}
            <div className="modal-section-card learned-card">
              <div className="modal-sec-header">
                <GraduationCap size={18} className="text-primary" />
                <h3>What I Learned</h3>
              </div>
              <p className="modal-sec-text">{project.learned}</p>
            </div>
          </div>
        </div>

        {/* Modal Footer: Prev / Next Navigation */}
        <div className="modal-footer">
          <button onClick={handlePrev} className="modal-nav-btn prev-btn">
            <ChevronLeft size={18} />
            <div className="nav-btn-text">
              <span className="nav-btn-label">Previous Project</span>
              <strong className="nav-btn-title">{prevProject.title}</strong>
            </div>
          </button>

          <button onClick={handleNext} className="modal-nav-btn next-btn">
            <div className="nav-btn-text text-right">
              <span className="nav-btn-label">Next Project</span>
              <strong className="nav-btn-title">{nextProject.title}</strong>
            </div>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
