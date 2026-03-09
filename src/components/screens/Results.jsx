import React from 'react';
import BackButton from '../atoms/BackButton.jsx';
import Bar from '../atoms/Bar.jsx';
import MasteryRing from '../atoms/MasteryRing.jsx';
import { getMotivationalMessage, getMasteryColor } from '../../engine/mastery.js';

export default function Results({ answers = [], subtopic, prevMastery = 0, newMastery = 0, sessionXP = 0, onTryAgain, onNewTopic, onDashboard }) {
  const total = answers.length;
  const correct = answers.filter(a => a.correct).length;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  const msg = getMotivationalMessage(pct);

  return (
    <div className="fu" style={{ minHeight: '100vh', padding: '24px 16px', maxWidth: 700, margin: '0 auto' }}>
      {/* Summary header */}
      <div style={{
        background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 16, padding: '24px 20px', marginBottom: 20, textAlign: 'center',
      }}>
        <div style={{ fontSize: 40, marginBottom: 8 }}>
          {pct >= 75 ? '🏆' : pct >= 50 ? '🌟' : '💪'}
        </div>
        <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>Session Complete!</h2>
        <p style={{ color: '#94a3b8', fontSize: 14, marginBottom: 20 }}>{subtopic}</p>
        <p style={{ fontSize: 15, color: '#e2e8f0', lineHeight: 1.6, maxWidth: 400, margin: '0 auto 20px' }}>{msg}</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {[
            { label: 'Score', value: `${correct}/${total}`, sub: `${pct}%`, color: pct >= 70 ? '#22c55e' : pct >= 40 ? '#f59e0b' : '#ef4444' },
            { label: 'XP Earned', value: `+${sessionXP}`, sub: 'this session', color: '#6366f1' },
            { label: 'Streak', value: '🔥 1', sub: 'day streak', color: '#f97316' },
          ].map((s, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: 14,
            }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 2 }}>{s.label}</div>
              <div style={{ fontSize: 11, color: '#64748b', marginTop: 1 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mastery change */}
      <div style={{
        background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 16, padding: '20px', marginBottom: 20,
      }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 16 }}>Mastery Progress</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <MasteryRing score={prevMastery} size={72} />
            <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 4 }}>Before</div>
          </div>
          <div style={{ flex: 1, fontSize: 24, textAlign: 'center', color: '#6366f1' }}>→</div>
          <div style={{ textAlign: 'center' }}>
            <MasteryRing score={newMastery} size={72} />
            <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 4 }}>After</div>
          </div>
          <div style={{ flex: 2, minWidth: 140 }}>
            <div style={{ marginBottom: 6, color: '#94a3b8', fontSize: 13 }}>
              {newMastery > prevMastery
                ? `+${newMastery - prevMastery} mastery gained`
                : newMastery < prevMastery
                  ? `${newMastery - prevMastery} mastery change`
                  : 'Mastery unchanged'}
            </div>
            <Bar value={newMastery} max={100} color={getMasteryColor(newMastery)} height={10} />
          </div>
        </div>
      </div>

      {/* Per-question review */}
      <div style={{
        background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 16, padding: '20px', marginBottom: 20,
      }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 14 }}>Question Review</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {answers.map((a, i) => (
            <div key={i} style={{
              background: a.correct ? 'rgba(34,197,94,0.06)' : 'rgba(239,68,68,0.06)',
              border: `1px solid ${a.correct ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)'}`,
              borderRadius: 10, padding: '12px 14px',
              display: 'flex', alignItems: 'flex-start', gap: 12,
            }}>
              <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>
                {a.correct ? '✓' : '✗'}
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 13, color: '#e2e8f0', marginBottom: 4, lineHeight: 1.5 }}>
                  <strong>Q{i + 1}:</strong> {a.question.text.length > 100 ? a.question.text.slice(0, 100) + '…' : a.question.text}
                </p>
                <div style={{ fontSize: 12, color: '#94a3b8' }}>
                  Your answer: <span style={{ color: a.correct ? '#86efac' : '#fca5a5' }}>{String(a.userAnswer || '—')}</span>
                  {!a.correct && (
                    <> · Correct: <span style={{ color: '#86efac' }}>{String(a.question.ans)}</span></>
                  )}
                </div>
              </div>
              {a.correct && (
                <span style={{ color: '#6366f1', fontSize: 12, fontWeight: 600, flexShrink: 0 }}>+{a.xp} XP</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <button onClick={onTryAgain} style={{
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          color: '#fff', border: 'none', borderRadius: 10,
          padding: '13px 24px', fontSize: 14, fontWeight: 600, cursor: 'pointer',
        }}>
          Try Again
        </button>
        <button onClick={onNewTopic} style={{
          background: 'rgba(99,102,241,0.12)', color: '#818cf8',
          border: '1px solid rgba(99,102,241,0.3)', borderRadius: 10,
          padding: '13px 24px', fontSize: 14, fontWeight: 600, cursor: 'pointer',
        }}>
          Pick New Topic
        </button>
        <button onClick={onDashboard} style={{
          background: 'transparent', color: '#94a3b8',
          border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10,
          padding: '13px 24px', fontSize: 14, cursor: 'pointer',
        }}>
          Dashboard
        </button>
      </div>
    </div>
  );
}
