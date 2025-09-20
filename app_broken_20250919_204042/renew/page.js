'use client';

export default function RenewPage() {
  function handleSubmit(e) {
    e.preventDefault();
    alert('Renewal request submitted. We will email you within 3-5 business days.');
  }
  return (
    <div style={{fontFamily:'system-ui, Arial', maxWidth:640, margin:'40px auto', padding:'0 16px'}}>
      <h1>Lease Renewal</h1>
      <p>Temporary minimal page to ensure the app compiles cleanly.</p>
      <form onSubmit={handleSubmit} style={{display:'grid', gap:'12px', marginTop:'16px'}}>
        <input name='fullName' placeholder='Full Name' required style={{padding:'10px', border:'1px solid #ddd', borderRadius:'8px'}} />
        <input name='email' type='email' placeholder='Email' required style={{padding:'10px', border:'1px solid #ddd', borderRadius:'8px'}} />
        <label style={{fontSize:'14px'}}>
          <input type='checkbox' name='consent' required /> I authorize credit/background check for renewal.
        </label>
        <button type='submit' style={{padding:'12px 16px', background:'#4f46e5', color:'#fff', border:'none', borderRadius:'10px', fontWeight:600}}>
          Submit Renewal Request
        </button>
      </form>
    </div>
  );
}