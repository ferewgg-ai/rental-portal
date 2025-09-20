import { FileSignature, CreditCard, Wrench } from "lucide-react";

export default function Home() {
  return (
    <div className="container py-12 space-y-12">
      {/* Hero with bottom-anchored background image */}
      <div
        className="relative overflow-hidden rounded-2xl shadow-lg h-[520px] sm:h-[600px] md:h-[780px] lg:h-[900px]"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "bottom center"
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center drop-shadow">
            Welcome to Mahlet & Ferew Rentals
          </h1>
        </div>
      </div>

      {/* Intro */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <p className="text-lg text-gray-700">
          Pay rent, renew your lease, and request maintenance - all in one simple portal.
        </p>
      </div>

      <hr className="border-gray-200" />

      {/* About */}
      <section className="max-w-3xl mx-auto space-y-4 text-center md:text-left">
        <h2 className="text-2xl font-bold">About Mahlet & Ferew Rentals</h2>
        <p className="text-gray-700 leading-relaxed">
          We are a family-run rental service based in Germantown, MD. Our mission is to make renting
          easier and stress-free by providing tenants with a modern, easy-to-use platform.
        </p>
        <p className="text-gray-700 leading-relaxed">
          With updated properties and responsive service, we are committed to a comfortable, hassle-free experience.
        </p>
      </section>

      <hr className="border-gray-200" />

      {/* Quick Actions with icons, hover animation, mobile-first layout */}
      <section className="text-center space-y-6">
        <h2 className="text-2xl font-bold">Tenant Actions</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
          <a
            href="/renew"
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 font-semibold shadow hover:shadow-lg transform hover:-translate-y-0.5 transition flex items-center justify-center gap-2"
          >
            <FileSignature className="w-5 h-5" />
            <span>Renew Lease</span>
          </a>

          <a
            href="/pay"
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-white bg-green-600 hover:bg-green-700 font-semibold shadow hover:shadow-lg transform hover:-translate-y-0.5 transition flex items-center justify-center gap-2"
          >
            <CreditCard className="w-5 h-5" />
            <span>Pay Rent</span>
          </a>

          <a
            href="/maintenance"
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-white bg-yellow-600 hover:bg-yellow-700 font-semibold shadow hover:shadow-lg transform hover:-translate-y-0.5 transition flex items-center justify-center gap-2"
          >
            <Wrench className="w-5 h-5" />
            <span>Request Maintenance</span>
          </a>
        </div>
      </section>
    </div>
  );
}