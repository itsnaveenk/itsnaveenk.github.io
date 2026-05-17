"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Download, ArrowUpRight } from "lucide-react";
import { Section, DisplayHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";

const stats = [
  { label: "Years", value: "1.5+" },
  { label: "Users impacted", value: "5M+" },
  { label: "Weekly searches", value: "600K+" },
  { label: "DB load cut", value: "95%" },
];

export function Resume() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Section id="resume" number="009 /" label="Résumé">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <DisplayHeading size="lg">
            <span>Want the</span>
            <span className="font-serif italic"> full </span>
            <span>picture?</span>
          </DisplayHeading>

          <p className="mt-6 max-w-md text-muted-foreground text-[15px] md:text-base leading-relaxed">
            Grab the latest copy of my résumé. It goes deeper into the systems,
            scale, and tradeoffs behind each project.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button size="default" variant="primary" asChild>
              <a href={personalInfo.resumeUrl} download>
                <Download className="h-4 w-4" />
                Download résumé
              </a>
            </Button>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-link text-sm text-foreground hover:text-muted-foreground transition-colors"
            >
              <span className="link-line">View online</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <div className="grid grid-cols-2 border-t border-l border-border">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
                className="border-r border-b border-border p-6 md:p-7"
              >
                <div className="text-2xl md:text-3xl font-medium tabular-nums tracking-tight">
                  {s.value}
                </div>
                <div className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
