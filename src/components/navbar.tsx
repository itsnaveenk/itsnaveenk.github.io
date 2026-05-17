"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Command } from "lucide-react";
import { navLinks, personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const triggerCommandPalette = () => {
    document.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", metaKey: true })
    );
  };

  return (
    <>
      <motion.header
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-[1480px] px-6 md:px-10 lg:px-16">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#hero"
              className="flex items-center gap-3 group"
              aria-label="Home"
            >
              <span className="font-mono text-xs text-muted-foreground tabular-nums">
                001
              </span>
              <div className="h-px w-6 bg-border" />
              <span className="text-sm font-medium tracking-tight">
                <span className="text-foreground">{personalInfo.name}</span>
                <span className="text-muted-foreground font-mono text-xs ml-2">
                  /BE
                </span>
              </span>
            </a>

            {/* Center nav */}
            <ul className="hidden md:flex items-center gap-7">
              {navLinks.map((link, i) => (
                <li key={link.href} className="flex items-center gap-1.5">
                  <span className="font-mono text-[10px] text-muted-foreground/60 tabular-nums">
                    0{i + 1}
                  </span>
                  <a
                    href={link.href}
                    className="text-xs font-mono uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors duration-300 link-line"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right */}
            <div className="flex items-center gap-3">
              <button
                onClick={triggerCommandPalette}
                className="hidden md:inline-flex items-center gap-2 h-9 px-3 rounded-full border border-border text-xs text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors font-mono"
                aria-label="Open command palette"
              >
                <Command className="h-3 w-3" />
                <span>K</span>
              </button>
              <Button
                size="sm"
                variant="primary"
                className="hidden md:inline-flex h-9 text-xs"
                asChild
              >
                <a href="#contact">Let&apos;s talk →</a>
              </Button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-full border border-border"
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-background/95 backdrop-blur-md"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-24 left-6 right-6 bg-card border border-border rounded-3xl p-6"
            >
              <ul className="flex flex-col">
                {navLinks.map((link, i) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 py-4 border-b border-border last:border-0"
                    >
                      <span className="font-mono text-xs text-muted-foreground tabular-nums">
                        0{i + 1}
                      </span>
                      <span className="text-xl font-serif italic">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-6 flex items-center justify-center h-12 rounded-full bg-primary text-primary-foreground text-sm font-medium"
              >
                Let&apos;s talk →
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
