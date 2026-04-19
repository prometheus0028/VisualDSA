export default function DequeVisualizer({ deque, capacity = 6 }) {
  const frontIndex = deque.length > 0 ? 0 : -1;
  const rearIndex = deque.length > 0 ? deque.length - 1 : -1;

  const displayDeque = [
    ...deque,
    ...Array(Math.max(capacity - deque.length, 0)).fill(null),
  ];

  return (
    <div className="flex justify-center mt-6">
      <div className="max-w-full overflow-x-auto">
        <div className="p-6 rounded-3xl bg-white/70 dark:bg-white/10 backdrop-blur-xl border flex gap-4 min-w-max">
          {displayDeque.map((value, index) => {
            const isFront = index === frontIndex;
            const isRear = index === rearIndex;

            return (
              <div
                key={index}
                className={`w-20 h-20 flex flex-col items-center justify-center rounded-lg border transition-all
                  ${
                    value === null
                      ? 'border-dashed opacity-40'
                      : 'bg-white/60 dark:bg-white/10 text-black shadow'
                  }
                `}
              >
                {value !== null && <div>{value}</div>}

                {isFront && value !== null && (
                  <div className="text-xs font-semibold text-blue-200">
                    Front
                  </div>
                )}

                {isRear && value !== null && (
                  <div className="text-xs font-semibold text-blue-200">
                    Rear
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
