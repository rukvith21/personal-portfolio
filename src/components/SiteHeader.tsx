"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [solid, setSolid] = useState(false);
  const [current, setCurrent] = useState("#top");

  useEffect(() => {
    const sections = ["work", "about", "contact"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const onScroll = () => {
      setSolid(window.scrollY > 48);

      const fromTop = window.scrollY + 120;
      let active = "#top";
      for (const section of sections) {
        if (section.offsetTop <= fromTop) {
          active = `#${section.id}`;
        }
      }
      setCurrent(active);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${solid ? "is-solid" : ""}`}>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-10">
        <a
          href="#top"
          className="font-[family-name:var(--font-syne)] text-sm font-bold tracking-[0.12em] text-ink uppercase"
          aria-label="Rukvith Reddy Challa — back to top"
        >
          RRC
        </a>
        <nav aria-label="Primary">
          <ul className="m-0 flex list-none items-center gap-1 p-0 sm:gap-5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link px-2 text-sm sm:text-[0.95rem]"
                  aria-current={current === link.href ? "true" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
