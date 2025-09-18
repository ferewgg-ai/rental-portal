'use client';

import Image from 'next/image';
import { useState, type CSSProperties } from 'react';

// 🔹 Edit these brand colors to your liking
const brand = {
  primary: '#2563eb',      // button & accents
  primaryDark: '#1e40af',  // button hover
  bg: '#f1f5f9',           // page background
};

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [loading, setLoading] = useState(false);
  const canSubmit = email.includes('@') && pwd.length >= 6 && !loading;

  async function onLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    // mock login flow for now
    await new Promise((r) => setTimeout(r, 700));
    alert('Logged in! (mock)');
    setLoading(false);
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '100vh', background: brand.bg }}>
      {/* Left: form */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
        <div style={card}>
          {/* Logo / title */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
            <span style={pill}>Rental Portal</span>
          </div>

          <h1 style={{ textAlign: 'center', marginBottom: 8 }}>Welcome back</h1>
          <p style={{ textAlign: 'center', color: '#64748b', marginBottom: 22 }}>
            Sign in to pay rent and view receipts.
          </p>

          <form onSubmit={onLogin}>
            <label style={label}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={input}
            />

            <label style={{ ...label, marginTop: 12 }}>Password</label>
            <input
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              placeholder="••••••••"
              style={input}
            />

            <button
              type="submit"
              disabled={!canSubmit}
              style={{
                width: '100%', marginTop: 18, padding: '12px 16px',
                borderRadius: 10, border: 'none',
                background: !canSubmit ? '#94a3b8' : brand.primary,
                color: 'white', fontWeight: 700, fontSize: 16,
                cursor: !canSubmit ? 'not-allowed' : 'pointer',
                transition: 'background .2s',
              }}
              onMouseOver={(e) => { if (canSubmit) (e.currentTarget.style.background = brand.primaryDark); }}
              onMouseOut={(e) => { if (canSubmit) (e.currentTarget.style.background = brand.primary); }}
            >
              {loading ? 'Signing in…' : 'Sign in'}
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: 12, fontSize: 13, color: '#64748b' }}>
            New here? <a href="/" style={{ color: brand.primary, textDecoration: 'none', fontWeight: 600 }}>Go to portal</a>
          </p>
        </div>
      </div>

      {/* Right: full-bleed property photo with soft overlay + caption */}
      <div style={{ position: 'relative' }}>
        <Image src="/property.jpg" alt="Your property" fill priority style={{ objectFit: 'cover' }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(135deg, rgba(0,0,0,.25), rgba(0,0,0,.45))`
        }} />
        <div style={{ position: 'absolute', left: 24, bottom: 24, color: 'white' }}>
          <div style={{ fontSize: 22, fontWeight: 700 }}>Welcome home.</div>
          <div style={{ opacity: .9 }}>Fast, secure rent payments.</div>
        </div>
      </div>
    </div>
  );
}

// ---- little style objects ----
const card: CSSProperties = {
  width: '100%',
  maxWidth: 420,
  background: 'white',
  borderRadius: 14,
  padding: 28,
  boxShadow: '0 10px 30px rgba(2, 6, 23, 0.08)',
};

const pill: CSSProperties = {
  background: '#e0f2fe',
  color: '#0369a1',
  padding: '4px 10px',
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 700
};

const label: CSSProperties = { display: 'block', marginBottom: 6, fontSize: 14, color: '#0f172a' };
const input: CSSProperties = {
  width: '100%', padding: '10px 12px', borderRadius: 8,
  border: '1px solid #cbd5e1', background: '#fff', fontSize: 15
};
