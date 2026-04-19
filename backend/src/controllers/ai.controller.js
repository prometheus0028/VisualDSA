import { generateAIResponse } from '../services/openai.service.js';

export const simpleChat = async (req, res) => {
  const { message } = req.body;

  try {
    const reply = await generateAIResponse([
      { role: 'user', content: message },
    ]);

    res.json({ reply });
  } catch (err) {
    res.status(500).json({ error: 'AI failed' });
  }
};
