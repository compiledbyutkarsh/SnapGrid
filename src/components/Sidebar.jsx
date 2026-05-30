import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Compass, Film, MessageCircle, Heart, PlusSquare, Menu } from 'lucide-react';
import { currentUser } from '../data/mockData';

export default function Sidebar() {
  const location = useLocation();

  const links = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/search', icon: Search, label: 'Search' },
    { to: '/explore', icon: Compass, label: 'Explore' },
    { to: '/reels', icon: Film, label: 'Reels' },
    { to: '/messages', icon: MessageCircle, label: 'Messages' },
    { to: '/notifications', icon: Heart, label: 'Notifications' },
    { to: '/create', icon: PlusSquare, label: 'Create' },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 border-r border-neutral-800 flex flex-col px-3 py-6 bg-black z-50 xl:w-64 lg:w-20">
      {/* Logo */}
      <div className="px-3 mb-8">
        <h1 className="text-xl font-bold hidden lg:block xl:block">SnapGrid</h1>
        <div className="lg:hidden xl:hidden text-2xl">📸</div>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1">
        {links.map(({ to, icon: Icon, label }) => {
          const active = location.pathname === to;
          return (
            <Link key={to} to={to}
              className={`flex items-center gap-4 px-3 py-3 rounded-xl transition-all hover:bg-neutral-900 ${active ? 'font-bold' : 'font-normal'}`}>
              <Icon size={24} strokeWidth={active ? 2.5 : 1.5} />
              <span className="hidden xl:block text-sm">{label}</span>
            </Link>
          );
        })}

        {/* Profile */}
        <Link to="/profile"
          className={`flex items-center gap-4 px-3 py-3 rounded-xl transition-all hover:bg-neutral-900 ${location.pathname === '/profile' ? 'font-bold' : ''}`}>
          <img src={currentUser.avatar} className="w-6 h-6 rounded-full object-cover" alt=""/>
          <span className="hidden xl:block text-sm">Profile</span>
        </Link>
      </nav>

      {/* More */}
      <button className="flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-neutral-900 transition-all">
        <Menu size={24} strokeWidth={1.5} />
        <span className="hidden xl:block text-sm">More</span>
      </button>
    </div>
  );
}
