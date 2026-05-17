"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: "slow" | "normal" | "fast";
  reverse?: boolean;
  className?: string;
}

export function Marquee({
  children,
  speed = "normal",
  reverse = false,
  className,
}: MarqueeProps) {
  const duration = speed === "slow" ? "60s" : speed === "fast" ? "20s" : "40s";
  return (
    <div className={cn("relative overflow-hidden flex", className)}>
      <div
        className="flex shrink-0 items-center gap-8 pr-8"
        style={{
          animation: `marquee ${duration} linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 items-center gap-8 pr-8"
        style={{
          animation: `marquee ${duration} linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
      </div>
    </div>
  );
}
