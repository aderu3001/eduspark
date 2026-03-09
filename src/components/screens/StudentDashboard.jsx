import React, { useState } from 'react';
import { BookOpen, BarChart2, Compass, Award } from 'lucide-react';
import NavBtn from '../atoms/NavBtn.jsx';
import Bar from '../atoms/Bar.jsx';
import MasteryRing from '../atoms/MasteryRing.jsx';
import Avatar from '../atoms/Avatar.jsx';
import { CURRICULA, SUBJECTS } from '../../data/curricula.js';
import { getMasteryColor } from '../../engine/mastery.js';

// ── Achievements data ────────────────────────────────────────────────────────
const ALL_BADGES = [
  { id: 'first_q', icon: '🎯', label: 'First Question', desc: 'Answer your first question', earned: true },
  { id: 'streak3', icon: '🔥', label: '3-Day Streak', desc: 'Practice 3 days in a row', earned: false },
  { id: 'streak7', icon: '⚡', label: '7-Day Streak', desc: 'Practice 7 days in a row', earned: false },
  { id: 'xp100', icon: '💎', label: '100 XP', desc: 'Earn 100 XP total', earned: false },
  { id: 'xp500', icon: '👑', label: '500 XP', desc: 'Earn 500 XP total', earned: false },
  { id: 'perfect', icon: '🌟', label: 'Perfect Session', desc: 'Score 100% in a session', earned: false },
  { id: 'mastery60', icon: '📈', label: 'Proficient', desc: 'Reach 60% mastery in any topic', earned: false },
  { id: 'mastery80', icon: '🏆', label: 'Advanced', desc: 'Reach 80% mastery in any topic', earned: false },
];

