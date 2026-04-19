/* =========================================
   FILE: src/visualizers/greedy-visualizer.jsx
========================================= */

export default function GreedyVisualizer({ state, staticItems = [] }) {
  if (!state) return null;

  // 🔥 ALWAYS USE STATIC ITEMS (fallback)
  const items = staticItems.length ? staticItems : state.items || [];
  const currentItem = state.item;

  return (
    <div className="flex flex-col items-center mt-10 gap-6">
      {/* 🔥 VISUAL LABEL */}
      <div className="text-lg font-semibold text-gray-700 dark:text-gray-200">
        Items (Weight, Value, Ratio)
      </div>

      {/* TOTAL VALUE */}
      <div className="text-xl font-bold text-green-600 dark:text-green-400">
        Total Value: {state.totalValue?.toFixed(2) || 0}
      </div>

      {/* ITEMS */}
      <div className="flex gap-4 flex-wrap justify-center">
        {items.map((item, i) => {
          const isActive = currentItem && item.index === currentItem.index;

          return (
            <div
              key={i}
              className={`px-4 py-3 rounded-xl text-white font-bold transition-all
                ${
                  isActive
                    ? 'bg-yellow-400 dark:bg-yellow-800 text-black scale-110'
                    : 'bg-blue-500 dark:bg-blue-800'
                }`}
            >
              <div>W: {item.weight}</div>
              <div>V: {item.value}</div>
              <div>R: {item.ratio.toFixed(2)}</div>
            </div>
          );
        })}
      </div>

      {/* FRACTION INFO */}
      {state.fraction && (
        <div className="text-sm text-gray-700 dark:text-gray-300">
          Taking {(state.fraction * 100).toFixed(0)}% of current item
        </div>
      )}
    </div>
  );
}
