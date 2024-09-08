import { supabase } from '../../lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { data, error } = await supabase.from('journal_entries').select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
  } else if (req.method === 'POST') {
    const { content, userId } = req.body;
    const { data, error } = await supabase
      .from('journal_entries')
      .insert([{ content, user_id: userId, date: new Date() }])
      .single();
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
  }
}