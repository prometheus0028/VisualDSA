/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTopicAnalysis } from '../../services/analysis.service';
import { useAuthStore } from '../../store/auth.store';
import { motion } from 'framer-motion';

export default function TopicAnalysis() {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  useEffect(() => {
    if (!user) return;
    load();
  }, [user]);

  const load = async () => {
    try {
      const res = await getTopicAnalysis(user.id);
      setData(res);
    } catch (err) {
      console.error('Topic analysis error:', err);
      setData(null);
    }
  };

  // ================= EMPTY =================
  if (!data || data.empty) {
    return (
      <div className="text-center mt-10 space-y-4 px-4">
        <h2 className="text-base sm:text-lg font-semibold">
          Start practicing to unlock insights
        </h2>

        <button
          onClick={() => navigate('/curriculum')}
          className="px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 text-sm"
        >
          Go to Curriculum
        </button>
      </div>
    );
  }

  const weak = Array.isArray(data.weak) ? data.weak : [];
  const strong = Array.isArray(data.strong) ? data.strong : [];
  const recommendations = Array.isArray(data.recommendations)
    ? data.recommendations
    : [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8 sm:space-y-10 mt-8 sm:mt-10 px-2 sm:px-4"
    >
      {/* ================= WEAK ================= */}
      <div>
        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">
          Weak Topics
        </h3>

        {weak.length === 0 ? (
          <p className="text-center text-sm text-gray-500">
            No weak topics detected yet
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {weak.map((t, i) => {
              const accuracy =
                typeof t.accuracy === 'number'
                  ? (t.accuracy * 100).toFixed(0)
                  : 0;

              return (
                <div
                  key={i}
                  className="p-3 sm:p-4 rounded-xl bg-yellow-100 dark:bg-yellow-500/10 border"
                >
                  <p className="font-semibold text-sm sm:text-base">
                    {t.topic || 'General'}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-500">
                    Accuracy: {accuracy}%
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ================= STRONG ================= */}
      <div>
        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">
          Strong Topics
        </h3>

        {strong.length === 0 ? (
          <p className="text-center text-sm text-gray-500">
            No strong topics yet — keep practicing
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {strong.map((t, i) => {
              const accuracy =
                typeof t.accuracy === 'number'
                  ? (t.accuracy * 100).toFixed(0)
                  : 0;

              return (
                <div
                  key={i}
                  className="p-3 sm:p-4 rounded-xl bg-green-100 dark:bg-green-500/10 border"
                >
                  <p className="font-semibold text-sm sm:text-base">
                    {t.topic || 'General'}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-500">
                    Accuracy: {accuracy}%
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ================= RECOMMEND ================= */}
      <div>
        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">
          Recommended Practice
        </h3>

        {recommendations.length === 0 ? (
          <p className="text-center text-sm text-gray-500">
            Practice more to get personalized recommendations
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {recommendations.map((r, i) => (
              <div
                key={i}
                className="p-3 sm:p-4 rounded-xl bg-blue-100 dark:bg-blue-500/10 border text-sm"
              >
                {r}
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-4 sm:mt-6">
          <button
            onClick={() => navigate('/curriculum')}
            className="px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 text-sm"
          >
            Practice Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}
