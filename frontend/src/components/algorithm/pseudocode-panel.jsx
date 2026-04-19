import React from 'react';

export default function PseudocodePanel({ algorithm, activeLine }) {
  if (!algorithm || !Array.isArray(algorithm.pseudocode)) {
    return (
      <div className="p-6 rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border">
        <p className="text-gray-500 dark:text-gray-400">
          No pseudocode available.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border">
      <h3 className="text-lg font-semibold mb-4">Pseudocode</h3>

      <div className="space-y-2 font-mono text-sm">
        {algorithm.pseudocode.map((line, index) => (
          <div
            key={index}
            className={`px-3 py-1 rounded transition-all duration-200
              ${
                activeLine === index
                  ? 'bg-blue-500/20 text-blue-700 dark:text-blue-300 border-l-4 border-blue-500'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
