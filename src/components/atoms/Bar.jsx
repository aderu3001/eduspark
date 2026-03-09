import React from 'react';

export default function Bar({ value = 0, max = 100, color = '#6366f1', height = 8, label = '' }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div style={{ width: '100%' }}>
      {label && <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 4 }}>{label}</div>}
      <div style={{
        width: '100%', height, background: 'rgba(255,255,255,0.08)',
        borderRadius: height, overflow: 'hidden',
      }}>
        <div style={{
          width: `${pct}%`, height: '100%', background: color,
          borderRadius: height, transition: 'width 0.6s ease',
        }} />
      </div>
    </div>
  );
}
