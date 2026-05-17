"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";
import { Marquee } from "@/components/ui/marquee";

const stack = [
  "JAVA",
  "SPRING BOOT",
  "KAFKA",
  "ELASTICSEARCH",
  "REDIS",
  "POSTGRESQL",
  "AWS",
  "DOCKER",
  "PYTHON",
  "FASTAPI",
  "OPENAI",
  "VECTOR DB",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex flex-col"
    >
      <div className="flex-1 flex flex-col justify-center pt-32 md:pt-36 pb-12 px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1400px] w-full">
          {/* Top meta row */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-between mb-10 md:mb-14"
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-foreground/40 opacity-50 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-foreground/80" />
              </span>
              <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-muted-foreground">
                Available · 2026
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.15em] text-muted-foreground">
              <span>India</span>
              <span className="text-muted-foreground/40">/</span>
              <span>UTC+5:30</span>
            </div>
          </motion.div>

          {/* Editorial headline */}
          <div className="space-y-1">
            <HeadlineLine delay={0.4}>
              <span>Backend</span>
              <span className="font-serif italic"> engineer</span>
              <span> who</span>
            </HeadlineLine>
            <HeadlineLine delay={0.5}>
              <span>builds systems</span>
              <span className="font-serif italic"> at scale.</span>
            </HeadlineLine>
            <HeadlineLine delay={0.6}>
              <span className="text-muted-foreground">search,</span>
              <span> events,</span>
              <span className="text-muted-foreground"> AI.</span>
            </HeadlineLine>
          </div>

          {/* Sub row */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-end">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="md:col-span-5"
            >
              <p className="text-[15px] md:text-base text-muted-foreground leading-relaxed text-pretty max-w-md">
                I&apos;m{" "}
                <span className="text-foreground font-medium">
                  Naveen Kumar
                </span>
                , a backend engineer at{" "}
                <span className="text-foreground">Adda247</span> shipping
                subscription, search and AI infra used by{" "}
                <span className="text-foreground">5M+ users</span>.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button variant="primary" size="default" asChild>
                  <a href="#projects">
                    View Work <ArrowDownRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="default" asChild>
                  <a href={personalInfo.resumeUrl} download>
                    Resume <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.95 }}
              className="md:col-span-7 md:pl-10"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-border border-y border-border">
                {[
                  { v: "5M+", l: "Users" },
                  { v: "600K", l: "Searches/wk" },
                  { v: "40%", l: "Latency ↓" },
                  { v: "1.5+", l: "Years" },
                ].map((s) => (
                  <div key={s.l} className="px-4 py-4">
                    <div className="text-2xl md:text-3xl font-medium tabular-nums tracking-tight">
                      {s.v}
                    </div>
                    <div className="mt-1 text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="border-t border-border py-4 mt-auto"
      >
        <Marquee speed="slow" className="text-muted-foreground/70">
          {stack.map((s) => (
            <div key={s} className="flex items-center gap-8 shrink-0">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em]">
                {s}
              </span>
              <span className="text-muted-foreground/40 text-xs">●</span>
            </div>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}

function HeadlineLine({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        className="display-xl text-foreground"
      >
        {children}
      </motion.div>
    </div>
  );
}
