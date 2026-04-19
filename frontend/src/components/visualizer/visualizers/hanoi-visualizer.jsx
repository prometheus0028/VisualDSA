export default function HanoiVisualizer({ rods }) {
  return (
    <div className="flex justify-center gap-16 mt-8">
      {['A', 'B', 'C'].map((rod) => (
        <div
          key={rod}
          className="flex flex-col-reverse items-center rounded-3xl px-4 pb-6 pt-4 w-44 min-h-[280px]
            border border-gray-300 dark:border-white/20
            bg-white/70 dark:bg-white/10 backdrop-blur-xl"
        >
          <div className="flex flex-col-reverse items-center w-full">
            {rods[rod].map((disk, index) => (
              <div
                key={index}
                className="h-6 mb-2 bg-blue-500 text-white text-center rounded-lg transition-all duration-300 shadow"
                style={{ width: `${40 + disk * 20}px` }}
              >
                {disk}
              </div>
            ))}
          </div>

          {/* bottom gap */}
          <div className="h-2" />

          <div className="mt-3 font-semibold">{rod}</div>
        </div>
      ))}
    </div>
  );
}
