/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAuthStore } from '../../store/auth.store';
import { useNavigate } from 'react-router-dom';

import { getActivity, trackActivity } from '../../services/activity.service';

import Heatmap from '../../components/dashboard/heatmap';
import Swot from '../../components/dashboard/swot';
import History from '../../components/dashboard/history';

export default function Dashboard() {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const [tab, setTab] = useState('Consistency');
  const [data, setData] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  const name =
    user?.user_metadata?.name || user?.email?.split('@')[0] || 'User';

  // ================= INITIAL LOAD =================
  useEffect(() => {
    if (!user) return;

    const run = async () => {
      await trackActivity(user.id);
      await loadData();
    };

    run();
  }, [user, refreshKey]);

  // ================= LISTEN FOR TEST COMPLETION =================
  useEffect(() => {
    const handleUpdate = () => {
      setRefreshKey((prev) => prev + 1);
    };

    window.addEventListener('test_submitted', handleUpdate);

    return () => {
      window.removeEventListener('test_submitted', handleUpdate);
    };
  }, []);

  // ================= LOAD ACTIVITY =================
  const loadData = async () => {
    try {
      const res = await getActivity(user.id);
      setData(res || []);
    } catch (err) {
      console.error('Activity load error:', err);
    }
  };

  return (
    <div className="bg-[#f5f1e8] dark:bg-zinc-900 text-gray-900 dark:text-white min-h-screen">
      <section className="pt-28 sm:pt-36 md:pt-44 pb-16 sm:pb-20 md:pb-28 px-4 sm:px-6">
        {/* BACK BUTTON */}
        <div className="max-w-7xl mx-auto mb-6 flex justify-start">
          <button
            onClick={() => navigate('/get-started')}
            className="px-4 sm:px-6 py-2 rounded-full bg-blue-400 text-white dark:bg-blue-500 dark:text-black text-xs sm:text-sm font-semibold hover:scale-105 transition"
          >
            ← Back
          </button>
        </div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-extrabold text-center mb-4 sm:mb-6
            text-green-400 dark:text-green-400
          "
        >
          Dashboard
        </motion.h1>

        {/* DESCRIPTION */}
        <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto px-2">
          Welcome back, <span className="font-semibold">{name}</span>
          <br />
          Stay consistent daily — progress compounds over time.
        </p>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14 px-2">
          {['Consistency', 'SWOT', 'History'].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`
                px-4 sm:px-6 md:px-9
                py-2 sm:py-2.5
                rounded-full text-xs sm:text-sm font-medium transition
                ${
                  tab === t
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-white/10'
                }
              `}
            >
              {t}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto px-1 sm:px-2">
          {tab === 'Consistency' && <Heatmap data={data} />}
          {tab === 'SWOT' && <Swot key={refreshKey} />}
          {tab === 'History' && <History key={refreshKey} />}
        </div>
      </section>
    </div>
  );
}
