import { useThemeStore } from '../../store/theme-store';

export default function Navbar() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/10 dark:bg-black/20 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex justify-between items-center">
        {/* 🔥 LOGO FIX */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-500">
          VisualDSA
        </h1>

        {/* 🔥 BUTTON FIX */}
        <button
          onClick={toggleTheme}
          className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-indigo-500 text-white text-xs sm:text-sm hover:bg-indigo-600 transition whitespace-nowrap"
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
}
