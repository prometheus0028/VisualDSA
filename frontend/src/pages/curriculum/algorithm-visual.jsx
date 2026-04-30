import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { curriculumData } from '../../data/curriculum-data';
import VisualizerEngine from '../../components/visualizer/visualizer-engine';
import PseudocodePanel from '../../components/algorithm/pseudocode-panel';

export default function AlgorithmVisual() {
  const { categoryId, algoId } = useParams();
  const navigate = useNavigate();

  const category = curriculumData.find((c) => c.id === categoryId);
  const algorithm = category?.algorithms?.find((a) => a.id === algoId);

  const [selectedLang, setSelectedLang] = useState('js');

  if (!algorithm)
    return (
      <div className="pt-28 sm:pt-36 md:pt-40 text-center px-4">Not Found</div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24 space-y-12 sm:space-y-20 overflow-x-hidden">
      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center px-2">
        {algorithm.title} Visualization
      </h1>

      {/* VISUALIZER + PSEUDOCODE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-start">
        {/* PSEUDOCODE */}
        <div className="p-4 sm:p-6 rounded-3xl backdrop-blur-xl bg-white/60 dark:bg-white/5 border h-[400px] sm:h-[500px] md:h-[600px] overflow-auto">
          <PseudocodePanel algorithm={algorithm} />
        </div>

        {/* VISUALIZER */}
        <div className="p-4 sm:p-6 rounded-3xl backdrop-blur-xl bg-white/60 dark:bg-white/5 border h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
          <VisualizerEngine algorithm={algorithm} />
        </div>
      </div>

      {/* LANGUAGE SWITCHER */}
      {algorithm.code && (
        <div className="space-y-4 sm:space-y-6">
          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-2">
            {Object.keys(algorithm.code).map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLang(lang)}
                className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm transition whitespace-nowrap
                  ${
                    selectedLang === lang
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-white/10 dark:text-gray-300'
                  }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* CODE BLOCK */}
          <div className="p-4 sm:p-6 rounded-2xl bg-black text-green-400 font-mono text-xs sm:text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap sm:whitespace-pre">
              {algorithm.code[selectedLang]}
            </pre>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="text-center">
        <button
          onClick={() => navigate('../quiz')}
          className="
            px-6 sm:px-8
            py-2.5 sm:py-3
            rounded-full
            bg-blue-600 text-white
            text-sm sm:text-base
            font-semibold
            hover:scale-105 transition
          "
        >
          Take Quiz
        </button>
      </div>
    </div>
  );
}
