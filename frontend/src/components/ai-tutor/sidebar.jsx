import { useNavigate } from 'react-router-dom';

export default function ChatSidebar({
  chats,
  activeChat,
  setActiveChat,
  openModal,
  refreshChats,
}) {
  const navigate = useNavigate();

  const deleteChatAPI = async (chatId) => {
    const API = import.meta.env.VITE_API_URL; // ✅ added

    const res = await fetch(`${API}/api/tutor/chat/${chatId}`, {
      // ✅ fixed
      method: 'DELETE',
    });

    if (!res.ok) {
      throw new Error('Delete failed');
    }

    return res.json();
  };

  const handleDelete = async (e, chatId) => {
    e.stopPropagation();

    const confirmDelete = window.confirm('Delete this chat permanently?');
    if (!confirmDelete) return;

    try {
      console.log('Deleting chat:', chatId); // 🔥 DEBUG

      await deleteChatAPI(chatId);

      if (activeChat?.id === chatId) {
        setActiveChat(null);

        if (activeChat?.user_id) {
          localStorage.removeItem(`activeChat_${activeChat.user_id}`);
        }
      }

      await refreshChats();
    } catch (err) {
      console.error('❌ Delete chat failed:', err);
      alert('Failed to delete chat');
    }
  };

  return (
    <div className="w-72 h-full bg-white dark:bg-zinc-900 border-r dark:border-white/10 flex flex-col">
      <div className="p-5 border-b dark:border-white/10">
        <div className="p-5 border-b dark:border-white/10 display-flex">
          <button
            onClick={() => navigate('/get-started')}
            className="px-4 py-1.5 rounded-full bg-blue-400 text-white dark:bg-blue-500 dark:text-black text-xs font-semibold hover:scale-105 transition"
          >
            ←
          </button>

          <h2 className="text-2xl font-bold text-green-500 tracking-tight">
            AI Tutor
          </h2>
        </div>

        {/* NEW CHAT */}
        <div className="p-5 border-b dark:border-white/10">
          <button
            onClick={openModal}
            className="w-full bg-blue-500 text-white py-2.5 rounded-xl hover:bg-blue-600 transition"
          >
            + New Chat
          </button>
        </div>

        {/* CHAT LIST */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setActiveChat(chat)}
              className={`
              relative p-3 rounded-xl cursor-pointer text-sm
              border transition group
              ${
                activeChat?.id === chat.id
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-gray-100 dark:bg-white/5 border-transparent hover:bg-gray-200 dark:hover:bg-white/10'
              }
            `}
            >
              {chat.title || 'New Chat'}

              {/* 🔥 SVG DELETE ICON */}
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
    </div>
  );
}
