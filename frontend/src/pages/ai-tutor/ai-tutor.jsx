/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useAuthStore } from '../../store/auth.store';
import { getChats } from '../../services/tutor.service';

import ChatLayout from '../../components/ai-tutor/chat-layout';
import DeviceRestrictionModal from '../../components/modals/device-restriction-modal';

export default function AITutor() {
  const { user } = useAuthStore();
  const [chats, setChats] = useState([]);

  // 🔥 NEW: device restriction
  const [showModal, setShowModal] = useState(false);

  // ✅ scroll fix
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🔥 DEVICE CHECK (same as practice)
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setShowModal(true);
    }
  }, []);

  // 🔥 reload on user change
  useEffect(() => {
    if (!user) {
      setChats([]);
      return;
    }

    setChats([]);
    loadChats();
  }, [user]);

  const loadChats = async () => {
    try {
      const data = await getChats(user.id);
      setChats(data || []);
    } catch (err) {
      console.error('Chat load error:', err);
      setChats([]);
    }
  };

  return (
    <div
      className="
        bg-[#f5f1e8] dark:bg-zinc-900
        min-h-screen
        text-black dark:text-white
        overflow-x-hidden
      "
    >
      {/* 🔥 Wrapper for responsive safety */}
      <div className="w-full max-w-full overflow-hidden">
        <ChatLayout chats={chats} refreshChats={loadChats} />
      </div>

      {/* 🔥 NEW: DESKTOP ONLY MODAL */}
      <DeviceRestrictionModal
        open={showModal}
        onClose={() => setShowModal(false)}
        message="AI Tutor is optimized for desktop devices to provide a full interactive experience, including multi-panel chat, code feedback, and analysis tools. Please switch to a laptop or desktop to continue."
      />
    </div>
  );
}
