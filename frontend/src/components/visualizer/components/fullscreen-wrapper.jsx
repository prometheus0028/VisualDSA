import { useState } from 'react';

export default function FullscreenWrapper({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NORMAL VIEW */}
      <div className="relative w-full">
        {/* ✅ FULLSCREEN BUTTON (ALWAYS VISIBLE) */}
        <button
          onClick={() => setOpen(true)}
          className="absolute top-3 right-3 z-10
            w-9 h-9 flex items-center justify-center
            rounded-full backdrop-blur-md
            bg-white/60 dark:bg-black/40
            border border-white/30 dark:border-white/20
            hover:scale-110 transition"
        >
          ⛶
        </button>

        {children}
      </div>

      {/* POPUP */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          {/* CONTENT BOX (NOT FULL WIDTH) */}
          <div
            className="
            relative
            w-[90%] max-w-5xl
            max-h-[85vh]
            p-6 rounded-2xl
            bg-white/95 dark:bg-[#111]/95
            shadow-2xl
            overflow-auto
          "
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3
                w-9 h-9 flex items-center justify-center
                rounded-full bg-red-500 text-white
                hover:scale-110 transition"
            >
              ✕
            </button>

            {/* CONTENT */}
            {children}
          </div>
        </div>
      )}
    </>
  );
}
