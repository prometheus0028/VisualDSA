import { useState } from 'react';

export default function ComplexityChart({ algorithm }) {
  const [open, setOpen] = useState(null);

  const toggle = (type) => {
    setOpen(open === type ? null : type);
  };

  // Fallback safe object
  const complexity = algorithm.complexityExplanation || {
    best: {
      description: 'Best case explanation not provided.',
    },
    average: {
      description: 'Average case explanation not provided.',
    },
    worst: {
      description: 'Worst case explanation not provided.',
    },
  };

  return (
    <div className="space-y-6">
      {/* TOP CARDS */}
      <div className="grid md:grid-cols-3 gap-8">
        {['best', 'average', 'worst'].map((type) => (
          <div
            key={type}
            onClick={() => toggle(type)}
            className="cursor-pointer p-8 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border transition hover:scale-[1.02]"
          >
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 capitalize">
                {type} Case
              </p>
              <p className="text-2xl font-bold">{algorithm[type]}</p>
            </div>
          </div>
        ))}
      </div>

      {/* EXPANDABLE PANEL */}
      {open && (
        <div className="p-8 rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border animate-fadeIn">
          <h3 className="text-xl font-semibold mb-4 capitalize">
            {open} Case Explanation
          </h3>

          <p className="whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed">
            {complexity[open]?.description}
          </p>

          {/* SPACE COMPLEXITY */}
          <div className="mt-6 pt-6 border-t">
            <h4 className="font-semibold mb-2">Space Complexity</h4>
            <p className="text-gray-700 dark:text-gray-300">
              {algorithm.space}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
