import axios from 'axios';
import { supabase } from './supabase';

const API = import.meta.env.VITE_API_URL;
fetch(`${API}/api/auth`);

export const signup = async (email, password, name) => {
  const res = await axios.post(`${API}/api/auth/signup`, {
    email,
    password,
    name, // 🔥 ADD THIS
  });
  return res.data;
};

export const login = async (email, password) => {
  const res = await axios.post(`${API}/api/auth/login`, { email, password });
  return res.data;
};

// ✅ GOOGLE LOGIN (FIXED)
export const googleLogin = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'http://localhost:5173', // 🔥 MUST BE EXACT
    },
  });

  if (error) throw error;
};

// ✅ GET SESSION
export const getSession = async () => {
  const { data } = await supabase.auth.getSession();
  return data.session;
};

// ✅ LOGOUT
export const logoutUser = async () => {
  await supabase.auth.signOut();
};
