import SectionHeading from './SectionHeading';

function WhyChooseUs({ business }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="What Customers Appreciate Most"
        description="Insights inspired by local feedback around flavor, value, and reliability."
        center
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {business.whyChooseUs.map((item) => (
          <article key={item.title} className="rounded-3xl border border-amber-200 bg-white p-7 shadow-soft">
            <h3 className="text-xl font-bold text-brand-brown">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-amber-900/80">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
