"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  number?: string;
  label?: string;
}

export function Section({
  children,
  id,
  number,
  label,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full py-28 md:py-40 px-6 md:px-10 lg:px-16",
        className
      )}
      {...props}
    >
      <div className="mx-auto max-w-[1480px]">
        {(number || label) && <SectionMarker number={number} label={label} />}
        {children}
      </div>
    </section>
  );
}

function SectionMarker({
  number,
  label,
}: {
  number?: string;
  label?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="mb-12 md:mb-20 flex items-center gap-4"
    >
      {number && (
        <span className="font-mono text-xs text-muted-foreground tabular-nums">
          {number}
        </span>
      )}
      <div className="h-px flex-1 max-w-16 bg-border" />
      {label && (
        <span className="eyebrow text-foreground/80">{label}</span>
      )}
      <div className="h-px flex-1 bg-border" />
    </motion.div>
  );
}

interface DisplayHeadingProps {
  children: React.ReactNode;
  className?: string;
  size?: "xl" | "lg" | "md";
}

export function DisplayHeading({
  children,
  className,
  size = "lg",
}: DisplayHeadingProps) {
  const ref = React.useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const sizeClass =
    size === "xl" ? "display-xl" : size === "lg" ? "display-lg" : "display-md";

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={cn(sizeClass, "text-foreground text-balance", className)}
    >
      {children}
    </motion.h2>
  );
}
