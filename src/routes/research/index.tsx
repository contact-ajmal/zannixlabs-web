import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  Filter,
  Search,
  Sparkles,
  FileText,
  ArrowRight,
  Database,
  ShieldCheck,
  Activity,
  Layers,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlobalNav } from "@/components/zaanix/GlobalNav";
import { GlobalFooter } from "@/components/zaanix/GlobalFooter";
import { PaperCard } from "@/components/zaanix/PaperCard";
import { PipelineCard } from "@/components/zaanix/PipelineCard";
import {
  papers,
  pipelinePapers,
  researchCategories,
  type ResearchPaper,
  type PipelinePaper,
} from "@/components/zaanix/researchData";

export const Route = createFileRoute("/research/")({
  head: () => ({
    meta: [
      { title: "Research Across Frontier Industries — Plain English & Academic Preprints | ZannixLabs" },
      {
        name: "description",
        content:
          "Search and understand empirical research across Healthcare, Aviation, Energy, Finance, AI Economics, and Robotics. Written in plain English for everyone with original academic papers for researchers.",
      },
    ],
  }),
  component: ResearchCatalogPage,
});

export default function ResearchCatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter camera-ready papers
  const filteredPapers = useMemo(() => {
    return papers.filter((paper: ResearchPaper) => {
      // Category match
      const categoryMatch =
        selectedCategory === "all" || paper.categoryId === selectedCategory;

      if (!categoryMatch) return false;

      // Search query match across plain English and technical terminology
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();

      const inPlainTitle = paper.plainTitle?.toLowerCase().includes(q) ?? false;
      const inPlainSubtitle = paper.plainSubtitle?.toLowerCase().includes(q) ?? false;
      const inPlainExplanation = paper.plainExplanation?.toLowerCase().includes(q) ?? false;
      const inWhyItMatters = paper.whyItMatters?.toLowerCase().includes(q) ?? false;
      const inIndustry = paper.industry?.toLowerCase().includes(q) ?? false;
      const inTitle = paper.title.toLowerCase().includes(q);
      const inSubtitle = paper.subtitle.toLowerCase().includes(q);
      const inSummary = paper.summary.toLowerCase().includes(q);
      const inAuthor = paper.author.toLowerCase().includes(q);
      const inHypotheses = paper.hypotheses.some(
        (h) =>
          h.title.toLowerCase().includes(q) ||
          h.tag.toLowerCase().includes(q) ||
          h.description.toLowerCase().includes(q)
      );

      return (
        inPlainTitle ||
        inPlainSubtitle ||
        inPlainExplanation ||
        inWhyItMatters ||
        inIndustry ||
        inTitle ||
        inSubtitle ||
        inSummary ||
        inAuthor ||
        inHypotheses
      );
    });
  }, [selectedCategory, searchQuery]);

  // Filter active research pipeline projects
  const filteredPipelinePapers = useMemo(() => {
    return pipelinePapers.filter((p: PipelinePaper) => {
      // Category match
      const categoryMatch =
        selectedCategory === "all" || p.categoryId === selectedCategory;

      if (!categoryMatch) return false;

      // Search query match
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();

      const inPlainTitle = p.plainTitle.toLowerCase().includes(q);
      const inPlainSubtitle = p.plainSubtitle.toLowerCase().includes(q);
      const inPlainExplanation = p.plainExplanation.toLowerCase().includes(q);
      const inWhyItMatters = p.whyItMatters.toLowerCase().includes(q);
      const inWorkingTitle = p.academicWorkingTitle.toLowerCase().includes(q);
      const inIndustry = p.industry.toLowerCase().includes(q);
      const inCategory = p.category.toLowerCase().includes(q);
      const inLakehouse = p.targetLakehouse.toLowerCase().includes(q);

      return (
        inPlainTitle ||
        inPlainSubtitle ||
        inPlainExplanation ||
        inWhyItMatters ||
        inWorkingTitle ||
        inIndustry ||
        inCategory ||
        inLakehouse
      );
    });
  }, [selectedCategory, searchQuery]);

  const activeCategoryMeta = researchCategories.find((c) => c.id === selectedCategory);
  const totalResults = filteredPapers.length + filteredPipelinePapers.length;

  return (
    <div className="dark min-h-screen bg-background bg-mesh text-foreground">
      <GlobalNav />

      <main className="pt-24 pb-20">
        {/* Page Hero */}
        <section className="mx-auto max-w-7xl px-5 py-12 md:py-16">
          <div className="max-w-4xl space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary font-mono text-xs">
                RESEARCH ACROSS INDUSTRIES
              </Badge>
              <span className="font-mono text-xs text-muted-foreground flex items-center gap-1.5">
                <Sparkles className="size-3.5 text-primary" /> Plain English for Everyone • Mathematical Rigor for Science
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.08]">
              Understand Frontier Research Happening in <span className="text-gradient">Every Industry.</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We believe scientific discoveries shouldn&apos;t be trapped behind academic jargon. Browse empirical research across Healthcare, Aviation, Clean Energy, Global Finance, AI Economics, and Robotics—written in clear, everyday English so everyone can understand what was proved and why it matters, alongside the original peer-ready academic papers.
            </p>

            {/* Explainer Pillar Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="rounded-full border border-border/80 bg-secondary/30 px-3 py-1 font-mono text-xs text-foreground/80 flex items-center gap-1.5">
                <Sparkles className="size-3 text-primary" /> Plain English Explanations
              </span>
              <span className="rounded-full border border-border/80 bg-secondary/30 px-3 py-1 font-mono text-xs text-foreground/80 flex items-center gap-1.5">
                <FileText className="size-3 text-primary" /> Original arXiv Paper & PDF Viewers
              </span>
              <span className="rounded-full border border-border/80 bg-secondary/30 px-3 py-1 font-mono text-xs text-foreground/80 flex items-center gap-1.5">
                <Database className="size-3 text-primary" /> Real-World Data Lakehouse Telemetry
              </span>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck className="size-3 text-emerald-400" /> Continuous Telemetry Ingestion
              </span>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="mt-10 space-y-4">
            {/* Search Input */}
            <div className="relative max-w-2xl">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search any topic in plain English (e.g. 'hospital', 'flight delays', 'battery', 'stocks', 'ai costs')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-16 h-12 bg-glass border-border text-sm shadow-xs focus:border-primary"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-muted-foreground hover:text-foreground bg-secondary/60 px-2 py-0.5 rounded"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                <Filter className="size-3 text-primary" /> Filter by Industry:
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {researchCategories.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`rounded-full border px-4 py-2 font-mono text-xs transition-all flex items-center gap-2 ${
                        isActive
                          ? "border-primary bg-primary/15 text-primary shadow-xs font-semibold"
                          : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      <span>{cat.label}</span>
                      {"badge" in cat ? (
                        <span className="rounded-full bg-amber-500/20 px-1.5 py-0.2 text-[10px] text-amber-400 border border-amber-500/30">
                          {cat.badge}
                        </span>
                      ) : (
                        <span className="rounded-full bg-secondary/80 px-1.5 py-0.2 text-[10px] text-muted-foreground">
                          {cat.count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Active Category Description Banner */}
              {activeCategoryMeta && (
                <div className="pt-2 text-xs font-mono text-muted-foreground flex items-center gap-2">
                  <span className="text-foreground font-semibold">{activeCategoryMeta.label}:</span>
                  <span>{activeCategoryMeta.description}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Results Bar */}
        <section className="mx-auto max-w-7xl px-5 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border/60">
            <p className="font-mono text-xs text-muted-foreground">
              Showing <strong className="text-foreground">{totalResults}</strong> research items (
              <span className="text-primary font-semibold">{filteredPapers.length} camera-ready</span> +{" "}
              <span className="text-amber-400 font-semibold">{filteredPipelinePapers.length} in telemetry ingestion</span>)
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-success" />
                <span>Camera-Ready Preprints Available</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-amber-400" />
                <span>Active Telemetry Streams</span>
              </span>
            </div>
          </div>
        </section>

        {/* Section 1: Camera-Ready Preprints */}
        {filteredPapers.length > 0 && (
          <section className="mx-auto max-w-7xl px-5 py-8">
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="border-success/40 bg-success/10 text-success font-mono text-xs">
                  CAMERA-READY PREPRINTS
                </Badge>
                <span className="font-mono text-xs text-muted-foreground">
                  Complete with LaTeX arXiv Reader, KaTeX Math & PDF Document Viewer
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Published Empirical Discoveries
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {filteredPapers.map((paper) => (
                <PaperCard key={paper.id} paper={paper} />
              ))}
            </div>
          </section>
        )}

        {/* Section 2: Active Research Pipelines */}
        {filteredPipelinePapers.length > 0 && (
          <section className="mx-auto max-w-7xl px-5 py-10">
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="border-amber-500/40 bg-amber-500/10 text-amber-400 font-mono text-xs">
                  ACTIVE RESEARCH PIPELINES
                </Badge>
                <span className="font-mono text-xs text-muted-foreground flex items-center gap-1.5">
                  <Activity className="size-3 text-amber-400" /> Continuous Telemetry Ingestion In Progress
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Upcoming Industry Preprints (Under Autonomous Telemetry Ingestion)
              </h2>
              <p className="text-sm text-muted-foreground max-w-3xl">
                Our AI agents are currently ingesting hundreds of millions of real-world telemetry rows across Healthcare, Clean Energy, Global Finance, and Industrial Robotics. Here is what they are investigating in plain English, and what we expect to prove. Subscribe to receive the camera-ready preprint as soon as peer-proof synthesis completes.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {filteredPipelinePapers.map((pipelinePaper) => (
                <PipelineCard key={pipelinePaper.id} paper={pipelinePaper} />
              ))}
            </div>
          </section>
        )}

        {/* Empty State */}
        {totalResults === 0 && (
          <section className="mx-auto max-w-7xl px-5 py-12">
            <div className="glass rounded-2xl p-12 text-center space-y-4 max-w-2xl mx-auto">
              <FileText className="mx-auto size-12 text-muted-foreground/60" />
              <h3 className="font-display text-lg font-semibold text-foreground">
                No matching research found
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No research papers or upcoming industry pipelines matched your search &quot;{searchQuery}&quot; in the &quot;{activeCategoryMeta?.label || selectedCategory}&quot; category.
              </p>
              <div className="pt-2 flex justify-center gap-2">
                <Button
                  variant="glow"
                  size="sm"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                >
                  Reset All Filters
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Research Methodology CTA */}
        <section className="mx-auto max-w-7xl px-5 pt-16">
          <div className="glass rounded-3xl p-8 md:p-12 border-primary/30 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="font-mono text-xs text-primary font-semibold flex items-center gap-1.5">
                <Sparkles className="size-3.5" /> HOW WE MAKE RESEARCH ACCESSIBLE
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Discover the Autonomous Agent Pipeline
              </h2>
              <p className="text-sm text-muted-foreground">
                Explore how ZannixLabs synthesizes real-world data lakehouses into formal mathematical preprints with automated Welch t-tests, literature cross-examination, and plain-English translations for the public.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button variant="glow" size="lg" asChild>
                <Link to="/paradigm">
                  Explore Paradigm <ArrowRight className="ml-1.5 size-4" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/observatory">
                  Live Observatory
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter />
    </div>
  );
}
