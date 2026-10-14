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
    <div className="min-h-screen bg-white text-[#202124] font-sans">
      <GlobalNav />

      <main className="pt-24 pb-20">
        {/* Page Hero - Google Research Publications Header */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#dadce0] bg-[#f8f9fa] px-3.5 py-1 text-xs font-medium text-[#1a73e8] font-sans">
                <Sparkles className="size-3" /> Publications &amp; Preprints
              </span>
              <span className="font-sans text-xs text-[#5f6368]">
                Plain English for Everyone • Mathematical Rigor for Science
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#202124] leading-[1.08]">
              Understand Frontier Research Across <span className="text-[#1a73e8]">Every Industry.</span>
            </h1>

            <p className="text-base md:text-lg text-[#5f6368] font-sans leading-relaxed">
              We believe scientific discoveries shouldn&apos;t be trapped behind academic jargon. Browse empirical research across Healthcare, Aviation, Clean Energy, Global Finance, AI Economics, and Robotics—written in clear English alongside peer-ready preprints.
            </p>

            {/* Explainer Pillar Chips - Google Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="rounded-full border border-[#dadce0] bg-[#f8f9fa] px-3.5 py-1 font-sans text-xs text-[#3c4043] flex items-center gap-1.5">
                <Sparkles className="size-3 text-[#1a73e8]" /> Plain English Explanations
              </span>
              <span className="rounded-full border border-[#dadce0] bg-[#f8f9fa] px-3.5 py-1 font-sans text-xs text-[#3c4043] flex items-center gap-1.5">
                <FileText className="size-3 text-[#1a73e8]" /> arXiv Preprints &amp; PDF Viewers
              </span>
              <span className="rounded-full border border-[#dadce0] bg-[#f8f9fa] px-3.5 py-1 font-sans text-xs text-[#3c4043] flex items-center gap-1.5">
                <Database className="size-3 text-[#1a73e8]" /> DuckDB Lakehouse Telemetry
              </span>
              <span className="rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1 font-sans text-xs text-emerald-800 flex items-center gap-1.5">
                <ShieldCheck className="size-3 text-emerald-600" /> Continuous Telemetry Ingestion
              </span>
            </div>
          </div>

          {/* Search & Filter Bar - Google Research Style */}
          <div className="mt-10 space-y-4">
            {/* Search Input - Fully Rounded Pill */}
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-[#5f6368]" />
              <Input
                type="text"
                placeholder="Search any topic (e.g. 'hospital', 'flight delays', 'battery', 'stocks', 'ai costs')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 pr-16 h-12 rounded-full bg-[#f8f9fa] border border-[#dadce0] text-[#202124] text-sm shadow-xs focus:border-[#1a73e8] focus:bg-white placeholder:text-[#80868b] transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-sans text-[#5f6368] hover:text-[#202124] bg-[#e8eaed] hover:bg-[#dadce0] px-2.5 py-1 rounded-full transition-colors"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills - Google Research Chips */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-1.5 text-xs font-sans font-medium text-[#5f6368]">
                <Filter className="size-3 text-[#1a73e8]" /> Filter by Industry:
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {researchCategories.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`rounded-full px-4 py-2 font-sans text-xs transition-all flex items-center gap-2 ${
                        isActive
                          ? "bg-[#e8f0fe] text-[#1967d2] font-semibold border border-[#1a73e8]"
                          : "border border-[#dadce0] bg-white text-[#5f6368] hover:bg-[#f1f3f4] hover:text-[#202124]"
                      }`}
                    >
                      <span>{cat.label}</span>
                      {"badge" in cat ? (
                        <span className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                          isActive 
                            ? "bg-amber-200 text-amber-900" 
                            : "bg-amber-100 text-amber-800"
                        }`}>
                          {cat.badge}
                        </span>
                      ) : (
                        <span className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                          isActive 
                            ? "bg-[#d2e3fc] text-[#1967d2]" 
                            : "bg-[#f1f3f4] text-[#5f6368]"
                        }`}>
                          {cat.count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Active Category Description Banner */}
              {activeCategoryMeta && (
                <div className="pt-2 text-xs font-sans text-[#5f6368] flex items-center gap-2">
                  <span className="text-[#202124] font-medium">{activeCategoryMeta.label}:</span>
                  <span>{activeCategoryMeta.description}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Results Bar */}
        <section className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#e1e6ec]">
            <p className="font-mono text-xs text-slate-600">
              Showing <strong className="text-slate-900">{totalResults}</strong> research items (
              <span className="text-blue-700 font-semibold">{filteredPapers.length} camera-ready</span> +{" "}
              <span className="text-amber-800 font-semibold">{filteredPipelinePapers.length} in telemetry ingestion</span>)
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-600">
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-emerald-600" />
                <span>Camera-Ready Preprints Available</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-amber-500" />
                <span>Active Telemetry Streams</span>
              </span>
            </div>
          </div>
        </section>

        {/* Section 1: Camera-Ready Preprints */}
        {filteredPapers.length > 0 && (
          <section className="mx-auto max-w-7xl px-6 py-8">
            <div className="space-y-1.5 mb-8">
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-emerald-300 bg-emerald-50 text-emerald-800 font-sans text-xs font-medium px-3 py-0.5">
                  Camera-Ready Preprints
                </span>
                <span className="font-sans text-xs text-[#5f6368]">
                  Complete with LaTeX arXiv Reader, KaTeX Math &amp; PDF Document Viewer
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-[#202124]">
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
          <section className="mx-auto max-w-7xl px-6 py-12">
            <div className="space-y-1.5 mb-8">
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-amber-300 bg-amber-50 text-amber-800 font-sans text-xs font-semibold px-3 py-0.5">
                  Active Research Pipelines
                </span>
                <span className="font-sans text-xs text-[#5f6368] flex items-center gap-1.5">
                  <Activity className="size-3 text-amber-600" /> Continuous Telemetry Ingestion In Progress
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-[#202124]">
                Upcoming Industry Preprints
              </h2>
              <p className="text-sm text-[#5f6368] font-sans max-w-3xl leading-relaxed">
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
          <section className="mx-auto max-w-7xl px-6 py-12">
            <div className="rounded-2xl border border-[#e1e6ec] bg-white p-12 text-center space-y-4 max-w-2xl mx-auto shadow-xs">
              <FileText className="mx-auto size-12 text-[#80868b]" />
              <h3 className="font-display text-lg font-medium text-[#202124]">
                No matching research found
              </h3>
              <p className="text-sm text-[#5f6368] font-sans leading-relaxed">
                No research papers or upcoming industry pipelines matched your search &quot;{searchQuery}&quot; in the &quot;{activeCategoryMeta?.label || selectedCategory}&quot; category.
              </p>
              <div className="pt-2 flex justify-center gap-2">
                <Button
                  className="rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white px-5 h-9 text-xs font-medium"
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
        <section className="mx-auto max-w-7xl px-6 pt-16">
          <div className="rounded-3xl p-8 md:p-12 border border-[#e1e6ec] bg-[#f8f9fa] shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <span className="font-sans text-xs text-[#1a73e8] font-medium flex items-center gap-1.5 uppercase tracking-wider">
                <Sparkles className="size-3.5" /> How We Make Research Accessible
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-[#202124]">
                Discover the Autonomous Agent Pipeline
              </h2>
              <p className="text-sm text-[#5f6368] font-sans leading-relaxed">
                Explore how ZannixLabs synthesizes real-world data lakehouses into formal mathematical preprints with automated Welch t-tests, literature cross-examination, and plain-English translations for the public.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button
                size="lg"
                className="rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white px-6 h-11 text-xs font-medium shadow-xs"
                asChild
              >
                <Link to="/paradigm">
                  Explore Methodology <ArrowRight className="ml-1.5 size-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-[#dadce0] bg-white text-[#1a73e8] hover:bg-[#f1f3f4] px-6 h-11 text-xs font-medium"
                asChild
              >
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
