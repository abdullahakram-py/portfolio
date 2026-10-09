import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowUpRight, 
  Layers,
  Sparkles,
  Smartphone,
  Cpu
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import ProjectCardMockup from './ProjectCardMockup';

export default function Projects({ onSelectProject }) {
  const { projects } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = [
    { label: 'All Projects', value: 'All' },
    { label: 'Mobile (Flutter)', value: 'Mobile' },
    { label: 'AI Solutions', value: 'AI' },
    { label: 'Automation', value: 'Automation' }
  ];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>04. Featured Work</span>
          </div>
          <h2 className="section-title">Flagship Projects</h2>
          <p className="section-subtitle">
            Engineered with modern architectures, clean state management, and real-world utility. Click any card to explore full problem/solution breakdowns.
          </p>

          {/* Category Filter Pills (FR-14) */}
          <div className="project-filter-pills" role="tablist" aria-label="Project categories">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setSelectedFilter(f.value)}
                className={`filter-pill ${selectedFilter === f.value ? 'filter-pill-active' : ''}`}
                role="tab"
                aria-selected={selectedFilter === f.value}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Responsive Card Grid (FR-12) */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="card project-card"
              onClick={() => onSelectProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProject(project);
                }
              }}
              aria-label={`View details for ${project.title}`}
            >
              {/* Card Top: 16:10 Device Mockup / Thumbnail (FR-12.1) */}
              <div className="project-mockup-wrapper">
                <ProjectCardMockup projectId={project.id} />
                <div className="mockup-overlay">
                  <span className="overlay-badge">
                    <ArrowUpRight size={16} />
                    <span>View Case Study</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <div className="project-category-row">
                  <span className="project-category-tag">{project.categoryLabel}</span>
                  <span className="project-role-tag">{project.role}</span>
                </div>

                {/* Title (H3) */}
                <h3 className="project-card-title">{project.title}</h3>

                {/* One-Line Description */}
                <p className="project-card-desc">{project.shortDesc}</p>

                {/* Tech Chips (Max 4 as per UI doc) */}
                <div className="project-card-tech">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="chip chip-code">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="chip chip-code text-muted">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                {/* Card Actions (FR-12.5) */}
                <div className="project-card-actions" onClick={(e) => e.stopPropagation()}>
                  <button 
                    onClick={() => onSelectProject(project)}
                    className="btn btn-primary btn-sm"
                  >
                    <span>View Details</span>
                    <ArrowUpRight size={14} />
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm btn-icon"
                    aria-label={`View ${project.title} on GitHub`}
                    title="View GitHub Repository"
                  >
                    <GithubIcon size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
