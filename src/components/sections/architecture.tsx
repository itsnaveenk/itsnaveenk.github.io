"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Section, DisplayHeading } from "@/components/ui/section";

export function Architecture() {
  return (
    <Section id="architecture" number="007 /" label="System Design">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14 md:mb-16">
        <div className="lg:col-span-8">
          <DisplayHeading size="lg">
            <span>How a request</span>
            <span className="font-serif italic"> flows </span>
            <span>through</span>
            <br />
            <span>production,</span>
            <span className="font-serif italic text-muted-foreground">
              {" "}
              simplified.
            </span>
          </DisplayHeading>
        </div>
        <div className="lg:col-span-4 lg:pt-3">
          <p className="text-muted-foreground text-[15px] md:text-base leading-relaxed">
            Async ingestion, layered caching, hybrid retrieval. The boring parts
            that keep things fast.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
        <ArchitectureDiagram />

        <div className="lg:col-span-4 grid gap-0 border-t border-border lg:border-t-0">
          {capabilities.map((c, i) => (
            <CapabilityRow
              key={c.title}
              index={i + 1}
              title={c.title}
              description={c.description}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

const capabilities = [
  {
    title: "Layered caching",
    description:
      "L1 in memory, L2 Redis, L3 datastore. Hot path APIs hit memory in microseconds.",
  },
  {
    title: "Event driven pipelines",
    description:
      "Kafka decouples writes from indexing. Producers stay fast, consumers scale independently.",
  },
  {
    title: "Hybrid retrieval",
    description:
      "BM25 plus dense vectors plus LLM reranking. The best of lexical and semantic.",
  },
  {
    title: "Async first design",
    description:
      "Backpressure, retries, dead letter queues. The boring parts that keep prod alive.",
  },
];

function CapabilityRow({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border-b border-border last:border-b-0 py-5"
    >
      <div className="flex items-start gap-4">
        <span className="font-mono text-[10px] text-muted-foreground tabular-nums pt-1.5">
          0{index}
        </span>
        <div className="flex-1">
          <h3 className="text-[15px] md:text-base font-medium tracking-tight">
            {title}
          </h3>
          <p className="mt-1.5 text-[13px] text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function ArchitectureDiagram() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="lg:col-span-8 relative rounded-xl border border-border bg-card overflow-hidden"
    >
      <div className="grid grid-cols-4 border-b border-border">
        {["Client", "Edge", "Compute", "Data"].map((label, i) => (
          <div
            key={label}
            className="px-4 py-2.5 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground border-r border-border last:border-r-0"
          >
            <span className="text-muted-foreground/60 tabular-nums mr-2">
              0{i + 1}
            </span>
            {label}
          </div>
        ))}
      </div>

      <div className="relative aspect-[16/10] p-4 md:p-8">
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <svg
          className="absolute inset-0 w-full h-full text-foreground"
          preserveAspectRatio="none"
          viewBox="0 0 100 60"
        >
          {[
            { x1: 12, y1: 30, x2: 32, y2: 30, h: false },
            { x1: 60, y1: 18, x2: 85, y2: 18, h: true },
            { x1: 60, y1: 42, x2: 85, y2: 42, h: false },
            { x1: 32, y1: 30, x2: 55, y2: 18, h: true },
            { x1: 32, y1: 30, x2: 55, y2: 30, h: false },
            { x1: 32, y1: 30, x2: 55, y2: 42, h: false },
          ].map((line, i) => (
            <motion.line
              key={i}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="currentColor"
              strokeOpacity={line.h ? 0.5 : 0.2}
              strokeWidth={0.4}
              strokeDasharray="1.5 1"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3 + i * 0.1 }}
            />
          ))}

          {inView && (
            <motion.circle
              r={0.7}
              fill="currentColor"
              initial={{ cx: 12, cy: 30 }}
              animate={{
                cx: [12, 32, 55, 85],
                cy: [30, 30, 18, 18],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                times: [0, 0.3, 0.6, 1],
              }}
            />
          )}
        </svg>

        <NodeBox x={5} y={45} label="API Gateway" sub="REST" delay={0.2} inView={inView} />
        <NodeBox x={28} y={45} label="search-svc" sub="Spring" highlight delay={0.3} inView={inView} />
        <NodeBox x={50} y={20} label="Redis" sub="hot cache" highlight delay={0.4} inView={inView} />
        <NodeBox x={50} y={45} label="Kafka" sub="ingest" delay={0.5} inView={inView} />
        <NodeBox x={50} y={70} label="LLM" sub="rerank" delay={0.6} inView={inView} />
        <NodeBox x={78} y={20} label="Elasticsearch" sub="BM25" highlight delay={0.7} inView={inView} />
        <NodeBox x={78} y={70} label="Vector DB" sub="embed" delay={0.8} inView={inView} />
      </div>

      <div className="px-5 py-2.5 border-t border-border flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-pulse" />
          <span>4.2K req/s</span>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <span>p95 · 187ms</span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <span>cache hit · 92%</span>
        </div>
      </div>
    </motion.div>
  );
}

function NodeBox({
  x,
  y,
  label,
  sub,
  highlight = false,
  delay,
  inView,
}: {
  x: number;
  y: number;
  label: string;
  sub?: string;
  highlight?: boolean;
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay }}
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
      className="absolute -translate-x-1/2 -translate-y-1/2"
    >
      <div
        className={`relative rounded-md border bg-background/80 backdrop-blur-sm px-2.5 py-1.5 min-w-[80px] text-center ${
          highlight
            ? "border-foreground/40 text-foreground"
            : "border-border text-muted-foreground"
        }`}
      >
        <div className="text-[10px] font-mono font-medium tracking-tight">
          {label}
        </div>
        {sub && (
          <div className="text-[9px] text-muted-foreground mt-0.5 font-mono">
            {sub}
          </div>
        )}
      </div>
    </motion.div>
  );
}
