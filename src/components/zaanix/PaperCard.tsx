import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Copy, Download, FileText, Sparkles, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { ResearchPaper } from "./researchData";

export function PaperCard({ paper }: { paper: ResearchPaper }) {
  const handleCopyBibtex = async () => {
    try {
      await navigator.clipboard.writeText(paper.bibtex);
      toast.success("BibTeX citation copied to clipboard", {
        description: `Citation for "${paper.title.slice(0, 40)}..." is ready to paste.`,
      });
    } catch {
      toast.error("Clipboard access unavailable");
    }
  };

  const handleDownloadPdf = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paperId: paper.slug, downloadType: "pdf" }),
      }).catch(console.error);
    } catch {}

    toast.success("Downloading Camera-Ready Preprint PDF", {
      description: `${paper.arxivId} (${paper.title.slice(0, 36)}...)`,
    });

    const link = document.createElement("a");
    link.href = `/papers/${paper.slug}.pdf`;
    link.download = `${paper.slug}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="group rounded-2xl border border-[#e1e6ec] bg-white shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:border-[#1a73e8]/40">
      {/* Top Research Photography Banner */}
      {paper.heroImage && (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#f1f3f4]">
          <img
            src={paper.heroImage}
            alt={paper.plainTitle || paper.title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-xs px-3 py-1 font-mono text-[10.5px] font-medium text-emerald-800 shadow-sm border border-emerald-200">
            <span className="size-1.5 rounded-full bg-emerald-600 animate-pulse" />
            {paper.status}
          </div>
        </div>
      )}

      <div className="p-6 md:p-7 space-y-4 flex-1">
        {/* Category & Status Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-[#5f6368] font-sans">
            <span>{paper.date}</span>
            <span>•</span>
            <span className="text-[#1a73e8] font-semibold">{paper.industry || paper.category}</span>
          </div>
          <span className="font-mono text-xs text-[#70757a]">
            {paper.arxivId}
          </span>
        </div>

        {/* Paper Title & Subtitle */}
        <div>
          <Link
            to="/research/$paperId"
            params={{ paperId: paper.slug }}
            className="group/title block"
          >
            <h3 className="font-display text-xl md:text-2xl font-medium leading-snug tracking-tight text-[#202124] transition-colors group-hover/title:text-[#1a73e8]">
              {paper.plainTitle || paper.title}
            </h3>
          </Link>
          <p className="mt-2 text-sm font-normal text-[#5f6368] font-sans leading-relaxed">
            {paper.plainSubtitle || paper.subtitle}
          </p>

          {/* Academic Formal Reference Note */}
          <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-mono text-[#70757a] bg-[#f8f9fa] px-3 py-1.5 rounded-lg border border-[#e8eaed]">
            <span className="font-semibold text-[#3c4043] shrink-0">Formal Citation:</span>
            <span className="truncate italic text-[#5f6368]">{paper.title}</span>
          </div>
        </div>

        {/* Highlighted "In Plain English" Box */}
        <div className="rounded-xl border border-[#d2e3fc] bg-[#f8fafd] p-4 space-y-1.5 text-xs">
          <div className="flex items-center gap-1.5 font-sans font-semibold text-[#1967d2] uppercase text-[11px] tracking-wide">
            <Sparkles className="size-3.5 text-[#1a73e8]" /> In Plain English (What We Proved)
          </div>
          <p className="text-[#3c4043] text-[12.5px] leading-relaxed font-sans">
            {paper.plainExplanation || paper.summary}
          </p>
        </div>

        {/* Why This Matters to Everyday People */}
        {paper.whyItMatters && (
          <div className="rounded-xl border border-[#e8eaed] bg-[#f8f9fa] p-3.5 text-xs flex items-start gap-2.5">
            <ShieldCheck className="size-4 text-[#1e8e3e] shrink-0 mt-0.5" />
            <div className="text-[12px] text-[#5f6368] font-sans leading-relaxed">
              <strong className="text-[#202124]">Why It Matters: </strong>
              {paper.whyItMatters}
            </div>
          </div>
        )}

        {/* Dataset Scale Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {paper.datasetMetrics.map((m) => (
            <span
              key={m.label}
              className="rounded-full border border-[#dadce0] bg-[#f8f9fa] px-3 py-1 text-[11px] font-sans text-[#3c4043]"
            >
              <strong className="text-[#1a73e8] font-semibold">{m.value}</strong>{" "}
              <span className="text-[#5f6368]">{m.label}</span>
            </span>
          ))}
        </div>

        {/* Macro Hypotheses Pills */}
        <div className="space-y-1.5 pt-1">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#5f6368] flex items-center gap-1.5">
            <Sparkles className="size-3 text-[#1a73e8]" /> Verified Findings:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {paper.hypotheses.map((h) => (
              <span
                key={h.id}
                className="rounded-full border border-[#e8eaed] bg-white px-2.5 py-0.5 font-mono text-[11px] text-[#3c4043]"
              >
                <strong className="text-[#1a73e8] mr-1">{h.id}:</strong>
                {h.tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 md:p-7 pt-4 border-t border-[#e1e6ec] bg-[#fafbfc]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <Button
              className="rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-medium px-4 h-9 shadow-xs"
              asChild
            >
              <Link
                to="/research/$paperId"
                params={{ paperId: paper.slug }}
                // @ts-expect-error search view param
                search={{ view: "original" }}
              >
                <FileText className="mr-1.5 size-3.5" /> Read arXiv Paper
              </Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-[#dadce0] bg-white text-[#1a73e8] hover:bg-[#f1f3f4] text-xs font-medium px-4 h-9"
              asChild
            >
              <Link
                to="/research/$paperId"
                params={{ paperId: paper.slug }}
                // @ts-expect-error search view param
                search={{ view: "pdf" }}
              >
                <BookOpen className="mr-1.5 size-3.5" /> PDF
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-1.5">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyBibtex}
              title="Copy BibTeX Citation"
              className="rounded-full border-[#dadce0] bg-white text-[#3c4043] hover:bg-[#f1f3f4] h-8 px-3 font-sans text-xs"
            >
              <Copy className="size-3.5" />
              <span className="hidden sm:inline ml-1">BibTeX</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadPdf}
              title="Download Camera-Ready PDF to your computer"
              className="rounded-full border-[#dadce0] bg-white text-[#1a73e8] hover:bg-[#f1f3f4] h-8 px-3 font-sans text-xs"
            >
              <Download className="size-3.5 mr-1" />
              <span>Save PDF</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
