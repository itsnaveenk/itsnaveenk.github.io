"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Section, DisplayHeading } from "@/components/ui/section";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" number="004 /" label="Work History">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-14 md:mb-16">
        <div className="lg:col-span-7">
          <DisplayHeading size="lg">
            <span>Production at</span>
            <span className="font-serif italic"> serious </span>
            <span>scale.</span>
          </DisplayHeading>
        </div>
        <div className="lg:col-span-5 lg:pl-12 lg:pt-3">
          <p className="text-muted-foreground text-[15px] md:text-base leading-relaxed">
            Real impact across subscription billing, search infrastructure,
            distributed pipelines, and AI-driven personalization.
          </p>
        </div>
      </div>

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <ExperienceRow key={exp.company + i} exp={exp} index={i} />
        ))}
      </div>
    </Section>
  );
}

function ExperienceRow({
  exp,
  index,
}: {
  exp: (typeof experiences)[number];
  index: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-border first:border-t last:border-b"
    >
      <div className="grid grid-cols-12 gap-4 md:gap-8 py-10 md:py-12 items-start">
        <div className="col-span-2 md:col-span-1">
          <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
            0{index + 1}
          </span>
        </div>

        <div className="col-span-10 md:col-span-3">
          <div className="text-xl md:text-2xl font-medium tracking-tight">
            {exp.company}
          </div>
          <div className="mt-1 text-[13px] text-muted-foreground font-mono">
            {exp.duration}
          </div>
          <div className="mt-0.5 text-[13px] text-muted-foreground">
            {exp.location}
          </div>
        </div>

        <div className="col-span-12 md:col-span-5">
          <div className="font-serif italic text-xl md:text-2xl text-foreground">
            {exp.role}
          </div>
          <p className="mt-3 text-[14px] md:text-[15px] text-muted-foreground leading-relaxed">
            {exp.summary}
          </p>

          <ul className="mt-5 space-y-2">
            {exp.highlights.map((h, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.04 }}
                className="flex items-start gap-3 text-[13px] md:text-[14px] text-foreground/85"
              >
                <span className="font-mono text-[10px] text-muted-foreground mt-1.5">
                  ●
                </span>
                <span>{h}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {exp.stack.map((s) => (
              <span
                key={s}
                className="text-[10px] font-mono uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border border-border text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="col-span-12 md:col-span-3 grid grid-cols-2 gap-4 md:border-l md:border-border md:pl-8">
          {exp.metrics.map((m) => (
            <div key={m.label}>
              <div className="text-xl md:text-2xl font-medium tabular-nums tracking-tight">
                {m.value}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-mono">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
