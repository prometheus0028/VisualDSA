import { useParams, useNavigate } from 'react-router-dom';
import { curriculumData } from '../../data/curriculum-data';

export default function AlgorithmOverview() {
  const { categoryId, algoId } = useParams();
  const navigate = useNavigate();

  const category = curriculumData.find((c) => c.id === categoryId);
  const algorithm = category?.algorithms?.find((a) => a.id === algoId);

  if (!algorithm) return <div className="pt-40 text-center">Not Found</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 pt-40 pb-24 space-y-16">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold">{algorithm.title}</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          {algorithm.concept}
        </p>
      </div>

      {/* HOW IT WORKS (smaller glass cards) */}
      <div>
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {algorithm.steps.map((step, i) => (
            <div
              key={i}
              className="p-4 rounded-xl backdrop-blur-xl bg-white/50 dark:bg-white/5 border border-white/30 dark:border-white/10 text-sm dark:text-gray-300"
            >
              {step}
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/60 dark:bg-white/5 border">
          <h3 className="font-semibold mb-3">Advantages</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm dark:text-gray-300">
            {algorithm.advantages.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/60 dark:bg-white/5 border">
          <h3 className="font-semibold mb-3">Disadvantages</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm dark:text-gray-300">
            {algorithm.disadvantages.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => navigate('visual')}
          className="px-8 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold hover:scale-105 transition"
        >
          Go To Visualization
        </button>
      </div>
    </div>
  );
}
