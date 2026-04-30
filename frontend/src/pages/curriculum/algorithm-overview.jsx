import { useParams, useNavigate } from 'react-router-dom';
import { curriculumData } from '../../data/curriculum-data';

export default function AlgorithmOverview() {
  const { categoryId, algoId } = useParams();
  const navigate = useNavigate();

  const category = curriculumData.find((c) => c.id === categoryId);
  const algorithm = category?.algorithms?.find((a) => a.id === algoId);

  if (!algorithm)
    return <div className="pt-32 sm:pt-40 text-center">Not Found</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24 space-y-10 sm:space-y-16 overflow-x-hidden">
      {/* ================= HEADER ================= */}
      <div className="text-center space-y-4 sm:space-y-6 px-2">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold">
          {algorithm.title}
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          {algorithm.concept}
        </p>
      </div>

      {/* ================= HOW IT WORKS ================= */}
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
          How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {algorithm.steps.map((step, i) => (
            <div
              key={i}
              className="p-3 sm:p-4 rounded-xl backdrop-blur-xl bg-white/50 dark:bg-white/5 border border-white/30 dark:border-white/10 text-xs sm:text-sm dark:text-gray-300"
            >
              {step}
            </div>
          ))}
        </div>
      </div>

      {/* ================= ADV / DIS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
        <div className="p-4 sm:p-6 rounded-2xl backdrop-blur-xl bg-white/60 dark:bg-white/5 border">
          <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
            Advantages
          </h3>

          <ul className="list-disc pl-5 space-y-1 sm:space-y-2 text-xs sm:text-sm dark:text-gray-300">
            {algorithm.advantages.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>

        <div className="p-4 sm:p-6 rounded-2xl backdrop-blur-xl bg-white/60 dark:bg-white/5 border">
          <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
            Disadvantages
          </h3>

          <ul className="list-disc pl-5 space-y-1 sm:space-y-2 text-xs sm:text-sm dark:text-gray-300">
            {algorithm.disadvantages.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="text-center pt-2">
        <button
          onClick={() => navigate('visual')}
          className="
            px-6 sm:px-8
            py-2.5 sm:py-3
            rounded-full
            bg-black text-white
            dark:bg-white dark:text-black
            text-sm sm:text-base
            font-semibold
            hover:scale-105 transition
          "
        >
          Go To Visualization
        </button>
      </div>
    </div>
  );
}
