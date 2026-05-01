/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState, useRef } from 'react';
import Sidebar from './sidebar';
import MessageBubble from './message-bubble';
import InputBox from './input-box';
import ChatModal from './chat-modal';
import MessageList from './message-list';

import { createChat, getChatById } from '../../services/tutor.service';
import { useAuthStore } from '../../store/auth.store';

export default function ChatLayout({ chats, refreshChats }) {
  const { user } = useAuthStore();

  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isThinking, setIsThinking] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false); // 🔥 MAIN CONTROL

  const chatContainerRef = useRef();

  const name =
    user?.user_metadata?.name || user?.email?.split('@')[0] || 'User';

  const firstName = name.split(' ')[0];

  // ================= LOAD CHAT =================
  const loadChat = async (chatId) => {
    try {
      const chat = await getChatById(chatId);

      setActiveChat(chat);

      const cleanMessages = (chat.messages || []).filter(
        (m) => m.content !== chat.title,
      );

      setMessages(cleanMessages);

      setTimeout(() => {
        chatContainerRef.current?.scrollTo({
          top: chatContainerRef.current.scrollHeight,
          behavior: 'smooth',
        });
      }, 50);
    } catch (err) {
      console.error(err);
      setActiveChat(null);
      setMessages([]);
    }
  };

  // ================= RESTORE CHAT =================
  useEffect(() => {
    if (!user) return;

    const key = `activeChat_${user.id}`;
    const saved = localStorage.getItem(key);

    if (saved) loadChat(saved);
    else {
      setActiveChat(null);
      setMessages([]);
    }
  }, [user]);

  // ================= SELECT CHAT =================
  const handleSelectChat = async (chat) => {
    const key = `activeChat_${user.id}`;
    localStorage.setItem(key, chat.id);

    await loadChat(chat.id);
    setSidebarOpen(false); // 🔥 CLOSE ON MOBILE
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
    setMessages([]);
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-dvh bg-[#f5f1e8] dark:bg-zinc-900 overflow-hidden">
      {/* ================= SIDEBAR ================= */}
      <div
        className={`
          fixed md:relative z-40
          h-full w-72 max-w-[85vw]
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <Sidebar
          chats={chats}
          activeChat={activeChat}
          setActiveChat={handleSelectChat}
          openModal={() => setModalOpen(true)}
          refreshChats={refreshChats}
          onCloseSidebar={() => setSidebarOpen(false)} // 🔥 NEW
        />
      </div>

      {/* 🔥 OVERLAY (MOBILE) */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}

      {/* ================= MAIN ================= */}
      <div className="flex-1 flex flex-col relative">
        {/* ================= TOP BAR ================= */}
        <div
          className="
            fixed top-[70px] sm:top-[80px] left-0 right-0 z-30
            md:static md:top-0
            flex items-center justify-between
            px-4 py-3
            bg-white/70 dark:bg-zinc-900/70
            backdrop-blur-xl
            border-b border-gray-200 dark:border-white/10
          "
        >
          {/* LEFT */}
          <div className="flex items-center gap-3">
            {/* 🔥 HAMBURGER (MOBILE + DESKTOP) */}
            <button
              onClick={() => setSidebarOpen((prev) => !prev)}
              className="
                w-9 h-9 flex items-center justify-center
                rounded-lg
                bg-gray-200 dark:bg-white/10
                hover:scale-105 transition
              "
            >
              ☰
            </button>

            {/* TITLE */}
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              {activeChat?.title || 'AI Tutor'}
            </span>
          </div>

          {/* RIGHT */}
          <div className="text-xs text-gray-400">
            {activeChat ? 'Active Chat' : 'No Chat Selected'}
          </div>
        </div>

        {/* ================= CHAT AREA ================= */}
        <div
          ref={chatContainerRef}
          className="
            flex-1 overflow-y-auto
            px-3 sm:px-6 py-6
            pt-[130px] md:pt-6
          "
        >
          <div className="max-w-3xl mx-auto space-y-6">
            {/* EMPTY STATE */}
            {!activeChat && (
              <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                <h2 className="text-lg sm:text-2xl font-semibold mb-6">
                  Hey {firstName}, ready to dive in?
                </h2>

                <div className="w-full max-w-xl">
                  <InputBox
                    activeChat={activeChat}
                    setMessages={setMessages}
                    setIsThinking={setIsThinking}
                    refreshChats={refreshChats}
                  />
                </div>
              </div>
            )}

            {/* CHAT */}
            {activeChat && <MessageList messages={messages} />}

            {/* THINKING */}
            {isThinking && activeChat && (
              <div className="text-sm text-gray-500 animate-pulse">
                AI is typing...
              </div>
            )}
          </div>
        </div>

        {/* ================= INPUT ================= */}
        {activeChat && (
          <div className="px-3 sm:px-6 pb-4">
            <div className="max-w-3xl mx-auto">
              <InputBox
                activeChat={activeChat}
                setMessages={setMessages}
                setIsThinking={setIsThinking}
                refreshChats={refreshChats}
              />
            </div>
          </div>
        )}
      </div>

      {/* ================= MODAL ================= */}
      <ChatModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onCreate={handleCreateChat}
        defaultName={`New Chat ${chats.length + 1}`}
      />
    </div>
  );
}
