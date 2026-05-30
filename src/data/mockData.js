export const currentUser = {
  id: 1,
  username: "utk4rsh.mean",
  name: "Utkarsh Sachan",
  avatar: "https://i.pravatar.cc/150?img=11",
  bio: "Building things that matter. 🚀",
  followers: 1243,
  following: 312,
  posts: 48,
};

export const stories = [
  { id: 1, username: "alex.dev", avatar: "https://i.pravatar.cc/150?img=1", seen: false },
  { id: 2, username: "sarah.ui", avatar: "https://i.pravatar.cc/150?img=5", seen: false },
  { id: 3, username: "mike.xyz", avatar: "https://i.pravatar.cc/150?img=8", seen: true },
  { id: 4, username: "priya_k", avatar: "https://i.pravatar.cc/150?img=9", seen: false },
  { id: 5, username: "john.doe", avatar: "https://i.pravatar.cc/150?img=12", seen: true },
  { id: 6, username: "emma.js", avatar: "https://i.pravatar.cc/150?img=20", seen: false },
  { id: 7, username: "raj.codes", avatar: "https://i.pravatar.cc/150?img=15", seen: false },
];

export const posts = [
  {
    id: 1,
    user: { username: "alex.dev", avatar: "https://i.pravatar.cc/150?img=1", verified: true },
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
    caption: "Mountain vibes 🏔️ Nothing beats this view after a long hike.",
    likes: 1423,
    comments: 38,
    time: "2h",
    liked: false,
    saved: false,
  },
  {
    id: 2,
    user: { username: "sarah.ui", avatar: "https://i.pravatar.cc/150?img=5", verified: false },
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600",
    caption: "Late night coding sessions hit different ☕💻",
    likes: 892,
    comments: 21,
    time: "4h",
    liked: true,
    saved: false,
  },
  {
    id: 3,
    user: { username: "priya_k", avatar: "https://i.pravatar.cc/150?img=9", verified: false },
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600",
    caption: "Tokyo streets never sleep 🗾✨",
    likes: 3201,
    comments: 74,
    time: "6h",
    liked: false,
    saved: true,
  },
  {
    id: 4,
    user: { username: "mike.xyz", avatar: "https://i.pravatar.cc/150?img=8", verified: true },
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    caption: "New workspace setup 🖥️ Finally got the dual monitor working.",
    likes: 567,
    comments: 15,
    time: "8h",
    liked: false,
    saved: false,
  },
  {
    id: 5,
    user: { username: "emma.js", avatar: "https://i.pravatar.cc/150?img=20", verified: false },
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600",
    caption: "Sunset in Santorini 🌅 Dream destination achieved.",
    likes: 4892,
    comments: 103,
    time: "12h",
    liked: true,
    saved: true,
  },
];

export const suggestedUsers = [
  { id: 1, username: "raj.codes", name: "Raj Kumar", avatar: "https://i.pravatar.cc/150?img=15", mutualFollowers: 3 },
  { id: 2, username: "nina.design", name: "Nina Patel", avatar: "https://i.pravatar.cc/150?img=25", mutualFollowers: 1 },
  { id: 3, username: "tom.react", name: "Tom Wilson", avatar: "https://i.pravatar.cc/150?img=30", mutualFollowers: 5 },
  { id: 4, username: "zara.photo", name: "Zara Ahmed", avatar: "https://i.pravatar.cc/150?img=35", mutualFollowers: 2 },
  { id: 5, username: "dev.monk", name: "Dev Monk", avatar: "https://i.pravatar.cc/150?img=40", mutualFollowers: 4 },
];

export const exploreImages = [
  "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400",
  "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400",
  "https://images.unsplash.com/photo-1682687221038-404670f09ef1?w=400",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400",
  "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?w=400",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400",
];

export const notifications = [
  { id: 1, user: { username: "alex.dev", avatar: "https://i.pravatar.cc/150?img=1" }, type: "like", text: "liked your photo", time: "2m", postImg: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100" },
  { id: 2, user: { username: "sarah.ui", avatar: "https://i.pravatar.cc/150?img=5" }, type: "follow", text: "started following you", time: "15m" },
  { id: 3, user: { username: "priya_k", avatar: "https://i.pravatar.cc/150?img=9" }, type: "comment", text: 'commented: "Amazing shot! 🔥"', time: "1h", postImg: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=100" },
  { id: 4, user: { username: "mike.xyz", avatar: "https://i.pravatar.cc/150?img=8" }, type: "like", text: "liked your photo", time: "2h", postImg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100" },
  { id: 5, user: { username: "raj.codes", avatar: "https://i.pravatar.cc/150?img=15" }, type: "follow", text: "started following you", time: "3h" },
];

export const messages = [
  { id: 1, user: { username: "alex.dev", avatar: "https://i.pravatar.cc/150?img=1" }, lastMsg: "That photo was 🔥", time: "2m", unread: 2 },
  { id: 2, user: { username: "sarah.ui", avatar: "https://i.pravatar.cc/150?img=5" }, lastMsg: "Can we collab?", time: "1h", unread: 0 },
  { id: 3, user: { username: "priya_k", avatar: "https://i.pravatar.cc/150?img=9" }, lastMsg: "Sent a photo", time: "3h", unread: 1 },
  { id: 4, user: { username: "mike.xyz", avatar: "https://i.pravatar.cc/150?img=8" }, lastMsg: "👍", time: "1d", unread: 0 },
];
