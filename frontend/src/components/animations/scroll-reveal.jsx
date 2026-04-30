import { motion } from 'framer-motion';

export default function ScrollReveal({
  children,
  delay = 0,
  y = 60, // 🔥 customizable
  scale = 0.95, // 🔥 subtle by default
  duration = 0.7, // 🔥 faster & smoother
  disabled = false, // 🔥 control toggle
}) {
  if (disabled) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: '-80px' }} // 🔥 slightly earlier trigger
      style={{ willChange: 'transform, opacity' }} // 🔥 performance boost
    >
      {children}
    </motion.div>
  );
}
