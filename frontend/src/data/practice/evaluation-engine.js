// ================= NORMALIZE =================
function normalize(str) {
  return str?.replace(/\s+/g, '').toLowerCase();
}

// ================= CHECK =================
function isCorrect(userInput, validAnswers) {
  const user = normalize(userInput);
  return validAnswers.some((ans) => normalize(ans) === user);
}

// ================= MAIN =================
export function evaluateQuiz({ sections, answers }) {
  let mcqScore = 0;
  let debugScore = 0;

  const wrongMCQ = [];
  const wrongDebug = [];
  const detailed = [];

  // ================= MCQ =================
  sections.mcq.forEach((q, i) => {
    const key = `mcq-${i}`;
    const userAnswer = answers[key];

    const correct = userAnswer === q.answer;

    if (correct) mcqScore += 2;

    if (!correct) {
      wrongMCQ.push({
        question: q.question,
        correctAnswer: q.options[q.answer],
        userAnswer:
          userAnswer !== undefined ? q.options[userAnswer] : 'Not Attempted',

        // 🔥 NEW (CRITICAL FOR AI)
        concept: q.concept || 'unknown',
        subtopic: q.subtopic || 'unknown',
        difficulty: q.difficulty || 'medium',
      });
    }

    detailed.push({
      type: 'mcq',
      question: q.question,
      correct,
      userAnswer,
      correctAnswer: q.answer,
      concept: q.concept,
    });
  });

  // ================= DEBUG =================
  sections.debug.forEach((q, i) => {
    const key = `debug-${i}`;
    const userAnswers = answers[key] || [];

    const blanks = q.blanks;
    const marksPerBlank = 10 / blanks.length;

    let correctCount = 0;
    let wrongBlanks = [];

    blanks.forEach((valid, idx) => {
      const user = userAnswers[idx];

      const correct = isCorrect(user, valid);

      if (correct) correctCount++;
      else {
        wrongBlanks.push({
          index: idx,
          userAnswer: user || 'Empty',
          correctAnswers: valid,
        });
      }
    });

    const score = correctCount * marksPerBlank;
    debugScore += score;

    if (wrongBlanks.length > 0) {
      wrongDebug.push({
        problem: q.problem,
        wrongBlanks,

        // 🔥 NEW (CRITICAL)
        concept: q.concept || 'unknown',
        subtopic: q.subtopic || 'unknown',
        difficulty: q.difficulty || 'medium',
      });
    }

    detailed.push({
      type: 'debug',
      problem: q.problem,
      correct: wrongBlanks.length === 0,
      wrongBlanks,
      concept: q.concept,
    });
  });

  const totalScore = mcqScore + debugScore;
  const maxScore = 120;

  return {
    totalScore,
    maxScore,
    mcqScore,
    debugScore,
    percentage: ((totalScore / maxScore) * 100).toFixed(2),

    wrongMCQ,
    wrongDebug,
    detailed,
  };
}
