import { lazy, Suspense, useState, type MouseEvent, type ReactNode } from "react";
import { ClientOnly } from "@tanstack/react-router";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { toast } from "sonner";
import {
  ArrowRight, ArrowUpRight, Copy, Download, FileText, Package, Database, Sigma, Network, Rocket,
  Cpu, Code2, Dna, LineChart as LineIcon, GitBranch, AtSign, Briefcase, BookOpen, Smile, Menu,
  ShieldCheck, Repeat, Scale, Microscope,
} from "lucide-react";
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip as RTooltip, Legend, CartesianGrid,
  LineChart, Line, ScatterChart, Scatter, ZAxis, Cell,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { volumeSpend, escalation, pareto, hypotheses, bibtex } from "./data";

const HeroCanvas = lazy(() => import("./HeroCanvas"));
const ARXIV = "https://arxiv.org/";
const CYAN = "#00F2FE";
const VIOLET = "#7B2CBF";

function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function spot(e: MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

function GlassCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div onMouseMove={spot} className={`glass spotlight rounded-2xl transition-all duration-300 hover:border-primary/50 ${className}`}>
      {children}
    </div>
  );
}

function SectionHead({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="font-mono text-xs tracking-widest text-primary">{kicker}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </Reveal>
  );
}

const links = [
  ["Research", "#research"], ["Agent Architecture", "#engine"], ["Observatory", "#observatory"],
  ["Roadmap", "#roadmap"], ["About Lab", "#about"],
] as const;

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="grid size-8 place-items-center rounded-lg bg-gradient-accent font-display text-base font-bold text-primary-foreground shadow-glow">Z</span>
      <span className="font-display text-sm font-semibold tracking-[0.2em]">ZAANIX LABS</span>
    </a>
  );
}

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5">
        <div className="flex items-center gap-4">
          <Logo />
          <span className="hidden items-center gap-2 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 font-mono text-[10px] text-success sm:flex">
            <span className="relative flex size-1.5"><span className="absolute inline-flex size-full animate-ping rounded-full bg-success" /><span className="relative size-1.5 rounded-full bg-success" /></span>
            AGENT ENGINE: ACTIVE
          </span>
        </div>
        <nav className="hidden gap-6 lg:flex">
          {links.map(([l, h]) => <a key={h} href={h} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l}</a>)}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="glass" size="sm" asChild><a href="#research">Explore Papers</a></Button>
          <Button variant="glow" size="sm" asChild><a href={ARXIV} target="_blank" rel="noreferrer">arXiv Preprints <ArrowUpRight /></a></Button>
        </div>
        <Sheet>
          <SheetTrigger asChild><Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menu"><Menu /></Button></SheetTrigger>
          <SheetContent className="flex flex-col gap-5 pt-12">
            {links.map(([l, h]) => <a key={h} href={h} className="text-lg">{l}</a>)}
            <Button variant="glow" asChild><a href={ARXIV} target="_blank" rel="noreferrer">arXiv Preprints <ArrowUpRight /></a></Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

