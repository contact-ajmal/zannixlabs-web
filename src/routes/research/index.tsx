import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Filter, Search, Sparkles, FileText, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlobalNav } from "@/components/zaanix/GlobalNav";
import { GlobalFooter } from "@/components/zaanix/GlobalFooter";
import { PaperCard } from "@/components/zaanix/PaperCard";
import { papers, researchCategories } from "@/components/zaanix/researchData";

export const Route = createFileRoute("/research/")({
  head: () => ({
    meta: [
      { title: "Research Catalog — ZannixLabs Preprints & Discoveries" },
      {
        name: "description",
        content:
          "Browse camera-ready empirical research preprints from ZannixLabs spanning LLM Economics, Leaderboard Evaluation Confounders, and Aviation ADS-B Telemetry.",
      },
    ],
  }),
  component: ResearchCatalogPage,
});

function ResearchCatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPapers = useMemo(() => {
    return papers.filter((paper) => {
      // Category match
      const categoryMatch =
        selectedCategory === "all" ||
        (selectedCategory === "llm-economics" && paper.category === "LLM Economics") ||
        (selectedCategory === "evaluation-science" && paper.category === "Evaluation Science") ||
        (selectedCategory === "aerospace" && paper.category === "Aerospace Telemetry");

      if (!categoryMatch) return false;

      // Search query match
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const inTitle = paper.title.toLowerCase().includes(q);
      const inSubtitle = paper.subtitle.toLowerCase().includes(q);
      const inSummary = paper.summary.toLowerCase().includes(q);
      const inAuthor = paper.author.toLowerCase().includes(q);
      const inHypotheses = paper.hypotheses.some(
        (h) => h.title.toLowerCase().includes(q) || h.tag.toLowerCase().includes(q)
      );

      return inTitle || inSubtitle || inSummary || inAuthor || inHypotheses;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="dark min-h-screen bg-background bg-mesh text-foreground">
      <GlobalNav />

      <main className="pt-24 pb-20">
        {/* Page Hero */}
        <section className="mx-auto max-w-7xl px-5 py-12 md:py-16">
          <div className="max-w-4xl space-y-5">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary font-mono text-xs">
                RESEARCH ARCHIVE
              </Badge>
              <span className="font-mono text-xs text-muted-foreground">
                Peer-Ready Empirical Preprints
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.08]">
              Empirical Discoveries Across <span className="text-gradient">Frontier Domains.</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Every paper in this catalog was synthesized end-to-end via our autonomous AI agentic pipeline—from continuous lakehouse telemetry ingestion to formal LaTeX hypothesis proof and camera-ready artifact delivery.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="mt-10 space-y-4">
            {/* Search Input */}
            <div className="relative max-w-xl">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by title, hypothesis, author, or keyword (e.g. 'Pareto', 'Refusal', 'OpenSky')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-11 bg-glass border-border text-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-muted-foreground hover:text-foreground"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
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
                      <span className="rounded-full bg-violet/30 px-1.5 py-0.2 text-[10px] text-primary">
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
          </div>
        </section>

        {/* Papers Listing Grid */}
        <section className="mx-auto max-w-7xl px-5 py-6">
          <div className="flex items-center justify-between pb-6 border-b border-border/60">
            <p className="font-mono text-xs text-muted-foreground">
              Showing <strong className="text-foreground">{filteredPapers.length}</strong> of{" "}
              {papers.length} peer-ready preprints
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="size-2 rounded-full bg-success" />
              <span>All Preprints Camera-Ready</span>
            </div>
          </div>

          {filteredPapers.length > 0 ? (
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {filteredPapers.map((paper) => (
                <PaperCard key={paper.id} paper={paper} />
              ))}
            </div>
          ) : (
            <div className="glass mt-8 rounded-2xl p-12 text-center space-y-4">
              <FileText className="mx-auto size-12 text-muted-foreground/60" />
              <h3 className="font-display text-lg font-semibold text-foreground">
                No matching preprints found
              </h3>
              <p className="max-w-md mx-auto text-sm text-muted-foreground">
                No papers matched your current filter &quot;{searchQuery}&quot;. Try adjusting your search query or reset category filters.
              </p>
              <Button
                variant="glass"
                size="sm"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
              >
                Reset All Filters
              </Button>
            </div>
          )}
        </section>

        {/* Research Methodology CTA */}
        <section className="mx-auto max-w-7xl px-5 pt-16">
          <div className="glass rounded-3xl p-8 md:p-12 border-primary/30 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="font-mono text-xs text-primary font-semibold">
                HOW THIS RESEARCH IS CREATED
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Discover the Autonomous Agent Pipeline
              </h2>
              <p className="text-sm text-muted-foreground">
                Explore how ZannixLabs synthesizes real-world data lakehouses into formal mathematical preprints with automated Welch t-tests and literature cross-examination.
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
