import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Copy, Download, ExternalLink, FileText, Layers, Package, Sparkles, Table as TableIcon } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { GlobalNav } from "@/components/zaanix/GlobalNav";
import { GlobalFooter } from "@/components/zaanix/GlobalFooter";
import { MathCard } from "@/components/zaanix/MathCard";
import { AcademicPaperView } from "@/components/zaanix/AcademicPaperView";
import { PdfDocumentViewer } from "@/components/zaanix/PdfDocumentViewer";
import { papers } from "@/components/zaanix/researchData";

type ViewMode = "executive" | "original" | "pdf";

export const Route = createFileRoute("/research/$paperId")({
  validateSearch: (search: Record<string, unknown>): { view?: ViewMode } => {
    const v = search["view"] as ViewMode | undefined;
    if (v === "original" || v === "pdf" || v === "executive") {
      return { view: v };
    }
    return {};
  },
  loader: ({ params }) => {
    const paper = papers.find((p) => p.slug === params.paperId || p.id === params.paperId);
    if (!paper) {
      throw notFound();
    }
    return { paper };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.paper) {
      return { meta: [{ title: "Paper Not Found — ZannixLabs" }] };
    }
    const { paper } = loaderData;
    return {
      meta: [
        { title: `${paper.title} — ZannixLabs Research` },
        { name: "description", content: paper.summary },
        { property: "og:title", content: paper.title },
        { property: "og:description", content: paper.summary },
      ],
    };
  },
  component: PaperDetailPage,
  notFoundComponent: PaperNotFound,
});

function PaperNotFound() {
  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 font-sans">
      <GlobalNav />
      <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 text-center">
        <h1 className="font-display text-4xl font-bold text-slate-900">Paper Not Found</h1>
        <p className="mt-3 text-sm text-slate-600">
          The requested research preprint could not be located in our catalog.
        </p>
        <Button variant="glow" className="mt-6" asChild>
          <Link to="/research">Back to Research Catalog</Link>
        </Button>
      </div>
      <GlobalFooter />
    </div>
  );
}

