export default function Home() {
  return (
    <div style={{ display: "grid", gap: 24, textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="/hero.jpg"
          alt="Townhome photo"
          style={{ maxWidth: "100%", maxHeight: 500, objectFit: "contain", borderRadius: 16, border: "1px solid #eee" }}
        />
      </div>

      <h1 style={{ fontSize: 36, fontWeight: 800, marginTop: 16 }}>Welcome to Mahlet & Ferew Rentals</h1>
      <p style={{ maxWidth: 700, margin: "0 auto", color: "#333" }}>
        Pay rent, request maintenance, or renew your lease right here.
      </p>

      <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <a href="/pay" className="btn" style={{ padding: "12px 18px", borderRadius: 10, background: "#4f46e5", color: "#fff", fontWeight: 600 }}>Pay Rent</a>
        <a href="/renew" className="btn" style={{ padding: "12px 18px", borderRadius: 10, background: "#f3f4f6", fontWeight: 600 }}>Lease Renewal</a>
        <a href="/maintenance" className="btn" style={{ padding: "12px 18px", borderRadius: 10, background: "#f3f4f6", fontWeight: 600 }}>Maintenance</a>
        <a href="/contact" className="btn" style={{ padding: "12px 18px", borderRadius: 10, background: "#f3f4f6", fontWeight: 600 }}>Contact</a>
        <a href="/about" className="btn" style={{ padding: "12px 18px", borderRadius: 10, background: "#f3f4f6", fontWeight: 600 }}>About</a>
      </div>
    </div>
  );
}