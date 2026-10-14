#!/usr/bin/env python3
"""
ZannixLabs Camera-Ready Preprint PDF & LaTeX Bundle Generator
Generates publication-quality PDF preprints and .tar.gz archives in public/papers/
"""

import os
import io
import json
import tarfile
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.pdfgen import canvas

PAPERS = [
    {
        "id": "openrouter-llm-economics",
        "slug": "openrouter-llm-economics",
        "title": "Volume–Revenue Bifurcation, Super-Linear Multi-Turn Agent Escalation, and the Reasoning Pareto Frontier",
        "subtitle": "An Empirical Study of Global LLM Gateway Telemetry Across 1,091 Model Endpoints",
        "category": "LLM Economics & Gateways",
        "arxivId": "arXiv:2610.05192 [cs.AI, cs.CL]",
        "date": "October 2026",
        "author": "Ajmal Baba",
        "institution": "ZannixLabs Autonomous AI Research Institute",
        "metrics": [
            ("Total Telemetry", "646.2T Tokens"),
            ("Active Endpoints", "1,091 Models"),
            ("Agent Harnesses", "218 Suites"),
            ("Observation Window", "365 Days")
        ],
        "summary": (
            "We analyze 646.2T tokens of global LLM gateway telemetry across 1,091 model endpoints, testing "
            "four macro hypotheses on market concentration, agentic multi-turn cost escalation, and the price–intelligence "
            "frontier. We reveal a profound divergence between raw token consumption and monetary value capture, "
            "and establish empirical scaling laws for autonomous agent execution loops."
        ),
        "breakthrough": (
            "Proves that open-weights models capture 65.8% of worldwide inference token volume while proprietary "
            "frontier models capture 60.1% of global revenues. Crucially reveals that multi-turn agentic coding harnesses "
            "suffer an O(n²) quadratic prompt-accumulation cost cliff, multiplying 50-turn session costs by 31.9x over "
            "single-turn baselines."
        ),
        "hypotheses": [
            {
                "id": "H1",
                "title": "Volume–Revenue Bifurcation",
                "tag": "65.8% Open Volume vs 60.1% Proprietary Spend",
                "formula": "HHI = ∑ s_i^2,   Δ = (V_open / V) - (S_open / S) = 0.658 - 0.399 = +25.9 pp",
                "description": "Open-weights architectures capture nearly two-thirds of worldwide inference volume while proprietary frontier models capture over 60% of revenues, demonstrating distinct elasticity profiles between commodity generation and high-reasoning tasks.",
                "proof": "t = 14.82, p < 10^-40, HHI_spend = 0.284 vs HHI_vol = 0.119. Statistically verified."
            },
            {
                "id": "H2",
                "title": "Super-Linear Agent Escalation",
                "tag": "31.9x Multi-Turn Cost Multiplier at 50 Turns",
                "formula": "C(n) = ∑_{k=1}^n (p_0 + k·Δp) ≈ p_0·n + ½ Δp·n^2 ∈ O(n^2)",
                "description": "State retention and historical prompt accumulation in agentic coding harnesses scale quadratic costs. At turn counts exceeding 50, cost-per-turn expands by 31.9x compared to isolated turn baselines.",
                "proof": "Quadratic fit R² = 0.994, t = 28.4, p < 10^-100 across 27.3M observed agent sessions."
            },
            {
                "id": "H3",
                "title": "Agentic Workload Dominance",
                "tag": "71.1% of Gateway Tokens in Agent / Code Suites",
                "formula": "t = (x̄_1 - x̄_2) / √(s_1^2/n_1 + s_2^2/n_2),   α = 0.01",
                "description": "Autonomous multi-step agent and automated code-generation harnesses have surpassed conversational human chat, generating 71.1% of observed gateway tokens across all sampled inference gateways.",
                "proof": "Welch two-sample t = 21.65, p < 10^-90; agentic workload volume share = 71.1%."
            },
            {
                "id": "H4",
                "title": "Reasoning Pareto Frontier",
                "tag": "3.39x Intelligence Density at +69.8% Latency",
                "formula": "m ∈ P ⟺ ∄ m' : price(m') ≤ price(m) ∧ IQ(m') > IQ(m)",
                "description": "Reasoning-enabled distillation endpoints form a convex non-dominated Pareto frontier, delivering 3.39x more intelligence per dollar at an acceptable median latency overhead of +69.8%.",
                "proof": "Pareto frontier cardinality = 6 endpoints; empirical intelligence uplift = 3.39x."
            }
        ],
        "methodology": [
            ("Stage 01: Automated Lakehouse Ingestion", "Automated DuckDB and Apache Arrow telemetry ingestion pipelines streaming 8,412,906 hourly records across 1,091 model variants."),
            ("Stage 02: Entity & Pricing Normalization", "Normalizing dynamic tier pricing, token rate limits, and fallback routing schemas across 218 autonomous coding suites."),
            ("Stage 03: Quadratic Escalation Modeling", "Empirical regression fitting of multi-turn trajectory cost curves over 27,301,554 discrete agent interaction sessions."),
            ("Stage 04: Pareto Frontier Synthesis", "Two-sample Welch hypothesis verification and non-dominated convex frontier mapping against the Artificial Analysis Intelligence Index.")
        ],
        "tables": [
            ("gateway_tokens_hourly", "8,412,906", "14 cols", "3.8 GB", "2025-01 → 2026-09"),
            ("model_endpoints", "1,091", "22 cols", "1.2 MB", "Live Snapshot"),
            ("agent_sessions", "27,301,554", "18 cols", "6.1 GB", "2025-06 → 2026-09"),
            ("pricing_history", "214,870", "9 cols", "41 MB", "2024-11 → 2026-09")
        ],
        "benefits": [
            ("AI Engineers & System Architects", "Deploy aggressive prompt caching and sliding-window context summarization to circumvent the 31.9x quadratic cost cliff in autonomous coding agents."),
            ("Model Builders & Foundation Labs", "Focus development on high-density reasoning endpoints along the Pareto frontier; enterprises prioritize verified reasoning density over sheer parameter scale."),
            ("Infrastructure & Cloud Providers", "Provision inference fleets for heavy open-weights token volume while monetizing specialized low-latency reasoning engines.")
        ],
        "bibtex": """@article{baba2026bifurcation,
  title   = {Volume--Revenue Bifurcation, Super-Linear Multi-Turn Agent Escalation, and the Reasoning Pareto Frontier: An Empirical Study of Global LLM Gateway Telemetry},
  author  = {Baba, Ajmal},
  journal = {arXiv preprint arXiv:2610.05192 [cs.AI, cs.CL]},
  year    = {2026},
  institution = {ZannixLabs Autonomous AI Research Institute}
}"""
    },
    {
        "id": "lmsys-chatbot-arena-confounders",
        "slug": "lmsys-chatbot-arena-confounders",
        "title": "Beyond Elo: Deconstructing the Four Hidden Confounders of Crowdsourced LLM Leaderboards",
        "subtitle": "The Alignment Refusal Tax, Structural Markdown Inflation, Evaluator Calibration Drift, and Cross-Lingual Failure",
        "category": "Evaluation Science & Benchmarking",
        "arxivId": "arXiv:2610.04812 [cs.CL, cs.AI]",
        "date": "October 2026",
        "author": "Ajmal Baba",
        "institution": "ZannixLabs Autonomous AI Research Institute",
        "metrics": [
            ("Pairwise Battles", "33,000 Blind"),
            ("Evaluated LLMs", "20 Frontier Models"),
            ("Human Evaluators", "13,383 Judges"),
            ("Languages Covered", "96 Languages")
        ],
        "summary": (
            "A structural deconstruction of the LMSYS Chatbot Arena benchmark proving that crowdsourced Elo ratings "
            "suffer from four interlocking confounders: the Alignment Refusal Tax, Markdown formatting inflation, "
            "sequential evaluator calibration drift, and cross-lingual failure. We show that naive preference metrics "
            "incentivize compliance with harmful requests and reward deceptive formatting over factual correctness."
        ),
        "breakthrough": (
            "Demonstrates that benign AI safety refusals cause a 3.1x–4.0x win-rate collapse on borderline prompts. "
            "Furthermore, structured Markdown gives models an independent +11.73 pp boost over plain text, while novice voters "
            "exhibit heavy verbosity bias (-8.54 pp drop as evaluators mature), exposing the 'Chatty Distillation Illusion'."
        ),
        "hypotheses": [
            {
                "id": "H1",
                "title": "The Alignment Refusal Tax",
                "tag": "3.1x–4.0x Preference Collapse on Benign Refusal",
                "formula": "Δ_refusal = ℙ(Win | Compliant) - ℙ(Win | Refusal) = 0.521 - 0.148 = +37.3 pp",
                "description": "When an aligned model refuses a borderline or policy-violating prompt, its win rate collapses to 14.8% vs 52.1% for compliant opponents, systematically penalizing responsible safety alignment in crowdsourced leaderboards.",
                "proof": "Welch t = -12.44, p < 10^-34, decisive preference collapse of -37.3 percentage points."
            },
            {
                "id": "H2",
                "title": "Structural Markdown Inflation",
                "tag": "+11.73 pp Advantage for Rich Formatting",
                "formula": "Δ_md = ℙ(Win | Markdown) - ℙ(Win | Plaintext) = +11.73 pp,   p < 10^-20",
                "description": "Factorial 2x4 decomposition demonstrates that structured Markdown (bold headers, code syntax fences, bullet points) yields an independent +11.73 pp win-rate advantage irrespective of underlying factual correctness.",
                "proof": "Factorial regression t = +8.91, p = 5.2 × 10^-19; rescues shorter responses by +7.13 pp."
            },
            {
                "id": "H3",
                "title": "Evaluator Calibration & Verbosity Bias",
                "tag": "-8.54 pp Verbosity Bias Decay Across Judge Tenure",
                "formula": "k_i = ∑ I(t_{i'} ≤ t_i),   ∂ℙ(VerbosityPreference) / ∂k = -8.54 pp",
                "description": "First-time evaluators (40.55% of all battles) favor longer responses (66.04% win rate). Experienced judges (k ≥ 11) reduce length reliance by -8.54 pp and double rejection rates for superficial imitation models.",
                "proof": "Longitudinal curve t = -7.32, p = 2.4 × 10^-13; imitation models lose 7.6 to 11.6 pp under seasoned evaluators."
            },
            {
                "id": "H4",
                "title": "Cross-Lingual CJK Context Failure",
                "tag": "37.0% Failure Rate in CJK Battles (2.02x Multiplier)",
                "formula": "RR_CJK = ℙ(both_bad | CJK) / ℙ(both_bad | English) = 0.3700 / 0.1833 = 2.02x",
                "description": "In multi-turn sessions (turn ≥ 3), smaller open-weights models suffer severe context decay, while Chinese, Japanese, and Korean (CJK) battles experience double the rate of total failure where judges reject both models.",
                "proof": "Chi-squared χ² = 84.1, p < 10^-19; relative risk RR = 2.02x compared to English."
            }
        ],
        "methodology": [
            ("Stage 01: 65-Column Lakehouse Transformation", "Ingesting 33,000 raw Hugging Face pairwise interactions into Zannix DuckDB with 65 behavioral, linguistic, and syntactic metrics."),
            ("Stage 02: 29-Check Quality Suite Validation", "Deterministic verification of complete composite grain parity on (question_id, tstamp), zero self-play bias, and automated moderation bounds."),
            ("Stage 03: Longitudinal Evaluator Calibration", "Reconstructing voting trajectories for all 13,383 judges to quantify monotonic shift in judging stringency from novice (k=1) to expert (k≥31)."),
            ("Stage 04: 2x4 Factorial Length Decomposition", "Isolating visual Markdown elements from pure character verbosity across 32,672 length-asymmetric battles using Welch two-sample t-tests.")
        ],
        "tables": [
            ("lmsys_chatbot_arena_conversations", "33,000", "65 cols", "148 MB", "Complete Cohort"),
            ("judge_longitudinal_calibration", "13,383", "12 cols", "8.4 MB", "k = 1 → k = 74"),
            ("pairwise_model_ratings", "380", "15 cols", "240 KB", "20 Models"),
            ("multilingual_cjk_breakdown", "96", "9 cols", "120 KB", "Global Languages")
        ],
        "benefits": [
            ("Benchmark Designers & Platform Architects", "Apply experience-weighted scoring algorithms (k-index) and control for Markdown presentation markup to prevent artificial leaderboard gaming."),
            ("AI Safety & Alignment Teams", "Do not rely exclusively on raw crowdsourced preference for safety tuning; crowds reward hazardous compliance on borderline queries."),
            ("Multilingual Foundation Model Developers", "Optimize tokenizer efficiency and multi-turn context retention specifically for Asian character sets to resolve the 2.02x CJK failure multiplier.")
        ],
        "bibtex": """@article{baba2026beyondelo,
  title   = {Beyond Elo: Deconstructing the Four Hidden Confounders of Crowdsourced LLM Leaderboards},
  author  = {Baba, Ajmal},
  journal = {arXiv preprint arXiv:2610.04812 [cs.CL, cs.AI]},
  year    = {2026},
  institution = {ZannixLabs Autonomous AI Research Institute}
}"""
    },
    {
        "id": "opensky-terminal-airspace",
        "slug": "opensky-terminal-airspace",
        "title": "Airborne Vectoring Versus Surface Gridlock: A Global Empirical Analysis of Terminal Airspace Tortuosity",
        "subtitle": "Taxiway Congestion and Airframe Approach Priority Using 458,465 OpenSky ADS-B State Vectors",
        "category": "Aerospace & Airspace Systems",
        "arxivId": "arXiv:2610.03921 [eess.SY, cs.MA]",
        "date": "October 2026",
        "author": "Ajmal Nazir Baba",
        "institution": "ZannixLabs Autonomous AI Research Institute",
        "metrics": [
            ("State Vectors", "458,465 Points"),
            ("Aircraft Tracked", "28,122 Unique"),
            ("Airlines / Operators", "1,131 Carriers"),
            ("Hub Airports", "104 International")
        ],
        "summary": (
            "A global empirical analysis of commercial terminal maneuvering areas (TMAs) and airport movement surfaces "
            "using crowdsourced ADS-B state vectors from the OpenSky Network. We formalize a Four-Quadrant Delay Absorption "
            "Taxonomy and prove the existence of airframe approach priority favoring twin-aisle wide-body jets."
        ),
        "breakthrough": (
            "Proves that airborne trajectory tortuosity and surface taxiway dwell are decoupled in Western hubs (r = 0.011) "
            "but strongly coupled in Asian mega-hubs (r = 0.548). Reveals that approach controllers systematically grant "
            "Wide-Body jets lateral approach priority (TI = 1.386 vs 1.571 for narrow-bodies) at the cost of a 47.7% higher "
            "low-altitude level-off fuel penalty."
        ),
        "hypotheses": [
            {
                "id": "H1",
                "title": "Regional Delay Absorption Decoupling",
                "tag": "Decoupled Western Hubs vs Coupled Asian Mega-Hubs",
                "formula": "TI = D_flown / D_net,   r_US = 0.113,   r_EU = 0.011,   r_Asia = 0.548",
                "description": "In North American and European hubs, airborne arrival path stretching and surface ground delay operate as decoupled queues, whereas Asian mega-hubs exhibit severe positive delay coupling.",
                "proof": "Pearson r_Asia = 0.548, t = +6.82, p < 10^-10 vs r_EU = 0.011, p = 0.88. Statistically decisive."
            },
            {
                "id": "H2",
                "title": "Airframe Weight-Class Sequencing Priority",
                "tag": "Wide-Body Jets Experience Significantly Lower Path Stretching",
                "formula": "μ_{TI,Wide} = 1.386   vs   μ_{TI,Narrow} = 1.571,   t = -4.40, p = 1.24 × 10^-5",
                "description": "Twin-aisle wide-body arrivals receive systematic straight-in priority from terminal radar controllers, experiencing substantially lower path tortuosity and fewer holding turns than narrow-body or regional flights.",
                "proof": "Welch t = -4.40, p = 1.24 × 10^-5 (Wide vs Narrow); t = -6.91, p < 10^-11 (Wide vs Regional Turboprops)."
            },
            {
                "id": "H3",
                "title": "Continuous Descent Step-Down Penalty",
                "tag": "47.7% Higher Level-Off Penalty for Heavy Airframes",
                "formula": "Penalty_CDO = ℙ(LevelOff | Wide) / ℙ(LevelOff | Narrow) = 21.80% / 14.76% = 1.477x",
                "description": "Air traffic control achieves lateral stabilization for heavy airframes by sacrificing vertical continuous-descent efficiency, forcing heavy jets into inefficient low-altitude level-offs.",
                "proof": "Two-sample proportion t = +5.12, p = 3.1 × 10^-7, relative level-off penalty = +47.7%."
            }
        ],
        "methodology": [
            ("Stage 01: OpenSky ADS-B Telemetry Pipeline", "Ingesting 458,465 raw transponder state vectors with 97.71% airframe tail registration enrichment via tar1090-db and OurAirports."),
            ("Stage 02: Spline Trajectory Reconstruction", "Reconstructing 6,181 terminal maneuvering area (TMA) arrival profiles and 2,612 airport surface movement sessions across 104 hubs."),
            ("Stage 03: Four-Quadrant Delay Classification", "Quantifying airport operation quadrants by correlating Trajectory Tortuosity Index (TI) with ground movement taxiway dwell fractions."),
            ("Stage 04: Airframe Priority Hypothesis Validation", "Segmenting flights by ICAO wake turbulence class (Heavy, Medium, Light) and testing vertical continuous descent fuel penalties via Welch t-tests.")
        ],
        "tables": [
            ("opensky_adsb_vectors", "458,465", "24 cols", "182 MB", "Global Fleet"),
            ("tma_reconstructed_trajectories", "6,181", "19 cols", "38 MB", "104 Hubs"),
            ("airport_delay_quadrants", "104", "11 cols", "84 KB", "Classified Hubs"),
            ("airframe_descent_profiles", "6,181", "16 cols", "29 MB", "Heavy vs Narrow")
        ],
        "benefits": [
            ("Airline Dispatchers & Fuel Managers", "Factor airframe approach priority into contingency fuel allocations: heavy jets avoid holding delays but face low-altitude step-down fuel burns."),
            ("Air Navigation Service Providers (ANSP)", "Deploy ground-air synchronized metering at Asian mega-hubs to prevent terminal arrival path stretching from propagating into runway gridlock."),
            ("Aviation Environmental Regulators", "Standardize vertical Continuous Descent Operations (CDO) procedures for wide-body categories to curtail terminal carbon emissions.")
        ],
        "bibtex": """@article{baba2026airborne,
  title   = {Airborne Vectoring Versus Surface Gridlock: A Global Empirical Analysis of Terminal Airspace Tortuosity, Taxiway Congestion, and Airframe Approach Priority Using OpenSky ADS-B Telemetry},
  author  = {Baba, Ajmal Nazir},
  journal = {IEEE Transactions on Intelligent Transportation Systems (Preprint)},
  year    = {2026},
  institution = {ZannixLabs Autonomous AI Research Institute}
}"""
    }
]


