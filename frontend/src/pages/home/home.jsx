import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import hero from '../../assets/illustrations/hero.svg';
import how from '../../assets/illustrations/how.svg';
import cta from '../../assets/illustrations/cta.svg';
import MagneticButton from '../../components/animations/magnetic-button';
import FAQAccordion from '../../components/animations/faq-accordion';

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Home() {
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  /* ================= HERO PARALLAX ================= */

  const imageY = useSpring(useTransform(scrollY, [0, 500], [0, -120]), {
    stiffness: 60,
    damping: 20,
  });

  const textY = useSpring(useTransform(scrollY, [0, 500], [0, -40]), {
    stiffness: 80,
    damping: 25,
  });

  const features = [
    {
      title: 'Interactive Visualization Engine',
      desc: 'Experience algorithms step-by-step with real-time execution tracing, adjustable speed controls, and visual highlighting of active nodes.',
    },
    {
      title: 'AI-Powered Code Analysis',
      desc: 'Submit code and receive instant feedback on complexity, inefficiencies, and optimization opportunities.',
    },
    {
      title: 'Adaptive Testing System',
      desc: 'Our quiz engine dynamically adjusts difficulty based on your performance patterns.',
    },
    {
      title: 'Comprehensive Curriculum',
      desc: 'Structured roadmap covering searching, sorting, stacks, trees, graphs, and dynamic programming.',
    },
    {
      title: 'Multi-Language Support',
      desc: 'Learn implementations in Java, JavaScript, C, C++, and Python with detailed pseudocode.',
    },
    {
      title: 'Performance Analytics Dashboard',
      desc: 'Track accuracy, detect weak topics, and receive AI-driven revision recommendations.',
    },
  ];

  return (
    <div className="bg-[#f5f1e8] dark:bg-black text-gray-900 dark:text-white transition-colors duration-500 overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[95vh] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center text-white z-10">
          {/* TEXT SIDE */}
          <motion.div style={{ y: textY }}>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-extrabold leading-tight"
            >
              Master Data Structures
              <br />
              Through Interactive Intelligence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 text-lg text-white/90 max-w-xl"
            >
              70+ algorithms, 1000+ practice problems, 5 programming languages,
              and AI-driven feedback.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8"
            >
              <MagneticButton
                onClick={() => navigate('/get-started')}
                className="px-8 py-3 bg-black rounded-full text-sm font-semibold hover:bg-gray-900 text-white"
              >
                Get Started
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* IMAGE SIDE */}
          <motion.div style={{ y: imageY }}>
            <img src={hero} alt="Hero" className="w-full max-w-sm mx-auto" />
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" className="w-full">
            <path
              fill="#f5f1e8"
              className="dark:fill-zinc-900"
              d="M0,64L80,90.7C160,117,320,171,480,170.7C640,171,800,117,960,101.3C1120,85,1280,107,1360,117.3L1440,128V160H0Z"
            />
          </svg>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-14 bg-white dark:bg-black text-center">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-10">
          {['70+', '1000+', '5', 'AI'].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <h3 className="text-3xl font-bold text-green-600 dark:text-green-400">
                {item}
              </h3>
              <p>
                {i === 0
                  ? 'Algorithms'
                  : i === 1
                    ? 'Practice Questions'
                    : i === 2
                      ? 'Coding Languages'
                      : 'Smart Feedback'}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section
        id="features"
        className="py-24 px-6 bg-[#f5f1e8] dark:bg-zinc-900"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, scale: 0.6 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="relative p-8 rounded-3xl backdrop-blur-2xl bg-white/40 dark:bg-white/5 border border-white/30 dark:border-white/10 shadow-xl transition-all duration-100 group overflow-hidden"
            >
              <span className="text-6xl font-bold text-green-800 opacity-50 relative z-10">
                0{i + 1}
              </span>

              <h3 className="text-lg font-semibold mt-4 mb-3 relative z-10">
                {f.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed relative z-10">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= HOW ================= */}
      <section
        id="how"
        className="py-20 px-6 bg-gradient-to-r from-gray-200 to-gray-50 dark:from-zinc-800 dark:to-zinc-900"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <img
            src={how}
            alt="How it works"
            className="w-full max-w-sm mx-auto"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Explore structured algorithm concepts, visualize execution in real
              time, practice through adaptive quizzes, and receive AI-driven
              insights to continuously improve.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-20 px-6 bg-[#f5f1e8] dark:bg-zinc-900">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            Revolutionizing DSA Learning
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            VisualDSA bridges theory and real-world implementation by combining
            visualization, adaptive testing, AI-based analysis, and structured
            learning paths.
          </p>

          <div className="mt-8 flex justify-center">
            <img src={cta} alt="CTA" className="w-full max-w-xs" />
          </div>
        </motion.div>
      </section>

      {/* ================= FAQ ================= */}
      <section
        id="faq"
        className="py-24 bg-gradient-to-r from-gray-200 to-gray-100 dark:from-zinc-900 dark:to-zinc-800"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Frequently Asked Questions
          </h2>

          <FAQAccordion
            items={[
              {
                q: 'What is VisualDSA?',
                a: 'VisualDSA is an AI-powered interactive learning platform designed to help students and developers truly understand data structures and algorithms.',
              },
              {
                q: 'Is it beginner friendly?',
                a: 'Yes. The curriculum progresses from foundational topics to advanced concepts like graphs and dynamic programming.',
              },
              {
                q: 'How does AI assist in learning?',
                a: 'The AI analyzes performance patterns, identifies weak areas, and adapts question difficulty.',
              },
              {
                q: 'Does it support multiple programming languages?',
                a: 'Each algorithm includes pseudocode and implementations in Java, C, C++, and Python.',
              },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
