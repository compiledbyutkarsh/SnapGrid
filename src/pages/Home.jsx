import Stories from '../components/Stories';
import PostCard from '../components/PostCard';
import { posts, suggestedUsers, currentUser } from '../data/mockData';
import { BadgeCheck } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [followed, setFollowed] = useState({});

  return (
    <div className="flex gap-8 max-w-5xl mx-auto pt-8 px-4">
      {/* Feed */}
      <div className="flex-1 max-w-[470px]">
        <Stories />
        <div className="mt-6">
          {posts.map(post => <PostCard key={post.id} post={post}/>)}
        </div>
      </div>

      {/* Right sidebar */}
      <div className="hidden lg:block w-80 flex-shrink-0 pt-2">
        {/* Current user */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <img src={currentUser.avatar} className="w-10 h-10 rounded-full object-cover" alt=""/>
            <div>
              <p className="text-sm font-semibold">{currentUser.username}</p>
              <p className="text-xs text-neutral-500">{currentUser.name}</p>
            </div>
          </div>
          <button className="text-xs text-blue-400 font-semibold hover:text-white transition">Switch</button>
        </div>

        {/* Suggested */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-semibold text-neutral-400">Suggested for you</p>
          <button className="text-xs font-semibold hover:text-neutral-400 transition">See All</button>
        </div>

        <div className="space-y-3">
          {suggestedUsers.map(u => (
            <div key={u.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={u.avatar} className="w-8 h-8 rounded-full object-cover" alt=""/>
                <div>
                  <p className="text-sm font-semibold">{u.username}</p>
                  <p className="text-xs text-neutral-500">{u.mutualFollowers} mutual followers</p>
                </div>
              </div>
              <button
                onClick={() => setFollowed(f => ({...f, [u.id]: !f[u.id]}))}
                className={`text-xs font-semibold transition ${followed[u.id] ? 'text-neutral-400' : 'text-blue-400 hover:text-white'}`}>
                {followed[u.id] ? 'Following' : 'Follow'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-xs text-neutral-600 space-y-2">
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            {['About','Help','Press','API','Jobs','Privacy','Terms'].map(t => (
              <a key={t} href="#" className="hover:underline">{t}</a>
            ))}
          </div>
          <p>© 2025 SNAPGRID</p>
        </div>
      </div>
    </div>
  );
}
