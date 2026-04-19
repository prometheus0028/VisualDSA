import { motion } from 'framer-motion';

export default function PseudocodePanel({ pseudocode, highlightLine }) {
  if (!pseudocode || pseudocode.length === 0) {
    return (
      <div className="p-6 rounded-2xl bg-white/60 dark:bg-white/5 border">
        <p className="text-sm text-gray-500">No pseudocode available.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border p-6 space-y-2">
      <h3 className="text-lg font-semibold mb-4">Pseudocode</h3>

      <div className="space-y-1 text-sm font-mono">
        {pseudocode.map((line, index) => {
          const isActive = highlightLine === index;

          return (
            <motion.div
              key={index}
              layout
              transition={{ duration: 0.2 }}
              className={`px-4 py-2 rounded-lg transition-all ${
                isActive
                  ? 'bg-blue-500/20 border border-blue-400 text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              <span className="opacity-50 mr-3">{index}</span>
              {line}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
