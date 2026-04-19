export default function WarningModal({ message, count, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="relative bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl w-80 text-center space-y-4">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 dark:hover:text-white text-lg"
        >
          ✕
        </button>

        <h3 className="text-lg font-semibold text-red-500">
          ⚠️ Warning {count}/5
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm">{message}</p>

        <p className="text-xs text-gray-500">
          Further violations will end the test.
        </p>
      </div>
    </div>
  );
}
