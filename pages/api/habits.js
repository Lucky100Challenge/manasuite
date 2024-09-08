import { supabase } from '../../lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { data, error } = await supabase.from('habits').select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
  } else if (req.method === 'POST') {
    const { title, frequency, userId } = req.body;
    const { data, error } = await supabase
      .from('habits')
      .insert([{ title, frequency, user_id: userId, streak: 0 }])
      .single();
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
  }
}