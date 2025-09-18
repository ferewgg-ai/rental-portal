import Link from "next/link";

async function fetchVacancy() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "";
  try {
    const res = await fetch(${base}/api/vacancy, { cache: "no-store" });
    if (!res.ok) return { isVacant: false };
    return res.json();
  } catch {
    return { isVacant: false };
  }
}

export default async function Home() {
  const { isVacant } = await fetchVacancy();

  return (
    <main className="p-8 max-w-5xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Ferew &amp; Mahlet Rental Portal</h1>
        <p className="text-gray-600">Pay rent, manage your lease, and request maintenance—quickly and securely.</p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <Link href="/rent" className="block rounded-xl border p-6 hover:shadow">
          <h2 className="font-semibold mb-2">💳 Pay Rent</h2>
          <p className="text-sm text-gray-600">Secure Stripe checkout.</p>
        </Link>
        <Link href="/lease" className="block rounded-xl border p-6 hover:shadow">
          <h2 className="font-semibold mb-2">📄 Lease Documents</h2>
          <p className="text-sm text-gray-600">Access your lease and policies.</p>
        </Link>
        <Link href="/maintenance" className="block rounded-xl border p-6 hover:shadow">
          <h2 className="font-semibold mb-2">🛠 Maintenance</h2>
          <p className="text-sm text-gray-600">Submit a request and track status.</p>
        </Link>
      </section>

      <section className="pt-2">
        {isVacant ? (
          <Link
            href="/apply"
            className="inline-flex items-center justify-center rounded-lg bg-green-600 px-5 py-3 font-medium text-white hover:bg-green-700"
          >
            ✅ Apply Now
          </Link>
        ) : (
          <button
            disabled
            className="inline-flex items-center justify-center rounded-lg bg-gray-300 px-5 py-3 font-medium text-gray-600 cursor-not-allowed"
            title="No current vacancies"
          >
            🚫 No Vacancies
          </button>
        )}
      </section>

      <footer className="pt-6 border-t">
        <div className="text-sm text-gray-600">
          Questions? <Link href="/contact" className="underline">Contact us</Link> or email support@ferewmahletrental.com
        </div>
      </footer>
    </main>
  );
}
