import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Copy, Download, FileText, Layers, Package, Sparkles, Table as TableIcon } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { GlobalNav } from "@/components/zaanix/GlobalNav";
import { GlobalFooter } from "@/components/zaanix/GlobalFooter";
import { MathCard } from "@/components/zaanix/MathCard";
import { papers } from "@/components/zaanix/researchData";

export const Route = createFileRoute("/research/$paperId")({
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
    <div className="dark min-h-screen bg-background bg-mesh text-foreground">
      <GlobalNav />
      <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 text-center">
        <h1 className="font-display text-4xl font-bold">Paper Not Found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
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
  const [copied, setCopied] = useState(false);

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

  const handleDownloadPdf = () => {
    toast.info("Downloading camera-ready PDF", {
      description: `Accessing camera-ready preprint for ${paper.arxivId}.`,
    });
  };

  const handleDownloadTar = () => {
    toast.info("Downloading reproducible LaTeX bundle (.tar.gz)", {
      description: "Includes main.tex, figures, and bibliography.",
    });
  };

  return (
    <div className="dark min-h-screen bg-background bg-mesh text-foreground">
      <GlobalNav />

      <main className="pt-24 pb-20">
        {/* Paper Header Section */}
        <section className="mx-auto max-w-5xl px-5 py-10 md:py-14 space-y-6">
          {/* Breadcrumb Back Link */}
          <Link
            to="/research"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="size-3.5" /> Back to Research Catalog
          </Link>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary font-mono text-xs">
              {paper.category}
            </Badge>
            <span className="font-mono text-xs text-muted-foreground">
              {paper.arxivId}
            </span>
            <span className="rounded-full border border-success/30 bg-success/10 px-2.5 py-0.5 font-mono text-[11px] text-success">
              ● {paper.status}
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              {paper.date}
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-3">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.12]">
              {paper.title}
            </h1>
            <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed">
              {paper.subtitle}
            </p>
          </div>

          {/* Author & Lab */}
          <div className="flex items-center gap-3 pt-2 text-sm text-muted-foreground font-mono">
            <span className="text-foreground font-semibold">{paper.author}</span>
            <span>•</span>
            <span>{paper.institution}</span>
          </div>

          {/* Dataset Scale Strip */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 pt-4">
            {paper.datasetMetrics.map((m) => (
              <div key={m.label} className="rounded-xl border border-border/80 bg-background/60 p-3.5 text-center">
                <p className="font-display text-xl font-bold text-primary">{m.value}</p>
                <p className="font-mono text-[11px] text-muted-foreground mt-0.5">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/60">
            <Button variant="glow" onClick={handleDownloadPdf}>
              <Download className="mr-2 size-4" /> Download Camera-Ready PDF
            </Button>
            <Button variant="glass" onClick={handleDownloadTar}>
              <Package className="mr-2 size-4" /> arXiv Package (.tar.gz)
            </Button>
            <Button variant="glass" onClick={handleCopyBibtex}>
              <Copy className="mr-2 size-4" /> {copied ? "Copied!" : "Copy BibTeX Citation"}
            </Button>
          </div>
        </section>

        {/* Section 1: Executive Synthesis & Key Findings */}
        <section className="mx-auto max-w-5xl px-5 py-8">
          <div className="glass rounded-2xl p-6 md:p-8 space-y-4 border-primary/30 bg-primary/5">
            <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="size-4" />
              <span>EXECUTIVE BREAKTHROUGH &amp; DISCOVERY</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">
              What This Research Proves
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              {paper.executiveBreakthrough}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground/80 pt-2 border-t border-border/60">
              <strong className="text-foreground font-semibold">Abstract:</strong> {paper.summary}
            </p>
          </div>
        </section>

        {/* Section 2: Macro Hypotheses & KaTeX Mathematical Formulations */}
        <section className="mx-auto max-w-5xl px-5 py-10 space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-primary font-semibold uppercase tracking-widest">
              // EMPIRICAL RIGOR
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Macro Hypotheses &amp; Mathematical Specifications
            </h2>
            <p className="text-sm text-muted-foreground">
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
            <span className="font-mono text-xs text-primary font-semibold uppercase tracking-widest">
              // AGENTIC PROCESS
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              How the Autonomous Pipeline Conducted This Study
            </h2>
            <p className="text-sm text-muted-foreground">
              Trace the end-to-end autonomous research methodology used by ZannixLabs to ingest, clean, verify, and author this paper.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {paper.methodologyStages.map((st) => (
              <div key={st.stage} className="glass rounded-xl p-5 space-y-2 hover:border-primary/40 transition-colors">
                <span className="font-mono text-xs text-primary font-semibold">{st.stage}</span>
                <h3 className="font-display text-base font-semibold text-foreground">{st.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{st.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Industry Benefits & Practical Takeaways */}
        <section className="mx-auto max-w-5xl px-5 py-10 space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-primary font-semibold uppercase tracking-widest">
              // REAL-WORLD IMPACT
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Practical Benefits &amp; Strategic Applications
            </h2>
            <p className="text-sm text-muted-foreground">
              How engineering teams, researchers, and domain leaders can apply these empirical findings today.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {paper.benefits.map((b, i) => (
              <div key={i} className="glass rounded-xl p-5 space-y-3 border-l-2 border-l-primary">
                <p className="font-mono text-xs font-semibold text-primary uppercase">
                  {b.audience}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {b.takeaway}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Lakehouse Telemetry Data Tables */}
        <section className="mx-auto max-w-5xl px-5 py-10 space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-primary font-semibold uppercase tracking-widest">
              // LAKEHOUSE ARTIFACTS
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Data Governance &amp; Lakehouse Tables
            </h2>
            <p className="text-sm text-muted-foreground">
              Underlying analytical tables stored in the Zannix DuckDB lakehouse supporting 100% empirical reproducibility.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border bg-background/60">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3 font-mono text-xs text-primary bg-background/90">
              <TableIcon className="size-3.5" />
              <span>duckdb&gt; SELECT * FROM zannix_lakehouse_catalog WHERE paper_id = &apos;{paper.id}&apos;;</span>
            </div>
            <Table className="font-mono text-xs">
              <TableHeader>
                <TableRow>
                  <TableHead>Table Name</TableHead>
                  <TableHead className="text-right">Rows</TableHead>
                  <TableHead className="text-right">Cols</TableHead>
                  <TableHead className="text-right">Storage Size</TableHead>
                  <TableHead>Temporal Span / Cohort</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paper.telemetryTables.map((t) => (
                  <TableRow key={t.name}>
                    <TableCell className="font-semibold text-primary">{t.name}</TableCell>
                    <TableCell className="text-right">{t.rows}</TableCell>
                    <TableCell className="text-right">{t.cols}</TableCell>
                    <TableCell className="text-right">{t.size}</TableCell>
                    <TableCell className="text-muted-foreground">{t.span}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Section 6: BibTeX Citation */}
        <section className="mx-auto max-w-5xl px-5 py-8">
          <div className="relative rounded-2xl border border-border bg-background/80 p-6">
            <div className="flex items-center justify-between pb-3 border-b border-border/60">
              <span className="font-mono text-xs text-primary font-semibold">
                BibTeX Citation
              </span>
              <Button variant="glass" size="sm" onClick={handleCopyBibtex}>
                <Copy className="mr-1.5 size-3.5" />
                {copied ? "Copied" : "Copy Citation"}
              </Button>
            </div>
            <pre className="mt-4 overflow-x-auto font-mono text-xs leading-relaxed text-muted-foreground">
              <code>{paper.bibtex}</code>
            </pre>
          </div>
        </section>

        {/* Section 7: Next / Previous Paper Navigation */}
        <section className="mx-auto max-w-5xl px-5 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-8">
            {prevPaper ? (
              <Link
                to="/research/$paperId"
                params={{ paperId: prevPaper.slug }}
                className="glass rounded-xl p-4 flex items-center gap-3 max-w-sm hover:border-primary/50 transition-colors"
              >
                <ArrowLeft className="size-4 text-primary shrink-0" />
                <div>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase">Previous Preprint</span>
                  <p className="font-display text-sm font-semibold text-foreground line-clamp-1">{prevPaper.title}</p>
                </div>
              </Link>
            ) : <div />}

            {nextPaper && (
              <Link
                to="/research/$paperId"
                params={{ paperId: nextPaper.slug }}
                className="glass rounded-xl p-4 flex items-center gap-3 max-w-sm hover:border-primary/50 transition-colors text-right"
              >
                <div>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase">Next Preprint</span>
                  <p className="font-display text-sm font-semibold text-foreground line-clamp-1">{nextPaper.title}</p>
                </div>
                <ArrowRight className="size-4 text-primary shrink-0" />
              </Link>
            )}
          </div>
        </section>
      </main>

      <GlobalFooter />
    </div>
  );
}
