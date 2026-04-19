import { useParams } from 'react-router-dom';
import { curriculumData } from '../../data/curriculum-data';
import QuizSection from '../../components/algorithm/quiz-section';

export default function AlgorithmQuiz() {
  const { categoryId, algoId } = useParams();

  const category = curriculumData.find((c) => c.id === categoryId);
  const algorithm = category?.algorithms?.find((a) => a.id === algoId);

  if (!algorithm) return <div className="pt-40 text-center">Not Found</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 pt-40 pb-24 space-y-16">
      <h1 className="text-4xl font-bold text-center">{algorithm.title} Quiz</h1>

      <QuizSection questions={algorithm.quiz || []} />
    </div>
  );
}
