import { supabase } from '../config/supabase.js';

// 🔥 SIGNUP
export const signup = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    // 1. CREATE USER
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        name,
      },
    });

    if (error) {
      console.error('Signup error:', error);
      return res.status(400).json({ error: error.message });
    }

    const userId = data.user.id;

    // 🔥 2. INSERT INTO PROFILES (MANUAL FIX)
    const { error: profileError } = await supabase.from('profiles').insert([
      {
        id: userId,
        name: name || email.split('@')[0],
      },
    ]);

    if (profileError) {
      console.error('Profile insert error:', profileError);
    }

    // 3. LOGIN USER
    const { data: loginData, error: loginError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (loginError) {
      return res.status(400).json({ error: loginError.message });
    }

    res.json(loginData);
  } catch (err) {
    console.error('Signup crash:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// 🔥 LOGIN
export const login = async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error('Login error:', error);
    return res.status(400).json({ error: error.message });
  }

  res.json(data);
};
