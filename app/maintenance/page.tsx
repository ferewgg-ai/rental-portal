"use client";

import { useState } from "react";

export default function MaintenancePage() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Submitting...");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/maintenance", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("✅ Your request has been submitted successfully.");
      } else {
        setStatus("❌ Failed to submit request. Please try again.");
      }
    } catch (error) {
      setStatus("❌ An error occurred. Please try again.");
    }
  }

  return (
    <main className="p-10 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">🛠 Submit a Maintenance Request</h1>

      <p className="mb-4 text-gray-700">
        Use this form to request maintenance or repairs for your townhouse at{" "}
        <strong>13525 Demetrias Way, Germantown, MD 20874</strong>. Our team will
        review your request promptly and schedule service as needed.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <p className="text-gray-800">
          Routine, non-emergency service calls are subject to a{" "}
          <strong>$50.00 service fee</strong>. Additional charges may apply if parts
          or specialized labor are required. Emergency repairs (such as flooding,
          no heat in winter, or electrical hazards) will be addressed immediately
          and are not subject to this fee.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="address"
          value="13525 Demetrias Way, Germantown, MD 20874"
          readOnly
          className="w-full border p-2 rounded bg-gray-100"
        />
        <textarea
          name="issue"
          placeholder="Describe the issue"
          className="w-full border p-2 rounded"
          rows={4}
          required
        />
        <select name="priority" className="w-full border p-2 rounded">
          <option value="Low">Low</option>
          <option value="Normal" selected>Normal</option>
          <option value="Urgent">Urgent</option>
        </select>
        <input
          type="file"
          name="file"
          className="w-full border p-2 rounded"
          accept="image/*,video/*"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Request
        </button>
      </form>

      {status && <p className="mt-4">{status}</p>}

      <footer className="mt-8 text-gray-600 text-sm">
        Questions about maintenance? Please contact{" "}
        <strong>Ferew Haile or Mahlet Tamrat, Property Managers.</strong>
      </footer>
    </main>
  );
}
