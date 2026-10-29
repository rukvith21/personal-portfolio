export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#top"
          className="font-[family-name:var(--font-syne)] text-sm font-semibold tracking-[0.08em] uppercase text-ink"
        >
          RRC
        </a>
        <nav
          aria-label="Primary"
          className="flex items-center gap-6 text-sm font-medium text-ink-soft"
        >
          <a href="#work" className="transition-colors hover:text-ink">
            Work
          </a>
          <a href="#about" className="transition-colors hover:text-ink">
            About
          </a>
          <a href="#contact" className="transition-colors hover:text-ink">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