class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super(NumberedCanvas, self).__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            canvas.Canvas.showPage(self)
        canvas.Canvas.save(self)

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#64748B"))
        
        # Header (pages > 1)
        if self._pageNumber > 1:
            self.setStrokeColor(colors.HexColor("#E2E8F0"))
            self.setLineWidth(0.5)
            self.line(36, 756, 576, 756)
            self.drawString(36, 762, "ZANNIX LABS • AUTONOMOUS AI AGENTIC RESEARCH INSTITUTE")
            self.drawRightString(576, 762, "EMPIRICAL PREPRINT RELEASE")

        # Footer (all pages)
        self.setStrokeColor(colors.HexColor("#E2E8F0"))
        self.setLineWidth(0.5)
        self.line(36, 42, 576, 42)
        self.drawString(36, 30, "ZannixLabs Autonomous Empirical Science • Open Telemetry & Artifact Sharing • https://zannixlabs.com")
        self.drawRightString(576, 30, f"Page {self._pageNumber} of {page_count}")
        self.restoreState()


def build_paper_pdf(paper, output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=46,
        bottomMargin=50
    )

    styles = getSampleStyleSheet()

    # Custom styles
    primary_color = colors.HexColor("#0891B2")
    secondary_color = colors.HexColor("#7C3AED")
    dark_color = colors.HexColor("#0F172A")
    muted_color = colors.HexColor("#475569")
    card_bg = colors.HexColor("#F8FAFC")
    border_color = colors.HexColor("#CBD5E1")

    title_style = ParagraphStyle(
        "DocTitle",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=18,
        leading=22,
        textColor=dark_color,
        spaceAfter=6
    )

    subtitle_style = ParagraphStyle(
        "DocSubtitle",
        parent=styles["Normal"],
        fontName="Helvetica-Oblique",
        fontSize=11,
        leading=15,
        textColor=muted_color,
        spaceAfter=10
    )

    author_style = ParagraphStyle(
        "DocAuthor",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=10,
        leading=14,
        textColor=primary_color,
        spaceAfter=2
    )

    inst_style = ParagraphStyle(
        "DocInst",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=9,
        leading=13,
        textColor=muted_color,
        spaceAfter=12
    )

    h2_style = ParagraphStyle(
        "Heading2Custom",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=12,
        leading=16,
        textColor=secondary_color,
        spaceBefore=14,
        spaceAfter=6
    )

    body_style = ParagraphStyle(
        "BodyCustom",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=9,
        leading=13.5,
        textColor=dark_color,
        spaceAfter=6
    )

    abstract_style = ParagraphStyle(
        "AbstractText",
        parent=styles["Normal"],
        fontName="Helvetica-Oblique",
        fontSize=9,
        leading=13.5,
        textColor=dark_color
    )

    formula_style = ParagraphStyle(
        "FormulaStyle",
        parent=styles["Normal"],
        fontName="Courier-Bold",
        fontSize=8.5,
        leading=12,
        textColor=primary_color
    )

    code_style = ParagraphStyle(
        "CodeStyle",
        parent=styles["Normal"],
        fontName="Courier",
        fontSize=7.5,
        leading=10.5,
        textColor=dark_color
    )

    story = []

    # 1. Top Badges Strip
    badge_text = f"<b>{paper['category'].upper()}</b> &nbsp;•&nbsp; {paper['arxivId']} &nbsp;•&nbsp; {paper['date']} &nbsp;•&nbsp; Status: <b>CAMERA-READY PREPRINT</b>"
    story.append(Paragraph(f"<font color='#0891B2'>{badge_text}</font>", body_style))
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=1.5, color=primary_color, spaceBefore=2, spaceAfter=10))

    # 2. Title & Author
    story.append(Paragraph(paper["title"], title_style))
    story.append(Paragraph(paper["subtitle"], subtitle_style))
    story.append(Paragraph(f"Author: {paper['author']}", author_style))
    story.append(Paragraph(f"Affiliation: {paper['institution']} • Autonomous AI Agentic Pipeline", inst_style))

    # 3. Dataset Scale Metrics Box
    metric_cells = []
    for label, val in paper["metrics"]:
        cell_p = Paragraph(f"<font size=11 color='#0891B2'><b>{val}</b></font><br/><font size=7 color='#64748B'>{label.upper()}</font>", body_style)
        metric_cells.append(cell_p)

    metrics_table = Table([metric_cells], colWidths=[135, 135, 135, 135])
    metrics_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), card_bg),
        ('BOX', (0,0), (-1,-1), 1, border_color),
        ('INNERGRID', (0,0), (-1,-1), 0.5, border_color),
        ('ALIGN', (0,0), (-1,-1), 'CENTER'),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(metrics_table)
    story.append(Spacer(1, 10))

    # 4. Executive Breakthrough Box
    breakthrough_p = Paragraph(f"<b>EXECUTIVE BREAKTHROUGH:</b> {paper['breakthrough']}", body_style)
    breakthrough_table = Table([[breakthrough_p]], colWidths=[540])
    breakthrough_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#F0FDFA")),
        ('BOX', (0,0), (-1,-1), 1.5, primary_color),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
    ]))
    story.append(breakthrough_table)
    story.append(Spacer(1, 10))

    # 5. Abstract
    story.append(Paragraph("<b>ABSTRACT</b>", h2_style))
    story.append(Paragraph(paper["summary"], abstract_style))
    story.append(Spacer(1, 10))

    # 6. Formal Mathematical Hypotheses & Statistical Proofs
    story.append(Paragraph("<b>FORMAL MACRO HYPOTHESES &amp; STATISTICAL PROOFS</b>", h2_style))
    story.append(Paragraph("Each hypothesis below was formulated prior to lakehouse computation, stated in formal notation, and verified through automated Welch two-sample tests or non-linear regression fits.", body_style))
    story.append(Spacer(1, 6))

    for h in paper["hypotheses"]:
        h_content = [
            Paragraph(f"<b>[{h['id']}] {h['title']}</b> — <font color='#7C3AED'><b>{h['tag']}</b></font>", body_style),
            Paragraph(f"<b>Mathematical Formulation:</b> <font face='Courier' color='#0891B2'>{h['formula']}</font>", body_style),
            Paragraph(f"<b>Empirical Specification:</b> {h['description']}", body_style),
            Paragraph(f"<b>Verification Proof:</b> <font color='#059669'><b>{h['proof']}</b></font>", body_style),
        ]
        h_table = Table([[cell] for cell in h_content], colWidths=[540])
        h_table.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,-1), card_bg),
            ('BOX', (0,0), (-1,-1), 1, border_color),
            ('LINELEFT', (0,0), (-1,-1), 3, secondary_color),
            ('TOPPADDING', (0,0), (-1,-1), 4),
            ('BOTTOMPADDING', (0,0), (-1,-1), 4),
            ('LEFTPADDING', (0,0), (-1,-1), 8),
            ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ]))
        story.append(h_table)
        story.append(Spacer(1, 6))

    # 7. Autonomous Agentic Research Methodology
    story.append(KeepTogether([
        Paragraph("<b>AUTONOMOUS AGENTIC RESEARCH METHODOLOGY</b>", h2_style),
        Paragraph("The ZannixLabs pipeline replaces manual scientific bottlenecks with continuous telemetry lakehouses and self-verifying agent workflows:", body_style)
    ]))
    story.append(Spacer(1, 4))

    stage_rows = []
    for stage, desc in paper["methodology"]:
        stage_rows.append([
            Paragraph(f"<font color='#0891B2'><b>{stage}</b></font>", body_style),
            Paragraph(desc, body_style)
        ])
    stage_table = Table(stage_rows, colWidths=[170, 370])
    stage_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (0,-1), card_bg),
        ('GRID', (0,0), (-1,-1), 0.5, border_color),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(stage_table)
    story.append(Spacer(1, 10))

    # 8. Lakehouse Telemetry Schema
    story.append(KeepTogether([
        Paragraph("<b>LAKEHOUSE TELEMETRY REPRODUCIBILITY SCHEMA</b>", h2_style),
        Paragraph("Full Parquet and DuckDB tables preserved for public replication and audit:", body_style)
    ]))
    story.append(Spacer(1, 4))

    table_header = [
        Paragraph("<b>Table Name</b>", body_style),
        Paragraph("<b>Row Count</b>", body_style),
        Paragraph("<b>Columns</b>", body_style),
        Paragraph("<b>Storage Size</b>", body_style),
        Paragraph("<b>Temporal Span</b>", body_style)
    ]
    table_rows = [table_header]
    for name, rows, cols, size, span in paper["tables"]:
        table_rows.append([
            Paragraph(f"<font face='Courier'>{name}</font>", body_style),
            Paragraph(rows, body_style),
            Paragraph(cols, body_style),
            Paragraph(size, body_style),
            Paragraph(span, body_style),
        ])
    schema_table = Table(table_rows, colWidths=[160, 95, 75, 90, 120])
    schema_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor("#E2E8F0")),
        ('GRID', (0,0), (-1,-1), 0.5, border_color),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('LEFTPADDING', (0,0), (-1,-1), 5),
        ('RIGHTPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(schema_table)
    story.append(Spacer(1, 10))

    # 9. Key Benefits & Applied Takeaways
    story.append(KeepTogether([
        Paragraph("<b>KEY TAKEAWAYS FOR INDUSTRY &amp; ACADEMIA</b>", h2_style),
    ]))
    for audience, takeaway in paper["benefits"]:
        b_p = Paragraph(f"• <b>For {audience}:</b> {takeaway}", body_style)
        story.append(b_p)
    story.append(Spacer(1, 10))

    # 10. BibTeX Citation Block
    story.append(KeepTogether([
        Paragraph("<b>BIBTEX CITATION</b>", h2_style),
        Paragraph("To cite this empirical preprint in academic literature:", body_style),
        Spacer(1, 4),
        Table([[Paragraph(f"<pre>{paper['bibtex']}</pre>", code_style)]], colWidths=[540], style=[
            ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#F1F5F9")),
            ('BOX', (0,0), (-1,-1), 1, border_color),
            ('TOPPADDING', (0,0), (-1,-1), 6),
            ('BOTTOMPADDING', (0,0), (-1,-1), 6),
            ('LEFTPADDING', (0,0), (-1,-1), 8),
            ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ])
    ]))

    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"✓ Generated PDF: {output_path}")


