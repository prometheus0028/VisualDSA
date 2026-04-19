import { supabase } from '../config/supabase.js';

// ================= TOPIC ANALYSIS =================
export const getTopicAnalysis = async (req, res) => {
  const { user_id } = req.query;

  if (!user_id) {
    return res.status(400).json({ error: 'user_id required' });
  }

  try {
    // ================= FETCH DATA =================
    const { data: practice, error } = await supabase
      .from('practice_history')
      .select('*')
      .eq('user_id', user_id);

    if (error) throw error;

    // ================= EMPTY STATE =================
    if (!practice || practice.length === 0) {
      return res.json({ empty: true });
    }

    // ================= BUILD TOPIC MAP =================
    const topicMap = {};

    practice.forEach((p) => {
      // 🔥 FIX 1: HANDLE MISSING TOPIC
      const topic = p.topic || p.problem_name || 'General';

      if (!topicMap[topic]) {
        topicMap[topic] = {
          total: 0,
          score: 0,
        };
      }

      // 🔥 FIX 2: USE SCORE (NOT CORRECT)
      topicMap[topic].total += p.total || 0;
      topicMap[topic].score += p.score || 0;
    });

    const weak = [];
    const strong = [];

    // ================= CLASSIFY =================
    Object.keys(topicMap).forEach((topic) => {
      const { total, score } = topicMap[topic];

      // 🔥 FIX 3: CORRECT ACCURACY
      const accuracy = total > 0 ? score / total : 0;

      const obj = {
        topic,
        total,
        score,
        accuracy,
      };

      if (accuracy < 0.5) {
        weak.push(obj);
      } else if (accuracy > 0.75) {
        strong.push(obj);
      }
    });

    // ================= SORT =================
    weak.sort((a, b) => a.accuracy - b.accuracy);
    strong.sort((a, b) => b.accuracy - a.accuracy);

    // ================= RECOMMENDATIONS =================
    const recommendations = weak.slice(0, 3).map((t) => {
      return `Practice more ${t.topic} problems (accuracy ${(t.accuracy * 100).toFixed(0)}%)`;
    });

    res.json({
      weak,
      strong,
      recommendations,
    });
  } catch (err) {
    console.error('Topic Analysis Error:', err);
    res.status(500).json({ error: 'Analysis failed' });
  }
};
