/* =========================================
   FILE: src/visualizers/backtracking-pnc-visualizer.jsx
========================================= */

export default function BacktrackingPNCVisualizer({ state, results = [] }) {
  return (
    <div className="flex flex-col items-center gap-6 mt-10">
      {/* LABEL */}
      <div className="text-lg font-semibold text-gray-700 dark:text-gray-200">
        Backtracking Visualization
      </div>

      {/* CURRENT PATH */}
      <div>
        <div className="text-sm mb-2 text-gray-600 dark:text-gray-300 text-center">
          Current Path
        </div>
        <div className="flex gap-3">
          {state.path?.map((v, i) => (
            <div
              key={i}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold"
            >
              {v}
            </div>
          ))}
        </div>
      </div>

      {/* TOTAL COUNT */}
      <div className="text-green-600 dark:text-green-400 font-semibold">
        Total Generated: {results.length}
      </div>

      {/* RESULTS LIST */}
      <div>
        <div className="text-sm mb-2 text-gray-600 dark:text-gray-300 text-center">
          All Results
        </div>

        <div className="max-w-2xl flex flex-wrap gap-2 justify-center">
          {results.map((res, i) => (
            <div
              key={i}
              className="px-3 py-1 rounded-lg bg-green-500 text-white text-sm"
            >
              {Array.isArray(res) ? res.join(', ') : res}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
