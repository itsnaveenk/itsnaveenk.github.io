"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectVisualProps {
  slug: string;
  accent: string;
}

export function ProjectVisual({ slug }: ProjectVisualProps) {
  return (
    <div className="absolute inset-0">
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid-pattern-proj"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 28 0 L 0 0 0 28"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern-proj)" />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center p-5">
        {slug === "codearena" && <CodeArenaVisual />}
        {slug === "ai-product-search" && <SearchVisual />}
        {slug === "smartchapter" && <ChapterVisual />}
      </div>
    </div>
  );
}

function Node({
  x,
  y,
  label,
  sub,
  highlight = false,
  delay = 0,
}: {
  x: number;
  y: number;
  label: string;
  sub?: string;
  highlight?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{ left: `${x}%`, top: `${y}%` }}
      className="absolute -translate-x-1/2 -translate-y-1/2"
    >
      <div
        className={cn(
          "relative rounded-md border bg-background/80 backdrop-blur-sm px-2.5 py-1.5 min-w-[78px] text-center",
          highlight
            ? "border-foreground/40 text-foreground"
            : "border-border text-muted-foreground"
        )}
      >
        <div className="text-[10px] font-mono font-medium tracking-tight">
          {label}
        </div>
        {sub && (
          <div className="text-[9px] text-muted-foreground/70 mt-0.5 font-mono">
            {sub}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function FlowLine({
  x1,
  y1,
  x2,
  y2,
  delay = 0,
  highlight = false,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay?: number;
  highlight?: boolean;
}) {
  return (
    <motion.line
      x1={`${x1}%`}
      y1={`${y1}%`}
      x2={`${x2}%`}
      y2={`${y2}%`}
      stroke="currentColor"
      strokeOpacity={highlight ? 0.5 : 0.2}
      strokeWidth={1}
      strokeDasharray="3 3"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay }}
    />
  );
}

function CodeArenaVisual() {
  return (
    <div className="relative w-full h-full text-foreground/40">
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <FlowLine x1={20} y1={50} x2={42} y2={30} delay={0.3} highlight />
        <FlowLine x1={20} y1={50} x2={42} y2={50} delay={0.4} />
        <FlowLine x1={20} y1={50} x2={42} y2={70} delay={0.5} />
        <FlowLine x1={58} y1={30} x2={80} y2={50} delay={0.7} highlight />
        <FlowLine x1={58} y1={50} x2={80} y2={50} delay={0.8} />
        <FlowLine x1={58} y1={70} x2={80} y2={50} delay={0.9} />
      </svg>

      <Node x={20} y={50} label="API" sub="Spring" delay={0.1} />
      <Node x={50} y={20} label="Kafka" sub="submit" highlight delay={0.2} />
      <Node x={50} y={50} label="Worker" sub="docker" delay={0.3} />
      <Node x={50} y={80} label="Redis" sub="leaderboard" delay={0.4} />
      <Node x={80} y={50} label="Postgres" sub="results" delay={0.5} />

      <motion.div
        animate={{
          left: ["20%", "50%", "80%", "20%"],
          top: ["50%", "20%", "50%", "50%"],
          opacity: [0, 0.8, 0.8, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground"
      />
    </div>
  );
}

function SearchVisual() {
  return (
    <div className="relative w-full h-full text-foreground/40">
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <FlowLine x1={15} y1={50} x2={42} y2={30} delay={0.3} highlight />
        <FlowLine x1={15} y1={50} x2={42} y2={70} delay={0.4} />
        <FlowLine x1={58} y1={30} x2={75} y2={50} delay={0.6} highlight />
        <FlowLine x1={58} y1={70} x2={75} y2={50} delay={0.7} />
      </svg>

      <Node x={15} y={50} label="Query" sub="user" delay={0.1} />
      <Node x={50} y={20} label="BM25" sub="ES" highlight delay={0.2} />
      <Node x={50} y={50} label="LLM" sub="refine" delay={0.3} />
      <Node x={50} y={80} label="Vector" sub="embed" delay={0.4} />
      <Node x={80} y={50} label="Rerank" sub="hybrid" highlight delay={0.5} />
    </div>
  );
}

function ChapterVisual() {
  const lines = [
    { time: "00:00", label: "Intro" },
    { time: "02:14", label: "Overview" },
    { time: "06:42", label: "Deep dive" },
    { time: "12:08", label: "Tradeoffs" },
    { time: "18:30", label: "Quiz" },
  ];
  return (
    <div className="relative w-full h-full flex flex-col items-stretch justify-center gap-2 p-2">
      {lines.map((c, i) => (
        <motion.div
          key={c.time}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="flex items-center gap-3 px-3 py-1.5 rounded-md border border-border bg-background/60"
        >
          <span className="text-[9px] font-mono text-muted-foreground tabular-nums">
            {c.time}
          </span>
          <span className="text-[10px] text-foreground/80 truncate flex-1">
            {c.label}
          </span>
          <div className="h-px w-6 bg-border relative overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.08 + 0.3 }}
              style={{ originX: 0 }}
              className="absolute inset-0 bg-foreground/60"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
