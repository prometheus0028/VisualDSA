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

  if (!algorithm) return <div className="pt-40 text-center">Not Found</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 pt-40 pb-24 space-y-20">
      <h1 className="text-4xl font-bold text-center">
        {algorithm.title} Visualization
      </h1>

      {/* BIGGER ENGINE */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="p-6 rounded-3xl backdrop-blur-xl bg-white/60 dark:bg-white/5 border h-[600px] overflow-auto">
          <PseudocodePanel algorithm={algorithm} />
        </div>

        <div className="p-6 rounded-3xl backdrop-blur-xl bg-white/60 dark:bg-white/5 border h-[600px]">
          <VisualizerEngine algorithm={algorithm} />
        </div>
      </div>

      {/* LANGUAGE SWITCHER */}
      {algorithm.code && (
        <div className="space-y-6">
          <div className="flex justify-center gap-4">
            {Object.keys(algorithm.code).map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLang(lang)}
                className={`px-4 py-2 rounded-full text-sm transition
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

          <div className="p-6 rounded-2xl bg-black text-green-400 font-mono text-sm overflow-x-auto">
            <pre>{algorithm.code[selectedLang]}</pre>
          </div>
        </div>
      )}

      <div className="text-center">
        <button
          onClick={() => navigate('../quiz')}
          className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:scale-105 transition"
        >
          Take Quiz
        </button>
      </div>
    </div>
  );
}
