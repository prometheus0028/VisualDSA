import { supabase } from '../config/supabase.js';
import { generateSwotFeedback } from '../services/openai.service.js';

// ================= MAIN SWOT API =================
export const generateSwot = async (req, res) => {
  const { user_id } = req.body;

  if (!user_id) {
    return res.status(400).json({ error: 'user_id required' });
  }

  try {
    // ================= GET LAST SWOT (CACHE FIRST) =================
    const { data: lastSwot } = await supabase
      .from('swot_history')
      .select('*')
      .eq('user_id', user_id)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    // ✅ RETURN FAST RESPONSE
    if (lastSwot) {
      return res.json({
        ...lastSwot,
        cached: true,
      });
    }

    // ================= GENERATE NEW =================
    const fresh = await generateFreshSwot(user_id);
    return res.json(fresh);
  } catch (err) {
    console.error('SWOT Error:', err);
    res.status(500).json({ error: 'AI SWOT failed' });
  }
};

// ================= GENERATE SWOT =================
const generateFreshSwot = async (user_id) => {
  try {
    // ================= FETCH DATA =================
    const { data: activity } = await supabase
      .from('activity')
      .select('*')
      .eq('user_id', user_id);

    const { data: practice } = await supabase
      .from('practice_history')
      .select('*')
      .eq('user_id', user_id);

    if (!practice || practice.length === 0) {
      return {
        empty: true,
        strengths: [],
        weaknesses: [],
        opportunities: [],
        threats: [],
        roadmap: [],
      };
    }

    // ================= METRICS =================
    const activeDays = activity?.filter((d) => d.count > 0).length || 0;

    const totalActivity = activity?.reduce((s, d) => s + d.count, 0) || 0;

    const topicMap = {};

    practice.forEach((p) => {
      const topic = p.topic || p.problem_name || 'General';

      if (!topicMap[topic]) {
        topicMap[topic] = { total: 0, score: 0 };
      }

      topicMap[topic].total += p.total || 0;
      topicMap[topic].score += p.score || 0;
    });

    const strong = [];
    const weak = [];

    Object.keys(topicMap).forEach((t) => {
      const { total, score } = topicMap[t];
      const acc = total > 0 ? score / total : 0;

      if (acc > 0.7) strong.push(t);
      else if (acc < 0.4) weak.push(t);
    });

    // ================= AI CALL (CENTRALIZED) =================
    const aiResult = await generateSwotFeedback({
      activeDays,
      totalActivity,
      strongTopics: strong,
      weakTopics: weak,
    });

    // ================= SAVE =================
    await supabase.from('swot_history').insert({
      user_id,
      strengths: aiResult.strengths,
      weaknesses: aiResult.weaknesses,
      opportunities: aiResult.opportunities,
      threats: aiResult.threats,
      roadmap: aiResult.roadmap,
      created_at: new Date(),
    });

    return aiResult;
  } catch (err) {
    console.error('SWOT generation error:', err);

    return {
      strengths: [],
      weaknesses: [],
      opportunities: [],
      threats: [],
      roadmap: [],
    };
  }
};

// ================= HISTORY =================
export const getSwotHistory = async (req, res) => {
  const { user_id } = req.query;

  try {
    const { data } = await supabase
      .from('swot_history')
      .select('*')
      .eq('user_id', user_id)
      .order('created_at', { ascending: false });

    res.json(data || []);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch SWOT history' });
  }
};
