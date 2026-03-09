import React from 'react';
import { CURRICULA } from '../../data/curricula.js';
import BackButton from '../atoms/BackButton.jsx';

const CURRICULUM_ICONS = {
  igcse: '🎓',
  ib_myp: '📗',
  ib_dp: '📘',
  canada: '🍁',
  ged: '📜',
};

const CURRICULUM_DESC = {
  igcse: 'International General Certificate of Secondary Education',
  ib_myp: 'International Baccalaureate Middle Years Programme',
  ib_dp: 'International Baccalaureate Diploma Programme',
  canada: 'Canadian General Curriculum (BC / Ontario)',
  ged: 'General Educational Development',
};

export default function PickCurriculum({ onPick, onBack }) {
  return (
    <div className="fu" style={{ minHeight: '100vh', padding: '24px 16px', maxWidth: 700, margin: '0 auto' }}>
      <BackButton onClick={onBack} />
      <h2 style={{ fontSize: 24, fontWeight: 700, margin: '16px 0 6px' }}>Choose Curriculum</h2>
      <p style={{ color: '#94a3b8', marginBottom: 24 }}>Select the curriculum that matches your school programme.</p>

      <div style={{ display: 'grid', gap: 14 }}>
        {CURRICULA.map(c => (
          <button key={c.id} onClick={() => onPick(c.id)} style={{
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 14, padding: '18px 20px', textAlign: 'left', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 16, color: '#e2e8f0',
            transition: 'border-color 0.2s, background 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#6366f1'; e.currentTarget.style.background = 'rgba(99,102,241,0.08)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
          >
            <span style={{ fontSize: 32 }}>{CURRICULUM_ICONS[c.id] || '📚'}</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: 17 }}>{c.label}</div>
              <div style={{ color: '#94a3b8', fontSize: 13, marginTop: 3 }}>{CURRICULUM_DESC[c.id]}</div>
              <div style={{ color: '#6366f1', fontSize: 12, marginTop: 4 }}>
                Grades: {c.grades.join(', ')}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
