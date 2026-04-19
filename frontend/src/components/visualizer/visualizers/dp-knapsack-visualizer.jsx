/* =========================================
   FILE: src/visualizers/dp-knapsack-visualizer.jsx
   (WITH LABELS ADDED — NO LOGIC CHANGE)
========================================= */

export default function DPKnapsackVisualizer({ algorithm, state }) {
  if (!state) return null;

  // ===============================
  // 0/1 KNAPSACK (2D DP)
  // ===============================
  if (algorithm === 'zero-one-knapsack') {
    const matrix = state.dp || [];

    return (
      <div className="flex flex-col items-center mt-10 gap-4">
        {/* 🔥 VISUALIZER LABEL */}
        <div className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          DP Table (Rows → Items, Columns → Capacity)
        </div>

        {/* COLUMN LABELS */}
        {matrix[0] && (
          <div className="flex gap-[2px] mb-1">
            {matrix[0].map((_, j) => (
              <div key={j} className="w-12 text-center text-xs text-gray-500">
                {j}
              </div>
            ))}
          </div>
        )}

        <div>
          {matrix.map((row, i) => (
            <div key={i} className="flex gap-[2px] items-center">
              {/* ROW LABEL */}
              <div className="w-6 text-xs text-gray-500 text-center">{i}</div>

              {row.map((val, j) => {
                const isActive = state.i === i && state.w === j;

                return (
                  <div
                    key={j}
                    className={`w-12 h-12 flex items-center justify-center rounded transition-all
                      ${
                        isActive
                          ? 'bg-yellow-400 text-black scale-110'
                          : 'bg-blue-500 text-white'
                      }`}
                  >
                    {val}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* LEGEND */}
        <div className="text-xs text-gray-500 mt-2">
          Rows = items considered | Columns = capacity (0 → W)
        </div>
      </div>
    );
  }

  // ===============================
  // UNBOUNDED KNAPSACK (1D DP)
  // ===============================
  if (algorithm === 'unbounded-knapsack') {
    const dp = state.dp || [];

    return (
      <div className="flex flex-col items-center mt-10 gap-4">
        {/* 🔥 VISUALIZER LABEL */}
        <div className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          DP Array (Index → Capacity, Value → Max Profit)
        </div>

        {/* INDEX LABELS */}
        <div className="flex gap-3">
          {dp.map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* VALUE BOX */}
              <div
                className={`w-14 h-14 flex items-center justify-center rounded font-bold transition-all
                  ${
                    state.weight === i
                      ? 'bg-yellow-400 text-black scale-110'
                      : 'bg-green-500 text-white'
                  }`}
              >
                {dp[i]}
              </div>

              {/* INDEX LABEL */}
              <div className="text-xs mt-1 text-gray-500">w={i}</div>
            </div>
          ))}
        </div>

        {/* LEGEND */}
        <div className="text-xs text-gray-500 mt-2 text-center">
          Each box shows max value achievable for that capacity
        </div>
      </div>
    );
  }

  return null;
}
