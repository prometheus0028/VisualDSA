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
      <div className="pt-32 px-6 max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/curriculum')}
          className="mb-8 px-6 py-2 rounded-full bg-blue-400 text-white dark:bg-blue-500 dark:text-black text-sm font-semibold hover:scale-105 transition"
        >
          ← Back to Curriculum
        </button>
      </div>

      {/* TAB BUTTONS */}
      <div className="flex justify-center gap-6 mb-12">
        {['concept', 'visualization', 'practice'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition
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
          <section className="max-w-6xl mx-auto px-6 pb-24 space-y-16">
            {/* TITLE */}
            <div className="text-center">
              <h1 className="text-5xl font-extrabold mb-6 text-green-500 dark:text-blue-400">
                {algorithm.title}
              </h1>

              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                {algorithm.concept}
              </p>
            </div>

            {/* ================= HOW DOES IT WORK (SCENARIO) ================= */}
            {algorithm.example && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {algorithm.example.title}
                </h2>

                <div className="p-8 rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border space-y-6">
                  <p className="text-gray-700 dark:text-gray-300">
                    {algorithm.example.description}
                  </p>

                  {algorithm.example.walkthrough.map((section, i) => (
                    <div key={i} className="space-y-3">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {section.pass}
                      </h3>

                      <ul className="list-disc pl-8 space-y-2 text-gray-700 dark:text-gray-300">
                        {section.steps.map((step, j) => (
                          <li key={j}>{step}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ================= ALGORITHM STEPS ================= */}
            {algorithm.steps && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Algorithm Steps
                </h2>

                <div className="p-8 rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border">
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                    {algorithm.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
            )}

            {/* COMPLEXITY */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Complexity Analysis
              </h2>
              <ComplexityChart algorithm={algorithm} />
            </div>

            {/* WHEN TO USE */}
            {algorithm.whenToUse && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  When To Use
                </h2>

                <div className="p-8 rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border">
                  <p className="text-gray-700 dark:text-gray-300">
                    {algorithm.whenToUse}
                  </p>
                </div>
              </div>
            )}

            {/* ADV / DISADV */}
            <div className="grid md:grid-cols-2 gap-8">
              {algorithm.advantages && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Advantages
                  </h2>

                  <div className="p-8 rounded-3xl bg-green-200/70 dark:bg-green-800/20 border">
                    <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
                      {algorithm.advantages.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {algorithm.disadvantages && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Disadvantages
                  </h2>

                  <div className="p-8 rounded-3xl bg-red-200/70 dark:bg-red-800/20 border">
                    <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
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
            className="max-w-7xl mx-auto px-6 pb-24 space-y-16"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <PseudocodePanel
                algorithm={algorithm}
                activeLine={highlightLine}
              />

              <VisualizerEngine
                algorithm={algorithm}
                onStepChange={setHighlightLine}
              />
            </div>

            {/* LANGUAGE SWITCHER */}
            <div className="space-y-6">
              <div className="flex gap-4 flex-wrap">
                {Object.keys(algorithm.code || {}).map((lang) => (
                  <buttonn
                    key={lang}
                    onClick={() => setSelectedLang(lang)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition
                      ${
                        selectedLang === lang
                          ? 'bg-black text-white dark:bg-white dark:text-black'
                          : 'bg-white/50 dark:bg-white/5 border'
                      }`}
                  >
                    {lang.toUpperCase()}
                  </buttonn>
                ))}
              </div>

              <div className="rounded-2xl overflow-hidden border bg-black text-green-400 font-mono text-sm shadow-xl">
                <div className="px-4 py-2 bg-zinc-800 text-white text-xs uppercase">
                  {selectedLang}
                </div>
                <pre className="p-6 overflow-x-auto">
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
            className="max-w-6xl mx-auto px-6 pb-32"
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
