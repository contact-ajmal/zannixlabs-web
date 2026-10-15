import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Database, Mail, Microscope, Repeat, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlobalNav } from "@/components/zaanix/GlobalNav";
import { GlobalFooter } from "@/components/zaanix/GlobalFooter";
import { InquiryDialog } from "@/components/zaanix/InquiryDialog";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ZannixLabs — Applied AI Research Lab & Platform" },
      {
        name: "description",
        content:
          "ZannixLabs is an applied AI research lab and platform founded by Ajmal Baba (Founder & AI Agent Assistant Who Guides the Agents) to conduct high-velocity empirical research across complex industries using autonomous AI agent workflows.",
      },
    ],
  }),
  component: AboutPage,
});

const principles = [
  {
    icon: Repeat,
    title: "100% Empirical Reproducibility",
    description:
      "Every paper published by ZannixLabs is backed by deterministic DuckDB lakehouse schemas, reproducible SQL/Python code, and public interactive observatories.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Commercial or Sponsor Bias",
    description:
      "We operate with complete institutional independence. We accept no paid product endorsements or sponsor-mandated conclusions—the data speaks without filters.",
  },
  {
    icon: Microscope,
    title: "Strict Mathematical & Statistical Rigor",
    description:
      "No hand-waving assertions. Hypotheses are formalized in LaTeX, tested via Welch two-sample t-tests, and cross-examined for multiple-testing confounders.",
  },
  {
    icon: Database,
    title: "Open Telemetry & Artifact Sharing",
    description:
      "We publish full schema definitions, BibTeX citations, camera-ready PDFs, and LaTeX source archives to empower the global open-science community.",
  },
];

