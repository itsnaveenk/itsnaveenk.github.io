"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { Marquee } from "@/components/ui/marquee";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-background border-t border-border">
      <div className="border-b border-border py-8 md:py-10 overflow-hidden">
        <Marquee speed="slow">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-10 shrink-0">
              <span className="display-lg whitespace-nowrap">
                Naveen Kumar
              </span>
              <span className="display-lg font-serif italic text-muted-foreground whitespace-nowrap">
                / backend engineer
              </span>
              <span className="text-2xl text-muted-foreground/40">●</span>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-muted-foreground tabular-nums">
                001
              </span>
              <div className="h-px w-6 bg-border" />
              <span className="text-sm font-medium tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="mt-3 text-[13px] text-muted-foreground max-w-sm leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Sitemap
            </div>
            <ul className="space-y-2 text-[13px]">
              <li>
                <a href="#about" className="text-foreground/80 hover:text-foreground link-line">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/80 hover:text-foreground link-line">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-foreground/80 hover:text-foreground link-line">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/80 hover:text-foreground link-line">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Connect
            </div>
            <ul className="space-y-2 text-[13px]">
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground link-line"
                >
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground link-line"
                >
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground link-line"
                >
                  <Mail className="h-3.5 w-3.5" /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[11px] text-muted-foreground font-mono">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            <span>Built with Next.js · Tailwind · Framer Motion</span>
          </div>
          <a
            href="#hero"
            className="group inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to top
            <ArrowUp className="h-3 w-3 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
}
