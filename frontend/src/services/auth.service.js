/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import Router from './router';
import { Toaster } from 'react-hot-toast';
import { supabase } from '../services/supabase';
import { useAuthStore } from '../store/auth.store';

export default function App() {
  const initAuth = useAuthStore((state) => state.initAuth);
  const user = useAuthStore((state) => state.user);

  // ================= INIT AUTH (ONLY ONCE) =================
  useEffect(() => {
    initAuth();
  }, []);

  // ================= ENSURE PROFILE =================
  useEffect(() => {
    if (!user) return;

    ensureProfile(user);
  }, [user]);

  const ensureProfile = async (user) => {
    try {
      const name =
        user.user_metadata?.name ||
        user.user_metadata?.full_name ||
        user.email?.split('@')[0] ||
        'User';

      const API = import.meta.env.VITE_API_URL;

      await fetch(`${API}/api/user/ensure`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: user.id,
          name,
        }),
      });

      console.log('Profile ensured:', name);
    } catch (err) {
      console.error('Profile ensure failed:', err);
    }
  };

  return (
    <>
      <Router />
      <Toaster position="top-right" />
    </>
  );
}
