import Image from "next/image";

export default function AmbianceSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="section relative grid items-center gap-14 md:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
          <Image
            src="/images/interior.jpg"
            alt="Warm, candlelit dining room"
            fill
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover"
          />
        </div>
        <div>
          <div className="mb-6 h-px w-16 bg-gradient-to-r from-gold to-transparent" />
          <span className="eyebrow">A Warm Welcome</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            A Space Built for
            <br />
            Slowing Down
          </h2>
          <p className="mt-6 max-w-md text-ink-soft">
            A balance of calm and color, tradition and style — Le Dee&apos;s
            dining room is set up for milestones, weeknight dinners, and
            everything in between. Bilingual, attentive staff and an open
            kitchen make every visit feel personal.
          </p>
          <p className="mt-4 max-w-md text-ink-soft">
            Spice levels run 1 to 5, and dishes aren&apos;t automatically
            Thai-spicy by default — just tell your server how you like it.
          </p>
        </div>
      </div>
    </section>
  );
}
