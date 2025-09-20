"use client";
import { useState } from "react";
import config from "../../config/site.config.json" assert { type: "json" };

export default function Maintenance(){
  const [submitted,setSubmitted]=useState(false);
  const [sending,setSending]=useState(false);
  const [error,setError]=useState("");

  async function submit(e){
    e.preventDefault();
    setSending(true); setError("");

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    try{
      const res = await fetch("/api/notify/maintenance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if(!res.ok) throw new Error(data?.error || "Failed to send");
      setSubmitted(true);
    }catch(err){
      setError(err.message || "Something went wrong");
    }finally{
      setSending(false);
    }
  }

  if(submitted){
    return <div className="card max-w-2xl space-y-2"><h1 className="text-2xl font-bold">Request received</h1><p className="text-gray-700">Thanks! We usually acknowledge within 24 hours. If urgent, call {config.phone}.</p></div>;
  }

  return (
    <form onSubmit={submit} className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold">We’ll Fix It Fast</h1>
      <p className="text-gray-700">Submit a ticket with photos—most requests acknowledged within 24 hours.</p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card space-y-3">
          <div><label>Name</label><input name="name" required defaultValue=""/></div>
          <div><label>Unit/Address</label><input name="address" required defaultValue=""/></div>
          <div><label>Phone</label><input name="phone" required defaultValue=""/></div>
          <div><label>Email</label><input name="email" type="email" required defaultValue=""/></div>
          <div>
            <label>Category</label>
            <select name="category" defaultValue="Electrical">
              <option>Plumbing</option><option>Electrical</option><option>HVAC</option><option>Appliance</option><option>Other</option>
            </select>
          </div>
          <div>
            <label>Priority</label>
            <select name="priority" defaultValue="Routine">
              <option>Routine</option><option>Urgent</option><option>Emergency</option>
            </select>
          </div>
        </div>
        <div className="card space-y-3">
          <div><label>Description</label><textarea name="description" rows={6} required/></div>
          <div><label>Photos (up to 5) — (not sent by SMS in this demo)</label><input type="file" multiple accept="image/*"/></div>
          <div className="flex items-center gap-2"><input id="perm" type="checkbox"/><label htmlFor="perm">Permission to enter (9am–6pm)</label></div>
          <button disabled={sending} className="a-btn a-primary w-full">{sending ? "Sending..." : "Submit Request"}</button>
          {!!error && <div className="text-red-600 text-sm">❌ {error}</div>}
          <p className="text-xs text-gray-600">If this is urgent (gas leak, flooding, no heat in winter), call {config.phone} immediately after submitting.</p>
        </div>
      </div>
    </form>
  );
}