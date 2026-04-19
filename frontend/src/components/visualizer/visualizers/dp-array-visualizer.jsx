/* =========================================
   FILE: src/visualizers/dp-array-visualizer.jsx
========================================= */

export default function DPArrayVisualizer({ dp, highlightIndex }) {
  if (!dp || dp.length === 0) {
    return (
      <div className="text-center mt-6 text-gray-500">
        Waiting for computation...
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-10">
      <div className="flex gap-3 flex-wrap justify-center">
        {dp.map((val, i) => {
          const isActive = i === highlightIndex;

          return (
            <div key={i} className="flex flex-col items-center">
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-lg font-bold transition-all
                  ${
                    isActive
                      ? 'bg-yellow-400 text-black scale-110'
                      : 'bg-blue-500 text-white'
                  }`}
              >
                {val === Infinity ? '∞' : val}
              </div>
              <div className="text-xs mt-1 opacity-70">{i}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
