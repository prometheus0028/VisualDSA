export default function Navigation({
  total,
  currentIndex,
  answers,
  visited,
  section,
  setIndex,
}) {
  return (
    <div className="p-6 rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border space-y-4">
      {/* TITLE */}
      <h3 className="font-semibold">Questions</h3>

      {/* GRID */}
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: total }).map((_, i) => {
          const key = `${section}-${i}`;

          const isVisited = visited?.[key] || false;
          const isAttempted = answers?.[key] !== undefined;

          let style = 'bg-white dark:bg-white/10 text-black dark:text-white'; // ⚪ NOT VISITED

          // 🔴 VISITED BUT NOT ANSWERED
          if (isVisited && !isAttempted) {
            style = 'bg-red-400 dark:bg-red-600 text-white';
          }

          // 🟢 ANSWERED
          if (isAttempted) {
            style = 'bg-green-500 dark:bg-green-700 text-white';
          }

          // ⚫ CURRENT (HIGHEST PRIORITY)
          if (i === currentIndex) {
            style =
              'bg-black text-white dark:bg-white dark:text-black font-bold';
          }

          return (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`
                h-10 rounded-lg text-sm font-semibold
                transition-all duration-150
                ${style}
              `}
            >
              {i + 1}
            </button>
          );
        })}
      </div>

      {/* FOOTER */}
      <div className="text-sm text-gray-600 dark:text-gray-400 pt-4 border-t">
        Attempted: {Object.keys(answers || {}).length} / {total}
      </div>
    </div>
  );
}
