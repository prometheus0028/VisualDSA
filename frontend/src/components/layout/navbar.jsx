/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/immutability */
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useThemeStore } from '../../store/theme-store';
import { useAuthStore } from '../../store/auth.store';
import AuthModal from '../auth/auth-modal';
import { logoutUser } from '../../services/auth.service';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const { theme, toggleTheme } = useThemeStore();
  const { user } = useAuthStore();
  const logout = useAuthStore((state) => state.logout);

  const [authOpen, setAuthOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef();

  const handleLogout = async () => {
    const confirm = window.confirm('Are you sure you want to logout?');
    if (!confirm) return;

    await logoutUser();
    logout();
    setDropdownOpen(false);
  };

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 🔥 close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // 🔥 LOGIN MODAL TRIGGER LISTENER (ADDED)
  useEffect(() => {
    const openLogin = () => {
      setAuthOpen(true);
    };

    window.addEventListener('open_login_modal', openLogin);

    return () => {
      window.removeEventListener('open_login_modal', openLogin);
    };
  }, []);

  // 🔥 user name + first letter
  const name =
    user?.user_metadata?.name || user?.email?.split('@')[0] || 'User';

  const firstLetter =
    name.charAt(0).toUpperCase() + name.charAt(1).toUpperCase();

  return (
    <>
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-6">
        <div className="flex items-center justify-between px-8 py-4 rounded-2xl backdrop-blur-2xl bg-white/60 dark:bg-black/60 border border-white/20 dark:border-white/10 shadow-xl dark:shadow-none">
          <Link
            to="/"
            className="text-xl font-bold bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            VisualDSA
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button
              onClick={() => scrollToSection('features')}
              className="text-black dark:text-white hover:opacity-70"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how')}
              className="text-black dark:text-white hover:opacity-70"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-black dark:text-white hover:opacity-70"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-black dark:text-white hover:opacity-70"
            >
              FAQ
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded-lg bg-green-600 text-white text-sm"
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>

            {user ? (
              <div className="relative" ref={dropdownRef}>
                {/* 🔵 Avatar */}
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold"
                >
                  {firstLetter}
                </button>

                {/* 🔽 Dropdown */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-3 w-64 rounded-2xl backdrop-blur-2xl bg-white/80 dark:bg-black/80 border border-white/20 dark:border-white/10 shadow-xl p-4 text-sm">
                    {/* Welcome */}
                    <div className="mb-3">
                      <p className="text-gray-500 dark:text-gray-300 text-xs">
                        Welcome
                      </p>
                      <p className="text-gray-800 dark:text-gray-300 font-semibold">
                        {name}
                      </p>
                    </div>

                    <div className="border-t border-gray-200 dark:border-white/10 my-2"></div>

                    {/* Dashboard */}
                    <button
                      onClick={() => {
                        navigate('/dashboard');
                        setDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition"
                    >
                      Dashboard
                    </button>

                    {/* Logout */}
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setAuthOpen(true)}
                className="px-5 py-2 rounded-lg border border-black dark:border-white text-sm text-black dark:text-white"
              >
                Login / Signup
              </button>
            )}
          </div>
        </div>
      </div>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
