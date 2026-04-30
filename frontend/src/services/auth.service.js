import axios from 'axios';
import { supabase } from './supabase';

const API = import.meta.env.VITE_API_URL || '';

// ================= SIGNUP =================
export const signup = async (email, password, name) => {
  const res = await axios.post(`${API}/api/auth/signup`, {
    email,
    password,
    name,
  });
  return res.data;
};

// ================= LOGIN =================
export const login = async (email, password) => {
  const res = await axios.post(`${API}/api/auth/login`, {
    email,
    password,
  });
  return res.data;
};

// ================= GOOGLE LOGIN =================
export const googleLogin = async () => {
  const redirectUrl = window.location.origin; // ✅ FIX (NO trailing slash)

  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: redirectUrl,
      skipBrowserRedirect: false, // ✅ ensures proper redirect
    },
  });

  if (error) throw error;
};

// ================= GET SESSION =================
export const getSession = async () => {
  const { data } = await supabase.auth.getSession();
  return data.session;
};

// ================= GET USER =================
export const getUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};

// ================= LOGOUT =================
export const logoutUser = async () => {
  await supabase.auth.signOut();
};
