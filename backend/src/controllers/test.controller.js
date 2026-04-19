import { processTestSubmission } from '../services/test.service.js';

export const submitTest = async (req, res) => {
  try {
    const { user_id, topic, score, total, correct, wrongMcq, wrongDebug } =
      req.body;

    if (!user_id) {
      return res.status(400).json({ error: 'user_id required' });
    }

    const result = await processTestSubmission({
      user_id,
      topic,
      score,
      total,
      correct,
      wrongMcq,
      wrongDebug,
    });

    res.json({
      success: true,
      ai: result,
    });
  } catch (err) {
    res.status(500).json({ error: 'Test submission failed' });
  }
};
