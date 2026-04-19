/* =========================================
   FILE: src/visualizers/maze-visualizer.jsx
========================================= */

export default function MazeVisualizer({
  state,
  grid,
  size,
  start,
  end,
  toggleBlock,
}) {
  return (
    <div className="flex justify-center mt-10">
      <div
        className="grid gap-2"
        style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
      >
        {grid.map((row, i) =>
          row.map((cell, j) => {
            const isPath = state.path?.some(([x, y]) => x === i && y === j);
            const isShortest =
              state.action === 'shortest' &&
              state.path?.some(([x, y]) => x === i && y === j);

            const isStart = i === start[0] && j === start[1];
            const isEnd = i === end[0] && j === end[1];

            return (
              <div
                key={`${i}-${j}`}
                onClick={() => toggleBlock?.(i, j)}
                className={`w-14 h-14 flex items-center justify-center rounded cursor-pointer
                  ${
                    isStart
                      ? 'bg-blue-500'
                      : isEnd
                        ? 'bg-red-500'
                        : cell === 0
                          ? 'bg-black'
                          : isShortest
                            ? 'bg-purple-500'
                            : isPath
                              ? 'bg-green-500'
                              : 'bg-gray-300 dark:bg-gray-700'
                  }
                `}
              >
                {isStart ? 'S' : isEnd ? 'E' : ''}
              </div>
            );
          }),
        )}
      </div>
    </div>
  );
}
