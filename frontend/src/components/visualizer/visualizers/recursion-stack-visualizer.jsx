/* =========================================
   FILE: src/visualizers/recursion-stack-visualizer.jsx
========================================= */

export default function RecursionStackVisualizer({
  stack = [],
  sequence = [],
  algorithm,
}) {
  return (
    <div className="flex flex-col items-center mt-10 gap-6">
      {/* ===============================
          STACK (DEFAULT)
      =============================== */}
      {algorithm !== 'fibonacci' && (
        <div className="flex flex-col-reverse gap-2 items-center">
          {stack.map((frame, i) => (
            <div
              key={i}
              className="px-6 py-2 rounded-lg bg-blue-500 text-white font-bold shadow-md"
            >
              {frame.value}
            </div>
          ))}
        </div>
      )}

      {/* ===============================
          FIBONACCI SEQUENCE
      =============================== */}
      {algorithm === 'fibonacci' && (
        <div className="flex justify-center gap-3 flex-wrap">
          {sequence.map((num, i) => (
            <div
              key={i}
              className="px-5 py-3 rounded-xl bg-blue-500 text-white font-bold shadow-md transition-all"
            >
              {num}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
