/* =========================================
   FILE: src/visualizers/graph-matrix-visualizer.jsx
========================================= */

export default function GraphMatrixVisualizer({ matrix, nodes, active = {} }) {
  if (!matrix || !nodes) {
    return <div className="text-center mt-6">Matrix not available</div>;
  }

  const { i, j, k } = active;

  return (
    <div className="flex justify-center mt-10 overflow-auto">
      <table className="border-collapse">
        <thead>
          <tr>
            <th></th>
            {nodes.map((n) => (
              <th key={n} className="px-3 py-2">
                {n}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <th className="px-3 py-2">{nodes[rowIndex]}</th>

              {row.map((val, colIndex) => {
                const isActive = rowIndex === i && colIndex === j;

                const isVia = colIndex === k;

                return (
                  <td
                    key={colIndex}
                    className={`px-4 py-2 text-center border
                      ${
                        isActive
                          ? 'bg-yellow-400 dark:bg-yellow-800'
                          : isVia
                            ? 'bg-blue-300 dark:bg-blue-800'
                            : 'bg-white dark:bg-zinc-800'
                      }`}
                  >
                    {val === Infinity ? '∞' : val}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
