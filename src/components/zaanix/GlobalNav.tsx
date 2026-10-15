import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen, Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Research", to: "/research" },
  { label: "Blogs", to: "/blogs" },
  { label: "The Agentic Paradigm", to: "/paradigm" },
  { label: "Observatory", to: "/observatory" },
  { label: "About Lab", to: "/about" },
] as const;

export function GlobalNav() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e1e6ec] bg-white/95 backdrop-blur-md">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Logo */}
        <div className="flex items-center justify-start gap-3 min-w-0">
          <Link to="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-90 shrink-0">
            <img
              src="/images/zannix-emblem.png"
              alt="ZannixLabs Logo"
              className="h-9 w-auto object-contain shrink-0"
            />
            <div className="flex items-baseline">
              <span className="font-display text-xl font-bold text-[#202124] tracking-tight">
                Zannix<span className="text-[#1a73e8]">Labs</span>
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Desktop Navigation Links (Centrally Aligned) */}
        <nav className="hidden items-center justify-center gap-1 lg:flex shrink-0">
          {navLinks.map((link) => {
            const isActive =
              link.to === "/"
                ? currentPath === "/"
                : currentPath.startsWith(link.to);

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-full px-3 xl:px-3.5 py-1.5 text-xs xl:text-sm font-sans font-medium transition-colors whitespace-nowrap ${
                  isActive
                    ? "bg-[#e8f0fe] text-[#1967d2] font-semibold"
                    : "text-[#5f6368] hover:bg-[#f1f3f4] hover:text-[#202124]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Desktop CTA Buttons & Mobile Hamburger Button */}
        <div className="flex items-center justify-end gap-2 min-w-0">
          {/* Desktop CTAs (shown on lg+) */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Button
              variant="outline"
              size="sm"
              className="hidden xl:inline-flex rounded-full border-[#dadce0] bg-white text-[#1a73e8] hover:bg-[#f1f3f4] text-xs font-medium px-3.5 h-9"
              asChild
            >
              <Link to="/research">
                <BookOpen className="mr-1.5 size-3.5" />
                Preprints
              </Link>
            </Button>
            <Button
              size="sm"
              className="rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-medium px-3.5 h-9 shadow-xs"
              asChild
            >
              <Link to="/paradigm">
                <Sparkles className="mr-1.5 size-3.5" />
                Methodology
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation Sheet */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden rounded-full text-slate-700 hover:bg-slate-100 size-9"
                aria-label="Open Navigation Menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-6 border-[#e1e6ec] bg-white pt-12 text-[#202124]">
              <div className="flex items-center gap-2.5 pb-4 border-b border-[#e1e6ec]">
                <img
                  src="/images/zannix-emblem.png"
                  alt="ZannixLabs Logo"
                  className="h-8 w-auto object-contain"
                />
                <div className="flex items-baseline">
                  <span className="font-display text-lg font-bold text-[#202124]">
                    Zannix<span className="text-[#1a73e8]">Labs</span>
                  </span>
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
                      onClick={() => setMobileOpen(false)}
                      className={`rounded-full px-4 py-2.5 text-sm font-sans font-medium transition-colors ${
                        isActive
                          ? "bg-[#e8f0fe] text-[#1967d2] font-semibold"
                          : "text-[#5f6368] hover:bg-[#f1f3f4] hover:text-[#202124]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-[#e1e6ec]">
                <Button
                  className="w-full justify-center rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white"
                  onClick={() => setMobileOpen(false)}
                  asChild
                >
                  <Link to="/research">Browse Research Catalog</Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-center rounded-full border-[#dadce0] text-[#3c4043]"
                  onClick={() => setMobileOpen(false)}
                  asChild
                >
                  <a href="https://arxiv.org/" target="_blank" rel="noreferrer">
                    arXiv Repository <ArrowUpRight className="ml-1 size-3.5" />
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
