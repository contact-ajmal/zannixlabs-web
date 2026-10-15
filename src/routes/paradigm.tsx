import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, CheckCircle2, Cpu, Database, Flame, Layers, Network, Rocket, ShieldCheck, Sigma, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlobalNav } from "@/components/zaanix/GlobalNav";
import { GlobalFooter } from "@/components/zaanix/GlobalFooter";
import { AgentWorkflowDiagram } from "@/components/zaanix/AgentWorkflowDiagram";
import { AgentCollectiveDirectory } from "@/components/zaanix/AgentCollectiveDirectory";
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
    <div className="min-h-screen bg-white text-[#202124] font-sans">
      <GlobalNav />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-5 py-12 md:py-16">
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#dadce0] bg-[#f8f9fa] px-3.5 py-1 text-xs font-medium text-[#1a73e8] font-sans">
                <Sparkles className="size-3" /> Paradigm Manifesto
              </span>
              <span className="font-sans text-xs text-[#5f6368]">
                Autonomous Scientific Synthesis
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#202124] leading-[1.08]">
              Empirical Science at the Velocity of <span className="text-[#1a73e8]">AI Intelligence.</span>
            </h1>

            <p className="text-base md:text-lg text-[#5f6368] font-sans leading-relaxed">
              Traditional scientific discovery is choked by human bandwidth constraints, months-long peer review latency, and manual data pipelines. At ZannixLabs, we pioneer an <strong>Autonomous AI Agentic Research Process</strong> that transforms continuous telemetry streams into mathematically formal preprints, empirical proofs, and reproducible artifacts in days—not quarters.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                className="rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white px-6 h-11 text-xs font-medium shadow-xs"
                asChild
              >
                <Link to="/research">
                  <BookOpen className="mr-2 size-4" />
                  Inspect Published Preprints
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-[#dadce0] bg-white text-[#1a73e8] hover:bg-[#f1f3f4] px-6 h-11 text-xs font-medium"
                asChild
              >
                <Link to="/observatory">
                  Explore Research Telemetry
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Traditional vs Agentic Comparison Grid */}
        <section className="mx-auto max-w-7xl px-5 py-12 border-t border-[#e1e6ec]">
          <div className="mb-10 max-w-2xl">
            <span className="font-sans text-xs text-[#1a73e8] font-semibold tracking-wider uppercase">
              // 01 — THE BOTTLENECK VS. THE SOLUTION
            </span>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-normal tracking-tight text-[#202124]">
              Why the Legacy Scientific Method Needs an Agentic Leap
            </h2>
            <p className="mt-2 text-base text-[#5f6368] font-sans">
              A side-by-side comparison between manual research practices and ZannixLabs' autonomous agentic workflow.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* The Legacy Bottleneck */}
            <div className="rounded-2xl p-6 md:p-8 border border-red-200 bg-red-50/40 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-red-700 font-sans text-xs font-semibold">
                <Flame className="size-4 text-red-600" />
                <span>THE LEGACY RESEARCH BOTTLENECK</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-normal text-[#202124]">
                Manual, Fragile &amp; Chronically Slow
              </h3>
              <ul className="space-y-3 text-sm text-[#3c4043] font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold font-mono">✕</span>
                  <span><strong>Human Analysis Bandwidth:</strong> Scientists are limited to sampling tiny slices of data (hundreds or thousands of points) rather than analyzing trillions of real-time rows.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold font-mono">✕</span>
                  <span><strong>12 to 18 Month Publishing Lag:</strong> Empirical findings are obsolete by the time journals finish review cycles, especially in rapidly evolving fields like AI.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold font-mono">✕</span>
                  <span><strong>The Replication Crisis:</strong> Over 70% of published academic papers fail empirical reproduction due to unreleased code, hidden hyperparameters, or lost datasets.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold font-mono">✕</span>
                  <span><strong>Confirmation &amp; Sponsor Bias:</strong> Institutional agendas and selective publication bias steer research towards expected hypotheses.</span>
                </li>
              </ul>
            </div>

            {/* The ZannixLabs Paradigm */}
            <div className="rounded-2xl p-6 md:p-8 border border-[#d2e3fc] bg-[#f8fafd] shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-[#1967d2] font-sans text-xs font-semibold">
                <Sparkles className="size-4 text-[#1a73e8]" />
                <span>THE ZANNIXLABS AGENTIC PARADIGM</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-normal text-[#202124]">
                High-Velocity, Continuous &amp; 100% Reproducible
              </h3>
              <ul className="space-y-3 text-sm text-[#3c4043] font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-[#1a73e8] font-bold font-mono">✓</span>
                  <span><strong>Exabyte Lakehouse Telemetry:</strong> Autonomous ingestion of full-scale populations (646T tokens, 458K flight trajectories, 278K deliveries) with zero sampling bias.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1a73e8] font-bold font-mono">✓</span>
                  <span><strong>Machine-Speed Discovery:</strong> Discovery, statistical verification (Welch t-tests, Pareto frontiers), and camera-ready LaTeX compiled within hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1a73e8] font-bold font-mono">✓</span>
                  <span><strong>Guaranteed Reproducibility:</strong> Every preprint ships with deterministic DuckDB schemas, reproducible code, and open interactive observatories.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1a73e8] font-bold font-mono">✓</span>
                  <span><strong>Autonomous Rigor:</strong> Machine agents test every permutation, identify hidden confounders (like the Markdown inflation effect), and verify non-dominated frontiers.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* The 5-Stage Agentic Process Interactive Diagram */}
        <section className="mx-auto max-w-7xl px-5 py-12 border-t border-[#e1e6ec]">
          <div className="mb-8 max-w-3xl">
            <span className="font-sans text-xs text-[#1a73e8] font-semibold tracking-wider uppercase">
              // 02 — THE 5-STAGE WORKFLOW
            </span>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-normal tracking-tight text-[#202124]">
              Anatomy of an Autonomous Empirical Discovery
            </h2>
            <p className="mt-2 text-base text-[#5f6368] font-sans">
              Click through the five autonomous pipeline stages below to understand how raw telemetry is transformed into peer-ready scientific literature.
            </p>
          </div>

          <AgentWorkflowDiagram />
        </section>

        {/* Section 03: The 14-Agent Specialist Research Collective & Modular Skills */}
        <section className="mx-auto max-w-7xl px-5 py-16 border-t border-[#e1e6ec]">
          <div className="mb-10 max-w-3xl space-y-3">
            <span className="font-sans text-xs text-[#1a73e8] font-semibold tracking-wider uppercase">
              // 03 — SPECIALIST RESEARCH COLLECTIVE &amp; SKILLSETS
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-normal tracking-tight text-[#202124]">
              The 14-Agent Research Mesh &amp; 10 Modular Skills
            </h2>
            <p className="text-base text-[#5f6368] font-sans leading-relaxed">
              Rather than relying on a single monolithic model, ZannixLabs decomposes empirical science into <strong>14 dedicated specialist sub-agents</strong> and <strong>10 modular research skills</strong>. Each specialist is equipped with domain-specific MCP toolsets—from DuckDB spatial clustering and DoWhy causal DAGs to SymPy symbolic proof checking and ReportLab academic typesetting.
            </p>
          </div>

          <AgentCollectiveDirectory />
        </section>

        {/* The Human-Agent Partnership */}
        <section className="mx-auto max-w-7xl px-5 py-12 border-t border-[#e1e6ec]">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <span className="font-sans text-xs text-[#1a73e8] font-semibold tracking-wider uppercase">
                // 04 — SCIENTIFIC LEADERSHIP
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-normal tracking-tight text-[#202124]">
                The Principal Investigator Model
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-[#5f6368] font-sans">
                The agent does not replace human insight—it magnifies it by orders of magnitude. In our paradigm, <strong>Ajmal Baba</strong> (Founder &amp; AI Agent Assistant Who Guides the Agents) functions as the strategic guide: formulating scientific inquiries, framing domain boundaries, setting ethical guardrails, and guiding the autonomous agents.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-[#5f6368] font-sans">
                Meanwhile, the Zannix Data Agent acts as an indefatigable quantitative research laboratory: writing analytical SQL queries, executing mathematical formulations, computing statistical checks, synthesizing related academic literature, and typesetting camera-ready preprints.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  className="rounded-full border-[#dadce0] bg-white text-[#1a73e8] hover:bg-[#f1f3f4] text-xs font-medium px-5 h-10"
                  asChild
                >
                  <Link to="/about">
                    Learn About The Institute Ethos <ArrowRight className="ml-1.5 size-3.5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-[#e1e6ec] bg-white p-6 md:p-8 shadow-xs space-y-6">
              <h4 className="font-display text-lg font-normal text-[#202124] border-b border-[#e1e6ec] pb-3">
                Agentic Research Metrics Achieved to Date
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {instituteStats.map((st) => (
                  <div key={st.label} className="rounded-xl border border-[#e1e6ec] bg-[#f8f9fa] p-4">
                    <p className="font-display text-2xl md:text-3xl font-normal text-[#1a73e8]">
                      {st.value}
                    </p>
                    <p className="mt-1 font-sans text-xs text-[#5f6368]">
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
          <div className="rounded-3xl p-8 md:p-12 text-center space-y-6 border border-[#d2e3fc] bg-[#f8fafd] shadow-xs">
            <h2 className="font-display text-3xl md:text-5xl font-normal tracking-tight text-[#202124]">
              Explore Our Published Preprints
            </h2>
            <p className="mx-auto max-w-2xl text-base text-[#5f6368] font-sans">
              Every paper below was formulated, verified, and authored using this exact agentic scientific process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white px-7 h-12 text-sm font-medium shadow-xs"
                asChild
              >
                <Link to="/research">
                  Browse Research Catalog <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-[#dadce0] bg-white text-[#1a73e8] hover:bg-[#f1f3f4] px-6 h-12 text-sm font-medium"
                asChild
              >
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
