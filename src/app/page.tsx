import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <Work />
      <About />
      <Contact />
      <SiteFooter />
    </main>
  );
}
