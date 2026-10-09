import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 size={20} className="toast-icon text-success" />,
    error: <AlertCircle size={20} className="toast-icon text-error" />,
    info: <Info size={20} className="toast-icon text-primary" />
  };

  return (
    <div className={`toast-container toast-${toast.type || 'info'}`} role="status" aria-live="polite">
      <div className="toast-content">
        {icons[toast.type] || icons.info}
        <div className="toast-message">{toast.message}</div>
      </div>
      <button 
        onClick={onClose} 
        className="toast-close"
        aria-label="Close notification"
      >
        <X size={16} />
      </button>
    </div>
  );
}
