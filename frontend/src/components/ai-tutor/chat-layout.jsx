/* eslint-disable react-hooks/immutability */
import { useEffect, useState, useRef } from 'react';
import Sidebar from './sidebar';
import MessageBubble from './message-bubble';
import InputBox from './input-box';
import ChatModal from './chat-modal';

import { createChat, getChatById } from '../../services/tutor.service';
import { useAuthStore } from '../../store/auth.store';

export default function ChatLayout({ chats, refreshChats }) {
  const { user } = useAuthStore();

  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isThinking, setIsThinking] = useState(false);

  const chatContainerRef = useRef();

  // ================= 🔥 RESTORE CHAT PER USER =================
  useEffect(() => {
    if (!user) return;

    const key = `activeChat_${user.id}`;
    const saved = localStorage.getItem(key);

    if (saved) {
      loadChat(saved);
    } else {
      setActiveChat(null);
      setMessages([]);
    }
  }, [user]);

  // ================= LOAD CHAT =================
  const loadChat = async (chatId) => {
    try {
      const chat = await getChatById(chatId);

      setActiveChat(chat);
      setMessages(chat.messages || []);

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 0);
    } catch (err) {
      console.error('Load chat error:', err);

      // 🔥 fallback if chat invalid
      setActiveChat(null);
      setMessages([]);
    }
  };

  // ================= SELECT CHAT =================
  const handleSelectChat = async (chat) => {
    const key = `activeChat_${user.id}`;

    localStorage.setItem(key, chat.id);

    await loadChat(chat.id);
  };

  // ================= AUTO SCROLL =================
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages, isThinking]);

  // ================= CREATE CHAT =================
  const handleCreateChat = async (name) => {
    setModalOpen(false);

    const newChat = await createChat(user.id, name);

    await refreshChats();

    const key = `activeChat_${user.id}`;

    localStorage.setItem(key, newChat.id);

    setActiveChat(newChat);
    setMessages(newChat.messages || []);
  };

  return (
    <div className="flex h-screen bg-[#f5f1e8] dark:bg-zinc-900">
      <Sidebar
        chats={chats}
        activeChat={activeChat}
        setActiveChat={handleSelectChat}
        openModal={() => setModalOpen(true)}
        refreshChats={refreshChats}
      />

      <div className="flex-1 flex flex-col pt-20 items-center">
        <div
          ref={chatContainerRef}
          className="flex-1 w-full overflow-y-auto px-4"
        >
          <div className="max-w-3xl mx-auto pt-10 pb-16 space-y-6">
            {/* ================= EMPTY STATE ================= */}
            {!activeChat && (
              <div className="flex items-center justify-center h-[60vh] text-gray-500 text-center">
                <div>
                  <p className="text-lg font-semibold">No chat selected 💬</p>
                  <p className="text-sm mt-2">
                    Start a new chat or select one from the sidebar
                  </p>
                </div>
              </div>
            )}

            {/* ================= CHAT ================= */}
            {activeChat &&
              messages.map((msg, i) => <MessageBubble key={i} message={msg} />)}

            {isThinking && activeChat && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-white/10 border px-4 py-2 rounded-2xl text-sm">
                  <span className="animate-pulse">...</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ================= INPUT ================= */}
        <div className="w-full px-4 pb-4 flex justify-center">
          <div className="w-full max-w-3xl">
            <InputBox
              activeChat={activeChat}
              setMessages={setMessages}
              setIsThinking={setIsThinking}
              refreshChats={refreshChats}
            />
          </div>
        </div>
      </div>

      <ChatModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onCreate={handleCreateChat}
        defaultName={`New Chat ${chats.length + 1}`}
      />
    </div>
  );
}
