function FloatingActions({ business }) {
  const phoneHref = `tel:${business.phone.replace(/\s+/g, '')}`;
  const whatsappHref = `https://wa.me/${business.whatsappPhone}?text=Hello%20${encodeURIComponent(business.name)}%2C%20I%20want%20to%20place%20an%20order.`;

  return (
    <>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-24 right-4 z-40 rounded-full bg-green-600 px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-green-700 md:bottom-6 md:right-6"
      >
        WhatsApp
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
