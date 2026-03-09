import React from 'react';
import { SUBJECTS } from '../../data/curricula.js';
import BackButton from '../atoms/BackButton.jsx';

const SUBJECT_ICONS = {
  Mathematics: '📐', Physics: '⚗️', Chemistry: '🧪', Biology: '🧬',
  English: '📖', Sciences: '🔬', 'Language & Literature': '✏️',
  Economics: '📊', 'Mathematical Reasoning': '🔢', Science: '🔬',
  'Language Arts': '📝', 'Social Studies': '🌍',
  'Reasoning Through Language Arts': '📚',
};

export default function PickSubject({ curriculum, grade, onPick, onBack }) {
  const subjects = SUBJECTS[curriculum]?.[grade] || [];

  return (
    <div className="fu" style={{ minHeight: '100vh', padding: '24px 16px', maxWidth: 600, margin: '0 auto' }}>
      <BackButton onClick={onBack} />
      <h2 style={{ fontSize: 24, fontWeight: 700, margin: '16px 0 6px' }}>Select Subject</h2>
      <p style={{ color: '#94a3b8', marginBottom: 24 }}>{grade} · {curriculum.toUpperCase().replace('_', ' ')}</p>

      <div style={{ display: 'grid', gap: 12 }}>
        {subjects.map(s => (
          <button key={s} onClick={() => onPick(s)} style={{
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 12, padding: '16px 20px', cursor: 'pointer',
            color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: 14,
            transition: 'all 0.2s', textAlign: 'left',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#6366f1'; e.currentTarget.style.background = 'rgba(99,102,241,0.08)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
          >
            <span style={{ fontSize: 24 }}>{SUBJECT_ICONS[s] || '📚'}</span>
            <span style={{ fontWeight: 600, fontSize: 15 }}>{s}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
