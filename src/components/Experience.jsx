import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Milestone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Milestone size={14} />
            <span>03. Track Record</span>
          </div>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Hands-on professional engineering experience building production-grade mobile applications and digital systems.
          </p>
        </div>

        {/* Vertical Timeline (FR-11) */}
        <div className="experience-timeline">
          <div className="timeline-spine" aria-hidden="true" />

          {experience.map((item, index) => (
            <div key={item.company} className="timeline-item">
              {/* Timeline Marker Node */}
              <div className="timeline-node" aria-hidden="true">
                <div className="timeline-dot">
                  <div className="timeline-dot-inner" />
                </div>
              </div>

              {/* Timeline Entry Content Card */}
              <div className="card timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <div className="timeline-role-row">
                      <h3 className="timeline-role">{item.role}</h3>
                      <span className="timeline-type-badge">{item.type}</span>
                    </div>
                    <div className="timeline-company-row">
                      <span className="timeline-company">{item.company}</span>
                      <span className="timeline-meta-divider">•</span>
                      <span className="timeline-location">
                        <MapPin size={14} />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="timeline-date-badge">
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Impact Bullet Points */}
                <ul className="timeline-bullets">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="timeline-bullet-item">
                      <CheckCircle2 size={16} className="bullet-icon text-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
