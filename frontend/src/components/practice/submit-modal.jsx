import { useState } from 'react';
import { evaluateQuiz } from '../../data/practice/evaluation-engine';
import { submitTest } from '../../services/test.service';
import { useAuthStore } from '../../store/auth.store';

export default function SubmitModal({
  answers,
  sections,
  topic,
  onClose,
  onSubmit,
  forceSubmit = false,
  totalQuestions = 28,
  reason = '',
}) {
  const { user: authUser } = useAuthStore();

  const [submitting, setSubmitting] = useState(false); // 🔥 NEW

  const attempted = Object.keys(answers).length;
  const notAttempted = totalQuestions - attempted;

  // ================= 🔥 AGGREGATION ENGINE =================
  const analyzeMistakes = () => {
    const conceptStats = {};
    const notAttemptedStats = {}; // 🔥 NEW
    const mistakeStats = {
      conceptual: 0,
      logic_error: 0,
      edge_case: 0,
    };

    // ================= MCQ =================
    sections.mcq.forEach((q, i) => {
      const user = answers[`mcq-${i}`];
      const concept = q.concept || 'general';

      // 🔥 NOT ATTEMPTED
      if (user === undefined) {
        notAttemptedStats[concept] = (notAttemptedStats[concept] || 0) + 1;

        mistakeStats.conceptual++;
        return;
      }

      // 🔥 WRONG
      if (user !== q.answer) {
        conceptStats[concept] = (conceptStats[concept] || 0) + 1;
        mistakeStats.conceptual++;
      }
    });

    // ================= DEBUG =================
    sections.debug.forEach((q, i) => {
      const user = answers[`debug-${i}`] || [];
      const concept = q.concept || 'general';

      const filled = user.filter((x) => x && x.trim() !== '').length;

      // 🔥 NOT ATTEMPTED
      if (filled === 0) {
        notAttemptedStats[concept] = (notAttemptedStats[concept] || 0) + 1;

        mistakeStats.conceptual++;
        return;
      }

      const isCorrect = q.blanks.every((valid, idx) =>
        valid.some(
          (v) =>
            v.replace(/\s/g, '').toLowerCase() ===
            (user[idx] || '').replace(/\s/g, '').toLowerCase(),
        ),
      );

      if (!isCorrect) {
        conceptStats[concept] = (conceptStats[concept] || 0) + 1;

        if (filled < q.blanks.length) mistakeStats.edge_case++;
        else mistakeStats.logic_error++;
      }
    });

    return { conceptStats, mistakeStats, notAttemptedStats };
  };

  // ================= WRONG QUESTIONS =================
  const getWrongData = () => {
    const wrongMcq = [];
    const wrongDebug = [];

    sections.mcq.forEach((q, i) => {
      const user = answers[`mcq-${i}`];

      if (user !== q.answer) {
        wrongMcq.push({
          question: q.question,
          concept: q.concept || 'general',
          correctAnswer: q.options[q.answer],
          userAnswer: user !== undefined ? q.options[user] : 'Not Attempted',
        });
      }
    });

    sections.debug.forEach((q, i) => {
      const user = answers[`debug-${i}`] || [];

      const isCorrect = q.blanks.every((valid, idx) =>
        valid.some(
          (v) =>
            v.replace(/\s/g, '').toLowerCase() ===
            (user[idx] || '').replace(/\s/g, '').toLowerCase(),
        ),
      );

      if (!isCorrect) {
        wrongDebug.push({
          problem: q.problem,
          concept: q.concept || 'general',
          userAnswer: user,
          correctAnswer: q.blanks,
        });
      }
    });

    return { wrongMcq, wrongDebug };
  };

  // ================= SUBMIT =================
  const handleSubmit = async () => {
    if (submitting) return; // 🔥 prevent double click

    setSubmitting(true); // 🔥 start loading

    try {
      const result = evaluateQuiz({
        sections,
        answers,
      });

      // ✅ STORE FOR REVIEW PAGE
      localStorage.setItem('quiz_topic', topic || 'General');
      localStorage.setItem('quiz_result', JSON.stringify(result));
      localStorage.setItem(
        'quiz_review_data',
        JSON.stringify({ sections, answers }),
      );

      // 🔥 ANALYSIS
      const { conceptStats, mistakeStats, notAttemptedStats } =
        analyzeMistakes();

      const { wrongMcq, wrongDebug } = getWrongData();

      // ================= USER =================
      let user = authUser;

      if (!user) {
        const authData = JSON.parse(
          localStorage.getItem('supabase.auth.token'),
        );
        user = authData?.user;
      }

      console.log('Submitting Test:', {
        user_id: user?.id,
        topic,
        conceptStats,
        notAttemptedStats,
        mistakeStats,
      });

      if (user?.id) {
        const backendRes = await submitTest({
          user_id: user.id,
          topic: topic || 'General',
          score: result.totalScore || 0,
          total: result.maxScore || 0,
          correct: result.correctCount || 0,

          // 🔥 FINAL PAYLOAD
          conceptStats,
          mistakeStats,
          notAttemptedStats,
          wrongMcq,
          wrongDebug,
        });

        if (backendRes?.ai) {
          localStorage.setItem(
            'quiz_ai_feedback',
            JSON.stringify(backendRes.ai),
          );
        }
      } else {
        console.error('❌ USER ID STILL MISSING');
      }

      window.dispatchEvent(new Event('test_submitted'));

      onSubmit();
    } catch (err) {
      console.error('Submit Failed:', err);

      window.dispatchEvent(new Event('test_submitted'));
      onSubmit();
    } finally {
      setSubmitting(false); // 🔥 stop loading (safety)
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl w-96 shadow-xl">
        <h2 className="text-xl font-semibold mb-4 text-center">
          {forceSubmit ? 'Test Submitted' : 'Submit Test?'}
        </h2>

        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-6">
          <p>Attempted: {attempted}</p>
          <p>Not Attempted: {notAttempted}</p>
        </div>

        {forceSubmit && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {reason === 'Time is up!'
              ? 'Time over. Your test is auto-submitted.'
              : 'Malpractice detected. Your test is auto-submitted.'}
          </p>
        )}

        <div className="flex justify-end gap-3">
          {!forceSubmit && !submitting && (
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border dark:border-white/10"
            >
              Cancel
            </button>
          )}

          <button
            onClick={handleSubmit}
            disabled={submitting}
            className={`px-5 py-2 rounded-lg text-white transition
              ${
                submitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600'
              }`}
          >
            {submitting
              ? 'Submitting... ⏳'
              : forceSubmit
                ? 'View Result'
                : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
}
