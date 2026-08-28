import { business } from "@/lib/site-data";

export default function OrderBanner() {
  return (
    <section className="section py-16">
      <div className="text-center">
        <span className="eyebrow">Order From Our Menu</span>
        <h2 className="mt-3 text-3xl sm:text-4xl">Skip the Wait, Order Online</h2>
        <p className="mx-auto mt-4 max-w-md text-ink-soft">
          Choose your favorites, select delivery or pickup, and let Le Dee
          handle the rest.
        </p>
      </div>
      <a
        href={business.grubhubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 flex items-center justify-between bg-gold px-8 py-6 text-lg font-semibold text-white transition-colors hover:bg-[#7a5628] sm:px-12"
      >
        Order Now on Grubhub
        <span aria-hidden="true">&rarr;</span>
      </a>
    </section>
  );
}
