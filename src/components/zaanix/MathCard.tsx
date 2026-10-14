import katex from "katex";
import "katex/dist/katex.min.css";
import { CheckCircle2, Sigma } from "lucide-react";
import type { Hypothesis } from "./researchData";

export function MathCard({ hypothesis }: { hypothesis: Hypothesis }) {
  let renderedFormula = "";
  try {
    renderedFormula = katex.renderToString(hypothesis.formula, {
      displayMode: true,
      throwOnError: false,
    });
  } catch (err) {
    console.error("KaTeX rendering error:", err);
    renderedFormula = `<code>${hypothesis.formula}</code>`;
  }

  return (
    <div className="glass rounded-xl p-5 md:p-6 transition-all hover:border-primary/40 space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3">
        <div className="flex items-center gap-2">
          <span className="grid size-6 place-items-center rounded-md bg-primary/20 font-mono text-xs font-bold text-primary">
            {hypothesis.id}
          </span>
          <h4 className="font-display text-base font-semibold text-foreground">
            {hypothesis.title}
          </h4>
        </div>
        <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[11px] text-primary">
          {hypothesis.tag}
        </span>
      </div>

      {/* Narrative Explanation */}
      <p className="text-sm leading-relaxed text-muted-foreground">
        {hypothesis.description}
      </p>

      {/* KaTeX Mathematical Formulation */}
      <div className="rounded-lg border border-border/80 bg-background/70 px-4 py-3 overflow-x-auto text-foreground shadow-inner">
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground mb-1">
          <Sigma className="size-3 text-primary" />
          <span>FORMAL MATHEMATICAL SPECIFICATION</span>
        </div>
        <div
          className="text-sm md:text-base py-1"
          dangerouslySetInnerHTML={{ __html: renderedFormula }}
        />
      </div>

      {/* Empirical Statistical Proof */}
      <div className="flex items-center gap-2 rounded-lg border border-success/30 bg-success/5 px-3 py-2 text-xs font-mono text-success">
        <CheckCircle2 className="size-4 shrink-0 text-success" />
        <span className="font-semibold text-foreground">Empirical Proof:</span>
        <span className="truncate">{hypothesis.statProof}</span>
      </div>
    </div>
  );
}
