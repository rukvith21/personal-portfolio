import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line bg-ink px-6 py-24 text-fog md:px-10 md:py-32"
      aria-labelledby="contact-heading"
      tabIndex={-1}
    >
      <div
        className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,#5f9e8c_35%,transparent),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="section-kicker" style={{ color: "#9bb6c2" }}>
            Contact
          </p>
          <h2
            id="contact-heading"
            className="max-w-2xl font-[family-name:var(--font-syne)] text-4xl leading-[1.05] font-bold tracking-[-0.035em] md:text-5xl"
          >
            Say hello on GitHub.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#d0dde5]">
            Email and LinkedIn coming soon. Until then, the best way to reach me
            is through my public work on GitHub.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="https://github.com/rukvith21"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-cta"
            >
              Open GitHub profile
              <span className="sr-only"> (opens in a new tab)</span>
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="https://github.com/rukvith21/chakra-signs"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-link text-[#e7f1f5]"
            >
              Featured project
              <span className="sr-only"> Chakra Signs (opens in a new tab)</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
