import axios from 'axios';

const API = import.meta.env.VITE_API_URL;
fetch(`${API}/api/swot`);

// ================= GENERATE / FETCH AI SWOT =================
export const getAISwot = async (user_id) => {
  try {
    if (!user_id) return null;

    const res = await axios.post(API, { user_id });

    // 🔥 backend may return cached OR fresh OR empty
    if (res.data?.empty) {
      return {
        strengths: [],
        weaknesses: [],
        opportunities: [],
        threats: [],
        roadmap: [],
        empty: true,
      };
    }

    return {
      strengths: res.data.strengths || [],
      weaknesses: res.data.weaknesses || [],
      opportunities: res.data.opportunities || [],
      threats: res.data.threats || [],
      roadmap: res.data.roadmap || [],
      cached: res.data.cached || false,
    };
  } catch (err) {
    console.error('SWOT Fetch Error:', err);

    // 🔥 fallback (prevents UI crash)
    return {
      strengths: [],
      weaknesses: [],
      opportunities: [],
      threats: [],
      roadmap: [],
      error: true,
    };
  }
};

// ================= SWOT HISTORY =================
export const getSwotHistory = async (user_id) => {
  try {
    if (!user_id) return [];

    const res = await axios.get(`${API}/history`, {
      params: { user_id },
    });

    return res.data || [];
  } catch (err) {
    console.error('SWOT History Error:', err);
    return [];
  }
};
