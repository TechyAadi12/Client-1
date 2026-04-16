import SectionHeading from './SectionHeading';

function About({ business }) {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <SectionHeading
            eyebrow="About Us"
            title="A Trusted Local Food Spot in Varanasi"
            description="Shyam Darbar is known for preserving the soul of traditional Banarasi food while keeping meals affordable for everyone. From quick snacks to full family dining, every plate is prepared with familiar local flavors."
          />
          <p className="mt-5 text-amber-900/80">
            Whether you are a Varanasi resident or a first-time visitor, our focus remains the same: honest taste,
            hygienic cooking, and warm service that makes guests return.
          </p>
          <div className="mt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">Top Offerings</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {business.topOfferings.map((item) => (
                <span key={item} className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-brand-brown">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-amber-900/80">
              Ideal for local residents, families, and tourists exploring Varanasi.
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=80"
            alt="Indian snacks served in a traditional style"
            className="h-96 w-full rounded-3xl object-cover shadow-soft"
          />
          <div className="absolute -right-4 bottom-5 max-w-xs rounded-2xl bg-brand-red p-5 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em]">Tradition + Affordability</p>
            <p className="mt-2 text-sm text-red-50">Balanced pricing and authentic recipes inspired by local taste.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
