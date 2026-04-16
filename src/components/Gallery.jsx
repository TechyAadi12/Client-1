import SectionHeading from './SectionHeading';

function Gallery({ business }) {
  return (
    <section id="gallery" className="bg-gradient-to-b from-white to-amber-50/60 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Food Moments from Our Kitchen"
          description="A glimpse of our sweets, snacks, and wholesome vegetarian meals."
          center
        />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {business.gallery.map((image, index) => (
            <div key={image} className={`${index === 0 ? 'col-span-2 md:col-span-1' : ''}`}>
              <img
                src={image}
                alt={`Shyam Darbar food gallery ${index + 1}`}
                className="h-44 w-full rounded-2xl object-cover shadow-soft transition duration-300 hover:scale-[1.02] md:h-56"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
