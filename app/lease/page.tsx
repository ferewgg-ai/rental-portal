﻿"use client";

import { useState } from "react";

export default function LeasePage() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function requestRenewal() {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("? Renewal request submitted successfully!");
    } catch {
      setStatus("? Failed to submit renewal request.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-2xl mx-auto mt-12 p-6 rounded-lg bg-neutral-900 text-neutral-100 shadow-lg">
      <h1 className="text-2xl font-bold mb-4">?? Lease Documents</h1>
      <ul className="space-y-4">
        <li className="p-4 rounded-lg bg-neutral-800">
          <p className="font-semibold">Current Lease (2023�2025)</p>
          <a href="/lease/current.pdf" className="text-sky-400 hover:underline">Download PDF</a>
        </li>
        <li className="p-4 rounded-lg bg-neutral-800">
          <p className="font-semibold">Renewal Options</p>
          <button
            onClick={requestRenewal}
            disabled={loading}
            className={`mt-2 px-4 py-2 rounded-lg text-white ${
              loading ? "bg-sky-600 opacity-60 cursor-not-allowed" : "bg-sky-600 hover:bg-sky-700"
            }`}
          >
            {loading ? "Submitting..." : "Start Renewal"}
          </button>
        </li>
      </ul>
      {status && <p className="mt-4">{status}</p>}
    </main>
  );
}


