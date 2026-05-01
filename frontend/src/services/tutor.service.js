import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

// ================= CREATE CHAT =================
export const createChat = async (user_id, message) => {
  const res = await axios.post(`${API}/api/tutor/create`, {
    user_id,
    message,
  });
  return res.data;
};

// ================= GET ALL CHATS =================
export const getChats = async (user_id) => {
  const res = await axios.get(`${API}/api/tutor`, {
    params: { user_id },
  });
  return res.data;
};

// ================= GET SINGLE CHAT =================
export const getChatById = async (chat_id) => {
  const res = await axios.get(`${API}/api/tutor/${chat_id}`);
  return res.data;
};

// ================= SEND MESSAGE =================
export const sendMessage = async (chat_id, user_id, message) => {
  const res = await axios.post(`${API}/api/tutor/message`, {
    chat_id,
    user_id,
    message,
  });
  return res.data;
};

// ================= 🔥 AUTO CHAT + SEND =================
// 🚀 THIS IS THE IMPORTANT NEW FEATURE
export const sendMessageWithAutoChat = async (chat_id, user_id, message) => {
  try {
    let finalChatId = chat_id;

    // 🔥 IF NO CHAT → CREATE ONE FIRST
    if (!chat_id) {
      const newChat = await createChat(user_id, message);
      finalChatId = newChat.id;
    }

    // SEND MESSAGE
    const res = await axios.post(`${API}/api/tutor/message`, {
      chat_id: finalChatId,
      user_id,
      message,
    });

    return {
      ...res.data,
      chat_id: finalChatId, // 🔥 IMPORTANT
    };
  } catch (err) {
    console.error('sendMessageWithAutoChat error:', err);
    throw err;
  }
};
