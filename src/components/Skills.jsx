import React from 'react';
import { 
  Code2, 
  Smartphone, 
  Database, 
  Cpu, 
  Wrench, 
  Layers
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  const iconMap = {
    Code2: <Code2 size={24} className="skill-cat-icon text-primary" />,
    Smartphone: <Smartphone size={24} className="skill-cat-icon text-primary" />,
    Database: <Database size={24} className="skill-cat-icon text-primary" />,
    Cpu: <Cpu size={24} className="skill-cat-icon text-primary" />,
    Wrench: <Wrench size={24} className="skill-cat-icon text-primary" />
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>02. Technical Toolkit</span>
          </div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A battle-tested set of languages, frameworks, and modern developer tooling. Honest chips with no arbitrary percentage bars.
          </p>
        </div>

        {/* 5-Category Responsive Grid (FR-9 & FR-10) */}
        <div className="skills-grid">
          {skills.map((category, index) => (
            <div 
              key={category.category} 
              className={`card skill-card ${index === 0 ? 'skill-card-primary' : ''}`}
            >
              <div className="skill-card-top">
                <div className="skill-icon-wrap">
                  {iconMap[category.icon] || <Code2 size={24} className="text-primary" />}
                </div>
                <h3 className="skill-category-title">{category.category}</h3>
              </div>

              <p className="skill-category-desc">{category.description}</p>

              {/* Visual Skill Chips (FR-10) */}
              <div className="skill-chips-wrap">
                {category.items.map((skill) => (
                  <span key={skill} className="chip chip-skill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
