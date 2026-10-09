import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>05. Academic Foundation</span>
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Formal engineering degree and mathematical foundations from premier institutions in Pakistan.
          </p>
        </div>

        {/* Side-by-Side Responsive Cards (FR-15) */}
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={edu.institution} className="card education-card">
              <div className="education-card-top">
                <div className="edu-icon-badge">
                  <GraduationCap size={22} className="text-primary" />
                </div>
                <div className="edu-date-badge">
                  <Calendar size={14} />
                  <span>{edu.period}</span>
                </div>
              </div>

              <h3 className="education-degree">{edu.degree}</h3>
              <h4 className="education-institution">{edu.institution}</h4>

              <div className="education-location">
                <MapPin size={14} />
                <span>{edu.location}</span>
                <span className="edu-status-tag">{edu.status}</span>
              </div>

              <p className="education-details">{edu.details}</p>

              {edu.highlight && (
                <div className="education-highlight">
                  <Award size={16} className="text-primary" />
                  <span>{edu.highlight}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
