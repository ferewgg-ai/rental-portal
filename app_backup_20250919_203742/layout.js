export const metadata = {
  title: "Mahlet & Ferew Rentals",
  description: "Tenant portal for paying rent, renewing leases, and maintenance requests."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <header className="border-b bg-white/90 backdrop-blur">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <a href="/" className="flex items-center gap-3">
              <img src="/logo.jpg" alt="Mahlet & Ferew Rentals" className="h-10 w-auto rounded-md shadow" />
              <span className="text-xl font-semibold">Mahlet & Ferew Rentals</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="/" className="hover:underline">Home</a>
              <a href="/renew" className="hover:underline">Renew</a>
              <a href="/pay" className="hover:underline">Pay Rent</a>
              <a href="/maintenance" className="hover:underline">Maintenance</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </nav>
          </div>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="border-t mt-12">
          <div className="container mx-auto px-4 py-6 text-sm text-gray-600">
            © {new Date().getFullYear()} Mahlet & Ferew Rentals
          </div>
        </footer>
      </body>
    </html>
  );
}