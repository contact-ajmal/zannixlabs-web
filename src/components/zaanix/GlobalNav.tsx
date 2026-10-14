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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e1e6ec] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
        {/* Brand Logo - Google Research style */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-90">
            <span className="grid size-8 place-items-center rounded-full bg-[#1a73e8] font-display text-base font-bold text-white shadow-xs">
              Z
            </span>
            <div className="flex items-baseline">
              <span className="font-display text-lg font-medium text-[#202124] tracking-tight">
                Zannix
              </span>
              <span className="font-sans text-lg font-normal text-[#5f6368] ml-1.5 tracking-tight">
                Research
              </span>
            </div>
          </Link>

          {/* Autonomous Pipeline indicator */}
          <Link
            to="/paradigm"
            className="hidden items-center gap-2 rounded-full border border-[#dadce0] bg-[#f8f9fa] px-3 py-1 font-sans text-xs text-[#3c4043] transition-colors hover:bg-[#f1f3f4] md:flex"
            title="Discover our Autonomous AI Agentic Research Process"
          >
            <span className="relative flex size-2">
              <span className="size-2 rounded-full bg-[#1e8e3e]" />
            </span>
            <span className="font-medium">Autonomous Science</span>
          </Link>
        </div>

        {/* Desktop Navigation Links - Google Research Pill Style */}
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
                className={`rounded-full px-4 py-2 text-sm font-sans font-medium transition-colors ${
                  isActive
                    ? "bg-[#e8f0fe] text-[#1967d2]"
                    : "text-[#5f6368] hover:bg-[#f1f3f4] hover:text-[#202124]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions - Google Pill Buttons */}
        <div className="hidden items-center gap-2.5 md:flex">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-[#dadce0] bg-white text-[#1a73e8] hover:bg-[#f1f3f4] text-xs font-medium px-4 h-9"
            asChild
          >
            <Link to="/research">
              <BookOpen className="mr-1.5 size-3.5" />
              Preprints
            </Link>
          </Button>
          <Button
            size="sm"
            className="rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-medium px-4 h-9 shadow-xs"
            asChild
          >
            <Link to="/paradigm">
              <Sparkles className="mr-1.5 size-3.5" />
              Methodology
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation Sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden text-slate-700 hover:bg-slate-100" aria-label="Open Menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col gap-6 border-[#e1e6ec] bg-white pt-12 text-[#202124]">
            <div className="flex items-center gap-2.5 pb-4 border-b border-[#e1e6ec]">
              <span className="grid size-8 place-items-center rounded-full bg-[#1a73e8] font-display text-base font-bold text-white shadow-xs">
                Z
              </span>
              <div className="flex items-baseline">
                <span className="font-display text-base font-medium text-[#202124]">Zannix</span>
                <span className="font-sans text-base font-normal text-[#5f6368] ml-1">Research</span>
              </div>
            </div>

            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive =
                  link.to === "/"
                    ? currentPath === "/"
                    : currentPath.startsWith(link.to);

                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`rounded-full px-4 py-2.5 text-sm font-sans font-medium transition-colors ${
                      isActive
                        ? "bg-[#e8f0fe] text-[#1967d2]"
                        : "text-[#5f6368] hover:bg-[#f1f3f4] hover:text-[#202124]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-[#e1e6ec]">
              <Button className="w-full justify-center rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white" asChild>
                <Link to="/research">Browse Research Catalog</Link>
              </Button>
              <Button variant="outline" className="w-full justify-center rounded-full border-[#dadce0] text-[#3c4043]" asChild>
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
