import { useState } from 'react';

function Navbar({ business }) {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-amber-200/60 bg-brand-cream/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#home" className="text-xl font-black tracking-wide text-brand-brown">
          {business.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-amber-900 transition hover:text-brand-red"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`tel:${business.phone.replace(/\s+/g, '')}`}
            className="rounded-full bg-brand-red px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Call Now
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex rounded-md p-2 text-brand-brown md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="text-sm font-bold uppercase tracking-wider">{open ? 'Close' : 'Menu'}</span>
        </button>
      </nav>

      {open ? (
        <div className="border-t border-amber-200 bg-brand-cream md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-2 text-sm font-semibold text-amber-900"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
