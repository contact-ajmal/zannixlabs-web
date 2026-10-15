import { useState } from "react";
import { Download, ExternalLink, FileText, Sparkles, Copy, Columns2, AlignLeft, BookOpen } from "lucide-react";
import { toast } from "sonner";
import katex from "katex";
import "katex/dist/katex.min.css";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { ResearchPaper } from "./researchData";

interface AcademicPaperViewProps {
  paper: ResearchPaper;
  onSwitchToPdf?: () => void;
  onSwitchToExecutive?: () => void;
}

function renderMath(formula: string): string {
  try {
    return katex.renderToString(formula, {
      displayMode: true,
      throwOnError: false,
    });
  } catch (err) {
    return `<code>${formula}</code>`;
  }
}

export function AcademicPaperView({ paper, onSwitchToPdf, onSwitchToExecutive }: AcademicPaperViewProps) {
  const [twoColumn, setTwoColumn] = useState(true);
  const slug = paper.slug || paper.id;
  const pdfUrl = `/papers/${slug}.pdf`;

  const handlePrint = () => {
    window.print();
  };

  const handleOpenPdf = () => {
    window.open(pdfUrl, "_blank");
  };

  const handleCopyCitation = async () => {
    try {
      await navigator.clipboard.writeText(paper.bibtex);
      toast.success("BibTeX citation copied to clipboard");
    } catch {
      toast.error("Clipboard unavailable");
    }
  };

  return (
    <div className="space-y-6">
      {/* Paper Control Toolbar */}
      <div className="rounded-xl border border-slate-200 bg-white p-3 px-4 flex flex-wrap items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
          <FileText className="size-4 text-blue-700" />
          <span className="text-slate-900 font-semibold">arXiv Original Paper Format</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline font-mono text-slate-500">{paper.arxivId}</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {onSwitchToPdf && (
            <Button
              variant="glow"
              size="sm"
              onClick={onSwitchToPdf}
              className="text-xs font-mono h-8"
              title="Switch to Camera-Ready PDF Viewer"
            >
              <BookOpen className="mr-1.5 size-3.5" /> PDF Document Viewer
            </Button>
          )}

          <Button
            variant="glass"
            size="sm"
            onClick={() => setTwoColumn(!twoColumn)}
            className="text-xs font-mono h-8"
            title="Toggle two-column layout"
          >
            {twoColumn ? (
              <>
                <AlignLeft className="mr-1.5 size-3.5 text-blue-700" /> Single Column
              </>
            ) : (
              <>
                <Columns2 className="mr-1.5 size-3.5 text-blue-700" /> Two Column
              </>
            )}
          </Button>

          <Button
            variant="glass"
            size="sm"
            asChild
            className="text-xs font-mono h-8"
            title="Open camera-ready PDF in new browser tab"
          >
            <a href={pdfUrl} target="_blank" rel="noreferrer">
              <ExternalLink className="mr-1.5 size-3.5" /> Fullscreen PDF
            </a>
          </Button>

          <Button
            variant="glass"
            size="sm"
            asChild
            className="text-xs font-mono h-8"
            title="Download PDF file to computer"
          >
            <a href={pdfUrl} download={`${slug}.pdf`}>
              <Download className="mr-1.5 size-3.5" /> Save PDF
            </a>
          </Button>

          <Button
            variant="glass"
            size="sm"
            onClick={handleCopyCitation}
            className="text-xs font-mono h-8"
          >
            <Copy className="mr-1.5 size-3.5" /> BibTeX
          </Button>
        </div>
      </div>

      {/* Authentic Academic Paper Sheet */}
      <article className="mx-auto max-w-4xl rounded-sm border border-slate-300/80 bg-white p-8 md:p-14 text-slate-900 shadow-xl font-serif">
        {/* Top Header Watermark (arXiv standard) */}
        <div className="border-b border-slate-300 pb-3 mb-8 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-slate-600">
          <span>{paper.arxivId} [{paper.category}]</span>
          <span>ZannixLabs Empirical Preprint • {paper.date}</span>
          <span className="font-semibold text-teal-800">100% Peer-Reproducible</span>
        </div>

        {/* Paper Title Block */}
        <header className="text-center space-y-4 mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-950 font-serif leading-tight">
            {paper.title}:<br />
            <span className="text-lg sm:text-xl md:text-2xl font-medium text-slate-700 italic">
              {paper.subtitle}
            </span>
          </h1>

          <div className="pt-2 text-sm text-slate-800 space-y-1">
            <p className="font-semibold text-base text-slate-950">
              {paper.author}
              <sup className="text-teal-700 font-bold ml-0.5">†</sup>
            </p>
            <p className="italic text-xs text-slate-600">
              {paper.institution} • Autonomous AI Agentic Research Pipeline
            </p>
            <p className="font-mono text-[11px] text-slate-500">
              Correspondence: <span className="underline">contact@zannixlabs.com</span>
            </p>
          </div>
        </header>

        {/* Abstract Box */}
        <div className="mx-auto max-w-2xl border-y border-slate-300/80 py-4 my-8 text-center">
          <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-slate-900 mb-2">
            Abstract
          </h2>
          <p className="text-justify text-[13px] leading-relaxed text-slate-800 italic">
            {paper.summary}
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-2 font-mono text-[11px] text-slate-600">
            <span className="font-bold">Keywords:</span>
            <span>{paper.category}</span> •
            <span>Autonomous Empirical Science</span> •
            <span>DuckDB Lakehouse</span> •
            <span>Welch Hypothesis Testing</span>
          </div>
        </div>

        {/* Main Paper Content: Two-Column or Single-Column */}
        <div className={twoColumn ? "md:columns-2 gap-8 text-[13.5px] leading-relaxed text-slate-800 text-justify" : "space-y-6 text-[14px] leading-relaxed text-slate-800 text-justify"}>
          
          {/* Section 1: Introduction */}
          <section className="break-inside-avoid-column mb-6 space-y-2">
            <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              1. Introduction &amp; Breakthrough
            </h2>
            <p className="first-letter:text-3xl first-letter:font-bold first-letter:float-left first-letter:mr-1.5 first-letter:leading-none">
              Traditional quantitative inquiry is constrained by the human friction of data wrangling, bespoke statistical scripting, and lengthy manual drafting. In this empirical report, ZannixLabs deploys an autonomous AI agentic pipeline to continuous real-world telemetry.
            </p>
            <p className="bg-amber-50/80 p-3 rounded border-l-4 border-amber-600 text-xs italic leading-relaxed text-slate-800">
              <strong>Executive Finding:</strong> {paper.executiveBreakthrough}
            </p>
            <p>
              To eliminate bias, every hypothesis tested in this study was declared prior to lakehouse computation, formalized in mathematical notation, and subjected to two-sample Welch t-tests and non-linear regression fits.
            </p>
          </section>

          {/* Section 2: Empirical Telemetry Pipeline */}
          <section className="break-inside-avoid-column mb-6 space-y-2">
            <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              2. Empirical Telemetry Lakehouse
            </h2>
            <p>
              The study leverages high-volume real-world telemetry ingested into high-performance columnar DuckDB lakehouses:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              {paper.datasetMetrics.map((m) => (
                <li key={m.label}>
                  <strong>{m.value}</strong>: {m.label}
                </li>
              ))}
            </ul>
            <p className="text-xs">
              Raw parquet streams were validated using a 29-check deterministic quality suite enforcing grain parity, non-null guarantees, and temporal consistency.
            </p>
          </section>

          {/* Section 3: Formal Mathematical Hypotheses */}
          <section className="break-inside-avoid-column mb-6 space-y-3">
            <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              3. Formal Macro Hypotheses
            </h2>
            <p className="text-xs">
              We formalized the core empirical propositions into explicit mathematical models:
            </p>

            {paper.hypotheses.map((h, idx) => (
              <div key={h.id} className="rounded border border-slate-300 bg-slate-50/90 p-3 text-xs space-y-1.5 break-inside-avoid">
                <div className="flex items-center justify-between font-sans text-[11px] font-bold text-slate-900">
                  <span>Theorem {h.id}: {h.title}</span>
                  <span className="font-mono text-teal-700">({idx + 1})</span>
                </div>
                <div
                  className="py-2 px-3 bg-white rounded border border-slate-200 text-slate-950 text-xs overflow-x-auto text-center font-serif shadow-xs"
                  dangerouslySetInnerHTML={{ __html: renderMath(h.formula) }}
                />
                <p className="text-slate-700 italic text-[11.5px]">
                  {h.description}
                </p>
                <div className="pt-1 border-t border-slate-200 font-mono text-[10.5px] text-emerald-800 font-semibold">
                  Statistical Proof: {h.statProof}
                </div>
              </div>
            ))}
          </section>

          {/* Section 4: Automated Methodology Stages */}
          <section className="break-inside-avoid-column mb-6 space-y-2">
            <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              4. Automated Research Pipeline
            </h2>
            <p className="text-xs">
              The autonomous AI research process executed through four deterministic stages:
            </p>
            <div className="space-y-2 text-xs">
              {paper.methodologyStages.map((m) => (
                <div key={m.stage} className="border-l-2 border-teal-600 pl-2 space-y-0.5">
                  <span className="font-sans font-bold text-slate-900">
                    {m.stage}: {m.title}
                  </span>
                  <p className="text-slate-600 text-[11px]">{m.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Telemetry Lakehouse Schema */}
          <section className="break-inside-avoid-column mb-6 space-y-2">
            <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              5. Lakehouse Telemetry Schema
            </h2>
            <p className="text-xs">
              All tables are structured as columnar Parquet artifacts for deterministic peer replication:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-[11px] font-sans border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-900 text-left">
                    <th className="py-1">Table</th>
                    <th className="py-1">Rows</th>
                    <th className="py-1">Cols</th>
                    <th className="py-1">Size</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {paper.telemetryTables.map((t) => (
                    <tr key={t.name}>
                      <td className="py-1 font-mono">{t.name}</td>
                      <td className="py-1">{t.rows}</td>
                      <td className="py-1">{t.cols}</td>
                      <td className="py-1">{t.size}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6: Key Takeaways & Recommendations */}
          <section className="break-inside-avoid-column mb-6 space-y-2">
            <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              6. Industry &amp; Scientific Takeaways
            </h2>
            <div className="space-y-2 text-xs">
              {paper.benefits.map((b) => (
                <div key={b.audience} className="space-y-0.5">
                  <strong className="text-slate-950 font-sans">{b.audience}:</strong>
                  <p className="text-slate-700 italic">{b.takeaway}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: References */}
          <section className="break-inside-avoid-column mb-6 space-y-2">
            <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              References &amp; Citation
            </h2>
            <p className="text-[11px] leading-relaxed text-slate-700">
              [1] {paper.author}. &quot;{paper.title}: {paper.subtitle}&quot;. <em>{paper.arxivId}</em>, ZannixLabs Autonomous AI Research Institute, {paper.date}.
            </p>
            <p className="text-[11px] leading-relaxed text-slate-700">
              [2] ZannixLabs Open Science Infrastructure. Deterministic DuckDB Lakehouse Connector, 2026. Available at <span className="underline font-mono">https://zannixlabs.com</span>.
            </p>
            <div className="mt-3 bg-slate-100 p-2.5 rounded font-mono text-[9.5px] leading-tight text-slate-800 overflow-x-auto border border-slate-300">
              <pre>{paper.bibtex}</pre>
            </div>
          </section>

        </div>

        {/* Paper Footer */}
        <footer className="mt-12 border-t-2 border-slate-900 pt-4 text-center font-mono text-[10px] text-slate-500 space-y-1">
          <p>© 2026 ZannixLabs • Founded by Ajmal Baba (Founder &amp; AI Agent Assistant Who Guides the Agents) • Autonomous Empirical Research</p>
          <p>Camera-Ready Preprint • Distributed under Open Science Creative Commons Attribution 4.0 License</p>
        </footer>
      </article>
    </div>
  );
}
