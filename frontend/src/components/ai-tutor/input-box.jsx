import { useState } from 'react';
import { useAuthStore } from '../../store/auth.store';
import { sendMessage } from '../../services/tutor.service';
import { trackActivity } from '../../services/activity.service';

export default function InputBox({
  activeChat,
  setMessages,
  setIsThinking,
  refreshChats,
}) {
  const { user } = useAuthStore();

  const [text, setText] = useState('');
  const [sending, setSending] = useState(false); // 🔥 NEW

  const handleSend = async () => {
    if (!text.trim() || !activeChat || sending) return;

    const messageToSend = text;

    setText('');
    setSending(true); // 🔥 prevent spam clicks

    const userMsg = { role: 'user', content: messageToSend };

    // ✅ instant UI update
    setMessages((prev) => [...prev, userMsg]);

    setIsThinking(true);

    try {
      // ✅ AI ONLY CALLED HERE (correct behavior)
      const res = await sendMessage(activeChat.id, user.id, messageToSend);

      await trackActivity(user.id, 'ai');

      // ✅ replace messages with backend result
      setMessages(res.messages);

      // ✅ refresh sidebar
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
      bg-white dark:bg-zinc-800
      border dark:border-white/10
      rounded-2xl px-4 py-3
      shadow-lg
      "
    >
      <input
        value={text}
        disabled={sending} // 🔥 disable while sending
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSend();
        }}
        className="flex-1 bg-transparent outline-none text-sm disabled:opacity-50"
        placeholder={
          activeChat
            ? 'Ask anything about DSA...'
            : 'Select or create a chat first'
        }
      />

      <button
        onClick={handleSend}
        disabled={sending || !activeChat}
        className="
        px-5 py-2 bg-blue-500 text-white rounded-xl
        hover:bg-blue-600 transition
        disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        {sending ? 'Sending...' : 'Send'}
      </button>
    </div>
  );
}
