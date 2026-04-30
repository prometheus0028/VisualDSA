import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAuthStore } from '../../store/auth.store';
import { getAISwot, getSwotHistory } from '../../services/swot.service';

import TopicAnalysis from './topic-analysis';

export default function Swot() {
  const { user } = useAuthStore();

  const [swot, setSwot] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    loadCachedFirst();
    fetchLatest();
  }, [user]);

  useEffect(() => {
    const handleUpdate = () => {
      fetchLatest(true);
    };

    window.addEventListener('test_submitted', handleUpdate);

    return () => {
      window.removeEventListener('test_submitted', handleUpdate);
    };
  }, []);

  const loadCachedFirst = () => {
    try {
      const cached = JSON.parse(localStorage.getItem('swot_cache'));

      if (cached) {
        setSwot(cached);
        setLoading(false);
      }
    } catch (err) {
      console.error('Cache error:', err);
    }
  };

  const fetchLatest = async (force = false) => {
    try {
      if (!force) setLoading(true);

      const [swotRes, historyRes] = await Promise.all([
        getAISwot(user.id),
        getSwotHistory(user.id),
      ]);

      if (swotRes) {
        setSwot(swotRes);
        localStorage.setItem('swot_cache', JSON.stringify(swotRes));
      }

      setHistory(historyRes || []);
    } catch (err) {
      console.error('SWOT load error:', err);
    } finally {
      setLoading(false);
    }
  };

  const isEmpty = !swot || swot.empty;

  const boxBase =
    'relative p-5 sm:p-6 md:p-8 rounded-2xl backdrop-blur-xl border overflow-hidden transition hover:scale-[1.02]';

  const defaultSwot = {
    strengths: ['Start solving problems to discover your strengths'],
    weaknesses: ['Practice needed to identify weak areas'],
    opportunities: ['Follow a structured DSA roadmap inside VisualDSA'],
    threats: ['Inconsistency may slow your progress'],
    roadmap: [
      'Solve 2 problems daily',
      'Focus on arrays & strings first',
      'Gradually move to trees, graphs, DP',
    ],
  };

  const raw = isEmpty ? defaultSwot : swot;

  const display = {
    strengths: Array.isArray(raw.strengths) ? raw.strengths : [],
    weaknesses: Array.isArray(raw.weaknesses) ? raw.weaknesses : [],
    opportunities: Array.isArray(raw.opportunities) ? raw.opportunities : [],
    threats: Array.isArray(raw.threats) ? raw.threats : [],
    roadmap: Array.isArray(raw.roadmap)
      ? raw.roadmap
      : typeof raw.roadmap === 'string'
        ? [raw.roadmap]
        : [],
  };

  if (loading && !swot)
    return (
      <div className="text-center mt-16 sm:mt-20">
        Analyzing your progress...
      </div>
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full space-y-10 sm:space-y-12 md:space-y-16 px-2 sm:px-4"
    >
      {/* EMPTY */}
      {isEmpty && (
        <div className="text-center text-sm sm:text-base text-gray-500">
          No analysis yet — start practicing to unlock insights
        </div>
      )}

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {/* STRENGTHS */}
        <div
          className={`${boxBase} bg-green-100/80 dark:bg-green-500/10 border-green-300 dark:border-green-500/20`}
        >
          <div className="absolute text-6xl sm:text-7xl md:text-8xl opacity-10 top-4 right-4 sm:right-6">
            S
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-green-600 mb-3 sm:mb-4">
            Strengths
          </h3>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
            {display.strengths.map((s, i) => (
              <li key={i}>✔ {s}</li>
            ))}
          </ul>
        </div>

        {/* OPPORTUNITIES */}
        <div
          className={`${boxBase} bg-blue-100/80 dark:bg-blue-500/10 border-blue-300 dark:border-blue-500/20`}
        >
          <div className="absolute text-6xl sm:text-7xl md:text-8xl opacity-10 top-4 right-4 sm:right-6">
            O
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-3 sm:mb-4">
            Opportunities
          </h3>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
            {display.opportunities.map((s, i) => (
              <li key={i}>💡 {s}</li>
            ))}
          </ul>
        </div>

        {/* WEAKNESSES */}
        <div
          className={`${boxBase} bg-yellow-100/80 dark:bg-yellow-500/10 border-yellow-300 dark:border-yellow-500/20`}
        >
          <div className="absolute text-6xl sm:text-7xl md:text-8xl opacity-10 top-4 right-4 sm:right-6">
            W
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-yellow-600 mb-3 sm:mb-4">
            Weaknesses
          </h3>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
            {display.weaknesses.map((s, i) => (
              <li key={i}>⚠ {s}</li>
            ))}
          </ul>
        </div>

        {/* THREATS */}
        <div
          className={`${boxBase} bg-red-100/80 dark:bg-red-500/10 border-red-300 dark:border-red-500/20`}
        >
          <div className="absolute text-6xl sm:text-7xl md:text-8xl opacity-10 top-4 right-4 sm:right-6">
            T
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-red-600 mb-3 sm:mb-4">
            Threats
          </h3>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
            {display.threats.map((s, i) => (
              <li key={i}>⚠ {s}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* ROADMAP */}
      <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-300/20">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
          AI Learning Roadmap
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm">
          {display.roadmap.map((r, i) => (
            <div
              key={i}
              className="p-3 sm:p-4 rounded-xl bg-white/50 dark:bg-white/5"
            >
              {r}
            </div>
          ))}
        </div>
      </div>

      {/* TOPIC ANALYSIS */}
      {!isEmpty && <TopicAnalysis />}

      {/* HISTORY */}
      {history.length > 0 && (
        <div className="mt-6 sm:mt-10 px-2">
          <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center">
            Progress Evolution
          </h2>

          <div className="space-y-3 sm:space-y-4 max-w-3xl mx-auto">
            {history.slice(0, 5).map((h, i) => (
              <div
                key={i}
                className="p-3 sm:p-4 rounded-xl bg-white/50 dark:bg-white/5 border"
              >
                <p className="text-xs text-gray-500 mb-2">
                  {new Date(h.created_at).toLocaleDateString()}
                </p>

                <p className="text-xs sm:text-sm">
                  Strengths: {h.strengths?.join(', ') || '—'}
                </p>

                <p className="text-xs sm:text-sm">
                  Weaknesses: {h.weaknesses?.join(', ') || '—'}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
