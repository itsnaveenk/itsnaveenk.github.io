import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Highlights } from "@/components/sections/highlights";
import { Architecture } from "@/components/sections/architecture";
import { Github } from "@/components/sections/github";
import { Resume } from "@/components/sections/resume";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { CommandPalette } from "@/components/command-palette";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CommandPalette />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Highlights />
        <Architecture />
        <Github />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
