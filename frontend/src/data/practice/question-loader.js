import { practiceData } from './index';

// ================= SHUFFLE =================
function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

// ================= LOAD QUESTIONS =================
export function loadQuestions(topic) {
  const topicData = practiceData[topic];

  if (!topicData) {
    console.error('Invalid topic:', topic);
    return { mcq: [], debug: [] };
  }

  let allMCQ = [];
  let allDebug = [];

  // ================= FLATTEN =================
  Object.entries(topicData).forEach(([subtopicName, subtopic]) => {
    if (subtopic.mcq) {
      const tagged = subtopic.mcq.map((q) => ({
        ...q,
        subtopic: subtopicName, // 🔥 NEW (non-breaking)
      }));
      allMCQ.push(...tagged);
    }

    if (subtopic.debug) {
      const tagged = subtopic.debug.map((q) => ({
        ...q,
        subtopic: subtopicName, // 🔥 NEW
      }));
      allDebug.push(...tagged);
    }
  });

  // ================= SAFETY CHECK =================
  if (allMCQ.length === 0 || allDebug.length === 0) {
    console.error('Dataset empty for topic:', topic);
  }

  // ================= SHUFFLE =================
  const shuffledMCQ = shuffleArray(allMCQ);
  const shuffledDebug = shuffleArray(allDebug);

  // ================= PICK =================
  return {
    mcq: shuffledMCQ.slice(0, 20),
    debug: shuffledDebug.slice(0, 8),
  };
}
