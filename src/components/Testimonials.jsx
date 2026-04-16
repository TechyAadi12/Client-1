import SectionHeading from './SectionHeading';

function Testimonials({ business }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <SectionHeading
        eyebrow="Testimonials"
        title="What Guests Say"
        description="Realistic local-style feedback that reflects regular customer experience."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {business.testimonials.map((review) => (
          <article key={review.name} className="rounded-3xl border border-amber-100 bg-white p-6 shadow-soft">
            <p className="text-base leading-7 text-amber-900/85">"{review.text}"</p>
            <div className="mt-5 flex items-center justify-between">
              <p className="text-sm font-bold text-brand-brown">{review.name}</p>
              <p className="text-sm font-semibold text-brand-red">{'★'.repeat(review.rating)}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
