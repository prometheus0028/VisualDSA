import { supabase } from '../config/supabase.js';
import { generateAIResponse } from '../services/openai.service.js';

// ================= CREATE NEW CHAT =================
export const createChat = async (req, res) => {
  const { user_id, message } = req.body;

  try {
    const { data, error } = await supabase
      .from('chat_history')
      .insert({
        user_id,
        title: message.slice(0, 30),
        messages: [{ role: 'user', content: message }],
      })
      .select()
      .single();

    if (error) throw error;

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create chat' });
  }
};

// ================= GET ALL CHATS =================
export const getChats = async (req, res) => {
  const { user_id } = req.query;

  try {
    const { data } = await supabase
      .from('chat_history')
      .select('*')
      .eq('user_id', user_id)
      .order('created_at', { ascending: false });

    res.json(data || []);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch chats' });
  }
};

// ================= GET SINGLE CHAT =================
export const getChatById = async (req, res) => {
  const { chat_id } = req.params;

  try {
    const { data } = await supabase
      .from('chat_history')
      .select('*')
      .eq('id', chat_id)
      .single();

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch chat' });
  }
};

// ================= HELPER: FORMAT AI RESPONSE =================
const formatAIResponse = (raw) => {
  if (!raw) return [];

  // 🔥 Split into logical sections
  const sections = raw.split('\n\n');

  return sections.map((section) => {
    let content = section.trim();

    // 🔥 Convert markdown → clean UI
    content = content
      .replace(/###/g, '📌') // headings
      .replace(/\*\*/g, '') // remove bold markers
      .replace(/^- /gm, '🔹 ') // bullet points
      .replace(/\n\d+\./g, (match) => '\n' + match); // spacing for numbered lists

    return {
      role: 'assistant',
      content,
    };
  });
};

// ================= SEND MESSAGE =================
export const sendMessage = async (req, res) => {
  const { chat_id, user_id, message } = req.body;

  try {
    // 🔥 GET EXISTING CHAT
    const { data: chat } = await supabase
      .from('chat_history')
      .select('*')
      .eq('id', chat_id)
      .single();

    let messages = chat?.messages || [];

    // 🔥 ADD USER MESSAGE
    messages.push({ role: 'user', content: message });

    // ================= PERSONALIZATION =================
    const { data: practice } = await supabase
      .from('practice_history')
      .select('*')
      .eq('user_id', user_id);

    const topicMap = {};

    practice?.forEach((p) => {
      if (!topicMap[p.topic]) {
        topicMap[p.topic] = { total: 0, correct: 0 };
      }

      topicMap[p.topic].total += p.total || 1;
      topicMap[p.topic].correct += p.correct || 0;
    });

    const weak = [];
    const strong = [];

    Object.keys(topicMap).forEach((t) => {
      const acc = topicMap[t].correct / topicMap[t].total;

      if (acc < 0.5) weak.push(t);
      else if (acc > 0.75) strong.push(t);
    });

    // ================= AI RESPONSE =================
    const aiRawReply = await generateAIResponse(messages, {
      weak,
      strong,
    });

    // 🔥 FORMAT INTO MULTIPLE MESSAGES
    const formattedReplies = formatAIResponse(aiRawReply);

    // 🔥 ADD ALL AI MESSAGES
    messages = [...messages, ...formattedReplies];

    // 🔥 UPDATE CHAT
    await supabase.from('chat_history').update({ messages }).eq('id', chat_id);

    res.json({
      reply: aiRawReply,
      messages,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'AI Tutor failed' });
  }
};

// ================= DELETE CHAT =================
export const deleteChat = async (req, res) => {
  const { id } = req.params;

  try {
    console.log('Deleting chat id:', id);

    const { data, error } = await supabase
      .from('chat_history')
      .delete()
      .eq('id', String(id))
      .select();

    if (error) {
      console.error('❌ Supabase error:', error);
      return res.status(500).json({ error: error.message });
    }

    console.log('Deleted:', data);

    res.json({ success: true, deleted: data });
  } catch (err) {
    console.error('❌ FULL DELETE ERROR:', err);
    res.status(500).json({ error: 'Delete failed' });
  }
};
