/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/auth.store';

export default function LoginRequired() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuthStore();

  const from = location.state?.from || '/';

  // ================= SCROLL TO TOP =================
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, []);

  // ================= AUTO REDIRECT =================
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  const handleLogin = () => {
    window.dispatchEvent(new Event('open_login_modal'));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f1e8] dark:bg-zinc-900 px-4 sm:px-6">
      <div
        className="
        max-w-md w-full text-center
        p-6 sm:p-8 md:p-10
        rounded-2xl
        bg-white/60 dark:bg-white/5
        border backdrop-blur-xl
      "
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-red-500">
          Login Required
        </h1>

        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-5 sm:mb-6">
          Please login to continue using this feature.
        </p>

        <button
          onClick={handleLogin}
          className="
            px-5 sm:px-6 py-2 sm:py-2.5 rounded-full
            bg-blue-500 text-white
            hover:bg-blue-600 transition
            text-sm sm:text-base
          "
        >
          Login
        </button>

        <div className="mt-5 sm:mt-6">
          <button
            onClick={() => navigate('/')}
            className="text-xs sm:text-sm text-gray-500 hover:underline"
          >
            ← Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
}
