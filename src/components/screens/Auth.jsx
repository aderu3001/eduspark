import React, { useState } from 'react';
import BackButton from '../atoms/BackButton.jsx';

export default function Auth({ mode: initMode = 'login', onSuccess, onBack }) {
  const [mode, setMode] = useState(initMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr('');
    if (!email || !pass) { setErr('Please fill in all fields.'); return; }
    if (mode === 'signup' && !name) { setErr('Please enter your name.'); return; }
    if (mode === 'admin') {
      if (email === 'admin@eduspark.com' && pass === 'admin123') {
        onSuccess({ role: 'admin', name: 'Admin' });
      } else { setErr('Invalid admin credentials. Try admin@eduspark.com / admin123'); }
      return;
    }
    // Mock authentication — any email/pass works
    onSuccess({ role: 'student', name: name || email.split('@')[0], email });
  };

  const inputStyle = {
    width: '100%', background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10,
    padding: '12px 14px', color: '#e2e8f0', fontSize: 15, outline: 'none',
  };

  return (
    <div className="fu" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 16, background: '#0f0f1a',
    }}>
      <div style={{
        background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 16, padding: '32px 28px', width: '100%', maxWidth: 380,
        boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
      }}>
        <div style={{ marginBottom: 8 }}><BackButton onClick={onBack} /></div>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>
            {mode === 'admin' ? '🛡️' : mode === 'signup' ? '🎓' : '👋'}
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 700 }}>
            {mode === 'admin' ? 'Admin Login' : mode === 'signup' ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p style={{ color: '#94a3b8', fontSize: 13, marginTop: 4 }}>
            {mode === 'admin' ? 'Access the admin dashboard' : mode === 'signup' ? 'Start your learning journey' : 'Continue your learning journey'}
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {mode === 'signup' && (
            <input style={inputStyle} placeholder="Your name" value={name}
              onChange={e => setName(e.target.value)} />
          )}
          <input style={inputStyle} type="email" placeholder="Email address" value={email}
            onChange={e => setEmail(e.target.value)} />
          <input style={inputStyle} type="password" placeholder="Password" value={pass}
            onChange={e => setPass(e.target.value)} />

          {err && (
            <div style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 8, padding: '10px 14px', color: '#fca5a5', fontSize: 13 }}>
              {err}
            </div>
          )}

          <button type="submit" style={{
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff',
            border: 'none', borderRadius: 10, padding: '13px', fontSize: 15,
            fontWeight: 600, cursor: 'pointer', marginTop: 4,
          }}>
            {mode === 'admin' ? 'Login as Admin' : mode === 'signup' ? 'Create Account' : 'Log In'}
          </button>
        </form>

        {mode !== 'admin' && (
          <p style={{ textAlign: 'center', marginTop: 20, color: '#94a3b8', fontSize: 13 }}>
            {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')} style={{
              color: '#818cf8', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600,
            }}>
              {mode === 'login' ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        )}
      </div>
    </div>
  );
}