const researchDomains = [
  { title: "LLM Infrastructure & Gateway Economics", status: "Active Preprints Released", count: "646.2T Tokens" },
  { title: "Crowdsourced LLM Evaluation & Leaderboard Confounders", status: "Active Preprints Released", count: "33,000 Battles" },
  { title: "Aviation Terminal Airspace & Trajectory Tortuosity", status: "Active Preprints Released", count: "458,465 Flights" },
  { title: "Computational Biology & Healthcare Intelligence", status: "Pipeline Development", count: "Upcoming 2026" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#202124] font-sans">
      <GlobalNav />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16 space-y-6">
          <div className="max-w-4xl space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#dadce0] bg-[#f8f9fa] px-3.5 py-1 text-xs font-medium text-[#1a73e8] font-sans">
                <Sparkles className="size-3" /> About Lab
              </span>
              <span className="font-sans text-xs text-[#5f6368]">
                Applied Research &amp; Autonomous Platform
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#202124] leading-[1.08]">
              Research at the Speed of <span className="text-[#1a73e8]">Agent Intelligence.</span>
            </h1>

            <p className="text-base md:text-lg text-[#5f6368] font-sans leading-relaxed">
              ZannixLabs was founded on a singular conviction: that the bottlenecks of traditional scientific discovery—months-long drafting, manual data wrangling, and the replication crisis—can be solved by combining high-capacity AI intelligence with automated telemetry lakehouses.
            </p>
          </div>
        </section>

        {/* Founder Profile Card */}
        <section className="mx-auto max-w-7xl px-6 py-8">
          <div className="rounded-2xl border border-[#e1e6ec] bg-white p-8 md:p-12 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 border-b border-[#e1e6ec] pb-8">
              <div className="grid size-20 place-items-center rounded-2xl bg-[#1a73e8] text-white font-display text-2xl font-normal shadow-xs shrink-0">
                AB
              </div>
              <div className="space-y-1">
                <span className="font-sans text-xs text-[#1a73e8] font-medium uppercase tracking-wider">
                  FOUNDER &amp; AI AGENT ASSISTANT WHO GUIDES THE AGENTS
                </span>
                <h2 className="font-display text-2xl md:text-4xl font-normal tracking-tight text-[#202124]">
                  Ajmal Baba
                </h2>
                <p className="font-sans text-xs text-[#5f6368]">
                  Founder &amp; AI Agent Assistant Who Guides the Agents • Strategic Inquiry &amp; Human-in-the-Loop Verification
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 text-sm text-[#5f6368] font-sans leading-relaxed pt-2">
              <p>
                Ajmal Baba established ZannixLabs as an applied AI research lab and platform, serving as <strong>Founder and AI agent Assistant Who guides the Agents</strong>. In this capacity, he formulates core research hypotheses, defines domain boundaries, provides critical human oversight, and guides autonomous AI research agents through iterative data exploration and empirical synthesis.
              </p>
              <p>
                From authoring and guiding preprints on global LLM gateway economics, NHS healthcare waiting times, and crowdsourced leaderboard confounders to decoding aviation terminal airspace tortuosity, Ajmal guides the agents across the inquiry roadmap and ensures mathematical integrity across every study.
              </p>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="mx-auto max-w-7xl px-6 py-12 border-t border-[#e1e6ec]">
          <div className="mb-10 max-w-2xl">
            <span className="font-sans text-xs text-[#1a73e8] font-semibold tracking-wider uppercase">
              // SCIENTIFIC ETHOS
            </span>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-normal tracking-tight text-[#202124]">
              Our Core Operating Principles
            </h2>
            <p className="mt-2 text-base text-[#5f6368] font-sans">
              Guiding how ZannixLabs conducts, reviews, and releases independent scientific preprints.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="rounded-xl border border-[#e1e6ec] bg-white p-6 md:p-8 shadow-xs space-y-4 hover:border-[#1a73e8]/40 transition-all">
                  <div className="grid size-12 place-items-center rounded-xl bg-[#e8f0fe] text-[#1a73e8] border border-[#d2e3fc]">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-display text-xl font-normal text-[#202124]">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#5f6368] font-sans">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Research Domains Portfolio */}
        <section className="mx-auto max-w-7xl px-6 py-12 border-t border-[#e1e6ec]">
          <div className="mb-8 max-w-2xl">
            <span className="font-sans text-xs text-[#1a73e8] font-semibold tracking-wider uppercase">
              // CROSS-INDUSTRY SCOPE
            </span>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-normal tracking-tight text-[#202124]">
              Research Domains in Scope
            </h2>
            <p className="mt-2 text-base text-[#5f6368] font-sans">
              We apply our agentic pipeline wherever continuous telemetry creates complex, non-linear empirical challenges.
            </p>
          </div>

          <div className="space-y-3">
            {researchDomains.map((d) => (
              <div
                key={d.title}
                className="rounded-xl border border-[#e1e6ec] bg-white p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#1a73e8]/40 transition-all"
              >
                <div>
                  <h4 className="font-display text-base font-normal text-[#202124]">
                    {d.title}
                  </h4>
                  <p className="font-sans text-xs text-[#5f6368] mt-0.5">
                    Analyzed Scale: <span className="text-[#1a73e8] font-semibold">{d.count}</span>
                  </p>
                </div>
                <span className="rounded-full border border-[#d2e3fc] bg-[#e8f0fe] px-3.5 py-1 font-sans text-xs text-[#1967d2] font-medium shrink-0 self-start sm:self-auto">
                  {d.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact & Academic Inquiries */}
        <section className="mx-auto max-w-7xl px-6 pt-8">
          <div className="rounded-2xl border border-[#d2e3fc] bg-[#f8fafd] p-8 md:p-12 text-center shadow-xs space-y-6">
            <Mail className="mx-auto size-10 text-[#1a73e8]" />
            <h2 className="font-display text-3xl md:text-5xl font-normal tracking-tight text-[#202124]">
              Collaborate with ZannixLabs
            </h2>
            <p className="mx-auto max-w-2xl text-base text-[#5f6368] font-sans">
              Are you an academic lab, university department, or enterprise research team with large-scale telemetry datasets? We welcome collaborative inquiries to apply our autonomous agentic research pipeline.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <InquiryDialog>
                <Button
                  size="lg"
                  className="rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white px-7 h-12 text-sm font-medium shadow-xs"
                >
                  Submit Academic Inquiry <Sparkles className="ml-2 size-4" />
                </Button>
              </InquiryDialog>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-[#dadce0] bg-white text-[#1a73e8] hover:bg-[#f1f3f4] px-6 h-12 text-sm font-medium"
                asChild
              >
                <Link to="/research">
                  Inspect Our Research Catalog <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="rounded-full text-[#5f6368] hover:text-[#202124] px-6 h-12 text-sm font-medium"
                asChild
              >
                <Link to="/paradigm">
                  Explore the Agentic Paradigm
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
