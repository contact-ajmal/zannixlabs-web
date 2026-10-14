import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import confetti from "canvas-confetti";
import { toast } from "sonner";
import { AtSign, Briefcase, FileText, GitBranch, Smile, ArrowRight, ShieldCheck, Database, Repeat, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CYAN = "#00F2FE";
const VIOLET = "#7B2CBF";

const researchLinks = [
  { label: "LLM Gateway Economics", to: "/research/openrouter-llm-economics" },
  { label: "LMSYS Leaderboard Confounders", to: "/research/lmsys-chatbot-arena-confounders" },
  { label: "OpenSky Terminal Airspace Telemetry", to: "/research/opensky-terminal-airspace" },
];

const instituteLinks = [
  { label: "The Agentic Research Paradigm", to: "/paradigm" },
  { label: "Research Catalog", to: "/research" },
  { label: "Interactive Observatory", to: "/observatory" },
  { label: "About ZannixLabs", to: "/about" },
];

const socials = [
  { icon: GitBranch, label: "GitHub", href: "https://github.com/contact-ajmal" },
  { icon: FileText, label: "arXiv", href: "https://arxiv.org/" },
  { icon: Smile, label: "Hugging Face", href: "https://huggingface.co" },
  { icon: AtSign, label: "X / Twitter", href: "https://x.com" },
  { icon: Briefcase, label: "LinkedIn", href: "https://linkedin.com" },
];

export function GlobalFooter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      toast.error("Please enter a valid academic or professional email address");
      return;
    }
    confetti({
      particleCount: 140,
      spread: 80,
      origin: { y: 0.85 },
      colors: [CYAN, VIOLET, "#ffffff"],
    });
    toast.success("Subscribed to ZannixLabs preprint announcements", {
      description: "You will receive early camera-ready preprints directly in your inbox.",
    });
    setEmail("");
  };

  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-xl">
      {/* Top Banner: Open Science & Reproducibility Guarantee */}
      <div className="border-b border-border/60 bg-primary/5 py-4 px-5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-2 text-foreground">
            <Sparkles className="size-3.5 text-primary" />
            <span className="font-semibold text-primary">Autonomous Scientific Pipeline:</span>
            <span>100% Peer-Reproducible Artifacts &amp; Telemetry Lakehouses</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Repeat className="size-3 text-primary" /> Zero Sponsored Bias</span>
            <span className="flex items-center gap-1.5"><Database className="size-3 text-primary" /> Open Telemetry Data</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="size-3 text-primary" /> Verified Welch t-Tests</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Col 1: Institute Identity & Mission */}
          <div className="space-y-4 lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-lg bg-gradient-accent font-display text-base font-bold text-primary-foreground shadow-glow">
                Z
              </span>
              <span className="font-display text-base font-semibold tracking-[0.2em] text-foreground">
                ZANNIX LABS
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Independent frontier empirical research institute. We develop autonomous AI agent workflows to conduct high-velocity, rigorous empirical science across complex real-world data systems.
            </p>
            <div className="pt-2 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="glass grid size-9 place-items-center rounded-lg text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Research Preprints */}
          <div className="space-y-3 lg:col-span-3">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              Featured Preprints
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {researchLinks.map((r) => (
                <li key={r.to}>
                  <Link to={r.to} className="transition-colors hover:text-foreground">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: The Institute */}
          <div className="space-y-3 lg:col-span-2">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              The Institute
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {instituteLinks.map((r) => (
                <li key={r.to}>
                  <Link to={r.to} className="transition-colors hover:text-foreground">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter / Preprints */}
          <div className="space-y-4 lg:col-span-3">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              Preprint Dispatch
            </p>
            <p className="text-xs text-muted-foreground">
              Subscribe to receive new empirical research preprints, camera-ready PDFs, and lakehouse telemetry releases.
            </p>
            <form onSubmit={handleSubscribe} noValidate className="space-y-2">
              <Input
                type="email"
                maxLength={255}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="researcher@institute.edu"
                className="h-10 bg-glass text-sm"
              />
              <Button variant="glow" type="submit" className="w-full h-10 text-xs">
                Subscribe for Preprints <ArrowRight className="ml-1 size-3.5" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-xs text-muted-foreground">
            © 2026 Zannix Labs • Founded by Ajmal Baba • Autonomous Empirical Science
          </p>
          <div className="flex gap-6 font-mono text-xs text-muted-foreground">
            <Link to="/paradigm" className="hover:text-primary transition-colors">
              Agentic Methodology
            </Link>
            <Link to="/research" className="hover:text-primary transition-colors">
              Research Catalog
            </Link>
            <Link to="/about" className="hover:text-primary transition-colors">
              Open Science Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
