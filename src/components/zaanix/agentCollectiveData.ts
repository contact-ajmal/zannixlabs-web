export interface SpecialistAgent {
  id: string;
  name: string;
  title: string;
  phase: string;
  phaseNumber: number;
  description: string;
  capabilities: string[];
  tools: string[];
  artifact: string;
  iconName: string;
}

export interface ResearchSkillItem {
  id: string;
  name: string;
  category: string;
  description: string;
  workflow: string[];
  primaryAgents: string[];
  deliverables: string[];
}

export const RESEARCH_PHASES = [
  { id: "all", label: "All Specialists (14)" },
  { id: "discovery", label: "1. Prior Art & Discovery" },
  { id: "lakehouse", label: "2. Lakehouse & Spatial" },
  { id: "theory", label: "3. Theory, Math & Causality" },
  { id: "computation", label: "4. Computation & Visuals" },
  { id: "audit", label: "5. Audit & Reproducibility" },
  { id: "publication", label: "6. Publication & Impact" },
] as const;

export const SPECIALIST_AGENTS: SpecialistAgent[] = [
  {
    id: "lit-scholar",
    name: "lit-scholar",
    title: "Literature & Prior Art Scholar",
    phase: "discovery",
    phaseNumber: 1,
    description: "Surveys global scholarly databases across arXiv, Semantic Scholar, CrossRef, Europe PMC, and OpenAlex. Synthesizes prior methodologies, uncovers open research gaps, and curates formal BibTeX references.",
    capabilities: [
      "Cross-database citation graphing across 200M+ research papers",
      "Benchmark taxonomy extraction & baseline metric mapping",
      "Identification of unobserved confounders in prior studies",
      "Automated BibTeX bibliography compilation"
    ],
    tools: ["paper-search-mcp", "arXiv API", "Semantic Scholar", "CrossRef", "Europe PMC", "OpenAlex"],
    artifact: "Literature_Review_Synthesis.md & references.bib",
    iconName: "BookOpen"
  },
  {
    id: "bio-informatician",
    name: "bio-informatician",
    title: "Translational Bioinformatician",
    phase: "discovery",
    phaseNumber: 1,
    description: "Bridges clinical telemetry with molecular biology, genomics, and pharmacology across Ensembl, ClinVar, ChEMBL, AlphaGenome, UniProt, and OpenFDA.",
    capabilities: [
      "Genomic variant pathogenicity & conservation scoring",
      "Protein structural confidence metrics (pLDDT) & domain analysis",
      "Drug-target bioactivity (IC50/Ki) & clinical safety profiling",
      "Biological plausibility synthesis for epidemiological studies"
    ],
    tools: ["ClinVar", "AlphaGenome", "Ensembl", "ChEMBL", "UniProt", "PDB", "OpenFDA"],
    artifact: "Target_Disease_Evidence.json & Molecular_Brief.md",
    iconName: "Dna"
  },
  {
    id: "data-curator",
    name: "data-curator",
    title: "Lakehouse Data Engineer",
    phase: "lakehouse",
    phaseNumber: 2,
    description: "Ingests, profiles, normalizes, and partitions raw telemetry into compressed DuckDB Parquet data marts. Builds dbt dimensional models, executes automated quality suites, and sanitizes PII.",
    capabilities: [
      "Statistical profiling (cardinality, null rates, skewness, quartiles)",
      "Zero-copy columnar Parquet data mart materialization",
      "Automated 29-point data quality test assertions",
      "PII pattern scanning and reversible/irreversible masking"
    ],
    tools: ["zaanix DuckDB", "dbt", "Parquet", "scan_pii", "create_quality_suite", "Apache Arrow"],
    artifact: "Curated Parquet Marts & data_dictionary.json",
    iconName: "Database"
  },
  {
    id: "geo-spatialist",
    name: "geo-spatialist",
    title: "Geospatial & Regional Econometrician",
    phase: "lakehouse",
    phaseNumber: 2,
    description: "Analyzes geographic clustering, regional inequalities, hospital catchment travel times, and spatial lag/error regressions using DuckDB Spatial and Uber H3 hexagonal indices.",
    capabilities: [
      "Spatial autocorrelation analysis (Global & Local Moran's I)",
      "Uber H3 discrete global grid indexing (res 6-9)",
      "Spatial Autoregressive (SAR) & Spatial Error (SEM) regressions",
      "Isochrone travel-time decay calculations"
    ],
    tools: ["DuckDB Spatial", "GeoParquet", "H3 Grid", "Shapefiles", "Moran's I", "Isochrone APIs"],
    artifact: "GeoParquet Regional Marts & Spatial_Regression_Report.md",
    iconName: "Compass"
  },
  {
    id: "theory-modeler",
    name: "theory-modeler",
    title: "Quantitative & Theoretical Modeler",
    phase: "theory",
    phaseNumber: 3,
    description: "Formulates testable statistical hypotheses (Null H0 & Alternative H1), specifies econometric structural equations, and defines identification strategies.",
    capabilities: [
      "Mathematical formalization of empirical hypotheses",
      "Interrupted Time Series (ITS) & survival hazard modeling",
      "Exact parameterization of boundary conditions and interaction terms",
      "Welch t-test and Pareto frontier formulation"
    ],
    tools: ["LaTeX Math", "Statsmodels", "Hypothesis Engines", "zaanix inspect_schema"],
    artifact: "Mathematical_Model_Spec.md & LaTeX Equation Sheet",
    iconName: "Sigma"
  },
  {
    id: "causal-architect",
    name: "causal-architect",
    title: "Causal Inference & DAG Architect",
    phase: "theory",
    phaseNumber: 3,
    description: "Establishes structural causal models (SCMs), constructs Directed Acyclic Graphs (DAGs), selects Instrumental Variables (IV), and runs Difference-in-Differences and Synthetic Controls.",
    capabilities: [
      "Back-door and front-door path identification in DAGs",
      "Quasi-experimental design (DiD, Synthetic Controls, IV, RDD)",
      "Statistical refutation tests (placebo treatment & random confounders)",
      "Bounding analyses for unobserved selection bias"
    ],
    tools: ["DoWhy", "Do-Calculus", "DAGitty", "Synthetic Control Engine", "Placebo Suite"],
    artifact: "causal_dag.svg & identification_strategy.md",
    iconName: "GitFork"
  },
  {
    id: "symbolic-mathematician",
    name: "symbolic-mathematician",
    title: "Symbolic & Theoretical Mathematician",
    phase: "theory",
    phaseNumber: 3,
    description: "Derives exact closed-form algebraic solutions, verifies matrix derivations, computes symbolic gradients, and checks dimensional consistency to ensure zero algebraic errors.",
    capabilities: [
      "Closed-form queueing derivations (M/M/c, G/G/1 state equations)",
      "Symbolic Jacobian, Hessian, and gradient derivations in SymPy",
      "Matrix algebraic proofs (positive semi-definiteness & eigenvalues)",
      "Physical unit and dimensional analysis checks"
    ],
    tools: ["SymPy", "Wolfram Engine", "LaTeX Proof Formatter", "Symbolic Differentiation"],
    artifact: "symbolic_proof.py & LaTeX Mathematical Appendix",
    iconName: "Binary"
  },
  {
    id: "computational-lab",
    name: "computational-lab",
    title: "Computational Statistician",
    phase: "computation",
    phaseNumber: 4,
    description: "Develops reproducible Jupyter notebooks (.ipynb), executes statistical regressions in DuckDB, and builds interactive Observable Mosaic telemetry dashboards.",
    capabilities: [
      "Execution of multi-variable OLS, Poisson, and Cox hazard models",
      "Bonferroni and Benjamini-Hochberg FDR correction for multiple testing",
      "Generation of executable, self-contained Jupyter notebooks",
      "Authoring Observable Mosaic (@uwdata/mosaic) dashboard JSON specs"
    ],
    tools: ["DuckDB SQL", "Python SciPy", "Statsmodels", "Jupyter Engine", "Observable Mosaic"],
    artifact: "Executable Research Notebook (.ipynb) & mosaic_spec.json",
    iconName: "Cpu"
  },
  {
    id: "viz-designer",
    name: "viz-designer",
    title: "Scientific Visualization Artist",
    phase: "computation",
    phaseNumber: 4,
    description: "Transforms statistical distributions into publication-grade vector graphics, high-density small multiples, Graphical Abstracts, and interactive chart studios.",
    capabilities: [
      "Nature & IEEE standard scientific typography and palettes (Viridis)",
      "Vector chart generation (PDF, SVG, 600 DPI PNG)",
      "High-density small multiples, forest plots, and confidence bands",
      "Graphical Abstract creation for web dissemination"
    ],
    tools: ["Matplotlib", "Seaborn", "Observable Plot", "SVG Optimizer", "TikZ"],
    artifact: "Figure_Set (PDF/SVG) & Graphical_Abstract.png",
    iconName: "Palette"
  },
  {
    id: "peer-auditor",
    name: "peer-auditor",
    title: "Adversarial Peer Reviewer",
    phase: "audit",
    phaseNumber: 5,
    description: "Stress-tests empirical findings for confounding factors, sample selection bias, data leakage, and mathematical hallucinations against raw DuckDB outputs.",
    capabilities: [
      "Independent cross-examination of paper numbers vs. raw SQL rows",
      "Audit of sample selection bias, collider bias, and survivorship bias",
      "Detection of p-hacking and arbitrary date boundary cutoffs",
      "Sensitivity stress-testing and documented study limitations"
    ],
    tools: ["zaanix diff_tables", "lakehouse_query", "Assertion Engine", "SQL Explain"],
    artifact: "Peer_Audit_Report.md (Threats to Validity)",
    iconName: "ShieldAlert"
  },
  {
    id: "reproducibility-sentry",
    name: "reproducibility-sentry",
    title: "Reproducibility & Determinism Sentry",
    phase: "audit",
    phaseNumber: 5,
    description: "Guarantees clean-room reproducibility: audits random seed pinning, verifies dataset SHA256 checksums, and validates dependencies and environment lockfiles.",
    capabilities: [
      "Cryptographic SHA256 hashing across raw and curated data marts",
      "Verification of pseudo-random seed determinism",
      "Lockfile auditing (uv.lock, requirements.txt, Dockerfile)",
      "End-to-end automated clean-room execution testing"
    ],
    tools: ["SHA256 Manifest", "Docker Sandbox", "uv lock auditor", "Seed Inspector"],
    artifact: "REPRODUCIBILITY_AUDIT.md & SHA256_Checksums.txt",
    iconName: "CheckCircle2"
  },
  {
    id: "science-author",
    name: "science-author",
    title: "Scientific Preprint Author",
    phase: "publication",
    phaseNumber: 6,
    description: "Synthesizes the abstract, methodology, results, and discussion into publication-grade two-column preprints with ReportLab and packages signed reproducibility archives (.tar.gz).",
    capabilities: [
      "Formal academic prose writing conforming to IEEE/ACM guidelines",
      "Two-column PDF preprint compilation with vector figure embedding",
      "Formatting of formal summary tables and callout boxes",
      "Bundling of Parquet marts, schemas, and code into tar.gz archives"
    ],
    tools: ["ReportLab", "Typst Compiler", "BibTeX Formatter", "tar.gz Packager"],
    artifact: "<Topic>_Research_Paper.pdf & Reproducibility_Archive.tar.gz",
    iconName: "FileText"
  },
  {
    id: "policy-economist",
    name: "policy-economist",
    title: "Techno-Economic & Policy Analyst",
    phase: "publication",
    phaseNumber: 6,
    description: "Translates regression coefficients into cost-benefit models, QALY/DALY valuations, regulatory memoranda, and actionable executive briefings.",
    capabilities: [
      "Quality-Adjusted Life Years (QALY) & DALY impact quantification",
      "Social discounting models aligned with HM Treasury Green Book / NICE",
      "Societal cost-benefit analysis with sensitivity bands",
      "Drafting executive policy briefs for institutional stakeholders"
    ],
    tools: ["Health Economics Tables", "CBA Frameworks", "QALY Models", "Policy Memos"],
    artifact: "Policy_Brief_Executive_Summary.md & CBA_Workbook.xlsx",
    iconName: "TrendingUp"
  },
  {
    id: "platform-deployer",
    name: "platform-deployer",
    title: "Dissemination & Platform Architect",
    phase: "publication",
    phaseNumber: 6,
    description: "Deploys interactive web simulators, registers research into researchData.ts on zannixlabs-web, and drafts multi-audience blog posts for public inquiry.",
    capabilities: [
      "Deployment of interactive counterfactual apps and scenario calculators",
      "Dual-audience metadata registration (Plain English & Academic)",
      "Public asset verification (PDF preprints, tar.gz packages, raw marts)",
      "Dissemination authoring for zannixlabs.com/blogs and social summaries"
    ],
    tools: ["zaanix create_app", "publish_app", "researchData.ts", "Blog Generator"],
    artifact: "Live Web App, researchData.ts Registration & Blog Draft",
    iconName: "Globe"
  }
];

