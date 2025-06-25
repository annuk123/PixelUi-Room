'use client';

import { icons } from './mock-icons';
import { IconCard } from './IconCard';

export function IconGrid({ category }: { category: string }) {
  const filtered = category === 'All'
    ? icons
    : icons.filter((icon) => icon.category.toLowerCase() === category.toLowerCase());

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {filtered.map((icon, i) => (
        <IconCard key={icon.name + i} icon={icon} />
      ))}
    </div>
  );
}
