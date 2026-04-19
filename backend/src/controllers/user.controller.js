import { supabase } from '../config/supabase.js';

export const ensureProfile = async (req, res) => {
  const { id, name } = req.body;

  try {
    await supabase.from('profiles').upsert([{ id, name }]);

    res.json({ success: true });
  } catch (err) {
    console.error('Ensure profile error:', err);
    res.status(500).json({ error: err.message });
  }
};
