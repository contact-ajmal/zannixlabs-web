import { useState } from "react";
import { Database, Sigma, Network, Rocket, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const workflowSteps = [
  {
    step: "01",
    title: "Continuous Telemetry Ingestion",
    short: "Lakehouse Ingestion",
    icon: Database,
    tech: "DuckDB & Apache Arrow",
    summary:
      "Automated high-frequency telemetry pipelines ingest millions of real-world rows—API gateway tokens, ADS-B transponder state vectors, sports ball trajectories, and crowdsourced battle logs—into an immutable, high-speed analytical lakehouse.",
    details: [
      "In-process zero-copy vectorized DuckDB execution",
      "Automated schema verification and 29-point quality check suites",
      "Hourly scheduled synchronization without manual data wrangling",
    ],
  },
  {
    step: "02",
    title: "Hypothesis Formalization",
    short: "LaTeX Modeling",
    icon: Sigma,
    tech: "Mathematical Formalization",
    summary:
      "AI research agents interrogate data distributions, identify non-linear inflection points (such as the 8.98 RPO cricket scoring ceiling or the 31.9x agent multi-turn cost escalation), and formalize them into rigorous LaTeX hypotheses.",
    details: [
      "Conversion of qualitative anomalies into testable mathematical equations",
      "Formal definition of null and alternative hypotheses (H1–H4)",
      "Strict parameterization of boundary conditions and interaction terms",
    ],
  },
  {
    step: "03",
    title: "Autonomous Statistical Proof",
    short: "Welch t-Tests & Pareto",
    icon: ShieldCheck,
    tech: "Rigor & Null Testing",
    summary:
      "Statistical algorithms execute two-sample Welch t-tests, Herfindahl–Hirschman index (HHI) concentration metrics, survival hazard regressions, and non-dominated Pareto frontier calculations to prove or falsify each hypothesis.",
    details: [
      "Exact p-value calculation with Bonferroni correction for multiple testing",
      "Non-parametric bootstrap confidence intervals (95% & 99%)",
      "Factorial 2x4 decomposition isolating structural confounding variables",
    ],
  },
  {
    step: "04",
    title: "Literature Cross-Verification",
    short: "Novelty & Citations",
    icon: Network,
    tech: "arXiv, CrossRef, OpenAlex",
    summary:
      "The agent cross-references findings against academic repositories (arXiv, CrossRef, Semantic Scholar, OpenAlex) to establish empirical novelty, trace citation lineages, and ensure zero hallucinations.",
    details: [
      "Automated semantic vector search across 200M+ research papers",
      "Taxonomic classification against state-of-the-art benchmarks",
      "Precise identification of unaddressed gaps in prior published literature",
    ],
  },
  {
    step: "05",
    title: "Reproducible Artifact Delivery",
    short: "Camera-Ready Papers",
    icon: Rocket,
    tech: "IEEE / arXiv LaTeX & Observatories",
    summary:
      "The pipeline autonomously compiles publication-ready IEEE/ACM/arXiv camera-ready PDFs, reproducible DuckDB SQL notebooks, and interactive web observatories for global open-science release.",
    details: [
      "One-click verifiable BibTeX citations and tar.gz source bundles",
      "Interactive multi-dimensional chart studios for public inquiry",
      "100% executable and auditable scientific codebases",
    ],
  },
];

export function AgentWorkflowDiagram() {
  const [activeStep, setActiveStep] = useState(0);
  const current = workflowSteps[activeStep];

  return (
    <div className="space-y-8">
      {/* Step Navigation Bar */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {workflowSteps.map((s, idx) => {
          const isSelected = idx === activeStep;
          const Icon = s.icon;
          return (
            <button
              key={s.step}
              onClick={() => setActiveStep(idx)}
              className={`flex flex-col items-start rounded-xl border p-4 text-left transition-all ${
                isSelected
                  ? "border-primary bg-primary/10 shadow-glow"
                  : "border-border/80 bg-background/50 hover:border-primary/40 hover:bg-accent/30"
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span className="font-mono text-xs font-semibold text-primary">
                  STAGE {s.step}
                </span>
                <Icon className={`size-4 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
              </div>
              <p className="font-display text-sm font-semibold text-foreground leading-tight">
                {s.short}
              </p>
              <span className="mt-1 text-[11px] font-mono text-muted-foreground truncate w-full">
                {s.tech}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Step Deep-Dive Card */}
      <div className="glass rounded-2xl p-6 md:p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4">
          <div className="flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-xl bg-gradient-accent text-primary-foreground font-display font-bold shadow-glow">
              {current.step}
            </div>
            <div>
              <span className="font-mono text-xs text-primary font-semibold">
                STAGE {current.step} OF THE AGENTIC RESEARCH PARADIGM
              </span>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                {current.title}
              </h3>
            </div>
          </div>
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
            {current.tech}
          </span>
        </div>

        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          {current.summary}
        </p>

        {/* Bullet Breakdown */}
        <div className="grid gap-3 sm:grid-cols-3 pt-2">
          {current.details.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-border/70 bg-background/60 p-4 space-y-1.5"
            >
              <div className="flex items-center gap-1.5 font-mono text-xs text-primary">
                <CheckCircle2 className="size-3.5 text-primary" />
                <span>Capability 0{i + 1}</span>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Step Next Action Helper */}
        <div className="flex items-center justify-between pt-2 text-xs font-mono text-muted-foreground">
          <span>Click any stage above to inspect its internal mechanics</span>
          {activeStep < workflowSteps.length - 1 && (
            <button
              onClick={() => setActiveStep((prev) => prev + 1)}
              className="flex items-center gap-1 text-primary hover:underline"
            >
              Next: Stage 0{activeStep + 2} <ArrowRight className="size-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
