import Image from "next/image";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden"
      aria-label="Introduction"
    >
      <div className="atmosphere" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid min-h-[100svh] w-full max-w-6xl grid-cols-1 items-end gap-0 px-0 md:grid-cols-[1.05fr_0.95fr] md:items-stretch">
        <div className="flex flex-col justify-end px-6 pb-14 pt-28 md:justify-center md:px-10 md:pb-20 md:pt-24">
          <h1 className="animate-rise font-[family-name:var(--font-syne)] text-[clamp(2.75rem,9vw,5.75rem)] leading-[0.92] font-extrabold tracking-[-0.04em] text-ink">
            Rukvith
            <br />
            Reddy Challa
          </h1>

          <p className="animate-rise-delay-1 mt-6 max-w-md font-[family-name:var(--font-syne)] text-xl leading-snug font-semibold tracking-[-0.02em] text-ink md:text-2xl">
            I build things I wish existed.
          </p>

          <p className="animate-rise-delay-2 mt-3 text-base text-steel md:text-lg">
            Based in Maryland, USA.
          </p>

          <div className="animate-rise-delay-3 mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
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
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="relative min-h-[48vh] w-full md:min-h-full">
          <div className="animate-image-in absolute inset-0 md:inset-y-0 md:right-0 md:left-auto md:w-[min(100%,34rem)]">
            <Image
              src="https://avatars.githubusercontent.com/u/159481499?v=4"
              alt="Portrait of Rukvith Reddy Challa"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover object-[center_20%]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#d7e4ec]/85 via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:via-transparent md:to-[#dce8ef]/55"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
