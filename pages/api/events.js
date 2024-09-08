import { supabase } from '../../lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { data, error } = await supabase.from('calendar_events').select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
  } else if (req.method === 'POST') {
    const { title, date, reminder, userId } = req.body;
    const { data, error } = await supabase
      .from('calendar_events')
      .insert([{ title, date, reminder, user_id: userId }])
      .single();
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
  }
}