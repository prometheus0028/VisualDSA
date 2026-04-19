export default function SectionTabs({ current, setCurrent }) {
  const tabs = ['mcq', 'debug'];

  return (
    <div className="flex gap-3">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => setCurrent(t)}
          className={`px-4 py-2 rounded-full text-sm ${
            current === t
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-white/10'
          }`}
        >
          {t.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
