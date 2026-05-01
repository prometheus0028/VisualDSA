/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from 'react';
import Sidebar from './sidebar';
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const chatContainerRef = useRef();

  const name =
    user?.user_metadata?.name || user?.email?.split('@')[0] || 'User';

  const firstName = name.split(' ')[0];

  // ================= LOAD CHAT =================
  const loadChat = async (chatId) => {
    try {
      const chat = await getChatById(chatId);

      setActiveChat(chat);

      // 🔥 REMOVE TITLE MESSAGE COMPLETELY
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

  // ================= DEFAULT NO CHAT =================
  useEffect(() => {
    if (!user) return;

    setActiveChat(null);
    setMessages([]);

    const key = `activeChat_${user.id}`;
    localStorage.removeItem(key);
  }, [user]);

  // ================= SELECT CHAT =================
  const handleSelectChat = async (chat) => {
    const key = `activeChat_${user.id}`;
    localStorage.setItem(key, chat.id);
    await loadChat(chat.id);
    setSidebarOpen(false);
  };

  // ================= AUTO CREATE CHAT =================
  const handleAutoCreateChat = async (firstMessage) => {
    try {
      const chatName = `New Chat ${chats.length + 1}`;

      const newChat = await createChat(user.id, chatName);

      await refreshChats();

      const key = `activeChat_${user.id}`;
      localStorage.setItem(key, newChat.id);

      setActiveChat(newChat);

      // 🔥 FIRST MESSAGE = USER MESSAGE ONLY
      const userMsg = { role: 'user', content: firstMessage };
      setMessages([userMsg]);

      return newChat;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  // ================= INSTANT DELETE RESET =================
  useEffect(() => {
    if (!activeChat) return;

    const exists = chats.some((c) => c.id === activeChat.id);

    if (!exists) {
      setActiveChat(null);
      setMessages([]);

      const key = `activeChat_${user?.id}`;
      localStorage.removeItem(key);
    }
  }, [chats]);

  // ================= AUTO SCROLL =================
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages, isThinking]);

  // ================= MANUAL CREATE =================
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
    <div className="flex min-h-screen h-dvh bg-[#f5f1e8] dark:bg-zinc-900 overflow-hidden">
      {/* SIDEBAR */}
      <div
        className={`
          fixed md:relative z-40
          h-full w-72 max-w-[85vw]
          transition-transform duration-300
          bg-white dark:bg-zinc-900
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <Sidebar
          chats={chats}
          activeChat={activeChat}
          setActiveChat={handleSelectChat}
          openModal={() => setModalOpen(true)}
          refreshChats={refreshChats}
        />
      </div>

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}

      {/* MAIN */}
      <div className="flex-1 flex flex-col relative pt-[90px] sm:pt-[100px]">
        {/* CHAT AREA */}
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto px-3 sm:px-6 py-6"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            {/* EMPTY STATE */}
            {!activeChat && (
              <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                <h2 className="text-lg sm:text-2xl font-semibold mb-6">
                  Hey {firstName}, ready to dive in?
                </h2>

                {/* 🔥 TEXT TO START MESSAGE */}
                <p className="text-sm text-gray-500 mb-4">
                  Type something to start a new chat
                </p>

                <div className="w-full max-w-xl">
                  <InputBox
                    activeChat={activeChat}
                    setMessages={setMessages}
                    setIsThinking={setIsThinking}
                    refreshChats={refreshChats}
                    onAutoCreateChat={handleAutoCreateChat}
                  />
                </div>
              </div>
            )}

            {/* CHAT */}
            {activeChat && <MessageList messages={messages} />}

            {isThinking && activeChat && (
              <div className="text-sm text-gray-500 animate-pulse">
                AI is typing...
              </div>
            )}
          </div>
        </div>

        {/* INPUT */}
        {activeChat && (
          <div className="px-3 sm:px-6 pb-4">
            <div className="max-w-3xl mx-auto">
              <InputBox
                activeChat={activeChat}
                setMessages={setMessages}
                setIsThinking={setIsThinking}
                refreshChats={refreshChats}
                onAutoCreateChat={handleAutoCreateChat}
              />
            </div>
          </div>
        )}
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
