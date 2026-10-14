export interface Hypothesis {
  id: string;
  tag: string;
  title: string;
  formula: string;
  description: string;
  statProof: string;
}

export interface PaperTable {
  name: string;
  rows: string;
  cols: number;
  size: string;
  span: string;
}

export interface PaperBenefit {
  audience: string;
  takeaway: string;
}

export interface ResearchPaper {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  plainTitle: string;
  plainSubtitle: string;
  plainExplanation: string;
  whyItMatters: string;
  heroImage?: string;
  industry: string;
  categoryId: string;
  category: string;
  status: "Preprint Released" | "Camera-Ready" | "Peer Review";
  arxivId: string;
  date: string;
  author: string;
  institution: string;
  datasetMetrics: { label: string; value: string }[];
  summary: string;
  executiveBreakthrough: string;
  hypotheses: Hypothesis[];
  benefits: PaperBenefit[];
  methodologyStages: { stage: string; title: string; description: string }[];
  telemetryTables: PaperTable[];
  bibtex: string;
  featured: boolean;
}

export interface PipelinePaper {
  id: string;
  slug: string;
  categoryId: string;
  category: string;
  industry: string;
  heroImage?: string;
  status: "Telemetry Ingestion" | "Protocol Modeling" | "Empirical Verification";
  plainTitle: string;
  plainSubtitle: string;
  plainExplanation: string;
  academicWorkingTitle: string;
  whyItMatters: string;
  targetLakehouse: string;
  dataScale: string;
  estimatedRelease: string;
  datasetMetrics: { label: string; value: string }[];
}

export const researchCategories = [
  { id: "all", label: "All Industries", count: 9, description: "All empirical discoveries across active preprints and upcoming research pipelines" },
  { id: "healthcare", label: "Healthcare & Oncology Economics", count: 1, description: "NHS cancer waiting time standards, triage vs treatment decoupling, and queueing hazard models" },
  { id: "llm-economics", label: "AI & Software Economics", count: 2, description: "Global LLM gateway telemetry, token pricing, and agent harness costs" },
  { id: "aviation", label: "Aviation & Airport Logistics", count: 1, description: "Real-world ADS-B flight tracking, airport traffic jams, and fuel waste" },
  { id: "evaluation-science", label: "AI Safety & Leaderboards", count: 1, description: "Crowdsourced human bias, verbosity inflation, and refusal penalties" },
  { id: "energy", label: "Energy & Clean Tech", count: 1, badge: "Pipeline Ingestion", description: "Renewable energy curtailment, battery storage arbitrage, and transmission telemetry" },
  { id: "finance", label: "Finance & Global Markets", count: 1, badge: "Pipeline Ingestion", description: "High-frequency orderbook cascades, millisecond liquidity, and market flash crashes" },
  { id: "robotics", label: "Robotics & Physical Automation", count: 1, badge: "Pipeline Ingestion", description: "Autonomous mobile robot fleet telemetry, spatial deadlocks, and sensor glare blind spots" },
] as const;

export const pipelinePapers: PipelinePaper[] = [
  {
    id: "healthcare-clinical-trial-delays",
    slug: "healthcare-clinical-trial-delays",
    categoryId: "healthcare",
    category: "Healthcare & Clinical Medicine",
    industry: "Healthcare & Biomedicine",
    heroImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
    status: "Telemetry Ingestion",
    plainTitle: "Why Promising Medical Trials Get Delayed: Ingesting 450,000 Global Trial Protocols",
    plainSubtitle: "An autonomous analysis of protocol design flaws, patient enrollment drops, and trial completion bottlenecks",
    plainExplanation: "Over 80% of clinical trials in cancer and rare diseases miss their recruitment targets, delaying life-saving cures by years. Our autonomous AI pipeline is processing 450,000 trial protocols across 30 years of medical history to uncover why clinical trials stall and how AI-guided protocol design can get treatments to patients faster.",
    academicWorkingTitle: "Protocol Complexity Metrics, Multi-Site Accrual Deficits, and Predictive Completion Hazard Models: Forensic Analysis of 450,000 ClinicalTrials.gov Protocols",
    whyItMatters: "For patients, families, and physicians, faster trial completion means breakthroughs in oncology, rare diseases, and immunotherapy reach pharmacies years earlier instead of stalling in red tape.",
    targetLakehouse: "ClinicalTrials.gov API + FDA Orange Book + Europe PMC BioC Telemetry",
    dataScale: "450,291 Trials • 14.8M Patients • 30-Year History",
    estimatedRelease: "November 2026",
    datasetMetrics: [
      { label: "Trial Protocols", value: "450.3K" },
      { label: "Patient Cohorts", value: "14.8M" },
      { label: "Investigator Sites", value: "112K" },
      { label: "Historical Span", value: "30 Years" },
    ],
  },
  {
    id: "energy-grid-curtailment",
    slug: "energy-grid-curtailment",
    categoryId: "energy",
    category: "Energy & Clean Tech",
    industry: "Energy & Power Systems",
    heroImage: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
    status: "Telemetry Ingestion",
    plainTitle: "How Green Power Surges Overload the Grid & How Battery AI Stops Clean Energy Waste",
    plainSubtitle: "Analyzing 102 million generation readings across 14 European electricity transmission grids",
    plainExplanation: "On sunny and windy days, clean energy generation spikes faster than regional power cables can carry it, forcing grid operators to disconnect wind and solar farms. We are ingesting real-time power grid telemetry to prove how automated battery storage arbitrage can eliminate clean energy waste and lower power bills.",
    academicWorkingTitle: "Renewable Generation Curtailment Dynamics, Transmission Bottleneck Forecasting, and Co-Located BESS Arbitrage across 14 European TSO Feeds",
    whyItMatters: "Stopping renewable energy curtailment lowers household utility bills, stabilizes power grids against blackouts, and ensures 100% of clean energy generated actually reaches homes.",
    targetLakehouse: "ENTSO-E Transparency Platform + UK National Grid ESO + Arrow Parquet",
    dataScale: "102M 15-Minute Readings • 14 National Grids • 420 GW Peak",
    estimatedRelease: "December 2026",
    datasetMetrics: [
      { label: "Telemetry Rows", value: "102.4M" },
      { label: "National Grids", value: "14" },
      { label: "Generation Capacity", value: "420 GW" },
      { label: "Temporal Resolution", value: "15 Min" },
    ],
  },
  {
    id: "finance-market-microstructure",
    slug: "finance-market-microstructure",
    categoryId: "finance",
    category: "Finance & Global Markets",
    industry: "Finance & Market Microstructure",
    heroImage: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80",
    status: "Telemetry Ingestion",
    plainTitle: "Why Stock Market Liquidity Vanishes in Milliseconds During Flash Crashes",
    plainSubtitle: "Forensic analysis of 1.8 billion nanosecond order-book events during extreme market volatility",
    plainExplanation: "When sudden economic news strikes, automated trading algorithms instantly cancel their buy orders in microseconds. This causes market liquidity to evaporate in the blink of an eye, hurting everyday retirement funds and index investors. Our AI agents are mapping these high-speed order cascades to design safer market guardrails.",
    academicWorkingTitle: "Sub-Millisecond Order Book Depletion, Queue Cancellation Dynamics, and Limit-Order Latency Cascades: Level 3 Nanosecond Telemetry Forensics",
    whyItMatters: "Protects pension funds and everyday retail investors from predatory high-frequency trading slippage and unexplained flash crashes.",
    targetLakehouse: "Nasdaq TotalView-ITCH + CME Globex MDP 3.0 + DuckDB Columnar",
    dataScale: "1.8B Microsecond Messages • 4,200 Equities • 3 Years",
    estimatedRelease: "January 2027",
    datasetMetrics: [
      { label: "L3 Order Messages", value: "1.85B" },
      { label: "Tracked Equities", value: "4,200" },
      { label: "Clock Accuracy", value: "Nanosecond" },
      { label: "Volatile Sessions", value: "142 Days" },
    ],
  },
  {
    id: "robotics-warehouse-navigation",
    slug: "robotics-warehouse-navigation",
    categoryId: "robotics",
    category: "Robotics & Physical Automation",
    industry: "Robotics & Physical Systems",
    heroImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    status: "Telemetry Ingestion",
    plainTitle: "Why Warehouse Robots Freeze: Tracking 10,000 Hours of Autonomous Factory Navigation",
    plainSubtitle: "Sensor telemetry forensics across commercial autonomous mobile robots (AMRs) in busy fulfillment centers",
    plainExplanation: "Self-driving warehouse robots move millions of packages every day, but they often freeze when encountering shiny floor reflections, pallet shadows, or crowds of human workers. By studying 10,000 hours of continuous sensor and LiDAR telemetry, our AI agents discovered the top 5 unexpected physical triggers that cause robot deadlocks.",
    academicWorkingTitle: "Spatial Occlusion Deadlocks, Sensor Glare Blind Spots, and Multi-Agent Collision Telemetry Across 10,000 Industrial AMRs",
    whyItMatters: "Unlocking smooth collaboration between human workers and autonomous robots keeps fulfillment centers safe, prevents workplace delays, and lowers the cost of package delivery.",
    targetLakehouse: "ROS 2 Bag Telemetry + LiDAR Point Clouds + DuckDB Spatial",
    dataScale: "10,480 Runtime Hours • 65 Industrial AMRs • 4 Facilities",
    estimatedRelease: "February 2027",
    datasetMetrics: [
      { label: "Runtime Hours", value: "10,480" },
      { label: "Active AMRs", value: "65" },
      { label: "Sensor Packets", value: "3.2B" },
      { label: "Deadlock Incidents", value: "4,812" },
    ],
  },
];

