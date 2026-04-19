import openai from '../config/openaiClient.js';

// ================= GENERATE AI RESPONSE =================
export const generateAIResponse = async (messages, userContext = '') => {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `
You are an expert Data Structures & Algorithms tutor inside VisualDSA platform.
Use emojis. Keep responses clean and structured.

Rules:
- Be clear, structured, and concise
- Encourage thinking
- Prefer step-by-step explanations
- Adapt to user's level
- Stay practical and actionable

User Context:
${userContext}
`,
        },
        ...messages,
      ],
    });

    return completion.choices[0].message.content;
  } catch (err) {
    console.error('OpenAI Error:', err);
    throw new Error('AI failed');
  }
};

// ================= TEST FEEDBACK =================
export const generateTestFeedback = async ({
  topic,
  score,
  total,
  conceptStats = {},
  mistakeStats = {},
  notAttemptedStats = {}, // 🔥 NEW
  wrongMcq = [],
  wrongDebug = [],
}) => {
  try {
    const sampleMcq = wrongMcq.slice(0, 3);
    const sampleDebug = wrongDebug.slice(0, 3);

    const prompt = `
You are an expert DSA mentor inside the VisualDSA platform.

================ CONTEXT =================
- Internal platform (VisualDSA)
- DO NOT suggest external resources
- Only suggest actions inside this platform

================ PERFORMANCE =================
Topic: ${topic}
Score: ${score}/${total}

Concept Mistakes:
${JSON.stringify(conceptStats)}

Not Attempted Concepts (VERY IMPORTANT SIGNAL):
${JSON.stringify(notAttemptedStats)}

Mistake Pattern:
${JSON.stringify(mistakeStats)}

Sample Wrong MCQs:
${JSON.stringify(sampleMcq)}

Sample Wrong Debug:
${JSON.stringify(sampleDebug)}

================ INTERPRETATION RULES =================
- If a concept appears in NOT ATTEMPTED → treat it as LOW CONFIDENCE / AVOIDANCE
- If a concept appears in Concept Mistakes → treat it as WEAK UNDERSTANDING
- Combine both signals to find REAL weak areas
- Prioritize:
  1. Avoided concepts (most important)
  2. Frequently wrong concepts
  3. Mistake patterns (logic / edge cases)

================ INSTRUCTIONS =================
- Identify ONLY top 2–3 weak concepts
- Identify 2–3 strengths
- Identify 1–2 opportunities
- Identify 2–3 threats
- Max 5 roadmap steps
- DO NOT list all mistakes
- DO NOT mention individual questions
- Be VERY SPECIFIC:
  ❌ "practice more"
  ✅ "avoiding dynamic programming problems"
  ✅ "weak in binary search edge cases"

================ OUTPUT =================
Return STRICT JSON:

{
  "strengths": ["..."],
  "weaknesses": ["..."],
  "opportunities": ["..."],
  "threats": ["..."],
  "roadmap": ["..."],
  "feedback": "5-6 line sharp performance summary"
}
`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'You analyze student performance deeply using patterns and behavior signals.',
        },
        { role: 'user', content: prompt },
      ],
    });

    let parsed;

    try {
      const raw = completion.choices[0].message.content;
      const cleaned = raw.replace(/```json|```/g, '').trim();
      parsed = JSON.parse(cleaned);
    } catch {
      parsed = null;
    }

    // 🔥 SMART FALLBACK
    if (!parsed) {
      parsed = {
        strengths: ['Basic understanding present'],
        weaknesses: ['Concept gaps and skipped questions detected'],
        opportunities: ['Practice weak topics inside VisualDSA'],
        threats: ['Avoiding difficult problems'],
        roadmap: [
          'Focus on skipped concepts first',
          'Practice similar problems',
          'Reattempt test',
        ],
        feedback:
          'Your performance shows both incorrect answers and skipped concepts. Focus on improving confidence and accuracy.',
      };
    }

    return parsed;
  } catch (err) {
    console.error('AI Test Feedback Error:', err);
    throw err;
  }
};

// ================= 🔥 SWOT FEEDBACK (NEW) =================
export const generateSwotFeedback = async ({
  activeDays,
  totalActivity,
  strongTopics = [],
  weakTopics = [],
}) => {
  try {
    const prompt = `
You are an expert DSA mentor inside the VisualDSA platform.

================ CONTEXT =================
- Internal platform (VisualDSA)
- DO NOT suggest external platforms (LeetCode, courses, YouTube)
- Only suggest actions inside this platform

================ USER PROFILE =================
Active Days: ${activeDays}
Total Activity: ${totalActivity}

Strong Topics:
${strongTopics.join(', ') || 'None'}

Weak Topics:
${weakTopics.join(', ') || 'None'}

================ ANALYSIS RULES =================
- Strong topics = consistency + accuracy
- Weak topics = low score OR repeated mistakes
- If weakTopics exist → prioritize them heavily
- If no weak topics → suggest depth improvement

================ INSTRUCTIONS =================
- Identify ONLY top 2–3 strengths
- Identify ONLY top 2–3 weaknesses (topic-specific)
- Identify 1–2 opportunities (platform actions)
- Identify 2–3 risks (realistic threats)
- Roadmap: max 4 short steps
- Be specific:
  ❌ "practice more"
  ✅ "weak in recursion problems"
  ✅ "inconsistent in graph algorithms"

================ OUTPUT =================
Return STRICT JSON:

{
  "strengths": ["short"],
  "weaknesses": ["specific topic issue"],
  "opportunities": ["platform-specific action"],
  "threats": ["risk"],
  "roadmap": ["step1", "step2", "step3"],
  "feedback": "4-5 line concise performance summary"
}
`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'You generate concise, high-signal SWOT analysis for learning progress.',
        },
        { role: 'user', content: prompt },
      ],
    });

    let parsed;

    try {
      const raw = completion.choices[0].message.content;
      const cleaned = raw.replace(/```json|```/g, '').trim();
      parsed = JSON.parse(cleaned);
    } catch {
      parsed = null;
    }

    // 🔥 FALLBACK (SMART)
    if (!parsed) {
      parsed = {
        strengths: strongTopics.length
          ? strongTopics.slice(0, 2).map((t) => `Strong in ${t}`)
          : ['Building consistency'],

        weaknesses: weakTopics.length
          ? weakTopics.slice(0, 2).map((t) => `Weak in ${t}`)
          : ['Needs deeper practice'],

        opportunities: ['Practice weak topics inside VisualDSA'],

        threats: ['Inconsistency', 'Avoiding difficult problems'],

        roadmap: [
          'Focus on weakest topics',
          'Practice daily',
          'Reattempt mistakes',
        ],

        feedback:
          'Your progress shows clear strengths but also gaps in weaker areas. Focus on consistency and targeted practice.',
      };
    }

    return parsed;
  } catch (err) {
    console.error('SWOT AI Error:', err);
    throw err;
  }
};
