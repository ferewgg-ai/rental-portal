export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="container flex flex-col gap-3 py-8 text-sm text-gray-600">
        <div className="flex flex-wrap items-center gap-3">
          <span>© {year} Mahlet & Ferew Rentals • Germantown, MD</span>
        </div>
        <div className="text-xs">By using this site you agree to our Terms & Privacy.</div>
      </div>
    </footer>
  );
}