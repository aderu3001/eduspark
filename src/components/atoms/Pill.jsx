import React from 'react';

export default function Pill({ children, color = '#6366f1', small = false }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      background: color + '22', color, border: `1px solid ${color}44`,
      borderRadius: 999, padding: small ? '2px 8px' : '4px 12px',
      fontSize: small ? 11 : 12, fontWeight: 600, whiteSpace: 'nowrap',
    }}>
      {children}
    </span>
  );
}
