import { useState } from 'react';

export default function QuizSection({ questions, onBackToConcept }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const total = questions.length;
  const attempted = Object.keys(answers).length;

  const handleSelect = (index) => {
    setAnswers({ ...answers, [current]: index });
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) score++;
    });
    return score;
  };

  if (!questions.length) {
    return <div>No quiz available.</div>;
  }

  // ================= SCORE SCREEN =================
  if (submitted) {
    const score = calculateScore();

    return (
      <div className="p-10 rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border space-y-6 text-center">
        <h2 className="text-3xl font-bold">Quiz Completed</h2>

        <p className="text-xl">
          Your Score: <span className="font-bold">{score}</span> / {total}
        </p>

        <p className="text-gray-600 dark:text-gray-400">
          Attempted: {attempted} / {total}
        </p>

        <button
          onClick={onBackToConcept}
          className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold"
        >
          Back to Concept
        </button>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-4 gap-8">
      {/* QUESTION NAVIGATION */}
      <div className="p-6 rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border space-y-4">
        <h3 className="font-semibold">Questions</h3>

        <div className="grid grid-cols-4 gap-2">
          {questions.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-10 rounded-lg text-sm font-semibold transition
                ${
                  current === i
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : answers[i] !== undefined
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 dark:bg-white/10'
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-400 pt-4 border-t">
          Attempted: {attempted} / {total}
        </div>
      </div>

      {/* QUESTION PANEL */}
      <div className="md:col-span-3 p-8 rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border space-y-6">
        <h2 className="text-xl font-semibold">Question {current + 1}</h2>

        <p className="text-lg">{questions[current].question}</p>

        <div className="space-y-3">
          {questions[current].options.map((opt, i) => (
            <div
              key={i}
              onClick={() => handleSelect(i)}
              className={`p-4 rounded-xl cursor-pointer border transition
                ${
                  answers[current] === i
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-gray-200 dark:hover:bg-white/10'
                }`}
            >
              {opt}
            </div>
          ))}
        </div>

        {/* NAV BUTTONS */}
        <div className="flex justify-between pt-6">
          <button
            onClick={() => setCurrent((p) => Math.max(p - 1, 0))}
            className="px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 border"
          >
            Previous
          </button>

          {current === total - 1 ? (
            <button
              onClick={() => setShowConfirm(true)}
              className="px-6 py-2 rounded-full bg-blue-600 text-white"
            >
              Finish Attempt
            </button>
          ) : (
            <button
              onClick={() => setCurrent((p) => Math.min(p + 1, total - 1))}
              className="px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black"
            >
              Next
            </button>
          )}
        </div>
      </div>

      {/* CONFIRM MODAL */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl space-y-6 w-96 text-center">
            <h3 className="text-xl font-semibold">Submit Quiz?</h3>

            <p className="text-gray-600 dark:text-gray-400">
              Attempted {attempted} out of {total} questions.
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 rounded-full border"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  setShowConfirm(false);
                  setSubmitted(true);
                }}
                className="px-6 py-2 rounded-full bg-blue-600 text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
