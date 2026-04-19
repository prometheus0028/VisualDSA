import { useThemeStore } from '../../store/theme-store';

export default function Navbar() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/10 dark:bg-black/20 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-500">VisualDSA</h1>

        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600 transition"
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
}
