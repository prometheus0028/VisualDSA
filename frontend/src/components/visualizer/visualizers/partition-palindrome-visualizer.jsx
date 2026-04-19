/* =========================================
   FILE: src/visualizers/partition-palindrome-visualizer.jsx
========================================= */

export default function PartitionPalindromeVisualizer({
  algorithm,
  matrix,
  activeCell,
  extra,
}) {
  // ===============================
  // PARTITION EQUAL SUBSET SUM
  // ===============================
  if (algorithm === 'partition-equal-subset-sum') {
    if (!matrix || !Array.isArray(matrix)) {
      return <div className="text-center mt-6">No data</div>;
    }

    const cols = matrix[0]?.length || 0;

    return (
      <div className="flex flex-col items-center mt-10 gap-4">
        {/* LEGEND */}
        <div className="flex gap-6 text-sm font-semibold">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded" />
            True (Sum achievable)
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-400 rounded" />
            False (Not achievable)
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-auto">
          {/* COLUMN LABELS */}
          <div className="flex mb-1">
            <div className="w-16 text-center font-bold">i / sum →</div>

            {Array.from({ length: cols }, (_, j) => (
              <div
                key={j}
                className="w-12 text-center text-xs font-bold text-grey-200 dark:text-grey-800"
              >
                {j}
              </div>
            ))}
          </div>

          {/* MATRIX */}
          {matrix.map((row, i) => (
            <div key={i} className="flex gap-[3px] mb-[3px]">
              {/* ROW LABEL */}
              <div className="w-16 text-center font-bold text-grey-200 dark:text-grey-800">
                i={i}
              </div>

              {row.map((val, j) => {
                const isActive =
                  activeCell && activeCell[0] === i && activeCell[1] === j;

                return (
                  <div
                    key={j}
                    className={`w-12 h-12 flex items-center justify-center text-sm font-bold rounded transition-all
                      ${
                        isActive
                          ? 'bg-yellow-400 text-black scale-110 dark:bg-yellow-800'
                          : val
                            ? 'bg-green-500 text-white dark:bg-green-800 dark:text-green-300'
                            : 'bg-gray-400 text-white dark:bg-gray-700 dark:text-gray-300'
                      }`}
                  >
                    {val ? 'T' : 'F'}
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
  // PALINDROME PARTITIONING
  // ===============================
  if (algorithm === 'palindrome-partitioning') {
    return (
      <div className="flex flex-col items-center gap-4 mt-10">
        <div className="text-lg font-bold">
          Total Palindromes: {extra?.length || 0}
        </div>

        <div className="flex flex-wrap gap-2 justify-center max-w-xl">
          {extra?.map((p, i) => (
            <div
              key={i}
              className="px-3 py-1 bg-green-500 text-white rounded-lg"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
