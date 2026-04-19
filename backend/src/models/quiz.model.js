import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema(
  {
    topic: String,

    totalScore: Number,
    maxScore: Number,
    percentage: Number,

    mcqScore: Number,
    debugScore: Number,

    wrongMCQ: [
      {
        question: String,
        userAnswer: String,
        correctAnswer: String,
      },
    ],

    wrongDebug: [
      {
        problem: String,
        wrongBlanks: Array,
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.model('quiz', quizSchema);
