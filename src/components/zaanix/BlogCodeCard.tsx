import { useState } from "react";
import { Copy, Check, Terminal, Code2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface BlogCodeCardProps {
  title: string;
  language: "python" | "sql" | "bash";
  code: string;
  explanation: string;
}

export function BlogCodeCard({ title, language, code, explanation }: BlogCodeCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        toast.success("Code snippet copied to clipboard");
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      toast.error("Failed to copy code snippet");
    }
  };

  const getLanguageBadge = (lang: string) => {
    switch (lang) {
      case "python":
        return <Badge className="bg-[#1a73e8]/10 text-[#1a73e8] border-[#1a73e8]/20 font-mono text-[10px]">Python 3.12</Badge>;
      case "sql":
        return <Badge className="bg-[#e37400]/10 text-[#b06000] border-[#e37400]/20 font-mono text-[10px]">DuckDB SQL</Badge>;
      default:
        return <Badge className="bg-[#1e8e3e]/10 text-[#1e8e3e] border-[#1e8e3e]/20 font-mono text-[10px]">Terminal Bash</Badge>;
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-[#dadce0] bg-[#1e293b] text-slate-100 shadow-md">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-slate-700/80 bg-slate-900/90 px-4 py-3">
        <div className="flex items-center gap-2.5">
          <Terminal className="size-4 text-[#38bdf8]" />
          <span className="font-mono text-xs font-semibold text-slate-200">{title}</span>
          {getLanguageBadge(language)}
        </div>

        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-7 rounded-md px-2.5 text-xs text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
        >
          {copied ? (
            <>
              <Check className="mr-1.5 size-3.5 text-emerald-400" />
              Copied
            </>
          ) : (
            <>
              <Copy className="mr-1.5 size-3.5" />
              Copy
            </>
          )}
        </Button>
      </div>

      {/* Code body */}
      <div className="p-4 overflow-x-auto font-mono text-[12.5px] leading-relaxed text-slate-200">
        <pre className="whitespace-pre">
          <code>{code}</code>
        </pre>
      </div>

      {/* Explanatory footer */}
      {explanation && (
        <div className="border-t border-slate-700/60 bg-slate-900/50 px-4 py-2.5 text-xs text-slate-400 flex items-start gap-2">
          <Code2 className="size-3.5 mt-0.5 shrink-0 text-slate-400" />
          <span>{explanation}</span>
        </div>
      )}
    </div>
  );
}
