export default function Story() {
  return (
    <section id="story" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(193,102,63,0.08),transparent_60%)]" />
      <div className="section relative max-w-2xl text-center mx-auto">
        <span className="eyebrow">Our Story</span>
        <h2 className="mt-3 text-3xl sm:text-4xl">
          Authenticity Meets Accessibility
        </h2>
        <div className="divider mt-6" />

        <blockquote className="mt-10 font-[family-name:var(--font-display)] text-2xl italic leading-relaxed text-ink sm:text-3xl">
          &ldquo;Le Dee isn&apos;t just another Thai restaurant — it&apos;s a
          passion project designed to create a memorable, joyful dining
          experience while staying true to Thai culinary traditions.&rdquo;
        </blockquote>

        <p className="mx-auto mt-8 max-w-md text-ink-soft">
          The menu is crafted with genuine Thai flavors, curated by Chef
          Tae, who specializes in authentic Thai recipes, while Nay keeps
          the dining room running with warmth and hands-on care — a
          casual, welcoming take on high-quality Thai cuisine.
        </p>
      </div>
    </section>
  );
}
