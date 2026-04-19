import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const isOpen = openIndex === i;

        return (
          <div
            key={i}
            className="rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur-xl overflow-hidden"
          >
            {/* HEADER */}
            <button
              onClick={() => toggle(i)}
              className="w-full text-left px-6 py-4 flex justify-between items-center"
            >
              <span className="font-medium">{item.q}</span>

              <span
                className={`transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              >
                ⌄
              </span>
            </button>

            {/* CONTENT (FIXED ANIMATION) */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.25,
                    ease: 'easeOut',
                  }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="px-6 pb-4 text-sm text-gray-600 dark:text-gray-400">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