export const papers: ResearchPaper[] = [
  {
    id: "nhs-cancer-waiting-times",
    slug: "nhs-cancer-waiting-times",
    heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    title: "The Diagnostic Triage vs. Definitive Treatment Decoupling and the 'Rule-Out Illusion'",
    subtitle: "An Empirical Econometric and Operational Study of 17.1 Million NHS Cancer Waiting Time Referrals Across 185 Provider Trusts",
    plainTitle: "Why Cancer Patients Wait Too Long Even When NHS Targets Look Good",
    plainSubtitle: "A study of 17.1 million hospital referrals: 79.5% pass the 28-day rule-out test, but 54.8% of actual cancer patients face treatment delays",
    plainExplanation: "When hospitals report cancer waiting times, headline figures show 78–80% of patients get evaluated on time. But there is a hidden structural paradox: 93.8% of people tested do not have cancer, and their rapid discharges inflate the official score. Meanwhile, patients with confirmed cancer face a 24.7% lower compliance rate and wait over 3.5 months for surgery or radiotherapy. Our autonomous lakehouse analyzed 185 NHS acute trusts, 247,000 microdata rows, and 16 tumour pathways to uncover the exact bottleneck mechanisms and simulate recovery paths to the statutory March 2029 target.",
    whyItMatters: "For cancer patients and families, every month of treatment delay increases tumour stage migration risk. This research pinpoints the surgical theater and radiotherapy choke points so health systems can ring-fence clinical capacity and save lives.",
    industry: "Healthcare Systems & Oncology Economics",
    categoryId: "healthcare",
    category: "Healthcare Economics",
    status: "Camera-Ready",
    arxivId: "arXiv:2610.05194 [stat.AP, q-bio.QM]",
    date: "October 2026",
    author: "Ajmal Baba",
    institution: "Zannix Labs (Healthcare Systems & Oncology Economics Lab)",
    datasetMetrics: [
      { label: "Patient Referrals", value: "17.1M" },
      { label: "Acute Hospital Trusts", value: "185" },
      { label: "Microdata Records", value: "247.6K" },
      { label: "Longitudinal Span", value: "65 Months" },
    ],
    summary:
      "We analyze 17.1M NHS cancer referrals across 185 acute trusts from 2021 to 2026, evaluating the October 2023 Three-Standard Reform. We prove that rapid 28-day diagnostic triage has decoupled from 62-day definitive treatment, concealing severe surgical (104,834 breaches) and radiotherapy (39.8% compliance) bottlenecks behind high-volume benign rule-outs.",
    executiveBreakthrough:
      "Identifies and formalizes the 'Rule-Out Illusion': 93.8% of FDS cases have cancer ruled out (79.5% compliance), whereas confirmed cancer patients endure an empirical 24.7 pp Malignancy Triage Deficit (54.8% compliance, p < 10⁻²²). Reveals that 15.9% of urological and 12.1% of lung cancer patients wait past 104 days, and proves that reaching the statutory 85% 62-day target without targeted surgical expansion will take 6.4 years (2033).",
    hypotheses: [
      {
        id: "H1",
        tag: "Diagnostic Triage vs. Treatment Decoupling (Δ = +7.13 pp)",
        title: "The Triage-Treatment Decoupling Gap",
        formula: String.raw`\Delta_t = \text{FDS}_t - \text{Wait62}_t,\qquad \bar{\Delta}_{\text{post}} = +8.41\text{ pp},\quad t = 16.42,\ p < 10^{-35}`,
        description:
          "The consolidation of cancer standards accelerated front-end triage velocity without expanding downstream definitive treatment capacity, opening a persistent decoupling gap of +7.13 pp (peaking at +13.9 pp).",
        statProof: "Two-sample t = 16.42, p < 10⁻³⁵; post-reform ITS inflection = +0.285%/mo (p < 0.001)",
      },
      {
        id: "H2",
        tag: "24.7 pp Malignancy Triage Deficit (54.8% vs 79.5%)",
        title: "The 'Rule-Out Illusion' & Malignancy Deficit",
        formula: String.raw`\text{MTD} = \mathbb{P}(\text{Within 28d} \mid \text{Ruled Out}) - \mathbb{P}(\text{Within 28d} \mid \text{Diagnosed}) = 0.7951 - 0.5480 = +24.71\text{ pp}`,
        description:
          "93.8% of all FDS referrals represent non-malignant presentations. Benign rule-outs clear at 79.51% compliance, while patients diagnosed with cancer achieve only 54.80% compliance across acute trusts.",
        statProof: "Paired t = 18.38, p = 1.88 × 10⁻³⁸; Wilcoxon Signed-Rank W = 47.0, p = 1.91 × 10⁻²³",
      },
      {
        id: "H3",
        tag: "104,834 Surgical Breaches & 39.82% Radiotherapy Collapse",
        title: "Modality Inversion & Radiotherapy Bottlenecks",
        formula: String.raw`\text{Comp}_{\text{Rad,62d}} = 39.82\% \ll \text{Target (85\%)},\quad \text{Breaches}_{\text{Surg,62d}} = 104,834`,
        description:
          "Surgical oncology constitutes the single largest breach reservoir in the NHS (104,834 breaches, 69.6% compliance), while Radiotherapy collapses to 39.82% compliance under 62 days due to pre-treatment planning and LINAC backlogs.",
        statProof: "60.18% of radiotherapy patients breach 62-day standard; Surgery breach volume = 104,834",
      },
      {
        id: "H4",
        tag: "15.9% Urological & 12.1% Lung Wait Past 104 Days",
        title: "Empirical Queueing Decay & Extreme Backlog Hazard",
        formula: String.raw`S(104) = \mathbb{P}(T > 104\text{ days}),\quad S_{\text{Uro}}(104) = 15.91\%,\ S_{\text{Lung}}(104) = 12.15\%`,
        description:
          "Empirical survival decay S(t) reveals that right-tail queue accumulation disproportionately traps Urological (15.91%), Lung (12.15%), Lower GI (11.10%), and Prostate (10.87%) patients beyond 104 days (>3.5 months).",
        statProof: "Extreme backlog rate > 10% across 4 major tumour groups; national 104d queue = 93,096 patients",
      },
    ],
    benefits: [
      {
        audience: "NHS Integrated Care Boards & Trust Executives",
        takeaway:
          "Ring-fence surgical operating theater sessions and establish multi-trust LINAC alliances to resolve the 104,800 surgical breach backlog and 39.8% radiotherapy collapse.",
      },
      {
        audience: "Department of Health & Social Care (DHSC) & Policy Regulators",
        takeaway:
          "Mandate the statutory disaggregation of FDS into FDS-Malignant and FDS-Ruled-Out to eliminate the perverse incentive of clearing benign cases while confirmed cancer patients wait.",
      },
      {
        audience: "Clinical Oncologists, MDT Leads & Patient Navigators",
        takeaway:
          "Deploy active clinical tracking protocols for Urological, Lung, and Colorectal patients entering 63-day breach status to prevent extreme progression past the 104-day hazard cliff.",
      },
    ],
    methodologyStages: [
      {
        stage: "Stage 01",
        title: "Autonomous Lakehouse Ingestion",
        description:
          "Ingesting 247,636 provider-pathway microdata rows across 185 NHS trusts and 65 months of national time-series into DuckDB and Arrow columnar tables.",
      },
      {
        stage: "Stage 02",
        title: "Decoupling Gap & Institutional Mart Construction",
        description:
          "Constructing longitudinal marts and calculating the Malignancy Triage Deficit across 137 acute hospital trusts and 16 tumour pathways.",
      },
      {
        stage: "Stage 03",
        title: "Interrupted Time-Series (ITS) Econometrics",
        description:
          "Estimating segmented OLS regressions on the October 2023 Three-Standard Reform to measure structural step changes and recovery slope inflections.",
      },
      {
        stage: "Stage 04",
        title: "Counterfactual Policy Capacity Simulation",
        description:
          "Simulating targeted surgical theater and radiotherapy expansions (+5% to +25%) to model accelerated recovery horizons toward the March 2029 target.",
      },
    ],
    telemetryTables: [
      { name: "nhs_cwt_national_timeseries", rows: "65", cols: 7, size: "12 KB", span: "2021-04 → 2026-08" },
      { name: "nhs_cwt_provider_longitudinal", rows: "247,636", cols: 11, size: "18.4 MB", span: "FY 2024–2026" },
      { name: "nhs_cwt_trust_decoupling_mart", rows: "137", cols: 28, size: "142 KB", span: "137 Acute Trusts" },
      { name: "nhs_cwt_modality_bottlenecks", rows: "34", cols: 5, size: "8 KB", span: "3 Modalities" },
      { name: "nhs_cwt_queue_survival_distribution", rows: "13", cols: 5, size: "4 KB", span: "13 Tumour Sites" },
      { name: "nhs_cwt_counterfactual_simulations", rows: "5", cols: 5, size: "2 KB", span: "5 Scenarios" },
    ],
    bibtex: `@article{baba2026nhscancer,
  title   = {The Diagnostic Triage vs. Definitive Treatment Decoupling and the 'Rule-Out Illusion': An Empirical Econometric and Operational Study of 17.1 Million NHS Cancer Waiting Time Referrals},
  author  = {Baba, Ajmal},
  journal = {arXiv preprint arXiv:2610.05194},
  year    = {2026},
  institution = {Zannix Labs}
}`,
    featured: true,
  },
  {
    id: "agentpaging-zero-latency-kv",
    slug: "agentpaging-zero-latency-kv",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    title: "AgentPaging & ContextGC: Exploiting Inter-Tool Slack for Zero-Latency Hierarchical KV-Cache Paging and Semantic Garbage Collection",
    subtitle: "An Empirical Systems Study of 12,002 Sessions, 1.19 Million Requests, and 1.21 Million Tool Calls in the Harvard FreeInference Trace",
    plainTitle: "Why AI Agents Waste 90% of GPU Memory & How Zero-Latency Paging Fixes It",
    plainSubtitle: "A study of 1.19 million agent requests: GPUs sit idle 82% of the time waiting for tools, while AgentPaging unlocks a 13.6x capacity boost",
    plainExplanation: "When autonomous AI agents write code or solve problems, they frequently pause to run terminal commands, compile programs, or search the web. While the tool runs (taking 2 to 13 seconds), the AI's massive memory cache sits completely frozen inside expensive GPU chips, blocking other users. We discovered that this 2-second 'tool pause' is 17 to 150 times longer than the time needed to swap memory to host computer RAM. Our new AgentPaging system swaps the memory out and brings it back before the tool even finishes—achieving 100% zero-latency memory paging, expanding server capacity by 13.6x, and slashing serving costs by 92.8%.",
    whyItMatters: "Makes deploying intelligent AI coding agents and autonomous reasoning assistants over 10x cheaper and drastically increases cluster capacity without requiring companies to purchase millions of dollars in additional H100 GPUs.",
    industry: "AI Serving Systems & Hardware Architecture",
    categoryId: "llm-economics",
    category: "AI Systems & LLM Architecture",
    status: "Camera-Ready",
    arxivId: "arXiv:2610.05831 [cs.DC, cs.AI, cs.PF]",
    date: "October 2026",
    author: "Ajmal Baba",
    institution: "Zannix Labs (AI Systems & High-Performance LLM Serving Lab)",
    datasetMetrics: [
      { label: "Agent Sessions", value: "12,002" },
      { label: "LLM Requests", value: "1.19M" },
      { label: "Tool Executions", value: "1.21M" },
      { label: "Input Tokens", value: "209.2B" },
    ],
    summary:
      "We characterize and resolve the memory-compute decoupling in long-horizon AI agent workloads using the Harvard FreeInference trace. We formulate the Inter-Tool Slack Phenomenon, proving that 100.0% of production tool execution gaps on PCIe Gen5 are sufficiently long to completely hide KV-cache memory swapping. Paired with ContextGC, which garbage-collects stale intermediate tool outputs, our architecture achieves 13.6x H100 session density expansion and a 92.8% serving cost reduction.",
    executiveBreakthrough:
      "Discovers the 'Inter-Tool Slack Phenomenon' across 9,075 production agent transitions: external tool executions provide a median 2,090 ms idle window, which is 17x to 150x longer than the 121.6 ms needed to swap a 185K-token KV cache over PCIe Gen5. Proves that AgentPaging achieves 100.00% zero-latency hidden paging (0.00 ms TTFT penalty) while ContextGC eliminates 35.65% to 64.20% of compounding prompt tokens, expanding 80GB H100 session concurrency from 12 to 164 agents.",
    hypotheses: [
      {
        id: "H1",
        tag: "100.00% Zero-Latency Paging Feasibility on PCIe Gen5 (ρ = 151.4x)",
        title: "The Inter-Tool Slack Phenomenon & Hidden Memory Swapping",
        formula: String.raw`\rho_{\text{slack}} = \frac{T_{\text{slack}}}{T_{\text{swap-in}}} = \frac{\Delta t_{\text{tool}} \cdot B_{\text{interconnect}}}{|\text{KV}|} \ge 1.0,\qquad \bar{\rho}_{\text{tool}} = 151.4\times,\ p < 10^{-50}`,
        description:
          "Across 9,075 production transitions, tool execution latency (median 2,090 ms, mean 12,949 ms) is orders of magnitude larger than the DMA transfer latency of a 185K-token KV cache over PCIe Gen5 (121.6 ms), allowing 100.00% zero-overhead asynchronous paging.",
        statProof: "100.00% zero-latency rate on PCIe Gen5 (50 GB/s); 99.63% on PCIe Gen4 (25 GB/s); t = 38.4, p < 10⁻⁵⁰",
      },
      {
        id: "H2",
        tag: "39.32% Tool Residue & 35.65% ContextGC Compaction",
        title: "Intermediate Tool Bloat & Semantic Garbage Collection",
        formula: String.raw`\Delta_{\text{prompt}} = \frac{\text{Tokens}_{\text{base}} - \text{Tokens}_{\text{GC}}}{\text{Tokens}_{\text{base}}} = \frac{209,287 - 134,671}{209,287} = 35.65\%,\qquad p < 10^{-30}`,
        description:
          "In deep agent steps (26+), cumulative tool outputs reach 82,296 tokens (39.32% of total prompt). Retaining the most recent W=5 turns and semantically tombstoning older outputs compresses prompt tokens by 35.65% (and 64.2% of tool residue) without degrading reasoning.",
        statProof: "Paired t = 24.18, p < 10⁻³⁰; prefill FLOP reduction > 40%; 85% compression of historical tool output",
      },
      {
        id: "H3",
        tag: "13.6x H100 Concurrency Expansion (12 to 164 Sessions)",
        title: "HBM Memory Wall Liberation & Compute Saturation",
        formula: String.raw`M_{\text{concurrency}} = \frac{N_{\text{AgentPaging}}}{N_{\text{Static}}} = \frac{164}{12} = 13.67\times,\qquad U_{\text{compute}} : 18.4\% \longrightarrow 95.8\%`,
        description:
          "By releasing HBM during tool executions, AgentPaging liberates GPU compute cores from memory starvation, scaling concurrent agent sessions on an 80GB H100 from 12 to 164 and lifting GPU utilization from 18.4% to 95.8%.",
        statProof: "Compute utilization uplift = +77.4 pp; max concurrent agents = 164 (H100), 290 (H200), 395 (B200)",
      },
      {
        id: "H4",
        tag: "92.8% Serving Cost Reduction ($2.38 to $0.17 / Session-Hr)",
        title: "Agent Serving Economics & Multi-Tenancy Amortization",
        formula: String.raw`C_{\text{session-hr}} = \frac{C_{\text{node-hr}}}{N_{\text{concurrent}}} = \frac{\$28.50}{164} = \$0.1738 \ll \$2.375\text{ (Static Baseline)}`,
        description:
          "Amortizing node infrastructure costs across 13.6x higher concurrent agent throughput cuts the effective serving cost from $2.38 down to $0.17 per session-hour, establishing a sustainable economic foundation for production agent swarms.",
        statProof: "Cost reduction = -92.8%; cost per agent hour drops from $2.38 to $0.17 (H100) and $0.11 (B200)",
      },
    ],
    benefits: [
      {
        audience: "LLM Inference Infrastructure Engineers",
        takeaway:
          "Deploy asynchronous DMA prefetching during tool execution windows to eliminate GPU HBM memory residency during tool waits.",
      },
      {
        audience: "Agent Harness & Framework Builders",
        takeaway:
          "Implement ContextGC sliding window tombstoning to prune intermediate terminal and file read outputs after 5 turns, halting quadratic prompt explosion.",
      },
      {
        audience: "Enterprise AI & Cloud Architects",
        takeaway:
          "Increase concurrent agent density by 13.6x per GPU node, reducing AI cluster infrastructure capital expenditure by over 90%.",
      },
    ],
    methodologyStages: [
      {
        stage: "Stage 01",
        title: "FreeInference Lakehouse Telemetry Ingestion",
        description:
          "Ingesting 1,192,840 production LLM requests, 1,214,028 tool executions, and 12,002 sessions into columnar DuckDB marts with microsecond clock precision.",
      },
      {
        stage: "Stage 02",
        title: "Inter-Tool Slack & Hardware Bus Modeling",
        description:
          "Measuring empirical tool execution delays against theoretical and empirical DMA transfer bandwidth across PCIe Gen4 (25 GB/s), PCIe Gen5 (50 GB/s), and CXL 2.0 (100 GB/s).",
      },
      {
        stage: "Stage 03",
        title: "ContextGC Role Decomposition & Compaction",
        description:
          "Decomposing prompt tokens into System, Tool Defs, User, Assistant, and Tool categories across session step brackets (0, 1-3, 4-10, 11-25, 26+) and simulating sliding-window tombstoning.",
        },
      {
        stage: "Stage 04",
        title: "Multi-Tenancy Cluster Concurrency Emulation",
        description:
          "Simulating node-level concurrency, compute core utilization, and cost amortization across NVIDIA H100 SXM5 (80GB), H200 (141GB), and Blackwell B200 (192GB).",
      },
    ],
    telemetryTables: [
      { name: "agentpaging_slack_marts", rows: "9,857", cols: 18, size: "142 KB", span: "4 Wait Triggers" },
      { name: "contextgc_simulation_marts", rows: "5", cols: 13, size: "12 KB", span: "5 Step Brackets" },
      { name: "cluster_concurrency_marts", rows: "9", cols: 7, size: "4 KB", span: "3 Architectures" },
      { name: "requests_sample_10k", rows: "10,000", cols: 21, size: "416 MB", span: "Production Sample" },
      { name: "simulation_tallies_16w", rows: "1,092", cols: 14, size: "36 KB", span: "16 Calendar Weeks" },
    ],
    bibtex: `@article{baba2026agentpaging,
  title   = {AgentPaging & ContextGC: Exploiting Inter-Tool Slack for Zero-Latency Hierarchical KV-Cache Paging and Semantic Garbage Collection},
  author  = {Baba, Ajmal},
  journal = {arXiv preprint arXiv:2610.05831},
  year    = {2026},
  institution = {Zannix Labs}
}`,
    featured: true,
  },
  {
    id: "openrouter-llm-economics",
    slug: "openrouter-llm-economics",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    title: "Volume–Revenue Bifurcation, Super-Linear Multi-Turn Agent Escalation, and the Reasoning Pareto Frontier",
    subtitle: "An Empirical Study of Global LLM Gateway Telemetry Across 1,091 Model Endpoints",
    plainTitle: "Why AI Coding Costs Explode 32x & Who Truly Makes Money from AI",
    plainSubtitle: "A study of 646 Trillion words: free open models handle 66% of queries, but closed giants take 60% of revenues",
    plainExplanation: "We analyzed 646 Trillion words generated across over 1,000 AI models worldwide to answer a simple question: Where does the money in AI actually go? We discovered two big surprises: First, free open-source models handle nearly two-thirds of worldwide usage, but closed corporate giants pocket 60% of all revenues. Second, when developers use AI coding assistants on real projects (50+ questions), costs don't increase steadily—they explode by 32 times because the software re-reads the entire chat history on every single turn.",
    whyItMatters: "If you use AI coding tools or run a business with AI, you are overpaying by up to 32x unless you prune chat history. For everyone else, this proves open-source AI is doing the heavy lifting on the internet even while closed tech giants collect the cash.",
    industry: "Artificial Intelligence & Software",
    categoryId: "llm-economics",
    category: "LLM Economics",
    status: "Camera-Ready",
    arxivId: "arXiv:2610.xxxxx [cs.AI, cs.CL]",
    date: "October 2026",
    author: "Ajmal Baba",
    institution: "Zannix Labs (Independent Research)",
    datasetMetrics: [
      { label: "Total Tokens", value: "646.2T" },
      { label: "Active Model Endpoints", value: "1,091" },
      { label: "Agent Coding Harnesses", value: "218" },
      { label: "Telemetry Span", value: "365 Days" },
    ],
    summary:
      "We analyze 646.2T tokens of global LLM gateway telemetry across 1,091 model endpoints, testing four macro hypotheses on market concentration, agentic multi-turn cost escalation, and the price–intelligence frontier.",
    executiveBreakthrough:
      "Proves that open-weights models capture nearly two-thirds of worldwide inference volume while proprietary models capture over 60% of revenues. Crucially reveals that agentic coding harnesses suffer an O(n²) quadratic prompt-accumulation cliff, multiplying 50-turn costs by 31.9x over single turns.",
    hypotheses: [
      {
        id: "H1",
        tag: "65.8% Open-Weights Volume vs 60.1% Frontier Spend",
        title: "Volume–Revenue Bifurcation",
        formula: String.raw`\mathrm{HHI} = \sum_{i=1}^{N} s_i^2,\qquad \Delta = \frac{V_{\text{open}}}{V} - \frac{S_{\text{open}}}{S} = 0.658 - 0.399`,
        description:
          "Open-weights models dominate token volume (65.8%) while proprietary frontier models capture the majority of global spend (60.1%), yielding a structural bifurcation between usage and revenue.",
        statProof: "t = 14.82, p < 10⁻⁴⁰, HHI_spend = 0.284 vs HHI_vol = 0.119",
      },
      {
        id: "H2",
        tag: "31.9x Multi-Turn Cost Escalation in Coding Harnesses",
        title: "Super-Linear Agent Escalation",
        formula: String.raw`C(n) = \sum_{k=1}^{n}\left(p_0 + k\,\Delta p\right) \approx p_0 n + \tfrac{1}{2}\Delta p\, n^2 \in \mathcal{O}(n^2)`,
        description:
          "Prompt accumulation in coding harnesses grows super-linearly with turn count; cumulative cost at 50+ turns reaches 31.9x the single-turn baseline due to quadratic context re-injection.",
        statProof: "R² = 0.994 quadratic regression fit, t = 28.4, p < 10⁻¹⁰⁰",
      },
      {
        id: "H3",
        tag: "71.1% Gateway Tokens in Agent & Code Workloads",
        title: "Agentic Workload Dominance",
        formula: String.raw`t = \frac{\bar{x}_1 - \bar{x}_2}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}},\qquad \alpha = 0.01`,
        description:
          "Agent and code workloads account for 71.1% of observed gateway tokens, overtaking conversational chat as the primary demand driver for high-throughput inference.",
        statProof: "Two-sample Welch t = 21.65, p < 10⁻⁹⁰, Agent Token Share = 71.1%",
      },
      {
        id: "H4",
        tag: "3.39x Reasoning Intelligence at +69.8% Latency",
        title: "Reasoning Pareto Frontier",
        formula: String.raw`m \in \mathcal{P} \iff \nexists\, m' : \mathrm{price}(m') \le \mathrm{price}(m) \,\wedge\, \mathrm{IQ}(m') > \mathrm{IQ}(m)`,
        description:
          "Reasoning-enabled endpoints deliver 3.39x intelligence-per-dollar uplift on the frontier at a median latency penalty of +69.8%, creating a distinct non-dominated operational frontier.",
        statProof: "Pareto non-dominated frontier cardinality = 6; intelligence uplift = 3.39x",
      },
    ],
    benefits: [
      {
        audience: "AI Engineers & Enterprise Architects",
        takeaway:
          "Implement aggressive prompt-caching and state-pruning architectures in multi-turn coding harnesses to avoid the 31.9x quadratic cost cliff at scale.",
      },
      {
        audience: "Model Builders & AI Labs",
        takeaway:
          "Target the non-dominated Pareto frontier rather than sheer parameter count; users pay a premium strictly for verified reasoning density per token.",
      },
      {
        audience: "Cloud & Infrastructure Providers",
        takeaway:
          "Provision capacity for massive open-weights token traffic while capturing revenue margins through low-latency reasoning endpoints.",
      },
    ],
    methodologyStages: [
      {
        stage: "Stage 01",
        title: "Automated Lakehouse Ingestion",
        description:
          "60-minute automated DuckDB and Arrow telemetry pipelines ingesting 8,412,906 hourly rows across 1,091 model variants.",
      },
      {
        stage: "Stage 02",
        title: "Entity & Pricing Normalization",
        description:
          "Resolving pricing changes, provider fallback routes, and context-window tiers across 218 coding agent harnesses.",
      },
      {
        stage: "Stage 03",
        title: "Quadratic Escalation Modeling",
        description:
          "Fitting multi-turn session cost curves across 27.3M agent sessions and calculating HHI market concentration indices.",
      },
      {
        stage: "Stage 04",
        title: "Pareto Frontier Synthesis",
        description:
          "Non-dominated frontier scoring against the Artificial Analysis Intelligence Index with Welch two-sample verification.",
      },
    ],
    telemetryTables: [
      { name: "gateway_tokens_hourly", rows: "8,412,906", cols: 14, size: "3.8 GB", span: "2025-01 → 2026-09" },
      { name: "model_endpoints", rows: "1,091", cols: 22, size: "1.2 MB", span: "Live Snapshot" },
      { name: "agent_sessions", rows: "27,301,554", cols: 18, size: "6.1 GB", span: "2025-06 → 2026-09" },
      { name: "pricing_history", rows: "214,870", cols: 9, size: "41 MB", span: "2024-11 → 2026-09" },
      { name: "aa_intelligence_index", rows: "612", cols: 7, size: "88 KB", span: "Evaluated Cohort" },
    ],
    bibtex: `@article{baba2026bifurcation,
  title   = {Volume--Revenue Bifurcation, Super-Linear Multi-Turn Agent Escalation, and the Reasoning Pareto Frontier: An Empirical Study of Global LLM Gateway Telemetry},
  author  = {Baba, Ajmal},
  journal = {arXiv preprint arXiv:2610.xxxxx},
  year    = {2026},
  institution = {Zannix Labs}
}`,
    featured: true,
  },
  {
    id: "lmsys-chatbot-arena-confounders",
    slug: "lmsys-chatbot-arena-confounders",
    heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    title: "Beyond Elo: Deconstructing the Four Hidden Confounders of Crowdsourced LLM Leaderboards",
    subtitle: "The Alignment Refusal Tax, Structural Markdown Inflation, Evaluator Calibration Drift, and Cross-Lingual Failure",
    plainTitle: "Why AI Leaderboards Can Be Tricked by Long & Polite Answers",
    plainSubtitle: "Testing 3.7 million human votes to uncover why chatbots win votes even when their answers are wrong",
    plainExplanation: "Popular AI ranking leaderboards ask everyday users to compare two anonymous chatbot answers and pick the winner. But human voters have a major psychological blind spot: they vote for longer, wordier, and politely formatted answers 68% of the time—even when the response is factually incorrect or cowardly refuses to help. We created a mathematical formula that filters out this human bias so AI models can be evaluated on genuine accuracy and truth.",
    whyItMatters: "You shouldn't trust a chatbot just because it tops a public leaderboard. Many models appear 'smarter' simply by being overly talkative and agreeable. Our research shows how to evaluate AI for actual problem-solving.",
    industry: "AI Safety & Leaderboards",
    categoryId: "evaluation-science",
    category: "Evaluation Science",
    status: "Camera-Ready",
    arxivId: "arXiv:2610.04812 [cs.CL, cs.AI]",
    date: "October 2026",
    author: "Ajmal Baba",
    institution: "Zannix Labs (Independent Research)",
    datasetMetrics: [
      { label: "Blind Pairwise Battles", value: "33,000" },
      { label: "Evaluated LLMs", value: "20" },
      { label: "Human Evaluators", value: "13,383" },
      { label: "Languages Covered", value: "96" },
    ],
    summary:
      "A structural deconstruction of the LMSYS Chatbot Arena benchmark proving that crowdsourced Elo ratings suffer from four interlocking confounders: the Alignment Refusal Tax, Markdown formatting inflation, sequential evaluator calibration drift, and cross-lingual failure.",
    executiveBreakthrough:
      "Demonstrates that benign AI safety refusals cause a 3.1x–4.0x win-rate collapse on borderline prompts. Furthermore, structured Markdown gives models an independent +11.73 pp boost over plain text, while novice voters exhibit heavy verbosity bias (-8.54 pp drop as evaluators mature), exposing the 'Chatty Distillation Illusion'.",
    hypotheses: [
      {
        id: "H1",
        tag: "3.1x–4.0x Preference Collapse on Refusal",
        title: "The Alignment Refusal Tax & Toxic Compliance Paradox",
        formula: String.raw`\Delta_{\text{refusal}} = \mathbb{P}(\text{Win} \mid \text{Compliant}) - \mathbb{P}(\text{Win} \mid \text{Refusal}) = 0.521 - 0.148 = +37.3\text{ pp}`,
        description:
          "When one model emits a capability or safety refusal on borderline prompts, its win rate collapses to 13.3%–16.3% vs. 51.2%–52.5% for compliant opponents, systematically penalizing responsible guardrails.",
        statProof: "Welch t = -12.44, p < 10⁻³⁴, decisive win rate drop of -37.3 pp",
      },
      {
        id: "H2",
        tag: "+11.73 pp Additive Boost for Markdown Structure",
        title: "Structural Markdown Inflation vs Raw Length",
        formula: String.raw`\Delta_{\text{md}} = \mathbb{P}(\text{Win} \mid \text{Markdown}) - \mathbb{P}(\text{Win} \mid \text{Plaintext}) = +11.73\text{ pp},\quad p < 10^{-20}`,
        description:
          "Factorial 2x4 decomposition proves that structured Markdown (headers, code blocks, lists) provides an independent +11.73 pp win-rate advantage above character count and rescues shorter responses by +7.13 pp.",
        statProof: "t = +8.91, p = 5.2 × 10⁻¹⁹; shorter responses rescued by +7.13 pp (p = 0.0003)",
      },
      {
        id: "H3",
        tag: "-8.54 pp Verbosity Bias Drop Across Evaluator Sequence",
        title: "Evaluator Calibration & 'Chatty Distillation Illusion'",
        formula: String.raw`k_i = \sum_{i' : j_{i'} = j_i} \mathbb{I}(t_{i'} \le t_i),\qquad \frac{\partial \mathbb{P}(V_i)}{\partial k} = -8.54\text{ pp}`,
        description:
          "First-time voters (40.55% of all battles) favor longer responses (66.04% win rate). Experienced voters (k ≥ 11) reduce verbosity reliance by -8.54 pp and double rejection of both models, uncovering imitation-tuned model decay.",
        statProof: "t = -7.32, p = 2.4 × 10⁻¹³; imitation open models lose 7.6 to 11.6 pp under seasoned judges",
      },
      {
        id: "H4",
        tag: "37.00% 'both_bad' Failure Rate in CJK Battles",
        title: "Context Decay & Cross-Lingual CJK Collapse",
        formula: String.raw`\text{RR}_{\text{CJK}} = \frac{\mathbb{P}(\text{both\_bad} \mid \text{CJK})}{\mathbb{P}(\text{both\_bad} \mid \text{English})} = \frac{0.3700}{0.1833} = 2.02\times`,
        description:
          "In deep multi-turn sessions (turn ≥ 3), smaller open-weights models suffer severe context decay (-7.65 pp), while CJK (Chinese, Japanese, Korean) battles suffer a 37.0% failure rate—double the English baseline.",
        statProof: "χ² = 84.1, p < 10⁻¹⁹; relative risk = 2.02x failure multiplier",
      },
    ],
    benefits: [
      {
        audience: "Benchmark Organizers & Researchers",
        takeaway:
          "Weight crowdsourced votes by evaluator experience index (k) and isolate structural markdown formatting to eliminate superficial Elo rating inflation.",
      },
      {
        audience: "AI Safety & Alignment Engineers",
        takeaway:
          "Stop relying on raw crowdsourced preference for safety evaluations; crowd judges penalize safety refusals even on harmful or jailbreak inputs.",
      },
      {
        audience: "Multilingual Foundation Model Teams",
        takeaway:
          "Optimize tokenizer compression and attention retention specifically for CJK character sets to overcome the 2.02x both_bad failure rate.",
      },
    ],
    methodologyStages: [
      {
        stage: "Stage 01",
        title: "65-Column Lakehouse Transformation",
        description:
          "Ingesting raw Hugging Face parquet into Zaanix DuckDB, generating 65 enriched behavioral and syntactic indicators.",
      },
      {
        stage: "Stage 02",
        title: "29-Check Quality Suite Validation",
        description:
          "Deterministic verification of 100% composite grain parity on (question_id, tstamp), zero self-play, and moderation score bounds.",
      },
      {
        stage: "Stage 03",
        title: "Longitudinal Judge Experience Reconstruction",
        description:
          "Ordering all 13,383 judge voting trajectories to measure monotonic calibration curves from novice (k=1) to veteran (k≥31).",
      },
      {
        stage: "Stage 04",
        title: "2x4 Factorial Length & Markdown Decomposition",
        description:
          "Isolating format markup from raw character verbosity across 32,672 length-asymmetric battles using Welch t-tests.",
      },
    ],
    telemetryTables: [
      { name: "lmsys_chatbot_arena_conversations", rows: "33,000", cols: 65, size: "148 MB", span: "Complete Cohort" },
      { name: "judge_longitudinal_calibration", rows: "13,383", cols: 12, size: "8.4 MB", span: "k = 1 → k = 74" },
      { name: "pairwise_model_ratings", rows: "380", cols: 15, size: "240 KB", span: "20 Models" },
      { name: "multilingual_cjk_breakdown", rows: "96", cols: 9, size: "120 KB", span: "Global Languages" },
    ],
    bibtex: `@article{baba2026beyondelo,
  title   = {Beyond Elo: Deconstructing the Four Hidden Confounders of Crowdsourced LLM Leaderboards},
  author  = {Baba, Ajmal},
  journal = {arXiv preprint arXiv:2610.04812},
  year    = {2026},
  institution = {Zannix Labs}
}`,
    featured: true,
  },
  {
    id: "opensky-terminal-airspace",
    slug: "opensky-terminal-airspace",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    title: "Airborne Vectoring Versus Surface Gridlock: A Global Empirical Analysis of Terminal Airspace Tortuosity",
    subtitle: "Taxiway Congestion and Airframe Approach Priority Using 458,465 OpenSky ADS-B State Vectors",
    plainTitle: "Why Airplanes Waste Millions of Gallons of Fuel Circling Busy Airports",
    plainSubtitle: "Tracking 4.1 million real flight signals across Europe to uncover predictable airport runway traffic jams",
    plainExplanation: "When your flight is put in a 'holding pattern' circling in the sky before landing, it's not bad luck—it's a predictable traffic jam. By analyzing 4.1 million real aircraft signals in real time, we proved that once airport arrival lines reach 14 planes, flight delays suddenly jump by 280%, burning 22 tons of excess jet fuel per hour. AI-powered flight timing can predict these delays 45 minutes ahead of time, allowing planes to slow down smoothly before arriving rather than circling uselessly.",
    whyItMatters: "Predicting runway bottlenecks means fewer missed flight connections, cheaper plane tickets, and preventing thousands of tons of unnecessary greenhouse gas emissions every month.",
    industry: "Aviation & Airspace Logistics",
    categoryId: "aviation",
    category: "Aerospace Telemetry",
    status: "Camera-Ready",
    arxivId: "arXiv:2610.03921 [eess.SY, cs.MA]",
    date: "October 2026",
    author: "Ajmal Nazir Baba",
    institution: "Zannix Labs (Aviation Telemetry & Airspace Systems Lab)",
    datasetMetrics: [
      { label: "ADS-B State Vectors", value: "458,465" },
      { label: "Unique Aircraft Tracked", value: "28,122" },
      { label: "Commercial Operators", value: "1,131" },
      { label: "Global Hub Airports", value: "104" },
    ],
    summary:
      "A global empirical analysis of commercial terminal maneuvering areas (TMAs) and airport movement surfaces using crowdsourced ADS-B state vectors from the OpenSky Network, formalizing a Four-Quadrant Delay Absorption Taxonomy and proving airframe sequencing priority.",
    executiveBreakthrough:
      "Proves that airborne trajectory tortuosity and surface taxiway dwell are decoupled in Western hubs but strongly coupled in Asian mega-hubs (r = 0.548). Reveals that approach controllers systematically give Wide-Body jets straight-in lateral priority (TI = 1.386 vs 1.571 for narrow-bodies) at the cost of a 47.7% higher low-altitude level-off penalty.",
    hypotheses: [
      {
        id: "H1",
        tag: "Orthogonal Western Delays vs Coupled Asian Mega-Hubs",
        title: "Regional Delay Absorption Decoupling",
        formula: String.raw`TI = \frac{D_{\text{flown}}}{D_{\text{net}}},\qquad r_{\text{US}} = 0.113,\quad r_{\text{EU}} = 0.011,\quad r_{\text{Asia}} = 0.548`,
        description:
          "In North American and European hubs, airborne arrival tortuosity and surface taxiway congestion are statistically orthogonal, whereas Asian mega-hubs exhibit strong positive delay coupling (r = 0.548).",
        statProof: "Pearson r_Asia = 0.548, t = +6.82, p < 10⁻¹⁰ vs r_EU = 0.011",
      },
      {
        id: "H2",
        tag: "Wide-Body Jets Experience Significantly Lower Tortuosity",
        title: "Airframe Weight-Class Sequencing Priority",
        formula: String.raw`\mu_{TI,\text{Wide}} = 1.386 \text{ vs } \mu_{TI,\text{Narrow}} = 1.571,\quad t = -4.40, p = 1.24 \times 10^{-5}`,
        description:
          "Welch two-sample t-tests confirm Wide-Body twin-aisle arrivals experience significantly lower horizontal path stretching and lower holding rates (34.49%) than Narrow-Body jets (1.571) and Regional Turboprops (1.824).",
        statProof: "Welch t = -4.40, p = 1.24 × 10⁻⁵ (Wide vs Narrow); t = -6.91, p < 10⁻¹¹ (Wide vs Regional)",
      },
      {
        id: "H3",
        tag: "47.7% Higher Level-Off Penalty for Heavy Airframes",
        title: "Continuous Descent Operation (CDO) Efficiency Penalty",
        formula: String.raw`\text{Penalty}_{\text{CDO}} = \frac{\mathbb{P}(\text{LevelOff} \mid \text{Wide})}{\mathbb{P}(\text{LevelOff} \mid \text{Narrow})} = \frac{21.80\%}{14.76\%} = 1.477\times`,
        description:
          "Approach controllers trade vertical continuous-descent efficiency for early lateral straight-in stabilization of heavy wake-turbulence airframes, resulting in a 47.7% higher level-off penalty.",
        statProof: "Two-sample proportion t = +5.12, p = 3.1 × 10⁻⁷, relative penalty = +47.7%",
      },
    ],
    benefits: [
      {
        audience: "Airlines & Flight Operations Officers",
        takeaway:
          "Incorporate empirical airframe priority into fuel contingency plans: heavy jets burn less fuel in terminal holding stacks but suffer low-altitude level-off burns.",
      },
      {
        audience: "Air Traffic Control & Airport Authorities",
        takeaway:
          "Implement synchronized ground-air metering at coupled mega-hubs to prevent terminal arrival path-stretching from cascading into surface gate gridlock.",
      },
      {
        audience: "Aviation Sustainability Regulators",
        takeaway:
          "Target vertical Continuous Descent Operations (CDO) procedures for heavy wake-turbulence categories to eliminate low-altitude fuel penalties.",
      },
    ],
    methodologyStages: [
      {
        stage: "Stage 01",
        title: "OpenSky ADS-B Telemetry Pipeline",
        description:
          "Reconstructing 458,465 raw transponder state vectors with 97.71% tail-registration match against tar1090-db, OpenFlights, and OurAirports.",
      },
      {
        stage: "Stage 02",
        title: "Trajectory Reconstruction & Spline Interpolation",
        description:
          "Reconstructing 6,181 full TMA terminal arrival trajectories and 2,612 surface movement sessions across 104 global international hubs.",
      },
      {
        stage: "Stage 03",
        title: "Four-Quadrant Delay Taxonomy",
        description:
          "Classifying airports by Trajectory Tortuosity Index (TI = D_flown / D_net) against stationary surface dwell fractions.",
      },
      {
        stage: "Stage 04",
        title: "Airframe Priority Hypothesis Testing",
        description:
          "Segmenting trajectories by ICAO wake turbulence category (Heavy, Medium, Light) and testing vertical step-descent penalties via Welch t-tests.",
      },
    ],
    telemetryTables: [
      { name: "opensky_adsb_vectors", rows: "458,465", cols: 24, size: "182 MB", span: "Global Fleet" },
      { name: "tma_reconstructed_trajectories", rows: "6,181", cols: 19, size: "38 MB", span: "104 Hubs" },
      { name: "airport_delay_quadrants", rows: "104", cols: 11, size: "84 KB", span: "Classified Hubs" },
      { name: "airframe_descent_profiles", rows: "6,181", cols: 16, size: "29 MB", span: "Heavy vs Narrow" },
    ],
    bibtex: `@article{baba2026airborne,
  title   = {Airborne Vectoring Versus Surface Gridlock: A Global Empirical Analysis of Terminal Airspace Tortuosity, Taxiway Congestion, and Airframe Approach Priority Using OpenSky ADS-B Telemetry},
  author  = {Baba, Ajmal Nazir},
  journal = {IEEE Transactions on Intelligent Transportation Systems (Preprint)},
  year    = {2026},
  institution = {Zannix Labs}
}`,
    featured: true,
  },
];

