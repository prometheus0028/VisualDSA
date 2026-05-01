/* eslint-disable react-hooks/set-state-in-effect */
import { useNavigate } from 'react-router-dom';
import { curriculumData } from '../../data/curriculum-data';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import DeviceRestrictionModal from '../../components/modals/device-restriction-modal';

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function TopicSelection() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    // 🔥 BLOCK ON PAGE LOAD
    if (window.innerWidth < 1024) {
      setShowModal(true);
    }
  }, []);

  // 🔥 DEVICE CHECK
  const isMobileOrTablet = () => {
    return window.innerWidth < 1024;
  };

  const handleSelect = (topic) => {
    if (isMobileOrTablet()) {
      setShowModal(true);
      return;
    }

    navigate('/practice/quiz', { state: { topic } });
  };

  return (
    <div className="bg-[#f5f1e8] dark:bg-zinc-900 min-h-screen text-black dark:text-white">
      <section className="pt-32 sm:pt-40 md:pt-44 pb-20 sm:pb-24 md:pb-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* BACK */}
          <div className="flex justify-start mb-6">
            <button
              onClick={() => navigate('/practice')}
              className="px-4 sm:px-5 py-2 rounded-full bg-blue-400 text-white dark:bg-blue-500 dark:text-black text-xs sm:text-sm font-semibold hover:scale-105 transition"
            >
              ← Back
            </button>
          </div>

          {/* TITLE */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 sm:mb-6 text-green-500 dark:text-blue-400"
          >
            Select Topic
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-10 sm:mb-12 md:mb-16 max-w-2xl mx-auto px-2"
          >
            Choose a topic and begin your adaptive test. Questions will be
            randomly selected from a structured dataset.
          </motion.p>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {curriculumData.map((cat, i) => (
              <motion.div
                key={cat.id}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={i}
                onClick={() => handleSelect(cat.id)}
                className="
                  p-5 sm:p-6 md:p-7 rounded-3xl cursor-pointer
                  bg-white/50 dark:bg-white/5
                  border dark:border-white/10
                  transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:scale-105 sm:hover:scale-110
                  hover:-translate-y-2 sm:hover:-translate-y-3
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
                  text-left
                "
              >
                <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                  {cat.title}
                </h2>

                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {cat.description.slice(0, 110)}...
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 REUSABLE MODAL */}
      <DeviceRestrictionModal
        open={showModal}
        onClose={() => {
          setShowModal(false);
          navigate('/practice');
        }}
        message="Tests are only available on laptop or desktop devices to ensure a proper exam environment, fullscreen enforcement, and fair evaluation. Kindly switch to a laptop to continue."
      />
    </div>
  );
}
