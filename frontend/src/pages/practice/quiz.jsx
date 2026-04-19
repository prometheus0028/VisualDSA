import QuizLayout from '../../components/practice/quiz-layout';
import { useLocation } from 'react-router-dom';

export default function Quiz() {
  const { state } = useLocation();
  const topic = state?.topic;

  return <QuizLayout topic={topic} />;
}