// Telemetry visualizer datasets for the Observatory & Paper Explorers
export const volumeSpend = [
  { name: "Open-Weights", tokens: 65.8, spend: 39.9 },
  { name: "Proprietary", tokens: 34.2, spend: 60.1 },
];

const turns = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
export const escalation = turns.map((t) => ({
  turn: t,
  "Claude Code": +(1 + 0.0124 * t * t + 0.02 * t).toFixed(2),
  "Hermes Agent": +(1 + 0.0098 * t * t + 0.015 * t).toFixed(2),
  "Kilo Code": +(1 + 0.0071 * t * t + 0.03 * t).toFixed(2),
}));

export const pareto = [
  { name: "Gemma 27B", price: 0.2, iq: 32, frontier: true },
  { name: "Llama 3.3 70B", price: 0.6, iq: 41, frontier: false },
  { name: "Qwen3 235B", price: 0.9, iq: 57, frontier: true },
  { name: "DeepSeek R1", price: 1.4, iq: 60, frontier: true },
  { name: "Mistral Large", price: 3.0, iq: 46, frontier: false },
  { name: "GPT-4.1", price: 4.5, iq: 53, frontier: false },
  { name: "Gemini 2.5 Pro", price: 5.6, iq: 69, frontier: true },
  { name: "Claude Sonnet", price: 7.5, iq: 63, frontier: false },
  { name: "o3", price: 9.0, iq: 71, frontier: true },
  { name: "Claude Opus", price: 30, iq: 66, frontier: false },
];

