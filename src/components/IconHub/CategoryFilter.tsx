'use client';

const categories = ['All', 'SaaS', 'Cybersecurity', 'Enterprise', 'Business', 'Gaming', 'Blockchain'];

export function CategoryFilter({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: (cat: string) => void;
}) {
    function cn(...classes: (string | false | undefined)[]): string {
        return classes.filter(Boolean).join(' ');
    }
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelected(cat)}
          className={cn(
            'px-4 py-1 rounded-full border text-sm',
            selected === cat
              ? 'bg-cyan-600 text-white border-cyan-600'
              : 'border-cyan-800 text-cyan-400 hover:bg-cyan-800'
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
