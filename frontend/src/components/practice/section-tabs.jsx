export default function SectionTabs({ current, setCurrent }) {
  const tabs = ['mcq', 'debug'];

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => setCurrent(t)}
          className={`
            px-4 sm:px-5 py-2
            rounded-full
            text-xs sm:text-sm
            whitespace-nowrap
            transition
            ${
              current === t
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-white/10'
            }
          `}
        >
          {t.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
