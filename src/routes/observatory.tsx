import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Database, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlobalNav } from "@/components/zaanix/GlobalNav";
import { GlobalFooter } from "@/components/zaanix/GlobalFooter";
import { InteractiveObservatoryStudio } from "@/components/zaanix/InteractiveObservatoryStudio";
import { instituteStats } from "@/components/zaanix/researchData";

export const Route = createFileRoute("/observatory")({
  head: () => ({
    meta: [
      { title: "Empirical Telemetry Observatory — ZannixLabs" },
      {
        name: "description",
        content:
          "Interact with real-world telemetry datasets across AI Gateway Economics, LMSYS Chatbot Arena Biases, and OpenSky Aviation Airspace.",
      },
    ],
  }),
  component: ObservatoryPage,
});

function ObservatoryPage() {
  return (
    <div className="dark min-h-screen bg-background bg-mesh text-foreground">
      <GlobalNav />

      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-5 py-12 md:py-16 space-y-5">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary font-mono text-xs">
              LIVE TELEMETRY STUDIO
            </Badge>
            <span className="font-mono text-xs text-muted-foreground">
              Empirical Lakehouse Explorers
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.08]">
            Interactive Research <span className="text-gradient">Observatory.</span>
          </h1>

          <p className="max-w-3xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Science should be tactile and verifiable. Explore live interactive previews of the empirical datasets underpinning our research preprints. Manipulate parameters, inspect distributions, and evaluate non-linear regimes across three major research domains.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 pt-4">
            {instituteStats.map((s) => (
              <div key={s.label} className="rounded-xl border border-border/70 bg-background/50 p-3 text-center">
                <p className="font-display text-lg md:text-xl font-bold text-primary">{s.value}</p>
                <p className="font-mono text-[10px] text-muted-foreground mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Observatory Studio Section */}
        <section className="mx-auto max-w-7xl px-5 py-6">
          <InteractiveObservatoryStudio />
        </section>

        {/* Related Papers Quick Links */}
        <section className="mx-auto max-w-7xl px-5 pt-16">
          <div className="mb-8 max-w-2xl">
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              // VERIFY THE FORMAL PAPERS
            </span>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Deep-Dive into the Camera-Ready Preprints
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Every visualization above corresponds to an empirical research paper with formal proofs and LaTeX specifications.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Link
              to="/research/$paperId"
              params={{ paperId: "openrouter-llm-economics" }}
              className="glass rounded-xl p-5 hover:border-primary/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-primary uppercase">01 • AI Economics</span>
                <h4 className="font-display text-sm font-semibold text-foreground">Volume–Revenue Bifurcation &amp; Agent Costs</h4>
                <p className="text-xs text-muted-foreground line-clamp-2">646.2T tokens, 1,091 model endpoints, and 31.9x multi-turn escalation.</p>
              </div>
              <span className="mt-4 flex items-center gap-1 font-mono text-xs text-primary">Read Paper <ArrowRight className="size-3" /></span>
            </Link>

            <Link
              to="/research/$paperId"
              params={{ paperId: "lmsys-chatbot-arena-confounders" }}
              className="glass rounded-xl p-5 hover:border-primary/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-primary uppercase">02 • Evaluation Science</span>
                <h4 className="font-display text-sm font-semibold text-foreground">Beyond Elo: LMSYS Arena Confounders</h4>
                <p className="text-xs text-muted-foreground line-clamp-2">Refusal tax, markdown inflation (+11.73 pp), and evaluator calibration.</p>
              </div>
              <span className="mt-4 flex items-center gap-1 font-mono text-xs text-primary">Read Paper <ArrowRight className="size-3" /></span>
            </Link>

            <Link
              to="/research/$paperId"
              params={{ paperId: "opensky-terminal-airspace" }}
              className="glass rounded-xl p-5 hover:border-primary/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-primary uppercase">03 • Aerospace Telemetry</span>
                <h4 className="font-display text-sm font-semibold text-foreground">Airborne Vectoring vs Surface Gridlock</h4>
                <p className="text-xs text-muted-foreground line-clamp-2">458K ADS-B vectors across 104 hubs analyzing terminal airspace tortuosity.</p>
              </div>
              <span className="mt-4 flex items-center gap-1 font-mono text-xs text-primary">Read Paper <ArrowRight className="size-3" /></span>
            </Link>
          </div>
        </section>
      </main>

      <GlobalFooter />
    </div>
  );
}
