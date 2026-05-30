import { useState } from 'react';
import { Search } from 'lucide-react';
import { exploreImages } from '../data/mockData';

export default function Explore() {
  const [query, setQuery] = useState('');

  return (
    <div className="max-w-4xl mx-auto pt-8 px-4">
      {/* Search bar */}
      <div className="relative mb-6">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"/>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full bg-neutral-800 rounded-xl pl-10 pr-4 py-3 text-sm outline-none placeholder-neutral-500 focus:ring-1 focus:ring-neutral-600"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-1">
        {exploreImages.map((img, i) => (
          <div key={i}
            className={`relative overflow-hidden cursor-pointer group bg-neutral-900
              ${i === 0 ? 'col-span-2 row-span-2' : ''}
            `}
            style={{ aspectRatio: i === 0 ? '1/1' : '1/1' }}>
            <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt=""/>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 flex gap-4 text-white font-semibold text-sm">
                <span>❤️ {Math.floor(Math.random() * 5000 + 100)}</span>
                <span>💬 {Math.floor(Math.random() * 200 + 10)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
