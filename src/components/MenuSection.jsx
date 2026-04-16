import SectionHeading from './SectionHeading';

function MenuSection({ business }) {
  return (
    <section id="menu" className="bg-amber-50/60 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Menu Highlights"
          title="Popular Dishes & Sweets"
          description="Freshly prepared vegetarian meals and sweet favorites crafted for everyday cravings and family outings."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {business.menuItems.map((item) => (
            <article
              key={item.name}
              className="group rounded-3xl border border-amber-100 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-amber-300"
            >
              <h3 className="text-xl font-bold text-brand-brown">{item.name}</h3>
              <p className="mt-3 text-sm leading-6 text-amber-900/75">{item.description}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-brand-red">{item.price}</span>
                <button
                  type="button"
                  className="rounded-full border border-brand-saffron px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-brown transition group-hover:bg-brand-saffron group-hover:text-white"
                >
                  Add
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
