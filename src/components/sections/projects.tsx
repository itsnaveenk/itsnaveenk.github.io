"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Section, DisplayHeading } from "@/components/ui/section";
import { projects } from "@/lib/data";
import { ProjectVisual } from "@/components/project-visual";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <Section id="projects" number="005 /" label="Selected Work">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-14 md:mb-20">
        <div className="lg:col-span-7">
          <DisplayHeading size="lg">
            <span>Selected</span>
            <span className="font-serif italic"> systems </span>
            <br />
            <span>built for</span>
            <span className="font-serif italic"> throughput.</span>
          </DisplayHeading>
        </div>
        <div className="lg:col-span-5 lg:pl-12 lg:pt-3">
          <p className="text-muted-foreground text-[15px] md:text-base leading-relaxed">
            A small set of recent projects spanning distributed execution
            engines, hybrid search, and intelligent content systems. Each
            shipped, measured, and learned from.
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        {projects.map((project, i) => (
          <ProjectRow key={project.slug} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = React.useState(false);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group border-b border-border"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left grid grid-cols-12 gap-4 md:gap-8 items-baseline py-7 md:py-9 transition-colors hover:bg-foreground/[0.015]"
      >
        <span className="col-span-1 font-mono text-[11px] text-muted-foreground tabular-nums pt-1.5">
          0{index + 1}
        </span>

        <div className="col-span-11 md:col-span-5">
          <h3 className="text-2xl md:text-4xl font-medium tracking-tight">
            {project.title}
          </h3>
        </div>

        <div className="hidden md:block md:col-span-4 text-muted-foreground font-serif italic text-base md:text-lg">
          {project.subtitle}
        </div>

        <div className="hidden md:flex md:col-span-2 items-center justify-end gap-3 text-muted-foreground">
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full transition-colors",
              open ? "bg-foreground" : "bg-muted-foreground/40"
            )}
          />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em]">
            {open ? "Close" : "Expand"}
          </span>
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <div className="pb-12 md:pb-14 grid grid-cols-12 gap-6 md:gap-8">
          <div className="col-span-12 md:col-start-2 md:col-span-6 order-2 md:order-1">
            <p className="text-[15px] md:text-base text-foreground/85 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-7">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Highlights
              </div>
              <ul className="space-y-2">
                {project.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[13px] md:text-[14px] text-foreground/85"
                  >
                    <span className="font-mono text-[10px] text-muted-foreground mt-1.5">
                      ●
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-4">
              {project.metrics.map((m) => (
                <div key={m.label} className="border-l border-border pl-3">
                  <div className="text-xl md:text-2xl font-medium tabular-nums tracking-tight">
                    {m.value}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-mono">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="text-[10px] font-mono uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-5">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-link text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                <span className="link-line">View source</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="arrow-link text-sm text-foreground hover:text-muted-foreground transition-colors"
                >
                  <span className="link-line">Live demo</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 order-1 md:order-2">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-card border border-border">
              <ProjectVisual slug={project.slug} accent={project.accent} />
            </div>
            <p className="md:hidden mt-3 font-serif italic text-base text-muted-foreground">
              {project.subtitle}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}