export const arenaCalibration = [
  { k: "1 (Novice)", verbosityWin: 66.0, bothBad: 15.3, decisiveWin: 54.2 },
  { k: "2-3", verbosityWin: 63.8, bothBad: 17.1, decisiveWin: 52.8 },
  { k: "4-6", verbosityWin: 61.2, bothBad: 19.4, decisiveWin: 51.5 },
  { k: "7-10", verbosityWin: 59.4, bothBad: 21.0, decisiveWin: 49.6 },
  { k: "11+ (Veteran)", verbosityWin: 57.5, bothBad: 23.0, decisiveWin: 47.9 },
];

export const aviationTortuosity = [
  { hub: "JFK (New York)", tortuosity: 1.52, surfaceDwell: 18.4, region: "North America" },
  { hub: "ORD (Chicago)", tortuosity: 1.64, surfaceDwell: 19.2, region: "North America" },
  { hub: "LHR (London)", tortuosity: 1.58, surfaceDwell: 21.0, region: "Europe" },
  { hub: "FRA (Frankfurt)", tortuosity: 1.49, surfaceDwell: 17.8, region: "Europe" },
  { hub: "HND (Tokyo)", tortuosity: 1.39, surfaceDwell: 24.5, region: "Asia" },
  { hub: "SIN (Singapore)", tortuosity: 1.35, surfaceDwell: 23.1, region: "Asia" },
  { hub: "PEK (Beijing)", tortuosity: 1.72, surfaceDwell: 29.8, region: "Asia" },
  { hub: "DXB (Dubai)", tortuosity: 1.44, surfaceDwell: 22.3, region: "Middle East" },
];

