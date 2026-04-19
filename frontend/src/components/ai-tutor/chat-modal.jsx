/* eslint-disable react-hooks/immutability */
import { motion } from 'framer-motion';

export default function ChatModal({ open, onClose, onCreate, defaultName }) {
  if (!open) return null;

  let input = defaultName;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="
        bg-white dark:bg-zinc-900
        p-6 rounded-2xl shadow-xl w-96
        border dark:border-white/10
        "
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          Create New Chat 💬
        </h2>

        <input
          defaultValue={defaultName}
          onChange={(e) => (input = e.target.value)}
          className="
          w-full p-3 rounded-xl border
          bg-gray-100 dark:bg-white/10
          outline-none mb-4
          "
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-white/10"
          >
            Cancel
          </button>

          <button
            onClick={() => onCreate(input)}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white"
          >
            Create
          </button>
        </div>
      </motion.div>
    </div>
  );
}
