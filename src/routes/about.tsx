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
      { title: "About ZannixLabs — The Independent AI Research Lab" },
      {
        name: "description",
        content:
          "ZannixLabs is an independent research institute founded by Ajmal Baba to conduct high-velocity empirical science across complex industries using autonomous AI agent pipelines.",
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
    <div className="min-h-screen bg-slate-50/50 text-slate-900">
      <GlobalNav />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-5 py-12 md:py-16 space-y-6">
          <div className="max-w-4xl space-y-5">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-blue-200 bg-blue-50 text-blue-800 font-mono text-xs">
                INSTITUTE PROFILE
              </Badge>
              <span className="font-mono text-xs text-slate-500">
                Independent Autonomous Research
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08]">
              Research at the Speed of <span className="text-blue-700">Agent Intelligence.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              ZannixLabs was founded on a singular conviction: that the bottlenecks of traditional scientific discovery—months-long drafting, manual data wrangling, and the replication crisis—can be solved by combining high-capacity AI intelligence with automated telemetry lakehouses.
            </p>
          </div>
        </section>

        {/* Founder Profile Card */}
        <section className="mx-auto max-w-7xl px-5 py-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 border-b border-slate-200 pb-8">
              <div className="grid size-20 place-items-center rounded-2xl bg-blue-700 text-white font-display text-2xl font-bold shadow-xs shrink-0">
                AB
              </div>
              <div className="space-y-1">
                <span className="font-mono text-xs text-blue-800 font-semibold uppercase tracking-wider">
                  FOUNDER &amp; CHIEF SCIENTIST
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
                  Ajmal Baba
                </h2>
                <p className="font-mono text-xs text-slate-500">
                  Data &amp; AI Architect • Independent Quantitative Researcher
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 text-sm text-slate-600 leading-relaxed pt-2">
              <p>
                Ajmal Baba established ZannixLabs as an independent empirical research institute dedicated to proving that autonomous AI agents, guided by human strategic inquiry, can conduct rigorous scientific discovery faster, deeper, and more objectively than traditional institutional setups.
              </p>
              <p>
                From authoring camera-ready preprints on global LLM gateway economics, NHS healthcare waiting times, and crowdsourced leaderboard confounders to decoding aviation terminal airspace tortuosity, Ajmal directs the institute&apos;s research agendas and verifies mathematical integrity across every study.
              </p>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="mx-auto max-w-7xl px-5 py-12 border-t border-slate-200">
          <div className="mb-10 max-w-2xl">
            <span className="font-mono text-xs text-blue-800 font-semibold tracking-wider uppercase">
              // SCIENTIFIC ETHOS
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Our Core Operating Principles
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Guiding how ZannixLabs conducts, reviews, and releases independent scientific preprints.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-xs space-y-4 hover:border-blue-300 transition-all">
                  <div className="grid size-12 place-items-center rounded-xl bg-blue-50 text-blue-700 border border-blue-200">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Research Domains Portfolio */}
        <section className="mx-auto max-w-7xl px-5 py-12 border-t border-slate-200">
          <div className="mb-8 max-w-2xl">
            <span className="font-mono text-xs text-blue-800 font-semibold tracking-wider uppercase">
              // CROSS-INDUSTRY SCOPE
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Research Domains in Scope
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              We apply our agentic pipeline wherever continuous telemetry creates complex, non-linear empirical challenges.
            </p>
          </div>

          <div className="space-y-3">
            {researchDomains.map((d) => (
              <div
                key={d.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-blue-300 transition-all"
              >
                <div>
                  <h4 className="font-display text-base font-semibold text-slate-900">
                    {d.title}
                  </h4>
                  <p className="font-mono text-xs text-slate-500 mt-0.5">
                    Analyzed Scale: <span className="text-blue-700 font-semibold">{d.count}</span>
                  </p>
                </div>
                <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 font-mono text-xs text-blue-800 font-medium shrink-0 self-start sm:self-auto">
                  {d.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact & Academic Inquiries */}
        <section className="mx-auto max-w-7xl px-5 pt-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12 text-center shadow-xs space-y-6">
            <Mail className="mx-auto size-10 text-blue-700" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
              Collaborate with ZannixLabs
            </h2>
            <p className="mx-auto max-w-2xl text-sm md:text-base text-slate-600">
              Are you an academic lab, university department, or enterprise research team with large-scale telemetry datasets? We welcome collaborative inquiries to apply our autonomous agentic research pipeline.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <InquiryDialog>
                <Button variant="glow" size="lg">
                  Submit Academic Inquiry <Sparkles className="ml-2 size-4" />
                </Button>
              </InquiryDialog>
              <Button variant="glass" size="lg" asChild>
                <Link to="/research">
                  Inspect Our Research Catalog <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
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
