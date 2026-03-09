import React from 'react';
import { CURRICULA } from '../../data/curricula.js';
import BackButton from '../atoms/BackButton.jsx';

export default function PickGrade({ curriculum, onPick, onBack }) {
  const cur = CURRICULA.find(c => c.id === curriculum);
  if (!cur) return null;

  return (
    <div className="fu" style={{ minHeight: '100vh', padding: '24px 16px', maxWidth: 600, margin: '0 auto' }}>
      <BackButton onClick={onBack} />
      <h2 style={{ fontSize: 24, fontWeight: 700, margin: '16px 0 6px' }}>Select Grade</h2>
      <p style={{ color: '#94a3b8', marginBottom: 24 }}>Curriculum: <span style={{ color: '#818cf8' }}>{cur.label}</span></p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 12 }}>
        {cur.grades.map(g => (
          <button key={g} onClick={() => onPick(g)} style={{
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 12, padding: '20px 16px', cursor: 'pointer',
            color: '#e2e8f0', fontWeight: 600, fontSize: 15,
            transition: 'all 0.2s', textAlign: 'center',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#6366f1'; e.currentTarget.style.background = 'rgba(99,102,241,0.1)'; e.currentTarget.style.color = '#818cf8'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = '#e2e8f0'; }}
          >
            {g}
          </button>
        ))}
      </div>
    </div>
  );
}
