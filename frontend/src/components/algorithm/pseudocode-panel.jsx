import React from 'react';

export default function PseudocodePanel({ algorithm, activeLine }) {
  if (!algorithm || !Array.isArray(algorithm.pseudocode)) {
    return (
      <div className="p-5 sm:p-6 rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border">
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
          No pseudocode available.
        </p>
      </div>
    );
  }

  return (
    <div className="p-5 sm:p-6 rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border">
      <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
        Pseudocode
      </h3>

      {/* 🔥 SCROLLABLE CONTAINER */}
      <div
        className="
        space-y-1.5 sm:space-y-2
        font-mono
        text-xs sm:text-sm
        max-h-[300px] sm:max-h-[400px] md:max-h-[500px]
        overflow-y-auto
        pr-2
      "
      >
        {algorithm.pseudocode.map((line, index) => (
          <div
            key={index}
            className={`
              px-2 sm:px-3 py-1 rounded
              transition-all duration-200
              break-words
              ${
                activeLine === index
                  ? 'bg-blue-500/20 text-blue-700 dark:text-blue-300 border-l-4 border-blue-500'
                  : 'text-gray-700 dark:text-gray-300'
              }
            `}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
