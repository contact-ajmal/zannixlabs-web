import { useState } from "react";
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
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  volumeSpend,
  escalation,
  pareto,
  arenaCalibration,
  aviationTortuosity,
  cricketScoringHazard,
} from "./researchData";

const CYAN = "#00F2FE";
const VIOLET = "#7B2CBF";
const SUCCESS = "#10B981";
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
  const [subTab, setSubTab] = useState<"vol" | "esc" | "pareto">("vol");

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
            Real-world data ingested and synthesized directly through Zannix analytical pipelines.
          </p>
        </div>
        <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary font-mono text-xs">
          Interactive Analytical Engine
        </Badge>
      </div>

      <Tabs defaultValue="gateway" className="w-full">
        {/* Domain Tabs */}
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-secondary/60 h-auto p-1.5 gap-1">
          <TabsTrigger value="gateway" className="text-xs md:text-sm py-2">
            01. AI Gateway Economics
          </TabsTrigger>
          <TabsTrigger value="arena" className="text-xs md:text-sm py-2">
            02. Chatbot Arena Confounders
          </TabsTrigger>
          <TabsTrigger value="aviation" className="text-xs md:text-sm py-2">
            03. Terminal Airspace ADS-B
          </TabsTrigger>
          <TabsTrigger value="cricket" className="text-xs md:text-sm py-2">
            04. Sports Biomechanics
          </TabsTrigger>
        </TabsList>

        {/* Tab 1: AI Gateway Economics */}
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
                  <YAxis unit="%" {...axisStyle} domain={[0, 80]} />
                  <RTooltip {...tooltipStyle} />
                  <Legend />
                  <Bar dataKey="tokens" name="% of Total Token Volume" fill={CYAN} radius={[6, 6, 0, 0]} />
                  <Bar dataKey="spend" name="% of Total Dollar Spend" fill={VIOLET} radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}

            {subTab === "esc" && (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={escalation}>
                  <CartesianGrid stroke="rgba(255,255,255,.06)" />
                  <XAxis
                    dataKey="turn"
                    {...axisStyle}
                    label={{ value: "Turns Elapsed (n)", position: "insideBottom", offset: -2, fill: "#888", fontSize: 11 }}
                  />
                  <YAxis unit="x" {...axisStyle} domain={[0, 35]} />
                  <RTooltip {...tooltipStyle} />
                  <Legend />
                  <Line type="monotone" dataKey="Claude Code" stroke={CYAN} strokeWidth={2.5} dot={false} />
                  <Line type="monotone" dataKey="Hermes Agent" stroke="#A78BFA" strokeWidth={2.5} dot={false} />
                  <Line type="monotone" dataKey="Kilo Code" stroke="#34D399" strokeWidth={2.5} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            )}

            {subTab === "pareto" && (
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart>
                  <CartesianGrid stroke="rgba(255,255,255,.06)" />
                  <XAxis
                    type="number"
                    dataKey="price"
                    name="Blended Price"
                    unit=" $/1M"
                    scale="log"
                    domain={[0.1, 40]}
                    {...axisStyle}
                  />
                  <YAxis type="number" dataKey="iq" name="Artificial Analysis IQ" {...axisStyle} domain={[25, 80]} />
                  <ZAxis dataKey="name" name="Model" range={[120, 120]} />
                  <RTooltip {...tooltipStyle} />
                  <Scatter data={pareto}>
                    {pareto.map((p) => (
                      <Cell key={p.name} fill={p.frontier ? CYAN : VIOLET} />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            )}
          </div>
          <p className="font-mono text-xs text-muted-foreground text-center">
            Figure 1: Telemetry snapshot • Cyan data points indicate non-dominated Pareto frontier models.
          </p>
        </TabsContent>

        {/* Tab 2: LMSYS Chatbot Arena Confounders */}
        <TabsContent value="arena" className="mt-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-muted-foreground">
              Evaluator Calibration Curve across <strong>13,383 human judges</strong> sequenced chronologically from $k=1$ to $k \ge 11$.
            </p>
            <span className="font-mono text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/30">
              Unlearning Verbosity Bias: -8.54 pp
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

        {/* Tab 3: Terminal Airspace ADS-B */}
        <TabsContent value="aviation" className="mt-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-muted-foreground">
              Four-Quadrant Delay Absorption: Horizontal Tortuosity ($TI = D_{flown} / D_{net}$) vs. Taxiway Ground Dwell across global mega-hubs.
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

        {/* Tab 4: Sports Biomechanics */}
        <TabsContent value="cricket" className="mt-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-muted-foreground">
              Empirical scoring ceiling across <strong>278,205 deliveries</strong>: Dismissal Hazard surges non-linearly above <strong>8.98 RPO</strong>.
            </p>
            <span className="font-mono text-xs text-destructive bg-destructive/10 px-2.5 py-1 rounded-md border border-destructive/30">
              Hazard Surges 2.33x Above 8.98 RPO
            </span>
          </div>

          <div className="h-[360px] w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cricketScoringHazard} barGap={8}>
                <CartesianGrid stroke="rgba(255,255,255,.06)" vertical={false} />
                <XAxis dataKey="rrr" {...axisStyle} label={{ value: "Required Run Rate (RRR)", position: "insideBottom", offset: -2, fill: "#888", fontSize: 11 }} />
                <YAxis yAxisId="left" orientation="left" unit="%" {...axisStyle} domain={[0, 14]} label={{ value: "Wicket Dismissal Hazard (%)", angle: -90, position: "insideLeft", fill: "#888", fontSize: 11 }} />
                <YAxis yAxisId="right" orientation="right" {...axisStyle} domain={[4, 12]} label={{ value: "Actual Run Rate Achieved", angle: 90, position: "insideRight", fill: "#888", fontSize: 11 }} />
                <RTooltip {...tooltipStyle} />
                <Legend />
                <Bar yAxisId="left" dataKey="hazardPct" name="Dismissal Hazard per Delivery (%)" fill="#EF4444" radius={[6, 6, 0, 0]} />
                <Bar yAxisId="right" dataKey="runRateAchieved" name="Actual Run Rate Output (RPO)" fill={SUCCESS} radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="font-mono text-xs text-muted-foreground text-center">
            Figure 4: Biomechanical Scoring Ceiling • Beyond 8.98 RPO, aggressive stroke-making converts purely into wickets without accelerating scoring velocity.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
