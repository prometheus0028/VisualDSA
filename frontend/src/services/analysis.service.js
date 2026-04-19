import axios from 'axios';

const API = import.meta.env.VITE_API_URL;
fetch(`${API}/api/analysis`);

// 🔥 GET TOPIC ANALYSIS
export const getTopicAnalysis = async (user_id) => {
  const res = await axios.get(`${API}`, {
    params: { user_id },
  });
  return res.data;
};
