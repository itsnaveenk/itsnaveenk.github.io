"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Section } from "@/components/ui/section";
import { personalInfo } from "@/lib/data";

export function Contact() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="contact" number="010 /" label="Contact">
      <div ref={ref} className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
        <div className="lg:col-span-9">
          <div className="space-y-1">
            <HeadlineLine inView={inView} delay={0.1}>
              <span>Have an idea?</span>
            </HeadlineLine>
            <HeadlineLine inView={inView} delay={0.2}>
              <span className="font-serif italic">A system to scale,</span>
            </HeadlineLine>
            <HeadlineLine inView={inView} delay={0.3}>
              <span>a search to fix,</span>
            </HeadlineLine>
            <HeadlineLine inView={inView} delay={0.4}>
              <span>or a role to fill.</span>
            </HeadlineLine>
          </div>

          <motion.a
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            href={`mailto:${personalInfo.email}`}
            className="mt-10 inline-flex items-center gap-3 group"
          >
            <span className="text-xl md:text-3xl font-serif italic text-foreground underline decoration-1 underline-offset-[8px] decoration-muted-foreground/40 group-hover:decoration-foreground transition-colors">
              {personalInfo.email}
            </span>
            <ArrowUpRight className="h-5 w-5 md:h-7 md:w-7 text-foreground group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-500" />
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="lg:col-span-3"
        >
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Elsewhere
          </div>
          <div className="space-y-0">
            <SocialRow href={personalInfo.github} label="GitHub" handle="@itsnaveenk" icon={Github} />
            <SocialRow href={personalInfo.linkedin} label="LinkedIn" handle="itsnaveenk" icon={Linkedin} />
            <SocialRow href={`mailto:${personalInfo.email}`} label="Email" handle="Direct" icon={Mail} />
          </div>

          <div className="mt-8 pt-5 border-t border-border">
            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-foreground/40 opacity-50 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-foreground/80" />
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground">
                Available
              </span>
            </div>
            <p className="text-[13px] text-muted-foreground leading-relaxed">
              Open to backend &amp; platform engineering opportunities.
              Gurugram · remote friendly.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function HeadlineLine({
  children,
  delay,
  inView,
}: {
  children: React.ReactNode;
  delay: number;
  inView: boolean;
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "110%" }}
        animate={inView ? { y: "0%" } : {}}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        className="display-xl text-foreground"
      >
        {children}
      </motion.div>
    </div>
  );
}

function SocialRow({
  href,
  label,
  handle,
  icon: Icon,
}: {
  href: string;
  label: string;
  handle: string;
  icon: typeof Github;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-3 py-3 border-t border-border last:border-b transition-colors hover:text-foreground"
    >
      <div className="flex items-center gap-3">
        <Icon className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
        <span className="text-[14px]">{label}</span>
      </div>
      <div className="flex items-center gap-2 text-muted-foreground">
        <span className="text-[11px] font-mono">{handle}</span>
        <ArrowUpRight className="h-3.5 w-3.5 group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
      </div>
    </a>
  );
}
