"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");
  const router = useRouter();
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/renew";

  async function onSubmit(e){
    e.preventDefault();
    setError(""); setLoading(true);
    const res = await signIn("credentials", { redirect:false, email, password, callbackUrl });
    setLoading(false);
    if (res?.error) { setError("Invalid email or password."); return; }
    router.push(callbackUrl);
  }

  return (
    <div style={{maxWidth:420, margin:"60px auto", padding:24, border:"1px solid #eee", borderRadius:16}}>
      <h1 style={{marginTop:0}}>Tenant Login</h1>
      <form onSubmit={onSubmit} style={{display:"grid", gap:12}}>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email" required style={{padding:10, border:"1px solid #ddd", borderRadius:8}} />
        <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" required style={{padding:10, border:"1px solid #ddd", borderRadius:8}} />
        {error && <div style={{color:"#b91c1c"}}>{error}</div>}
        <button disabled={loading} className="btn" style={{padding:"12px 16px", borderRadius:10, background:"#4f46e5", color:"#fff", fontWeight:600}}>
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}