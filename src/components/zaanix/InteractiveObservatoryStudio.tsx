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
  AlertCircle,
  BookOpen
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
  agentpagingSlack,
  contextgcCompaction,
  clusterConcurrencyData,
  aeiMajorGroups,
  aeiInteractionModes,
  aeiThinkingQuartiles,
} from "./researchData";

const CYAN = "#0284c7";
const VIOLET = "#4f46e5";
const GREEN = "#059669";
const BLUE = "#1d4ed8";
const RED = "#dc2626";
const AMBER = "#d97706";

const tooltipStyle = {
  contentStyle: {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: 8,
    fontSize: 12,
    color: "#0f172a",
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.08)",
  },
  cursor: { fill: "rgba(15, 23, 42, 0.04)" },
};

const axisStyle = {
  stroke: "#64748b",
  fontSize: 11,
};

export function InteractiveObservatoryStudio() {
  const [domainTab, setDomainTab] = useState<string>("agentpaging");
  const [subTab, setSubTab] = useState<"vol" | "esc" | "pareto">("vol");
  const [cwtSubTab, setCwtSubTab] = useState<"trajectory" | "mtd" | "modality" | "backlog" | "sim">("trajectory");
  const [pagingSubTab, setPagingSubTab] = useState<"slack" | "gc" | "concurrency">("slack");
  const [aeiSubTab, setAeiSubTab] = useState<"occupations" | "modes" | "thinking">("occupations");

  return (
    <div className="rounded-2xl border border-[#e1e6ec] bg-white p-6 md:p-8 shadow-xs space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e1e6ec] pb-5">
        <div>
          <span className="font-sans text-xs tracking-wider text-[#1a73e8] font-semibold uppercase">
            LIVE TELEMETRY STUDIO
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-normal tracking-tight text-[#202124] mt-1">
            Cross-Domain Empirical Observatories
          </h3>
          <p className="mt-1 text-sm text-[#5f6368] font-sans">
            Real-world data ingested, modeled, and synthesized directly through Zannix analytical pipelines.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#dadce0] bg-[#f8f9fa] px-3.5 py-1 text-xs font-medium text-[#1a73e8] font-sans">
            Interactive Analytical Engine
          </span>
        </div>
      </div>

      <Tabs value={domainTab} onValueChange={setDomainTab} className="w-full">
        {/* Domain Tabs */}
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 bg-slate-100 h-auto p-1.5 gap-1 border border-slate-200">
          <TabsTrigger value="agentpaging" className="text-xs md:text-sm py-2">
            01. AI Agent Paging (FreeInference)
          </TabsTrigger>
          <TabsTrigger value="cancer" className="text-xs md:text-sm py-2">
            02. NHS Cancer Waiting Times
          </TabsTrigger>
          <TabsTrigger value="gateway" className="text-xs md:text-sm py-2">
            03. AI Gateway Economics
          </TabsTrigger>
          <TabsTrigger value="arena" className="text-xs md:text-sm py-2">
            04. Chatbot Arena Confounders
          </TabsTrigger>
          <TabsTrigger value="aviation" className="text-xs md:text-sm py-2">
            05. Terminal Airspace ADS-B
          </TabsTrigger>
          <TabsTrigger value="aei" className="text-xs md:text-sm py-2">
            06. Anthropic Economic Index
          </TabsTrigger>
        </TabsList>

        {/* Tab 1: AI Agent Paging & ContextGC */}
        <TabsContent value="agentpaging" className="mt-6 space-y-5">
          {/* Quick Action Bar for Apps & Dashboards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
            <a
              href="/apps/f63bf05f-0948-492d-96ef-458c9a86644b/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-2 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all text-xs font-mono text-blue-700 font-semibold shadow-2xs"
            >
              <PlayCircle className="size-3.5 text-blue-700" />
              <span>Launch Simulator</span>
            </a>
            <a
              href="/#/dashboards/9bcf8f41-0a3f-4398-a414-72c83bd47932"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 transition-all text-xs font-mono text-slate-700 font-medium shadow-2xs"
            >
              <LayoutDashboard className="size-3.5 text-blue-600" />
              <span>Observatory</span>
            </a>
            <a
              href="/#/stories/12a9619e-89a4-4bb8-aa4f-ff7b3fd172bd"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 transition-all text-xs font-mono text-slate-700 font-medium shadow-2xs"
            >
              <BookOpen className="size-3.5 text-blue-600" />
              <span>Interactive Story</span>
            </a>
            <Link
              to="/research/$paperId"
              params={{ paperId: "agentpaging-zero-latency-kv" }}
              className="flex items-center gap-2 p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 transition-all text-xs font-mono text-slate-700 font-medium shadow-2xs"
            >
              <FileText className="size-3.5 text-blue-600" />
              <span>Preprint Paper</span>
            </Link>
            <a
              href="/papers/agentpaging-zero-latency-kv.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 transition-all text-xs font-mono text-slate-700 font-medium shadow-2xs"
            >
              <Download className="size-3.5 text-slate-500" />
              <span>Camera PDF</span>
            </a>
            <a
              href="/q/agentpaging-metrics"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 transition-all text-xs font-mono text-slate-700 font-medium shadow-2xs"
            >
              <ExternalLink className="size-3.5 text-slate-500" />
              <span>Public API</span>
            </a>
          </div>

          {/* Sub Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-3">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setPagingSubTab("slack")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  pagingSubTab === "slack"
                    ? "bg-blue-600 text-white font-semibold shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                1. Inter-Tool Slack vs PCIe Swap
              </button>
              <button
                onClick={() => setPagingSubTab("gc")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  pagingSubTab === "gc"
                    ? "bg-blue-600 text-white font-semibold shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                2. ContextGC Token Compaction
              </button>
              <button
                onClick={() => setPagingSubTab("concurrency")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  pagingSubTab === "concurrency"
                    ? "bg-blue-600 text-white font-semibold shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                3. H100/H200/B200 Concurrency
              </button>
            </div>
            <span className="font-mono text-xs text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 font-medium">
              Harvard FreeInference Trace • 1.19M Requests
            </span>
          </div>

          {/* Sub-tab 1: Slack vs Swap */}
          {pagingSubTab === "slack" && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center">
                  <p className="font-display text-xl font-bold text-blue-700">100.00%</p>
                  <p className="font-mono text-[11px] text-slate-600">Zero-Latency Paging (PCIe 5)</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center">
                  <p className="font-display text-xl font-bold text-slate-900">2,090 ms</p>
                  <p className="font-mono text-[11px] text-slate-600">Median Tool Execution Slack</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center">
                  <p className="font-display text-xl font-bold text-emerald-600">121.6 ms</p>
                  <p className="font-mono text-[11px] text-slate-600">Avg PCIe Gen5 Swap Time</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center">
                  <p className="font-display text-xl font-bold text-blue-700">151.4x</p>
                  <p className="font-mono text-[11px] text-slate-600">Slack Headroom Multiplier</p>
                </div>
              </div>

              <div className="h-[360px] w-full pt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={agentpagingSlack} barGap={8}>
                    <CartesianGrid stroke="#e2e8f0" vertical={false} />
                    <XAxis dataKey="trigger" {...axisStyle} />
                    <YAxis yAxisId="left" orientation="left" {...axisStyle} unit=" ms" label={{ value: "Latency (ms)", angle: -90, position: "insideLeft", fill: "#64748b", fontSize: 11 }} />
                    <YAxis yAxisId="right" orientation="right" {...axisStyle} unit="x" label={{ value: "Slack Headroom (x)", angle: 90, position: "insideRight", fill: "#64748b", fontSize: 11 }} />
                    <RTooltip {...tooltipStyle} />
                    <Legend />
                    <Bar yAxisId="left" dataKey="slackMs" name="Execution Slack Delay (ms)" fill={BLUE} radius={[6, 6, 0, 0]} />
                    <Bar yAxisId="left" dataKey="swapMs" name="PCIe Gen5 Swap-in Time (ms)" fill={RED} radius={[6, 6, 0, 0]} />
                    <Bar yAxisId="right" dataKey="headroom" name="Slack Headroom Multiplier (x)" fill={GREEN} radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="font-mono text-xs text-slate-500 text-center">
                Empirical Telemetry • Tool execution slack is 17x to 150x longer than swap-in latency, allowing 100% hidden paging over PCIe Gen5.
              </p>
            </div>
          )}

          {/* Sub-tab 2: ContextGC */}
          {pagingSubTab === "gc" && (
            <div className="space-y-4">
              <div className="h-[360px] w-full pt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={contextgcCompaction}>
                    <CartesianGrid stroke="#e2e8f0" vertical={false} />
                    <XAxis dataKey="step" {...axisStyle} />
                    <YAxis {...axisStyle} unit=" tok" label={{ value: "Input Prompt Tokens", angle: -90, position: "insideLeft", fill: "#64748b", fontSize: 11 }} />
                    <RTooltip {...tooltipStyle} />
                    <Legend />
                    <Line type="monotone" dataKey="baseline" name="Baseline Prompt Tokens (Uncompacted)" stroke={RED} strokeWidth={2.5} dot={{ r: 4 }} />
                    <Line type="monotone" dataKey="gcWindow5" name="ContextGC Window W=5 (Semantic Tombstones)" stroke={BLUE} strokeWidth={2.5} dot={{ r: 4 }} />
                    <Line type="monotone" dataKey="gcWindow2" name="ContextGC Window W=2 (Aggressive)" stroke={GREEN} strokeWidth={2.5} strokeDasharray="4 4" dot={{ r: 4 }} />
                    <Line type="monotone" dataKey="toolTokens" name="Raw Intermediate Tool Tokens" stroke={AMBER} strokeWidth={1.5} dot={{ r: 3 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="font-mono text-xs text-slate-500 text-center">
                Semantic Compaction Law • Pruning stale intermediate tool outputs after 5 turns achieves 35.65% net prompt savings in deep sessions (step 26+).
              </p>
            </div>
          )}

          {/* Sub-tab 3: Concurrency */}
          {pagingSubTab === "concurrency" && (
            <div className="space-y-4">
              <div className="h-[360px] w-full pt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={clusterConcurrencyData} barGap={8}>
                    <CartesianGrid stroke="#e2e8f0" vertical={false} />
                    <XAxis dataKey="gpu" {...axisStyle} />
                    <YAxis yAxisId="left" orientation="left" {...axisStyle} label={{ value: "Concurrent Sessions", angle: -90, position: "insideLeft", fill: "#64748b", fontSize: 11 }} />
                    <YAxis yAxisId="right" orientation="right" unit=" $" {...axisStyle} label={{ value: "Cost / Session-Hr ($)", angle: 90, position: "insideRight", fill: "#64748b", fontSize: 11 }} />
                    <RTooltip {...tooltipStyle} />
                    <Legend />
                    <Bar yAxisId="left" dataKey="staticSessions" name="Static HBM Concurrency (Sessions)" fill="#94a3b8" radius={[6, 6, 0, 0]} />
                    <Bar yAxisId="left" dataKey="gcSessions" name="AgentPaging + ContextGC (Sessions)" fill={BLUE} radius={[6, 6, 0, 0]} />
                    <Bar yAxisId="right" dataKey="staticCost" name="Static Cost ($/hr)" fill={RED} radius={[6, 6, 0, 0]} />
                    <Bar yAxisId="right" dataKey="gcCost" name="AgentPaging Cost ($/hr)" fill={GREEN} radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="font-mono text-xs text-slate-500 text-center">
                Cluster Economics • AgentPaging unlocks 13.6x higher concurrent sessions on NVIDIA H100 SXM5, lowering serving costs by 92.8%.
              </p>
            </div>
          )}
        </TabsContent>

        {/* Tab 2: NHS Cancer Waiting Times */}
        <TabsContent value="cancer" className="mt-6 space-y-5">
          {/* Quick Action Bar for Apps & Dashboards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
            <a
              href="/apps/92423718-3f8d-4f20-a0d2-6fb746098919/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-2 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all text-xs font-mono text-blue-700 font-semibold shadow-2xs"
            >
              <PlayCircle className="size-3.5 text-blue-700" />
              <span>Launch Data App</span>
            </a>
            <a
              href="/#/dashboards/0fdfe093-e0cb-4db0-9bf1-aaad505be34a"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 transition-all text-xs font-mono text-slate-700 font-medium shadow-2xs"
            >
              <LayoutDashboard className="size-3.5 text-blue-600" />
              <span>Mosaic Dashboard</span>
            </a>
            <a
              href="/#/dashboards/6b63d709-0a5e-4c17-8546-c4ab22d6eb50"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 transition-all text-xs font-mono text-slate-700 font-medium shadow-2xs"
            >
              <Activity className="size-3.5 text-emerald-600" />
              <span>Executive Grid</span>
            </a>
            <Link
              to="/research/$paperId"
              params={{ paperId: "nhs-cancer-waiting-times" }}
              className="flex items-center gap-2 p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 transition-all text-xs font-mono text-slate-700 font-medium shadow-2xs"
            >
              <FileText className="size-3.5 text-indigo-600" />
              <span>Read Preprint</span>
            </Link>
            <a
              href="/papers/nhs-cancer-waiting-times.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 transition-all text-xs font-mono text-slate-700 font-medium shadow-2xs"
            >
              <Download className="size-3.5 text-amber-600" />
              <span>Paper PDF</span>
            </a>
            <a
              href="/notebooks/nhs-cancer-waiting-times.ipynb"
              download
              className="flex items-center gap-2 p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 transition-all text-xs font-mono text-slate-700 font-medium shadow-2xs"
            >
              <Sparkles className="size-3.5 text-purple-600" />
              <span>Jupyter (.ipynb)</span>
            </a>
          </div>

          {/* Sub-tabs Selector */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
            <p className="text-sm text-slate-600">
              Analyzed <strong className="text-slate-900">17.1M patient referrals</strong> across <strong className="text-slate-900">185 NHS acute trusts</strong> (2021–2026).
            </p>
            <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button
                onClick={() => setCwtSubTab("trajectory")}
                className={`px-2.5 py-1 text-xs rounded-md font-mono transition-colors ${
                  cwtSubTab === "trajectory" ? "bg-white text-blue-700 shadow-xs font-semibold" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Triage vs. Treatment
              </button>
              <button
                onClick={() => setCwtSubTab("mtd")}
                className={`px-2.5 py-1 text-xs rounded-md font-mono transition-colors ${
                  cwtSubTab === "mtd" ? "bg-white text-blue-700 shadow-xs font-semibold" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Rule-Out Illusion (MTD)
              </button>
              <button
                onClick={() => setCwtSubTab("modality")}
                className={`px-2.5 py-1 text-xs rounded-md font-mono transition-colors ${
                  cwtSubTab === "modality" ? "bg-white text-blue-700 shadow-xs font-semibold" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Modality Bottlenecks
              </button>
              <button
                onClick={() => setCwtSubTab("backlog")}
                className={`px-2.5 py-1 text-xs rounded-md font-mono transition-colors ${
                  cwtSubTab === "backlog" ? "bg-white text-blue-700 shadow-xs font-semibold" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                104-Day Backlog
              </button>
              <button
                onClick={() => setCwtSubTab("sim")}
                className={`px-2.5 py-1 text-xs rounded-md font-mono transition-colors ${
                  cwtSubTab === "sim" ? "bg-white text-blue-700 shadow-xs font-semibold" : "text-slate-600 hover:text-slate-900"
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
                  <CartesianGrid stroke="#e2e8f0" />
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
                  <CartesianGrid stroke="#e2e8f0" vertical={false} />
                  <XAxis dataKey="quarter" {...axisStyle} />
                  <YAxis unit="%" domain={[0, 100]} {...axisStyle} />
                  <RTooltip {...tooltipStyle} />
                  <Legend />
                  <ReferenceLine y={80} stroke="#64748B" strokeDasharray="3 3" label={{ value: "National Target (80%)", fill: "#64748B", fontSize: 10 }} />
                  <Bar dataKey="ruledOut" name="Ruled-Out Referrals Compliance (%)" fill={GREEN} radius={[6, 6, 0, 0]} />
                  <Bar dataKey="diagnosed" name="Diagnosed Malignancies Compliance (%)" fill={RED} radius={[6, 6, 0, 0]} />
                  <Bar dataKey="deficit" name="Malignancy Triage Deficit (pp)" fill="#8B5CF6" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}

            {cwtSubTab === "modality" && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cwtModality} barGap={8}>
                  <CartesianGrid stroke="#e2e8f0" vertical={false} />
                  <XAxis dataKey="modality" {...axisStyle} />
                  <YAxis yAxisId="left" unit="%" domain={[0, 105]} {...axisStyle} label={{ value: "Compliance (%)", angle: -90, position: "insideLeft", fill: "#64748b", fontSize: 11 }} />
                  <YAxis yAxisId="right" orientation="right" {...axisStyle} label={{ value: "Cumulative Breaches", angle: 90, position: "insideRight", fill: "#64748b", fontSize: 11 }} />
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
                  <CartesianGrid stroke="#e2e8f0" vertical={false} />
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
                  <CartesianGrid stroke="#e2e8f0" />
                  <XAxis dataKey="expansion" {...axisStyle} />
                  <YAxis yAxisId="left" unit=" yrs" domain={[0, 7]} {...axisStyle} label={{ value: "Years to 85% Target", angle: -90, position: "insideLeft", fill: "#64748b", fontSize: 11 }} />
                  <YAxis yAxisId="right" orientation="right" unit="%" domain={[70, 88]} {...axisStyle} label={{ value: "Simulated 62D Compliance (%)", angle: 90, position: "insideRight", fill: "#64748b", fontSize: 11 }} />
                  <RTooltip {...tooltipStyle} />
                  <Legend />
                  <ReferenceLine yAxisId="left" y={2.5} stroke={RED} strokeDasharray="3 3" label={{ value: "March 2029 Target (2.5 yrs)", fill: RED, fontSize: 10 }} />
                  <Line yAxisId="left" type="monotone" dataKey="yearsToTarget" name="Years to Reach 85% Target" stroke="#2563EB" strokeWidth={3} dot={{ r: 4 }} />
                  <Line yAxisId="right" type="monotone" dataKey="compliance62d" name="Projected 62D Compliance (%)" stroke={GREEN} strokeWidth={2.5} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>

          <p className="font-mono text-xs text-slate-500 text-center">
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
            <p className="text-sm text-slate-600">
              Analyzed over <strong className="text-slate-900">646.2T tokens</strong> across <strong className="text-slate-900">1,091 model endpoints</strong>.
            </p>
            <div className="flex gap-1.5 bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button
                onClick={() => setSubTab("vol")}
                className={`px-2.5 py-1 text-xs rounded-md font-mono transition-colors ${
                  subTab === "vol" ? "bg-white text-blue-700 shadow-xs font-semibold" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Volume vs. Spend
              </button>
              <button
                onClick={() => setSubTab("esc")}
                className={`px-2.5 py-1 text-xs rounded-md font-mono transition-colors ${
                  subTab === "esc" ? "bg-white text-blue-700 shadow-xs font-semibold" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Multi-Turn Escalation
              </button>
              <button
                onClick={() => setSubTab("pareto")}
                className={`px-2.5 py-1 text-xs rounded-md font-mono transition-colors ${
                  subTab === "pareto" ? "bg-white text-blue-700 shadow-xs font-semibold" : "text-slate-600 hover:text-slate-900"
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
                  <CartesianGrid stroke="#e2e8f0" vertical={false} />
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
                  <CartesianGrid stroke="#e2e8f0" />
                  <XAxis dataKey="turn" label={{ value: "Agent Turn Count (n)", position: "insideBottom", offset: -2, fill: "#64748b", fontSize: 11 }} {...axisStyle} />
                  <YAxis unit="x" domain={[0, 35]} {...axisStyle} />
                  <RTooltip {...tooltipStyle} />
                  <Legend />
                  <Line type="monotone" dataKey="Claude Code" stroke={BLUE} strokeWidth={2.5} dot={false} />
                  <Line type="monotone" dataKey="Hermes Agent" stroke={VIOLET} strokeWidth={2.5} dot={false} />
                  <Line type="monotone" dataKey="Kilo Code" stroke={GREEN} strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            )}

            {subTab === "pareto" && (
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <CartesianGrid stroke="#e2e8f0" />
                  <XAxis type="number" dataKey="price" name="Blended Price ($/M tokens)" unit="$" {...axisStyle} />
                  <YAxis type="number" dataKey="iq" name="Artificial Analysis IQ" domain={[25, 80]} {...axisStyle} />
                  <ZAxis range={[70, 70]} />
                  <RTooltip {...tooltipStyle} cursor={{ strokeDasharray: "3 3" }} />
                  <Scatter name="Model Endpoints" data={pareto}>
                    {pareto.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.frontier ? BLUE : "rgba(100, 116, 139, 0.35)"} />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            )}
          </div>
          <p className="font-mono text-xs text-slate-500 text-center">
            Figure 1: Telemetry synthesis • Open-weights models process 65.8% of global volume while proprietary models capture 60.1% of revenue.
          </p>
        </TabsContent>

        {/* Tab 3: Chatbot Arena Confounders */}
        <TabsContent value="arena" className="mt-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-slate-600">
              Evaluator Calibration Drift: Win-rate sensitivity to response length across sequential judge battles.
            </p>
            <span className="font-mono text-xs text-blue-800 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 font-medium">
              Evaluator Experience Bias: -8.54 pp drop
            </span>
          </div>

          <div className="h-[360px] w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={arenaCalibration}>
                <CartesianGrid stroke="#e2e8f0" />
                <XAxis
                  dataKey="k"
                  {...axisStyle}
                  label={{ value: "Judge Sequential Experience (k)", position: "insideBottom", offset: -2, fill: "#64748b", fontSize: 11 }}
                />
                <YAxis unit="%" {...axisStyle} domain={[10, 75]} />
                <RTooltip {...tooltipStyle} />
                <Legend />
                <Line type="monotone" dataKey="verbosityWin" name="Longer Response Win Rate (%)" stroke={BLUE} strokeWidth={2.5} />
                <Line type="monotone" dataKey="bothBad" name="'both_bad' Frustration Rate (%)" stroke="#EF4444" strokeWidth={2} strokeDasharray="4 4" />
                <Line type="monotone" dataKey="decisiveWin" name="Decisive Win Rate (%)" stroke="#8B5CF6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="font-mono text-xs text-slate-500 text-center">
            Figure 2: Human evaluator maturation • Novice judges (k=1) reward length heavily (66.0%), but experienced judges (k≥11) drop verbosity reliance by -8.54 pp.
          </p>
        </TabsContent>

        {/* Tab 4: Terminal Airspace ADS-B */}
        <TabsContent value="aviation" className="mt-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-slate-600">
              Four-Quadrant Delay Absorption: Horizontal Tortuosity (TI = D_flown / D_net) vs. Taxiway Ground Dwell across global mega-hubs.
            </p>
            <span className="font-mono text-xs text-blue-800 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 font-medium">
              Asian Hubs Delay Coupling: r = 0.548
            </span>
          </div>

          <div className="h-[360px] w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={aviationTortuosity} barGap={8}>
                <CartesianGrid stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="hub" {...axisStyle} />
                <YAxis yAxisId="left" orientation="left" {...axisStyle} domain={[1.0, 2.0]} label={{ value: "Tortuosity Index (TI)", angle: -90, position: "insideLeft", fill: "#64748b", fontSize: 11 }} />
                <YAxis yAxisId="right" orientation="right" unit="m" {...axisStyle} domain={[10, 35]} label={{ value: "Taxiway Dwell (min)", angle: 90, position: "insideRight", fill: "#64748b", fontSize: 11 }} />
                <RTooltip {...tooltipStyle} />
                <Legend />
                <Bar yAxisId="left" dataKey="tortuosity" name="Airborne Tortuosity (D_flown / D_net)" fill={BLUE} radius={[6, 6, 0, 0]} />
                <Bar yAxisId="right" dataKey="surfaceDwell" name="Surface Taxiway Dwell (minutes)" fill={AMBER} radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="font-mono text-xs text-slate-500 text-center">
            Figure 3: Global TMA taxonomy • Western hubs decouple airborne vectoring from taxi dwell; Asian mega-hubs compound both delays simultaneously.
          </p>
        </TabsContent>

        {/* Tab 6: Anthropic Economic Index */}
        <TabsContent value="aei" className="mt-6 space-y-5">
          {/* Action Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
            <Link
              to="/research/anthropic-economic-index-decoupling"
              className="flex items-center gap-2 p-2 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all text-xs font-mono text-blue-700 font-semibold shadow-2xs"
            >
              <FileText className="size-3.5 text-blue-700" />
              <span>Full Investigation</span>
            </Link>
            <a
              href="/papers/anthropic-economic-index-decoupling.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 transition-all text-xs font-mono text-slate-700 font-medium shadow-2xs"
            >
              <Download className="size-3.5 text-blue-600" />
              <span>Preprint PDF</span>
            </a>
            <a
              href="/papers/anthropic-economic-index-decoupling.tar.gz"
              download
              className="flex items-center gap-2 p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 transition-all text-xs font-mono text-slate-700 font-medium shadow-2xs"
            >
              <Download className="size-3.5 text-emerald-600" />
              <span>Reproducibility Bundle</span>
            </a>
            <a
              href="/notebooks/anthropic-economic-index-decoupling.ipynb"
              download
              className="flex items-center gap-2 p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 transition-all text-xs font-mono text-slate-700 font-medium shadow-2xs"
            >
              <BookOpen className="size-3.5 text-indigo-600" />
              <span>Jupyter Notebook</span>
            </a>
          </div>

          {/* Sub-tabs header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setAeiSubTab("occupations")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  aeiSubTab === "occupations"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Occupational Exposure vs Robotics
              </button>
              <button
                type="button"
                onClick={() => setAeiSubTab("modes")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  aeiSubTab === "modes"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Augmentation vs Automation Modes
              </button>
              <button
                type="button"
                onClick={() => setAeiSubTab("thinking")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  aeiSubTab === "thinking"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Extended Thinking Feedback Surge
              </button>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs font-mono bg-blue-50 text-blue-700 border-blue-200">
                1,411 Occupations Modeled
              </Badge>
              <Badge variant="outline" className="text-xs font-mono bg-emerald-50 text-emerald-700 border-emerald-200">
                66.2% Augmentation
              </Badge>
            </div>
          </div>

          {/* Sub-tabs Content */}
          {aeiSubTab === "occupations" && (
            <div className="space-y-3">
              <div className="h-[360px] w-full pt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={aeiMajorGroups} barGap={4}>
                    <CartesianGrid stroke="#e2e8f0" vertical={false} />
                    <XAxis dataKey="group" {...axisStyle} angle={-25} textAnchor="end" height={60} />
                    <YAxis {...axisStyle} unit="%" domain={[0, 100]} label={{ value: "Exposure Rate (%)", angle: -90, position: "insideLeft", fill: "#64748b", fontSize: 11 }} />
                    <RTooltip {...tooltipStyle} />
                    <Legend verticalAlign="top" height={36} />
                    <Bar dataKey="exposure" name="Observed Claude Exposure (%)" fill={BLUE} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="robot" name="Physical Robotics Exposure (%)" fill={GREEN} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="freyOsborne" name="Frey-Osborne Automation Risk (%)" fill={AMBER} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="font-mono text-xs text-slate-500 text-center">
                Figure 1: Macro labor bifurcation • Cognitive tasks concentrate in Computer & Math (34.3%), while physical robotics risk dominates Transportation (92.7%) and Production (90.2%).
              </p>
            </div>
          )}

          {aeiSubTab === "modes" && (
            <div className="space-y-3">
              <div className="h-[340px] w-full pt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={aeiInteractionModes} barGap={8}>
                    <CartesianGrid stroke="#e2e8f0" vertical={false} />
                    <XAxis dataKey="mode" {...axisStyle} />
                    <YAxis {...axisStyle} unit="%" domain={[0, 45]} label={{ value: "Share of Conversations (%)", angle: -90, position: "insideLeft", fill: "#64748b", fontSize: 11 }} />
                    <RTooltip {...tooltipStyle} />
                    <Bar dataKey="share" name="Conversation Share (%)" fill={CYAN} radius={[6, 6, 0, 0]}>
                      {aeiInteractionModes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.type === "Automation" ? RED : BLUE} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="font-mono text-xs text-slate-500 text-center">
                Figure 2: Interaction Archetypes across 3,364 tasks • Pure directive automation is only 33.8%; collaborative augmentation dominates at 66.2%.
              </p>
            </div>
          )}

          {aeiSubTab === "thinking" && (
            <div className="space-y-3">
              <div className="h-[340px] w-full pt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={aeiThinkingQuartiles} barGap={8}>
                    <CartesianGrid stroke="#e2e8f0" vertical={false} />
                    <XAxis dataKey="quartile" {...axisStyle} />
                    <YAxis {...axisStyle} unit="%" domain={[0, 80]} label={{ value: "Percentage (%)", angle: -90, position: "insideLeft", fill: "#64748b", fontSize: 11 }} />
                    <RTooltip {...tooltipStyle} />
                    <Legend verticalAlign="top" height={36} />
                    <Bar dataKey="totalAugmentation" name="Total Augmentation Share (%)" fill={VIOLET} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="feedbackShare" name="Feedback Loop Share (%)" fill={BLUE} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="font-mono text-xs text-slate-500 text-center">
                Figure 3: Extended Reasoning Impact • As tasks require deep test-time thinking, human feedback loops surge significantly (Welch t = 3.7785, p &lt; 0.001).
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
