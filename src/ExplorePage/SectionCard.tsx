import Image from 'next/image';
type SectionCardProps = {
  title: string;
  image: string;
  liveUrl?: string;
  codeUrl?: string;
  category: string;
};

export function SectionCard({ title, image, liveUrl, codeUrl, category }: SectionCardProps) {
  return (
    <div className="bg-[#141436] border border-cyan-700/50 rounded-xl overflow-hidden shadow-md">
      <Image src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-cyan-400">{category}</p>
        <div className="flex gap-4 mt-2">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">
              Live Demo
            </a>
          )}
          {codeUrl && (
            <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}


type SvgCardProps = {
  title: string;
  preview: string;
  svgCode: string;
  category: string;
};

export function SvgCard({ title, preview, svgCode, category }: SvgCardProps) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(svgCode);
  };

  return (
    <div className="bg-[#141436] border border-cyan-700/50 rounded-xl overflow-hidden shadow-md p-4 space-y-3">
      <Image src={preview} alt={title} className="w-full h-48 object-contain bg-white rounded" />
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-xs text-cyan-400">{category}</p>
      <div className="flex gap-4">
        <button
          onClick={handleCopy}
          className="text-sm px-4 py-1 rounded bg-cyan-600 hover:bg-cyan-500 text-black"
        >
          Copy SVG
        </button>
        <a
          href={preview}
          download
          className="text-sm px-4 py-1 rounded border border-cyan-400 text-cyan-300 hover:bg-cyan-700/20"
        >
          Download
        </a>
      </div>
    </div>
  );
}
