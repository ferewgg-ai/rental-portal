"use client";

import { useState } from "react";

export default function Renew() {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setResult(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    try {
      const res = await fetch("/api/renew", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Upload failed");
      setResult(data);
      form.reset();
    } catch (err) {
      setError(err.message || "Upload failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", display: "grid", gap: 16 }}>
      <h1 style={{ margin: 0 }}>Lease Renewal</h1>
      <p>Upload renewal documents (PDF/JPG/PNG). You can attach multiple files.</p>

      <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
        <input name="fullName" placeholder="Full name" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="unit" placeholder="Unit / Address" required />
        <textarea name="notes" placeholder="Notes (optional)" rows={4} />
        <input name="files" type="file" accept=".pdf,.png,.jpg,.jpeg" multiple required />

        <button type="submit" disabled={submitting}
          style={{ padding: "12px 16px", borderRadius: 10, background: "#4f46e5", color: "#fff", fontWeight: 600, border: "none" }}>
          {submitting ? "Submitting..." : "Submit Renewal"}
        </button>
      </form>

      {error && <div style={{ color: "#b91c1c" }}>Error: {error}</div>}

      {result && (
        <div style={{ border: "1px solid #eee", borderRadius: 10, padding: 12 }}>
          <h3 style={{ marginTop: 0 }}>Submitted</h3>
          <div><b>Name:</b> {result.fullName}</div>
          <div><b>Email:</b> {result.email}</div>
          <div><b>Unit:</b> {result.unit}</div>
          <div><b>Files:</b></div>
          <ul>
            {result.files?.map((f, i) => (
              <li key={i}>
                {f.filename} ({Math.round((f.bytes || 0)/1024)} KB){f.url ? " – stored in Blob" : ""}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}