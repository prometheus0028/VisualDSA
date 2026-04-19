import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // ✅ NEW

import { curriculumData } from '../../data/curriculum-data';
import AlgorithmCard from '../../components/curriculum/algorithm-card';

export default function Curriculum() {
  const navigate = useNavigate(); // ✅ NEW

  // ===============================
  // DETECT IF COMING BACK FROM ALGO
  // ===============================
  const fromAlgo = sessionStorage.getItem('fromAlgo') === 'true';

  const [activeCategory, setActiveCategory] = useState(() => {
    if (fromAlgo) {
      return localStorage.getItem('activeCategory') || curriculumData[0].id;
    }
    return curriculumData[0].id;
  });

  const current = curriculumData.find((cat) => cat.id === activeCategory);

  // ===============================
  // CLEAR FLAG AFTER USE
  // ===============================
  useEffect(() => {
    sessionStorage.removeItem('fromAlgo');
  }, []);

  // ===============================
  // SAVE CATEGORY
  // ===============================
  useEffect(() => {
    localStorage.setItem('activeCategory', activeCategory);
  }, [activeCategory]);

  // ===============================
  // ALWAYS SCROLL TO TOP
  // ===============================
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, [activeCategory]);

  // ===============================
  // CATEGORY SWITCH HANDLER
  // ===============================
  const handleCategoryChange = (id) => {
    setActiveCategory(id);

    localStorage.removeItem('activeSubsection');

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-[#f5f1e8] dark:bg-zinc-900 text-gray-900 dark:text-white transition-colors duration-500 min-h-screen">
      <section className="pt-44 pb-28 px-6">
        {/* 🔥 NEW CTA BUTTON */}
        <div className="max-w-7xl mx-auto mb-6 flex justify-start">
          <button
            onClick={() => navigate('/get-started')}
            className="mb-8 px-6 py-2 rounded-full bg-blue-400 text-white dark:bg-blue-500 dark:text-black text-sm font-semibold hover:scale-105 transition"
          >
            ← Back
          </button>
        </div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-extrabold text-center mb-6 dark:text-blue-400 text-green-400"
        >
          Curriculum
        </motion.h1>

        {/* DESCRIPTION */}
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto">
          Learn Data Structures & Algorithms the right way — concept first,
          intuition next, implementation last.
        </p>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {curriculumData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-9 py-2.5 rounded-full text-xs font-medium transition
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
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-gray-700 dark:text-gray-400">
            {current.description}
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="max-w-7xl mx-auto">
          {current.subsections ? (
            current.subsections.map((sub) => (
              <div key={sub.id} className="mb-20">
                <h2 className="text-2xl font-semibold mb-8 text-center">
                  {sub.title}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
