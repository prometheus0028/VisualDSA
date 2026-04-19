/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAuthStore } from '../../store/auth.store';

import { getTestHistory } from '../../services/history.service';

export default function History() {
  const { user } = useAuthStore();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================= INITIAL LOAD =================
  useEffect(() => {
    if (!user) return;
    load();
  }, [user]);

  // ================= LISTEN FOR TEST SUBMISSION =================
  useEffect(() => {
    const handleUpdate = () => {
      load(); // 🔥 refresh history instantly
    };

    window.addEventListener('test_submitted', handleUpdate);

    return () => {
      window.removeEventListener('test_submitted', handleUpdate);
    };
  }, []);

  const load = async () => {
    try {
      setLoading(true);

      const res = await getTestHistory(user.id);

      setData(res || []);
    } catch (err) {
      console.error('History load error:', err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  // ================= LOADING =================
  if (loading) {
    return (
      <div className="text-center mt-20 text-gray-500">Loading history...</div>
    );
  }

  // ================= EMPTY STATE =================
  if (!data.length) {
    return (
      <div className="text-center mt-20 space-y-4">
        <h2 className="text-lg font-semibold">No test history yet 📊</h2>
        <p className="text-gray-500">
          Solve some problems to track your progress
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Test History 📊</h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {data.map((t) => {
          const accuracy =
            t.total && t.total > 0 ? ((t.score / t.total) * 100).toFixed(0) : 0;

          return (
            <div
              key={t.id} // 🔥 FIX: stable key
              className="p-5 rounded-xl bg-white/60 dark:bg-white/5 border flex justify-between items-center"
            >
              {/* LEFT */}
              <div>
                <p className="font-semibold">
                  {t.topic || t.problem_name || 'General'}
                </p>

                <p className="text-sm text-gray-500">
                  {new Date(t.created_at).toLocaleDateString()}
                </p>
              </div>

              {/* RIGHT */}
              <div className="text-right">
                <p className="font-bold">
                  {t.score} / {t.total}
                </p>

                <p className="text-sm text-gray-500">{accuracy}% accuracy</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
