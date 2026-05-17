"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Section, DisplayHeading } from "@/components/ui/section";
import { skillCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Skills() {
  const [active, setActive] = React.useState(0);

  return (
    <Section id="skills" number="003 /" label="Capabilities">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <DisplayHeading size="lg">
            <span>The</span>
            <span className="font-serif italic"> toolkit </span>
            <span>behind</span>
            <span className="font-serif italic"> production.</span>
          </DisplayHeading>
          <p className="mt-6 max-w-md text-muted-foreground text-[15px] md:text-base leading-relaxed">
            A pragmatic stack centered on the JVM, distributed messaging, search,
            and cloud native AWS, augmented with Python and AI tooling where it
            matters.
          </p>

          <div className="mt-8 hidden lg:flex flex-col">
            {skillCategories.map((cat, i) => (
              <button
                key={cat.name}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={cn(
                  "text-left flex items-center gap-3 py-1.5 transition-colors",
                  active === i
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground/80"
                )}
              >
                <span className="font-mono text-[10px] tabular-nums w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif italic text-lg">{cat.name}</span>
                {active === i && (
                  <motion.span
                    layoutId="skill-indicator"
                    className="ml-2 h-px w-8 bg-foreground"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 lg:hidden mb-6">
            {skillCategories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActive(i)}
                className={cn(
                  "text-left flex items-center gap-3 py-2 border-b border-border",
                  active === i ? "text-foreground" : "text-muted-foreground"
                )}
              >
                <span className="font-mono text-[10px] tabular-nums w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif italic text-base">{cat.name}</span>
              </button>
            ))}
          </div>

          <SkillList category={skillCategories[active]} key={active} />
        </div>
      </div>
    </Section>
  );
}

function SkillList({
  category,
}: {
  category: (typeof skillCategories)[number];
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <div ref={ref} className="border-t border-border">
      {category.skills.map((skill, i) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 6 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.04 }}
          className="grid grid-cols-12 gap-4 items-center py-4 border-b border-border"
        >
          <span className="col-span-1 font-mono text-[10px] text-muted-foreground tabular-nums">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="col-span-5 md:col-span-4">
            <span className="text-[15px] font-medium tracking-tight">
              {skill.name}
            </span>
          </div>
          <div className="col-span-4 md:col-span-5 hidden md:flex items-center gap-3">
            <div className="h-px w-full bg-border relative overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: skill.level / 100 } : {}}
                transition={{
                  duration: 1.1,
                  delay: 0.3 + i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ originX: 0 }}
                className="absolute inset-0 bg-foreground"
              />
            </div>
          </div>
          <div className="col-span-6 md:col-span-2 text-right">
            <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
              {skill.level}%
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
