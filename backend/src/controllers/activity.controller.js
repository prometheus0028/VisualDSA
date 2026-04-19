import { supabase } from '../config/supabase.js';

// ================= TRACK ACTIVITY =================
export const trackActivity = async (req, res) => {
  const { user_id, type } = req.body;

  if (!user_id) {
    return res.status(400).json({ error: 'user_id is required' });
  }

  const today = new Date().toISOString().split('T')[0];

  // 🎯 weights (you can tweak later)
  const weights = {
    ai: 1,
    curriculum: 1,
    test: 2,
  };

  const increment = weights[type] || 1;

  try {
    // 🔥 fetch all rows
    const { data, error } = await supabase
      .from('activity')
      .select('*')
      .eq('user_id', user_id)
      .eq('date', today);

    if (error) throw error;

    if (data && data.length > 0) {
      const main = data[0];

      await supabase
        .from('activity')
        .update({ count: main.count + increment })
        .eq('id', main.id);

      // 🔥 clean duplicates
      if (data.length > 1) {
        const duplicateIds = data.slice(1).map((d) => d.id);

        await supabase.from('activity').delete().in('id', duplicateIds);
      }
    } else {
      await supabase.from('activity').insert({
        user_id,
        date: today,
        count: increment,
      });
    }

    res.json({ success: true });
  } catch (err) {
    console.error('Track Activity Error:', err);
    res.status(500).json({ error: 'Activity tracking failed' });
  }
};

// ================= GET ACTIVITY =================
export const getActivity = async (req, res) => {
  const { user_id } = req.query;

  try {
    const { data } = await supabase
      .from('activity')
      .select('*')
      .eq('user_id', user_id)
      .order('date', { ascending: true });

    res.json(data || []);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch activity' });
  }
};
