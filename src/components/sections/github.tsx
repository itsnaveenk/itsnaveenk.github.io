"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Github as GithubIcon } from "lucide-react";
import { Section, DisplayHeading } from "@/components/ui/section";
import { personalInfo } from "@/lib/data";

export function Github() {
  return (
    <Section id="github" number="008 /" label="Open Source">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14 md:mb-16">
        <div className="lg:col-span-7">
          <DisplayHeading size="lg">
            <span>Working in</span>
            <span className="font-serif italic"> public.</span>
          </DisplayHeading>
        </div>
        <div className="lg:col-span-5 lg:pt-3">
          <p className="text-muted-foreground text-[15px] md:text-base leading-relaxed">
            A snapshot of recent activity on GitHub. The full picture lives at{" "}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground link-line"
            >
              @itsnaveenk
            </a>
            .
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
        <ContributionGraph />

        <div className="lg:col-span-4 flex flex-col">
          <StatRow label="Public repos" value="20+" />
          <StatRow label="Total commits" value="1.2K+" />
          <StatRow label="Languages" value="Java · Python · TS" />
          <StatRow label="Pinned topics" value="search, kafka, RAG" />

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 group flex items-center justify-between gap-4 py-4 px-5 border border-border rounded-xl hover:border-foreground/30 hover:bg-foreground/[0.02] transition-colors"
          >
            <div className="flex items-center gap-3">
              <GithubIcon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              <div>
                <div className="text-[14px] font-medium">github.com/itsnaveenk</div>
                <div className="text-[11px] text-muted-foreground font-mono">
                  Visit profile
                </div>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </Section>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-3 border-t border-border last:border-b">
      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      <span className="text-[14px] font-medium text-foreground">{value}</span>
    </div>
  );
}

function ContributionGraph() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const cells = React.useMemo(() => {
    const arr: number[] = [];
    for (let i = 0; i < 53 * 7; i++) {
      const v = Math.sin(i * 12.9898) * 43758.5453;
      const r = v - Math.floor(v);
      const week = Math.floor(i / 7);
      const recencyBias = week / 53;
      const score = r * 0.6 + recencyBias * 0.5;
      let level = 0;
      if (score > 0.85) level = 4;
      else if (score > 0.7) level = 3;
      else if (score > 0.5) level = 2;
      else if (score > 0.35) level = 1;
      arr.push(level);
    }
    return arr;
  }, []);

  // grayscale ramp instead of green
  const colors = [
    "bg-foreground/[0.04]",
    "bg-foreground/15",
    "bg-foreground/30",
    "bg-foreground/55",
    "bg-foreground/85",
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="lg:col-span-8 relative rounded-xl border border-border bg-card p-5 md:p-7"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-muted-foreground tabular-nums">
            01
          </span>
          <div className="h-px w-6 bg-border" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground">
            Contribution activity
          </span>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
          last 12 months
        </span>
      </div>

      <div className="relative overflow-x-auto pb-2">
        <div
          className="grid grid-flow-col grid-rows-7 gap-[3px] min-w-[700px]"
          style={{ gridTemplateColumns: "repeat(53, minmax(10px, 1fr))" }}
        >
          {cells.map((level, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.25, delay: 0.0015 * i }}
              className={`aspect-square rounded-sm ${colors[level]}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-[10px] text-muted-foreground font-mono uppercase tracking-[0.15em]">
        <span>Less</span>
        <div className="flex items-center gap-1">
          {colors.map((c, i) => (
            <div key={i} className={`h-2.5 w-2.5 rounded-sm ${c}`} />
          ))}
        </div>
        <span>More</span>
      </div>
    </motion.div>
  );
}