export const RESEARCH_SKILLS: ResearchSkillItem[] = [
  {
    id: "zannixlabs-empirical-research",
    name: "Empirical Lakehouse Investigation",
    category: "Econometric & Observational",
    description: "End-to-end empirical data science pipeline: telemetry ingestion, quality profiling, econometric regression modeling, Jupyter notebook creation, preprint authoring, and web publication.",
    workflow: ["data-curator", "theory-modeler", "computational-lab", "peer-auditor", "science-author", "platform-deployer"],
    primaryAgents: ["Lakehouse Data Engineer", "Quantitative Modeler", "Computational Statistician", "Preprint Author"],
    deliverables: ["Two-Column Research Preprint PDF", "Reproducible Jupyter Notebook", "Interactive Mosaic Dashboard", "Signed Reproducibility Archive"]
  },
  {
    id: "zannixlabs-literature-survey",
    name: "Systematic Literature Review & Meta-Analysis",
    category: "Academic Synthesis",
    description: "Deep academic survey across arXiv, PubMed, Semantic Scholar, CrossRef, Europe PMC, and OpenAlex. Synthesizes prior methodologies, maps taxonomies, and extracts benchmark baselines.",
    workflow: ["lit-scholar", "theory-modeler", "peer-auditor", "science-author"],
    primaryAgents: ["Literature & Prior Art Scholar", "Quantitative Modeler", "Adversarial Peer Reviewer"],
    deliverables: ["Annotated Comparative Synthesis", "Formal BibTeX References (.bib)", "Methodological Benchmark Matrix"]
  },
  {
    id: "zannixlabs-causal-inference",
    name: "Causal Inference & Quasi-Experiments",
    category: "Causal Modeling",
    description: "Identifies true causal mechanisms in observational telemetry using Directed Acyclic Graphs (DAGs), Difference-in-Differences (DiD), Instrumental Variables, and rigorous placebo refutation tests.",
    workflow: ["causal-architect", "theory-modeler", "computational-lab", "peer-auditor"],
    primaryAgents: ["Causal Inference Architect", "Quantitative Modeler", "Adversarial Peer Reviewer"],
    deliverables: ["Vector Causal DAG (.svg)", "Identification Proof Memorandum", "Placebo & Confounder Refutation Report"]
  },
  {
    id: "zannixlabs-model-eval",
    name: "Model & Algorithm Benchmark Evaluation",
    category: "AI & Systems Benchmarking",
    description: "Evaluates model telemetry, token latency, and inference efficiency across providers. Conducts ablation studies, cost analyses, and generates interactive Mosaic leaderboard specifications.",
    workflow: ["computational-lab", "peer-auditor", "viz-designer", "platform-deployer"],
    primaryAgents: ["Computational Statistician", "Adversarial Peer Reviewer", "Scientific Visualization Artist"],
    deliverables: ["Benchmark Statistical Report", "P50/P90/P99 Latency Frontier Curves", "Interactive Mosaic Leaderboard"]
  },
  {
    id: "zannixlabs-spatial-econometrics",
    name: "Geospatial & Regional Disparity Analytics",
    category: "Spatial Science",
    description: "Analyzes geographic clustering, regional health disparities, hospital catchment areas, and travel-time isochrones using DuckDB Spatial and Uber H3 hexagonal grids.",
    workflow: ["geo-spatialist", "theory-modeler", "computational-lab", "viz-designer"],
    primaryAgents: ["Geospatial Econometrician", "Quantitative Modeler", "Scientific Visualization Artist"],
    deliverables: ["GeoParquet Regional Marts", "Spatial Lag/Error Regressions", "Interactive Choropleth Maps"]
  },
  {
    id: "zannixlabs-symbolic-math",
    name: "Symbolic Mathematical Derivation",
    category: "Theoretical & Math",
    description: "Derives exact closed-form algebraic solutions, solves differential and queueing state equations symbolically, verifies matrix derivations, and generates formal LaTeX proofs.",
    workflow: ["symbolic-mathematician", "theory-modeler", "science-author"],
    primaryAgents: ["Symbolic Mathematician", "Quantitative Modeler", "Preprint Author"],
    deliverables: ["SymPy Verification Script (proof.py)", "LaTeX Mathematical Appendix", "Exact Closed-Form Equilibria"]
  },
  {
    id: "zannixlabs-bio-translational",
    name: "Translational Biomedicine & Drug Discovery",
    category: "Life Sciences & Health",
    description: "Bridges clinical patient telemetry with genomics, protein structures, and pharmacology across ClinVar, AlphaGenome, Ensembl, UniProt, and ChEMBL.",
    workflow: ["bio-informatician", "lit-scholar", "peer-auditor", "science-author"],
    primaryAgents: ["Translational Bioinformatician", "Literature Scholar", "Preprint Author"],
    deliverables: ["Target-Disease Association Matrix", "Variant Pathogenicity Annotations", "Translational Mechanism Preprint Section"]
  },
  {
    id: "zannixlabs-reproducibility-audit",
    name: "Reproducibility & Determinism Audit",
    category: "Audit & Governance",
    description: "Performs end-to-end scientific verification: audits random seeds, computes cryptographic SHA256 hashes of all data marts, validates lockfiles, and tests clean-room rerun determinism.",
    workflow: ["reproducibility-sentry", "peer-auditor"],
    primaryAgents: ["Reproducibility Sentry", "Adversarial Peer Reviewer"],
    deliverables: ["Cryptographic SHA256 Manifest", "Verified Docker Environment", "REPRODUCIBILITY_AUDIT.md"]
  },
  {
    id: "zannixlabs-policy-evaluation",
    name: "Techno-Economic & Policy Impact Evaluation",
    category: "Policy & Health Economics",
    description: "Translates academic regression findings into societal cost-benefit analyses, QALY/DALY valuations, regulatory memoranda, and executive decision briefings.",
    workflow: ["policy-economist", "theory-modeler", "platform-deployer"],
    primaryAgents: ["Techno-Economic Analyst", "Quantitative Modeler", "Platform Deployer"],
    deliverables: ["Executive Policy Briefing Memo", "Cost-Benefit Valuation Model", "Public Interest Release Summary"]
  },
  {
    id: "zannixlabs-data-curation",
    name: "Lakehouse Data Mart Engineering",
    category: "Data Engineering",
    description: "Ingests raw telemetry, profiles column distributions, builds dbt dimensional models, sanitizes sensitive PII, and generates column-level data dictionaries.",
    workflow: ["data-curator", "peer-auditor"],
    primaryAgents: ["Lakehouse Data Engineer", "Adversarial Peer Reviewer"],
    deliverables: ["Curated Compressed Parquet Marts", "Column-Level data_dictionary.json", "Executed Quality Assertion Test Report"]
  }
];
