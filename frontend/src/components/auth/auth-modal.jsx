/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react';
import Modal from '../ui/modal';
import { login, signup, googleLogin } from '../../services/auth.service';
import { useAuthStore } from '../../store/auth.store';

export default function AuthModal({ open, onClose }) {
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const setAuth = useAuthStore((state) => state.setAuth);

  // ✅ RESET INPUTS EVERY TIME MODAL OPENS
  useEffect(() => {
    if (open) {
      setEmail('');
      setPassword('');
      setName('');
      setMode('login');
    }
  }, [open]);

  const handleSubmit = async () => {
    try {
      let data;

      if (mode === 'login') {
        data = await signup(email, password, name);
      } else {
        data = await signup(email, password, name);

        // 🔥 OPTIONAL: later we will store name in DB
        // for now signup only uses email/password
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
      <div className="w-full max-w-md h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="relative p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <h2 className="text-2xl font-bold">
            {mode === 'login' ? 'Welcome Back' : 'Create Account'}
          </h2>

          <p className="text-sm opacity-90 mt-1">
            {mode === 'login'
              ? 'Sign in to continue learning'
              : 'Join VisualDSA to get started'}
          </p>

          {/* ❌ Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-xl hover:opacity-70"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {/* Google Button */}
          <button
            onClick={handleGoogle}
            className="w-full flex items-center justify-center gap-3 border border-gray-400 rounded-lg py-3 hover:bg-gray-50 dark:hover:bg-white/5 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex-1 h-px bg-gray-200 dark:bg-white/10"></div>
            OR
            <div className="flex-1 h-px bg-gray-200 dark:bg-white/10"></div>
          </div>

          {/* Name (Signup only) */}
          {mode === 'signup' && (
            <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-400  bg-white  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}

          {/* Email */}
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-400  bg-white  focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-blue-600 hover:bg-blue-800 text-white rounded-lg transition"
          >
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>

          {/* Switch Mode */}
          <p className="text-sm text-center text-gray-600">
            {mode === 'login' ? (
              <>
                Don't have an account?{' '}
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
