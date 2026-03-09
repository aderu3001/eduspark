import React from 'react';
import { Zap, BookOpen, Award, Users } from 'lucide-react';

export default function Landing({ onGo }) {
  return (
    <div className="fu" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '24px 16px',
      background: 'radial-gradient(ellipse at 60% 20%, rgba(99,102,241,0.15) 0%, transparent 60%), #0f0f1a',
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
        <div style={{
          width: 56, height: 56, borderRadius: 16,
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
          boxShadow: '0 0 24px rgba(99,102,241,0.5)',
        }}>⚡</div>
        <div>
          <h1 style={{ fontSize: 32, fontWeight: 800, background: 'linear-gradient(135deg, #6366f1, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            EduSpark
          </h1>
          <p style={{ color: '#94a3b8', fontSize: 14, marginTop: 2 }}>Adaptive Mastery Learning</p>
        </div>
      </div>

      {/* Tagline */}
      <h2 style={{ fontSize: 22, fontWeight: 600, textAlign: 'center', maxWidth: 480, lineHeight: 1.4, color: '#e2e8f0', marginBottom: 12 }}>
        Master your curriculum with AI-powered adaptive practice
      </h2>
      <p style={{ color: '#94a3b8', textAlign: 'center', maxWidth: 400, fontSize: 15, marginBottom: 40, lineHeight: 1.6 }}>
        IGCSE • IB MYP • IB DP • Canada General • GED<br />
        Grades 5–12 · Personalised difficulty · Instant feedback
      </p>

      {/* Feature cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, maxWidth: 700, width: '100%', marginBottom: 40 }}>
        {[
          { icon: <Zap size={22} />, title: 'Adaptive Difficulty', desc: 'Questions adjust to your level in real time' },
          { icon: <BookOpen size={22} />, title: 'Rich Content', desc: 'Step-by-step solutions & common mistakes' },
          { icon: <Award size={22} />, title: 'Mastery Tracking', desc: 'Watch your skills grow with every session' },
          { icon: <Users size={22} />, title: 'Multi-Curriculum', desc: 'IGCSE, IB, Canada GED and more' },
        ].map((f, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', gap: 8,
          }}>
            <div style={{ color: '#6366f1' }}>{f.icon}</div>
            <div style={{ fontWeight: 600, fontSize: 14 }}>{f.title}</div>
            <div style={{ color: '#94a3b8', fontSize: 12, lineHeight: 1.5 }}>{f.desc}</div>
          </div>
        ))}
      </div>

      {/* CTA buttons */}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <button onClick={() => onGo('auth', { mode: 'signup' })} style={{
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          color: '#fff', border: 'none', borderRadius: 10,
          padding: '14px 32px', fontSize: 16, fontWeight: 600, cursor: 'pointer',
          boxShadow: '0 4px 24px rgba(99,102,241,0.4)',
          transition: 'transform 0.15s, box-shadow 0.15s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(99,102,241,0.5)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 24px rgba(99,102,241,0.4)'; }}
        >
          Get Started — Free
        </button>
        <button onClick={() => onGo('auth', { mode: 'login' })} style={{
          background: 'transparent', color: '#e2e8f0',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: 10, padding: '14px 32px', fontSize: 16,
          fontWeight: 600, cursor: 'pointer', transition: 'border-color 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
        >
          Log In
        </button>
        <button onClick={() => onGo('auth', { mode: 'admin' })} style={{
          background: 'transparent', color: '#94a3b8',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 10, padding: '14px 24px', fontSize: 14,
          fontWeight: 500, cursor: 'pointer',
        }}>
          Admin Demo
        </button>
      </div>
    </div>
  );
}
