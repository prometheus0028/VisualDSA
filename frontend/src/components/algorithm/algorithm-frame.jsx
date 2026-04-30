import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ComplexityChart from './complexity-chart';
import VisualizerEngine from '../visualizer/visualizer-engine';
import PseudocodePanel from './pseudocode-panel';
import QuizSection from './quiz-section';
import { motion, AnimatePresence } from 'framer-motion';

export default function AlgorithmFrame({ algorithm }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('concept');
  const [selectedLang, setSelectedLang] = useState('js');
  const [highlightLine, setHighlightLine] = useState(null);

  if (!algorithm) {
    return <div className="pt-40 text-center">Loading...</div>;
  }

  return (
    <div className="bg-[#f5f1e8] dark:bg-zinc-900 min-h-screen transition-colors duration-500 text-gray-900 dark:text-white">
      {/* BACK BUTTON */}
      <div className="pt-28 sm:pt-32 px-4 sm:px-6 max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/curriculum')}
          className="mb-6 sm:mb-8 px-5 sm:px-6 py-2 rounded-full bg-blue-400 text-white dark:bg-blue-500 dark:text-black text-xs sm:text-sm font-semibold hover:scale-105 transition"
        >
          ← Back to Curriculum
        </button>
      </div>

      {/* TAB BUTTONS */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-10 sm:mb-12 px-4">
        {['concept', 'visualization', 'practice'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition
              ${
                activeTab === tab
                  ? 'bg-blue-400 text-white dark:bg-blue-500 dark:text-black'
                  : 'bg-white/50 dark:bg-white/5 border'
              }`}
          >
            {tab === 'concept' && 'Concept'}
            {tab === 'visualization' && 'Visualization & Code'}
            {tab === 'practice' && 'Practice'}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* ================= CONCEPT TAB ================= */}
        {activeTab === 'concept' && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 sm:pb-24 space-y-12 sm:space-y-16">
            {/* TITLE */}
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 text-green-500 dark:text-blue-400">
                {algorithm.title}
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                {algorithm.concept}
              </p>
            </div>

            {/* EXAMPLE */}
            {algorithm.example && (
              <div className="space-y-5 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                  {algorithm.example.title}
                </h2>

                <div className="p-5 sm:p-8 rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border space-y-5 sm:space-y-6">
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    {algorithm.example.description}
                  </p>

                  {algorithm.example.walkthrough.map((section, i) => (
                    <div key={i} className="space-y-2 sm:space-y-3">
                      <h3 className="font-semibold">{section.pass}</h3>

                      <ul className="list-disc pl-6 sm:pl-8 space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                        {section.steps.map((step, j) => (
                          <li key={j}>{step}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEPS */}
            {algorithm.steps && (
              <div className="space-y-5 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                  Algorithm Steps
                </h2>

                <div className="p-5 sm:p-8 rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border">
                  <ol className="list-decimal pl-5 sm:pl-6 space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    {algorithm.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
            )}

            {/* COMPLEXITY */}
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                Complexity Analysis
              </h2>
              <ComplexityChart algorithm={algorithm} />
            </div>

            {/* WHEN TO USE */}
            {algorithm.whenToUse && (
              <div className="space-y-5 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  When To Use
                </h2>

                <div className="p-5 sm:p-6 md:p-8 rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border">
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {algorithm.whenToUse}
                  </p>
                </div>
              </div>
            )}

            {/* ADV/DISADV */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {algorithm.advantages && (
                <div className="space-y-4">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                    Advantages
                  </h2>

                  <div className="p-5 sm:p-8 rounded-3xl bg-green-200/70 dark:bg-green-800/20 border">
                    <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                      {algorithm.advantages.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {algorithm.disadvantages && (
                <div className="space-y-4">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                    Disadvantages
                  </h2>

                  <div className="p-5 sm:p-8 rounded-3xl bg-red-200/70 dark:bg-red-800/20 border">
                    <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                      {algorithm.disadvantages.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ================= VISUALIZATION TAB ================= */}
        {activeTab === 'visualization' && (
          <motion.section
            key="visualization"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 sm:pb-24 space-y-12 sm:space-y-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <PseudocodePanel
                algorithm={algorithm}
                activeLine={highlightLine}
              />

              <div className="w-full h-full min-h-[300px]">
                <VisualizerEngine
                  algorithm={algorithm}
                  onStepChange={setHighlightLine}
                />
              </div>
            </div>

            {/* LANGUAGE */}
            <div className="space-y-5 sm:space-y-6">
              <div className="flex flex-wrap gap-2 sm:gap-4">
                {Object.keys(algorithm.code || {}).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLang(lang)}
                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition
                      ${
                        selectedLang === lang
                          ? 'bg-black text-white dark:bg-white dark:text-black'
                          : 'bg-white/50 dark:bg-white/5 border'
                      }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>

              <div className="rounded-2xl overflow-hidden border bg-black text-green-400 font-mono text-xs sm:text-sm shadow-xl">
                <div className="px-4 py-2 bg-zinc-800 text-white text-xs uppercase">
                  {selectedLang}
                </div>
                <pre className="p-4 sm:p-6 overflow-x-auto whitespace-pre-wrap break-words">
                  {algorithm.code?.[selectedLang]}
                </pre>
              </div>
            </div>
          </motion.section>
        )}

        {/* ================= PRACTICE TAB ================= */}
        {activeTab === 'practice' && (
          <motion.section
            key="practice"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="max-w-6xl mx-auto px-4 sm:px-6 pb-28 sm:pb-32"
          >
            <QuizSection
              questions={algorithm.quiz || []}
              onBackToConcept={() => setActiveTab('concept')}
            />
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
