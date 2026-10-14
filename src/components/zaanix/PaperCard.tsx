import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Copy, Download, FileText, Sparkles } from "lucide-react";
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
    <div className="glass spotlight rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-primary/50 flex flex-col justify-between">
      <div className="space-y-4">
        {/* Category & Status Header */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary font-mono text-[11px]">
              {paper.category}
            </Badge>
            <span className="font-mono text-xs text-muted-foreground">
              {paper.arxivId}
            </span>
          </div>
          <span className="rounded-full border border-success/30 bg-success/10 px-2.5 py-0.5 font-mono text-[10px] text-success">
            ● {paper.status}
          </span>
        </div>

        {/* Paper Title & Subtitle */}
        <div>
          <Link
            to="/research/$paperId"
            params={{ paperId: paper.slug }}
            className="group block"
          >
            <h3 className="font-display text-xl md:text-2xl font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
              {paper.title}
            </h3>
          </Link>
          <p className="mt-1.5 text-sm font-medium text-muted-foreground">
            {paper.subtitle}
          </p>
        </div>

        {/* Dataset Scale Badges */}
        <div className="flex flex-wrap gap-2 pt-1">
          {paper.datasetMetrics.map((m) => (
            <div
              key={m.label}
              className="rounded-md border border-border/70 bg-background/50 px-2.5 py-1 text-xs font-mono"
            >
              <span className="text-primary font-semibold">{m.value}</span>{" "}
              <span className="text-muted-foreground">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Executive Summary */}
        <p className="text-sm leading-relaxed text-muted-foreground/90 line-clamp-3">
          {paper.summary}
        </p>

        {/* Macro Hypotheses Pills */}
        <div className="space-y-2 pt-1">
          <p className="font-mono text-[11px] font-semibold uppercase text-muted-foreground flex items-center gap-1.5">
            <Sparkles className="size-3 text-primary" /> Proven Hypotheses:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {paper.hypotheses.map((h) => (
              <span
                key={h.id}
                className="rounded-md border border-border bg-secondary/40 px-2 py-0.5 font-mono text-[11px] text-foreground/80"
              >
                <strong className="text-primary mr-1">{h.id}:</strong>
                {h.tag}
              </span>
            ))}
          </div>
        </div>

        {/* Top Benefit Callout */}
        {paper.benefits[0] && (
          <div className="rounded-lg border border-primary/20 bg-primary/5 p-3 text-xs">
            <span className="font-mono font-semibold text-primary">
              Impact ({paper.benefits[0].audience}):
            </span>{" "}
            <span className="text-muted-foreground">
              {paper.benefits[0].takeaway}
            </span>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="mt-6 pt-5 border-t border-border/60 flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="glow" size="sm" asChild>
              <Link
                to="/research/$paperId"
                params={{ paperId: paper.slug }}
                // @ts-expect-error search view param
                search={{ view: "original" }}
              >
                <FileText className="mr-1.5 size-3.5" /> Read arXiv Paper
              </Link>
            </Button>
            <Button variant="glass" size="sm" asChild>
              <Link
                to="/research/$paperId"
                params={{ paperId: paper.slug }}
                // @ts-expect-error search view param
                search={{ view: "pdf" }}
              >
                <BookOpen className="mr-1.5 size-3.5" /> PDF Viewer
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-1.5">
            <Button
              variant="glass"
              size="sm"
              onClick={handleCopyBibtex}
              title="Copy BibTeX Citation"
              className="h-8 px-2.5 font-mono text-xs"
            >
              <Copy className="size-3.5" />
              <span className="hidden sm:inline ml-1">BibTeX</span>
            </Button>
            <Button
              variant="glass"
              size="sm"
              onClick={handleDownloadPdf}
              title="Download Camera-Ready PDF to your computer"
              className="h-8 px-2.5 font-mono text-xs text-primary hover:text-primary"
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
