import { Reveal } from "./Reveal";

const projects = [
  {
    name: "Chakra Signs",
    status: "Public",
    stack: "Python · MediaPipe · FastAPI · React · Three.js",
    summary:
      "Real-time hand gesture recognition with custom gesture training, combination detection, and step-by-step animation replay.",
    href: "https://github.com/rukvith21/chakra-signs",
  },
  {
    name: "Doomscroll Detector",
    status: "Private",
    stack: "Swift",
    summary:
      "A local webcam app that detects phone pickup while studying and plays an alert — built for focus, not the feed.",
    href: null,
  },
];

export function Work() {
  return (
    <section
      id="work"
      className="relative border-t border-line bg-paper px-6 py-24 md:px-10 md:py-32"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="mb-3 font-[family-name:var(--font-syne)] text-[0.7rem] font-semibold tracking-[0.22em] text-steel uppercase">
            Selected work
          </p>
          <h2
            id="work-heading"
            className="max-w-2xl font-[family-name:var(--font-syne)] text-4xl leading-tight font-bold tracking-[-0.03em] text-ink md:text-5xl"
          >
            Projects that scratch an itch.
          </h2>
        </Reveal>

        <div className="mt-14">
          {projects.map((project, index) => {
            const inner = (
              <>
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold tracking-[-0.02em] text-ink md:text-3xl">
                    {project.name}
                  </h3>
                  <span className="text-xs font-semibold tracking-[0.14em] text-steel uppercase">
                    {project.status}
                  </span>
                </div>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
                  {project.summary}
                </p>
                <p className="mt-4 text-sm font-medium text-steel">
                  {project.stack}
                </p>
                {project.href ? (
                  <p className="mt-5 text-sm font-semibold text-accent">
                    View on GitHub →
                  </p>
                ) : (
                  <p className="mt-5 text-sm font-medium text-steel">
                    Private repository
                  </p>
                )}
              </>
            );

            return (
              <Reveal key={project.name} delayMs={index * 90}>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-row block"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="project-row">{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
