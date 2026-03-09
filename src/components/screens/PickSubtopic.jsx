import React from 'react';
import { SUBTOPICS } from '../../data/curricula.js';
import { QB } from '../../data/questionBank.js';
import BackButton from '../atoms/BackButton.jsx';
import Pill from '../atoms/Pill.jsx';

export default function PickSubtopic({ curriculum, grade, subject, onPick, onBack }) {
  const subtopics = SUBTOPICS[curriculum]?.[grade]?.[subject] || [];

  return (
    <div className="fu" style={{ minHeight: '100vh', padding: '24px 16px', maxWidth: 640, margin: '0 auto' }}>
      <BackButton onClick={onBack} />
      <h2 style={{ fontSize: 24, fontWeight: 700, margin: '16px 0 6px' }}>Select Subtopic</h2>
      <p style={{ color: '#94a3b8', marginBottom: 24 }}>{subject} · {grade}</p>

      <div style={{ display: 'grid', gap: 12 }}>
        {subtopics.map(st => {
          const key = `${curriculum}:${grade}:${subject}:${st}`;
          const hasRealQs = !!QB[key];
          return (
            <button key={st} onClick={() => onPick(st)} style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 12, padding: '16px 20px', cursor: 'pointer', textAlign: 'left',
              color: '#e2e8f0', display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', gap: 12,
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#6366f1'; e.currentTarget.style.background = 'rgba(99,102,241,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
            >
              <span style={{ fontWeight: 500, fontSize: 15 }}>{st}</span>
              <div style={{ display: 'flex', gap: 6, alignItems: 'center', flexShrink: 0 }}>
                {hasRealQs
                  ? <Pill color="#22c55e" small>✓ {QB[key].length} questions</Pill>
                  : <Pill color="#94a3b8" small>Practice mode</Pill>
                }
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
