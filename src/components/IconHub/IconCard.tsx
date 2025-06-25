import { useState } from 'react';
import { Check, Copy, Download } from 'lucide-react';
import Link from 'next/link';

interface IconType {
  name: string;
  svg: string;
  png: string;
}

export function IconCard({ icon }: { icon: IconType }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(icon.svg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#141436] p-4 rounded-lg border border-cyan-800 text-center space-y-2">
      <div
        className="w-12 h-12 mx-auto text-cyan-300"
        dangerouslySetInnerHTML={{ __html: icon.svg }}
      />
      <h4 className="text-sm text-cyan-100 font-medium">{icon.name}</h4>
      <div className="flex justify-center gap-2 mt-2">
        <button onClick={handleCopy} className="text-cyan-400 hover:text-white transition">
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
        <Link href={icon.png} download className="hover:text-white transition text-cyan-400">
          <Download size={16} />
        </Link>
      </div>
    </div>
  );
}
