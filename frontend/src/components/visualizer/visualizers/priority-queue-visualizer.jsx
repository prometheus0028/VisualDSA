export default function PriorityQueueVisualizer({
  heap,
  active = [],
  swapPair = null,
}) {
  if (!heap.length) {
    return (
      <div className="text-center mt-6 text-gray-500 dark:text-gray-300">
        Heap is empty
      </div>
    );
  }

  const levels = [];
  let i = 0;
  let level = 0;

  while (i < heap.length) {
    const count = Math.pow(2, level);
    levels.push(heap.slice(i, i + count));
    i += count;
    level++;
  }

  let globalIndex = 0;

  return (
    <div
      className="flex flex-col items-center mt-8
      p-6 rounded-3xl border
      bg-white/70 dark:bg-white/10 backdrop-blur-xl
      border-gray-300 dark:border-white/20"
    >
      {levels.map((lvl, levelIndex) => (
        <div key={levelIndex} className="flex justify-center gap-10 mt-6">
          {lvl.map((value) => {
            const index = globalIndex;
            const isActive = active.includes(index);
            const isSwap =
              swapPair && (swapPair[0] === index || swapPair[1] === index);

            const node = (
              <div key={index} className="relative flex flex-col items-center">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center font-bold transition-all shadow
                    ${isActive ? 'bg-red-500 scale-110' : 'bg-blue-500'}
                    text-white`}
                >
                  {value}
                </div>

                {/* SWAP INDICATOR */}
                {isSwap && (
                  <div className="absolute -top-6 text-red-500 text-xl animate-pulse">
                    ↕
                  </div>
                )}
              </div>
            );

            globalIndex++;
            return node;
          })}
        </div>
      ))}
    </div>
  );
}
