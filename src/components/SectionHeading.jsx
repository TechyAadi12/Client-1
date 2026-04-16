function SectionHeading({ eyebrow, title, description, center = false }) {
  const alignment = center ? 'text-center mx-auto' : '';
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">{eyebrow}</p> : null}
      <h2 className="mt-2 text-3xl font-bold text-brand-brown md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-amber-900/80">{description}</p> : null}
    </div>
  );
}

export default SectionHeading;
