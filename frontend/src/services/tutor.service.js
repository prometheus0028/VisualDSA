import axios from 'axios';

const API = import.meta.env.VITE_API_URL;
fetch(`${API}/api/tutor`);

export const createChat = async (user_id, message) => {
  const res = await axios.post(`${API}/api/tutor/create`, { user_id, message });
  return res.data;
};

export const getChats = async (user_id) => {
  const res = await axios.get(`${API}/api/tutor`, {
    params: { user_id },
  });
  return res.data;
};

export const getChatById = async (chat_id) => {
  const res = await axios.get(`${API}/api/tutor/${chat_id}`);
  return res.data;
};

export const sendMessage = async (chat_id, user_id, message) => {
  const res = await axios.post(`${API}/api/tutor/message`, {
    chat_id,
    user_id,
    message,
  });
  return res.data;
};
