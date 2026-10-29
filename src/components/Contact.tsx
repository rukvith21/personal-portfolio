import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-line bg-ink px-6 py-24 text-fog md:px-10 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="mb-3 font-[family-name:var(--font-syne)] text-[0.7rem] font-semibold tracking-[0.22em] text-[#8eacb8] uppercase">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="max-w-2xl font-[family-name:var(--font-syne)] text-4xl leading-tight font-bold tracking-[-0.03em] md:text-5xl"
          >
            Say hello on GitHub.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#c5d5de]">
            Email and LinkedIn coming soon. Until then, the best way to reach me
            is through my public work.
          </p>
          <a
            href="https://github.com/rukvith21"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 bg-fog px-5 py-3.5 font-semibold text-ink transition hover:bg-white"
          >
            Open GitHub profile
            <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
