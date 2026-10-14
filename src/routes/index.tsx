import { lazy, Suspense } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ClientOnly } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Database, Sparkles, ShieldCheck, Repeat, Microscope, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Toaster } from "@/components/ui/sonner";
import { GlobalNav } from "@/components/zaanix/GlobalNav";
import { GlobalFooter } from "@/components/zaanix/GlobalFooter";
import { PaperCard } from "@/components/zaanix/PaperCard";
import { InteractiveObservatoryStudio } from "@/components/zaanix/InteractiveObservatoryStudio";
import { AgentWorkflowDiagram } from "@/components/zaanix/AgentWorkflowDiagram";
import { papers, instituteStats } from "@/components/zaanix/researchData";

const HeroCanvas = lazy(() => import("@/components/zaanix/HeroCanvas"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZannixLabs — Autonomous Empirical AI & Data Research Institute" },
      {
        name: "description",
        content:
          "Independent empirical science institute pioneering the AI Agentic Research Process across LLM Economics, Evaluation Science, Aerospace, and Sports Biomechanics. Founded by Ajmal Baba.",
      },
      { property: "og:title", content: "ZannixLabs — Autonomous Empirical Research" },
      {
        property: "og:description",
        content:
          "Empirical science at the velocity of AI intelligence. Transforming continuous telemetry into peer-ready preprints and mathematical proofs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const tickerMetrics = [
  "646.2T+ Tokens Synthesized",
  "33,000 Blind Battles Deconstructed",
  "458,465 ADS-B Vectors Tracked",
  "278,205 Deliveries Analyzed",
  "15 Empirical Hypotheses Proven",
  "100% Autonomous Lakehouse Telemetry",
  "4 Camera-Ready Preprints",
];

function HomePage() {
  return (
    <div className="dark min-h-screen bg-background bg-mesh text-foreground">
      <GlobalNav />

      {/* Hero Section */}
      <section id="top" className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden pt-16">
        {/* Background 3D Canvas */}
        <div className="absolute inset-0 opacity-90 md:left-1/3">
          <ClientOnly fallback={null}>
            <Suspense fallback={null}>
              <HeroCanvas />
            </Suspense>
          </ClientOnly>
        </div>

        {/* Ambient Gradient Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/75 to-transparent" />

        {/* Hero Content */}
        <div className="relative mx-auto w-full max-w-7xl px-5 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-6"
          >
            <div className="flex items-center gap-2">
              <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs text-primary">
                <Sparkles className="size-3 text-primary" />
                [ INDEPENDENT EMPIRICAL SCIENCE INSTITUTE ]
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.03] tracking-tight">
              Autonomous Empirical Science. <span className="text-gradient">Zero Compromise.</span>
            </h1>

            <p className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              ZannixLabs pioneers a new <strong>AI Agentic Research Paradigm</strong>—transforming continuous real-world telemetry lakehouses into peer-ready preprints, mathematical proofs, and open-science observatories at machine speed.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="glow" size="lg" asChild>
                <Link to="/research">
                  Browse Research Catalog <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/paradigm">
                  The Agentic Paradigm
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Animated Marquee Metric Strip */}
        <div className="relative border-y border-border bg-background/60 backdrop-blur-md">
          <div className="flex w-max animate-marquee gap-14 py-3.5 font-mono text-xs md:text-sm">
            {[...tickerMetrics, ...tickerMetrics, ...tickerMetrics].map((m, i) => (
              <span key={i} className="flex items-center gap-2.5 whitespace-nowrap text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary shadow-glow" />
                <span className="text-foreground font-semibold">{m.split(" ")[0]}</span>{" "}
                {m.split(" ").slice(1).join(" ")}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: The Agentic Paradigm Overview */}
      <section className="mx-auto max-w-7xl px-5 py-24 border-b border-border/60">
        <div className="mb-12 max-w-3xl space-y-3">
          <p className="font-mono text-xs tracking-widest text-primary uppercase">
            // 01 — THE PIONEERING PROCESS
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            How Autonomous Agents Conduct Science
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            By shifting from manual data wrangling to automated agentic intelligence, ZannixLabs formalizes empirical hypotheses, computes statistical proofs, and compiles camera-ready preprints in days rather than quarters.
          </p>
        </div>

        <AgentWorkflowDiagram />

        <div className="mt-8 text-center">
          <Button variant="glass" size="lg" asChild>
            <Link to="/paradigm">
              Read the Full Paradigm Manifesto &amp; Methodology <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Section 2: Flagship Research Preprints Showcase */}
      <section className="mx-auto max-w-7xl px-5 py-24 border-b border-border/60">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <p className="font-mono text-xs tracking-widest text-primary uppercase">
              // 02 — FLAGSHIP RESEARCH
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Peer-Ready Preprints
            </h2>
            <p className="text-base text-muted-foreground">
              Four camera-ready studies spanning AI Economics, Leaderboard Biases, Airspace Telemetry, and Sports Biomechanics.
            </p>
          </div>
          <Button variant="glow" asChild>
            <Link to="/research">
              View All in Catalog <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {papers.map((paper) => (
            <PaperCard key={paper.id} paper={paper} />
          ))}
        </div>
      </section>

      {/* Section 3: Live Telemetry Observatory */}
      <section className="mx-auto max-w-7xl px-5 py-24 border-b border-border/60">
        <div className="mb-12 max-w-3xl space-y-3">
          <p className="font-mono text-xs tracking-widest text-primary uppercase">
            // 03 — LAB OBSERVATORY
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Interactive Empirical Telemetry
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Science must be verifiable. Explore interactive visualizations generated directly from our lakehouse telemetry pipelines.
          </p>
        </div>

        <InteractiveObservatoryStudio />

        <div className="mt-8 text-center">
          <Button variant="glass" size="lg" asChild>
            <Link to="/observatory">
              Open Dedicated Full-Screen Observatory <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Section 4: The Institute Ethos & Founder */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <span className="font-mono text-xs tracking-widest text-primary uppercase">
              // 04 — THE INDEPENDENT LAB
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Autonomous Science for the Public Good
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              ZannixLabs was founded by <strong>Ajmal Baba</strong> with a clear mandate: replace slow, siloed, sponsor-driven research with high-throughput, agent-driven scientific synthesis.
            </p>

            <div className="glass rounded-2xl p-6 flex items-center gap-5 border-primary/30">
              <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-gradient-accent text-primary-foreground font-display text-xl font-bold shadow-glow-violet">
                AB
              </div>
              <div>
                <p className="font-display text-lg font-bold text-foreground">Ajmal Baba</p>
                <p className="font-mono text-xs text-primary">Founder &amp; Chief Scientist • Independent Quantitative Researcher</p>
                <p className="text-xs text-muted-foreground mt-1">Leading autonomous agentic empirical research across AI, aerospace, and quantitative dynamics.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="glow" asChild>
                <Link to="/about">
                  Learn More About ZannixLabs <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass rounded-2xl p-6 space-y-3">
              <Repeat className="size-6 text-primary" />
              <h4 className="font-display font-semibold text-foreground">100% Reproducibility</h4>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Deterministic DuckDB schemas, executable SQL notebooks, and public telemetry.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 space-y-3">
              <ShieldCheck className="size-6 text-primary" />
              <h4 className="font-display font-semibold text-foreground">Zero Sponsor Bias</h4>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Complete institutional independence. No paid vendor endorsements.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 space-y-3">
              <Microscope className="size-6 text-primary" />
              <h4 className="font-display font-semibold text-foreground">Empirical Rigor</h4>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Formal LaTeX math, Welch two-sample t-tests, and Pareto frontiers.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 space-y-3">
              <Database className="size-6 text-primary" />
              <h4 className="font-display font-semibold text-foreground">Continuous Ingestion</h4>
              <p className="text-xs leading-relaxed text-muted-foreground">
                High-frequency data streaming directly into analytical lakehouse stores.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GlobalFooter />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
