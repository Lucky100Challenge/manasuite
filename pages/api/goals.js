import { supabase } from '../../lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { data, error } = await supabase.from('goals').select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
  } else if (req.method === 'POST') {
    const { title, isLongTerm, userId } = req.body;
    const { data, error } = await supabase
      .from('goals')
      .insert([{ title, is_long_term: isLongTerm, user_id: userId, progress: 0 }])
      .single();
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
  }
}