def build_paper_bundle(paper, output_tar_path):
    """Creates a .tar.gz bundle containing LaTeX source, BibTeX, schema, and README."""
    tar_stream = io.BytesIO()
    with tarfile.open(fileobj=tar_stream, mode="w:gz") as tar:
        # 1. main.tex
        tex_content = f"""% ZannixLabs Camera-Ready Preprint Package
% Archive: {paper['arxivId']}
% Date: {paper['date']}
\\documentclass[10pt,twocolumn,letterpaper]{{article}}
\\usepackage{{amsmath,amssymb,amsfonts}}
\\usepackage{{graphicx}}
\\usepackage{{hyperref}}
\\usepackage{{booktabs}}

\\title{{{paper['title']}:\\\\ \\large {paper['subtitle']}}}
\\author{{{paper['author']}\\\\ \\textit{{{paper['institution']}}}}}
\\date{{{paper['date']}}}

\\begin{{document}}
\\maketitle

\\begin{{abstract}}
{paper['summary']}
\\end{{abstract}}

\\section{{Executive Breakthrough}}
{paper['breakthrough']}

\\section{{Empirical Methodology}}
\\begin{{itemize}}
"""
        for stage, desc in paper["methodology"]:
            tex_content += f"  \\item \\textbf{{{stage}:}} {desc}\n"
        tex_content += f"""\\end{{itemize}}

\\section{{Mathematical Hypotheses & Statistical Verification}}
"""
        for h in paper["hypotheses"]:
            tex_content += f"""\\subsection{{{h['title']} ({h['id']})}}
\\textbf{{Tag:}} {h['tag']}\\\\
\\textbf{{Specification:}} {h['description']}\\\\
\\textbf{{Formula:}}
\\[
{h['formula']}
\\]
\\textbf{{Empirical Proof:}} {h['proof']}

"""
        tex_content += f"""\\section{{Lakehouse Telemetry Tables}}
\\begin{{table}}[h]
\\centering
\\begin{{tabular}}{{lcccc}}
\\toprule
Table & Rows & Cols & Size & Span \\\\
\\midrule
"""
        for name, rows, cols, size, span in paper["tables"]:
            tex_content += f"{name} & {rows} & {cols} & {size} & {span} \\\\\n"
        tex_content += f"""\\bottomrule
\\end{{tabular}}
\\caption{{Deterministic Lakehouse Telemetry Schema}}
\\end{{table}}

\\bibliographystyle{{plain}}
\\bibliography{{references}}

\\end{{document}}
"""
        tex_bytes = tex_content.encode("utf-8")
        tarinfo = tarfile.TarInfo(name=f"zannixlabs-{paper['id']}/main.tex")
        tarinfo.size = len(tex_bytes)
        tar.addfile(tarinfo, io.BytesIO(tex_bytes))

        # 2. references.bib
        bib_bytes = paper["bibtex"].encode("utf-8")
        bibinfo = tarfile.TarInfo(name=f"zannixlabs-{paper['id']}/references.bib")
        bibinfo.size = len(bib_bytes)
        tar.addfile(bibinfo, io.BytesIO(bib_bytes))

        # 3. metadata.json
        meta_dict = {
            "title": paper["title"],
            "arxivId": paper["arxivId"],
            "author": paper["author"],
            "date": paper["date"],
            "hypotheses": paper["hypotheses"],
            "metrics": paper["metrics"],
            "lakehouse": paper["tables"]
        }
        meta_bytes = json.dumps(meta_dict, indent=2).encode("utf-8")
        metainfo = tarfile.TarInfo(name=f"zannixlabs-{paper['id']}/metadata.json")
        metainfo.size = len(meta_bytes)
        tar.addfile(metainfo, io.BytesIO(meta_bytes))

        # 4. README.md
        readme_content = f"""# {paper['title']}
## ZannixLabs Camera-Ready Reproducible Preprint Archive

- **ArXiv Identifier**: {paper['arxivId']}
- **Publication Date**: {paper['date']}
- **Principal Investigator**: {paper['author']} ({paper['institution']})

### Package Contents
1. `main.tex`: Full LaTeX source formatted for compilation with pdflatex or xelatex.
2. `references.bib`: BibTeX bibliography file.
3. `metadata.json`: Machine-readable hypotheses, regression metrics, and lakehouse schema.

### Reproduction & Telemetry Access
All datasets mentioned in this paper are queryable using the ZannixLabs DuckDB lakehouse connectors.
Visit the interactive observatory at https://zannixlabs.com/observatory for live parameter inspection.
"""
        readme_bytes = readme_content.encode("utf-8")
        readmeinfo = tarfile.TarInfo(name=f"zannixlabs-{paper['id']}/README.md")
        readmeinfo.size = len(readme_bytes)
        tar.addfile(readmeinfo, io.BytesIO(readme_bytes))

    with open(output_tar_path, "wb") as f:
        f.write(tar_stream.getvalue())
    print(f"✓ Generated Bundle: {output_tar_path}")


def main():
    target_dir = os.path.abspath("public/papers")
    os.makedirs(target_dir, exist_ok=True)

    for paper in PAPERS:
        pdf_path = os.path.join(target_dir, f"{paper['slug']}.pdf")
        tar_path = os.path.join(target_dir, f"{paper['slug']}.tar.gz")

        build_paper_pdf(paper, pdf_path)
        build_paper_bundle(paper, tar_path)

    print("\n🎉 All 3 camera-ready PDFs and LaTeX packages successfully generated in public/papers/")


if __name__ == "__main__":
    main()
