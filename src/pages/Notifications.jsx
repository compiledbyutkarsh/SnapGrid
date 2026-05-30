import { useState } from 'react';
import { notifications, suggestedUsers } from '../data/mockData';

export default function Notifications() {
  const [followed, setFollowed] = useState({});

  return (
    <div className="max-w-lg mx-auto pt-8 px-4">
      <h2 className="text-lg font-bold mb-6">Notifications</h2>

      <div className="mb-6">
        <p className="text-sm font-semibold text-neutral-400 mb-3">Today</p>
        <div className="space-y-4">
          {notifications.map(n => (
            <div key={n.id} className="flex items-center gap-3">
              <img src={n.user.avatar} className="w-10 h-10 rounded-full object-cover flex-shrink-0" alt=""/>
              <p className="text-sm flex-1">
                <span className="font-semibold">{n.user.username}</span>
                {' '}{n.text}
                {' '}<span className="text-neutral-500">{n.time}</span>
              </p>
              {n.postImg
                ? <img src={n.postImg} className="w-10 h-10 object-cover flex-shrink-0" alt=""/>
                : <button
                    onClick={() => setFollowed(f => ({...f, [n.id]: !f[n.id]}))}
                    className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition flex-shrink-0 ${
                      followed[n.id] ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-blue-500 hover:bg-blue-600'
                    }`}>
                    {followed[n.id] ? 'Following' : 'Follow'}
                  </button>
              }
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-neutral-400 mb-3">Suggested for you</p>
        <div className="space-y-4">
          {suggestedUsers.map(u => (
            <div key={u.id} className="flex items-center gap-3">
              <img src={u.avatar} className="w-10 h-10 rounded-full object-cover" alt=""/>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold">{u.username}</p>
                <p className="text-xs text-neutral-500 truncate">Suggested for you</p>
              </div>
              <button
                onClick={() => setFollowed(f => ({...f, [`s${u.id}`]: !f[`s${u.id}`]}))}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition flex-shrink-0 ${
                  followed[`s${u.id}`] ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-blue-500 hover:bg-blue-600'
                }`}>
                {followed[`s${u.id}`] ? 'Following' : 'Follow'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
