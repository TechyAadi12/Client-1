import SectionHeading from './SectionHeading';

function ContactSection({ business }) {
  return (
    <section id="contact" className="bg-amber-100/40 py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-8">
        <div>
          <SectionHeading
            eyebrow="Location & Contact"
            title={`Visit ${business.name}`}
            description="Easy to find in central Varanasi. Reach out for family meals, takeaway, or quick food stops."
          />
          <ul className="mt-8 space-y-4 text-sm text-amber-900/85">
            <li>
              <strong className="mr-2 text-brand-brown">Address:</strong>
              {business.address}
            </li>
            <li>
              <strong className="mr-2 text-brand-brown">Phone:</strong>
              <a href={`tel:${business.phone.replace(/\s+/g, '')}`} className="text-brand-red hover:underline">
                {business.phone}
              </a>
            </li>
            <li>
              <strong className="mr-2 text-brand-brown">Google Maps:</strong>
              <a href={business.mapsLink} target="_blank" rel="noreferrer" className="text-brand-red hover:underline">
                Open Directions
              </a>
            </li>
          </ul>

          <div className="mt-8 rounded-3xl border border-amber-200 bg-white p-5">
            <h3 className="text-lg font-bold text-brand-brown">Working Hours</h3>
            <ul className="mt-4 space-y-2 text-sm text-amber-900/80">
              {business.hours.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-amber-200 shadow-soft">
          <iframe
            src={business.mapEmbedUrl}
            title="Shyam Darbar on Google Maps"
            className="h-full min-h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
