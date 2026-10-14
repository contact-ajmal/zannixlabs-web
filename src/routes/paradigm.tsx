import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, CheckCircle2, Cpu, Database, Flame, Layers, Network, Rocket, ShieldCheck, Sigma, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlobalNav } from "@/components/zaanix/GlobalNav";
import { GlobalFooter } from "@/components/zaanix/GlobalFooter";
import { AgentWorkflowDiagram } from "@/components/zaanix/AgentWorkflowDiagram";
import { instituteStats } from "@/components/zaanix/researchData";

export const Route = createFileRoute("/paradigm")({
  head: () => ({
    meta: [
      { title: "The AI Agentic Research Paradigm — ZannixLabs" },
      {
        name: "description",
        content:
          "Discover how ZannixLabs pioneers autonomous AI agent workflows to conduct high-velocity, mathematically rigorous empirical science across complex real-world data systems.",
      },
    ],
  }),
  component: ParadigmPage,
});

function ParadigmPage() {
  return (
    <div className="dark min-h-screen bg-background bg-mesh text-foreground">
      <GlobalNav />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-5 py-12 md:py-16">
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary font-mono text-xs">
                PARADIGM MANIFESTO
              </Badge>
              <span className="font-mono text-xs text-muted-foreground">
                Autonomous Scientific Synthesis
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
              Empirical Science at the Velocity of <span className="text-gradient">AI Intelligence.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Traditional scientific discovery is choked by human bandwidth constraints, months-long peer review latency, and manual data pipelines. At ZannixLabs, we pioneer an <strong>Autonomous AI Agentic Research Process</strong> that transforms continuous telemetry streams into mathematically formal preprints, empirical proofs, and reproducible artifacts in days—not quarters.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="glow" size="lg" asChild>
                <Link to="/research">
                  <BookOpen className="mr-2 size-4" />
                  Inspect Published Preprints
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/observatory">
                  Explore Research Telemetry
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Traditional vs Agentic Comparison Grid */}
        <section className="mx-auto max-w-7xl px-5 py-12 border-t border-border/60">
          <div className="mb-10 max-w-2xl">
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              // 01 — THE BOTTLENECK VS. THE SOLUTION
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Why the Legacy Scientific Method Needs an Agentic Leap
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              A side-by-side comparison between manual research practices and ZannixLabs' autonomous agentic workflow.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* The Legacy Bottleneck */}
            <div className="glass rounded-2xl p-6 md:p-8 border-destructive/30 space-y-4">
              <div className="flex items-center gap-2 text-destructive font-mono text-xs font-semibold">
                <Flame className="size-4" />
                <span>THE LEGACY RESEARCH BOTTLENECK</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                Manual, Fragile &amp; Chronically Slow
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold font-mono">✕</span>
                  <span><strong>Human Analysis Bandwidth:</strong> Scientists are limited to sampling tiny slices of data (hundreds or thousands of points) rather than analyzing trillions of real-time rows.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold font-mono">✕</span>
                  <span><strong>12 to 18 Month Publishing Lag:</strong> Empirical findings are obsolete by the time journals finish review cycles, especially in rapidly evolving fields like AI.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold font-mono">✕</span>
                  <span><strong>The Replication Crisis:</strong> Over 70% of published academic papers fail empirical reproduction due to unreleased code, hidden hyperparameters, or lost datasets.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold font-mono">✕</span>
                  <span><strong>Confirmation &amp; Sponsor Bias:</strong> Institutional agendas and selective publication bias steer research towards expected hypotheses.</span>
                </li>
              </ul>
            </div>

            {/* The ZannixLabs Paradigm */}
            <div className="glass rounded-2xl p-6 md:p-8 border-primary/40 bg-primary/5 space-y-4">
              <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold">
                <Sparkles className="size-4" />
                <span>THE ZANNIXLABS AGENTIC PARADIGM</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                High-Velocity, Continuous &amp; 100% Reproducible
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold font-mono">✓</span>
                  <span><strong>Exabyte Lakehouse Telemetry:</strong> Autonomous ingestion of full-scale populations (646T tokens, 458K flight trajectories, 278K deliveries) with zero sampling bias.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold font-mono">✓</span>
                  <span><strong>Machine-Speed Discovery:</strong> Discovery, statistical verification (Welch t-tests, Pareto frontiers), and camera-ready LaTeX compiled within hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold font-mono">✓</span>
                  <span><strong>Guaranteed Reproducibility:</strong> Every preprint ships with deterministic DuckDB schemas, reproducible code, and open interactive observatories.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold font-mono">✓</span>
                  <span><strong>Autonomous Rigor:</strong> Machine agents test every permutation, identify hidden confounders (like the Markdown inflation effect), and verify non-dominated frontiers.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* The 5-Stage Agentic Process Interactive Diagram */}
        <section className="mx-auto max-w-7xl px-5 py-12 border-t border-border/60">
          <div className="mb-8 max-w-3xl">
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              // 02 — THE 5-STAGE WORKFLOW
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Anatomy of an Autonomous Empirical Discovery
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Click through the five autonomous pipeline stages below to understand how raw telemetry is transformed into peer-ready scientific literature.
            </p>
          </div>

          <AgentWorkflowDiagram />
        </section>

        {/* The Human-Agent Partnership */}
        <section className="mx-auto max-w-7xl px-5 py-12 border-t border-border/60">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <span className="font-mono text-xs text-primary tracking-widest uppercase">
                // 03 — SCIENTIFIC LEADERSHIP
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                The Principal Investigator Model
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                The agent does not replace human insight—it magnifies it by orders of magnitude. In our paradigm, the human researcher (led by Founder <strong>Ajmal Baba</strong>) functions as the <strong>Principal Investigator</strong>: formulating strategic scientific inquiries, framing domain boundaries, setting ethical guardrails, and guiding interpretation.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                Meanwhile, the Zannix AI Agent acts as an indefatigable quantitative research laboratory: writing analytical SQL queries, executing mathematical formulations, computing statistical checks, synthesizing related academic literature, and typesetting camera-ready preprints.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Button variant="glass" asChild>
                  <Link to="/about">
                    Learn About The Institute Ethos <ArrowRight className="ml-1.5 size-3.5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 md:p-8 space-y-6">
              <h4 className="font-display text-lg font-semibold text-foreground border-b border-border/60 pb-3">
                Agentic Research Metrics Achieved to Date
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {instituteStats.map((st) => (
                  <div key={st.label} className="rounded-xl border border-border/70 bg-background/50 p-4">
                    <p className="font-display text-2xl md:text-3xl font-bold text-primary">
                      {st.value}
                    </p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {st.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="mx-auto max-w-7xl px-5 pt-8">
          <div className="glass rounded-3xl p-8 md:p-12 text-center space-y-6 border-primary/30 bg-primary/5">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Explore Our Published Preprints
            </h2>
            <p className="mx-auto max-w-2xl text-sm md:text-base text-muted-foreground">
              Every paper below was formulated, verified, and authored using this exact agentic scientific process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="glow" size="lg" asChild>
                <Link to="/research">
                  Browse Research Catalog <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/observatory">
                  Open Interactive Observatory
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter />
    </div>
  );
}
