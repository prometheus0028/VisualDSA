import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';

import curriculumSvg from '../../assets/illustrations/curriculum.svg';
import practiceSvg from '../../assets/illustrations/practice.svg';
import aiAnimation from '../../assets/animations/ai.json';
import { useAuthStore } from '../../store/auth.store';
import Container from '../../components/ui/container';

export default function GetStarted() {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const { scrollYProgress } = useScroll();

  const backgroundY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -200]),
    { stiffness: 40, damping: 20 },
  );

  const handleProtectedNav = (path) => {
    if (!user) {
      navigate('/login-required', {
        state: { from: path },
      });
      return;
    }
    navigate(path);
  };

  return (
    <div
      className="
      snap-y snap-mandatory
      bg-[#f5f1e8] dark:bg-black
      text-gray-900 dark:text-white
      transition-colors duration-500
      overflow-x-hidden
      "
    >
      {/* ================= CURRICULUM ================= */}
      <section className="snap-start min-h-screen flex items-center relative bg-[#f5f1e8] dark:bg-zinc-900">
        <Container>
          <SectionLayout
            title="Structured Curriculum"
            description="Explore a carefully crafted roadmap covering searching, sorting, trees, graphs, and dynamic programming. Each algorithm includes visualization, complexity breakdowns, pseudocode, and multi-language code."
            buttonText="Explore Curriculum"
            onClick={() => navigate('/curriculum')}
            image={<ParallaxImage src={curriculumSvg} />}
          />
        </Container>
        <WaveDivider />
      </section>

      {/* ================= AI TUTOR ================= */}
      <section className="snap-start min-h-screen flex items-center relative bg-blue-50 dark:bg-zinc-900">
        <Container>
          <SectionLayout
            reverse
            title="AI-Powered Tutor"
            description="Submit your solutions and receive intelligent feedback on logical flaws, edge cases, and time complexity. The AI adapts to your performance and guides your improvement journey."
            buttonText="Try AI Tutor"
            onClick={() => handleProtectedNav('/ai-tutor')}
            image={<ParallaxLottie animationData={aiAnimation} />}
          />
        </Container>
        <WaveDivider />
      </section>

      {/* ================= PRACTICE ================= */}
      <section className="snap-start min-h-screen flex items-center relative bg-[#ede7f6] dark:bg-zinc-900">
        <Container>
          <SectionLayout
            title="Practice & Interview Tests"
            description="Simulate real interview environments with adaptive quizzes, debugging challenges, and coding problems. Track performance analytics and improve weak areas strategically."
            buttonText="Start Practicing"
            onClick={() => handleProtectedNav('/practice')}
            image={<ParallaxImage src={practiceSvg} />}
          />
        </Container>
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center w-full">
      {reverse && image}

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          {title}
        </h2>

        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed">
          {description}
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClick}
          className="
          px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm font-semibold
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

  const y = useSpring(useTransform(scrollY, [0, 800], [0, -80]), {
    stiffness: 50,
    damping: 20,
  });

  return (
    <motion.div
      style={{ y }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <img
        src={src}
        alt=""
        className="w-full max-w-[220px] sm:max-w-xs md:max-w-md mx-auto"
      />
    </motion.div>
  );
}

/* ================= PARALLAX LOTTIE ================= */

function ParallaxLottie({ animationData }) {
  const { scrollY } = useScroll();

  const y = useSpring(useTransform(scrollY, [0, 800], [0, -80]), {
    stiffness: 50,
    damping: 20,
  });

  return (
    <motion.div
      style={{ y }}
      className="w-full max-w-[220px] sm:max-w-xs md:max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
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
