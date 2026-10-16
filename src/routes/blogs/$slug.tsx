import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Download,
  ExternalLink,
  FileText,
  Layers,
  Sparkles,
  TrendingUp,
  DollarSign,
  Activity,
  AlertTriangle,
  Server,
  Zap,
  ShieldCheck,
  BarChart3,
  RefreshCw,
  ShieldAlert,
  CheckCircle,
  Compass,
  Wind,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlobalNav } from "@/components/zaanix/GlobalNav";
import { GlobalFooter } from "@/components/zaanix/GlobalFooter";
import { BlogShareBar } from "@/components/zaanix/BlogShareBar";
import { BlogInteractiveChart } from "@/components/zaanix/BlogInteractiveChart";
import { BlogCodeCard } from "@/components/zaanix/BlogCodeCard";
import { blogPosts, type BlogPost } from "@/components/zaanix/blogData";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug || p.id === params.slug);
    if (!post) {
      throw notFound();
    }
    const nextPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);
    return { post, nextPosts };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.post) {
      return { meta: [{ title: "Blog Post Not Found — ZannixLabs" }] };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — ZannixLabs Blog` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:image", content: post.coverImage },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.excerpt },
      ],
    };
  },
  component: BlogPostDetailPage,
  notFoundComponent: BlogNotFound,
});

function BlogNotFound() {
  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#202124] font-sans">
      <GlobalNav />
      <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 text-center">
        <h1 className="font-display text-4xl font-bold text-[#202124]">Post Not Found</h1>
        <p className="mt-3 text-sm text-[#5f6368]">
          The requested blog post could not be located in our published archive.
        </p>
        <Button className="mt-6 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white" asChild>
          <Link to="/blogs">Back to Published Blogs</Link>
        </Button>
      </div>
      <GlobalFooter />
    </div>
  );
}

function getIcon(name: string) {
  switch (name) {
    case "TrendingUp":
      return <TrendingUp className="size-4 text-[#1a73e8]" />;
    case "DollarSign":
      return <DollarSign className="size-4 text-[#1e8e3e]" />;
    case "Sparkles":
      return <Sparkles className="size-4 text-[#1a73e8]" />;
    case "Activity":
      return <Activity className="size-4 text-[#ea4335]" />;
    case "AlertTriangle":
      return <AlertTriangle className="size-4 text-[#f9ab00]" />;
    case "Clock":
      return <Clock className="size-4 text-[#1a73e8]" />;
    case "Server":
      return <Server className="size-4 text-[#1a73e8]" />;
    case "Zap":
      return <Zap className="size-4 text-[#f9ab00]" />;
    case "ShieldCheck":
      return <ShieldCheck className="size-4 text-[#1e8e3e]" />;
    case "BarChart3":
      return <BarChart3 className="size-4 text-[#1a73e8]" />;
    case "RefreshCw":
      return <RefreshCw className="size-4 text-[#ea4335]" />;
    case "ShieldAlert":
      return <ShieldAlert className="size-4 text-[#ea4335]" />;
    case "CheckCircle":
      return <CheckCircle className="size-4 text-[#1e8e3e]" />;
    case "Compass":
      return <Compass className="size-4 text-[#1a73e8]" />;
    case "Wind":
      return <Wind className="size-4 text-[#1e8e3e]" />;
    default:
      return <Sparkles className="size-4 text-[#1a73e8]" />;
  }
}

export default function BlogPostDetailPage() {
  const { post, nextPosts } = Route.useLoaderData();
  const [activeDashboardOption, setActiveDashboardOption] = useState<string>(
    post.dashboard?.activeMetricOptions?.[0]?.id || "all"
  );

  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#202124] font-sans selection:bg-[#e8f0fe] selection:text-[#1967d2]">
      <GlobalNav />

      <main className="pt-24 pb-20">
        {/* Navigation Breadcrumb & Back button */}
        <div className="border-b border-[#e1e6ec] bg-white px-6 py-4">
          <div className="mx-auto flex max-w-5xl items-center justify-between">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5f6368] hover:text-[#1a73e8] transition-colors"
            >
              <ArrowLeft className="size-3.5" />
              Back to Published Blogs
            </Link>

            <div className="flex items-center gap-2">
              <span className="text-xs text-[#5f6368]">Share:</span>
              <BlogShareBar title={post.title} slug={post.slug} />
            </div>
          </div>
        </div>

        {/* Article Header */}
        <header className="border-b border-[#e1e6ec] bg-white px-6 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#5f6368]">
              <Badge className="bg-[#e8f0fe] text-[#1967d2] hover:bg-[#e8f0fe] border-[#dadce0] font-sans text-xs px-3">
                {post.category}
              </Badge>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="size-3" />
                {post.publishedAt}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="size-3" />
                {post.readTime}
              </span>
            </div>

            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#202124] sm:text-5xl sm:leading-[1.15]">
              {post.title}
            </h1>

            <p className="mt-4 font-sans text-lg text-[#5f6368] leading-relaxed sm:text-xl">
              {post.subtitle}
            </p>

            {/* Author row */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-[#f1f3f4] pt-6">
              <div className="flex items-center gap-3">
                <img
                  src={post.authorAvatar}
                  alt={post.author}
                  className="size-11 rounded-full border border-[#dadce0] object-contain p-1 bg-white shadow-2xs"
                />
                <div>
                  <div className="text-sm font-bold text-[#202124]">{post.author}</div>
                  <div className="text-xs text-[#5f6368]">{post.authorRole}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {post.relatedPaper?.pdfUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full border-[#dadce0] text-xs h-8 text-[#3c4043]"
                    asChild
                  >
                    <a href={post.relatedPaper.pdfUrl} target="_blank" rel="noreferrer">
                      <Download className="mr-1.5 size-3.5 text-[#1a73e8]" />
                      Read Academic PDF
                    </a>
                  </Button>
                )}
                {post.paperSlug && (
                  <Button
                    size="sm"
                    className="rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs h-8"
                    asChild
                  >
                    <Link to="/research/$paperId" params={{ paperId: post.paperSlug }}>
                      Inspect Preprint
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="mx-auto max-w-5xl px-6 pt-10">
          <div className="overflow-hidden rounded-3xl border border-[#dadce0] bg-slate-100 shadow-md">
            <img
              src={post.coverImage}
              alt={post.title}
              className="max-h-[460px] w-full object-cover"
            />
          </div>
          <div className="mt-2 text-right text-[11px] text-[#70757a]">
            Empirical telemetry visualization • ZannixLabs Applied AI Research
          </div>
        </div>

        {/* Article Body Container */}
        <article className="mx-auto max-w-4xl px-6 py-10">
          {/* Stats Bar */}
          <section className="mb-12">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {post.stats.map((st) => (
                <div
                  key={st.label}
                  className="rounded-2xl border border-[#dadce0] bg-white p-4 shadow-2xs"
                >
                  <div className="text-xs font-medium text-[#5f6368]">{st.label}</div>
                  <div className="mt-1 font-display text-2xl font-bold tracking-tight text-[#202124]">
                    {st.value}
                  </div>
                  <div className="mt-1 text-[11px] text-[#70757a] leading-tight">{st.detail}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Takeaways Card */}
          <section className="mb-12 rounded-3xl border border-[#dadce0] bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1a73e8]">
              <Sparkles className="size-4" />
              <span>Executive Synthesis</span>
            </div>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#202124]">
              Core Breakthroughs at a Glance
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {post.keyTakeaways.map((takeaway) => (
                <div
                  key={takeaway.title}
                  className="rounded-2xl border border-[#e1e6ec] bg-[#f8f9fa] p-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="mb-3 flex size-8 items-center justify-center rounded-xl bg-white border border-[#dadce0] shadow-2xs">
                      {getIcon(takeaway.iconName)}
                    </div>
                    <h3 className="font-display text-base font-bold text-[#202124]">
                      {takeaway.title}
                    </h3>
                    <p className="mt-2 font-sans text-xs text-[#5f6368] leading-relaxed">
                      {takeaway.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Interactive Visualizer Dashboard */}
          <section className="mb-12">
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-[#202124]">
                  {post.dashboard.title}
                </h3>
                <p className="text-xs text-[#5f6368]">{post.dashboard.subtitle}</p>
              </div>

              {/* Segmented control buttons */}
              {post.dashboard.activeMetricOptions.length > 1 && (
                <div className="flex flex-wrap items-center gap-1 rounded-full border border-[#dadce0] bg-[#f1f3f4] p-1">
                  {post.dashboard.activeMetricOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setActiveDashboardOption(opt.id)}
                      className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                        activeDashboardOption === opt.id
                          ? "bg-white text-[#1a73e8] shadow-2xs"
                          : "text-[#5f6368] hover:text-[#202124]"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Embedded Interactive Chart */}
            <BlogInteractiveChart
              chartType={post.chartType}
              chartConfig={post.chartConfig}
              chartData={post.chartData}
            />
          </section>

          {/* Narrative Content Sections */}
          <section className="space-y-10 font-sans text-base leading-relaxed text-[#3c4043]">
            {post.sections.map((section) => (
              <div key={section.id} className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-[#202124] sm:text-3xl">
                  {section.heading}
                </h2>

                {section.subheading && (
                  <h3 className="font-sans text-base font-medium text-[#1a73e8]">
                    {section.subheading}
                  </h3>
                )}

                {section.body.map((para, i) => (
                  <p key={i} className="text-[#3c4043] leading-relaxed text-[15.5px]">
                    {para}
                  </p>
                ))}

                {/* Callout box */}
                {section.callout && (
                  <div className="my-6 rounded-2xl border border-[#c2e7ff] bg-[#f0f7ff] p-5">
                    <div className="flex items-center gap-2 font-display text-sm font-bold text-[#004a77]">
                      <Sparkles className="size-4 text-[#1a73e8]" />
                      {section.callout.title}
                    </div>
                    <p className="mt-1.5 font-sans text-xs text-[#004a77] leading-relaxed">
                      {section.callout.text}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </section>

          {/* Reproducible Code Section */}
          <section className="mt-14 space-y-6 border-t border-[#e1e6ec] pt-10">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#dadce0] bg-[#f8f9fa] px-3 py-0.5 text-xs font-medium text-[#3c4043]">
                <Terminal className="size-3 text-[#1a73e8]" />
                <span>Deterministic Scientific Reproduction</span>
              </div>
              <h2 className="mt-2 font-display text-2xl font-bold text-[#202124]">
                Replicate This Research Locally
              </h2>
              <p className="mt-1 text-xs text-[#5f6368]">
                Execute the deterministic DuckDB SQL query and Python analysis scripts against our open Parquet lakehouse marts.
              </p>
            </div>

            <div className="space-y-4">
              {post.codeSnippets.map((snippet) => (
                <BlogCodeCard
                  key={snippet.title}
                  title={snippet.title}
                  language={snippet.language}
                  code={snippet.code}
                  explanation={snippet.explanation}
                />
              ))}
            </div>
          </section>

          {/* Open Science Academic Download Card */}
          {post.relatedPaper && (
            <section className="mt-14 rounded-3xl border border-[#dadce0] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-2">
                  <Badge className="bg-[#1e8e3e]/10 text-[#1e8e3e] border-[#1e8e3e]/20 font-sans text-xs">
                    Peer-Reproducible Artifacts
                  </Badge>
                  <h3 className="font-display text-xl font-bold text-[#202124]">
                    {post.relatedPaper.title}
                  </h3>
                  {post.relatedPaper.doi && (
                    <div className="font-mono text-xs text-[#5f6368]">
                      DOI: {post.relatedPaper.doi}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {post.relatedPaper.pdfUrl && (
                    <Button className="rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white" asChild>
                      <a href={post.relatedPaper.pdfUrl} target="_blank" rel="noreferrer">
                        <Download className="mr-1.5 size-4" />
                        Download PDF
                      </a>
                    </Button>
                  )}
                  {post.relatedPaper.tarGzUrl && (
                    <Button variant="outline" className="rounded-full border-[#dadce0]" asChild>
                      <a href={post.relatedPaper.tarGzUrl} download>
                        <Download className="mr-1.5 size-4" />
                        Download .tar.gz
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* Share & Inquiries Footer */}
          <section className="mt-14 flex flex-col gap-6 rounded-3xl border border-[#e1e6ec] bg-[#f8f9fa] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="font-display text-lg font-bold text-[#202124]">
                Found this research insightful?
              </h4>
              <p className="mt-1 text-xs text-[#5f6368]">
                Share it with your team or contact Ajmal Baba at{" "}
                <a href="mailto:ajmalbaba@zannixlabs.com" className="font-medium text-[#1a73e8] hover:underline">
                  ajmalbaba@zannixlabs.com
                </a>
              </p>
            </div>

            <BlogShareBar title={post.title} slug={post.slug} />
          </section>

          {/* Next Posts Navigation */}
          {nextPosts.length > 0 && (
            <section className="mt-16 border-t border-[#e1e6ec] pt-10">
              <h3 className="font-display text-xl font-bold text-[#202124]">
                More From Published Blogs
              </h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {nextPosts.map((nextP) => (
                  <Link
                    key={nextP.id}
                    to="/blogs/$slug"
                    params={{ slug: nextP.slug }}
                    className="group flex flex-col justify-between rounded-2xl border border-[#dadce0] bg-white p-5 transition-all hover:border-[#1a73e8]/40 hover:shadow-md"
                  >
                    <div>
                      <div className="text-xs font-semibold text-[#1a73e8]">{nextP.category}</div>
                      <h4 className="mt-2 font-display text-base font-bold text-[#202124] group-hover:text-[#1a73e8] transition-colors line-clamp-2">
                        {nextP.title}
                      </h4>
                      <p className="mt-1.5 text-xs text-[#5f6368] line-clamp-2">
                        {nextP.subtitle}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-[#f1f3f4] pt-3 text-xs text-[#5f6368]">
                      <span>{nextP.readTime}</span>
                      <span className="flex items-center gap-1 font-medium text-[#1a73e8]">
                        Read Story <ArrowRight className="size-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>

      <GlobalFooter />
    </div>
  );
}
