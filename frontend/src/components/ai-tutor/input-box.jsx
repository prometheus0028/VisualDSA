import { useState } from 'react';
import { useAuthStore } from '../../store/auth.store';
import { sendMessage } from '../../services/tutor.service';
import { trackActivity } from '../../services/activity.service';

export default function InputBox({
  activeChat,
  setMessages,
  setIsThinking,
  refreshChats,
  onAutoCreateChat, // 🔥 NEW
}) {
  const { user } = useAuthStore();

  const [text, setText] = useState('');
  const [sending, setSending] = useState(false);

  const handleSend = async () => {
    if (!text.trim() || sending) return;

    const messageToSend = text;
    setText('');
    setSending(true);

    let chat = activeChat;

    try {
      // 🔥 AUTO CREATE CHAT IF NONE
      if (!chat && onAutoCreateChat) {
        chat = await onAutoCreateChat(messageToSend);
      }

      if (!chat) return;

      const userMsg = { role: 'user', content: messageToSend };
      setMessages((prev) => [...prev, userMsg]);

      setIsThinking(true);

      const res = await sendMessage(chat.id, user.id, messageToSend);

      await trackActivity(user.id, 'ai');

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

      {/* ✈️ FIXED HORIZONTAL SEND BUTTON */}
      <button
        onClick={handleSend}
        disabled={sending}
        className="
          w-10 h-10 flex items-center justify-center
          rounded-full
          bg-grey-600 text-black
          hover:bg-grey-800 dark:text-white
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
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            {/* ✈️ cleaner horizontal airplane */}
            <g transform="rotate(180 12 12)">
              <path d="M2 12l19-9-5 9 5 9-19-9zm3 0h11" />
            </g>
          </svg>
        )}
      </button>
    </div>
  );
}
