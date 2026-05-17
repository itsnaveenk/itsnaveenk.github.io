"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Section, DisplayHeading } from "@/components/ui/section";
import { aboutContent } from "@/lib/data";

export function About() {
  return (
    <Section id="about" number="002 /" label="About">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-7">
          <DisplayHeading size="lg">
            <span>Backend engineer</span>
            <span className="font-serif italic text-muted-foreground">
              {" "}
              focused on{" "}
            </span>
            <span>throughput,</span>
            <span className="font-serif italic"> latency </span>
            <span className="text-muted-foreground">&</span>
            <span className="font-serif italic"> intent.</span>
          </DisplayHeading>

          <div className="mt-10 space-y-5 max-w-2xl text-[15px] md:text-base text-muted-foreground leading-relaxed text-pretty">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              className="text-foreground"
            >
              {aboutContent.intro}
            </motion.p>
            {aboutContent.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 lg:pl-12 lg:pt-6">
          <div className="space-y-0">
            <MetaRow label="Currently" value="Adda247 / SDE 1" />
            <MetaRow label="Based" value="Gurugram, India" />
            <MetaRow label="Education" value="MCA / IET Lucknow" />
            <MetaRow label="Working with" value="Java · Kafka · ES · AWS" />
            <MetaRow label="Exploring" value="RAG, vector retrieval, agents" />
          </div>

          <div className="mt-12">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Focus areas
            </div>
            <div className="space-y-0">
              {aboutContent.pillars.map((p, i) => (
                <PillarRow
                  key={p.label}
                  index={i + 1}
                  label={p.label}
                  description={p.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 py-3 border-b border-border first:border-t">
      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground shrink-0">
        {label}
      </span>
      <span className="text-sm text-foreground text-right">{value}</span>
    </div>
  );
}

function PillarRow({
  index,
  label,
  description,
}: {
  index: number;
  label: string;
  description: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className="group flex items-start gap-5 py-4 border-t border-border last:border-b"
    >
      <span className="font-mono text-[10px] text-muted-foreground tabular-nums pt-1.5">
        0{index}
      </span>
      <div className="flex-1">
        <div className="text-[15px] font-medium tracking-tight">
          {label}
        </div>
        <div className="mt-1 text-[13px] text-muted-foreground leading-relaxed">
          {description}
        </div>
      </div>
    </motion.div>
  );
}
