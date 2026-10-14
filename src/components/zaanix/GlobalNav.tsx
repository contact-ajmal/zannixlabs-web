import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen, Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Research", to: "/research" },
  { label: "The Agentic Paradigm", to: "/paradigm" },
  { label: "Observatory", to: "/observatory" },
  { label: "About Lab", to: "/about" },
] as const;

export function GlobalNav() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5">
        {/* Brand Logo */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2.5 transition-transform hover:scale-[1.02]">
            <span className="grid size-8 place-items-center rounded-lg bg-gradient-accent font-display text-base font-bold text-primary-foreground shadow-glow">
              Z
            </span>
            <div className="flex flex-col">
              <span className="font-display text-sm font-semibold tracking-[0.2em] leading-none text-foreground">
                ZANNIX LABS
              </span>
              <span className="font-mono text-[9px] tracking-wider text-muted-foreground">
                EMPIRICAL AI INSTITUTE
              </span>
            </div>
          </Link>

          {/* Live Agent Engine indicator */}
          <Link
            to="/paradigm"
            className="hidden items-center gap-2 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 font-mono text-[10px] text-success transition-colors hover:bg-success/20 md:flex"
            title="Discover our Autonomous AI Agentic Research Process"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success" />
              <span className="relative size-1.5 rounded-full bg-success" />
            </span>
            <span>AGENTIC SCIENCE PIPELINE</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.to === "/"
                ? currentPath === "/"
                : currentPath.startsWith(link.to);

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-md px-3 py-1.5 text-sm transition-all ${
                  isActive
                    ? "bg-primary/10 font-medium text-primary shadow-xs"
                    : "text-muted-foreground hover:bg-accent/40 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="glass" size="sm" asChild>
            <Link to="/research">
              <BookOpen className="mr-1 size-3.5" />
              Papers
            </Link>
          </Button>
          <Button variant="glow" size="sm" asChild>
            <Link to="/paradigm">
              <Sparkles className="mr-1 size-3.5" />
              The Paradigm
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation Sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open Menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col gap-6 border-border bg-popover/95 backdrop-blur-2xl pt-12">
            <div className="flex items-center gap-2.5 pb-4 border-b border-border">
              <span className="grid size-8 place-items-center rounded-lg bg-gradient-accent font-display text-base font-bold text-primary-foreground shadow-glow">
                Z
              </span>
              <span className="font-display text-sm font-semibold tracking-[0.2em]">ZANNIX LABS</span>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive =
                  link.to === "/"
                    ? currentPath === "/"
                    : currentPath.startsWith(link.to);

                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`rounded-lg px-3 py-2.5 text-base transition-colors ${
                      isActive
                        ? "bg-primary/15 font-semibold text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-border">
              <Button variant="glow" className="w-full justify-center" asChild>
                <Link to="/research">Browse Research Preprints</Link>
              </Button>
              <Button variant="glass" className="w-full justify-center" asChild>
                <a href="https://arxiv.org/" target="_blank" rel="noreferrer">
                  arXiv Repository <ArrowUpRight className="ml-1 size-3.5" />
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
