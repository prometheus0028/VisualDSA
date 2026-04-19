/* =========================================
   FILE: src/visualizers/sudoku-visualizer.jsx
========================================= */

export default function SudokuVisualizer({ state }) {
  if (!state?.grid) {
    return <div className="text-center mt-6">No grid</div>;
  }

  const grid = state.grid;

  return (
    <div className="flex justify-center mt-10">
      <div className="grid grid-cols-9 gap-[2px] bg-gray-800 p-[4px] rounded-lg">
        {grid.map((row, i) =>
          row.map((cell, j) => {
            const isActive = state.row === i && state.col === j;

            return (
              <div
                key={`${i}-${j}`}
                className={`w-12 h-12 flex items-center justify-center text-lg font-bold
                  ${
                    isActive
                      ? 'bg-yellow-400 text-black'
                      : 'bg-white dark:bg-gray-900 text-black dark:text-white'
                  }
                `}
                style={{
                  borderTop: i % 3 === 0 ? '3px solid black' : '1px solid #555',
                  borderLeft:
                    j % 3 === 0 ? '3px solid black' : '1px solid #555',
                  borderRight: j === 8 ? '3px solid black' : '',
                  borderBottom: i === 8 ? '3px solid black' : '',
                }}
              >
                {cell !== 0 ? cell : ''}
              </div>
            );
          }),
        )}
      </div>
    </div>
  );
}
