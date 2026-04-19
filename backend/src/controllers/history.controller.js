import { supabase } from '../config/supabase.js';

// ================= SAVE TEST RESULT =================
export const saveTestResult = async (req, res) => {
  const { user_id, topic, score, total, correct } = req.body;

  if (!user_id) {
    return res.status(400).json({ error: 'user_id required' });
  }

  try {
    // 🔥 FIX 1: SAFE TOPIC
    const safeTopic = topic || 'General';

    // 🔥 FIX 2: ENSURE VALID NUMBERS
    const safeTotal = total || 0;
    const safeScore = score || 0;

    // 🔥 FIX 3: AUTO CALCULATE CORRECT IF NOT PROVIDED
    const safeCorrect = typeof correct === 'number' ? correct : safeScore;

    const { error } = await supabase.from('practice_history').insert({
      user_id,
      topic: safeTopic,
      score: safeScore,
      total: safeTotal,
      correct: safeCorrect,
      created_at: new Date(),
    });

    if (error) throw error;

    res.json({ success: true });
  } catch (err) {
    console.error('Save Test Error:', err);
    res.status(500).json({ error: 'Failed to save test result' });
  }
};

// ================= GET TEST HISTORY =================
export const getTestHistory = async (req, res) => {
  const { user_id } = req.query;

  if (!user_id) {
    return res.status(400).json({ error: 'user_id required' });
  }

  try {
    const { data, error } = await supabase
      .from('practice_history')
      .select('*')
      .eq('user_id', user_id)
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.json(data || []);
  } catch (err) {
    console.error('Fetch History Error:', err);
    res.status(500).json({ error: 'Failed to fetch history' });
  }
};
