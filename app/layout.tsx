import Navbar from "@/components/Navbar";
import './globals.css';
export const metadata = { title: "Rental Portal" };

import Navbar from "@/components/Navbar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body style={{ margin: 0, padding: 0 }}>
        ({children}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
      </body>
    </html>
  );
}