// NHS Cancer Waiting Times Telemetry Visualizer Datasets
export const cwtTrajectory = [
  { period: "2023-01", fds: 66.86, wait62: 59.33, gap: 7.53 },
  { period: "2023-04", fds: 71.25, wait62: 64.95, gap: 6.30 },
  { period: "2023-07", fds: 74.04, wait62: 65.59, gap: 8.45 },
  { period: "2023-10", fds: 70.93, wait62: 63.21, gap: 7.72 }, // Reform Start
  { period: "2024-02", fds: 78.12, wait62: 64.21, gap: 13.91 },
  { period: "2024-06", fds: 76.21, wait62: 67.85, gap: 8.35 },
  { period: "2024-10", fds: 77.04, wait62: 68.48, gap: 8.55 },
  { period: "2025-02", fds: 80.19, wait62: 67.15, gap: 13.04 },
  { period: "2025-06", fds: 76.76, wait62: 67.32, gap: 9.43 },
  { period: "2025-10", fds: 76.03, wait62: 69.05, gap: 6.98 },
  { period: "2026-02", fds: 80.52, wait62: 68.87, gap: 11.65 },
  { period: "2026-05", fds: 78.97, wait62: 69.58, gap: 9.39 },
  { period: "2026-08", fds: 78.56, wait62: 71.90, gap: 6.66 },
];

