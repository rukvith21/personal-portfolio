import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-line px-6 py-24 md:px-10 md:py-32"
      aria-labelledby="about-heading"
      tabIndex={-1}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_58%_48%_at_92%_12%,color-mix(in_oklab,#6fa8bc_32%,transparent),transparent_72%),linear-gradient(180deg,#eef4f7,#edf3f6)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
        <Reveal>
          <p className="section-kicker">About</p>
          <h2
            id="about-heading"
            className="font-[family-name:var(--font-syne)] text-4xl leading-[1.05] font-bold tracking-[-0.035em] text-ink md:text-5xl"
          >
            Maker first.
            <br />
            Always building.
          </h2>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft md:pt-8">
            <p className="m-0">
              I&apos;m Rukvith Reddy Challa, based in Maryland, USA. I ship
              software for problems I feel in daily life — focus, gesture,
              interaction — then keep iterating until the idea feels inevitable.
            </p>
            <p className="m-0">
              Recent work spans computer vision and ML pipelines (
              <a
                href="https://github.com/rukvith21/chakra-signs"
                className="cta-link inline min-h-0 font-semibold text-ink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chakra Signs
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              ) and native tooling for staying present while studying. I care
              about clear interfaces, careful systems, and products that earn a
              place in someone&apos;s routine.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
