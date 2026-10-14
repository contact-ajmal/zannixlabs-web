import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as RTooltip,
  Legend,
  CartesianGrid,
  LineChart,
  Line,
  ScatterChart,
  Scatter,
  ZAxis,
  Cell,
  ReferenceLine,
} from "recharts";
import { 
  Activity, 
  ExternalLink, 
  FileText, 
  Sparkles, 
  Download, 
  LayoutDashboard, 
  PlayCircle, 
  ArrowRight,
  TrendingUp,
  AlertCircle
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  volumeSpend,
  escalation,
  pareto,
  arenaCalibration,
  aviationTortuosity,
  cwtTrajectory,
  cwtMtdOutcomes,
  cwtModality,
  cwtExtremeBacklog,
  cwtSimulations,
} from "./researchData";

const CYAN = "#00F2FE";
const VIOLET = "#7B2CBF";
const GREEN = "#10B981";
const BLUE = "#0284C7";
const RED = "#DC2626";
const AMBER = "#F59E0B";

const tooltipStyle = {
  contentStyle: {
    background: "#0b0f1a",
    border: "1px solid rgba(255,255,255,.15)",
    borderRadius: 10,
    fontSize: 12,
    color: "#f8fafc",
  },
  cursor: { fill: "rgba(255,255,255,.05)" },
};

const axisStyle = {
  stroke: "rgba(255,255,255,.4)",
  fontSize: 11,
};

