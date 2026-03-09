import React, { useState } from 'react';
import Avatar from '../atoms/Avatar.jsx';
import NavBtn from '../atoms/NavBtn.jsx';
import Bar from '../atoms/Bar.jsx';
import Stat from '../atoms/Stat.jsx';
import { QB, getQs } from '../../data/questionBank.js';
import { CURRICULA, SUBJECTS, SUBTOPICS } from '../../data/curricula.js';
import { getMasteryColor } from '../../engine/mastery.js';

// Mock student data
const MOCK_STUDENTS = [
  { name: 'Alice Chen', curriculum: 'IGCSE', mastery: 78, streak: 12, lastActive: 'Today', xp: 450 },
  { name: 'Bilal Malik', curriculum: 'IB DP', mastery: 65, streak: 5, lastActive: 'Yesterday', xp: 320 },
  { name: 'Sofia Torres', curriculum: 'Canada', mastery: 82, streak: 21, lastActive: 'Today', xp: 610 },
  { name: 'James Park', curriculum: 'IB MYP', mastery: 45, streak: 2, lastActive: '3 days ago', xp: 150 },
  { name: 'Emma Wilson', curriculum: 'GED', mastery: 91, streak: 30, lastActive: 'Today', xp: 980 },
  { name: 'Mohammed Al-Rashid', curriculum: 'IGCSE', mastery: 55, streak: 7, lastActive: 'Today', xp: 280 },
  { name: 'Priya Sharma', curriculum: 'IB DP', mastery: 72, streak: 14, lastActive: '2 days ago', xp: 390 },
];

