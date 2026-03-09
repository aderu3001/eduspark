import React, { useEffect, useState } from 'react';

export default function Toast({ message, type = 'info', onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => { setVisible(false); setTimeout(onClose, 300); }, 3000);
    return () => clearTimeout(t);
  }, [onClose]);

  const colors = {
    success: '#22c55e',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#6366f1',
  };
  const color = colors[type] || colors.info;

  return (
    <div style={{
      position: 'fixed', bottom: 24, right: 24, zIndex: 9999,
      background: '#1e1e3a', border: `1px solid ${color}`,
      borderRadius: 12, padding: '12px 20px',
      boxShadow: `0 4px 24px ${color}44`,
      opacity: visible ? 1 : 0, transition: 'opacity 0.3s',
      display: 'flex', alignItems: 'center', gap: 10,
      maxWidth: 320, color: '#e2e8f0', fontSize: 14,
    }}>
      <span style={{ color, fontSize: 18 }}>
        {type === 'success' ? '✓' : type === 'error' ? '✗' : type === 'warning' ? '⚠' : 'ℹ'}
      </span>
      {message}
    </div>
  );
}
