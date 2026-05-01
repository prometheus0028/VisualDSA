import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import DeviceRestrictionModal from '../../components/modals/device-restriction-modal';

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function PracticeHome() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // 🔥 DEVICE DETECTION (mobile + tablet)
  const isMobileOrTablet = () => {
    return window.innerWidth < 1024; // < laptop
  };

  const handleStart = () => {
    if (isMobileOrTablet()) {
      setShowModal(true);
      return;
    }

    navigate('/practice/select');
  };

  const features = [
    {
      title: '⏱ Timed Tests',
      desc: 'Simulate real interview conditions with a strict 1.5 hour timer.',
    },
    {
      title: '🧠 AI Feedback',
      desc: 'Get personalized feedback and improvement suggestions.',
    },
    {
      title: '📊 Analytics',
      desc: 'Track accuracy, speed, and performance trends.',
    },
    {
      title: '💻 Coding + Debugging',
      desc: 'Solve real-world coding and debugging problems.',
    },
    {
      title: '🎯 Smart Questions',
      desc: 'Questions adapt to your strengths and weaknesses.',
    },
    {
      title: '📈 SWOT Report',
      desc: 'Detailed strengths, weaknesses, and roadmap after test.',
    },
  ];

  return (
    <div className="bg-[#f5f1e8] dark:bg-zinc-900 min-h-screen text-black dark:text-white">
      <section className="pt-32 sm:pt-40 md:pt-44 pb-20 sm:pb-24 md:pb-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* BACK */}
          <div className="flex justify-start mb-6">
            <button
              onClick={() => navigate('/get-started')}
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
            Practice Arena
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 px-2"
          >
            Take structured AI-powered tests designed to evaluate your DSA
            skills under real conditions and improve strategically.
          </motion.p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-14">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={i}
                className="
                  p-5 sm:p-6 md:p-7 rounded-3xl
                  bg-white/50 dark:bg-white/5
                  border dark:border-white/10
                  shadow-md
                  hover:scale-105 transition
                  text-left
                "
              >
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  {f.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            onClick={handleStart}
            className="px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 rounded-full bg-blue-400 text-white dark:bg-blue-500 dark:text-black text-xs sm:text-sm font-semibold hover:scale-105 transition"
          >
            Select Topic
          </motion.button>
        </div>
      </section>

      {/* 🔥 REUSABLE MODAL */}
      <DeviceRestrictionModal
        open={showModal}
        onClose={() => setShowModal(false)}
        message="Tests can only be attempted on laptop or desktop devices for the best experience, and fair evaluation. Kindly switch to a desktop device to continue."
      />
    </div>
  );
}
