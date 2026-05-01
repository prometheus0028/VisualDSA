export default function DeviceRestrictionModal({
  open,
  onClose,
  message = 'This feature is only available on laptop or desktop devices.',
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div
        className="
        w-full max-w-sm
        bg-white dark:bg-zinc-900
        rounded-2xl shadow-xl
        p-6
        text-center space-y-4
        "
      >
        {/* TITLE */}
        <h2 className="text-lg font-semibold text-red-500">Laptop Required</h2>

        {/* MESSAGE */}
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {message}
        </p>

        {/* BUTTON */}
        <button
          onClick={onClose}
          className="
            px-5 py-2 rounded-lg
            bg-blue-500 text-white
            hover:bg-blue-600
            transition
          "
        >
          Understood
        </button>
      </div>
    </div>
  );
}
