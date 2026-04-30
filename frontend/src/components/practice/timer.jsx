/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export default function Timer({ duration, onTimeUp }) {
  const [time, setTime] = useState(() => {
    const savedStart = localStorage.getItem('quiz_start');

    if (!savedStart) return duration;

    const elapsed = Math.floor((Date.now() - savedStart) / 1000);
    const remaining = duration - elapsed;

    return remaining > 0 ? remaining : 0;
  });

  useEffect(() => {
    if (!localStorage.getItem('quiz_start')) {
      localStorage.setItem('quiz_start', Date.now());
    }

    const interval = setInterval(() => {
      setTime((t) => {
        if (t <= 1) {
          clearInterval(interval);
          onTimeUp();
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const format = () => {
    const h = Math.floor(time / 3600);
    const m = Math.floor((time % 3600) / 60);
    const s = time % 60;

    return `${h.toString().padStart(2, '0')}:${m
      .toString()
      .padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div
      className="
        flex items-center justify-center
        px-3 sm:px-4 py-1.5 sm:py-2
        rounded-full
        bg-white/70 dark:bg-white/5
        backdrop-blur-md
        border dark:border-white/10
        text-xs sm:text-sm font-semibold
        whitespace-nowrap
      "
    >
      ⏳ {format()}
    </div>
  );
}
