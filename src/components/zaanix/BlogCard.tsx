import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Calendar, Sparkles, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogShareBar } from "./BlogShareBar";
import { type BlogPost } from "./blogData";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <article className="group relative overflow-hidden rounded-3xl border border-[#dadce0] bg-white transition-all hover:border-[#1a73e8]/40 hover:shadow-lg">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Cover Image */}
          <div className="relative aspect-16/10 overflow-hidden bg-slate-100 lg:col-span-5 lg:aspect-auto">
            <img
              src={post.coverImage}
              alt={post.title}
              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <Badge className="bg-[#1a73e8] text-white hover:bg-[#1557b0] font-sans text-xs px-3 py-1 shadow-sm">
                Featured Analysis
              </Badge>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-7">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#5f6368]">
                <span className="font-semibold text-[#1a73e8] uppercase tracking-wider">{post.category}</span>
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

              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#202124] sm:text-3xl hover:text-[#1a73e8] transition-colors">
                <Link to="/blogs/$slug" params={{ slug: post.slug }}>
                  {post.title}
                </Link>
              </h3>

              <p className="mt-2.5 font-sans text-sm text-[#5f6368] line-clamp-2">
                {post.subtitle}
              </p>

              <p className="mt-3 font-sans text-sm text-[#3c4043] line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Stats badges */}
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {post.stats.slice(0, 4).map((st) => (
                  <div key={st.label} className="rounded-xl border border-[#e1e6ec] bg-[#f8f9fa] p-2.5">
                    <div className="font-display text-base font-bold text-[#202124]">{st.value}</div>
                    <div className="text-[10px] text-[#5f6368] line-clamp-1">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#f1f3f4] pt-4">
              <div className="flex items-center gap-2.5">
                <img
                  src={post.authorAvatar}
                  alt={post.author}
                  className="size-8 rounded-full border border-[#dadce0] object-contain p-0.5 bg-white"
                />
                <div>
                  <div className="text-xs font-semibold text-[#202124]">{post.author}</div>
                  <div className="text-[10px] text-[#5f6368]">{post.authorRole}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <BlogShareBar title={post.title} slug={post.slug} />
                <Button
                  size="sm"
                  className="rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white px-4 h-8 text-xs font-medium"
                  asChild
                >
                  <Link to="/blogs/$slug" params={{ slug: post.slug }}>
                    Read Post <ArrowRight className="ml-1.5 size-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#dadce0] bg-white transition-all hover:border-[#1a73e8]/40 hover:shadow-md">
      {/* Cover image */}
      <div className="relative aspect-16/9 overflow-hidden bg-slate-100">
        <img
          src={post.coverImage}
          alt={post.title}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-white/90 backdrop-blur-xs text-[#202124] font-sans text-[11px] border-[#dadce0]">
            {post.category}
          </Badge>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#5f6368]">
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

          <h3 className="mt-2.5 font-display text-lg font-bold text-[#202124] leading-snug group-hover:text-[#1a73e8] transition-colors line-clamp-2">
            <Link to="/blogs/$slug" params={{ slug: post.slug }}>
              {post.title}
            </Link>
          </h3>

          <p className="mt-2 text-xs text-[#5f6368] line-clamp-2">
            {post.subtitle}
          </p>

          <p className="mt-2.5 text-xs text-[#3c4043] line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        <div className="mt-5 border-t border-[#f1f3f4] pt-3">
          <div className="flex items-center justify-between">
            <div className="text-[11px] text-[#5f6368]">
              By <strong className="text-[#202124] font-medium">{post.author}</strong>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="h-7 text-xs font-medium text-[#1a73e8] hover:bg-[#e8f0fe] hover:text-[#1967d2] px-2.5 rounded-full"
              asChild
            >
              <Link to="/blogs/$slug" params={{ slug: post.slug }}>
                Read <ArrowRight className="ml-1 size-3" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
