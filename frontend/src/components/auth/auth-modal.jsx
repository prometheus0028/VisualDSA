import { useState, useEffect } from 'react';
import Modal from '../ui/modal';
import { login, signup, googleLogin } from '../../services/auth.service';
import { useAuthStore } from '../../store/auth.store';

export default function AuthModal({ open, onClose }) {
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const setAuth = useAuthStore((state) => state.setAuth);

  useEffect(() => {
    if (open) {
      setEmail('');
      setPassword('');
      setName('');
      setMode('login');
    }
  }, [open]);

  const handleSubmit = async () => {
    if (loading) return;

    try {
      setLoading(true);

      let data;

      if (mode === 'login') {
        data = await login(email, password); // ✅ FIXED
      } else {
        data = await signup(email, password, name);
      }

      if (data?.session) {
        setAuth(data.session);
        onClose();
      } else {
        alert('No session returned. Check email confirmation settings.');
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
    } catch (err) {
      console.error(err);
      alert('Google login failed');
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div
        className="
        w-full max-w-md
        max-h-[90vh]
        bg-white dark:bg-zinc-900
        rounded-2xl shadow-2xl
        flex flex-col overflow-hidden
      "
      >
        {/* ================= HEADER ================= */}
        <div
          className="
          relative p-6 sm:p-7
          bg-gradient-to-r from-blue-600 to-purple-600
          text-white
        "
        >
          <h2 className="text-xl sm:text-2xl font-bold">
            {mode === 'login' ? 'Welcome Back' : 'Create Account'}
          </h2>

          <p className="text-xs sm:text-sm opacity-90 mt-1">
            {mode === 'login'
              ? 'Sign in to continue learning'
              : 'Join VisualDSA to get started'}
          </p>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-lg hover:opacity-70"
          >
            ×
          </button>
        </div>

        {/* ================= BODY ================= */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
          {/* GOOGLE BUTTON */}
          <button
            onClick={handleGoogle}
            className="
              w-full flex items-center justify-center gap-3
              px-4 py-3
              rounded-xl
              bg-white dark:bg-zinc-800
              border border-gray-300 dark:border-white/10
              text-sm font-medium
              shadow-sm hover:shadow-md
              transition active:scale-[0.98]
            "
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          {/* DIVIDER */}
          <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            <div className="flex-1 h-px bg-gray-200 dark:bg-white/10"></div>
            OR
            <div className="flex-1 h-px bg-gray-200 dark:bg-white/10"></div>
          </div>

          {/* NAME */}
          {mode === 'signup' && (
            <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                w-full px-4 py-3 rounded-xl
                border border-gray-300 dark:border-white/10
                bg-white dark:bg-zinc-800
                text-sm
                focus:outline-none focus:ring-2 focus:ring-blue-500/40
              "
            />
          )}

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full px-4 py-3 rounded-xl
              border border-gray-300 dark:border-white/10
              bg-white dark:bg-zinc-800
              text-sm
              focus:outline-none focus:ring-2 focus:ring-blue-500/40
            "
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              w-full px-4 py-3 rounded-xl
              border border-gray-300 dark:border-white/10
              bg-white dark:bg-zinc-800
              text-sm
              focus:outline-none focus:ring-2 focus:ring-blue-500/40
            "
          />

          {/* SUBMIT */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="
              w-full py-3 rounded-xl
              bg-blue-600 hover:bg-blue-700
              text-white text-sm font-semibold
              transition
              disabled:opacity-50
            "
          >
            {loading
              ? 'Processing...'
              : mode === 'login'
                ? 'Sign In'
                : 'Create Account'}
          </button>

          {/* SWITCH MODE */}
          <p className="text-xs sm:text-sm text-center text-gray-600 dark:text-gray-400">
            {mode === 'login' ? (
              <>
                Don’t have an account?{' '}
                <button
                  onClick={() => setMode('signup')}
                  className="text-blue-600 hover:underline"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  onClick={() => setMode('login')}
                  className="text-blue-600 hover:underline"
                >
                  Sign in
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </Modal>
  );
}
