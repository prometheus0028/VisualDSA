import axios from 'axios';

const API = import.meta.env.VITE_API_URL;
fetch(`${API}/api/history`);

// ================= SAVE TEST RESULT =================
export const saveTestResult = async ({
  user_id,
  topic,
  score,
  total,
  correct,
}) => {
  try {
    const res = await axios.post(`${API}/api/history/save`, {
      user_id,
      topic: topic || 'General',
      score: score || 0,
      total: total || 0,
      correct: typeof correct === 'number' ? correct : score || 0,
    });

    return res.data;
  } catch (err) {
    console.error('Save Test Error:', err);
    throw err;
  }
};

// ================= GET TEST HISTORY =================
export const getTestHistory = async (user_id) => {
  try {
    if (!user_id) return [];

    const res = await axios.get(`${API}/api/history`, {
      params: { user_id },
    });

    return res.data || [];
  } catch (err) {
    console.error('Fetch History Error:', err);
    return [];
  }
};
