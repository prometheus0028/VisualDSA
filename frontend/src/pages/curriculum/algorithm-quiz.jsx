import { useParams } from 'react-router-dom';
import { curriculumData } from '../../data/curriculum-data';
import QuizSection from '../../components/algorithm/quiz-section';

export default function AlgorithmQuiz() {
  const { categoryId, algoId } = useParams();

  const category = curriculumData.find((c) => c.id === categoryId);
  const algorithm = category?.algorithms?.find((a) => a.id === algoId);

  if (!algorithm)
    return (
      <div className="pt-28 sm:pt-36 md:pt-40 text-center px-4">Not Found</div>
    );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24 space-y-10 sm:space-y-16 overflow-x-hidden">
      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center px-2">
        {algorithm.title} Quiz
      </h1>

      {/* QUIZ */}
      <QuizSection questions={algorithm.quiz || []} />
    </div>
  );
}
