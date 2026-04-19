import axios from 'axios';

const API = import.meta.env.VITE_API_URL;
fetch(`${API}/api/tutor`);

export const createChat = async (user_id, message) => {
  const res = await axios.post(`${API}/create`, { user_id, message });
  return res.data;
};

export const getChats = async (user_id) => {
  const res = await axios.get(`${API}`, {
    params: { user_id },
  });
  return res.data;
};

export const getChatById = async (chat_id) => {
  const res = await axios.get(`${API}/${chat_id}`);
  return res.data;
};

export const sendMessage = async (chat_id, user_id, message) => {
  const res = await axios.post(`${API}/message`, {
    chat_id,
    user_id,
    message,
  });
  return res.data;
};
