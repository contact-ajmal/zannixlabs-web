import katex from "katex";
import "katex/dist/katex.min.css";
import { Copy } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { hypotheses, bibtex } from "./data";

const equations: Record<string, string> = {
  H1: String.raw`\mathrm{HHI} = \sum_{i=1}^{N} s_i^2,\qquad \Delta = \frac{V_{\text{open}}}{V} - \frac{S_{\text{open}}}{S} = 0.658 - 0.399`,
  H2: String.raw`C(n) = \sum_{k=1}^{n}\left(p_0 + k\,\Delta p\right) \approx p_0 n + \tfrac{1}{2}\Delta p\, n^2 \in \mathcal{O}(n^2)`,
  H3: String.raw`t = \frac{\bar{x}_1 - \bar{x}_2}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}},\qquad \alpha = 0.01`,
  H4: String.raw`m \in \mathcal{P} \iff \nexists\, m' : \mathrm{price}(m') \le \mathrm{price}(m) \,\wedge\, \mathrm{IQ}(m') > \mathrm{IQ}(m)`,
};

function Tex({ src }: { src: string }) {
  return (
    <div
      className="overflow-x-auto rounded-lg border border-border bg-background/60 px-3 py-3 text-sm"
      dangerouslySetInnerHTML={{ __html: katex.renderToString(src, { displayMode: true, throwOnError: false }) }}
    />
  );
}

const tables = [
  { t: "gateway_tokens_hourly", rows: "8,412,906", cols: 14, size: "3.8 GB", span: "2025-01 → 2026-09" },
  { t: "model_endpoints", rows: "1,091", cols: 22, size: "1.2 MB", span: "snapshot" },
  { t: "agent_sessions", rows: "27,301,554", cols: 18, size: "6.1 GB", span: "2025-06 → 2026-09" },
  { t: "pricing_history", rows: "214,870", cols: 9, size: "41 MB", span: "2024-11 → 2026-09" },
  { t: "aa_intelligence_index", rows: "612", cols: 7, size: "88 KB", span: "snapshot" },
];

const stats = [
  ["Total tokens", "646.2T"], ["Open-weights token share", "65.8%"], ["Frontier spend share", "60.1%"],
  ["Agent + code token share", "71.1%"], ["Max multi-turn escalation", "31.9x"], ["Reasoning latency Δ", "+69.8%"],
];

export function PaperTabs({ onCopy }: { onCopy: () => void }) {
  return (
    <Tabs defaultValue="abstract" className="min-w-0">
      <TabsList className="grid w-full grid-cols-3 bg-secondary">
        <TabsTrigger value="abstract">Abstract</TabsTrigger>
        <TabsTrigger value="data">Telemetry Tables</TabsTrigger>
        <TabsTrigger value="bib">BibTeX</TabsTrigger>
      </TabsList>

      <TabsContent value="abstract" className="mt-4">
        <Accordion type="single" collapsible defaultValue="H1">
          {hypotheses.map((h) => (
            <AccordionItem key={h.id} value={h.id}>
              <AccordionTrigger><span><span className="mr-2 font-mono text-primary">{h.id}</span>{h.title}</span></AccordionTrigger>
              <AccordionContent className="space-y-3 text-muted-foreground">
                <p>{h.body}</p>
                <Tex src={equations[h.id] ?? ""} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-4 text-sm text-muted-foreground"><strong className="text-foreground">Methodology.</strong> Hourly DuckDB/Arrow lakehouse snapshots; Welch two-sample t-tests; HHI concentration; non-dominated frontier scoring against the Artificial Analysis Intelligence Index.</p>
      </TabsContent>

      <TabsContent value="data" className="mt-4 space-y-5">
        <div className="overflow-x-auto rounded-lg border border-border">
          <p className="border-b border-border px-3 py-2 font-mono text-[11px] text-primary">duckdb&gt; SELECT * FROM duckdb_tables();</p>
          <Table className="font-mono text-xs">
            <TableHeader><TableRow><TableHead>table</TableHead><TableHead className="text-right">rows</TableHead><TableHead className="text-right">cols</TableHead><TableHead className="text-right">size</TableHead><TableHead>span</TableHead></TableRow></TableHeader>
            <TableBody>
              {tables.map((r) => (
                <TableRow key={r.t}><TableCell className="text-primary">{r.t}</TableCell><TableCell className="text-right">{r.rows}</TableCell><TableCell className="text-right">{r.cols}</TableCell><TableCell className="text-right">{r.size}</TableCell><TableCell className="text-muted-foreground">{r.span}</TableCell></TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {stats.map(([k, v]) => (
            <div key={k} className="rounded-lg border border-border bg-background/60 p-3">
              <p className="font-mono text-lg text-primary">{v}</p><p className="text-[11px] text-muted-foreground">{k}</p>
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="bib" className="mt-4">
        <div className="relative rounded-lg border border-border bg-background/80">
          <Button variant="glass" size="sm" onClick={onCopy} className="absolute right-2 top-2"><Copy /> Copy</Button>
          <pre className="overflow-x-auto p-4 pt-12 font-mono text-xs leading-relaxed text-muted-foreground"><code>{bibtex}</code></pre>
        </div>
      </TabsContent>
    </Tabs>
  );
}
