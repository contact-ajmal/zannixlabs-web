import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import confetti from "canvas-confetti";
import { toast } from "sonner";
import { AtSign, Briefcase, FileText, GitBranch, Smile, ArrowRight, ShieldCheck, Database, Repeat, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const BRAND_BLUE = "#1d4ed8";
const BRAND_NAVY = "#1e3a8a";

const researchLinks = [
  { label: "NHS Cancer Waiting Times Dynamics", to: "/research/nhs-cancer-waiting-times" },
  { label: "LLM Gateway Economics", to: "/research/openrouter-llm-economics" },
  { label: "LMSYS Leaderboard Confounders", to: "/research/lmsys-chatbot-arena-confounders" },
  { label: "OpenSky Terminal Airspace Telemetry", to: "/research/opensky-terminal-airspace" },
];

const instituteLinks = [
  { label: "Published Blogs", to: "/blogs" },
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed)) {
      toast.error("Please enter a valid academic or professional email address");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, source: "footer_dispatch" }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Subscription could not be processed");
      }

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.85 },
        colors: [BRAND_BLUE, BRAND_NAVY, "#0284c7"],
      });
      toast.success("Subscribed to ZannixLabs Preprint Dispatches", {
        description: data.message || "You will receive early camera-ready preprints directly in your inbox.",
      });
      setEmail("");
    } catch (err: any) {
      toast.error(err.message || "Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="border-t border-[#e1e6ec] bg-[#f8f9fa] text-[#5f6368] font-sans">
      {/* Top Banner: Open Science & Reproducibility Guarantee */}
      <div className="border-b border-[#e1e6ec] bg-white py-3.5 px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-xs font-sans text-[#5f6368]">
          <div className="flex items-center gap-2 text-[#202124]">
            <Sparkles className="size-3.5 text-[#1a73e8]" />
            <span className="font-medium text-[#1a73e8]">Autonomous Scientific Pipeline:</span>
            <span>100% Peer-Reproducible Artifacts &amp; Telemetry Lakehouses</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Repeat className="size-3 text-[#1a73e8]" /> Zero Sponsored Bias</span>
            <span className="flex items-center gap-1.5"><Database className="size-3 text-[#1a73e8]" /> Open Telemetry Data</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="size-3 text-[#1e8e3e]" /> Verified Welch t-Tests</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Col 1: Institute Identity & Mission */}
          <div className="space-y-4 lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
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
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-[#5f6368] font-sans">
              Independent empirical science institute. We pioneer autonomous AI agent workflows to conduct high-velocity, mathematically rigorous science across complex real-world data systems.
            </p>
            <div className="pt-2 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid size-9 place-items-center rounded-full border border-[#dadce0] bg-white text-[#5f6368] shadow-2xs transition-all hover:border-[#1a73e8] hover:text-[#1a73e8]"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Research Preprints */}
          <div className="space-y-3 lg:col-span-3">
            <p className="font-sans text-xs font-semibold uppercase tracking-wider text-[#1a73e8]">
              Featured Publications
            </p>
            <ul className="space-y-2 text-sm text-[#5f6368] font-sans">
              {researchLinks.map((r) => (
                <li key={r.to}>
                  <Link to={r.to} className="transition-colors hover:text-[#1a73e8]">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: The Institute */}
          <div className="space-y-3 lg:col-span-2">
            <p className="font-sans text-xs font-semibold uppercase tracking-wider text-[#1a73e8]">
              The Institute
            </p>
            <ul className="space-y-2 text-sm text-[#5f6368] font-sans">
              {instituteLinks.map((r) => (
                <li key={r.to}>
                  <Link to={r.to} className="transition-colors hover:text-[#1a73e8]">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter / Preprints */}
          <div className="space-y-4 lg:col-span-3">
            <p className="font-sans text-xs font-semibold uppercase tracking-wider text-[#1a73e8]">
              Preprint Dispatch
            </p>
            <p className="text-xs text-[#5f6368] font-sans leading-relaxed">
              Subscribe to receive new empirical research preprints, camera-ready PDFs, and lakehouse telemetry releases.
            </p>
            <form onSubmit={handleSubscribe} noValidate className="space-y-2">
              <Input
                type="email"
                maxLength={255}
                disabled={isSubmitting}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="researcher@institute.edu"
                className="h-10 rounded-full bg-white border-[#dadce0] text-[#202124] placeholder:text-[#80868b] px-4 text-xs font-sans focus:border-[#1a73e8]"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-10 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-medium shadow-xs"
              >
                {isSubmitting ? "Registering..." : (
                  <>
                    Subscribe for Preprints <ArrowRight className="ml-1 size-3.5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#e1e6ec] pt-8 text-center sm:flex-row sm:text-left font-sans text-xs text-[#70757a]">
          <p>
            © 2026 ZannixLabs • Founded by Ajmal Baba (Founder &amp; AI Agent Assistant Who Guides the Agents) • Autonomous Empirical Research
          </p>
          <div className="flex gap-6">
            <Link to="/paradigm" className="hover:text-[#1a73e8] transition-colors">
              Agentic Methodology
            </Link>
            <Link to="/research" className="hover:text-[#1a73e8] transition-colors">
              Publications Catalog
            </Link>
            <Link to="/about" className="hover:text-[#1a73e8] transition-colors">
              Open Science Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
