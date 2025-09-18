'use client';

import { useState } from 'react';
import type { CSSProperties } from 'react';

export default function Home() {
  const [amount, setAmount] = useState<number>(2600);
  const [tenantName, setTenantName] = useState<string>('');
  const [unitNumber, setUnitNumber] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // Disable button until form is valid
  const canSubmit =
    !loading && tenantName.trim().length > 1 && unitNumber.trim().length > 0 && amount > 0;

  // Currency preview
  const fmt = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

  async function payRent() {
    setStatus('');
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          tenantName,
          unitNumber,
          currency: 'USD',
          note: 'Monthly rent payment',
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Payment request failed');

      setStatus(`âœ… ${data.message} â€” received: ${JSON.stringify(data.received)}`);

      // Clear some fields on success (keep amount if you prefer)
      setTenantName('');
      setUnitNumber('');
      // setAmount(0); // uncomment if you also want to reset amount
    } catch (err: any) {
      setStatus(`âŒ ${err.message || 'Something went wrong'}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#f3f4f6',
        fontFamily: 'system-ui, sans-serif',
        padding: 20,
      }}
    >
      <div
        style={{
          background: 'white',
          borderRadius: 12,
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          padding: 30,
          width: '100%',
          maxWidth: 420,
        }}
      >
        {/* badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
          <span
            style={{
              background: '#e0f2fe',
              color: '#0369a1',
              padding: '4px 10px',
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            Secure Payment
          </span>
        </div>

        <h1 style={{ marginBottom: 14, textAlign: 'center' }}>Rental Portal</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (canSubmit) payRent();
          }}
        >
          <label style={{ display: 'block', marginBottom: 6 }}>Tenant Name</label>
          <input
            type="text"
            value={tenantName}
            onChange={(e) => setTenantName(e.target.value)}
            placeholder="John Doe"
            style={inputStyle}
          />

          <label style={{ display: 'block', marginBottom: 6, marginTop: 14 }}>Unit Number</label>
          <input
            type="text"
            value={unitNumber}
            onChange={(e) => setUnitNumber(e.target.value)}
            placeholder="Apt 101"
            style={inputStyle}
          />

          <label style={{ display: 'block', marginBottom: 6, marginTop: 14 }}>Amount (USD)</label>
          <input
            type="number"
            min={1}
            step={1}
            value={amount}
            onChange={(e) => setAmount(Math.max(1, Number(e.target.value)))}
            style={inputStyle}
          />
          <small style={{ color: '#6b7280' }}>Youâ€™ll pay {fmt.format(amount)}</small>

          <hr style={{ border: 0, borderTop: '1px solid #eee', marginTop: 16, marginBottom: 12 }} />

          <button
            type="submit"
            disabled={!canSubmit}
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: 8,
              border: 'none',
              background: !canSubmit ? '#9ca3af' : '#2563eb',
              color: 'white',
              fontWeight: 600,
              fontSize: 16,
              cursor: !canSubmit ? 'not-allowed' : 'pointer',
              transition: 'background 0.2s ease',
            }}
          >
            {loading ? 'Processingâ€¦' : 'Pay Rent Now'}
          </button>
        </form>

        {status && (
          <p
            style={{
              marginTop: 16,
              fontSize: 14,
              color: status.startsWith('âœ…') ? 'green' : 'red',
              whiteSpace: 'pre-wrap',
            }}
          >
            {status}
          </p>
        )}
      </div>
    </main>
  );
}

const inputStyle: CSSProperties = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: 6,
  border: '1px solid #d1d5db',
  fontSize: 15,
};
