import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import CVModal from './components/CVModal';
import Toast from './components/Toast';
import { portfolioData } from './data/portfolioData';
import './App.css';

export default function App() {
  // Theme state: dark by default as modern tech aesthetic, persisted in localStorage
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const showNotification = ({ type = 'info', message }) => {
    setToast({ type, message });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  return (
    <div className="app-layout">
      {/* Sticky Top Navigation */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenCV={() => setIsCVOpen(true)} 
      />

      {/* Main Landmark for WCAG AA Accessibility */}
      <main id="main-content">
        <Hero 
          onOpenCV={() => setIsCVOpen(true)} 
          onNotify={showNotification} 
        />
        
        <About />
        
        <Skills />
        
        <Experience />
        
        <Projects 
          onSelectProject={(project) => setSelectedProject(project)} 
        />
        
        <Education />
        
        <Contact 
          onNotify={showNotification} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          projects={portfolioData.projects}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(project) => setSelectedProject(project)}
        />
      )}

      <CVModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
      />

      {/* Global Toast Notification */}
      <Toast 
        toast={toast} 
        onClose={() => setToast(null)} 
      />
    </div>
  );
}
