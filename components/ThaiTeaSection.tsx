import Image from "next/image";

export default function ThaiTeaSection() {
  return (
    <section className="relative overflow-hidden bg-surface-raised py-24">
      <div className="section relative grid items-center gap-14 md:grid-cols-2">
        <div className="md:order-2 relative aspect-[4/3] w-full overflow-hidden rounded-sm">
          <Image
            src="/images/thai-tea.jpg"
            alt="Thai iced tea"
            fill
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover"
          />
        </div>
        <div className="md:order-1">
          <div className="mb-6 h-px w-16 bg-gradient-to-r from-gold to-transparent" />
          <span className="eyebrow">Thai Tea &amp; Drinks</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            One Sip In,
            <br />
            You&apos;ll Know Why.
          </h2>
          <p className="mt-6 max-w-md text-ink-soft">
            &ldquo;The Thai green tea and regular Thai tea are the best Thai
            teas we&apos;ve ever had,&rdquo; per one regular&apos;s Yelp
            review — creamy, sweet, and served over ice alongside the lunch
            special.
          </p>
        </div>
      </div>
    </section>
  );
}
