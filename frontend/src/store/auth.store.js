import { create } from 'zustand';
import { supabase } from '../services/supabase'; // ✅ make sure path is correct

export const useAuthStore = create((set) => ({
  user: null,
  session: null,
  loading: true, // 🔥 NEW

  // ================= SET AUTH =================
  setAuth: (session) =>
    set({
      session,
      user: session?.user || null,
      loading: false, // 🔥 stop loading once auth is set
    }),

  // ================= RESTORE SESSION =================
  initAuth: async () => {
    const { data } = await supabase.auth.getSession();

    set({
      session: data.session,
      user: data.session?.user || null,
      loading: false,
    });

    // 🔥 listen for changes (login/logout)
    supabase.auth.onAuthStateChange((_event, session) => {
      set({
        session,
        user: session?.user || null,
        loading: false,
      });
    });
  },

  // ================= LOGOUT =================
  logout: () =>
    set({
      user: null,
      session: null,
      loading: false,
    }),
}));