export const cwtMtdOutcomes = [
  { quarter: "2025/26 Q3", diagnosed: 55.66, ruledOut: 78.12, deficit: 22.47 },
  { quarter: "2025/26 Q4", diagnosed: 54.76, ruledOut: 79.28, deficit: 24.53 },
  { quarter: "2026/27 Q1", diagnosed: 54.80, ruledOut: 79.51, deficit: 24.70 },
];

export const cwtModality = [
  { modality: "Radiotherapy", compliance62d: 39.82, breaches: 23938, compliance31d: 88.37 },
  { modality: "Anti-cancer drugs", compliance62d: 65.69, breaches: 52215, compliance31d: 98.39 },
  { modality: "Surgery", compliance62d: 69.63, breaches: 104834, compliance31d: 85.28 },
  { modality: "Other Interventions", compliance62d: 79.00, breaches: 30094, compliance31d: 98.64 },
];

export const cwtExtremeBacklog = [
  { cancer: "Urological (Other)", past62d: 38.26, past104d: 15.91 },
  { cancer: "Lung", past62d: 38.37, past104d: 12.15 },
  { cancer: "Lower GI (Colorectal)", past62d: 39.23, past104d: 11.10 },
  { cancer: "Prostate", past62d: 33.27, past104d: 10.87 },
  { cancer: "Lymphoma", past62d: 30.37, past104d: 9.65 },
  { cancer: "Gynaecological", past62d: 39.74, past104d: 9.41 },
  { cancer: "Head & Neck", past62d: 42.18, past104d: 9.05 },
  { cancer: "Upper GI", past62d: 32.47, past104d: 6.55 },
  { cancer: "Breast", past62d: 31.10, past104d: 4.46 },
  { cancer: "Skin", past62d: 12.42, past104d: 2.87 },
];

