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
  { name: "Llama 3.3 70B", price: 0.6, iq: 41, frontier: false },
  { name: "Qwen3 235B", price: 0.9, iq: 57, frontier: true },
  { name: "DeepSeek R1", price: 1.4, iq: 60, frontier: true },
  { name: "Mistral Large", price: 3.0, iq: 46, frontier: false },
  { name: "GPT-4.1", price: 4.5, iq: 53, frontier: false },
  { name: "Gemini 2.5 Pro", price: 5.6, iq: 69, frontier: true },
  { name: "Claude Sonnet", price: 7.5, iq: 63, frontier: false },
  { name: "o3", price: 9.0, iq: 71, frontier: true },
  { name: "Claude Opus", price: 30, iq: 66, frontier: false },
  { name: "Gemma 27B", price: 0.2, iq: 32, frontier: true },
];

export const hypotheses = [
  { id: "H1", tag: "65.8% Open-Weights Volume vs 60.1% Frontier Spend", title: "Volume–Revenue Bifurcation", body: "Open-weights models dominate token volume while proprietary frontier models capture the majority of spend, yielding a structural bifurcation between usage and revenue." },
  { id: "H2", tag: "31.9x Multi-Turn Cost Escalation in Coding Harnesses", title: "Super-Linear Agent Escalation", body: "Prompt accumulation in coding harnesses grows super-linearly with turn count; cumulative cost at 50+ turns reaches 31.9x the single-turn baseline." },
  { id: "H3", tag: "71.1% Gateway Tokens in Agent & Code Workloads", title: "Agentic Workload Dominance", body: "Agent and code workloads account for 71.1% of observed gateway tokens, overtaking chat as the primary demand driver." },
  { id: "H4", tag: "3.39x Reasoning Intelligence at +69.8% Latency", title: "Reasoning Pareto Frontier", body: "Reasoning-enabled endpoints deliver 3.39x intelligence-per-dollar uplift on the frontier at a median latency penalty of +69.8%." },
];

export const bibtex = `@article{baba2026bifurcation,
  title   = {Volume--Revenue Bifurcation, Super-Linear Multi-Turn Agent Escalation, and the Reasoning Pareto Frontier: An Empirical Study of Global LLM Gateway Telemetry},
  author  = {Baba, Ajmal},
  journal = {arXiv preprint arXiv:2610.xxxxx},
  year    = {2026},
  institution = {Zaanix Labs}
}`;
