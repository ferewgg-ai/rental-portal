"use client";

import { useState } from "react";

export default function ContactPage() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!message) {
      setStatus("? Message cannot be empty.");
      return;
    }

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("? Message sent successfully!");
      setMessage("");
    } catch {
      setStatus("? Failed to send message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-lg mx-auto mt-12 p-6 rounded-lg bg-neutral-900 text-neutral-100 shadow-lg">
      <h1 className="text-2xl font-bold mb-6">?? Contact Management</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          placeholder="Write your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-100"
          rows={4}
        />
        <button
          type="submit"
          disabled={loading}
          className={`px-6 py-3 rounded-lg font-semibold text-white w-full ${
            loading ? "bg-sky-600 opacity-60 cursor-not-allowed" : "bg-sky-600 hover:bg-sky-700"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
      {status && <p className="mt-4">{status}</p>}
      <div className="mt-8 p-4 rounded-lg bg-neutral-800">
        <p className="font-semibold">Property Manager</p>
        <p>Email: manager@example.com</p>
        <p>Phone: (555) 123-4567</p>
      </div>
    </main>
  );
}
