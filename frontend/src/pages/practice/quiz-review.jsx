/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function QuizReview() {
  const navigate = useNavigate();

  const [result, setResult] = useState(null);
  const [reviewData, setReviewData] = useState(null);
  const [showReview, setShowReview] = useState(false);

  const [aiFeedback, setAiFeedback] = useState(null);
  const [loadingAI, setLoadingAI] = useState(true);

  // ================= LOAD =================
  useEffect(() => {
    window.scrollTo({ top: 0 });

    const res = JSON.parse(localStorage.getItem('quiz_result'));
    const data = JSON.parse(localStorage.getItem('quiz_review_data'));
    const ai = JSON.parse(localStorage.getItem('quiz_ai_feedback'));

    setResult(res);
    setReviewData(data);

    if (ai) {
      setAiFeedback(ai);
    } else {
      setAiFeedback({
        feedback: 'AI feedback not available. Please try again.',
      });
    }

    setLoadingAI(false);
  }, []);

  if (!result || !reviewData) {
    return (
      <div className="pt-40 text-center text-red-500">
        No result found. Submit a test first.
      </div>
    );
  }

  const { sections, answers } = reviewData;

  // ================= COUNT =================
  const mcqCorrect = sections.mcq.filter(
    (q, i) => answers[`mcq-${i}`] === q.answer,
  ).length;

  const debugCorrect = sections.debug.filter((q, i) => {
    const user = answers[`debug-${i}`] || [];
    return q.blanks.every((valid, idx) =>
      valid.some(
        (v) =>
          v.replace(/\s/g, '').toLowerCase() ===
          (user[idx] || '').replace(/\s/g, '').toLowerCase(),
      ),
    );
  }).length;

  // ================= AI RENDER =================
  const renderAI = () => {
    if (!aiFeedback) return null;

    // ✅ STRING fallback
    if (typeof aiFeedback === 'string') {
      return <p className="whitespace-pre-line">{aiFeedback}</p>;
    }

    return (
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        {aiFeedback.feedback && (
          <p className="whitespace-pre-line">{aiFeedback.feedback}</p>
        )}

        {aiFeedback.strengths?.length > 0 && (
          <div>
            <h4 className="font-semibold text-green-500">Strengths</h4>
            <ul className="list-disc ml-5">
              {aiFeedback.strengths.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        )}

        {aiFeedback.weaknesses?.length > 0 && (
          <div>
            <h4 className="font-semibold text-red-500">Weaknesses</h4>
            <ul className="list-disc ml-5">
              {aiFeedback.weaknesses.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </div>
        )}

        {aiFeedback.opportunities?.length > 0 && (
          <div>
            <h4 className="font-semibold text-blue-500">Opportunities</h4>
            <ul className="list-disc ml-5">
              {aiFeedback.opportunities.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </div>
        )}

        {aiFeedback.threats?.length > 0 && (
          <div>
            <h4 className="font-semibold text-yellow-500">Threats</h4>
            <ul className="list-disc ml-5">
              {aiFeedback.threats.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        )}

        {aiFeedback.roadmap?.length > 0 && (
          <div>
            <h4 className="font-semibold text-purple-500">Roadmap</h4>
            <ul className="list-disc ml-5">
              {aiFeedback.roadmap.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  // ================= REVIEW =================
  const renderReview = () => (
    <div className="space-y-8 text-left">
      {/* MCQ */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-blue-500">MCQ Review</h3>

        {sections.mcq.map((q, i) => {
          const user = answers[`mcq-${i}`];

          return (
            <div
              key={i}
              className="mb-4 p-4 rounded-xl bg-white/50 dark:bg-white/5 border"
            >
              <p className="font-medium mb-3">
                Q{i + 1}. {q.question}
              </p>

              {q.options.map((opt, idx) => {
                const isCorrect = idx === q.answer;
                const isUser = idx === user;

                return (
                  <div
                    key={idx}
                    className={`p-2 rounded mb-1
                      ${isCorrect ? 'bg-green-500 text-white' : ''}
                      ${isUser && !isCorrect ? 'bg-red-500 text-white' : ''}
                      ${
                        !isCorrect && !isUser
                          ? 'bg-gray-100 dark:bg-white/10'
                          : ''
                      }`}
                  >
                    {opt}
                  </div>
                );
              })}

              <div className="mt-3 text-sm">
                <b>Your Attempt:</b>{' '}
                {user !== undefined ? q.options[user] : 'Not Attempted'}
              </div>

              <div className="text-sm text-green-600">
                <b>Correct Answer:</b> {q.options[q.answer]}
              </div>
            </div>
          );
        })}
      </div>

      {/* DEBUG */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-blue-500">
          Debug Review
        </h3>

        {sections.debug.map((q, i) => {
          const user = answers[`debug-${i}`] || [];

          return (
            <div
              key={i}
              className="mb-6 p-4 rounded-xl bg-white/50 dark:bg-white/5 border"
            >
              <p className="font-medium mb-2">
                Q{i + 1}. {q.problem}
              </p>

              <div className="bg-black text-green-400 p-3 rounded mb-3 font-mono text-sm">
                {q.code.map((line, idx) => (
                  <div key={idx}>{line.replace(/___/g, '____')}</div>
                ))}
              </div>

              <div>
                <b>Your Answers:</b>
                {q.blanks.map((_, idx) => (
                  <p key={idx}>
                    Blank {idx + 1}: {user[idx] || 'Not Attempted'}
                  </p>
                ))}
              </div>

              <div className="text-green-500 mt-2">
                <b>Correct Answers:</b>
                {q.blanks.map((b, idx) => (
                  <p key={idx}>
                    Blank {idx + 1}: {b.join(' / ')}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="bg-[#f5f1e8] dark:bg-zinc-900 min-h-screen text-black dark:text-white">
      <section className="pt-44 pb-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-start mb-6">
            <button
              onClick={() => navigate('/practice')}
              className="px-5 py-2 rounded-full bg-blue-500 text-white text-sm"
            >
              ← Back
            </button>
          </div>

          <motion.h1 className="text-5xl font-extrabold mb-6 text-green-500">
            Test Review
          </motion.h1>

          <div className="p-8 rounded-3xl bg-white/50 dark:bg-white/5 border mb-10">
            <h2 className="text-2xl font-semibold mb-3">Your Score</h2>

            <p className="text-4xl font-bold text-blue-500">
              {result.totalScore} / {result.maxScore}
            </p>

            <div className="mt-4 text-sm text-gray-600">
              MCQ Correct: {mcqCorrect} / {sections.mcq.length}
            </div>

            <div className="text-sm text-gray-600">
              Debug Correct: {debugCorrect} / {sections.debug.length}
            </div>

            <button
              onClick={() => setShowReview(!showReview)}
              className="mt-6 px-6 py-2 bg-black text-white rounded-xl"
            >
              {showReview ? 'Hide Answers' : 'Check Your Answers'}
            </button>
          </div>

          {showReview && renderReview()}

          {!showReview && (
            <div className="p-8 rounded-3xl bg-white/50 dark:bg-white/5 border text-left mb-10">
              <h3 className="text-xl font-semibold mb-4">🤖 AI Feedback</h3>

              {loadingAI ? <p>Analyzing your performance...</p> : renderAI()}
            </div>
          )}

          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate('/practice')}
              className="px-6 py-2 bg-gray-300 dark:bg-white/10 rounded-xl"
            >
              Try Another Test
            </button>

            <button
              onClick={() => navigate('/dashboard')}
              className="px-6 py-2 bg-blue-500 text-white rounded-xl"
            >
              View Dashboard
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
