import { useState, useRef } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  ExternalLink, 
  FileText, 
  Maximize2, 
  Minimize2, 
  RotateCcw, 
  ZoomIn, 
  ZoomOut, 
  Layers, 
  BookOpen, 
  Printer, 
  Check, 
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { ResearchPaper } from "./researchData";

interface PdfDocumentViewerProps {
  paper: ResearchPaper;
  onSwitchToOriginal?: () => void;
  pageCount?: number;
}

export function PdfDocumentViewer({ 
  paper, 
  onSwitchToOriginal, 
  pageCount = 2 
}: PdfDocumentViewerProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [viewMode, setViewMode] = useState<"continuous" | "single">("continuous");
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showNativeEmbed, setShowNativeEmbed] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const slug = paper.slug || paper.id;
  const pdfUrl = `/papers/${slug}.pdf`;

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 15, 175));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 15, 60));
  };

  const handleResetZoom = () => {
    setZoomLevel(100);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, pageCount));
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  const handlePrint = () => {
    window.open(pdfUrl, "_blank");
  };

  // Generate page images array
  const pages = Array.from({ length: pageCount }, (_, i) => ({
    pageNumber: i + 1,
    src: `/papers/preview/${slug}-page-${i + 1}.jpg`,
  }));

  return (
    <div 
      ref={containerRef}
      className={`space-y-4 ${isFullscreen ? "fixed inset-0 z-50 bg-slate-900 p-6 overflow-y-auto" : ""}`}
    >
      {/* Top Document Controls Toolbar */}
      <div className="rounded-xl border border-slate-200 bg-white p-3 px-4 flex flex-wrap items-center justify-between gap-3 shadow-xs">
        {/* Left Side: Document Meta & Mode */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs font-mono">
            <BookOpen className="size-4 text-blue-700" />
            <span className="font-semibold text-slate-900">Camera-Ready Document Viewer</span>
            <Badge variant="outline" className="text-[10px] font-mono border-blue-200 bg-blue-50 text-blue-700 hidden sm:inline-flex">
              {paper.arxivId}
            </Badge>
          </div>

          {/* Continuous vs Single Page Switcher */}
          <div className="hidden md:flex rounded-lg bg-slate-100 p-0.5 border border-slate-200 text-xs font-mono">
            <button
              type="button"
              onClick={() => setViewMode("continuous")}
              className={`px-2.5 py-1 rounded-md transition-all ${
                viewMode === "continuous" 
                  ? "bg-blue-600 text-white font-semibold shadow-xs" 
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Continuous
            </button>
            <button
              type="button"
              onClick={() => setViewMode("single")}
              className={`px-2.5 py-1 rounded-md transition-all ${
                viewMode === "single" 
                  ? "bg-blue-600 text-white font-semibold shadow-xs" 
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Page Flip
            </button>
          </div>
        </div>

        {/* Center: Pagination & Zoom Controls */}
        <div className="flex items-center gap-2 text-xs font-mono">
          {viewMode === "single" && (
            <div className="flex items-center gap-1 border-r border-slate-200 pr-2 mr-1">
              <Button
                variant="glass"
                size="sm"
                onClick={handlePrevPage}
                disabled={currentPage <= 1}
                className="h-8 w-8 p-0"
                title="Previous Page"
              >
                <ChevronLeft className="size-4" />
              </Button>
              <span className="px-1 text-slate-500">
                <strong className="text-slate-900">{currentPage}</strong> / {pageCount}
              </span>
              <Button
                variant="glass"
                size="sm"
                onClick={handleNextPage}
                disabled={currentPage >= pageCount}
                className="h-8 w-8 p-0"
                title="Next Page"
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>
          )}

          {/* Zoom Buttons */}
          <div className="flex items-center gap-1">
            <Button
              variant="glass"
              size="sm"
              onClick={handleZoomOut}
              disabled={zoomLevel <= 60}
              className="h-8 w-8 p-0"
              title="Zoom Out"
            >
              <ZoomOut className="size-3.5" />
            </Button>
            <button
              type="button"
              onClick={handleResetZoom}
              className="px-2 py-1 rounded hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
              title="Reset to 100%"
            >
              {zoomLevel}%
            </button>
            <Button
              variant="glass"
              size="sm"
              onClick={handleZoomIn}
              disabled={zoomLevel >= 175}
              className="h-8 w-8 p-0"
              title="Zoom In"
            >
              <ZoomIn className="size-3.5" />
            </Button>
          </div>
        </div>

        {/* Right Side: External Fullscreen, Download, Format Switch */}
        <div className="flex flex-wrap items-center gap-2">
          {onSwitchToOriginal && (
            <Button
              variant="glass"
              size="sm"
              onClick={onSwitchToOriginal}
              className="text-xs font-mono h-8"
              title="Switch to interactive two-column LaTeX view"
            >
              <FileText className="mr-1.5 size-3.5 text-blue-700" /> arXiv Format
            </Button>
          )}

          <Button
            variant="glass"
            size="sm"
            asChild
            className="text-xs font-mono h-8"
            title="Open camera-ready PDF file in new browser tab"
          >
            <a href={pdfUrl} target="_blank" rel="noreferrer">
              <ExternalLink className="mr-1.5 size-3.5" /> Fullscreen Tab
            </a>
          </Button>

          <Button
            variant="glow"
            size="sm"
            asChild
            className="text-xs font-mono h-8"
            title="Save preprint PDF to your computer"
          >
            <a href={pdfUrl} download={`${slug}.pdf`}>
              <Download className="mr-1.5 size-3.5" /> Save PDF
            </a>
          </Button>

          <Button
            variant="glass"
            size="sm"
            onClick={toggleFullscreen}
            className="h-8 w-8 p-0 text-slate-600 hover:text-slate-900"
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Viewer"}
          >
            {isFullscreen ? <Minimize2 className="size-3.5" /> : <Maximize2 className="size-3.5" />}
          </Button>
        </div>
      </div>

      {/* Main Document Viewer Canvas */}
      <div className="rounded-2xl border border-slate-300 bg-slate-100/90 p-4 md:p-8 overflow-x-auto shadow-inner min-h-[800px] flex flex-col items-center justify-start">
        {showNativeEmbed ? (
          /* Native PDF iframe embed fallback toggle */
          <div className="w-full">
            <div className="mb-4 flex items-center justify-between text-xs font-mono text-muted-foreground">
              <span>Native Browser PDF Embed</span>
              <Button
                variant="glass"
                size="sm"
                onClick={() => setShowNativeEmbed(false)}
                className="h-7 text-xs font-mono"
              >
                Back to Visual Canvas Viewer
              </Button>
            </div>
            <iframe
              src={`${pdfUrl}#view=FitH`}
              title={paper.title}
              className="w-full h-[950px] border-0 rounded-xl bg-white"
            />
          </div>
        ) : (
          /* High-Resolution Document Canvas (100% Reliable in all browsers) */
          <div 
            className="transition-all duration-200 ease-out flex flex-col items-center gap-8 w-full"
            style={{ maxWidth: `${Math.round(850 * (zoomLevel / 100))}px` }}
          >
            {viewMode === "continuous" ? (
              // Continuous Vertical Scroll
              pages.map((p) => (
                <div 
                  key={p.pageNumber} 
                  className="relative group w-full bg-white rounded-md shadow-xl border border-slate-300/80 overflow-hidden"
                >
                  {/* Floating Page Number Pill */}
                  <div className="absolute top-3 right-3 z-10 rounded-full bg-slate-900/80 px-2.5 py-0.5 font-mono text-[10px] text-white backdrop-blur-md border border-white/20">
                    Page {p.pageNumber} of {pageCount}
                  </div>

                  {/* Rendered Document Page */}
                  <img
                    src={p.src}
                    alt={`${paper.title} — Page ${p.pageNumber}`}
                    className="w-full h-auto block select-none pointer-events-auto"
                    loading="lazy"
                  />
                </div>
              ))
            ) : (
              // Single Page Mode
              <div className="relative group w-full bg-white rounded-md shadow-xl border border-slate-300/80 overflow-hidden">
                <div className="absolute top-3 right-3 z-10 rounded-full bg-slate-900/80 px-2.5 py-0.5 font-mono text-[10px] text-white backdrop-blur-md border border-white/20">
                  Page {currentPage} of {pageCount}
                </div>
                <img
                  src={pages[currentPage - 1]?.src}
                  alt={`${paper.title} — Page ${currentPage}`}
                  className="w-full h-auto block select-none"
                />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Viewer Footnote & Quick Native Switch */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-2 text-xs font-mono text-slate-500">
        <div className="flex items-center gap-2">
          <span>Camera-Ready IEEE/arXiv Layout</span>
          <span>•</span>
          <span>2 Pages Complete</span>
          <span>•</span>
          <span className="text-emerald-700 font-semibold">100% Visual Fidelity</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setShowNativeEmbed(!showNativeEmbed)}
            className="hover:text-blue-700 transition-colors underline"
          >
            {showNativeEmbed ? "Switch to Canvas Pages" : "Try Browser Native Embed"}
          </button>
          <span>•</span>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-700 transition-colors inline-flex items-center gap-1"
          >
            Open RAW PDF <ExternalLink className="size-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
