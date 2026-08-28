export default function MeaningSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(31,74,60,0.06),transparent_60%)]" />
      <div className="section relative mx-auto max-w-2xl text-center">
        <span className="eyebrow">The Meaning of Le Dee</span>
        <h2 className="mt-3 text-3xl sm:text-4xl">Food. Passion. Experience.</h2>
        <div className="divider mt-6" />

        <p className="mx-auto mt-8 max-w-xl text-ink-soft">
          At Le DEE <span className="italic">(pronounced &ldquo;Rue Dee&rdquo;)</span>,
          our name is more than a label — it&apos;s a reflection of our soul.
          Rooted in the Thai word &ldquo;ฤดี,&rdquo; Le Dee speaks to the
          heart, the mind, and the spirit — the deeper places where joy is
          felt and meaning is made.
        </p>

        <blockquote className="mx-auto mt-8 max-w-lg font-[family-name:var(--font-display)] text-2xl italic leading-relaxed text-ink sm:text-3xl">
          &ldquo;We don&apos;t believe in shortcuts or soulless service. We
          believe in food that has roots.&rdquo;
        </blockquote>

        <p className="mx-auto mt-8 max-w-xl text-ink-soft">
          A balance of calm and color, tradition and style — our space
          invites you to slow down and enjoy not just the food, but the
          moment. It&apos;s where laughter is shared, milestones are
          celebrated, and strangers become regulars.
        </p>
      </div>
    </section>
  );
}
