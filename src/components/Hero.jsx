function Hero({ business }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_15%_20%,#fef3c7,transparent_35%),radial-gradient(circle_at_85%_15%,#fecaca,transparent_30%),linear-gradient(150deg,#fff7ed_0%,#ffedd5_45%,#fee2e2_100%)]"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <div className="animate-fade-up">
          <p className="inline-block rounded-full bg-white/70 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
            {business.category} in {business.city}
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-brand-brown md:text-6xl">{business.heroTagline}</h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-amber-900/85 md:text-lg">
            Traditional Banarasi flavors, warm hospitality, and pocket-friendly meals for local families and visitors.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-red-700"
            >
              Order Now
            </a>
            <a
              href="#contact"
              className="rounded-full border border-brand-saffron bg-white px-6 py-3 text-sm font-semibold text-brand-brown transition hover:bg-amber-50"
            >
              Visit Us
            </a>
            <a
              href={`tel:${business.phone.replace(/\s+/g, '')}`}
              className="rounded-full border border-transparent bg-brand-saffron px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
            >
              Call Now
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 rounded-2xl border border-amber-200 bg-white/75 p-4 backdrop-blur-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-amber-700">Rating</p>
              <p className="text-2xl font-bold text-brand-brown">{business.rating}/5</p>
            </div>
            <div className="h-10 w-px bg-amber-200" />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-amber-700">Reviews</p>
              <p className="text-2xl font-bold text-brand-brown">{business.totalReviews}</p>
            </div>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:100ms]">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80"
              alt="Traditional Indian thali and sweets"
              className="h-[420px] w-full rounded-3xl object-cover shadow-soft md:h-[520px]"
            />
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-amber-200 bg-white p-4 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Top Picks</p>
              <p className="mt-1 text-sm font-medium text-brand-brown">Kachori, Thali, Jalebi-Rabri</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
