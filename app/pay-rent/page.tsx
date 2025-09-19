"use client";

import { useState } from "react";

export default function PayRentPage() {
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");

  async function handlePayment(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Processing...");

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus(`✅ Payment of $${amount} submitted successfully!`);
      } else {
        setStatus(`❌ ${data.error || "Payment failed"}`);
      }
    } catch (err) {
      setStatus("❌ Payment request failed. Please try again.");
    }
  }

  return (
    <main className="p-10 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">💳 Pay Rent</h1>
      <form onSubmit={handlePayment} className="space-y-4">
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Payment
        </button>
      </form>

      {status && <p className="mt-4">{status}</p>}

      <footer className="mt-8 text-gray-600 text-sm">
        Questions about your payment? Please contact{" "}
        <strong>Ferew Haile or Mahlet Tamrat, Property Managers.</strong>
      </footer>
    </main>
  );
}
