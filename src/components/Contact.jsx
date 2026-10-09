import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  MessageSquare, 
  Sparkles,
  Loader2,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ onNotify }) {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [copiedKey, setCopiedKey] = useState(null);

  const contactMethods = [
    {
      id: 'email',
      label: 'Email',
      value: personal.email,
      icon: <Mail size={20} className="text-primary" />,
      actionText: 'Copy Email',
      directLink: `mailto:${personal.email}`
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: personal.linkedinUser,
      icon: <LinkedinIcon size={20} className="text-primary" />,
      actionText: 'View Profile',
      directLink: personal.linkedin
    },
    {
      id: 'github',
      label: 'GitHub',
      value: personal.githubUser,
      icon: <GithubIcon size={20} className="text-primary" />,
      actionText: 'View GitHub',
      directLink: personal.github
    },
    {
      id: 'phone',
      label: 'WhatsApp / Phone',
      value: personal.phone,
      icon: <Phone size={20} className="text-primary" />,
      actionText: 'Open Chat',
      directLink: personal.whatsapp
    }
  ];

  const handleCopy = (key, text) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    onNotify?.({
      type: 'success',
      message: `Copied ${text} to clipboard!`
    });
    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    // Simulate reliable dispatch with n8n/form webhook simulation
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch (err) {
        // Safe fallback if confetti isn't supported
      }

      onNotify?.({
        type: 'success',
        message: 'Message dispatched successfully! Abdullah will get back to you soon.'
      });
    }, 1200);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>06. Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Open to entry-level Software Developer / Flutter Developer roles, engineering discussions, and high-impact projects.
          </p>
        </div>

        {/* Two-Column Responsive Layout (FR-16 & FR-17) */}
        <div className="contact-grid">
          {/* Left Column: Direct Contact Methods & Copy */}
          <div className="contact-info-column">
            <div className="contact-invite-box">
              <h3 className="contact-invite-heading">Have an opportunity or project in mind?</h3>
              <p className="contact-invite-text">
                Whether you have an open position on your mobile/backend team, a freelance inquiry, or just want to discuss Flutter and AI architecture, my inbox is always open.
              </p>
            </div>

            <div className="contact-cards-list">
              {contactMethods.map((method) => (
                <div key={method.id} className="contact-item-card">
                  <div className="contact-item-icon-wrap">
                    {method.icon}
                  </div>
                  <div className="contact-item-details">
                    <span className="contact-item-label">{method.label}</span>
                    <strong className="contact-item-value">{method.value}</strong>
                  </div>
                  <div className="contact-item-actions">
                    <button
                      onClick={() => handleCopy(method.id, method.value)}
                      className="contact-action-btn"
                      aria-label={`Copy ${method.label}`}
                      title={`Copy ${method.label}`}
                    >
                      {copiedKey === method.id ? (
                        <Check size={16} className="text-success" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                    {method.directLink && (
                      <a
                        href={method.directLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-action-btn"
                        aria-label={`Open ${method.label} Link`}
                        title={`Open ${method.label}`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form (FR-17) */}
          <div className="contact-form-column">
            <div className="card contact-form-card">
              <div className="form-card-header">
                <h3 className="form-card-title">Send a Direct Message</h3>
                <p className="form-card-sub">Responses typically delivered within 24 hours.</p>
              </div>

              {/* Success Banner */}
              {status === 'success' && (
                <div className="form-banner banner-success" role="alert">
                  <CheckCircle2 size={20} className="banner-icon" />
                  <div>
                    <strong>Thanks! I'll reply soon.</strong>
                    <p>Your message has been received. Have a wonderful day!</p>
                  </div>
                </div>
              )}

              {/* Error Banner */}
              {status === 'error' && (
                <div className="form-banner banner-error" role="alert">
                  <AlertCircle size={20} className="banner-icon" />
                  <div>
                    <strong>Something went wrong.</strong>
                    <p>Please try again or reach out directly at {personal.email}.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="contact-form-element">
                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Your Name <span className="req-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className={`form-input ${errors.name ? 'input-error' : ''}`}
                    disabled={status === 'submitting'}
                  />
                  {errors.name && <span className="error-hint">{errors.name}</span>}
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Email Address <span className="req-star">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sarah@company.com"
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                    disabled={status === 'submitting'}
                  />
                  {errors.email && <span className="error-hint">{errors.email}</span>}
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Message <span className="req-star">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the role, project scope, or opportunity..."
                    className={`form-input form-textarea ${errors.message ? 'input-error' : ''}`}
                    disabled={status === 'submitting'}
                  />
                  {errors.message && <span className="error-hint">{errors.message}</span>}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn btn-primary form-submit-btn"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="spinner-icon" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
