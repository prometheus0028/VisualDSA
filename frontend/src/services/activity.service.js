import axios from 'axios';

const API = import.meta.env.VITE_API_URL;
fetch(`${API}/api/activity`);

export const trackActivity = async (user_id, type) => {
  await axios.post(`${API}/track`, { user_id, type });
};

export const getActivity = async (user_id) => {
  const res = await axios.get(`${API}`, {
    params: { user_id },
  });
  return res.data;
};
