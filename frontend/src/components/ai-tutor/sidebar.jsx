import { useNavigate } from 'react-router-dom';

export default function ChatSidebar({
  chats,
  activeChat,
  setActiveChat,
  openModal,
  refreshChats,
  onCloseSidebar, // 🔥 NEW (for mobile close)
}) {
  const navigate = useNavigate();

  const deleteChatAPI = async (chatId) => {
    const API = import.meta.env.VITE_API_URL;

    const res = await fetch(`${API}/api/tutor/chat/${chatId}`, {
      method: 'DELETE',
    });

    if (!res.ok) throw new Error('Delete failed');

    return res.json();
  };

  const handleDelete = async (e, chatId) => {
    e.stopPropagation();

    if (!window.confirm('Delete this chat permanently?')) return;

    try {
      await deleteChatAPI(chatId);

      if (activeChat?.id === chatId) {
        setActiveChat(null);

        if (activeChat?.user_id) {
          localStorage.removeItem(`activeChat_${activeChat.user_id}`);
        }
      }

      await refreshChats();
    } catch (err) {
      console.error(err);
      alert('Failed to delete chat');
    }
  };

  return (
    <div className="w-72 max-w-[85vw] h-full flex flex-col bg-white dark:bg-zinc-900 border-r dark:border-white/10">
      {/* 🔥 MOBILE HEADER (NEW) */}
      <div className="md:hidden flex items-center justify-between px-4 pt-4 pb-2">
        <button
          onClick={onCloseSidebar}
          className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-white/10"
        >
          ✕
        </button>
        <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
          Chats
        </span>
        <div className="w-8" /> {/* spacer */}
      </div>

      {/* ================= TOP SECTION ================= */}
      <div className="px-4 pt-2 pb-3 flex flex-col gap-3">
        <button
          onClick={() => navigate('/get-started')}
          className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-white/10 hover:scale-105 transition"
        >
          ←
        </button>

        <h2 className="text-2xl font-bold text-green-500 tracking-tight">
          AI Tutor
        </h2>
      </div>

      <div className="border-t dark:border-white/10 mx-4" />

      {/* NEW CHAT */}
      <div className="p-4">
        <button
          onClick={openModal}
          className="
            w-full flex items-center justify-center gap-2
            px-4 py-3
            rounded-2xl
            bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500
            text-white text-sm font-semibold
            shadow-lg shadow-blue-500/20
            hover:scale-[1.02] active:scale-[0.98]
            transition-all duration-200
          "
        >
          <span className="text-lg">＋</span>
          New Chat
        </button>
      </div>

      {/* CHAT LIST */}
      <div className="flex-1 overflow-y-auto px-3 pb-4 space-y-2">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => {
              setActiveChat(chat);
              onCloseSidebar?.(); // 🔥 close on mobile click
            }}
            className={`
              relative px-3 py-2.5 rounded-lg cursor-pointer text-sm
              transition group
              ${
                activeChat?.id === chat.id
                  ? 'bg-blue-500 dark:bg-blue-700 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10'
              }
            `}
          >
            <p className="truncate">{chat.title || 'New Chat'}</p>

            <button
              onClick={(e) => handleDelete(e, chat.id)}
              className="
                absolute right-2 top-2
                opacity-0 group-hover:opacity-100
                transition text-red-500 hover:scale-110
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 7h12M9 7V4h6v3m-7 4v6m4-6v6m5-10l-1 14H7L6 7h12z"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
