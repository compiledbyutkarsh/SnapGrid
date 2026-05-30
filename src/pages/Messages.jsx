import { useState } from 'react';
import { messages } from '../data/mockData';
import { Edit, Phone, Video, Info, Send, Image, Heart, Smile } from 'lucide-react';

const demoChat = [
  { id: 1, from: 'them', text: 'Hey! That last photo was amazing 🔥', time: '2:30 PM' },
  { id: 2, from: 'me', text: 'Thanks! Shot it last weekend in the mountains', time: '2:31 PM' },
  { id: 3, from: 'them', text: 'Which camera do you use?', time: '2:31 PM' },
  { id: 4, from: 'me', text: 'Sony A7III with a 24-70mm lens', time: '2:32 PM' },
  { id: 5, from: 'them', text: 'No wonder it looks so good! Can we collab sometime?', time: '2:33 PM' },
];

export default function Messages() {
  const [selected, setSelected] = useState(messages[0]);
  const [text, setText] = useState('');
  const [chat, setChat] = useState(demoChat);

  const send = () => {
    if (!text.trim()) return;
    setChat([...chat, { id: Date.now(), from: 'me', text, time: 'now' }]);
    setText('');
  };

  return (
    <div className="flex h-screen max-w-5xl mx-auto border-x border-neutral-800">
      {/* Left — conversations */}
      <div className="w-80 border-r border-neutral-800 flex flex-col">
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-800">
          <span className="font-bold text-base">Messages</span>
          <button className="hover:text-neutral-400 transition"><Edit size={20}/></button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {messages.map(m => (
            <div key={m.id} onClick={() => setSelected(m)}
              className={`flex items-center gap-3 px-5 py-3 cursor-pointer hover:bg-neutral-900 transition ${selected?.id === m.id ? 'bg-neutral-900' : ''}`}>
              <div className="relative flex-shrink-0">
                <img src={m.user.avatar} className="w-12 h-12 rounded-full object-cover" alt=""/>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black"/>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold truncate">{m.user.username}</p>
                  <span className="text-xs text-neutral-500 flex-shrink-0">{m.time}</span>
                </div>
                <p className={`text-xs truncate ${m.unread ? 'text-white font-semibold' : 'text-neutral-500'}`}>
                  {m.lastMsg}
                </p>
              </div>
              {m.unread > 0 && (
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold">{m.unread}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right — chat */}
      {selected && (
        <div className="flex-1 flex flex-col">
          {/* Chat header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
            <div className="flex items-center gap-3">
              <img src={selected.user.avatar} className="w-9 h-9 rounded-full object-cover" alt=""/>
              <div>
                <p className="text-sm font-semibold">{selected.user.username}</p>
                <p className="text-xs text-green-500">Active now</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-neutral-400">
              <button className="hover:text-white transition"><Phone size={20}/></button>
              <button className="hover:text-white transition"><Video size={20}/></button>
              <button className="hover:text-white transition"><Info size={20}/></button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
            {chat.map(msg => (
              <div key={msg.id} className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}>
                {msg.from === 'them' && (
                  <img src={selected.user.avatar} className="w-7 h-7 rounded-full object-cover mr-2 flex-shrink-0 self-end" alt=""/>
                )}
                <div className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                  msg.from === 'me'
                    ? 'bg-blue-500 text-white rounded-br-sm'
                    : 'bg-neutral-800 text-white rounded-bl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="px-6 py-4 border-t border-neutral-800 flex items-center gap-3">
            <button className="text-neutral-400 hover:text-white transition"><Image size={22}/></button>
            <button className="text-neutral-400 hover:text-white transition"><Heart size={22}/></button>
            <div className="flex-1 flex items-center gap-2 bg-neutral-900 rounded-full px-4 py-2 border border-neutral-700">
              <input value={text} onChange={e => setText(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
                placeholder="Message..."
                className="flex-1 bg-transparent text-sm outline-none placeholder-neutral-500"/>
              <button className="text-neutral-400 hover:text-white transition"><Smile size={18}/></button>
            </div>
            <button onClick={send} disabled={!text.trim()}
              className="text-blue-400 hover:text-blue-300 disabled:opacity-30 transition">
              <Send size={22}/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
