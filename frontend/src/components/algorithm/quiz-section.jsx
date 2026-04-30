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
      <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border space-y-5 sm:space-y-6 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Quiz Completed
        </h2>

        <p className="text-base sm:text-lg md:text-xl">
          Your Score: <span className="font-bold">{score}</span> / {total}
        </p>

        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
          Attempted: {attempted} / {total}
        </p>

        <button
          onClick={onBackToConcept}
          className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold"
        >
          Back to Concept
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 px-2 sm:px-0">
      {/* ================= QUESTION NAV ================= */}
      <div className="p-4 sm:p-5 md:p-6 rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border space-y-4">
        <h3 className="font-semibold text-sm sm:text-base">Questions</h3>

        <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-4 gap-2">
          {questions.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-9 sm:h-10 rounded-lg text-xs sm:text-sm font-semibold transition
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

        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 pt-3 sm:pt-4 border-t">
          Attempted: {attempted} / {total}
        </div>
      </div>

      {/* ================= QUESTION PANEL ================= */}
      <div className="md:col-span-3 p-5 sm:p-6 md:p-8 rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border space-y-5 sm:space-y-6">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold">
          Question {current + 1}
        </h2>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          {questions[current].question}
        </p>

        {/* OPTIONS */}
        <div className="space-y-2 sm:space-y-3">
          {questions[current].options.map((opt, i) => (
            <div
              key={i}
              onClick={() => handleSelect(i)}
              className={`p-3 sm:p-4 rounded-xl cursor-pointer border transition text-sm sm:text-base
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
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between pt-4 sm:pt-6">
          <button
            onClick={() => setCurrent((p) => Math.max(p - 1, 0))}
            className="w-full sm:w-auto px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 border text-sm"
          >
            Previous
          </button>

          {current === total - 1 ? (
            <button
              onClick={() => setShowConfirm(true)}
              className="w-full sm:w-auto px-6 py-2 rounded-full bg-blue-600 text-white text-sm"
            >
              Finish Attempt
            </button>
          ) : (
            <button
              onClick={() => setCurrent((p) => Math.min(p + 1, total - 1))}
              className="w-full sm:w-auto px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm"
            >
              Next
            </button>
          )}
        </div>
      </div>

      {/* ================= CONFIRM MODAL ================= */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl shadow-xl space-y-5 sm:space-y-6 w-full max-w-sm text-center">
            <h3 className="text-lg sm:text-xl font-semibold">Submit Quiz?</h3>

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Attempted {attempted} out of {total} questions.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 rounded-full border text-sm"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  setShowConfirm(false);
                  setSubmitted(true);
                }}
                className="px-6 py-2 rounded-full bg-blue-600 text-white text-sm"
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
