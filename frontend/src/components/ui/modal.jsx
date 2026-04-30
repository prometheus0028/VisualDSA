import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export default function Modal({ open, onClose, children }) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 bg-black/60"
          onClick={onClose}
        >
          {/* Subtle Noise Overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

          {/* 🔥 CONTENT WRAPPER FIX */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative z-10
              w-full max-w-lg
              max-h-[90vh]
              overflow-y-auto
              rounded-xl
            "
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
