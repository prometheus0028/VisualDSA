export default function LinkedListVisualizer({ list, type }) {
  const isDoubly = type === 'doubly-linked-list';
  const isCircular = type === 'circular-linked-list';

  return (
    <div className="p-6 rounded-3xl bg-white/70 dark:bg-white/10 backdrop-blur-xl border w-full overflow-x-auto">
      <div className="flex items-center justify-center gap-4 min-h-[120px]">
        {list.map((value, index) => (
          <div key={index} className="flex items-center">
            {/* NODE */}
            <div className="px-4 py-2 rounded-xl bg-blue-500 text-white font-semibold shadow">
              {value}
            </div>

            {/* ARROWS */}
            {index < list.length - 1 && (
              <div className="mx-2 text-xl font-bold text-gray-600 dark:text-gray-300">
                {isDoubly ? '⇄' : '→'}
              </div>
            )}

            {/* CIRCULAR LOOP */}
            {isCircular && index === list.length - 1 && list.length > 1 && (
              <div className="ml-2 text-xl text-purple-500">↺</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