const metrics = ["646.2T+ Tokens Synthesized", "1,091 Model Endpoints Benchmarked", "100% Autonomous Lakehouse Telemetry", "4 Macro Hypotheses Empirically Proven"];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 opacity-90 md:left-1/3">
        <ClientOnly fallback={null}><Suspense fallback={null}><HeroCanvas /></Suspense></ClientOnly>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-5 py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <span className="glass inline-block rounded-full px-3 py-1 font-mono text-xs text-primary">[ INDEPENDENT AI &amp; DATA RESEARCH ]</span>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            Autonomous Empirical Science. <span className="text-gradient">Zero Compromise.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Zaanix Labs conducts independent, high-velocity empirical research across industries — powered entirely by the Zaanix Data &amp; Research AI Agent.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button variant="glow" size="lg" asChild><a href="#research">Browse Research Papers <ArrowRight /></a></Button>
            <Button variant="glass" size="lg" asChild><a href="#observatory">Explore Agent Telemetry</a></Button>
          </div>
        </motion.div>
      </div>
      <div className="relative border-y border-border bg-background/50 backdrop-blur-md">
        <div className="flex w-max animate-marquee gap-14 py-4 font-mono text-sm">
          {[...metrics, ...metrics, ...metrics, ...metrics].map((m, i) => (
            <span key={i} className="flex items-center gap-3 whitespace-nowrap text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary shadow-glow" />
              <span className="text-foreground">{m.split(" ")[0]}</span> {m.split(" ").slice(1).join(" ")}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const filters = ["All (1)", "LLM Economics", "Autonomous Agents", "Genomics & Science", "FinTech"];

export function Research() {
  const [f, setF] = useState(filters[0]);
  const show = f === "All (1)" || f === "LLM Economics" || f === "Autonomous Agents";
  const copy = async () => {
    try { await navigator.clipboard.writeText(bibtex); toast.success("BibTeX citation copied to clipboard"); }
    catch { toast.error("Clipboard unavailable"); }
  };
  const soon = () => toast("Available upon public arXiv release", { description: "Subscribe below to get notified." });
  return (
    <section id="research" className="mx-auto max-w-7xl px-5 py-28">
      <SectionHead kicker="// 01 — FLAGSHIP RESEARCH" title="Research Papers" sub="Peer-ready preprints produced end-to-end by the Zaanix agent pipeline." />
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((x) => (
          <button key={x} onClick={() => setF(x)} className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-all ${f === x ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/40"}`}>{x}</button>
        ))}
      </div>
      {show ? (
        <Reveal>
          <GlassCard className="p-7 md:p-10">
            <p className="font-mono text-xs text-primary">arXiv:2610.xxxxx [cs.AI, cs.CL] • October 2026 • 4-Page Camera-Ready</p>
            <h3 className="mt-4 max-w-4xl font-display text-2xl font-semibold leading-snug md:text-3xl">
              Volume–Revenue Bifurcation, Super-Linear Multi-Turn Agent Escalation, and the Reasoning Pareto Frontier: An Empirical Study of Global LLM Gateway Telemetry
            </h3>
            <p className="mt-3 text-sm text-muted-foreground"><strong className="text-foreground">Ajmal Baba</strong> • Zaanix Labs (Independent Research)</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {hypotheses.map((h) => (
                <Badge key={h.id} variant="outline" className="border-primary/30 bg-primary/5 py-1 font-mono text-[11px] font-normal">
                  <span className="mr-1 text-primary">{h.id}:</span>{h.tag}
                </Badge>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Dialog>
                <DialogTrigger asChild><Button variant="glow"><BookOpen /> Read Paper Abstract &amp; Key Claims</Button></DialogTrigger>
                <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto border-border bg-popover">
                  <DialogHeader>
                    <DialogTitle className="font-display text-xl">Abstract &amp; Key Claims</DialogTitle>
                    <DialogDescription>
                      We analyse 646.2T tokens of global LLM gateway telemetry across 1,091 model endpoints, testing four macro hypotheses on market structure, agent cost dynamics and the price–intelligence frontier.
                    </DialogDescription>
                  </DialogHeader>
                  <PaperTabs onCopy={copy} />
                </DialogContent>
              </Dialog>
              <Button variant="glass" onClick={copy}><Copy /> Copy BibTeX Citation</Button>
              <Button variant="glass" onClick={soon}><Download /> Download PDF</Button>
              <Button variant="glass" onClick={soon}><Package /> arXiv Package (.tar.gz)</Button>
            </div>
          </GlassCard>
        </Reveal>
      ) : (
        <GlassCard className="p-10 text-center font-mono text-sm text-muted-foreground"><FileText className="mx-auto mb-3 text-primary" />Papers in this domain are in the pipeline.</GlassCard>
      )}
    </section>
  );
}

const stages = [
  { icon: Database, t: "Automated Lakehouse Ingestion", d: "60-minute automated DuckDB / Arrow telemetry pipelines across hundreds of endpoints." },
  { icon: Sigma, t: "Autonomous Statistical Verification", d: "Real-time Welch two-sample t-tests, HHI market concentration, and Pareto frontier scoring." },
  { icon: Network, t: "Multi-Agent Synthesis & Cross-Verification", d: "Literature search against arXiv, CrossRef, and OpenAlex to verify novelty and citations." },
  { icon: Rocket, t: "Autonomous Publishing & Tooling", d: "Camera-ready IEEE/arXiv PDFs, reproducible Jupyter/SQL notebooks, and interactive observatories." },
];

export function Engine() {
  return (
    <section id="engine" className="border-y border-border bg-background/40 py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead kicker="// 02 — THE ENGINE" title="Zaanix Data & Research AI Agent" sub="A four-stage autonomous pipeline — from raw telemetry to a reproducible, camera-ready paper." />
        <div className="relative grid gap-5 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-10 hidden h-px animate-flow md:block" />
          {stages.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.12}>
              <GlassCard className="h-full p-6">
                <div className="relative mb-5 grid size-12 place-items-center rounded-xl border border-primary/40 bg-background text-primary shadow-glow"><s.icon className="size-5" /></div>
                <p className="font-mono text-xs text-muted-foreground">STAGE 0{i + 1}</p>
                <h3 className="mt-2 font-display text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const tip = { contentStyle: { background: "#0b0f1a", border: "1px solid rgba(255,255,255,.1)", borderRadius: 10, fontSize: 12 }, cursor: { fill: "rgba(255,255,255,.04)" } };
const axis = { stroke: "rgba(255,255,255,.4)", fontSize: 11 };

export function Observatory() {
  return (
    <section id="observatory" className="mx-auto max-w-7xl px-5 py-28">
      <SectionHead kicker="// 03 — LAB OBSERVATORY" title="Live Telemetry Preview" sub="Empirical data from the inaugural study, rendered from the lakehouse." />
      <Reveal>
        <GlassCard className="p-5 md:p-8">
          <Tabs defaultValue="h1">
            <TabsList className="mb-6 flex h-auto flex-wrap bg-secondary">
              <TabsTrigger value="h1">Volume vs. Spend</TabsTrigger>
              <TabsTrigger value="h2">Multi-Turn Escalation</TabsTrigger>
              <TabsTrigger value="h4">Pareto Frontier</TabsTrigger>
            </TabsList>
            <div className="h-[380px]">
              <TabsContent value="h1" className="h-full">
                <ResponsiveContainer>
                  <BarChart data={volumeSpend} barGap={8}>
                    <CartesianGrid stroke="rgba(255,255,255,.06)" vertical={false} />
                    <XAxis dataKey="name" {...axis} /><YAxis unit="%" {...axis} />
                    <RTooltip {...tip} /><Legend />
                    <Bar dataKey="tokens" name="% of Tokens" fill={CYAN} radius={[6, 6, 0, 0]} />
                    <Bar dataKey="spend" name="% of Spend" fill={VIOLET} radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </TabsContent>
              <TabsContent value="h2" className="h-full">
                <ResponsiveContainer>
                  <LineChart data={escalation}>
                    <CartesianGrid stroke="rgba(255,255,255,.06)" />
                    <XAxis dataKey="turn" {...axis} label={{ value: "Turns", position: "insideBottom", offset: -2, fill: "#888", fontSize: 11 }} />
                    <YAxis unit="x" {...axis} /><RTooltip {...tip} /><Legend />
                    <Line type="monotone" dataKey="Claude Code" stroke={CYAN} strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="Hermes Agent" stroke="#a66cff" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="Kilo Code" stroke="#5eead4" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </TabsContent>
              <TabsContent value="h4" className="h-full">
                <ResponsiveContainer>
                  <ScatterChart>
                    <CartesianGrid stroke="rgba(255,255,255,.06)" />
                    <XAxis type="number" dataKey="price" name="Price" unit=" $/1M" scale="log" domain={[0.1, 40]} {...axis} />
                    <YAxis type="number" dataKey="iq" name="Intelligence" {...axis} />
                    <ZAxis dataKey="name" name="Model" range={[90, 90]} />
                    <RTooltip {...tip} />
                    <Scatter data={pareto}>
                      {pareto.map((p) => <Cell key={p.name} fill={p.frontier ? CYAN : VIOLET} />)}
                    </Scatter>
                  </ScatterChart>
                </ResponsiveContainer>
              </TabsContent>
            </div>
          </Tabs>
          <p className="mt-4 font-mono text-[11px] text-muted-foreground">Illustrative preview dataset • cyan points = Pareto-optimal endpoints</p>
        </GlassCard>
      </Reveal>
    </section>
  );
}

const domains = [
  { icon: Cpu, t: "AI Infrastructure & Gateway Economics", live: true },
  { icon: Code2, t: "Autonomous Software Engineering & Agent Harnesses", live: true },
  { icon: Dna, t: "Healthcare & Computational Biology Intelligence", live: false },
  { icon: LineIcon, t: "Financial Market Microstructure & Algorithmic Routing", live: false },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="mx-auto max-w-7xl px-5 pb-28">
      <SectionHead kicker="// 04 — CROSS-INDUSTRY ROADMAP" title="Research Domains" />
      <div className="grid gap-5 sm:grid-cols-2">
        {domains.map((d, i) => (
          <Reveal key={d.t} delay={i * 0.08}>
            <GlassCard className="flex h-full items-start gap-5 p-7">
              <d.icon className="size-7 shrink-0 text-primary" />
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold">{d.t}</h3>
                <span className={`mt-3 inline-block rounded-full px-2.5 py-0.5 font-mono text-[10px] ${d.live ? "bg-success/15 text-success" : "bg-violet/25 text-foreground"}`}>
                  {d.live ? "● LIVE" : "◌ UPCOMING"}
                </span>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const principles = [
  { icon: Repeat, t: "100% Reproducibility" }, { icon: Database, t: "Open Lakehouse Pipelines" },
  { icon: ShieldCheck, t: "Zero Sponsored Bias" }, { icon: Microscope, t: "Strict Empirical Rigor" },
];

export function About() {
  return (
    <section id="about" className="border-t border-border py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-primary">// 05 — ABOUT THE LAB</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">Research at the speed of agents.</h2>
          <p className="mt-6 text-muted-foreground">Our mission: replace bureaucratic, slow-paced legacy research with high-throughput, agent-driven scientific synthesis.</p>
          <GlassCard className="mt-8 flex items-center gap-5 p-6">
            <div className="grid size-16 shrink-0 place-items-center rounded-full bg-gradient-accent font-display text-xl font-bold text-primary-foreground shadow-glow-violet">AB</div>
            <div>
              <p className="font-display text-lg font-semibold">Ajmal Baba</p>
              <p className="font-mono text-xs text-muted-foreground">Founder • Data &amp; AI Architect • Independent Researcher</p>
            </div>
          </GlassCard>
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {principles.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08}>
              <GlassCard className="h-full p-6"><p.icon className="mb-4 size-6 text-primary" /><p className="font-display font-semibold">{p.t}</p></GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const socials = [
  { icon: GitBranch, l: "GitHub", h: "https://github.com" }, { icon: FileText, l: "arXiv", h: ARXIV },
  { icon: Smile, l: "Hugging Face", h: "https://huggingface.co" }, { icon: AtSign, l: "X", h: "https://x.com" },
  { icon: Briefcase, l: "LinkedIn", h: "https://linkedin.com" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) { toast.error("Please enter a valid email address"); return; }
    confetti({ particleCount: 140, spread: 80, origin: { y: 0.85 }, colors: [CYAN, VIOLET, "#ffffff"] });
    toast.success("You're on the list for new preprint drops");
    setEmail("");
  };
  return (
    <footer className="border-t border-border bg-background/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground">Zaanix Labs — Independent Autonomous Research</p>
          <div className="mt-6 flex gap-2">
            {socials.map((s) => (
              <a key={s.l} href={s.h} target="_blank" rel="noreferrer" aria-label={s.l} className="glass grid size-10 place-items-center rounded-lg text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"><s.icon className="size-4" /></a>
            ))}
          </div>
        </div>
        <form onSubmit={submit} noValidate>
          <p className="font-display font-semibold">Subscribe for new arXiv preprint drops</p>
          <div className="mt-4 flex gap-2">
            <Input type="email" maxLength={255} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@institute.org" className="h-10 bg-glass" />
            <Button variant="glow" type="submit" className="h-10">Subscribe <Scale className="hidden" /></Button>
          </div>
        </form>
      </div>
      <p className="border-t border-border py-6 text-center font-mono text-xs text-muted-foreground">Copyright © 2026 Zaanix Labs. All Rights Reserved.</p>
    </footer>
  );
}
