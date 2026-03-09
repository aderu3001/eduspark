import React from 'react';
import { ChevronLeft } from 'lucide-react';

export default function BackButton({ onClick, label = 'Back' }) {
  return (
    <button onClick={onClick} style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      color: '#94a3b8', background: 'transparent', border: 'none',
      cursor: 'pointer', fontSize: 14, padding: '6px 0',
      transition: 'color 0.2s',
    }}
    onMouseEnter={e => e.currentTarget.style.color = '#e2e8f0'}
    onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
    >
      <ChevronLeft size={18} />
      {label}
    </button>
  );
}
