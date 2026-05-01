import { useState } from 'react';
import { useAuthStore } from '../../store/auth.store';
import {
  sendMessage,
  sendMessageWithAutoChat, // 🔥 NEW
} from '../../services/tutor.service';
import { trackActivity } from '../../services/activity.service';

export default function InputBox({
  activeChat,
  setMessages,
  setIsThinking,
  refreshChats,
  setActiveChat, // 🔥 NEW PROP (IMPORTANT)
}) {
  const { user } = useAuthStore();

  const [text, setText] = useState('');
  const [sending, setSending] = useState(false);

  const handleSend = async () => {
    if (!text.trim() || sending) return;

    const messageToSend = text;

    setText('');
    setSending(true);

    const userMsg = { role: 'user', content: messageToSend };

    // 🔥 SHOW MESSAGE IMMEDIATELY
    setMessages((prev) => [...prev, userMsg]);
    setIsThinking(true);

    try {
      let res;

      // ================= AUTO CHAT MODE =================
      if (!activeChat) {
        res = await sendMessageWithAutoChat(null, user.id, messageToSend);

        // 🔥 CREATE CHAT OBJECT FOR UI
        const newChat = {
          id: res.chat_id,
          title: `New Chat`, // backend can overwrite later
        };

        setActiveChat?.(newChat); // 🔥 IMPORTANT
      } else {
        // ================= NORMAL FLOW =================
        res = await sendMessage(activeChat.id, user.id, messageToSend);
      }

      await trackActivity(user.id, 'ai');

      // 🔥 UPDATE CHAT MESSAGES
      setMessages(res.messages);

      await refreshChats();
    } catch (err) {
      console.error(err);
    } finally {
      setIsThinking(false);
      setSending(false);
    }
  };

  return (
    <div
      className="
      flex items-center gap-3
      bg-white/80 dark:bg-zinc-800/80
      backdrop-blur-xl
      border border-gray-200 dark:border-white/10
      rounded-2xl px-4 py-3
      shadow-xl
      transition
      focus-within:ring-2 focus-within:ring-blue-500/40
      "
    >
      {/* INPUT */}
      <input
        value={text}
        disabled={sending}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSend();
        }}
        className="
          flex-1 bg-transparent outline-none
          text-sm sm:text-base
          placeholder:text-gray-400 dark:placeholder:text-gray-500
          disabled:opacity-50
        "
        placeholder="Ask anything about DSA..."
      />

      {/* SEND BUTTON (AIRPLANE STYLE 🔥) */}
      <button
        onClick={handleSend}
        disabled={sending}
        className="
          w-10 h-10 flex items-center justify-center
          rounded-full
          bg-blue-500 text-white
          hover:bg-blue-600
          active:scale-95
          transition
          disabled:opacity-40 disabled:cursor-not-allowed
        "
      >
        {sending ? (
          <span className="text-xs animate-pulse">...</span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 rotate-45" // 🔥 airplane feel
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
          </svg>
        )}
      </button>
    </div>
  );
}