// ── Overview Tab ──────────────────────────────────────────────────────────────
function OverviewTab() {
  const avgMastery = Math.round(MOCK_STUDENTS.reduce((s, st) => s + st.mastery, 0) / MOCK_STUDENTS.length);
  const activeStreaks = MOCK_STUDENTS.filter(s => s.streak >= 7).length;
  const qsAnswered = Math.floor(Math.random() * 200) + 150; // mock

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <h3 style={{ fontSize: 16, fontWeight: 600 }}>Platform Overview</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
        <Stat icon="👥" label="Total Students" value={MOCK_STUDENTS.length} color="#6366f1" />
        <Stat icon="📊" label="Avg Mastery" value={`${avgMastery}%`} color="#22c55e" />
        <Stat icon="✅" label="Questions Today" value={qsAnswered} color="#f59e0b" />
        <Stat icon="🔥" label="Active Streaks (≥7d)" value={activeStreaks} color="#f97316" />
      </div>

      <div style={{
        background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 12, padding: 16,
      }}>
        <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 14, color: '#94a3b8' }}>Curriculum Distribution</h4>
        {CURRICULA.map(cur => {
          const count = MOCK_STUDENTS.filter(s => s.curriculum === cur.label).length;
          return (
            <div key={cur.id} style={{ marginBottom: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 4 }}>
                <span>{cur.label}</span>
                <span style={{ color: '#94a3b8' }}>{count} student{count !== 1 ? 's' : ''}</span>
              </div>
              <Bar value={count} max={MOCK_STUDENTS.length} color="#6366f1" height={6} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Students Tab ──────────────────────────────────────────────────────────────
function StudentsTab() {
  return (
    <div>
      <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Student Roster</h3>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              {['Student', 'Curriculum', 'Mastery', 'Streak', 'Last Active', 'XP'].map(h => (
                <th key={h} style={{ textAlign: 'left', padding: '8px 12px', color: '#94a3b8', fontWeight: 600 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MOCK_STUDENTS.map((s, i) => (
              <tr key={i} style={{
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <td style={{ padding: '10px 12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Avatar name={s.name} size={28} />
                    <span style={{ fontWeight: 500 }}>{s.name}</span>
                  </div>
                </td>
                <td style={{ padding: '10px 12px', color: '#94a3b8' }}>{s.curriculum}</td>
                <td style={{ padding: '10px 12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 60 }}>
                      <Bar value={s.mastery} max={100} color={getMasteryColor(s.mastery)} height={4} />
                    </div>
                    <span style={{ color: getMasteryColor(s.mastery), fontWeight: 600 }}>{s.mastery}%</span>
                  </div>
                </td>
                <td style={{ padding: '10px 12px', color: '#f97316' }}>🔥 {s.streak}d</td>
                <td style={{ padding: '10px 12px', color: '#94a3b8' }}>{s.lastActive}</td>
                <td style={{ padding: '10px 12px', color: '#6366f1', fontWeight: 600 }}>⚡ {s.xp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Content Tab ───────────────────────────────────────────────────────────────
function ContentTab() {
  const allKeys = Object.keys(QB);
  const allTopics = CURRICULA.flatMap(cur =>
    Object.keys(SUBJECTS[cur.id] || {}).flatMap(grade =>
      Object.keys(SUBJECTS[cur.id][grade] || {}).flatMap(subject =>
        (SUBTOPICS[cur.id]?.[grade]?.[subject] || []).map(st => ({
          key: `${cur.id}:${grade}:${subject}:${st}`,
          cur: cur.label, grade, subject, subtopic: st,
        }))
      )
    )
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
        <h3 style={{ fontSize: 16, fontWeight: 600 }}>Question Bank Coverage</h3>
        <div style={{ fontSize: 13, color: '#94a3b8' }}>
          {allKeys.length} / {allTopics.length} topics with real questions
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxHeight: 500, overflowY: 'auto' }}>
        {allTopics.map(t => {
          const hasReal = !!QB[t.key];
          return (
            <div key={t.key} style={{
              background: 'rgba(255,255,255,0.03)', borderRadius: 8,
              padding: '10px 14px', display: 'flex', alignItems: 'center',
              gap: 10, fontSize: 13,
            }}>
              <span style={{ fontSize: 16 }}>{hasReal ? '✅' : '⬜'}</span>
              <div style={{ flex: 1 }}>
                <span style={{ fontWeight: 500 }}>{t.subtopic}</span>
                <span style={{ color: '#94a3b8', marginLeft: 8, fontSize: 12 }}>{t.subject} · {t.grade} · {t.cur}</span>
              </div>
              {hasReal && (
                <span style={{ color: '#22c55e', fontSize: 12, fontWeight: 600 }}>
                  {QB[t.key].length} questions
                </span>
              )}
              {!hasReal && (
                <span style={{ color: '#94a3b8', fontSize: 12 }}>Fallback</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Reports Tab ───────────────────────────────────────────────────────────────
function ReportsTab() {
  const distribution = [
    { label: '0-20%', count: 1, color: '#ef4444' },
    { label: '21-40%', count: 1, color: '#f97316' },
    { label: '41-60%', count: 2, color: '#eab308' },
    { label: '61-80%', count: 2, color: '#22c55e' },
    { label: '81-100%', count: 1, color: '#6366f1' },
  ];
  const maxCount = Math.max(...distribution.map(d => d.count));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <h3 style={{ fontSize: 16, fontWeight: 600 }}>Mastery Distribution</h3>
      <div style={{
        background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 12, padding: '20px',
      }}>
        <h4 style={{ fontSize: 13, color: '#94a3b8', marginBottom: 20 }}>Students by Mastery Range</h4>
        <svg viewBox="0 0 400 200" style={{ width: '100%', maxWidth: 400 }}>
          {distribution.map((d, i) => {
            const barH = (d.count / maxCount) * 140;
            const x = i * 76 + 20;
            const y = 160 - barH;
            return (
              <g key={i}>
                <rect x={x} y={y} width={56} height={barH} rx={4} fill={d.color} fillOpacity={0.8} />
                <text x={x + 28} y={175} textAnchor="middle" fill="#94a3b8" fontSize={10}>{d.label}</text>
                <text x={x + 28} y={y - 4} textAnchor="middle" fill={d.color} fontSize={11} fontWeight="bold">{d.count}</text>
              </g>
            );
          })}
          <line x1={10} y1={160} x2={390} y2={160} stroke="rgba(255,255,255,0.1)" strokeWidth={1} />
        </svg>
      </div>

      <div style={{
        background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 12, padding: 16,
      }}>
        <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 14 }}>Mastery by Subject Area</h4>
        {[
          { subject: 'Mathematics', mastery: 72 },
          { subject: 'Chemistry', mastery: 58 },
          { subject: 'Physics', mastery: 65 },
          { subject: 'Biology', mastery: 70 },
          { subject: 'Economics', mastery: 55 },
        ].map(s => (
          <div key={s.subject} style={{ marginBottom: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 4 }}>
              <span>{s.subject}</span>
              <span style={{ color: getMasteryColor(s.mastery), fontWeight: 600 }}>{s.mastery}%</span>
            </div>
            <Bar value={s.mastery} max={100} color={getMasteryColor(s.mastery)} height={6} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function AdminDashboard({ onLogout }) {
  const [tab, setTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'students', label: 'Students', icon: '👥' },
    { id: 'content', label: 'Content', icon: '📚' },
    { id: 'reports', label: 'Reports', icon: '📈' },
  ];

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Header */}
      <div style={{
        background: '#1a1a2e', borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, zIndex: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 22, fontWeight: 800, background: 'linear-gradient(135deg, #6366f1, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            ⚡ EduSpark
          </span>
          <span style={{ background: 'rgba(99,102,241,0.15)', color: '#818cf8', borderRadius: 6, padding: '2px 8px', fontSize: 12, fontWeight: 600 }}>Admin</span>
        </div>
        <div style={{ display: 'flex', gap: 4 }} className="hide-mobile">
          {tabs.map(t => (
            <NavBtn key={t.id} icon={t.icon} label={t.label} active={tab === t.id} onClick={() => setTab(t.id)} />
          ))}
        </div>
        <button onClick={onLogout} style={{
          color: '#94a3b8', background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8,
          padding: '6px 14px', cursor: 'pointer', fontSize: 13,
        }}>Logout</button>
      </div>

      {/* Mobile tab bar */}
      <div className="show-mobile" style={{
        background: '#1a1a2e', borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '6px 0', display: 'flex', justifyContent: 'space-around',
      }}>
        {tabs.map(t => (
          <NavBtn key={t.id} icon={t.icon} label={t.label} active={tab === t.id} onClick={() => setTab(t.id)} />
        ))}
      </div>

      <div className="fu" style={{ padding: '20px 16px', maxWidth: 900, margin: '0 auto' }}>
        {tab === 'overview' && <OverviewTab />}
        {tab === 'students' && <StudentsTab />}
        {tab === 'content' && <ContentTab />}
        {tab === 'reports' && <ReportsTab />}
      </div>
    </div>
  );
}
