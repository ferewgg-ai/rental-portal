"use client";

export default function ApplyPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-semibold">Apply to Rent</h1>
      <p>
        We&apos;re excited you&apos;re interested in renting our townhouse! 
        Please complete the application form below. Our team will review your 
        submission and get back to you promptly.
      </p>

      <form className="space-y-4 border p-6 rounded shadow bg-white">
        <div>
          <label className="block font-medium">Full Name</label>
          <input type="text" name="name" className="w-full border p-2 rounded" required />
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input type="email" name="email" className="w-full border p-2 rounded" required />
        </div>

        <div>
          <label className="block font-medium">Phone</label>
          <input type="tel" name="phone" className="w-full border p-2 rounded" required />
        </div>

        <div>
          <label className="block font-medium">Property Address</label>
          <input type="text" name="property" className="w-full border p-2 rounded" defaultValue="13525 Demetrias Way, Germantown, MD 20874" />
        </div>

        <div>
          <label className="block font-medium">Additional Notes</label>
          <textarea name="notes" className="w-full border p-2 rounded" rows={4}></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Application
        </button>
      </form>

      <footer className="text-sm text-gray-500 text-center">
        Questions about your application? Please contact Ferew Haile or Mahlet Tamrat, Property Managers.
      </footer>
    </main>
  );
}
