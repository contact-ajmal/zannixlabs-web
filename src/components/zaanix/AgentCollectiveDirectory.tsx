import { useState, useMemo } from "react";
import {
  BookOpen,
  Dna,
  Database,
  Compass,
  Sigma,
  GitFork,
  Binary,
  Cpu,
  Palette,
  ShieldAlert,
  CheckCircle2,
  FileText,
  TrendingUp,
  Globe,
  Sparkles,
  Layers,
  Search,
  Wrench,
  Package,
  Workflow,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SPECIALIST_AGENTS,
  RESEARCH_SKILLS,
  RESEARCH_PHASES,
  type SpecialistAgent,
  type ResearchSkillItem,
} from "./agentCollectiveData";

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Dna,
  Database,
  Compass,
  Sigma,
  GitFork,
  Binary,
  Cpu,
  Palette,
  ShieldAlert,
  CheckCircle2,
  FileText,
  TrendingUp,
  Globe,
};

export function AgentCollectiveDirectory({ previewOnly = false }: { previewOnly?: boolean }) {
  const [activeTab, setActiveTab] = useState<"agents" | "skills">("agents");
  const [selectedPhase, setSelectedPhase] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredAgents = useMemo(() => {
    return SPECIALIST_AGENTS.filter((agent) => {
      const matchesPhase = selectedPhase === "all" || agent.phase === selectedPhase;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesPhase;
      const matchesSearch =
        agent.name.toLowerCase().includes(query) ||
        agent.title.toLowerCase().includes(query) ||
        agent.description.toLowerCase().includes(query) ||
        agent.tools.some((t) => t.toLowerCase().includes(query)) ||
        agent.capabilities.some((c) => c.toLowerCase().includes(query));
      return matchesPhase && matchesSearch;
    });
  }, [selectedPhase, searchQuery]);

  const filteredSkills = useMemo(() => {
    return RESEARCH_SKILLS.filter((skill) => {
      const query = searchQuery.toLowerCase().trim();
      if (!query) return true;
      return (
        skill.name.toLowerCase().includes(query) ||
        skill.category.toLowerCase().includes(query) ||
        skill.description.toLowerCase().includes(query) ||
        skill.primaryAgents.some((a) => a.toLowerCase().includes(query)) ||
        skill.deliverables.some((d) => d.toLowerCase().includes(query))
      );
    });
  }, [searchQuery]);

  const displayAgents = previewOnly ? filteredAgents.slice(0, 6) : filteredAgents;
  const displaySkills = previewOnly ? filteredSkills.slice(0, 4) : filteredSkills;

  return (
    <div className="space-y-8">
      {/* Header Controls: Tab Switcher & Search Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#e1e6ec] pb-6">
        {/* View Toggle */}
        <div className="inline-flex rounded-full border border-[#dadce0] bg-[#f8f9fa] p-1">
          <button
            onClick={() => setActiveTab("agents")}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium font-sans transition-all ${
              activeTab === "agents"
                ? "bg-white text-[#1a73e8] shadow-xs"
                : "text-[#5f6368] hover:text-[#202124]"
            }`}
          >
            <Sparkles className="size-3.5" />
            <span>14 Specialist Sub-Agents</span>
          </button>
          <button
            onClick={() => setActiveTab("skills")}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium font-sans transition-all ${
              activeTab === "skills"
                ? "bg-white text-[#1a73e8] shadow-xs"
                : "text-[#5f6368] hover:text-[#202124]"
            }`}
          >
            <Workflow className="size-3.5" />
            <span>10 Modular Research Skills</span>
          </button>
        </div>

        {/* Search Input */}
        {!previewOnly && (
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#80868b]" />
            <Input
              type="text"
              placeholder={activeTab === "agents" ? "Search agents, tools, roles..." : "Search skills, methodologies..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 pl-9 rounded-full border-[#dadce0] bg-white text-xs text-[#202124] focus-visible:ring-1 focus-visible:ring-[#1a73e8]"
            />
          </div>
        )}
      </div>

      {/* Phase Filters (Only when viewing agents) */}
      {activeTab === "agents" && !previewOnly && (
        <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-2">
          {RESEARCH_PHASES.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setSelectedPhase(phase.id)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors font-sans whitespace-nowrap ${
                selectedPhase === phase.id
                  ? "bg-[#1a73e8] text-white shadow-xs"
                  : "border border-[#dadce0] bg-white text-[#5f6368] hover:bg-[#f8f9fa] hover:text-[#202124]"
              }`}
            >
              {phase.label}
            </button>
          ))}
        </div>
      )}

      {/* View 1: Specialist Agents Grid */}
      {activeTab === "agents" && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayAgents.map((agent) => {
            const Icon = iconMap[agent.iconName] ?? Sparkles;
            return (
              <div
                key={agent.id}
                className="group flex flex-col justify-between rounded-2xl border border-[#dadce0] bg-white p-6 transition-all hover:border-[#1a73e8]/40 hover:shadow-md"
              >
                <div className="space-y-4">
                  {/* Top Bar: Icon + Identifier */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="grid size-11 place-items-center rounded-xl border border-[#e8f0fe] bg-[#f8fafd] text-[#1a73e8] group-hover:bg-[#1a73e8] group-hover:text-white transition-colors">
                      <Icon className="size-5" />
                    </div>
                    <span className="font-mono text-xs text-[#5f6368] bg-[#f1f3f4] px-2.5 py-1 rounded-md">
                      @{agent.name}
                    </span>
                  </div>

                  {/* Title & Phase */}
                  <div>
                    <h3 className="font-display text-lg font-medium text-[#202124] group-hover:text-[#1a73e8] transition-colors">
                      {agent.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#1a73e8] font-medium font-sans">
                      Phase {agent.phaseNumber} · {agent.phase.toUpperCase()}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#5f6368] leading-relaxed font-sans line-clamp-3">
                    {agent.description}
                  </p>

                  {/* Capabilities */}
                  <div className="space-y-1.5 pt-1">
                    <p className="text-[11px] font-semibold tracking-wider text-[#3c4043] uppercase font-sans">
                      Core Responsibilities
                    </p>
                    <ul className="space-y-1 text-xs text-[#3c4043] font-sans">
                      {agent.capabilities.slice(0, 3).map((cap, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#1a73e8] font-bold">›</span>
                          <span className="line-clamp-1">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Assigned Toolset */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-[#5f6368] uppercase font-sans">
                      <Wrench className="size-3 text-[#1a73e8]" />
                      <span>Tools &amp; MCPs</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {agent.tools.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-[#dadce0] bg-[#f8f9fa] px-2 py-0.5 text-[10px] text-[#3c4043] font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Primary Artifact Footnote */}
                <div className="mt-6 pt-3 border-t border-[#f1f3f4] flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1.5 text-[#1e8e3e]">
                    <Package className="size-3.5 shrink-0" />
                    <span className="font-medium truncate max-w-[210px]" title={agent.artifact}>
                      {agent.artifact}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* View 2: Modular Research Skills Grid */}
      {activeTab === "skills" && (
        <div className="grid gap-6 md:grid-cols-2">
          {displaySkills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col justify-between rounded-2xl border border-[#dadce0] bg-white p-6 transition-all hover:border-[#1a73e8]/40 hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="rounded-full border border-[#dadce0] bg-[#f8f9fa] px-2.5 py-0.5 text-[10px] font-medium text-[#1a73e8] uppercase tracking-wider font-sans">
                      {skill.category}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-medium text-[#202124]">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-[#5f6368] bg-[#f1f3f4] px-2 py-1 rounded-md">
                    {skill.id}
                  </span>
                </div>

                <p className="text-xs text-[#5f6368] leading-relaxed font-sans">
                  {skill.description}
                </p>

                {/* Orchestration Workflow */}
                <div className="space-y-2 pt-2">
                  <p className="text-[11px] font-semibold tracking-wider text-[#3c4043] uppercase font-sans flex items-center gap-1.5">
                    <Workflow className="size-3 text-[#1a73e8]" />
                    <span>Specialist Orchestration Chain</span>
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {skill.workflow.map((agentName, idx) => (
                      <span key={agentName} className="flex items-center gap-1">
                        <span className="rounded-md border border-blue-200 bg-blue-50 px-2 py-0.5 text-xs text-blue-800 font-mono font-medium">
                          @{agentName}
                        </span>
                        {idx < skill.workflow.length - 1 && (
                          <span className="text-slate-400 font-mono text-xs">→</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="space-y-2 pt-2">
                  <p className="text-[11px] font-semibold tracking-wider text-[#5f6368] uppercase font-sans">
                    Research Deliverables
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#3c4043] font-sans">
                    {skill.deliverables.map((deliv, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="size-3.5 text-[#1e8e3e] shrink-0" />
                        <span className="truncate">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
