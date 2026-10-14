import { useState } from "react";
import { Bell, Check, Database, Sparkles, Clock, ArrowRight, Activity, ShieldCheck, Mail } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import type { PipelinePaper } from "./researchData";

export function PipelineCard({ paper }: { paper: PipelinePaper }) {
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    setSubscribing(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          source: `pipeline-${paper.categoryId}`,
        }),
      });
      if (res.ok) {
        setSubscribed(true);
        toast.success("Subscribed for Early Preprint Release!", {
          description: `You will be notified when "${paper.plainTitle}" is published.`,
        });
        setEmail("");
      } else {
        toast.error("Could not register notification", {
          description: "Please try again later.",
        });
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <div className="group rounded-2xl border border-[#e1e6ec] bg-white shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:border-[#1a73e8]/40">
      {/* Top Research Photography Banner */}
      {paper.heroImage && (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#f1f3f4]">
          <img
            src={paper.heroImage}
            alt={paper.plainTitle}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-xs px-3 py-1 font-mono text-[10.5px] font-semibold text-amber-800 shadow-sm border border-amber-200">
            <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" />
            {paper.status}
          </div>
        </div>
      )}

      <div className="p-6 md:p-7 space-y-4 flex-1">
        {/* Industry & Pipeline Target Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-[#5f6368] font-sans">
            <span className="text-[#1a73e8] font-semibold">{paper.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[#70757a]">
              <Clock className="size-3 text-[#70757a]" />
              Target: {paper.estimatedRelease}
            </span>
          </div>

          {!paper.heroImage && (
            <div className="flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 font-mono text-[10px] text-amber-800 font-semibold">
              <span className="size-1.5 rounded-full bg-amber-500" />
              {paper.status}
            </div>
          )}
        </div>

        {/* Plain English Headline */}
        <div>
          <h3 className="font-display text-xl md:text-2xl font-medium leading-snug tracking-tight text-[#202124]">
            {paper.plainTitle}
          </h3>
          <p className="mt-2 text-sm text-[#5f6368] font-sans leading-relaxed">
            {paper.plainSubtitle}
          </p>
        </div>

        {/* Highlighted "What Our Autonomous Agents Are Investigating" Box */}
        <div className="rounded-xl border border-[#d2e3fc] bg-[#f8fafd] p-4 space-y-1.5 text-xs">
          <div className="flex items-center gap-1.5 font-sans font-semibold text-[#1967d2] uppercase text-[11px] tracking-wide">
            <Sparkles className="size-3.5 text-[#1a73e8]" /> Autonomous Investigation Scope
          </div>
          <p className="text-[#3c4043] text-[12.5px] leading-relaxed font-sans">
            {paper.plainExplanation}
          </p>
        </div>

        {/* Real-World Impact */}
        <div className="rounded-xl border border-[#e8eaed] bg-[#f8f9fa] p-3.5 text-xs space-y-1">
          <span className="font-sans font-semibold text-[#202124] flex items-center gap-1.5">
            <ShieldCheck className="size-4 text-[#1e8e3e]" /> Real-World Impact:
          </span>
          <p className="text-[#5f6368] text-[12px] leading-relaxed font-sans">
            {paper.whyItMatters}
          </p>
        </div>

        {/* Active Telemetry Ingestion Metrics */}
        <div className="space-y-1.5 pt-1">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#5f6368] flex items-center gap-1.5">
            <Database className="size-3 text-[#1a73e8]" /> Active Columnar Telemetry Stream:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {paper.datasetMetrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-[#dadce0] bg-[#f8f9fa] p-2.5 text-center"
              >
                <div className="font-display text-sm font-semibold text-[#1a73e8]">{m.value}</div>
                <div className="font-sans text-[10.5px] text-[#5f6368] truncate mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Working Title */}
        <div className="pt-2 border-t border-[#e8eaed] text-[11px] text-[#70757a] font-mono">
          <span className="text-[#3c4043] font-semibold">Working Preprint Title:</span>{" "}
          <span className="italic">{paper.academicWorkingTitle}</span>
        </div>
      </div>

      {/* Early Access Notification Form */}
      <div className="p-6 md:p-7 pt-4 border-t border-[#e1e6ec] bg-[#fafbfc] space-y-2">
        <p className="font-sans text-xs text-[#202124] font-medium flex items-center gap-1.5">
          <Bell className="size-3.5 text-[#1a73e8]" /> Get Notified When Camera-Ready Preprint Drops:
        </p>

        {subscribed ? (
          <div className="flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-xs font-sans text-emerald-800">
            <Check className="size-4 shrink-0 text-emerald-600" />
            <span>You&apos;re on the early release dispatch for this research!</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-9 bg-white border-[#dadce0] text-[#202124] rounded-full px-4 text-xs font-sans placeholder:text-[#80868b] focus:border-[#1a73e8]"
              disabled={subscribing}
            />
            <Button
              type="submit"
              size="sm"
              className="rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white h-9 px-4 text-xs font-medium shrink-0 shadow-xs"
              disabled={subscribing}
            >
              {subscribing ? "Registering..." : "Notify Me"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
