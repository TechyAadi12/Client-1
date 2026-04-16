function FloatingActions({ business }) {
  const phoneHref = `tel:${business.phone.replace(/\s+/g, '')}`;
  const whatsappHref = `https://wa.me/${business.whatsappPhone}?text=Hello%20${encodeURIComponent(business.name)}%2C%20I%20want%20to%20place%20an%20order.`;

  return (
    <>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-28 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-green-700 md:bottom-10 md:right-6"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.66 15l-1.1 4.07a.7.7 0 0 0 .86.86L7.18 20A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.08-1.12.7.7 0 0 0-.53-.08l-2.2.6.6-2.2a.7.7 0 0 0-.08-.53A8 8 0 1 1 12 20Zm4.2-5.95c-.22-.11-1.3-.64-1.5-.72-.2-.07-.34-.1-.49.12-.15.22-.57.72-.7.87-.13.15-.26.17-.48.06-.22-.11-.95-.35-1.8-1.13-.66-.58-1.1-1.3-1.23-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.49-1.18-.67-1.62-.18-.43-.36-.37-.49-.38h-.42c-.15 0-.39.06-.59.28-.2.22-.77.75-.77 1.83s.79 2.13.9 2.27c.11.15 1.55 2.37 3.76 3.33.53.23.95.37 1.27.47.53.17 1.01.15 1.39.09.42-.06 1.3-.53 1.48-1.04.18-.52.18-.96.13-1.05-.06-.09-.2-.14-.42-.25Z" />
        </svg>
      </a>
      <a
        href={phoneHref}
        className="fixed bottom-4 left-4 right-4 z-40 rounded-full bg-brand-red px-5 py-3 text-center text-sm font-bold text-white shadow-soft md:hidden"
      >
        Call {business.phone}
      </a>
    </>
  );
}

export default FloatingActions;
