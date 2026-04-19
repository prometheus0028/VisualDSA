/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useAuthStore } from '../../store/auth.store';
import { getChats } from '../../services/tutor.service';

import ChatLayout from '../../components/ai-tutor/chat-layout';

export default function AITutor() {
  const { user } = useAuthStore();
  const [chats, setChats] = useState([]);

  // ✅ scroll fix
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🔥 FIX: reset + reload on user change
  useEffect(() => {
    if (!user) {
      setChats([]); // clear on logout
      return;
    }

    setChats([]); // 🔥 CLEAR OLD USER DATA IMMEDIATELY
    loadChats();
  }, [user]);

  const loadChats = async () => {
    try {
      const data = await getChats(user.id);
      setChats(data || []);
    } catch (err) {
      console.error('Chat load error:', err);
      setChats([]); // 🔥 avoid stale UI
    }
  };

  return (
    <div className="bg-[#f5f1e8] dark:bg-zinc-900 min-h-screen text-black dark:text-white">
      <ChatLayout chats={chats} refreshChats={loadChats} />
    </div>
  );
}
