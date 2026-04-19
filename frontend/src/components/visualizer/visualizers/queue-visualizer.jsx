export default function QueueVisualizer({
  queue,
  frontIndex,
  rearIndex,
  type = 'array',
  capacity = 6,
}) {
  const displayQueue =
    type !== 'linked'
      ? [...queue, ...Array(Math.max(capacity - queue.length, 0)).fill(null)]
      : queue;

  return (
    <div className="flex justify-center mt-6">
      <div
        className="rounded-3xl p-4 max-w-[90%] overflow-x-auto
        bg-white/70 dark:bg-white/10 backdrop-blur-xl
        border border-gray-300 dark:border-white/20"
      >
        <div className="flex gap-3">
          {displayQueue.map((value, index) => {
            const isFront = index === frontIndex;
            const isRear = index === rearIndex;

            return (
              <div
                key={index}
                className={`w-20 h-20 flex flex-col items-center justify-center rounded-lg border text-sm transition-all
                  ${
                    value === null
                      ? 'border-dashed opacity-30'
                      : isFront
                        ? 'bg-blue-500 text-black dark:text-gray-300'
                        : isRear
                          ? 'bg-green-500 text-black dark:text-gray-300'
                          : 'bg-white/70 dark:bg-white/10 text-black dark:text-gray-300 border-gray-300 dark:border-gray-600'
                  }`}
              >
                {value ?? ''}

                {value !== null && (
                  <>
                    {isFront && <div className="text-xs">Front</div>}
                    {isRear && <div className="text-xs">Rear</div>}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
