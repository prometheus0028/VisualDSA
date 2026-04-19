import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function AlgorithmCard({ categoryId, algo, subsectionId }) {
  const navigate = useNavigate();

  const difficultyColor = {
    Beginner:
      'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    Intermediate:
      'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    Advanced: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
  };

  const handleClick = () => {
    // ===============================
    // STORE STATE (IMPORTANT FIX)
    // ===============================
    localStorage.setItem('activeCategory', categoryId);

    if (subsectionId) {
      localStorage.setItem('activeSubsection', subsectionId);
    }

    sessionStorage.setItem('fromAlgo', 'true');

    // ===============================
    // NAVIGATE
    // ===============================
    navigate(`/curriculum/${categoryId}/${algo.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
      onClick={handleClick}
      className="cursor-pointer p-4 rounded-xl backdrop-blur-xl 
                 bg-white/60 dark:bg-white/5 
                 border border-gray-200 dark:border-white/10 
                 shadow-sm hover:shadow-md
                 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-base font-semibold">{algo.title}</h3>

        <span
          className={`text-[10px] px-2 py-0.5 rounded-full ${
            difficultyColor[algo.difficulty]
          }`}
        >
          {algo.difficulty}
        </span>
      </div>

      <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
        Time: {algo.time}
      </p>

      <p className="text-xs text-gray-600 dark:text-gray-400">
        Space: {algo.space}
      </p>
    </motion.div>
  );
}
