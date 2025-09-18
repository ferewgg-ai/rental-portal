"use client";

export default function CancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-red-700">❌ Payment Cancelled</h1>
        <p className="mt-4 text-gray-600">
          Your payment was cancelled. Please try again when ready.
        </p>
      </div>
    </div>
  );
}