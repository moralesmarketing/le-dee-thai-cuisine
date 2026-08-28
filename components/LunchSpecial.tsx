import Image from "next/image";

export default function LunchSpecial() {
  return (
    <section className="relative overflow-hidden bg-surface-raised py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(185,138,48,0.08),transparent_60%)]" />
      <div className="section relative grid items-center gap-14 md:grid-cols-2">
        <div className="md:order-2 relative aspect-[4/3] w-full overflow-hidden rounded-sm">
          <Image
            src="/images/lunch-special.jpg"
            alt="Thai lunch plate with rice, salad, and protein"
            fill
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover"
          />
        </div>
        <div className="md:order-1">
          <div className="mb-6 h-px w-16 bg-gradient-to-r from-gold to-transparent" />
          <span className="eyebrow">Weekday Lunch</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            $14 Lunch Special,
            <br />
            10 Ways to Order It.
          </h2>
          <p className="mt-6 max-w-md text-ink-soft">
            Monday through Friday, 11 AM–3 PM, every lunch special comes
            with rice, salad, and your choice of protein across 10
            different entrées — the deal regulars build their week around.
          </p>
          <a href="/menu" className="btn btn-ghost mt-8">
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
