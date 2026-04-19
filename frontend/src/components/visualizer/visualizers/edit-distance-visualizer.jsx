/* =========================================
   FILE: src/visualizers/edit-distance-visualizer.jsx
========================================= */

export default function EditDistanceVisualizer({
  matrix,
  activeCell,
  word1,
  word2,
}) {
  if (!matrix || !Array.isArray(matrix)) {
    return <div className="text-center mt-6">No data</div>;
  }

  return (
    <div className="flex justify-center mt-10 overflow-auto">
      <div>
        {/* TOP LABEL (word2) */}
        <div className="flex mb-2">
          <div className="w-10" />
          {['', ...word2].map((ch, i) => (
            <div
              key={i}
              className="w-12 text-center font-bold text-grey-100 dark:text-gray-300"
            >
              {ch}
            </div>
          ))}
        </div>

        {/* MATRIX */}
        {matrix.map((row, i) => (
          <div key={i} className="flex">
            {/* LEFT LABEL (word1) */}
            <div className="w-10 flex items-center justify-center font-bold text-grey-100 dark:text-gray-300">
              {i === 0 ? '' : word1[i - 1]}
            </div>

            {row.map((val, j) => {
              const isActive =
                activeCell && activeCell[0] === i && activeCell[1] === j;

              return (
                <div
                  key={j}
                  className={`w-12 h-12 flex items-center justify-center rounded font-bold
                    ${
                      isActive
                        ? 'bg-yellow-400 text-black scale-110 dark:bg-yellow-800 dark:text-yellow-300'
                        : 'bg-blue-500 dark:bg-blue-800 text-grey-100 dark:text-gray-300'
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
