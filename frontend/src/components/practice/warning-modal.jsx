export default function WarningModal({ message, count, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div
        className="
        relative
        w-full max-w-sm
        max-h-[90vh] overflow-y-auto
        bg-white dark:bg-zinc-900
        p-5 sm:p-6
        rounded-2xl shadow-xl
        text-center space-y-4
        "
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="
            absolute top-3 right-3
            text-gray-400 hover:text-gray-700 dark:hover:text-white
            text-base sm:text-lg
          "
        >
          ✕
        </button>

        <h3 className="text-base sm:text-lg font-semibold text-red-500">
          ⚠️ Warning {count}/5
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {message}
        </p>

        <p className="text-xs text-gray-500">
          Further violations will end the test.
        </p>
      </div>
    </div>
  );
}
