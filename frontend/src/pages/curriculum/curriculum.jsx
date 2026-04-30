import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { curriculumData } from '../../data/curriculum-data';
import AlgorithmCard from '../../components/curriculum/algorithm-card';

export default function Curriculum() {
  const navigate = useNavigate();

  const fromAlgo = sessionStorage.getItem('fromAlgo') === 'true';

  const [activeCategory, setActiveCategory] = useState(() => {
    if (fromAlgo) {
      return localStorage.getItem('activeCategory') || curriculumData[0].id;
    }
    return curriculumData[0].id;
  });

  const current = curriculumData.find((cat) => cat.id === activeCategory);

  useEffect(() => {
    sessionStorage.removeItem('fromAlgo');
  }, []);

  useEffect(() => {
    localStorage.setItem('activeCategory', activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, [activeCategory]);

  const handleCategoryChange = (id) => {
    setActiveCategory(id);

    localStorage.removeItem('activeSubsection');

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-[#f5f1e8] dark:bg-zinc-900 text-gray-900 dark:text-white transition-colors duration-500 min-h-screen overflow-x-hidden">
      <section className="pt-28 sm:pt-36 md:pt-44 pb-16 sm:pb-24 md:pb-28 px-4 sm:px-6">
        {/* BACK BUTTON */}
        <div className="max-w-7xl mx-auto mb-6 flex justify-start">
          <button
            onClick={() => navigate('/get-started')}
            className="mb-6 sm:mb-8 px-5 sm:px-6 py-2 rounded-full bg-blue-400 text-white dark:bg-blue-500 dark:text-black text-xs sm:text-sm font-semibold hover:scale-105 transition"
          >
            ← Back
          </button>
        </div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-center mb-4 sm:mb-6 dark:text-blue-400 text-green-400"
        >
          Curriculum
        </motion.h1>

        {/* DESCRIPTION */}
        <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto px-2">
          Learn Data Structures & Algorithms the right way — concept first,
          intuition next, implementation last.
        </p>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14 px-2">
          {curriculumData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-5 sm:px-7 md:px-9 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-medium transition whitespace-nowrap
                ${
                  activeCategory === cat.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-white/10'
                }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* CATEGORY DESCRIPTION */}
        <div className="mb-10 sm:mb-16 text-center max-w-3xl mx-auto px-2">
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-400">
            {current.description}
          </p>
        </div>

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto px-1 sm:px-0">
          {current.subsections ? (
            current.subsections.map((sub) => (
              <div key={sub.id} className="mb-12 sm:mb-20">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 sm:mb-8 text-center">
                  {sub.title}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {sub.algorithms.map((algo) => (
                    <AlgorithmCard
                      key={algo.id}
                      categoryId={current.id}
                      algo={algo}
                      subsectionId={sub.id}
                    />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {current.algorithms.map((algo) => (
                <AlgorithmCard
                  key={algo.id}
                  categoryId={current.id}
                  algo={algo}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
