/* eslint-disable react-hooks/immutability */
import { useEffect } from 'react';
import Router from './router';
import { Toaster } from 'react-hot-toast';
import { supabase } from '../services/supabase';
import { useAuthStore } from '../store/auth.store';

export default function App() {
  const setAuth = useAuthStore((state) => state.setAuth);

  useEffect(() => {
    // 🔥 LOAD SESSION ON START
    const loadSession = async () => {
      const { data } = await supabase.auth.getSession();

      console.log('SESSION:', data.session);

      if (data?.session) {
        setAuth(data.session);

        // 🔥 ensure profile exists
        await ensureProfile(data.session);
      } else {
        // 🔥 IMPORTANT: stop loading even if no session
        setAuth(null);
      }
    };

    loadSession();

    // 🔥 LISTEN FOR AUTH EVENTS
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('AUTH EVENT:', event, session);

      setAuth(session);

      if (event === 'SIGNED_IN' && session?.user) {
        await ensureProfile(session);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [setAuth]);

  // 🔥 FUNCTION: ENSURE PROFILE EXISTS
  const ensureProfile = async (session) => {
    try {
      const user = session.user;

      const name =
        user.user_metadata?.name ||
        user.user_metadata?.full_name ||
        user.email?.split('@')[0] ||
        'User';

      await fetch('http://localhost:5000/api/user/ensure', {
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
