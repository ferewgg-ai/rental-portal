'use client';
import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [isVacant, setIsVacant] = useState(false);
  const [error, setError] = useState('');

  async function refresh() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/vacancy', { cache: 'no-store' });
      const data = await res.json();
      setIsVacant(!!data.isVacant);
    } catch (e:any) {
      setError(e?.message || 'Failed to load status');
    } finally {
      setLoading(false);
    }
  }

  async function toggle() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/vacancy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      if (!res.ok) throw new Error('Toggle failed');
      const data = await res.json();
      setIsVacant(!!data.isVacant);
    } catch (e:any) {
      setError(e?.message || 'Toggle failed');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { refresh(); }, []);

  return (
    <main className='p-8 max-w-3xl mx-auto space-y-4'>
      <h1 className='text-2xl font-semibold'>Admin</h1>
      <div className='rounded-xl border p-6 space-y-3'>
        <div className='flex items-center justify-between'>
          <div>
            <div className='font-medium'>Vacancy Status</div>
            <div className='text-sm text-gray-600'>Controls the Apply button on the Home page</div>
          </div>
          <div className='text-right'>
            {loading ? (
              <span className='text-gray-500'>Loading…</span>
            ) : (
              <span className={isVacant ? 'text-green-600 font-medium' : 'text-gray-600'}>
                {isVacant ? 'Vacant (Applications Open)' : 'No Vacancy'}
              </span>
            )}
          </div>
        </div>
        <div className='flex gap-3'>
          <button onClick={toggle} disabled={loading}
            className='rounded-lg bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 disabled:opacity-50'>
            {isVacant ? 'Set No Vacancy' : 'Open Applications'}
          </button>
          <button onClick={refresh} disabled={loading}
            className='rounded-lg border px-4 py-2 hover:bg-gray-50 disabled:opacity-50'>
            Refresh
          </button>
        </div>
        {error && <div className='text-sm text-red-600'>{error}</div>}
      </div>
    </main>
  );
}
