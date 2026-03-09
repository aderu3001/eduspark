import React from 'react';
import { QB } from '../../data/questionBank.js';
import BackButton from '../atoms/BackButton.jsx';
import MasteryRing from '../atoms/MasteryRing.jsx';
import Pill from '../atoms/Pill.jsx';
import DiffBadge from '../atoms/DiffBadge.jsx';

export default function SubtopicDetail({ curriculum, grade, subject, subtopic, mastery = 0, onStart, onBack }) {
  const key = `${curriculum}:${grade}:${subject}:${subtopic}`;
  const qs = QB[key] || [];

  return (
    <div className="fu" style={{ minHeight: '100vh', padding: '24px 16px', maxWidth: 640, margin: '0 auto' }}>
      <BackButton onClick={onBack} />
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, margin: '20px 0', flexWrap: 'wrap' }}>
        <MasteryRing score={mastery} size={90} />
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>{subtopic}</h2>
          <p style={{ color: '#94a3b8', fontSize: 13, marginBottom: 8 }}>{subject} · {grade} · {curriculum.toUpperCase().replace('_', ' ')}</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <Pill color="#6366f1">{qs.length > 0 ? `${qs.length} questions` : 'Practice mode'}</Pill>
            {qs.length > 0 && <Pill color="#22c55e">Real content</Pill>}
          </div>
        </div>
      </div>

      {qs.length > 0 && (
        <div style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 12, color: '#94a3b8' }}>Question types in this set</h3>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[...new Set(qs.map(q => q.type))].map(t => (
              <Pill key={t} color="#818cf8">{t}</Pill>
            ))}
            {[...new Set(qs.map(q => q.diff))].sort().map(d => (
              <DiffBadge key={d} diff={d} />
            ))}
          </div>
        </div>
      )}

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <button onClick={() => onStart(5)} style={{
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff',
          border: 'none', borderRadius: 10, padding: '13px 28px',
          fontSize: 15, fontWeight: 600, cursor: 'pointer',
        }}>
          Quick Practice (5 Qs)
        </button>
        <button onClick={() => onStart(10)} style={{
          background: 'rgba(99,102,241,0.15)', color: '#818cf8',
          border: '1px solid rgba(99,102,241,0.3)', borderRadius: 10,
          padding: '13px 28px', fontSize: 15, fontWeight: 600, cursor: 'pointer',
        }}>
          Full Session (10 Qs)
        </button>
      </div>
    </div>
  );
}
