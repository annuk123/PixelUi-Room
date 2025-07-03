"use client";

import { Copy, Download } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

type SvgData = {
  svg: string;
  label: string;
};

export default function SvgPreviewCard({ svgData }: { svgData: SvgData }) {
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);
const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.2, 1, 1, 0.2]);

  const handleCopy = () => {
    navigator.clipboard.writeText(svgData.svg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="relative bg-[#0a0f1c] border border-cyan-700 rounded-2xl p-6 shadow-lg space-y-4 mb-6"
    >
      <div
        className="w-full h-56 sm:h-64 md:h-72 overflow-hidden bg-white rounded-md shadow-md"
        dangerouslySetInnerHTML={{ __html: svgData.svg }}
      />

      <div className="flex justify-between items-center text-sm text-white mt-2">
        <span className="font-medium text-cyan-300">{svgData.label}</span>

        <div className="flex items-center gap-2">
          <Button onClick={handleCopy} className="text-xs px-3 py-1 bg-cyan-600 hover:bg-cyan-500">
            {copied ? "Copied!" : <Copy size={16} />}
          </Button>

          <button
            onClick={() => downloadAsSVG(svgData.svg, svgData.label)}
            className="text-white hover:text-cyan-400 transition"
            title="Download SVG"
          >
            <Download size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
