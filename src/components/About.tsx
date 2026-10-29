import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-line px-6 py-24 md:px-10 md:py-32"
      aria-labelledby="about-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_90%_20%,color-mix(in_oklab,#7eb8c9_35%,transparent),transparent_70%),linear-gradient(180deg,#eef4f7,#f4f8fa)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <Reveal>
          <p className="mb-3 font-[family-name:var(--font-syne)] text-[0.7rem] font-semibold tracking-[0.22em] text-steel uppercase">
            About
          </p>
          <h2
            id="about-heading"
            className="font-[family-name:var(--font-syne)] text-4xl leading-tight font-bold tracking-[-0.03em] text-ink md:text-5xl"
          >
            Maker first. Always building.
          </h2>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft md:pt-10">
            <p>
              I&apos;m Rukvith Reddy Challa, based in Maryland, USA. I ship
              software for problems I feel in daily life — focus, gesture,
              interaction — then keep iterating until the idea feels inevitable.
            </p>
            <p>
              Recent work spans computer vision and ML pipelines (Chakra Signs)
              and native tooling for staying present while studying. I care
              about clear interfaces, careful systems, and products that earn a
              place in someone&apos;s routine.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
