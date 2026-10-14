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
    <div className="rounded-xl border border-slate-200 bg-white p-5 md:p-6 shadow-xs hover:border-blue-300 transition-all space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2">
          <span className="grid size-6 place-items-center rounded-md bg-blue-100 font-mono text-xs font-bold text-blue-800">
            {hypothesis.id}
          </span>
          <h4 className="font-display text-base font-semibold text-slate-900">
            {hypothesis.title}
          </h4>
        </div>
        <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 font-mono text-[11px] text-blue-800 font-medium">
          {hypothesis.tag}
        </span>
      </div>

      {/* Narrative Explanation */}
      <p className="text-sm leading-relaxed text-slate-600">
        {hypothesis.description}
      </p>

      {/* KaTeX Mathematical Formulation */}
      <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 overflow-x-auto text-slate-900 shadow-2xs">
        <div className="flex items-center gap-1.5 font-mono text-[10.5px] text-slate-500 mb-1">
          <Sigma className="size-3 text-blue-700" />
          <span>FORMAL MATHEMATICAL SPECIFICATION</span>
        </div>
        <div
          className="text-sm md:text-base py-1"
          dangerouslySetInnerHTML={{ __html: renderedFormula }}
        />
      </div>

      {/* Empirical Statistical Proof */}
      <div className="flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-mono text-emerald-800">
        <CheckCircle2 className="size-4 shrink-0 text-emerald-600" />
        <span className="font-semibold text-slate-900">Empirical Proof:</span>
        <span className="truncate text-slate-700">{hypothesis.statProof}</span>
      </div>
    </div>
  );
}
