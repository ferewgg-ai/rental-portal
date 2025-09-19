"use client";

export default function HomePage() {
  return (
    <main className="p-10">
      {/* Hero Section */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">✨ Welcome to Your Rental Portal</h1>
        <p className="text-lg text-gray-700">
          Easily manage your lease, pay rent online, request maintenance, and explore available properties — all in one place.
        </p>
      </section>

      {/* Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Vacancies */}
        <div className="border p-6 rounded shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">🏡 Browse Vacancies</h2>
          <p className="text-gray-600 mb-4">
            Explore our latest rental listings with photos, details, and amenities.
          </p>
          <a
            href="/vacancies"
            className="text-blue-600 underline hover:text-blue-800"
          >
            View Listings →
          </a>
        </div>

        {/* Pay Rent */}
        <div className="border p-6 rounded shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">💳 Pay Rent Online</h2>
          <p className="text-gray-600 mb-4">
            Securely submit your monthly rent with just a few clicks.
          </p>
          <a
            href="/pay-rent"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Pay Now →
          </a>
        </div>

        {/* Maintenance */}
        <div className="border p-6 rounded shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">🛠 Request Maintenance</h2>
          <p className="text-gray-600 mb-4">
            Quickly report and track repair requests anytime.
          </p>
          <a
            href="/maintenance"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Submit Request →
          </a>
        </div>
      </section>

      {/* Footer Note */}
      <footer className="mt-12 text-center text-gray-500">
        Providing reliable, modern rental management services for Germantown residents.
      </footer>
    </main>
  );
}
