import { create } from 'zustand';
import { supabase } from '../services/supabase';

let listenerInitialized = false;

export const useAuthStore = create((set) => ({
  user: null,
  session: null,
  loading: true,

  // ================= INIT =================
  initAuth: async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    set({
      session,
      user: session?.user || null,
      loading: false,
    });

    // 🔥 prevent duplicate listeners
    if (!listenerInitialized) {
      listenerInitialized = true;

      supabase.auth.onAuthStateChange((_event, session) => {
        set({
          session,
          user: session?.user || null,
        });
      });
    }
  },

  // ================= 🔥 MANUAL SET (CRITICAL FIX) =================
  setAuth: (session) => {
    set({
      session,
      user: session?.user || null,
    });
  },

  // ================= LOGOUT =================
  logout: async () => {
    await supabase.auth.signOut();
    set({ user: null, session: null });
  },
}));