function PaperDetailPage() {
  const { paper } = Route.useLoaderData();
  const search = Route.useSearch();
  const [copied, setCopied] = useState(false);
  // Default to "original" (Authentic arXiv paper format) unless specified in search params
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    return search?.view || "original";
  });
  const slug = paper.slug || paper.id;

  const handleSetViewMode = (mode: ViewMode) => {
    setViewMode(mode);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("view", mode);
      window.history.replaceState(null, "", url.toString());
      const el = document.getElementById("paper-content-view");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Find previous and next papers for bottom navigation
  const currentIndex = papers.findIndex((p) => p.id === paper.id);
  const prevPaper = currentIndex > 0 ? papers[currentIndex - 1] : null;
  const nextPaper = currentIndex < papers.length - 1 ? papers[currentIndex + 1] : null;

  const handleCopyBibtex = async () => {
    try {
      await navigator.clipboard.writeText(paper.bibtex);
      setCopied(true);
      toast.success("BibTeX citation copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Clipboard unavailable");
    }
  };

  const recordDownloadTelemetry = async (type: "pdf" | "tar_gz") => {
    try {
      await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paperId: paper.id, downloadType: type }),
      });
    } catch (err) {
      console.warn("Failed to record download telemetry:", err);
    }
  };

  const handleDownloadPdf = () => {
    const slug = paper.slug || paper.id;
    recordDownloadTelemetry("pdf");
    toast.success("Downloading Camera-Ready Preprint PDF", {
      description: `Opening camera-ready PDF for ${paper.arxivId}.`,
    });

    const link = document.createElement("a");
    link.href = `/papers/${slug}.pdf`;
    link.download = `${slug}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadTar = () => {
    const slug = paper.slug || paper.id;
    recordDownloadTelemetry("tar_gz");
    toast.success("Downloading LaTeX Reproducibility Package", {
      description: "Includes main.tex, references.bib, and metadata.json.",
    });

    const link = document.createElement("a");
    link.href = `/papers/${slug}.tar.gz`;
    link.download = `${slug}.tar.gz`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white text-[#202124] font-sans">
      <GlobalNav />

      <main className="pt-24 pb-20">
        {/* Paper Header Section */}
        <section className="mx-auto max-w-5xl px-6 py-10 md:py-14 space-y-6">
          {/* Breadcrumb Back Link */}
          <Link
            to="/research"
            className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#5f6368] hover:text-[#1a73e8] transition-colors"
          >
            <ArrowLeft className="size-3.5" /> Back to Publications
          </Link>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-[#dadce0] bg-[#f8f9fa] px-3.5 py-1 text-xs font-sans font-medium text-[#1a73e8]">
              {paper.industry || paper.category}
            </span>
            <span className="font-mono text-xs text-[#70757a]">
              {paper.arxivId}
            </span>
            <span className="rounded-full border border-emerald-300 bg-emerald-50 px-3 py-0.5 font-sans text-xs font-medium text-emerald-800">
              ● {paper.status}
            </span>
            <span className="font-sans text-xs text-[#5f6368]">
              {paper.date}
            </span>
            <span className="rounded-full border border-[#dadce0] bg-[#f8f9fa] px-3 py-0.5 font-sans text-xs text-[#3c4043] hidden sm:inline-flex items-center gap-1">
              <Sparkles className="size-3 text-[#1a73e8]" /> Plain English + Original arXiv Layout
            </span>
          </div>

          {/* Plain English Primary Headline Card */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-[#d2e3fc] bg-[#f8fafd] p-6 md:p-8 space-y-3 relative overflow-hidden shadow-xs">
              <div className="flex items-center gap-2 font-sans text-xs font-medium text-[#1967d2] uppercase tracking-wider">
                <Sparkles className="size-4 text-[#1a73e8]" /> Plain English Explanation
              </div>
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-[#202124] leading-[1.18]">
                {paper.plainTitle || paper.title}
              </h1>
              <p className="text-base sm:text-lg font-normal text-[#5f6368] font-sans leading-relaxed">
                {paper.plainSubtitle || paper.subtitle}
              </p>

              <div className="grid gap-3 sm:grid-cols-2 pt-4 border-t border-[#d2e3fc]">
                <div className="rounded-xl border border-[#e1e6ec] bg-white p-4 space-y-1.5 shadow-2xs">
                  <div className="font-sans text-xs font-medium text-[#1a73e8] uppercase tracking-wide flex items-center gap-1.5">
                    <Sparkles className="size-3.5" /> What We Discovered In Simple Terms
                  </div>
                  <p className="text-xs text-[#3c4043] font-sans leading-relaxed">
                    {paper.plainExplanation || paper.summary}
                  </p>
                </div>

                <div className="rounded-xl border border-[#e1e6ec] bg-white p-4 space-y-1.5 shadow-2xs">
                  <div className="font-sans text-xs font-medium text-emerald-800 uppercase tracking-wide flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-emerald-600" /> Why This Matters To Everyday People
                  </div>
                  <p className="text-xs text-[#3c4043] font-sans leading-relaxed">
                    {paper.whyItMatters || paper.executiveBreakthrough}
                  </p>
                </div>
              </div>
            </div>

            {/* Formal Academic Citation Title */}
            <div className="rounded-xl border border-[#e1e6ec] bg-[#f8f9fa] p-4 space-y-1 shadow-2xs">
              <div className="font-sans text-xs text-[#5f6368] font-medium flex items-center gap-1.5">
                <FileText className="size-3.5 text-[#1a73e8]" /> Formal Academic Title (for Researchers &amp; Citations):
              </div>
              <div className="font-serif text-base sm:text-lg font-semibold text-[#202124] italic">
                {paper.title}
              </div>
              <div className="text-xs font-serif text-[#5f6368] italic">
                {paper.subtitle}
              </div>
            </div>
          </div>

          {/* Author & Lab */}
          <div className="flex flex-wrap items-center gap-3 pt-1 text-sm text-[#5f6368] font-sans">
            <span className="text-[#202124] font-medium">{paper.author}</span>
            <span>•</span>
            <span>{paper.institution}</span>
          </div>

          {/* Dataset Scale Strip */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 pt-4">
            {paper.datasetMetrics.map((m) => (
              <div key={m.label} className="rounded-2xl border border-[#dadce0] bg-[#f8f9fa] p-3.5 text-center shadow-xs">
                <p className="font-display text-xl font-medium text-[#1a73e8]">{m.value}</p>
                <p className="font-sans text-xs text-[#5f6368] mt-0.5">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Action CTAs: Direct Reader & Viewer Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-[#e1e6ec]">
            {/* Direct In-Browser View Mode Buttons - Google Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <Button
                className={`rounded-full text-xs font-medium px-4 h-9 ${
                  viewMode === "original"
                    ? "bg-[#1a73e8] hover:bg-[#1557b0] text-white shadow-xs"
                    : "border border-[#dadce0] bg-white text-[#3c4043] hover:bg-[#f1f3f4]"
                }`}
                onClick={() => handleSetViewMode("original")}
              >
                <FileText className="mr-2 size-3.5" /> arXiv Paper Format
              </Button>
              <Button
                className={`rounded-full text-xs font-medium px-4 h-9 ${
                  viewMode === "pdf"
                    ? "bg-[#1a73e8] hover:bg-[#1557b0] text-white shadow-xs"
                    : "border border-[#dadce0] bg-white text-[#3c4043] hover:bg-[#f1f3f4]"
                }`}
                onClick={() => handleSetViewMode("pdf")}
              >
                <BookOpen className="mr-2 size-3.5" /> PDF Document Viewer
              </Button>
              <Button
                className={`rounded-full text-xs font-medium px-4 h-9 ${
                  viewMode === "executive"
                    ? "bg-[#1a73e8] hover:bg-[#1557b0] text-white shadow-xs"
                    : "border border-[#dadce0] bg-white text-[#3c4043] hover:bg-[#f1f3f4]"
                }`}
                onClick={() => handleSetViewMode("executive")}
              >
                <Sparkles className="mr-2 size-3.5" /> Executive Lab
              </Button>
            </div>

            {/* Direct File & Tab Actions */}
            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="rounded-full border-[#dadce0] bg-white text-[#3c4043] hover:bg-[#f1f3f4] font-sans text-xs h-9 px-3.5"
                title="Open camera-ready PDF directly in a new browser tab without save-as popup"
              >
                <a href={`/papers/${slug}.pdf`} target="_blank" rel="noreferrer">
                  <ExternalLink className="mr-1.5 size-3.5" /> Fullscreen PDF
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadPdf}
                className="rounded-full border-[#dadce0] bg-white text-[#1a73e8] hover:bg-[#f1f3f4] font-sans text-xs h-9 px-3.5"
                title="Save camera-ready PDF file to your computer"
              >
                <Download className="mr-1.5 size-3.5" /> Save PDF
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadTar}
                className="rounded-full border-[#dadce0] bg-white text-[#3c4043] hover:bg-[#f1f3f4] font-sans text-xs h-9 px-3"
                title="Download arXiv TeX reproducibility package"
              >
                <Package className="mr-1.5 size-3.5" /> .tar.gz
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyBibtex}
                className="rounded-full border-[#dadce0] bg-white text-[#3c4043] hover:bg-[#f1f3f4] font-sans text-xs h-9 px-3"
                title="Copy BibTeX Citation"
              >
                <Copy className="mr-1.5 size-3.5" /> {copied ? "Copied" : "BibTeX"}
              </Button>
            </div>
          </div>
        </section>

        {/* Paper Format Switcher Tabs - Google Research Segmented Pill Style */}
        <section id="paper-content-view" className="mx-auto max-w-5xl px-6 pb-4 scroll-mt-24">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e1e6ec] pb-4">
            <div className="flex flex-wrap rounded-full bg-[#f1f3f4] p-1 border border-[#dadce0]">
              <button
                type="button"
                onClick={() => handleSetViewMode("original")}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-sans transition-all ${
                  viewMode === "original"
                    ? "bg-white text-[#1a73e8] font-medium shadow-xs"
                    : "text-[#5f6368] hover:text-[#202124]"
                }`}
              >
                <FileText className="size-3.5" /> arXiv Paper Format
              </button>
              <button
                type="button"
                onClick={() => handleSetViewMode("pdf")}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-sans transition-all ${
                  viewMode === "pdf"
                    ? "bg-white text-[#1a73e8] font-medium shadow-xs"
                    : "text-[#5f6368] hover:text-[#202124]"
                }`}
              >
                <BookOpen className="size-3.5" /> PDF Document Viewer
              </button>
              <button
                type="button"
                onClick={() => handleSetViewMode("executive")}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-sans transition-all ${
                  viewMode === "executive"
                    ? "bg-white text-[#1a73e8] font-medium shadow-xs"
                    : "text-[#5f6368] hover:text-[#202124]"
                }`}
              >
                <Sparkles className="size-3.5" /> Executive &amp; Telemetry
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-2 font-sans text-xs text-[#5f6368]">
              <span>Active View:</span>
              <span className="text-[#1a73e8] font-medium">
                {viewMode === "original" && "Two-Column LaTeX Typeset"}
                {viewMode === "pdf" && "Camera-Ready PDF Embed"}
                {viewMode === "executive" && "Interactive Telemetry Lab"}
              </span>
            </div>
          </div>
        </section>

        {/* VIEW 1: Original arXiv Paper Format */}
        {viewMode === "original" && (
          <section className="mx-auto max-w-5xl px-5 py-6 animate-in fade-in duration-300">
            <AcademicPaperView
              paper={paper}
              onSwitchToPdf={() => handleSetViewMode("pdf")}
              onSwitchToExecutive={() => handleSetViewMode("executive")}
            />
          </section>
        )}

        {/* VIEW 2: Interactive Camera-Ready PDF Document Viewer */}
        {viewMode === "pdf" && (
          <section className="mx-auto max-w-5xl px-5 py-6 animate-in fade-in duration-300">
            <PdfDocumentViewer
              paper={paper}
              onSwitchToOriginal={() => handleSetViewMode("original")}
              pageCount={2}
            />
          </section>
        )}

        {/* VIEW 3: Interactive Executive & Telemetry Lab */}
        {viewMode === "executive" && (
          <div className="animate-in fade-in duration-300">
            {/* Section 1: Executive Synthesis & Key Findings */}
            <section className="mx-auto max-w-5xl px-5 py-8">
              <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-6 md:p-8 space-y-4 shadow-xs">
                <div className="flex items-center gap-2 text-blue-700 font-mono text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="size-4" />
                  <span>EXECUTIVE BREAKTHROUGH &amp; DISCOVERY</span>
                </div>
                <h2 className="font-display text-2xl font-bold text-slate-900">
                  What This Research Proves
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate-700">
                  {paper.executiveBreakthrough}
                </p>
                <p className="text-sm leading-relaxed text-slate-600 pt-2 border-t border-blue-200/60">
                  <strong className="text-slate-900 font-semibold">Abstract:</strong> {paper.summary}
                </p>
              </div>
            </section>

            {/* Section 2: Macro Hypotheses & KaTeX Mathematical Formulations */}
            <section className="mx-auto max-w-5xl px-5 py-10 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs text-blue-700 font-semibold uppercase tracking-widest">
                  // EMPIRICAL RIGOR
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
                  Macro Hypotheses &amp; Mathematical Specifications
                </h2>
                <p className="text-sm text-slate-600">
                  Each hypothesis was formulated into formal mathematical notation and validated via automated Welch two-sample t-tests and regression fits.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {paper.hypotheses.map((h) => (
                  <MathCard key={h.id} hypothesis={h} />
                ))}
              </div>
            </section>

            {/* Section 3: Agentic Methodology Workflow */}
            <section className="mx-auto max-w-5xl px-5 py-10 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs text-blue-700 font-semibold uppercase tracking-widest">
                  // AGENTIC PROCESS
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
                  How the Autonomous Pipeline Conducted This Study
                </h2>
                <p className="text-sm text-slate-600">
                  Trace the end-to-end autonomous research methodology used by ZannixLabs to ingest, clean, verify, and author this paper.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {paper.methodologyStages.map((st) => (
                  <div key={st.stage} className="rounded-xl border border-slate-200 bg-white p-5 space-y-2 hover:border-blue-300 shadow-xs transition-colors">
                    <span className="font-mono text-xs text-blue-700 font-semibold">{st.stage}</span>
                    <h3 className="font-display text-base font-semibold text-slate-900">{st.title}</h3>
                    <p className="text-xs leading-relaxed text-slate-600">{st.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Industry Benefits & Practical Takeaways */}
            <section className="mx-auto max-w-5xl px-5 py-10 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs text-blue-700 font-semibold uppercase tracking-widest">
                  // REAL-WORLD IMPACT
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
                  Practical Benefits &amp; Strategic Applications
                </h2>
                <p className="text-sm text-slate-600">
                  How engineering teams, researchers, and domain leaders can apply these empirical findings today.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {paper.benefits.map((b, i) => (
                  <div key={i} className="rounded-xl border border-slate-200 bg-white p-5 space-y-3 border-l-4 border-l-blue-600 shadow-xs">
                    <p className="font-mono text-xs font-semibold text-blue-700 uppercase">
                      {b.audience}
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {b.takeaway}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Lakehouse Telemetry Data Tables */}
            <section className="mx-auto max-w-5xl px-5 py-10 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs text-blue-700 font-semibold uppercase tracking-widest">
                  // LAKEHOUSE ARTIFACTS
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
                  Data Governance &amp; Lakehouse Tables
                </h2>
                <p className="text-sm text-slate-600">
                  Underlying analytical tables stored in the Zannix DuckDB lakehouse supporting 100% empirical reproducibility.
                </p>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
                <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3 font-mono text-xs text-blue-700 bg-slate-50">
                  <TableIcon className="size-3.5" />
                  <span>duckdb&gt; SELECT * FROM zannix_lakehouse_catalog WHERE paper_id = &apos;{paper.id}&apos;;</span>
                </div>
                <Table className="font-mono text-xs">
                  <TableHeader className="bg-slate-50/70">
                    <TableRow className="border-b border-slate-200">
                      <TableHead className="text-slate-700">Table Name</TableHead>
                      <TableHead className="text-right text-slate-700">Rows</TableHead>
                      <TableHead className="text-right text-slate-700">Cols</TableHead>
                      <TableHead className="text-right text-slate-700">Storage Size</TableHead>
                      <TableHead className="text-slate-700">Temporal Span / Cohort</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paper.telemetryTables.map((t) => (
                      <TableRow key={t.name} className="border-b border-slate-100 hover:bg-slate-50/60">
                        <TableCell className="font-semibold text-blue-700">{t.name}</TableCell>
                        <TableCell className="text-right text-slate-700">{t.rows}</TableCell>
                        <TableCell className="text-right text-slate-700">{t.cols}</TableCell>
                        <TableCell className="text-right text-slate-700">{t.size}</TableCell>
                        <TableCell className="text-slate-600">{t.span}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </section>

            {/* Section 6: BibTeX Citation */}
            <section className="mx-auto max-w-5xl px-5 py-8">
              <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <span className="font-mono text-xs text-blue-700 font-semibold">
                    BibTeX Citation
                  </span>
                  <Button variant="glass" size="sm" onClick={handleCopyBibtex}>
                    <Copy className="mr-1.5 size-3.5" />
                    {copied ? "Copied" : "Copy Citation"}
                  </Button>
                </div>
                <pre className="mt-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <code>{paper.bibtex}</code>
                </pre>
              </div>
            </section>
          </div>
        )}

        {/* Section 7: Next / Previous Paper Navigation */}
        <section className="mx-auto max-w-5xl px-5 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-8">
            {prevPaper ? (
              <Link
                to="/research/$paperId"
                params={{ paperId: prevPaper.slug }}
                className="rounded-xl border border-slate-200 bg-white p-4 flex items-center gap-3 max-w-sm hover:border-blue-400 hover:shadow-xs shadow-2xs transition-all"
              >
                <ArrowLeft className="size-4 text-blue-700 shrink-0" />
                <div>
                  <span className="font-mono text-[10px] text-slate-500 uppercase">Previous Preprint</span>
                  <p className="font-display text-sm font-semibold text-slate-900 line-clamp-1">{prevPaper.title}</p>
                </div>
              </Link>
            ) : <div />}

            {nextPaper && (
              <Link
                to="/research/$paperId"
                params={{ paperId: nextPaper.slug }}
                className="rounded-xl border border-slate-200 bg-white p-4 flex items-center gap-3 max-w-sm hover:border-blue-400 hover:shadow-xs shadow-2xs transition-all text-right"
              >
                <div>
                  <span className="font-mono text-[10px] text-slate-500 uppercase">Next Preprint</span>
                  <p className="font-display text-sm font-semibold text-slate-900 line-clamp-1">{nextPaper.title}</p>
                </div>
                <ArrowRight className="size-4 text-blue-700 shrink-0" />
              </Link>
            )}
          </div>
        </section>
      </main>

      <GlobalFooter />
    </div>
  );
}
