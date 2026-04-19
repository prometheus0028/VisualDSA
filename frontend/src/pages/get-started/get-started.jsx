import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';

import curriculumSvg from '../../assets/illustrations/curriculum.svg';
import practiceSvg from '../../assets/illustrations/practice.svg';
import aiAnimation from '../../assets/animations/ai.json';
import { useAuthStore } from '../../store/auth.store';

export default function GetStarted() {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  /* ================= PREMIUM SCROLL PROGRESS ================= */

  const { scrollYProgress } = useScroll();

  const backgroundY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -200]),
    { stiffness: 40, damping: 20 },
  );

  const handleProtectedNav = (path) => {
    if (!user) {
      navigate('/login-required', {
        state: { from: path }, // 🔥 remember where user wanted to go
      });

      return;
    }

    navigate(path);
  };

  return (
    <div
      className="
      snap-y snap-mandatory
      bg-gradient-to-br bg-[#f5f1e8]
      dark:bg-black dark:text-white text-gray-900
      transition-colors duration-500
      overflow-x-hidden
      "
    >
      {/* ================= CURRICULUM ================= */}
      <section
        className="
        snap-start min-h-screen flex items-center px-10 relative
       bg-gradient-to-r bg-[#f5f1e8]
        dark:from-zinc-800 dark:to-zinc-900
        "
      >
        <SectionLayout
          title="Structured Curriculum"
          description="Explore a carefully crafted roadmap covering searching, sorting, trees, graphs, and dynamic programming. Each algorithm includes visualization, complexity breakdowns, pseudocode, and multi-language code."
          buttonText="Explore Curriculum"
          onClick={() => navigate('/curriculum')}
          image={<ParallaxImage src={curriculumSvg} />}
        />
        <WaveDivider />
      </section>

      {/* ================= AI TUTOR ================= */}
      <section
        className="
        snap-start min-h-screen flex items-center px-10 relative
       bg-gradient-to-r bg-blue-50
        dark:from-zinc-800 dark:to-zinc-900
        "
      >
        <SectionLayout
          reverse
          title="AI-Powered Tutor"
          description="Submit your solutions and receive intelligent feedback on logical flaws, edge cases, and time complexity. The AI adapts to your performance and guides your improvement journey."
          buttonText="Try AI Tutor"
          onClick={() => handleProtectedNav('/ai-tutor')}
          image={<ParallaxLottie animationData={aiAnimation} />}
        />
        <WaveDivider />
      </section>

      {/* ================= PRACTICE ================= */}
      <section
        className="
        snap-start min-h-screen flex items-center px-10 relative
       bg-gradient-to-r bg-[#ede7f6]
        dark:from-zinc-800 dark:to-zinc-900
        "
      >
        <SectionLayout
          title="Practice & Interview Tests"
          description="Simulate real interview environments with adaptive quizzes, debugging challenges, and coding problems. Track performance analytics and improve weak areas strategically."
          buttonText="Start Practicing"
          onClick={() => handleProtectedNav('/practice')}
          image={<ParallaxImage src={practiceSvg} />}
        />
      </section>
    </div>
  );
}

/* ================= SECTION LAYOUT ================= */

function SectionLayout({
  title,
  description,
  buttonText,
  onClick,
  image,
  reverse,
}) {
  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
      {reverse && image}

      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl font-bold mb-6">{title}</h2>

        <p className="text-gray-700 dark:text-gray-400 mb-8 leading-relaxed">
          {description}
        </p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClick}
          className="
          px-8 py-3 rounded-full text-sm font-semibold
          bg-black text-white
          dark:bg-white dark:text-black
          transition
          "
        >
          {buttonText}
        </motion.button>
      </motion.div>

      {!reverse && image}
    </div>
  );
}

/* ================= PARALLAX IMAGE ================= */

function ParallaxImage({ src }) {
  const { scrollY } = useScroll();
  const y = useSpring(useTransform(scrollY, [0, 1000], [0, -120]), {
    stiffness: 50,
    damping: 20,
  });

  return (
    <motion.div
      style={{ y }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <img src={src} alt="" className="w-full max-w-md mx-auto" />
    </motion.div>
  );
}

/* ================= PARALLAX LOTTIE ================= */

function ParallaxLottie({ animationData }) {
  const { scrollY } = useScroll();
  const y = useSpring(useTransform(scrollY, [0, 1000], [0, -120]), {
    stiffness: 50,
    damping: 20,
  });

  return (
    <motion.div
      style={{ y }}
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Lottie animationData={animationData} loop />
    </motion.div>
  );
}

/* ================= WAVE DIVIDER ================= */

function WaveDivider() {
  return (
    <div className="absolute bottom-0 left-0 w-full pointer-events-none">
      <svg viewBox="0 0 1440 120" className="w-full">
        <path
          fill="#ffffff"
          className="dark:fill-black"
          d="M0,64L80,74.7C160,85,320,107,480,112C640,117,800,107,960,85.3C1120,64,1280,32,1360,16L1440,0V120H0Z"
        />
      </svg>
    </div>
  );
}
