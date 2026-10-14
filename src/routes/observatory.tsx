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
    <div className="min-h-screen bg-slate-50/50 text-slate-900 font-sans">
      <GlobalNav />

      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-5 py-12 md:py-16 space-y-5">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-blue-200 bg-blue-50 text-blue-700 font-mono text-xs">
              LIVE TELEMETRY STUDIO
            </Badge>
            <span className="font-mono text-xs text-slate-500">
              Empirical Lakehouse Explorers
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08]">
            Interactive Research <span className="text-gradient">Observatory.</span>
          </h1>

          <p className="max-w-3xl text-base md:text-lg text-slate-600 leading-relaxed">
            Science should be tactile and verifiable. Explore live interactive previews of the empirical datasets underpinning our research preprints. Manipulate parameters, inspect distributions, and evaluate non-linear regimes across three major research domains.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 pt-4">
            {instituteStats.map((s) => (
              <div key={s.label} className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-xs">
                <p className="font-display text-lg md:text-xl font-bold text-blue-700">{s.value}</p>
                <p className="font-mono text-[10px] text-slate-600 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Observatory Studio Section */}
        <section className="mx-auto max-w-7xl px-5 py-6">
          <InteractiveObservatoryStudio />
        </section>

        {/* Related Papers Quick Links */}
        <section className="mx-auto max-w-7xl px-5 pt-16 border-t border-slate-200">
          <div className="mb-8 max-w-2xl">
            <span className="font-mono text-xs text-blue-700 font-semibold tracking-widest uppercase">
              // VERIFY THE FORMAL PAPERS
            </span>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
              Deep-Dive into the Camera-Ready Preprints
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Every visualization above corresponds to an empirical research paper with formal proofs and LaTeX specifications.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <Link
              to="/research/$paperId"
              params={{ paperId: "agentpaging-zero-latency-kv" }}
              className="rounded-xl p-5 border border-blue-200 bg-blue-50/50 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-blue-700 font-semibold uppercase">01 • AI Systems Architecture</span>
                <h4 className="font-display text-sm font-semibold text-slate-900">AgentPaging &amp; ContextGC</h4>
                <p className="text-xs text-slate-600 line-clamp-2">12,002 sessions, 1.19M requests, 100% zero-latency paging, and 13.6x H100 density.</p>
              </div>
              <span className="mt-4 flex items-center gap-1 font-mono text-xs text-blue-700 font-medium">Read Paper <ArrowRight className="size-3" /></span>
            </Link>

            <Link
              to="/research/$paperId"
              params={{ paperId: "nhs-cancer-waiting-times" }}
              className="rounded-xl p-5 border border-slate-200 bg-white hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-blue-700 font-semibold uppercase">02 • Healthcare &amp; Oncology</span>
                <h4 className="font-display text-sm font-semibold text-slate-900">Triage vs. Treatment Decoupling &amp; Rule-Out Illusion</h4>
                <p className="text-xs text-slate-600 line-clamp-2">17.1M patient referrals, 185 acute trusts, 104k surgical breaches, and 24.7 pp triage deficit.</p>
              </div>
              <span className="mt-4 flex items-center gap-1 font-mono text-xs text-blue-700 font-medium">Read Paper <ArrowRight className="size-3" /></span>
            </Link>

            <Link
              to="/research/$paperId"
              params={{ paperId: "openrouter-llm-economics" }}
              className="rounded-xl p-5 border border-slate-200 bg-white hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-blue-700 font-semibold uppercase">02 • AI Economics</span>
                <h4 className="font-display text-sm font-semibold text-slate-900">Volume–Revenue Bifurcation &amp; Agent Costs</h4>
                <p className="text-xs text-slate-600 line-clamp-2">646.2T tokens, 1,091 model endpoints, and 31.9x multi-turn escalation.</p>
              </div>
              <span className="mt-4 flex items-center gap-1 font-mono text-xs text-blue-700 font-medium">Read Paper <ArrowRight className="size-3" /></span>
            </Link>

            <Link
              to="/research/$paperId"
              params={{ paperId: "lmsys-chatbot-arena-confounders" }}
              className="rounded-xl p-5 border border-slate-200 bg-white hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-blue-700 font-semibold uppercase">03 • Evaluation Science</span>
                <h4 className="font-display text-sm font-semibold text-slate-900">Beyond Elo: LMSYS Arena Confounders</h4>
                <p className="text-xs text-slate-600 line-clamp-2">Refusal tax, markdown inflation (+11.73 pp), and evaluator calibration.</p>
              </div>
              <span className="mt-4 flex items-center gap-1 font-mono text-xs text-blue-700 font-medium">Read Paper <ArrowRight className="size-3" /></span>
            </Link>

            <Link
              to="/research/$paperId"
              params={{ paperId: "opensky-terminal-airspace" }}
              className="rounded-xl p-5 border border-slate-200 bg-white hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-blue-700 font-semibold uppercase">04 • Aerospace Telemetry</span>
                <h4 className="font-display text-sm font-semibold text-slate-900">Airborne Vectoring vs Surface Gridlock</h4>
                <p className="text-xs text-slate-600 line-clamp-2">458K ADS-B vectors across 104 hubs analyzing terminal airspace tortuosity.</p>
              </div>
              <span className="mt-4 flex items-center gap-1 font-mono text-xs text-blue-700 font-medium">Read Paper <ArrowRight className="size-3" /></span>
            </Link>
          </div>
        </section>
      </main>

      <GlobalFooter />
    </div>
  );
}
