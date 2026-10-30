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
] as const;

export function Work() {
  return (
    <section
      id="work"
      className="relative border-t border-line bg-paper px-6 py-24 md:px-10 md:py-32"
      aria-labelledby="work-heading"
      tabIndex={-1}
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="section-kicker">Selected work</p>
          <h2
            id="work-heading"
            className="max-w-2xl font-[family-name:var(--font-syne)] text-4xl leading-[1.05] font-bold tracking-[-0.035em] text-ink md:text-5xl"
          >
            Projects that scratch an itch.
          </h2>
        </Reveal>

        <ul className="mt-14 m-0 list-none p-0">
          {projects.map((project, index) => {
            const body = (
              <>
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="m-0 font-[family-name:var(--font-syne)] text-2xl font-bold tracking-[-0.025em] text-ink md:text-[1.85rem]">
                    {project.name}
                  </h3>
                  <span className="project-meta text-xs font-bold tracking-[0.14em] uppercase">
                    {project.status}
                  </span>
                </div>
                <p className="m-0 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
                  {project.summary}
                </p>
                <p className="project-meta m-0 text-sm font-medium">{project.stack}</p>
                {project.href ? (
                  <p className="m-0 text-sm font-bold text-accent">
                    View on GitHub
                    <span className="sr-only"> (opens in a new tab)</span>
                    <span aria-hidden="true"> →</span>
                  </p>
                ) : (
                  <p className="project-meta m-0 text-sm font-medium">
                    Private repository — details available on request
                  </p>
                )}
              </>
            );

            return (
              <li key={project.name}>
                <Reveal delayMs={index * 90}>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-row"
                      aria-label={`${project.name} — view repository on GitHub`}
                    >
                      {body}
                    </a>
                  ) : (
                    <article className="project-row" aria-label={project.name}>
                      {body}
                    </article>
                  )}
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
