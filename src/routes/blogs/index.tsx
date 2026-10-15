import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Sparkles, BookOpen, Layers, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlobalNav } from "@/components/zaanix/GlobalNav";
import { GlobalFooter } from "@/components/zaanix/GlobalFooter";
import { BlogCard } from "@/components/zaanix/BlogCard";
import { blogPosts, blogCategories, type BlogPost } from "@/components/zaanix/blogData";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title: "Published Blogs — Applied AI Research & Empirical Science | ZannixLabs" },
      {
        name: "description",
        content:
          "In-depth research dispatches, interactive dashboards, live charts, and executable code across AI labor economics, healthcare, inference systems, and safety.",
      },
      { property: "og:title", content: "Published Blogs — ZannixLabs" },
      {
        property: "og:description",
        content:
          "Detailed blog posts with embedded dashboards, code snippets, and charts for all ZannixLabs research papers.",
      },
    ],
  }),
  component: BlogCatalogPage,
});

export default function BlogCatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post: BlogPost) => {
      const categoryMatch =
        selectedCategory === "all" || post.categoryId === selectedCategory;

      if (!categoryMatch) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();

      return (
        post.title.toLowerCase().includes(q) ||
        post.subtitle.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#202124] font-sans selection:bg-[#e8f0fe] selection:text-[#1967d2]">
      <GlobalNav />

      <main className="pt-24 pb-20">
        {/* Header Hero Section */}
        <section className="border-b border-[#e1e6ec] bg-white px-6 py-12 md:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 md:max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#dadce0] bg-[#f8f9fa] px-3.5 py-1 text-xs font-medium text-[#3c4043] w-fit">
                <Sparkles className="size-3.5 text-[#1a73e8]" />
                <span>Editorial Research & Empirical Dispatches</span>
              </div>

              <h1 className="font-display text-4xl font-bold tracking-tight text-[#202124] sm:text-5xl">
                Published Blogs
              </h1>

              <p className="font-sans text-base text-[#5f6368] leading-relaxed sm:text-lg">
                Translating rigorous academic preprints into accessible, interactive stories. Every post features live telemetry dashboards, reproducible code, and publication-grade charts that can be shared across platforms.
              </p>
            </div>

            {/* Filter and Search Bar */}
            <div className="mt-8 flex flex-col gap-4 border-t border-[#f1f3f4] pt-6 sm:flex-row sm:items-center sm:justify-between">
              {/* Category pills */}
              <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1">
                {blogCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                      selectedCategory === cat.id
                        ? "bg-[#1a73e8] text-white shadow-2xs"
                        : "border border-[#dadce0] bg-white text-[#5f6368] hover:bg-[#f1f3f4] hover:text-[#202124]"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search field */}
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#5f6368]" />
                <Input
                  type="text"
                  placeholder="Search articles, keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-full border-[#dadce0] bg-[#f8f9fa] pl-9 text-xs focus-visible:bg-white focus-visible:ring-[#1a73e8]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          {filteredPosts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-[#dadce0] bg-white p-12 text-center">
              <BookOpen className="mx-auto size-10 text-[#5f6368]" />
              <h3 className="mt-4 font-display text-lg font-bold text-[#202124]">No blog posts found</h3>
              <p className="mt-1 text-sm text-[#5f6368]">
                Try adjusting your search criteria or filter to browse other scientific topics.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4 rounded-full border-[#dadce0]"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
              >
                Clear all filters
              </Button>
            </div>
          ) : (
            <div className="space-y-12">
              {/* Featured Post */}
              {featuredPost && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1a73e8]">
                    <Sparkles className="size-3.5" />
                    <span>Lead Investigation</span>
                  </div>
                  <BlogCard post={featuredPost} featured={true} />
                </div>
              )}

              {/* Remaining Posts Grid */}
              {remainingPosts.length > 0 && (
                <div className="space-y-6 pt-6 border-t border-[#e1e6ec]">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display text-2xl font-bold text-[#202124]">
                      All Published Dispatches
                    </h2>
                    <span className="text-xs text-[#5f6368]">
                      Showing {remainingPosts.length} {remainingPosts.length === 1 ? "article" : "articles"}
                    </span>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {remainingPosts.map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Bottom callout: Explore Raw Preprints & Reproducibility */}
          <div className="mt-16 rounded-3xl border border-[#dadce0] bg-white p-8 md:p-10 shadow-xs">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2 md:max-w-2xl">
                <Badge className="bg-[#e8f0fe] text-[#1967d2] hover:bg-[#e8f0fe] border-[#dadce0] font-sans text-xs">
                  Academic Open Science
                </Badge>
                <h3 className="font-display text-2xl font-bold text-[#202124]">
                  Looking for the Original Mathematical Preprints?
                </h3>
                <p className="font-sans text-sm text-[#5f6368] leading-relaxed">
                  Every blog post is accompanied by a formal 8–14+ page academic preprint, an executable Jupyter Notebook, and a signed SHA256 reproducibility archive with raw Parquet lakehouse marts.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button className="rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white" asChild>
                  <Link to="/research">
                    <BookOpen className="mr-1.5 size-4" />
                    Browse Research Papers
                  </Link>
                </Button>
                <Button variant="outline" className="rounded-full border-[#dadce0] text-[#3c4043]" asChild>
                  <Link to="/observatory">
                    <Layers className="mr-1.5 size-4" />
                    Interactive Observatory
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter />
    </div>
  );
}