// ── Home Tab ─────────────────────────────────────────────────────────────────
function HomeTab({ user, xp, streak, recentTopics, onStartTopic }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Welcome */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.1))',
        border: '1px solid rgba(99,102,241,0.2)', borderRadius: 14, padding: 20,
        display: 'flex', alignItems: 'center', gap: 16,
      }}>
        <Avatar name={user.name} size={52} />
        <div>
          <h2 style={{ fontSize: 18, fontWeight: 700 }}>Welcome back, {user.name}! 👋</h2>
          <p style={{ color: '#94a3b8', fontSize: 13, marginTop: 2 }}>Ready to continue your learning journey?</p>
          <div style={{ display: 'flex', gap: 16, marginTop: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#f97316', fontSize: 13, fontWeight: 600 }}>
              🔥 {streak} day streak
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#6366f1', fontSize: 13, fontWeight: 600 }}>
              ⚡ {xp} XP total
            </div>
          </div>
        </div>
      </div>

      {/* Quick stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 12 }}>
        {[
          { label: 'Topics Practiced', value: recentTopics.length, icon: '📚', color: '#6366f1' },
          { label: 'Days Active', value: streak, icon: '🔥', color: '#f97316' },
          { label: 'Total XP', value: xp, icon: '⚡', color: '#8b5cf6' },
          { label: 'Avg Score', value: '72%', icon: '📊', color: '#22c55e' },
        ].map((s, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 12, padding: 14, textAlign: 'center',
          }}>
            <div style={{ fontSize: 24 }}>{s.icon}</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: s.color, marginTop: 4 }}>{s.value}</div>
            <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Recent topics */}
      {recentTopics.length > 0 && (
        <div>
          <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 12 }}>Recent Topics</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {recentTopics.slice(0, 4).map((t, i) => (
              <button key={i} onClick={() => onStartTopic(t)} style={{
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 10, padding: '12px 14px', textAlign: 'left', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 12, color: '#e2e8f0',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#6366f1'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
              >
                <span style={{ fontSize: 20 }}>📚</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{t.subtopic}</div>
                  <div style={{ fontSize: 11, color: '#94a3b8' }}>{t.subject} · {t.grade}</div>
                </div>
                <span style={{ color: '#6366f1', fontSize: 12 }}>Continue →</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {recentTopics.length === 0 && (
        <div style={{
          background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 14, padding: 24, textAlign: 'center',
        }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🚀</div>
          <h3 style={{ marginBottom: 8 }}>Start Your First Practice!</h3>
          <p style={{ color: '#94a3b8', fontSize: 13 }}>Choose a curriculum and topic to begin your adaptive learning journey.</p>
        </div>
      )}
    </div>
  );
}

// ── Progress Tab ─────────────────────────────────────────────────────────────
function getAllTopicsForCurriculum(curId) {
  const grades = Object.keys(SUBJECTS[curId] || {});
  return grades.flatMap(g =>
    Object.keys(SUBJECTS[curId][g] || {}).flatMap(s =>
      (SUBJECTS[curId][g][s] || []).map(st => `${curId}:${g}:${s}:${st}`)
    )
  );
}

function ProgressTab({ masteryMap }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <h3 style={{ fontSize: 16, fontWeight: 600 }}>Your Mastery by Curriculum</h3>
      {CURRICULA.map(cur => {
        const topics = getAllTopicsForCurriculum(cur.id);
        const practiced = topics.filter(k => masteryMap[k] != null);
        const avgMastery = practiced.length > 0
          ? Math.round(practiced.reduce((s, k) => s + masteryMap[k], 0) / practiced.length)
          : 0;

        return (
          <div key={cur.id} style={{
            background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 12, padding: 16,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 600 }}>{cur.label}</div>
                <div style={{ fontSize: 12, color: '#94a3b8' }}>{practiced.length}/{topics.length} topics practiced</div>
              </div>
              <MasteryRing score={avgMastery} size={54} />
            </div>
            <Bar value={avgMastery} max={100} color={getMasteryColor(avgMastery)} height={8} />
          </div>
        );
      })}

      {Object.keys(masteryMap).length > 0 && (
        <div>
          <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 12 }}>Topic Breakdown</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {Object.entries(masteryMap).map(([key, score]) => {
              const [cur, grade, subject, subtopic] = key.split(':');
              return (
                <div key={key} style={{
                  background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '10px 14px',
                  display: 'flex', alignItems: 'center', gap: 12,
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 500 }}>{subtopic}</div>
                    <div style={{ fontSize: 11, color: '#94a3b8' }}>{subject} · {grade}</div>
                  </div>
                  <div style={{ textAlign: 'right', minWidth: 120 }}>
                    <div style={{ fontSize: 12, color: getMasteryColor(score), fontWeight: 700 }}>{score}%</div>
                    <div style={{ width: 100 }}>
                      <Bar value={score} max={100} color={getMasteryColor(score)} height={4} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Explore Tab ───────────────────────────────────────────────────────────────
function ExploreTab({ onPickFlow }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <h3 style={{ fontSize: 16, fontWeight: 600 }}>Explore Curricula</h3>
      {CURRICULA.map(cur => (
        <div key={cur.id} style={{
          background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 12, padding: 16,
        }}>
          <div style={{ fontWeight: 700, marginBottom: 8 }}>{cur.label}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {cur.grades.map(g => (
              <button key={g} onClick={() => onPickFlow(cur.id, g)} style={{
                background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)',
                borderRadius: 8, padding: '6px 12px', color: '#818cf8',
                cursor: 'pointer', fontSize: 13,
              }}>
                {g}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Achievements Tab ──────────────────────────────────────────────────────────
function AchievementsTab() {
  return (
    <div>
      <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Your Badges</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 12 }}>
        {ALL_BADGES.map(b => (
          <div key={b.id} style={{
            background: b.earned ? 'rgba(99,102,241,0.12)' : 'rgba(255,255,255,0.03)',
            border: `1px solid ${b.earned ? 'rgba(99,102,241,0.3)' : 'rgba(255,255,255,0.06)'}`,
            borderRadius: 12, padding: 16, textAlign: 'center',
            opacity: b.earned ? 1 : 0.5,
          }}>
            <div style={{ fontSize: 32, marginBottom: 8, filter: b.earned ? 'none' : 'grayscale(1)' }}>{b.icon}</div>
            <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 4 }}>{b.label}</div>
            <div style={{ fontSize: 11, color: '#94a3b8', lineHeight: 1.4 }}>{b.desc}</div>
            {b.earned && (
              <div style={{ fontSize: 10, color: '#818cf8', marginTop: 8, fontWeight: 600 }}>✓ EARNED</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function StudentDashboard({ user, xp = 0, streak = 1, masteryMap = {}, recentTopics = [], onPickFlow, onLogout }) {
  const [tab, setTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'progress', label: 'My Progress', icon: '📈' },
    { id: 'explore', label: 'Explore', icon: '🔭' },
    { id: 'badges', label: 'Achievements', icon: '🏆' },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
        </div>
        {/* Desktop tabs */}
        <div style={{ display: 'flex', gap: 4 }} className="hide-mobile">
          {tabs.map(t => (
            <NavBtn key={t.id} icon={t.icon} label={t.label} active={tab === t.id} onClick={() => setTab(t.id)} />
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 13, color: '#94a3b8' }}>🔥 {streak}</span>
          <span style={{ fontSize: 13, color: '#6366f1', fontWeight: 600 }}>⚡ {xp} XP</span>
          <Avatar name={user.name} size={34} />
          <button onClick={onLogout} style={{
            color: '#94a3b8', background: 'none', border: 'none',
            cursor: 'pointer', fontSize: 13,
          }}>Logout</button>
        </div>
      </div>

      {/* Content */}
      <div className="fu" style={{ flex: 1, padding: '20px 16px', maxWidth: 800, margin: '0 auto', width: '100%' }}>
        {tab === 'home' && <HomeTab user={user} xp={xp} streak={streak} recentTopics={recentTopics} onStartTopic={t => onPickFlow(t.curriculum, t.grade, t.subject, t.subtopic)} />}
        {tab === 'progress' && <ProgressTab masteryMap={masteryMap} />}
        {tab === 'explore' && <ExploreTab onPickFlow={(c, g) => onPickFlow(c, g)} />}
        {tab === 'badges' && <AchievementsTab />}
      </div>

      {/* Mobile bottom nav */}
      <div className="show-mobile" style={{
        position: 'sticky', bottom: 0, background: '#1a1a2e',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '8px 0', display: 'flex', justifyContent: 'space-around',
      }}>
        {tabs.map(t => (
          <NavBtn key={t.id} icon={t.icon} label={t.label} active={tab === t.id} onClick={() => setTab(t.id)} />
        ))}
      </div>
    </div>
  );
}
