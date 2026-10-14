import { createFileRoute, Link } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZannixLabs — Autonomous Empirical AI & Data Research Institute" },
      {
        name: "description",
        content:
          "Independent empirical science institute pioneering the AI Agentic Research Process across LLM Economics, Evaluation Science, and Aerospace Telemetry. Founded by Ajmal Baba.",
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
  "17.1M+ Cancer Referrals Evaluated",
  "1.19M+ Agent Requests Tracked",
  "646.2T+ Tokens Synthesized",
  "100.0% Zero-Latency Paging Feasibility",
  "33,000 Blind Battles Deconstructed",
  "458,465 ADS-B Vectors Tracked",
  "185 Acute NHS Trusts Mapped",
  "1,091 Model Endpoints Tested",
  "19 Empirical Hypotheses Proven",
  "100% Autonomous Lakehouse Telemetry",
  "5 Camera-Ready Preprints",
];

function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#202124]">
      <GlobalNav />

      {/* Hero Section - Google Research style */}
      <section id="top" className="relative border-b border-[#e1e6ec] bg-white pt-28 pb-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Mission & Core Actions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 lg:col-span-7"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#dadce0] bg-[#f8f9fa] px-3.5 py-1 text-xs font-medium text-[#3c4043] font-sans">
                  <span className="size-2 rounded-full bg-[#1a73e8]" />
                  Independent Empirical Science Institute • Est. 2026
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.06] tracking-tight text-[#202124]">
                Empirical Research, <span className="text-[#1a73e8]">to reality.</span>
              </h1>

              <p className="max-w-2xl text-lg sm:text-xl text-[#5f6368] font-sans font-normal leading-relaxed">
                ZannixLabs pioneers an autonomous agentic research paradigm—transforming massive real-world telemetry lakehouses into peer-ready preprints, mathematical proofs, and open-science observatories.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  size="lg"
                  className="rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white px-7 h-12 text-sm font-medium shadow-xs"
                  asChild
                >
                  <Link to="/research">
                    Explore Research <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-[#dadce0] bg-white text-[#1a73e8] hover:bg-[#f1f3f4] px-6 h-12 text-sm font-medium"
                  asChild
                >
                  <Link to="/paradigm">
                    Our Methodology
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators - Google style pill chips */}
              <div className="flex flex-wrap items-center gap-4 pt-4 text-xs font-sans text-[#5f6368] border-t border-[#e1e6ec]">
                <span className="flex items-center gap-1.5 rounded-full bg-[#f8f9fa] border border-[#e8eaed] px-3 py-1 text-[#3c4043]">
                  <ShieldCheck className="size-3.5 text-[#1e8e3e]" /> 100% Peer-Reproducible
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-[#f8f9fa] border border-[#e8eaed] px-3 py-1 text-[#3c4043]">
                  <Database className="size-3.5 text-[#1a73e8]" /> Open Lakehouse Telemetry
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-[#f8f9fa] border border-[#e8eaed] px-3 py-1 text-[#3c4043]">
                  <Repeat className="size-3.5 text-[#ea4335]" /> Zero Sponsored Bias
                </span>
              </div>
            </motion.div>

            {/* Right Column: Institutional Research Telemetry Matrix */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl border border-[#e1e6ec] bg-[#f8f9fa] p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-[#e1e6ec] pb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#1e8e3e]" />
                    <span className="font-sans text-xs font-semibold text-[#202124] tracking-wider uppercase">
                      Active Research Repository
                    </span>
                  </div>
                  <span className="rounded-full border border-[#dadce0] bg-white px-3 py-0.5 font-sans text-xs text-[#5f6368]">
                    4 Camera-Ready Papers
                  </span>
                </div>

                {/* Preprints Matrix Cards */}
                <div className="space-y-2.5">
                  {papers.map((p) => (
                    <Link
                      key={p.id}
                      to="/research/$paperId"
                      params={{ paperId: p.slug }}
                      className="group block rounded-xl border border-[#e1e6ec] bg-white p-3.5 transition-all hover:border-[#1a73e8] hover:shadow-xs"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-sans text-[11px] font-medium text-[#1a73e8]">
                          {p.industry || p.category}
                        </span>
                        <span className="font-mono text-[10.5px] text-[#70757a]">
                          {p.arxivId}
                        </span>
                      </div>
                      <p className="font-display text-sm font-medium text-[#202124] group-hover:text-[#1a73e8] transition-colors line-clamp-1">
                        {p.plainTitle || p.title}
                      </p>
                      <p className="font-sans text-xs text-[#5f6368] mt-0.5 truncate">
                        {p.datasetMetrics.map(m => `${m.value} ${m.label}`).slice(0, 2).join(" • ")}
                      </p>
                    </Link>
                  ))}
                </div>

                <div className="rounded-xl border border-[#dadce0] bg-white p-3 flex items-center justify-between text-xs font-sans">
                  <span className="text-[#5f6368]">Analytical Foundation:</span>
                  <span className="text-[#1a73e8] font-medium">DuckDB • Apache Arrow • Welch t-Tests</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Institutional Metrics Grid - Google style subtle bar */}
        <div className="mt-14 border-t border-[#e1e6ec] bg-[#f8f9fa]">
          <div className="mx-auto max-w-7xl px-6 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-1">
                <p className="font-display text-2xl sm:text-3xl font-medium text-[#202124]">17.1M+</p>
                <p className="font-sans text-xs text-[#5f6368]">Cancer Referrals Mapped</p>
              </div>
              <div className="space-y-1">
                <p className="font-display text-2xl sm:text-3xl font-medium text-[#202124]">646.2T</p>
                <p className="font-sans text-xs text-[#5f6368]">Tokens Synthesized</p>
              </div>
              <div className="space-y-1">
                <p className="font-display text-2xl sm:text-3xl font-medium text-[#202124]">458,465</p>
                <p className="font-sans text-xs text-[#5f6368]">ADS-B State Vectors</p>
              </div>
              <div className="space-y-1">
                <p className="font-display text-2xl sm:text-3xl font-medium text-[#1e8e3e]">100%</p>
                <p className="font-sans text-xs text-[#5f6368]">Peer-Reproducible Lakehouse</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Read the latest research (Google Research flagship section) */}
      <section className="mx-auto max-w-7xl px-6 py-20 border-b border-[#e1e6ec]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <p className="font-sans text-xs font-medium uppercase tracking-wider text-[#1a73e8]">
              Publications
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-[#202124]">
              Read the latest
            </h2>
            <p className="text-base text-[#5f6368] font-sans">
              Camera-ready empirical studies spanning Healthcare Waiting Times, AI Gateway Economics, Leaderboard Biases, and Aerospace Airspace Telemetry.
            </p>
          </div>
          <Button
            variant="outline"
            className="rounded-full border-[#dadce0] bg-white text-[#1a73e8] hover:bg-[#f1f3f4] text-xs font-medium px-5 h-10"
            asChild
          >
            <Link to="/research">
              View all publications <ArrowRight className="ml-2 size-3.5" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {papers.map((paper) => (
            <PaperCard key={paper.id} paper={paper} />
          ))}
        </div>
      </section>

      {/* Section 2: Research Areas (Google Research Area Cards) */}
      <section className="mx-auto max-w-7xl px-6 py-20 border-b border-[#e1e6ec]">
        <div className="mb-12 max-w-2xl space-y-2">
          <p className="font-sans text-xs font-medium uppercase tracking-wider text-[#1a73e8]">
            Domains
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-[#202124]">
            Research areas
          </h2>
          <p className="text-base text-[#5f6368] font-sans">
            Our autonomous agents operate across critical frontier disciplines requiring empirical telemetry verification.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[#e1e6ec] bg-white p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <span className="inline-block rounded-full bg-[#e8f0fe] text-[#1967d2] px-3 py-1 font-sans text-xs font-medium">
                Healthcare Economics
              </span>
              <h3 className="font-display text-xl font-medium text-[#202124]">
                Clinical Trials & Oncology Systems
              </h3>
              <p className="text-sm text-[#5f6368] font-sans leading-relaxed">
                Empirical operational analysis of hospital pathways, clinical trial protocol delays, and oncological rule-out triage mechanisms.
              </p>
            </div>
            <Link to="/research" className="mt-6 inline-flex items-center text-xs font-medium text-[#1a73e8] hover:text-[#1557b0]">
              Explore Healthcare Papers <ArrowRight className="ml-1.5 size-3.5" />
            </Link>
          </div>

          <div className="rounded-2xl border border-[#e1e6ec] bg-white p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <span className="inline-block rounded-full bg-[#e8f0fe] text-[#1967d2] px-3 py-1 font-sans text-xs font-medium">
                Applied AI & Sciences
              </span>
              <h3 className="font-display text-xl font-medium text-[#202124]">
                LLM Economics & Evaluation Science
              </h3>
              <p className="text-sm text-[#5f6368] font-sans leading-relaxed">
                Multi-trillion-token telemetry deconstruction, super-linear reasoning agent cost escalation, and crowdsourced leaderboard confounders.
              </p>
            </div>
            <Link to="/research" className="mt-6 inline-flex items-center text-xs font-medium text-[#1a73e8] hover:text-[#1557b0]">
              Explore AI Economics <ArrowRight className="ml-1.5 size-3.5" />
            </Link>
          </div>

          <div className="rounded-2xl border border-[#e1e6ec] bg-white p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <span className="inline-block rounded-full bg-[#e8f0fe] text-[#1967d2] px-3 py-1 font-sans text-xs font-medium">
                Autonomous Systems
              </span>
              <h3 className="font-display text-xl font-medium text-[#202124]">
                Aerospace & Grid Telemetry
              </h3>
              <p className="text-sm text-[#5f6368] font-sans leading-relaxed">
                Real-time ADS-B airspace tortuosity, airport surface congestion, and renewable microgrid high-frequency frequency regulation.
              </p>
            </div>
            <Link to="/research" className="mt-6 inline-flex items-center text-xs font-medium text-[#1a73e8] hover:text-[#1557b0]">
              Explore Aerospace Papers <ArrowRight className="ml-1.5 size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: The Agentic Paradigm Overview */}
      <section className="mx-auto max-w-7xl px-6 py-20 border-b border-[#e1e6ec]">
        <div className="mb-12 max-w-3xl space-y-2">
          <p className="font-sans text-xs font-medium uppercase tracking-wider text-[#1a73e8]">
            Process
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-[#202124]">
            How autonomous agents conduct science
          </h2>
          <p className="text-base text-[#5f6368] font-sans leading-relaxed">
            By shifting from manual data wrangling to automated agentic intelligence, ZannixLabs formalizes empirical hypotheses, computes statistical proofs, and compiles camera-ready preprints in days rather than quarters.
          </p>
        </div>

        <AgentWorkflowDiagram />

        <div className="mt-10 text-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-[#dadce0] bg-white text-[#1a73e8] hover:bg-[#f1f3f4] text-sm font-medium px-6 h-11"
            asChild
          >
            <Link to="/paradigm">
              Read the Full Paradigm Methodology <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Section 4: Live Telemetry Observatory */}
      <section className="mx-auto max-w-7xl px-6 py-20 border-b border-[#e1e6ec]">
        <div className="mb-12 max-w-3xl space-y-2">
          <p className="font-sans text-xs font-medium uppercase tracking-wider text-[#1a73e8]">
            Interactive Telemetry
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-[#202124]">
            Lab observatory
          </h2>
          <p className="text-base text-[#5f6368] font-sans leading-relaxed">
            Science must be verifiable. Explore interactive visualizations generated directly from our analytical lakehouse telemetry pipelines.
          </p>
        </div>

        <InteractiveObservatoryStudio />

        <div className="mt-10 text-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-[#dadce0] bg-white text-[#1a73e8] hover:bg-[#f1f3f4] text-sm font-medium px-6 h-11"
            asChild
          >
            <Link to="/observatory">
              Open Dedicated Full-Screen Observatory <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Section 5: The Institute Ethos & Founder */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <span className="font-sans text-xs font-medium uppercase tracking-wider text-[#1a73e8]">
              About
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-[#202124]">
              Autonomous science for the public good
            </h2>
            <p className="text-base leading-relaxed text-[#5f6368] font-sans">
              ZannixLabs was founded by <strong>Ajmal Baba</strong> with a clear mandate: replace slow, siloed, sponsor-driven research with high-throughput, agent-driven scientific synthesis.
            </p>

            <div className="rounded-2xl border border-[#e1e6ec] bg-white p-6 shadow-xs flex items-center gap-5">
              <div className="grid size-16 shrink-0 place-items-center rounded-full bg-[#1a73e8] text-white font-display text-xl font-bold shadow-xs">
                AB
              </div>
              <div>
                <p className="font-display text-lg font-medium text-[#202124]">Ajmal Baba</p>
                <p className="font-sans text-xs text-[#1a73e8] font-medium">Founder &amp; Chief Scientist • Independent Quantitative Researcher</p>
                <p className="text-xs text-[#5f6368] mt-1 font-sans">Leading autonomous agentic empirical research across AI, aerospace, and quantitative dynamics.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                className="rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-medium px-5 h-10 shadow-xs"
                asChild
              >
                <Link to="/about">
                  Learn More About ZannixLabs <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-[#e1e6ec] bg-white p-6 shadow-xs space-y-3 hover:shadow-md transition-shadow">
              <Repeat className="size-6 text-[#1a73e8]" />
              <h4 className="font-display font-medium text-[#202124]">100% Reproducibility</h4>
              <p className="text-xs leading-relaxed text-[#5f6368] font-sans">
                Deterministic DuckDB schemas, executable SQL notebooks, and public telemetry.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e1e6ec] bg-white p-6 shadow-xs space-y-3 hover:shadow-md transition-shadow">
              <ShieldCheck className="size-6 text-[#1e8e3e]" />
              <h4 className="font-display font-medium text-[#202124]">Zero Sponsor Bias</h4>
              <p className="text-xs leading-relaxed text-[#5f6368] font-sans">
                Complete institutional independence. No paid vendor endorsements.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e1e6ec] bg-white p-6 shadow-xs space-y-3 hover:shadow-md transition-shadow">
              <Microscope className="size-6 text-[#1a73e8]" />
              <h4 className="font-display font-medium text-[#202124]">Empirical Rigor</h4>
              <p className="text-xs leading-relaxed text-[#5f6368] font-sans">
                Formal LaTeX math, Welch two-sample t-tests, and Pareto frontiers.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e1e6ec] bg-white p-6 shadow-xs space-y-3 hover:shadow-md transition-shadow">
              <Database className="size-6 text-[#1a73e8]" />
              <h4 className="font-display font-medium text-[#202124]">Continuous Ingestion</h4>
              <p className="text-xs leading-relaxed text-[#5f6368] font-sans">
                High-frequency data streaming directly into analytical lakehouse stores.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GlobalFooter />
      <Toaster theme="light" position="bottom-right" />
    </div>
  );
}


