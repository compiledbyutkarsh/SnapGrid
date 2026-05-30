import { useState } from 'react';
import { Grid, Bookmark, Tag, Settings } from 'lucide-react';
import { currentUser, exploreImages } from '../data/mockData';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('posts');
  const [following, setFollowing] = useState(false);

  const tabs = [
    { id: 'posts', icon: Grid, label: 'Posts' },
    { id: 'saved', icon: Bookmark, label: 'Saved' },
    { id: 'tagged', icon: Tag, label: 'Tagged' },
  ];

  return (
    <div className="max-w-4xl mx-auto pt-10 px-4">
      {/* Profile header */}
      <div className="flex gap-16 mb-10 px-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="p-1 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
            <div className="p-1 bg-black rounded-full">
              <img src={currentUser.avatar} className="w-32 h-32 rounded-full object-cover" alt=""/>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-xl">{currentUser.username}</h2>
            <button
              onClick={() => setFollowing(!following)}
              className={`px-5 py-1.5 rounded-lg text-sm font-semibold transition ${
                following
                  ? 'bg-neutral-800 hover:bg-neutral-700'
                  : 'bg-blue-500 hover:bg-blue-600'
              }`}>
              {following ? 'Following' : 'Follow'}
            </button>
            <button className="px-5 py-1.5 bg-neutral-800 rounded-lg text-sm font-semibold hover:bg-neutral-700 transition">
              Message
            </button>
            <button className="text-neutral-400 hover:text-white transition">
              <Settings size={20}/>
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mb-4">
            <div className="text-center">
              <span className="font-bold">{currentUser.posts}</span>
              <p className="text-sm text-neutral-400">posts</p>
            </div>
            <div className="text-center cursor-pointer hover:opacity-70">
              <span className="font-bold">{currentUser.followers.toLocaleString()}</span>
              <p className="text-sm text-neutral-400">followers</p>
            </div>
            <div className="text-center cursor-pointer hover:opacity-70">
              <span className="font-bold">{currentUser.following}</span>
              <p className="text-sm text-neutral-400">following</p>
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="font-semibold text-sm">{currentUser.name}</p>
            <p className="text-sm text-neutral-300 mt-1">{currentUser.bio}</p>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="flex gap-6 px-4 mb-8 overflow-x-auto">
        {['Travel', 'Code', 'Food', 'Music', 'Work'].map(h => (
          <div key={h} className="flex flex-col items-center gap-2 flex-shrink-0">
            <div className="w-16 h-16 rounded-full border-2 border-neutral-700 flex items-center justify-center text-2xl bg-neutral-900 cursor-pointer hover:border-neutral-500 transition">
              {h === 'Travel' ? '✈️' : h === 'Code' ? '💻' : h === 'Food' ? '🍜' : h === 'Music' ? '🎵' : '💼'}
            </div>
            <span className="text-xs text-neutral-400">{h}</span>
          </div>
        ))}
        <div className="flex flex-col items-center gap-2 flex-shrink-0">
          <div className="w-16 h-16 rounded-full border-2 border-dashed border-neutral-700 flex items-center justify-center text-2xl cursor-pointer hover:border-neutral-500 transition">
            +
          </div>
          <span className="text-xs text-neutral-400">New</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-t border-neutral-800">
        <div className="flex justify-center gap-12">
          {tabs.map(({ id, icon: Icon, label }) => (
            <button key={id} onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 py-3 text-xs font-semibold tracking-widest uppercase border-t-2 transition ${
                activeTab === id ? 'border-white text-white' : 'border-transparent text-neutral-500 hover:text-neutral-300'
              }`}>
              <Icon size={14}/>
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-1 mt-1">
        {exploreImages.slice(0, 9).map((img, i) => (
          <div key={i} className="relative overflow-hidden cursor-pointer group" style={{aspectRatio:'1/1'}}>
            <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt=""/>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 flex gap-4 text-white font-bold text-sm">
                <span>❤️ {Math.floor(Math.random() * 3000 + 50)}</span>
                <span>💬 {Math.floor(Math.random() * 100 + 5)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
