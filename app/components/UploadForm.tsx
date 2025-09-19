"use client";

import { useState } from "react";

export default function UploadForm() {
  const [status, setStatus] = useState("");

  async function handleUpload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    setStatus("Uploading...");

    const res = await fetch("/api/vacancy", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      setStatus(`✅ Vacancy posted! File URL: ${data.fileUrl}`);
    } else {
      setStatus(`❌ Error: ${data.error}`);
    }
  }

  return (
    <form onSubmit={handleUpload} className="space-y-4 max-w-md">
      <input type="text" name="title" placeholder="Property Title" required className="border p-2 w-full" />
      <input type="text" name="rent" placeholder="Monthly Rent" required className="border p-2 w-full" />
      <input type="text" name="address" placeholder="Address" required className="border p-2 w-full" />
      <input type="number" name="bedrooms" placeholder="Bedrooms" required className="border p-2 w-full" />
      <input type="number" step="0.5" name="bathrooms" placeholder="Bathrooms" required className="border p-2 w-full" />
      <input type="text" name="squareFootage" placeholder="Square Footage" required className="border p-2 w-full" />
      <input type="text" name="amenities" placeholder="Amenities (comma-separated)" required className="border p-2 w-full" />
      <textarea name="description" placeholder="Description" required className="border p-2 w-full"></textarea>
      <input type="file" name="file" className="border p-2 w-full" />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Upload Vacancy
      </button>
      <p>{status}</p>
    </form>
  );
}
