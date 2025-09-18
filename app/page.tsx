export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto mt-12 p-6 rounded-lg bg-neutral-900 text-neutral-100 shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Rental Property Portal</h1>
      <p className="text-neutral-300 mb-8">
        Welcome to your property management portal. Use the sections below to
        pay rent, view your lease, request maintenance, and more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a href="/rent" className="p-6 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold shadow-md">?? Pay Rent</a>
        <a href="/lease" className="p-6 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold shadow-md">?? Lease Documents</a>
        <a href="/maintenance" className="p-6 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold shadow-md">?? Maintenance Requests</a>
        <a href="/contact" className="p-6 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold shadow-md">?? Contact Management</a>
        <a href="/profile" className="p-6 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold shadow-md">?? Tenant Profile</a>
        <a href="/admin" className="p-6 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold shadow-md">?? Admin Dashboard</a>
      </div>
    </main>
  );
}
