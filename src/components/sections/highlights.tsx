"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Section, DisplayHeading } from "@/components/ui/section";
import { engineeringHighlights } from "@/lib/data";

export function Highlights() {
  return (
    <Section id="highlights" number="006 /" label="By the Numbers">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14 md:mb-20">
        <div className="lg:col-span-8">
          <DisplayHeading size="lg">
            <span>Numbers</span>
            <span className="font-serif italic"> that move </span>
            <span>the needle.</span>
          </DisplayHeading>
        </div>
        <div className="lg:col-span-4 lg:pt-3">
          <p className="text-muted-foreground text-[15px] md:text-base leading-relaxed">
            A snapshot of production impact, measured in users, throughput, and
            latency saved.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
        {engineeringHighlights.map((h, i) => (
          <HighlightCell
            key={h.label}
            value={h.value}
            label={h.label}
            description={h.description}
            index={i}
          />
        ))}
      </div>
    </Section>
  );
}

function HighlightCell({
  value,
  label,
  description,
  index,
}: {
  value: string;
  label: string;
  description: string;
  index: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className="relative border-r border-b border-border p-7 md:p-8 transition-colors hover:bg-foreground/[0.015]"
    >
      <div className="flex items-baseline justify-between mb-3">
        <span className="text-[10px] font-mono text-muted-foreground tabular-nums">
          0{index + 1}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </span>
      </div>
      <div className="display-md tabular-nums tracking-tight">{value}</div>
      <p className="mt-3 text-[13px] text-muted-foreground leading-relaxed max-w-[28ch]">
        {description}
      </p>
    </motion.div>
  );
}