export function InteractiveObservatoryStudio() {
  const [domainTab, setDomainTab] = useState<string>("cancer");
  const [subTab, setSubTab] = useState<"vol" | "esc" | "pareto">("vol");
  const [cwtSubTab, setCwtSubTab] = useState<"trajectory" | "mtd" | "modality" | "backlog" | "sim">("trajectory");

  return (
    <div className="glass rounded-2xl p-6 md:p-8 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-5">
        <div>
          <span className="font-mono text-xs tracking-wider text-primary">
            LIVE TELEMETRY STUDIO
          </span>
          <h3 className="font-display text-2xl font-bold text-foreground">
            Cross-Domain Empirical Observatories
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Real-world data ingested, modeled, and synthesized directly through Zannix analytical pipelines.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary font-mono text-xs">
            Interactive Analytical Engine
          </Badge>
        </div>
      </div>

      <Tabs value={domainTab} onValueChange={setDomainTab} className="w-full">
        {/* Domain Tabs */}
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 bg-secondary/60 h-auto p-1.5 gap-1">
          <TabsTrigger value="cancer" className="text-xs md:text-sm py-2">
            01. NHS Cancer Waiting Times
          </TabsTrigger>
          <TabsTrigger value="gateway" className="text-xs md:text-sm py-2">
            02. AI Gateway Economics
          </TabsTrigger>
          <TabsTrigger value="arena" className="text-xs md:text-sm py-2">
            03. Chatbot Arena Confounders
          </TabsTrigger>
          <TabsTrigger value="aviation" className="text-xs md:text-sm py-2">
            04. Terminal Airspace ADS-B
          </TabsTrigger>
        </TabsList>

        {/* Tab 1: NHS Cancer Waiting Times */}
        <TabsContent value="cancer" className="mt-6 space-y-5">
          {/* Quick Action Bar for Apps & Dashboards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 p-3 rounded-xl bg-background/50 border border-border/70">
            <a
              href="/apps/92423718-3f8d-4f20-a0d2-6fb746098919/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-2 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/30 transition-all text-xs font-mono text-primary font-medium"
            >
              <PlayCircle className="size-3.5 text-primary" />
              <span>Launch Data App</span>
            </a>
            <a
              href="/#/dashboards/0fdfe093-e0cb-4db0-9bf1-aaad505be34a"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-2 rounded-lg bg-secondary/60 hover:bg-secondary border border-border/80 transition-all text-xs font-mono text-foreground font-medium"
            >
              <LayoutDashboard className="size-3.5 text-cyan-400" />
              <span>Mosaic Dashboard</span>
            </a>
            <a
              href="/#/dashboards/6b63d709-0a5e-4c17-8546-c4ab22d6eb50"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-2 rounded-lg bg-secondary/60 hover:bg-secondary border border-border/80 transition-all text-xs font-mono text-foreground font-medium"
            >
              <Activity className="size-3.5 text-emerald-400" />
              <span>Executive Grid</span>
            </a>
            <Link
              to="/research/$paperId"
              params={{ paperId: "nhs-cancer-waiting-times" }}
              className="flex items-center gap-2 p-2 rounded-lg bg-secondary/60 hover:bg-secondary border border-border/80 transition-all text-xs font-mono text-foreground font-medium"
            >
              <FileText className="size-3.5 text-purple-400" />
              <span>Read Preprint</span>
            </Link>
            <a
              href="/papers/nhs-cancer-waiting-times.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-2 rounded-lg bg-secondary/60 hover:bg-secondary border border-border/80 transition-all text-xs font-mono text-foreground font-medium"
            >
              <Download className="size-3.5 text-amber-400" />
              <span>Paper PDF</span>
            </a>
            <a
              href="/notebooks/nhs-cancer-waiting-times.ipynb"
              download
              className="flex items-center gap-2 p-2 rounded-lg bg-secondary/60 hover:bg-secondary border border-border/80 transition-all text-xs font-mono text-foreground font-medium"
            >
              <Sparkles className="size-3.5 text-pink-400" />
              <span>Jupyter (.ipynb)</span>
            </a>
          </div>

          {/* Sub-tabs Selector */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
            <p className="text-sm text-muted-foreground">
              Analyzed <strong>17.1M patient referrals</strong> across <strong>185 NHS acute trusts</strong> (2021–2026).
            </p>
            <div className="flex flex-wrap gap-1 bg-background/60 p-1 rounded-lg border border-border">
              <button
                onClick={() => setCwtSubTab("trajectory")}
                className={`px-2.5 py-1 text-xs rounded-md font-mono transition-colors ${
                  cwtSubTab === "trajectory" ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground"
                }`}
              >
                Triage vs. Treatment
              </button>
              <button
                onClick={() => setCwtSubTab("mtd")}
                className={`px-2.5 py-1 text-xs rounded-md font-mono transition-colors ${
                  cwtSubTab === "mtd" ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground"
                }`}
              >
                Rule-Out Illusion (MTD)
              </button>
              <button
                onClick={() => setCwtSubTab("modality")}
                className={`px-2.5 py-1 text-xs rounded-md font-mono transition-colors ${
                  cwtSubTab === "modality" ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground"
                }`}
              >
                Modality Bottlenecks
              </button>
              <button
                onClick={() => setCwtSubTab("backlog")}
                className={`px-2.5 py-1 text-xs rounded-md font-mono transition-colors ${
                  cwtSubTab === "backlog" ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground"
                }`}
              >
                104-Day Backlog
              </button>
              <button
                onClick={() => setCwtSubTab("sim")}
                className={`px-2.5 py-1 text-xs rounded-md font-mono transition-colors ${
                  cwtSubTab === "sim" ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground"
                }`}
              >
                Recovery Simulator
              </button>
            </div>
          </div>

          {/* Visualization Area */}
          <div className="h-[380px] w-full pt-2">
            {cwtSubTab === "trajectory" && (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={cwtTrajectory}>
                  <CartesianGrid stroke="rgba(255,255,255,.06)" />
                  <XAxis dataKey="period" {...axisStyle} />
                  <YAxis unit="%" domain={[50, 100]} {...axisStyle} />
                  <RTooltip {...tooltipStyle} />
                  <Legend />
                  <ReferenceLine y={80} stroke={GREEN} strokeDasharray="3 3" label={{ value: "FDS Target (80%)", fill: GREEN, fontSize: 10, position: "insideTopRight" }} />
                  <ReferenceLine y={85} stroke={BLUE} strokeDasharray="3 3" label={{ value: "62D Target (85%)", fill: BLUE, fontSize: 10, position: "insideTopRight" }} />
                  <Line type="monotone" dataKey="fds" name="28-Day Faster Diagnosis (FDS %)" stroke={GREEN} strokeWidth={2.5} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="wait62" name="62-Day Treatment Compliance (%)" stroke={BLUE} strokeWidth={2.5} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="gap" name="Decoupling Gap Δ (pp)" stroke={AMBER} strokeWidth={2} strokeDasharray="4 4" />
                </LineChart>
              </ResponsiveContainer>
            )}

            {cwtSubTab === "mtd" && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cwtMtdOutcomes} barGap={10}>
                  <CartesianGrid stroke="rgba(255,255,255,.06)" vertical={false} />
                  <XAxis dataKey="quarter" {...axisStyle} />
                  <YAxis unit="%" domain={[0, 100]} {...axisStyle} />
                  <RTooltip {...tooltipStyle} />
                  <Legend />
                  <ReferenceLine y={80} stroke="#64748B" strokeDasharray="3 3" label={{ value: "National Target (80%)", fill: "#94A3B8", fontSize: 10 }} />
                  <Bar dataKey="ruledOut" name="Ruled-Out Referrals Compliance (%)" fill={GREEN} radius={[6, 6, 0, 0]} />
                  <Bar dataKey="diagnosed" name="Diagnosed Malignancies Compliance (%)" fill={RED} radius={[6, 6, 0, 0]} />
                  <Bar dataKey="deficit" name="Malignancy Triage Deficit (pp)" fill="#8B5CF6" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}

            {cwtSubTab === "modality" && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cwtModality} barGap={8}>
                  <CartesianGrid stroke="rgba(255,255,255,.06)" vertical={false} />
                  <XAxis dataKey="modality" {...axisStyle} />
                  <YAxis yAxisId="left" unit="%" domain={[0, 105]} {...axisStyle} label={{ value: "Compliance (%)", angle: -90, position: "insideLeft", fill: "#888", fontSize: 11 }} />
                  <YAxis yAxisId="right" orientation="right" {...axisStyle} label={{ value: "Cumulative Breaches", angle: 90, position: "insideRight", fill: "#888", fontSize: 11 }} />
                  <RTooltip {...tooltipStyle} />
                  <Legend />
                  <ReferenceLine yAxisId="left" y={85} stroke={BLUE} strokeDasharray="3 3" label={{ value: "62D Target (85%)", fill: BLUE, fontSize: 10 }} />
                  <Bar yAxisId="left" dataKey="compliance62d" name="62-Day Compliance (%)" fill={BLUE} radius={[6, 6, 0, 0]} />
                  <Bar yAxisId="left" dataKey="compliance31d" name="31-Day Decision Compliance (%)" fill={GREEN} radius={[6, 6, 0, 0]} />
                  <Bar yAxisId="right" dataKey="breaches" name="Patient Breaches" fill="#E11D48" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}

            {cwtSubTab === "backlog" && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cwtExtremeBacklog} barGap={6}>
                  <CartesianGrid stroke="rgba(255,255,255,.06)" vertical={false} />
                  <XAxis dataKey="cancer" {...axisStyle} angle={-20} textAnchor="end" height={60} />
                  <YAxis unit="%" domain={[0, 45]} {...axisStyle} />
                  <RTooltip {...tooltipStyle} />
                  <Legend />
                  <ReferenceLine y={10} stroke={RED} strokeDasharray="4 4" label={{ value: "10% Critical Backlog Threshold", fill: RED, fontSize: 10 }} />
                  <Bar dataKey="past62d" name="% Waiting Past 62 Days" fill={AMBER} radius={[4, 4, 0, 0]} />
                  <Bar dataKey="past104d" name="% Waiting Past 104 Days (Extreme Backlog)" fill={RED} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}

            {cwtSubTab === "sim" && (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={cwtSimulations}>
                  <CartesianGrid stroke="rgba(255,255,255,.06)" />
                  <XAxis dataKey="expansion" {...axisStyle} />
                  <YAxis yAxisId="left" unit=" yrs" domain={[0, 7]} {...axisStyle} label={{ value: "Years to 85% Target", angle: -90, position: "insideLeft", fill: "#888", fontSize: 11 }} />
                  <YAxis yAxisId="right" orientation="right" unit="%" domain={[70, 88]} {...axisStyle} label={{ value: "Simulated 62D Compliance (%)", angle: 90, position: "insideRight", fill: "#888", fontSize: 11 }} />
                  <RTooltip {...tooltipStyle} />
                  <Legend />
                  <ReferenceLine yAxisId="left" y={2.5} stroke={RED} strokeDasharray="3 3" label={{ value: "March 2029 Target (2.5 yrs)", fill: RED, fontSize: 10 }} />
                  <Line yAxisId="left" type="monotone" dataKey="yearsToTarget" name="Years to Reach 85% Target" stroke="#2563EB" strokeWidth={3} dot={{ r: 4 }} />
                  <Line yAxisId="right" type="monotone" dataKey="compliance62d" name="Projected 62D Compliance (%)" stroke={GREEN} strokeWidth={2.5} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>

          <p className="font-mono text-xs text-muted-foreground text-center">
            {cwtSubTab === "trajectory" && "Empirical Trajectory • High-speed triage raises FDS to ~78-80%, while 62-day treatment remains stalled at 71.90%, widening the decoupling gap Δ."}
            {cwtSubTab === "mtd" && "The 'Rule-Out Illusion' • 93.8% of cases have cancer ruled out (79.5% comp), while confirmed cancer patients suffer a 24.7 pp Malignancy Triage Deficit (54.8% comp, p < 1e-22)."}
            {cwtSubTab === "modality" && "Modality Divergence • Surgery drives 104,834 breaches (69.6% comp), while Radiotherapy collapses to 39.8% compliance under the 62-day pathway."}
            {cwtSubTab === "backlog" && "Extreme Right-Tail Queueing • Over 15.9% of Urological and 12.1% of Lung cancer patients wait past 104 days (> 3.5 months)."}
            {cwtSubTab === "sim" && "Policy Recovery Horizon • Under status quo (+0%), reaching 85% takes 6.4 years (2033); +10% surgical expansion achieves the target in 1.3 years."}
          </p>
        </TabsContent>

        {/* Tab 2: AI Gateway Economics */}
        <TabsContent value="gateway" className="mt-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-muted-foreground">
              Analyzed over <strong>646.2T tokens</strong> across <strong>1,091 model endpoints</strong>.
            </p>
            <div className="flex gap-1.5 bg-background/60 p-1 rounded-lg border border-border">
              <button
                onClick={() => setSubTab("vol")}
                className={`px-2.5 py-1 text-xs rounded-md font-mono transition-colors ${
                  subTab === "vol" ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground"
                }`}
              >
                Volume vs. Spend
              </button>
              <button
                onClick={() => setSubTab("esc")}
                className={`px-2.5 py-1 text-xs rounded-md font-mono transition-colors ${
                  subTab === "esc" ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground"
                }`}
              >
                Multi-Turn Escalation
              </button>
              <button
                onClick={() => setSubTab("pareto")}
                className={`px-2.5 py-1 text-xs rounded-md font-mono transition-colors ${
                  subTab === "pareto" ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground"
                }`}
              >
                Pareto Frontier
              </button>
            </div>
          </div>

          <div className="h-[360px] w-full pt-2">
            {subTab === "vol" && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={volumeSpend} barGap={12}>
                  <CartesianGrid stroke="rgba(255,255,255,.06)" vertical={false} />
                  <XAxis dataKey="name" {...axisStyle} />
                  <YAxis unit="%" domain={[0, 100]} {...axisStyle} />
                  <RTooltip {...tooltipStyle} />
                  <Legend />
                  <Bar dataKey="tokens" name="Share of Token Volume (%)" fill={CYAN} radius={[6, 6, 0, 0]} />
                  <Bar dataKey="spend" name="Share of Dollar Spend (%)" fill={VIOLET} radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}

            {subTab === "esc" && (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={escalation}>
                  <CartesianGrid stroke="rgba(255,255,255,.06)" />
                  <XAxis dataKey="turn" label={{ value: "Agent Turn Count (n)", position: "insideBottom", offset: -2, fill: "#888", fontSize: 11 }} {...axisStyle} />
                  <YAxis unit="x" domain={[0, 35]} {...axisStyle} />
                  <RTooltip {...tooltipStyle} />
                  <Legend />
                  <Line type="monotone" dataKey="Claude Code" stroke={CYAN} strokeWidth={2.5} dot={false} />
                  <Line type="monotone" dataKey="Hermes Agent" stroke={VIOLET} strokeWidth={2.5} dot={false} />
                  <Line type="monotone" dataKey="Kilo Code" stroke="#00E599" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            )}

            {subTab === "pareto" && (
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <CartesianGrid stroke="rgba(255,255,255,.06)" />
                  <XAxis type="number" dataKey="price" name="Blended Price ($/M tokens)" unit="$" {...axisStyle} />
                  <YAxis type="number" dataKey="iq" name="Artificial Analysis IQ" domain={[25, 80]} {...axisStyle} />
                  <ZAxis range={[70, 70]} />
                  <RTooltip {...tooltipStyle} cursor={{ strokeDasharray: "3 3" }} />
                  <Scatter name="Model Endpoints" data={pareto}>
                    {pareto.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.frontier ? CYAN : "rgba(255,255,255,.3)"} />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            )}
          </div>
          <p className="font-mono text-xs text-muted-foreground text-center">
            Figure 1: Telemetry synthesis • Open-weights models process 65.8% of global volume while proprietary models capture 60.1% of revenue.
          </p>
        </TabsContent>

        {/* Tab 3: Chatbot Arena Confounders */}
        <TabsContent value="arena" className="mt-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-muted-foreground">
              Evaluator Calibration Drift: Win-rate sensitivity to response length across sequential judge battles.
            </p>
            <span className="font-mono text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/30">
              Evaluator Experience Bias: -8.54 pp drop
            </span>
          </div>

          <div className="h-[360px] w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={arenaCalibration}>
                <CartesianGrid stroke="rgba(255,255,255,.06)" />
                <XAxis
                  dataKey="k"
                  {...axisStyle}
                  label={{ value: "Judge Sequential Experience (k)", position: "insideBottom", offset: -2, fill: "#888", fontSize: 11 }}
                />
                <YAxis unit="%" {...axisStyle} domain={[10, 75]} />
                <RTooltip {...tooltipStyle} />
                <Legend />
                <Line type="monotone" dataKey="verbosityWin" name="Longer Response Win Rate (%)" stroke={CYAN} strokeWidth={2.5} />
                <Line type="monotone" dataKey="bothBad" name="'both_bad' Frustration Rate (%)" stroke="#EF4444" strokeWidth={2} strokeDasharray="4 4" />
                <Line type="monotone" dataKey="decisiveWin" name="Decisive Win Rate (%)" stroke="#A78BFA" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="font-mono text-xs text-muted-foreground text-center">
            Figure 2: Human evaluator maturation • Novice judges (k=1) reward length heavily (66.0%), but experienced judges (k≥11) drop verbosity reliance by -8.54 pp.
          </p>
        </TabsContent>

        {/* Tab 4: Terminal Airspace ADS-B */}
        <TabsContent value="aviation" className="mt-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-muted-foreground">
              Four-Quadrant Delay Absorption: Horizontal Tortuosity (TI = D_flown / D_net) vs. Taxiway Ground Dwell across global mega-hubs.
            </p>
            <span className="font-mono text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/30">
              Asian Hubs Delay Coupling: r = 0.548
            </span>
          </div>

          <div className="h-[360px] w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={aviationTortuosity} barGap={8}>
                <CartesianGrid stroke="rgba(255,255,255,.06)" vertical={false} />
                <XAxis dataKey="hub" {...axisStyle} />
                <YAxis yAxisId="left" orientation="left" {...axisStyle} domain={[1.0, 2.0]} label={{ value: "Tortuosity Index (TI)", angle: -90, position: "insideLeft", fill: "#888", fontSize: 11 }} />
                <YAxis yAxisId="right" orientation="right" unit="m" {...axisStyle} domain={[10, 35]} label={{ value: "Taxiway Dwell (min)", angle: 90, position: "insideRight", fill: "#888", fontSize: 11 }} />
                <RTooltip {...tooltipStyle} />
                <Legend />
                <Bar yAxisId="left" dataKey="tortuosity" name="Airborne Tortuosity (D_flown / D_net)" fill={CYAN} radius={[6, 6, 0, 0]} />
                <Bar yAxisId="right" dataKey="surfaceDwell" name="Surface Taxiway Dwell (minutes)" fill={VIOLET} radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="font-mono text-xs text-muted-foreground text-center">
            Figure 3: Global TMA taxonomy • Western hubs decouple airborne vectoring from taxi dwell; Asian mega-hubs compound both delays simultaneously.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
