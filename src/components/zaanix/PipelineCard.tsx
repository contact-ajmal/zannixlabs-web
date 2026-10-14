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
    <div className="glass rounded-2xl p-6 md:p-8 transition-all duration-300 border-border/80 hover:border-primary/50 flex flex-col justify-between relative overflow-hidden group">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 size-48 rounded-full bg-primary/5 blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors" />

      <div className="space-y-4 relative z-10">
        {/* Industry & Pipeline Radar Header */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary font-mono text-[11px]">
              {paper.category}
            </Badge>
            <span className="font-mono text-xs text-muted-foreground flex items-center gap-1.5">
              <Clock className="size-3 text-muted-foreground" />
              Target: {paper.estimatedRelease}
            </span>
          </div>

          <div className="flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[10px] text-amber-400 font-semibold animate-pulse">
            <span className="size-1.5 rounded-full bg-amber-400" />
            {paper.status}
          </div>
        </div>

        {/* Plain English Headline */}
        <div>
          <h3 className="font-display text-xl md:text-2xl font-bold leading-snug tracking-tight text-foreground">
            {paper.plainTitle}
          </h3>
          <p className="mt-1.5 text-sm font-medium text-muted-foreground leading-relaxed">
            {paper.plainSubtitle}
          </p>
        </div>

        {/* Highlighted "In Plain English" Box */}
        <div className="rounded-xl border border-primary/25 bg-primary/5 p-4 space-y-1.5 text-xs">
          <div className="flex items-center gap-1.5 font-mono font-semibold text-primary uppercase text-[11px]">
            <Sparkles className="size-3.5" /> What Our Autonomous Agents Are Investigating
          </div>
          <p className="text-muted-foreground text-[12.5px] leading-relaxed">
            {paper.plainExplanation}
          </p>
        </div>

        {/* Why This Matters to Everyday People */}
        <div className="rounded-lg border border-border/60 bg-secondary/30 p-3 text-xs space-y-1">
          <span className="font-mono font-semibold text-foreground flex items-center gap-1">
            <ShieldCheck className="size-3.5 text-emerald-400" /> Real-World Impact:
          </span>
          <p className="text-muted-foreground text-[12px] leading-relaxed">
            {paper.whyItMatters}
          </p>
        </div>

        {/* Active Telemetry Ingestion Metrics */}
        <div className="space-y-1.5 pt-1">
          <p className="font-mono text-[11px] font-semibold text-muted-foreground flex items-center gap-1.5">
            <Database className="size-3 text-primary" /> Active Columnar Telemetry Stream:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {paper.datasetMetrics.map((m) => (
              <div
                key={m.label}
                className="rounded-md border border-border/70 bg-background/50 p-2 text-center"
              >
                <div className="font-display text-sm font-bold text-primary">{m.value}</div>
                <div className="font-mono text-[10px] text-muted-foreground truncate">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Working Title (for scientists) */}
        <div className="pt-2 border-t border-border/50 text-[11px] text-muted-foreground font-mono">
          <span className="text-foreground/70 font-semibold">Working Preprint Title:</span>{" "}
          <span className="italic">{paper.academicWorkingTitle}</span>
        </div>
      </div>

      {/* Early Access Notification Form */}
      <div className="mt-6 pt-5 border-t border-border/60 space-y-2 relative z-10">
        <p className="font-mono text-xs text-foreground font-semibold flex items-center gap-1.5">
          <Bell className="size-3.5 text-primary" /> Get Notified When Camera-Ready Preprint Drops:
        </p>

        {subscribed ? (
          <div className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-2.5 text-xs font-mono text-emerald-400">
            <Check className="size-4 shrink-0 text-emerald-400" />
            <span>You&apos;re on the early release dispatch for this research!</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-9 bg-background/70 border-border text-xs font-mono"
              disabled={subscribing}
            />
            <Button
              type="submit"
              variant="glow"
              size="sm"
              className="h-9 text-xs font-mono shrink-0"
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