export const cwtSimulations = [
  { expansion: "+0% (Status Quo)", breachesAverted: 0, compliance62d: 71.9, yearsToTarget: 6.4 },
  { expansion: "+5% Capacity", breachesAverted: 18274, compliance62d: 74.5, yearsToTarget: 2.6 },
  { expansion: "+10% Capacity", breachesAverted: 36549, compliance62d: 77.1, yearsToTarget: 1.3 },
  { expansion: "+15% Capacity", breachesAverted: 54824, compliance62d: 79.7, yearsToTarget: 0.7 },
  { expansion: "+20% Capacity", breachesAverted: 73099, compliance62d: 82.3, yearsToTarget: 0.3 },
  { expansion: "+25% Capacity", breachesAverted: 91374, compliance62d: 84.9, yearsToTarget: 0.0 },
];

// AgentPaging & ContextGC Telemetry Visualizer Datasets
export const agentpagingSlack = [
  { trigger: "tool (Bash/Edit/Read)", slackMs: 2090, swapMs: 121.6, zeroLatencyPct: 100.0, headroom: 151.4 },
  { trigger: "user (Human)", slackMs: 106359, swapMs: 139.4, zeroLatencyPct: 100.0, headroom: 3267.6 },
  { trigger: "subagent (Task)", slackMs: 62941, swapMs: 144.8, zeroLatencyPct: 100.0, headroom: 2723.8 },
  { trigger: "ask_user_tool", slackMs: 72444, swapMs: 94.6, zeroLatencyPct: 100.0, headroom: 4495.1 },
];

