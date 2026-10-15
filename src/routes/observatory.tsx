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
    <div className="min-h-screen bg-white text-[#202124] font-sans">
      <GlobalNav />

      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16 space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#dadce0] bg-[#f8f9fa] px-3.5 py-1 text-xs font-medium text-[#1a73e8] font-sans">
              <Sparkles className="size-3" /> Live Telemetry Studio
            </span>
            <span className="font-sans text-xs text-[#5f6368]">
              Empirical Lakehouse Explorers
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#202124] leading-[1.08]">
            Interactive Research <span className="text-[#1a73e8]">Observatory.</span>
          </h1>

          <p className="max-w-3xl text-base md:text-lg text-[#5f6368] font-sans leading-relaxed">
            Science should be tactile and verifiable. Explore live interactive previews of the empirical datasets underpinning our research preprints. Manipulate parameters, inspect distributions, and evaluate non-linear regimes across three major research domains.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 pt-4">
            {instituteStats.map((s) => (
              <div key={s.label} className="rounded-xl border border-[#e1e6ec] bg-[#f8f9fa] p-3 text-center shadow-xs">
                <p className="font-display text-lg md:text-xl font-normal text-[#1a73e8]">{s.value}</p>
                <p className="font-sans text-[11px] text-[#5f6368] mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Observatory Studio Section */}
        <section className="mx-auto max-w-7xl px-6 py-6">
          <InteractiveObservatoryStudio />
        </section>

        {/* Related Papers Quick Links */}
        <section className="mx-auto max-w-7xl px-6 pt-16 border-t border-[#e1e6ec]">
          <div className="mb-8 max-w-2xl">
            <span className="font-sans text-xs text-[#1a73e8] font-semibold tracking-wider uppercase">
              // VERIFY THE FORMAL PAPERS
            </span>
            <h2 className="mt-2 font-display text-2xl md:text-4xl font-normal tracking-tight text-[#202124]">
              Deep-Dive into the Camera-Ready Preprints
            </h2>
            <p className="mt-1 text-base text-[#5f6368] font-sans">
              Every visualization above corresponds to an empirical research paper with formal proofs and LaTeX specifications.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <Link
              to="/research/$paperId"
              params={{ paperId: "agentpaging-zero-latency-kv" }}
              className="rounded-xl p-5 border border-[#d2e3fc] bg-[#f8fafd] hover:border-[#1a73e8] hover:shadow-md transition-all flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-2">
                <span className="font-sans text-[10.5px] text-[#1a73e8] font-semibold uppercase">01 • AI Systems Architecture</span>
                <h4 className="font-display text-sm font-normal text-[#202124]">AgentPaging &amp; ContextGC</h4>
                <p className="text-xs text-[#5f6368] font-sans line-clamp-2">12,002 sessions, 1.19M requests, 100% zero-latency paging, and 13.6x H100 density.</p>
              </div>
              <span className="mt-4 flex items-center gap-1 font-sans text-xs text-[#1a73e8] font-medium">Read Paper <ArrowRight className="size-3" /></span>
            </Link>

            <Link
              to="/research/$paperId"
              params={{ paperId: "nhs-cancer-waiting-times" }}
              className="rounded-xl p-5 border border-[#e1e6ec] bg-white hover:border-[#1a73e8] hover:shadow-md transition-all flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-2">
                <span className="font-sans text-[10.5px] text-[#1a73e8] font-semibold uppercase">02 • Healthcare &amp; Oncology</span>
                <h4 className="font-display text-sm font-normal text-[#202124]">Triage vs. Treatment Decoupling &amp; Rule-Out Illusion</h4>
                <p className="text-xs text-[#5f6368] font-sans line-clamp-2">17.1M patient referrals, 185 acute trusts, 104k surgical breaches, and 24.7 pp triage deficit.</p>
              </div>
              <span className="mt-4 flex items-center gap-1 font-sans text-xs text-[#1a73e8] font-medium">Read Paper <ArrowRight className="size-3" /></span>
            </Link>

            <Link
              to="/research/$paperId"
              params={{ paperId: "openrouter-llm-economics" }}
              className="rounded-xl p-5 border border-[#e1e6ec] bg-white hover:border-[#1a73e8] hover:shadow-md transition-all flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-2">
                <span className="font-sans text-[10.5px] text-[#1a73e8] font-semibold uppercase">03 • AI Economics</span>
                <h4 className="font-display text-sm font-normal text-[#202124]">Volume–Revenue Bifurcation &amp; Agent Costs</h4>
                <p className="text-xs text-[#5f6368] font-sans line-clamp-2">646.2T tokens, 1,091 model endpoints, and 31.9x multi-turn escalation.</p>
              </div>
              <span className="mt-4 flex items-center gap-1 font-sans text-xs text-[#1a73e8] font-medium">Read Paper <ArrowRight className="size-3" /></span>
            </Link>

            <Link
              to="/research/$paperId"
              params={{ paperId: "lmsys-chatbot-arena-confounders" }}
              className="rounded-xl p-5 border border-[#e1e6ec] bg-white hover:border-[#1a73e8] hover:shadow-md transition-all flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-2">
                <span className="font-sans text-[10.5px] text-[#1a73e8] font-semibold uppercase">04 • Evaluation Science</span>
                <h4 className="font-display text-sm font-normal text-[#202124]">Beyond Elo: LMSYS Arena Confounders</h4>
                <p className="text-xs text-[#5f6368] font-sans line-clamp-2">Refusal tax, markdown inflation (+11.73 pp), and evaluator calibration.</p>
              </div>
              <span className="mt-4 flex items-center gap-1 font-sans text-xs text-[#1a73e8] font-medium">Read Paper <ArrowRight className="size-3" /></span>
            </Link>

            <Link
              to="/research/$paperId"
              params={{ paperId: "opensky-terminal-airspace" }}
              className="rounded-xl p-5 border border-[#e1e6ec] bg-white hover:border-[#1a73e8] hover:shadow-md transition-all flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-2">
                <span className="font-sans text-[10.5px] text-[#1a73e8] font-semibold uppercase">05 • Aerospace Telemetry</span>
                <h4 className="font-display text-sm font-normal text-[#202124]">Airborne Vectoring vs Surface Gridlock</h4>
                <p className="text-xs text-[#5f6368] font-sans line-clamp-2">458K ADS-B vectors across 104 hubs analyzing terminal airspace tortuosity.</p>
              </div>
              <span className="mt-4 flex items-center gap-1 font-sans text-xs text-[#1a73e8] font-medium">Read Paper <ArrowRight className="size-3" /></span>
            </Link>
          </div>
        </section>
      </main>

      <GlobalFooter />
    </div>
  );
}
