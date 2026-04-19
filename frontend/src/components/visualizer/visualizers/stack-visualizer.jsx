export default function StackVisualizer({
  stack,
  topIndex,
  type = 'array',
  capacity,
}) {
  const displayStack =
    type === 'array' && capacity
      ? [...stack, ...Array(Math.max(capacity - stack.length, 0)).fill(null)]
      : stack;

  return (
    <div className="flex flex-col items-center mt-6">
      {/* OUTER BOX */}
      <div
        className="rounded-3xl p-4 w-48
        bg-white/70 dark:bg-white/10 backdrop-blur-xl
        border border-gray-300 dark:border-white/20"
      >
        {/* SCROLL AREA */}
        <div className="max-h-[300px] overflow-y-auto flex flex-col-reverse">
          {displayStack.map((value, index) => {
            const isTop = index === topIndex && value !== null;

            return (
              <div
                key={index}
                className={`w-full py-2 mt-2 rounded-lg text-center text-sm font-semibold border transition-all
                  ${
                    value === null
                      ? 'border-dashed opacity-30'
                      : isTop
                        ? 'bg-blue-600 text-white  border-gray-300 dark:border-gray-600'
                        : 'bg-white/70 dark:bg-white/10 border-gray-300 dark:border-gray-600'
                  }`}
              >
                {value ?? ''}
                {isTop && <div className="text-xs">Top</div>}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">
        {type === 'array'
          ? 'Array Implementation'
          : 'Linked List Implementation'}
      </div>
    </div>
  );
}
