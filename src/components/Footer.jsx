function Footer({ business }) {
  return (
    <footer className="bg-brand-brown py-10 text-amber-100">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-4 md:flex-row md:items-center md:px-8">
        <div>
          <p className="text-xl font-black">{business.name}</p>
          <p className="mt-2 text-sm text-amber-100/80">
            Traditional vegetarian dining and sweets in {business.city}
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm">
          <a href="#home" className="hover:text-white">
            Home
          </a>
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#menu" className="hover:text-white">
            Menu
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:text-white">
            Instagram
          </a>
          <a href="#" className="hover:text-white">
            Facebook
          </a>
          <a href="#" className="hover:text-white">
            YouTube
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl px-4 text-xs text-amber-100/70 md:px-8">
        Copyright {new Date().getFullYear()} {business.name}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
