/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from 'react';

export default function QuestionCard({
  section,
  index,
  question,
  answer,
  setAnswer,
}) {
  const [localAnswers, setLocalAnswers] = useState([]);

  // ================= RESET =================
  useEffect(() => {
    if (section === 'debug' && question?.blanks) {
      setLocalAnswers(new Array(question.blanks.length).fill(''));
    }
  }, [question, section]);

  const handleBlankChange = (value, i) => {
    const updated = [...localAnswers];
    updated[i] = value;

    setLocalAnswers(updated);
    setAnswer(updated);
  };

  // ================= CLEAN MCQ TEXT =================
  const cleanMCQText = (text) => {
    if (!text) return '';

    return text
      .split('\n')
      .filter((line) => !line.includes('console.log')) // remove console.log
      .join('\n');
  };

  return (
    <div className="p-8 rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border space-y-6 max-w-full overflow-hidden">
      <h2 className="text-xl font-semibold">
        {section.toUpperCase()} Question {index + 1}
      </h2>

      {/* ================= MCQ ================= */}
      {section === 'mcq' && question && (
        <>
          {/* 🔥 SCROLLABLE MCQ QUESTION */}
          <div className="max-h-[220px] overflow-auto pb-10">
            <div className="text-lg text-gray-700 dark:text-gray-300 whitespace-pre-wrap break-words leading-relaxed">
              {cleanMCQText(question.question)}
            </div>
          </div>

          <div className="space-y-3">
            {question.options.map((opt, i) => (
              <div
                key={i}
                onClick={() => setAnswer(i)}
                className={`p-4 rounded-xl cursor-pointer border transition ${
                  answer === i
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-gray-200 dark:hover:bg-white/10'
                }`}
              >
                {opt}
              </div>
            ))}
          </div>
        </>
      )}

      {/* ================= DEBUG ================= */}
      {section === 'debug' && question && (
        <>
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
            {question.problem}
          </p>

          <div className="bg-black text-green-400 p-4 pb-10 rounded-xl text-sm font-mono space-y-2 overflow-auto max-w-full max-h-[400px]">
            {(() => {
              let globalIndex = 0;

              return question.code.map((line, lineIndex) => {
                const parts = line.split('___');

                return (
                  <div
                    key={lineIndex}
                    className="flex flex-wrap items-center break-words"
                  >
                    {parts.map((part, i) => {
                      const currentIndex = globalIndex;

                      if (i < parts.length - 1) {
                        globalIndex++;
                      }

                      return (
                        <span key={i} className="flex items-center flex-wrap">
                          <span className="break-words">{part}</span>

                          {i < parts.length - 1 && (
                            <input
                              value={localAnswers[currentIndex] || ''}
                              onChange={(e) =>
                                handleBlankChange(e.target.value, currentIndex)
                              }
                              className="mx-1 px-2 py-1 w-24 text-black rounded outline-none"
                            />
                          )}
                        </span>
                      );
                    })}
                  </div>
                );
              });
            })()}
          </div>
        </>
      )}
    </div>
  );
}
