export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header style={{borderBottom:"1px solid #eee", background:"#fafafa"}}>
          <div style={{maxWidth:1100, margin:"0 auto", padding:16, display:"flex", alignItems:"center", justifyContent:"space-between", gap:12}}>
            <strong>Mahlet & Ferew Rentals</strong>
            <nav style={{display:"flex", gap:12, flexWrap:"wrap"}}>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/pay">Pay</a>
              <a href="/renew">Renew</a>
              <a href="/maintenance">Maintenance</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>
        <main style={{maxWidth:1100, margin:"0 auto", padding:24}}>{children}</main>
      </body>
    </html>
  );
}