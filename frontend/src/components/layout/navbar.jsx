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
  const [mobileOpen, setMobileOpen] = useState(false); // 🔥 NEW

  const dropdownRef = useRef();

  const handleLogout = async () => {
    const confirm = window.confirm('Are you sure you want to logout?');
    if (!confirm) return;

    await logoutUser();
    logout();
    setDropdownOpen(false);
  };

  // 🔥 FIXED SCROLL NAV
  const scrollToSection = (id) => {
    setMobileOpen(false);

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    const openLogin = () => setAuthOpen(true);
    window.addEventListener('open_login_modal', openLogin);
    return () => window.removeEventListener('open_login_modal', openLogin);
  }, []);

  const name =
    user?.user_metadata?.name || user?.email?.split('@')[0] || 'User';

  const firstLetter =
    name.charAt(0).toUpperCase() + name.charAt(1).toUpperCase();

  return (
    <>
      <div className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 rounded-2xl backdrop-blur-2xl bg-white/60 dark:bg-black/60 border border-white/20 dark:border-white/10 shadow-xl">
          {/* LOGO (🔥 FIXED NO GRADIENT) */}
          <Link
            to="/"
            className="text-sm sm:text-lg md:text-xl font-bold text-black dark:text-white"
          >
            VisualDSA
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <button onClick={() => scrollToSection('features')}>
              Features
            </button>
            <button onClick={() => scrollToSection('how')}>How It Works</button>
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('faq')}>FAQ</button>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* THEME */}
            <button
              onClick={toggleTheme}
              className="px-3 py-1.5 rounded-lg bg-green-600 text-white text-xs sm:text-sm"
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>

            {/* USER */}
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold text-xs"
                >
                  {firstLetter}
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-3 w-56 rounded-2xl backdrop-blur-2xl bg-white/80 dark:bg-black/80 border shadow-xl p-4 text-sm">
                    <p className="font-semibold mb-2">{name}</p>

                    <button
                      onClick={() => {
                        navigate('/dashboard');
                        setDropdownOpen(false);
                      }}
                      className="block w-full text-left py-2"
                    >
                      Dashboard
                    </button>

                    <button
                      onClick={handleLogout}
                      className="block w-full text-left py-2 text-red-500"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setAuthOpen(true)}
                className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg border text-xs sm:text-sm"
              >
                Login
              </button>
            )}

            {/* 🔥 HAMBURGER */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1 ml-1"
            >
              <span className="w-5 h-[2px] bg-black dark:bg-white"></span>
              <span className="w-5 h-[2px] bg-black dark:bg-white"></span>
              <span className="w-5 h-[2px] bg-black dark:bg-white"></span>
            </button>
          </div>
        </div>

        {/* 🔥 MOBILE MENU */}
        {mobileOpen && (
          <div className="mt-3 rounded-2xl backdrop-blur-2xl bg-white/80 dark:bg-black/80 border shadow-xl p-5 flex flex-col gap-4 text-sm md:hidden">
            <button onClick={() => scrollToSection('features')}>
              Features
            </button>
            <button onClick={() => scrollToSection('how')}>How It Works</button>
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('faq')}>FAQ</button>
          </div>
        )}
      </div>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
