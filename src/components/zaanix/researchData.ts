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
  { id: "all", label: "All Industries", count: 7, description: "All empirical discoveries across active preprints and upcoming research pipelines" },
  { id: "llm-economics", label: "AI & Software Economics", count: 1, description: "Global LLM gateway telemetry, token pricing, and agent harness costs" },
  { id: "aviation", label: "Aviation & Airport Logistics", count: 1, description: "Real-world ADS-B flight tracking, airport traffic jams, and fuel waste" },
  { id: "evaluation-science", label: "AI Safety & Leaderboards", count: 1, description: "Crowdsourced human bias, verbosity inflation, and refusal penalties" },
  { id: "healthcare", label: "Healthcare & Clinical Medicine", count: 1, badge: "Pipeline Ingestion", description: "Clinical trial delay forensics, FDA protocol hazard models, and EHR telemetry" },
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
    id: "openrouter-llm-economics",
    slug: "openrouter-llm-economics",
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

export const instituteStats = [
  { label: "Tokens Synthesized", value: "646.2T+" },
  { label: "Blind LLM Battles", value: "33,000" },
  { label: "ADS-B Flights Tracked", value: "458,465" },
  { label: "Model Endpoints Tested", value: "1,091" },
  { label: "Empirical Hypotheses Proven", value: "11" },
  { label: "Camera-Ready Preprints", value: "3" },
];

