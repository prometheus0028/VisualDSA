/* =========================================
   FILE: src/visualizers/dp-sequence-visualizer.jsx
========================================= */

export default function DPSequenceVisualizer({ algorithm, state }) {
  if (!state) return null;

  // ===============================
  // LCS
  // ===============================
  if (algorithm === 'longest-common-subsequence') {
    const matrix = state.dp || [];

    return (
      <div className="flex justify-center mt-6">
        <div>
          {matrix.map((row, i) => (
            <div key={i} className="flex gap-[3px]">
              {row.map((val, j) => {
                const isActive = state.i === i && state.j === j;

                return (
                  <div
                    key={j}
                    className={`w-10 h-10 flex items-center justify-center rounded font-semibold transition-all
                      ${
                        isActive
                          ? 'bg-yellow-400 text-black scale-110 shadow-lg'
                          : 'bg-blue-500 dark:bg-blue-600 text-white'
                      }`}
                  >
                    {val}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ===============================
  // LIS
  // ===============================
  if (algorithm === 'longest-increasing-subsequence') {
    const tail = state.tail || [];

    return (
      <div className="flex justify-center mt-6 gap-3">
        {tail.map((v, i) => (
          <div
            key={i}
            className="w-14 h-14 flex items-center justify-center rounded bg-green-500 dark:bg-green-600 text-white font-bold shadow-md"
          >
            {v}
          </div>
        ))}
      </div>
    );
  }

  // ===============================
  // 🔥 FIXED MCM
  // ===============================
  if (algorithm === 'matrix-chain-multiplication') {
    const matrix = Array.isArray(state.dp) ? state.dp : [];

    return (
      <div className="flex flex-col items-center mt-6 gap-4">
        {/* 🔥 LABEL */}
        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          MCM Cost Matrix (i → j)
        </div>

        {/* COLUMN LABELS */}
        <div className="flex gap-[3px] ml-10">
          {matrix[0]?.map((_, j) => (
            <div key={j} className="w-10 text-center text-xs text-gray-500">
              j={j}
            </div>
          ))}
        </div>

        {/* MATRIX */}
        <div>
          {matrix.map((row, i) => (
            <div key={i} className="flex items-center gap-[3px]">
              {/* ROW LABEL */}
              <div className="w-10 text-xs text-gray-500 text-center">
                i={i}
              </div>

              {row.map((val, j) => {
                const isActive = state.i === i && state.j === j;

                return (
                  <div
                    key={j}
                    className={`w-10 h-10 flex items-center justify-center rounded font-semibold transition-all
                      ${
                        isActive
                          ? 'bg-yellow-400 dark:bg-yellow-800 text-black scale-110 shadow-lg'
                          : 'bg-blue-500 dark:bg-blue-800 text-white'
                      }`}
                  >
                    {val === Infinity || isNaN(val) ? '∞' : val}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
