export default function ExpressionVisualizer({
  input,
  stack,
  output,
  currentChar,
}) {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-6">
      {/* INPUT */}
      <div
        className="p-4 rounded-3xl border
        bg-white/70 dark:bg-white/10 backdrop-blur-xl"
      >
        <div className="font-semibold mb-2 text-center">Input</div>

        <div className="flex justify-center gap-2 flex-wrap">
          {input.split('').map((char, i) => (
            <div
              key={i}
              className={`px-2 py-1 rounded border transition-all
                ${
                  i === currentChar
                    ? 'bg-blue-500 text-white scale-110'
                    : 'bg-white/70 dark:bg-white/10 text-gray-800 dark:text-gray-200'
                }`}
            >
              {char}
            </div>
          ))}
        </div>
      </div>

      {/* STACK */}
      <div
        className="p-4 rounded-3xl border
        bg-white/70 dark:bg-white/10 backdrop-blur-xl"
      >
        <div className="font-semibold mb-2 text-center">Stack</div>

        <div className="flex flex-col items-center">
          {stack.map((s, i) => (
            <div
              key={i}
              className="w-20 py-1 mb-1 rounded-lg text-center
                bg-blue-500 text-white shadow"
            >
              {s}
            </div>
          ))}
        </div>
      </div>

      {/* OUTPUT */}
      <div
        className="p-4 rounded-3xl border
        bg-white/70 dark:bg-white/10 backdrop-blur-xl"
      >
        <div className="font-semibold mb-2 text-center">Output</div>

        <div className="text-lg text-center break-words text-gray-800 dark:text-gray-200 font-semibold">
          {output}
        </div>
      </div>
    </div>
  );
}
