import React from 'react';

const COLORS = {
  indigo: '#6366f1',
  green: '#22c55e',
  amber: '#f59e0b',
  red: '#ef4444',
  blue: '#3b82f6',
};

export default function Avatar({ name = '?', size = 40, color = 'indigo' }) {
  const bg = COLORS[color] || COLORS.indigo;
  const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: bg, display: 'flex', alignItems: 'center',
      justifyContent: 'center', fontWeight: 700,
      fontSize: size * 0.38, color: '#fff', flexShrink: 0,
      userSelect: 'none',
    }}>
      {initials}
    </div>
  );
}
