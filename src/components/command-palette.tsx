"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Home,
  User,
  Code2,
  Briefcase,
  FolderOpen,
  Layers,
  Github as GithubIcon,
  FileText,
  Mail,
  Linkedin,
  ArrowRight,
  Command,
} from "lucide-react";
import { personalInfo } from "@/lib/data";

interface Item {
  id: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
  group: string;
  keywords?: string;
}

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const navigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  const items: Item[] = React.useMemo(
    () => [
      { id: "hero", label: "Home", description: "Back to top", icon: Home, action: () => navigate("hero"), group: "Navigation" },
      { id: "about", label: "About", description: "Background & focus areas", icon: User, action: () => navigate("about"), group: "Navigation" },
      { id: "skills", label: "Skills", description: "Tech stack and depth", icon: Code2, action: () => navigate("skills"), group: "Navigation" },
      { id: "experience", label: "Experience", description: "Work history at Adda247", icon: Briefcase, action: () => navigate("experience"), group: "Navigation" },
      { id: "projects", label: "Projects", description: "Featured engineering work", icon: FolderOpen, action: () => navigate("projects"), group: "Navigation" },
      { id: "architecture", label: "Architecture", description: "System design overview", icon: Layers, action: () => navigate("architecture"), group: "Navigation" },
      { id: "github", label: "GitHub", description: "Contribution activity", icon: GithubIcon, action: () => navigate("github"), group: "Navigation" },
      { id: "resume", label: "Résumé", description: "Download or view résumé", icon: FileText, action: () => navigate("resume"), group: "Navigation" },
      { id: "contact", label: "Contact", description: "Get in touch", icon: Mail, action: () => navigate("contact"), group: "Navigation" },
      { id: "ext-github", label: "Open GitHub Profile", description: "github.com/itsnaveenk", icon: GithubIcon, action: () => window.open(personalInfo.github, "_blank"), group: "Links" },
      { id: "ext-linkedin", label: "Open LinkedIn", description: "Connect on LinkedIn", icon: Linkedin, action: () => window.open(personalInfo.linkedin, "_blank"), group: "Links" },
      { id: "ext-mail", label: "Send Email", description: personalInfo.email, icon: Mail, action: () => (window.location.href = `mailto:${personalInfo.email}`), group: "Links" },
      { id: "ext-resume", label: "Download Résumé", description: "PDF", icon: FileText, action: () => window.open(personalInfo.resumeUrl, "_blank"), group: "Links" },
    ],
    []
  );

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (i) =>
        i.label.toLowerCase().includes(q) ||
        i.description.toLowerCase().includes(q) ||
        (i.keywords ?? "").toLowerCase().includes(q)
    );
  }, [items, query]);

  const grouped = React.useMemo(() => {
    const map = new Map<string, Item[]>();
    filtered.forEach((i) => {
      if (!map.has(i.group)) map.set(i.group, []);
      map.get(i.group)!.push(i);
    });
    return Array.from(map.entries());
  }, [filtered]);

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  React.useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  React.useEffect(() => setActiveIndex(0), [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(filtered.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(0, i - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[activeIndex]?.action();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[14vh] px-4"
        >
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl rounded-2xl bg-card border border-border shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search or jump to a section…"
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
              />
              <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded border border-border text-[10px] font-mono text-muted-foreground">
                ESC
              </kbd>
            </div>

            <div className="max-h-[60vh] overflow-y-auto py-2">
              {grouped.length === 0 && (
                <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                  No results
                </div>
              )}
              {grouped.map(([group, groupItems]) => (
                <div key={group} className="px-2">
                  <div className="px-3 pt-3 pb-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70 font-mono">
                    {group}
                  </div>
                  {groupItems.map((item) => {
                    const flatIndex = filtered.indexOf(item);
                    const isActive = activeIndex === flatIndex;
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={item.action}
                        onMouseEnter={() => setActiveIndex(flatIndex)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors ${
                          isActive
                            ? "bg-foreground/10 text-foreground"
                            : "text-foreground/80 hover:bg-foreground/5"
                        }`}
                      >
                        <div
                          className={`h-7 w-7 rounded-lg flex items-center justify-center border ${
                            isActive
                              ? "bg-foreground/15 border-foreground/30 text-foreground"
                              : "bg-transparent border-border"
                          }`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium truncate">{item.label}</div>
                          <div className="text-[11px] text-muted-foreground truncate">
                            {item.description}
                          </div>
                        </div>
                        {isActive && <ArrowRight className="h-3.5 w-3.5" />}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between px-5 py-3 border-t border-border text-[10px] font-mono text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded border border-border">↑↓</kbd>
                  navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded border border-border">↵</kbd>
                  select
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Command className="h-3 w-3" />
                <span>K</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
