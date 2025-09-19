/**
 * scripts/fix-pages.cjs
 * Ensures minimal App Router files exist (cross-platform, runs on Vercel Linux).
 */
const fs = require("fs");
const path = require("path");
function ensure(file, content){
  fs.mkdirSync(path.dirname(file), { recursive: true });
  if (!fs.existsSync(file)) fs.writeFileSync(file, content, "utf8");
}

ensure("app/globals.css", `@tailwind base;
@tailwind components;
@tailwind utilities;
html,body{min-height:100%;}
`);

ensure("app/layout.tsx", `import "./globals.css";
export const metadata = { title: "Rental Portal" };
export default function RootLayout({ children }:{children: React.ReactNode}) {
  return (
    <html lang="en">
      <body style={{margin:0,padding:0}}>{children}</body>
    </html>
  );
}
`);

ensure("app/page.tsx", `export default function Home(){
  return <main style={{padding:24}}>
    <h1>Hello from Rental Portal</h1>
    <p>Build pipeline sanity check page.</p>
  </main>
}
`);

console.log("fix-pages.cjs: ensured minimal app files.");
