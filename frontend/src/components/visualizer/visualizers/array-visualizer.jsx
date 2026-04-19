/* ===============================
   FILE: src/visualizers/array-visualizer.jsx
================================ */

import { motion } from 'framer-motion';

export default function ArrayVisualizer({
  array = [],
  activeIndices = [],
  low,
  high,
  foundIndex,
}) {
  const safeArray = array.length ? array : [0];
  const maxValue = Math.max(...safeArray, 1);

  return (
    <div className="p-6 rounded-3xl bg-white/70 dark:bg-white/10 backdrop-blur-xl border w-full">
      {/* FIXED HEIGHT + CLIPPING */}
      <div className="flex items-end justify-center gap-3 h-72 md:h-80 overflow-hidden">
        {safeArray.map((value, index) => {
          // ✅ Clamp height (avoid touching top)
          const heightPercent = (value / maxValue) * 60 + 25;

          const isActive = activeIndices?.includes(index);
          const isInRange =
            low !== undefined &&
            high !== undefined &&
            index >= low &&
            index <= high;

          const isFound = index === foundIndex;

          return (
            <motion.div
              key={index}
              layout
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              // ❌ REMOVED scale (causes overflow)
              className={`w-8 md:w-10 rounded-lg flex items-end justify-center text-xs font-semibold shadow transition-all duration-200

                ${
                  isFound
                    ? 'bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.7)]'
                    : isActive
                      ? 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.7)]'
                      : isInRange
                        ? 'bg-purple-500'
                        : 'bg-gray-400 dark:bg-gray-600'
                }
              `}
              style={{
                height: `${heightPercent}%`,
              }}
            >
              <span className="mb-1 text-white text-xs">{value}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
