import Image from "next/image";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden"
      aria-labelledby="hero-name"
    >
      <div className="atmosphere" aria-hidden="true" />
      <div className="mesh-lines" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid min-h-[100svh] w-full max-w-6xl grid-cols-1 md:grid-cols-[1.08fr_0.92fr]">
        <div className="flex flex-col justify-end px-6 pb-12 pt-28 md:justify-center md:px-10 md:pb-20 md:pt-24">
          <span className="animate-rise accent-bar mb-7 block" aria-hidden="true" />

          <h1
            id="hero-name"
            className="animate-rise-delay-1 font-[family-name:var(--font-syne)] text-[clamp(2.85rem,8.8vw,5.9rem)] leading-[0.9] font-extrabold tracking-[-0.045em] text-ink"
          >
            Rukvith
            <br />
            Reddy Challa
          </h1>

          <p className="animate-rise-delay-2 mt-7 max-w-[22rem] font-[family-name:var(--font-syne)] text-[1.35rem] leading-snug font-semibold tracking-[-0.02em] text-ink md:max-w-md md:text-[1.65rem]">
            I build things I wish existed.
          </p>

          <p className="animate-rise-delay-2 mt-3 text-base text-steel md:text-lg">
            Based in Maryland, USA.
          </p>

          <div className="animate-rise-delay-3 mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href="#work" className="cta-solid">
              View selected work
            </a>
            <a
              href="https://github.com/rukvith21"
              className="cta-link text-ink"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="relative min-h-[46vh] w-full md:min-h-full">
          <figure className="animate-image-in hero-frame absolute inset-0 m-0 md:inset-y-8 md:right-0 md:left-4 md:w-[min(100%,33rem)]">
            <Image
              src="https://avatars.githubusercontent.com/u/159481499?v=4"
              alt="Portrait of Rukvith Reddy Challa"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover object-[center_18%]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#d5e5ee]/90 via-[#d5e5ee]/10 to-transparent md:bg-gradient-to-l md:from-transparent md:via-transparent md:to-[#dce8ef]/45"
              aria-hidden="true"
            />
            <figcaption className="sr-only">
              Full-bleed portrait used as the hero visual.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
