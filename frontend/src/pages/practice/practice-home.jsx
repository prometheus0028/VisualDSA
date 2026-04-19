import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

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

  // ✅ SCROLL TOP ON LOAD
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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
      <section className="pt-44 pb-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* 🔙 BACK */}
          <div className="flex justify-start mb-6">
            <button
              onClick={() => navigate('/get-started')}
              className="px-5 py-2 rounded-full bg-blue-400 text-white dark:bg-blue-500 dark:text-black text-sm font-semibold hover:scale-105 transition"
            >
              ← Back
            </button>
          </div>

          {/* TITLE */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-6xl font-extrabold mb-6 text-green-500 dark:text-blue-400"
          >
            Practice Arena
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16"
          >
            Take structured AI-powered tests designed to evaluate your DSA
            skills under real conditions and improve strategically.
          </motion.p>

          {/* FEATURES */}
          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={i}
                className="
                  p-7 rounded-3xl
                  bg-white/50 dark:bg-white/5
                  border dark:border-white/10
                  shadow-md
                  hover:scale-105 transition
                  text-left
                "
              >
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
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
            onClick={() => navigate('/practice/select')}
            className="px-10 py-3 rounded-full bg-blue-400 text-white dark:bg-blue-500 dark:text-black text-sm font-semibold hover:scale-105 transition"
          >
            Select Topic
          </motion.button>
        </div>
      </section>
    </div>
  );
}
