"use client";

import { useEffect, useState } from "react";

interface Vacancy {
  id: number;
  title: string;
  rent: string;
  address: string;
  bedrooms: string;
  bathrooms: string;
  squareFootage: string;
  amenities: string;
  description: string;
  fileUrl: string;
  uploadedAt: string;
}

export default function VacanciesPage() {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);

  useEffect(() => {
    async function fetchVacancies() {
      const res = await fetch("/api/vacancy");
      if (res.ok) {
        const data = await res.json();
        setVacancies(Array.isArray(data) ? data : [data]);
      }
    }
    fetchVacancies();
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Vacancy Listings</h1>
      {vacancies.length === 0 ? (
        <p>No vacancies uploaded yet.</p>
      ) : (
        <ul className="space-y-4">
          {vacancies.map((v) => (
            <li key={v.id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{v.title}</h2>
              <p><strong>Rent:</strong> ${v.rent}</p>
              <p><strong>Address:</strong> {v.address}</p>
              <p><strong>Bedrooms:</strong> {v.bedrooms}</p>
              <p><strong>Bathrooms:</strong> {v.bathrooms}</p>
              <p><strong>Square Footage:</strong> {v.squareFootage}</p>
              <p><strong>Amenities:</strong> {v.amenities}</p>
              <p><strong>Description:</strong> {v.description}</p>
              <p><strong>Uploaded:</strong> {new Date(v.uploadedAt).toLocaleString()}</p>
              {v.fileUrl && (
                <a href={v.fileUrl} target="_blank" className="text-blue-600 underline">
                  View Uploaded File
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
