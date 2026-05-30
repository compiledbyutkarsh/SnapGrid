import { stories, currentUser } from '../data/mockData';
import { Plus } from 'lucide-react';

export default function Stories() {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide" style={{scrollbarWidth:'none'}}>
      {/* Your story */}
      <div className="flex flex-col items-center gap-1 flex-shrink-0 cursor-pointer">
        <div className="relative">
          <img src={currentUser.avatar} className="w-16 h-16 rounded-full object-cover border-2 border-neutral-800" alt=""/>
          <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center border-2 border-black">
            <Plus size={12} strokeWidth={3}/>
          </div>
        </div>
        <span className="text-xs text-neutral-400 w-16 text-center truncate">Your story</span>
      </div>

      {/* Others */}
      {stories.map(s => (
        <div key={s.id} className="flex flex-col items-center gap-1 flex-shrink-0 cursor-pointer">
          <div className={`p-0.5 rounded-full ${s.seen ? 'bg-neutral-700' : 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600'}`}>
            <div className="p-0.5 bg-black rounded-full">
              <img src={s.avatar} className="w-14 h-14 rounded-full object-cover" alt=""/>
            </div>
          </div>
          <span className="text-xs text-neutral-400 w-16 text-center truncate">{s.username}</span>
        </div>
      ))}
    </div>
  );
}
