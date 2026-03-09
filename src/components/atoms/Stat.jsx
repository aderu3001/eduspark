import React from 'react';

export default function Stat({ label, value, sub, icon, color = '#6366f1' }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 12, padding: '16px 20px', display: 'flex',
      alignItems: 'center', gap: 12,
    }}>
      {icon && (
        <div style={{
          width: 44, height: 44, borderRadius: 10,
          background: color + '22', display: 'flex',
          alignItems: 'center', justifyContent: 'center', fontSize: 20,
        }}>
          {icon}
        </div>
      )}
      <div>
        <div style={{ fontSize: 22, fontWeight: 700, color }}>{value}</div>
        <div style={{ fontSize: 13, color: '#94a3b8' }}>{label}</div>
        {sub && <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>{sub}</div>}
      </div>
    </div>
  );
}
