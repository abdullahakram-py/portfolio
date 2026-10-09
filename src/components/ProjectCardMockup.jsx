import React from 'react';
import { 
  CloudSun, 
  Wind, 
  Droplets, 
  MessageSquare, 
  Send, 
  BookOpen, 
  FileText, 
  PhoneCall, 
  Sparkles, 
  Database,
  Calendar,
  Layers,
  ArrowRight,
  Sun
} from 'lucide-react';

export default function ProjectCardMockup({ projectId }) {
  if (projectId === 'ai-student-guide') {
    return (
      <div className="mockup-frame mockup-laptop-phone">
        {/* Laptop Frame */}
        <div className="laptop-screen">
          <div className="laptop-top-bar">
            <div className="window-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <span className="laptop-url-bar">uet-taxila.edu.pk/virtual-guide</span>
          </div>
          <div className="laptop-body-content">
            <div className="chat-bubble chat-bot">
              <div className="chat-avatar-mini">🤖</div>
              <div className="chat-text-wrap">
                <p className="chat-author">UET Student Guide AI</p>
                <p className="chat-msg">Hello Abdullah! Final exam timetables for BS Software Engineering (Semester 8) have been posted.</p>
              </div>
            </div>
            <div className="chat-bubble chat-user">
              <p className="chat-msg">Where is the Distributed Systems lecture hall today?</p>
            </div>
            <div className="chat-bubble chat-bot">
              <div className="chat-avatar-mini">🤖</div>
              <div className="chat-text-wrap">
                <p className="chat-msg">Hall CS-204, Software Engineering Department, 2nd Floor.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Mobile Companion Frame */}
        <div className="mobile-companion-mockup">
          <div className="mobile-speaker" />
          <div className="mobile-inner-screen">
            <div className="mobile-app-header">
              <span>Campus AI</span>
              <span className="live-status-badge">Online</span>
            </div>
            <div className="mobile-chat-preview">
              <div className="mini-msg bot">Exam Alert: 10:00 AM</div>
              <div className="mini-msg user">Checked!</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'weather-application') {
    return (
      <div className="mockup-frame mockup-weather">
        <div className="phone-screen-container">
          <div className="phone-notch" />
          <div className="weather-display-card">
            <div className="weather-top-meta">
              <span className="weather-city">Islamabad, PK</span>
              <span className="weather-condition">Partly Sunny</span>
            </div>
            <div className="weather-temp-row">
              <Sun size={44} className="weather-sun-icon" />
              <span className="weather-temp">24°</span>
            </div>
            
            <div className="weather-stats-row">
              <div className="w-stat">
                <Droplets size={14} />
                <span>48%</span>
              </div>
              <div className="w-stat">
                <Wind size={14} />
                <span>12 km/h</span>
              </div>
              <div className="w-stat">
                <CloudSun size={14} />
                <span>UV 3</span>
              </div>
            </div>

            {/* 7-Day Mini Cards */}
            <div className="forecast-mini-row">
              <div className="forecast-mini-pill">
                <span>Mon</span>
                <Sun size={14} />
                <strong>25°</strong>
              </div>
              <div className="forecast-mini-pill active">
                <span>Tue</span>
                <CloudSun size={14} />
                <strong>24°</strong>
              </div>
              <div className="forecast-mini-pill">
                <span>Wed</span>
                <Droplets size={14} />
                <strong>21°</strong>
              </div>
              <div className="forecast-mini-pill">
                <span>Thu</span>
                <Sun size={14} />
                <strong>26°</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'student-notes-app') {
    return (
      <div className="mockup-frame mockup-notes">
        <div className="phone-screen-container">
          <div className="phone-notch" />
          <div className="notes-app-screen">
            <div className="notes-header">
              <div className="notes-title-bar">
                <BookOpen size={16} className="text-primary" />
                <span>QuickNotes Flutter</span>
              </div>
              <span className="db-badge">SQLite Local</span>
            </div>

            <div className="notes-search-bar">
              <span>🔍 Search #mobile-dev, #algorithms...</span>
            </div>

            <div className="notes-list-preview">
              <div className="note-card-item">
                <div className="note-item-header">
                  <span className="note-tag tag-blue">#Flutter</span>
                  <span className="note-time">Today, 2:15 PM</span>
                </div>
                <h5 className="note-item-title">State Management in Provider</h5>
                <p className="note-item-body">ChangeNotifierProvider creates reactive state without rebuild bottlenecks...</p>
              </div>

              <div className="note-card-item">
                <div className="note-item-header">
                  <span className="note-tag tag-purple">#Algorithms</span>
                  <span className="note-time">Yesterday</span>
                </div>
                <h5 className="note-item-title">Graph Traversal Patterns (BFS/DFS)</h5>
                <p className="note-item-body">Time complexity O(V+E) utilizing adjacency list...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'ai-voice-receptionist') {
    return (
      <div className="mockup-frame mockup-voice">
        <div className="voice-flow-container">
          <div className="flow-step-box step-vapi">
            <div className="flow-step-header">
              <PhoneCall size={18} className="text-primary" />
              <span>Vapi Voice AI</span>
            </div>
            <div className="voice-soundwave">
              <span className="wave bar-1" />
              <span className="wave bar-2" />
              <span className="wave bar-3" />
              <span className="wave bar-4" />
              <span className="wave bar-5" />
            </div>
            <span className="flow-badge">Real-time Caller Dialogue</span>
          </div>

          <div className="flow-arrow-connector">
            <ArrowRight size={20} className="connector-icon" />
            <span className="connector-text">Webhook</span>
          </div>

          <div className="flow-step-box step-n8n">
            <div className="flow-step-header">
              <Sparkles size={18} className="text-primary" />
              <span>n8n Orchestrator</span>
            </div>
            <div className="n8n-nodes-row">
              <div className="mini-node">Parse LLM</div>
              <div className="mini-node">Check Slot</div>
            </div>
            <span className="flow-badge">Automation Logic</span>
          </div>

          <div className="flow-arrow-connector">
            <ArrowRight size={20} className="connector-icon" />
          </div>

          <div className="flow-step-box step-integrations">
            <div className="flow-step-header">
              <Calendar size={18} className="text-primary" />
              <span>Sync Services</span>
            </div>
            <div className="integrations-list">
              <span className="int-pill">Google Calendar</span>
              <span className="int-pill">Google Sheets</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
