export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink px-6 py-8 text-sm text-[#8eacb8] md:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Rukvith Reddy Challa</p>
        <p>Built with Next.js · Deployed for the open web</p>
      </div>
    </footer>
  );
}
