import React from 'react';

export default function NavBtn({ icon, label, active = false, onClick, badge }) {
  return (
    <button onClick={onClick} style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
      padding: '8px 16px', borderRadius: 10, cursor: 'pointer', border: 'none',
      background: active ? 'rgba(99,102,241,0.15)' : 'transparent',
      color: active ? '#6366f1' : '#94a3b8',
      transition: 'all 0.2s', position: 'relative',
      minWidth: 60,
    }}
    onMouseEnter={e => { if (!active) e.currentTarget.style.color = '#e2e8f0'; }}
    onMouseLeave={e => { if (!active) e.currentTarget.style.color = '#94a3b8'; }}
    >
      <span style={{ fontSize: 20 }}>{icon}</span>
      <span style={{ fontSize: 11, fontWeight: active ? 600 : 400 }}>{label}</span>
      {badge != null && badge > 0 && (
        <span style={{
          position: 'absolute', top: 4, right: 12,
          background: '#ef4444', color: '#fff',
          borderRadius: 999, fontSize: 10, fontWeight: 700,
          padding: '1px 5px', minWidth: 16, textAlign: 'center',
        }}>{badge}</span>
      )}
    </button>
  );
}