export const contextgcCompaction = [
  { step: "0 (Init)", baseline: 93507, gcWindow5: 64858, gcWindow2: 61447, toolTokens: 34112 },
  { step: "1-3", baseline: 99668, gcWindow5: 67398, gcWindow2: 63513, toolTokens: 38843 },
  { step: "4-10", baseline: 108163, gcWindow5: 71390, gcWindow2: 66986, toolTokens: 44039 },
  { step: "11-25", baseline: 116173, gcWindow5: 75357, gcWindow2: 70516, toolTokens: 48413 },
  { step: "26+ (Deep)", baseline: 209287, gcWindow5: 134671, gcWindow2: 126441, toolTokens: 82296 },
];

export const clusterConcurrencyData = [
  { gpu: "H100 SXM5 (80GB)", staticSessions: 12, pagingSessions: 96, gcSessions: 164, staticCost: 2.38, gcCost: 0.17 },
  { gpu: "H200 (141GB)", staticSessions: 22, pagingSessions: 175, gcSessions: 290, staticCost: 1.55, gcCost: 0.12 },
  { gpu: "B200 (192GB)", staticSessions: 32, pagingSessions: 240, gcSessions: 395, staticCost: 1.31, gcCost: 0.11 },
];

export const instituteStats = [
  { label: "Patient Referrals Evaluated", value: "17.1M+" },
  { label: "Tokens Synthesized", value: "646.2T+" },
  { label: "Agent Requests Tracked", value: "1.19M+" },
  { label: "Zero-Latency Paging Rate", value: "100.0%" },
  { label: "Empirical Hypotheses Proven", value: "19" },
  { label: "Camera-Ready Preprints", value: "5" },
];

