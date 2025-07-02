"use client";

import { Copy, Download } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type SvgData = {
  svg: string;
  label: string;
};

export default function SvgPreviewCard({ svgData }: { svgData: SvgData }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(svgData.svg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const showDownload = true;

  function downloadAsSVG(svg: string, label: string): void {
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${label || "image"}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  return (
    <div className="relative bg-[#0a0f1c] border border-cyan-700 rounded-xl p-4 shadow-md space-y-3">
      <div
        className="w-full h-32 overflow-hidden bg-white rounded-md"
        dangerouslySetInnerHTML={{ __html: svgData.svg }}
      />

      <div className="flex justify-between items-center text-sm text-white">
        <span>{svgData.label}</span>
        <Button onClick={handleCopy} className="text-xs px-3 py-1">
          {copied ? "Copied!" : <Copy size={16} />}
        </Button>


      {showDownload && (
        <button
          onClick={() => downloadAsSVG(svgData.svg, svgData.label)}
          className="absolute top-3 right-3 text-white hover:text-cyan-400 transition"
          title="Download SVG"
        >
          <Download size={18} />
        </button>
      )}
      </div>
    </div>
  );
}
