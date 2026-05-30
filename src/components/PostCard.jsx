import { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, BadgeCheck } from 'lucide-react';

export default function PostCard({ post }) {
  const [liked, setLiked] = useState(post.liked);
  const [saved, setSaved] = useState(post.saved);
  const [likes, setLikes] = useState(post.likes);
  const [showHeart, setShowHeart] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleDoubleClick = () => {
    if (!liked) {
      setLiked(true);
      setLikes(likes + 1);
    }
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 1000);
  };

  return (
    <div className="border-b border-neutral-800 pb-4 mb-2">
      {/* Header */}
      <div className="flex items-center justify-between px-1 py-3">
        <div className="flex items-center gap-3">
          <div className="p-0.5 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
            <div className="p-0.5 bg-black rounded-full">
              <img src={post.user.avatar} className="w-8 h-8 rounded-full object-cover" alt=""/>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold">{post.user.username}</span>
              {post.user.verified && <BadgeCheck size={14} className="text-blue-500 fill-blue-500"/>}
            </div>
            <span className="text-xs text-neutral-500">{post.time} ago</span>
          </div>
        </div>
        <button className="text-neutral-400 hover:text-white transition">
          <MoreHorizontal size={20}/>
        </button>
      </div>

      {/* Image */}
      <div className="relative cursor-pointer select-none" onDoubleClick={handleDoubleClick}>
        <img src={post.image} className="w-full object-cover rounded-sm max-h-[500px]" alt="post"/>
        {showHeart && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Heart size={80} className="text-white fill-white animate-ping" style={{animationDuration:'0.6s', animationIterationCount:1}}/>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between px-1 pt-3">
        <div className="flex items-center gap-4">
          <button onClick={handleLike} className="transition active:scale-90">
            <Heart size={24} strokeWidth={1.5}
              className={liked ? 'text-red-500 fill-red-500' : 'hover:text-neutral-400'}/>
          </button>
          <button className="hover:text-neutral-400 transition">
            <MessageCircle size={24} strokeWidth={1.5}/>
          </button>
          <button className="hover:text-neutral-400 transition">
            <Send size={24} strokeWidth={1.5}/>
          </button>
        </div>
        <button onClick={() => setSaved(!saved)} className="transition active:scale-90">
          <Bookmark size={24} strokeWidth={1.5}
            className={saved ? 'fill-white' : 'hover:text-neutral-400'}/>
        </button>
      </div>

      {/* Likes */}
      <div className="px-1 pt-2">
        <p className="text-sm font-semibold">{likes.toLocaleString()} likes</p>
      </div>

      {/* Caption */}
      <div className="px-1 pt-1">
        <p className="text-sm">
          <span className="font-semibold mr-2">{post.user.username}</span>
          {post.caption}
        </p>
      </div>

      {/* Comments */}
      <div className="px-1 pt-1">
        <button className="text-sm text-neutral-500 hover:text-neutral-300">
          View all {post.comments} comments
        </button>
      </div>

      {/* Add comment */}
      <div className="px-1 pt-2 flex items-center gap-3">
        <img src="https://i.pravatar.cc/150?img=11" className="w-6 h-6 rounded-full object-cover" alt=""/>
        <input type="text" placeholder="Add a comment..."
          className="flex-1 bg-transparent text-sm text-neutral-400 outline-none placeholder-neutral-600"/>
        <button className="text-sm text-blue-400 font-semibold opacity-50">Post</button>
      </div>
    </div>
  );
}
