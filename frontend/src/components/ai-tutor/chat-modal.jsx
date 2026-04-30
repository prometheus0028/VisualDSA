/* eslint-disable react-hooks/set-state-in-effect */

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ChatModal({ open, onClose, onCreate, defaultName }) {
  const [input, setInput] = useState(defaultName || '');
  const inputRef = useRef();

  // 🔥 reset + autofocus
  useEffect(() => {
    if (open) {
      setInput(defaultName || '');
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open, defaultName]);

  if (!open) return null;

  const handleCreate = () => {
    if (!input.trim()) return;
    onCreate(input.trim());
  };

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/40 backdrop-blur-sm
      "
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="
          w-[90%] max-w-md
          rounded-2xl
          bg-white dark:bg-zinc-900
          border dark:border-white/10
          shadow-2xl
          p-6
        "
      >
        {/* TITLE */}
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">
          Create New Chat
        </h2>

        {/* INPUT */}
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleCreate();
          }}
          placeholder="Enter chat name..."
          className="
            w-full px-4 py-3 rounded-xl
            bg-gray-100 dark:bg-white/10
            border border-transparent
            focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20
            outline-none
            text-sm
            mb-5
          "
        />

        {/* ACTIONS */}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="
              px-4 py-2 rounded-lg
              text-sm
              bg-gray-200 dark:bg-white/10
              hover:opacity-80 transition
            "
          >
            Cancel
          </button>

          <button
            onClick={handleCreate}
            className="
              px-5 py-2 rounded-lg
              text-sm font-medium
              bg-blue-500 text-white
              hover:bg-blue-600
              active:scale-95
              transition
            "
          >
            Create
          </button>
        </div>
      </motion.div>
    </div>
  );
}
