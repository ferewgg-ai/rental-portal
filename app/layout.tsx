import './globals.css';
export const metadata = { title: "Rental Portal" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}

