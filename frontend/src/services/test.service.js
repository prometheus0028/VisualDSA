import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;
fetch(`${BASE_URL}/api/`);

// ================= SUBMIT TEST =================
export const submitTest = async ({
  user_id,
  topic,
  score,
  total,
  correct,
  weakAreas = [],
  wrongQuestions = [],
}) => {
  try {
    const res = await axios.post(`${BASE_URL}/test/submit`, {
      user_id,
      topic,
      score,
      total,
      correct,
      weakAreas,
      wrongQuestions,
    });

    return res.data;
  } catch (err) {
    console.error('Test Submit Error:', err);
    throw err;
  }
};
