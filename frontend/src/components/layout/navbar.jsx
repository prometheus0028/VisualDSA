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
  const [mobileOpen, setMobileOpen] = useState(false);

  const dropdownRef = useRef();

  const handleLogout = async () => {
    const confirm = window.confirm('Are you sure you want to logout?');
    if (!confirm) return;

    await logoutUser();
    logout();
    setDropdownOpen(false);
  };

  const scrollToSection = (id) => {
    setDropdownOpen(false);
    setMobileOpen(false);

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  //  CLICK OUTSIDE
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  //  LOGIN MODAL EVENT
  useEffect(() => {
    const openLogin = () => setAuthOpen(true);

    window.addEventListener('open_login_modal', openLogin);

    return () => {
      window.removeEventListener('open_login_modal', openLogin);
    };
  }, []);

  const name =
    user?.user_metadata?.name || user?.email?.split('@')[0] || 'User';

  const firstLetter =
    name.charAt(0).toUpperCase() + name.charAt(1).toUpperCase();

  return (
    <>
      <div className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between gap-2 sm:gap-4 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-2xl backdrop-blur-2xl bg-white/60 dark:bg-black/60 border border-white/20 dark:border-white/10 shadow-xl dark:shadow-none">
          {/*  LOGO */}
          <Link
            to="/"
            className="text-sm sm:text-lg md:text-xl font-bold text-blue-500 whitespace-nowrap"
          >
            VisualDSA
          </Link>

          {/*  DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
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

          {/* RIGHT */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* THEME */}
            <button
              onClick={toggleTheme}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-green-600 text-white text-xs sm:text-sm whitespace-nowrap "
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>

            {/* ================= USER ================= */}
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold text-xs sm:text-sm"
                >
                  {firstLetter}
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 sm:mt-3 w-56 sm:w-64 rounded-2xl backdrop-blur-2xl bg-white/80 dark:bg-black/80 border border-white/20 dark:border-white/10 shadow-xl p-3 sm:p-4 text-sm">
                    {/* USER */}
                    <div className="mb-3">
                      <p className="text-gray-500 dark:text-gray-300 text-xs">
                        Welcome
                      </p>
                      <p className="text-gray-800 dark:text-gray-300 font-semibold truncate">
                        {name}
                      </p>
                    </div>

                    {/*  MOBILE ONLY NAV INSIDE DROPDOWN */}
                    <div className="md:hidden border-t border-gray-200 dark:border-white/10 my-2"></div>

                    <div className="md:hidden flex flex-col">
                      <button
                        onClick={() => scrollToSection('features')}
                        className="text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg"
                      >
                        Features
                      </button>
                      <button
                        onClick={() => scrollToSection('how')}
                        className="text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg"
                      >
                        How It Works
                      </button>
                      <button
                        onClick={() => scrollToSection('about')}
                        className="text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg"
                      >
                        About
                      </button>
                      <button
                        onClick={() => scrollToSection('faq')}
                        className="text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg"
                      >
                        FAQ
                      </button>
                    </div>

                    <div className="border-t border-gray-200 dark:border-white/10 my-2"></div>

                    {/* DASHBOARD */}
                    <button
                      onClick={() => {
                        navigate('/dashboard');
                        setDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition"
                    >
                      Dashboard
                    </button>

                    {/* LOGOUT */}
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
              <>
                <button
                  onClick={() => setAuthOpen(true)}
                  className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg border border-black dark:border-white text-xs sm:text-sm text-black dark:text-white whitespace-nowrap"
                >
                  Login / Signup
                </button>

                {/* HAMBURGER ONLY IF NOT LOGGED IN */}
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="md:hidden flex flex-col gap-1 ml-1"
                >
                  <span className="w-5 h-[2px] bg-black dark:bg-white"></span>
                  <span className="w-5 h-[2px] bg-black dark:bg-white"></span>
                  <span className="w-5 h-[2px] bg-black dark:bg-white"></span>
                </button>
              </>
            )}
          </div>
        </div>

        {/*  MOBILE MENU (ONLY IF NOT LOGGED IN) */}
        {!user && mobileOpen && (
          <div className="mt-3 rounded-2xl backdrop-blur-2xl bg-white/80 dark:bg-black/80 border shadow-xl p-5 flex flex-col gap-4 text-sm md:hidden">
            <button
              onClick={() => scrollToSection('features')}
              className="text-black dark:text-white"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how')}
              className="text-black dark:text-white"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-black dark:text-white"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-black dark:text-white"
            >
              FAQ
            </button>
          </div>
        )}
      </div>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
