export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink px-6 py-8 text-sm text-[#a8c0cb] md:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="m-0">
          © {new Date().getFullYear()} Rukvith Reddy Challa
        </p>
        <nav aria-label="Footer">
          <ul className="m-0 flex list-none flex-wrap gap-x-5 gap-y-2 p-0">
            <li>
              <a href="#work" className="cta-link min-h-0 text-[#d0dde5]">
                Work
              </a>
            </li>
            <li>
              <a href="#about" className="cta-link min-h-0 text-[#d0dde5]">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="cta-link min-h-0 text-[#d0dde5]">
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rukvith21"
                className="cta-link min-h-0 text-[#d0dde5]"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
