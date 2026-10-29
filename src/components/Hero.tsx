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

      <div className="relative z-10 mx-auto grid min-h-[100svh] w-full max-w-6xl grid-cols-1 items-stretch md:grid-cols-[1.08fr_0.92fr]">
        <div className="relative order-1 h-[42svh] w-full md:order-2 md:h-full md:min-h-[100svh]">
          <figure className="animate-image-in hero-frame absolute inset-0 m-0 h-full w-full md:inset-y-8 md:right-0 md:left-4 md:h-auto md:w-[min(100%,33rem)]">
            <Image
              src="https://avatars.githubusercontent.com/u/159481499?v=4"
              alt="Portrait of Rukvith Reddy Challa"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover object-[center_18%]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#d5e5ee]/85 md:bg-gradient-to-l md:from-transparent md:via-transparent md:to-[#dce8ef]/45"
              aria-hidden="true"
            />
            <figcaption className="sr-only">
              Full-bleed portrait used as the hero visual.
            </figcaption>
          </figure>
        </div>

        <div className="order-2 flex flex-col justify-start px-6 pt-6 pb-12 md:order-1 md:justify-center md:px-10 md:pt-24 md:pb-20">
          <span
            className="animate-rise accent-bar mb-5 block md:mb-7"
            aria-hidden="true"
          />

          <h1
            id="hero-name"
            className="animate-rise-delay-1 font-[family-name:var(--font-syne)] text-[clamp(2.5rem,11vw,5.9rem)] leading-[0.9] font-extrabold tracking-[-0.045em] text-ink"
          >
            Rukvith
            <br />
            Reddy Challa
          </h1>

          <p className="animate-rise-delay-2 mt-5 max-w-[22rem] font-[family-name:var(--font-syne)] text-[1.25rem] leading-snug font-semibold tracking-[-0.02em] text-ink md:mt-7 md:max-w-md md:text-[1.65rem]">
            I build things I wish existed.
          </p>

          <p className="animate-rise-delay-2 mt-2 text-base text-steel md:mt-3 md:text-lg">
            Based in Maryland, USA.
          </p>

          <div className="animate-rise-delay-3 mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 md:mt-10">
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
      </div>
    </section>
  );
}
