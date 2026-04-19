import { supabase } from '../config/supabase.js';
import { generateTestFeedback } from './openai.service.js';

export const processTestSubmission = async ({
  user_id,
  topic,
  score,
  total,
  correct,
  conceptStats,
  mistakeStats,
  notAttemptedStats = {}, // 🔥 NEW
  wrongMcq = [],
  wrongDebug = [],
}) => {
  try {
    // ================= TEST HISTORY =================
    const { error: testErr } = await supabase.from('test_history').insert({
      user_id,
      score,
      total,
      created_at: new Date(),
    });

    if (testErr) throw testErr;

    // ================= PRACTICE =================
    const { error: practiceErr } = await supabase
      .from('practice_history')
      .insert({
        user_id,
        topic: topic || 'General',
        score,
        total,
        correct,
        problem_name: `Mock Test - ${topic}`,
        created_at: new Date(),
      });

    if (practiceErr) throw practiceErr;

    // ================= ACTIVITY =================
    const today = new Date().toISOString().split('T')[0];

    const { data: existing } = await supabase
      .from('activity')
      .select('*')
      .eq('user_id', user_id)
      .eq('date', today)
      .maybeSingle();

    if (existing) {
      await supabase
        .from('activity')
        .update({ count: existing.count + 1 })
        .eq('id', existing.id);
    } else {
      await supabase.from('activity').insert({
        user_id,
        date: today,
        count: 1,
        created_at: new Date(),
      });
    }

    // ================= AI =================
    const aiResult = await generateTestFeedback({
      topic,
      score,
      total,
      conceptStats,
      mistakeStats,
      notAttemptedStats, // 🔥 PASS IT HERE
      wrongMcq,
      wrongDebug,
    });

    // ================= AI HISTORY =================
    await supabase.from('ai_history').insert({
      user_id,
      message: 'Test Analysis',
      response: aiResult.feedback,
      created_at: new Date(),
    });

    // ================= SWOT =================
    await supabase.from('swot_history').insert({
      user_id,
      strengths: aiResult.strengths,
      weaknesses: aiResult.weaknesses,
      opportunities: aiResult.opportunities,
      threats: aiResult.threats,
      roadmap: aiResult.roadmap,
      created_at: new Date(),
    });

    return aiResult;
  } catch (err) {
    console.error('Test Service Error:', err);

    return {
      feedback: 'AI feedback unavailable. Try again later.',
      strengths: [],
      weaknesses: [],
      opportunities: [],
      threats: [],
      roadmap: [],
    };
  }
};
