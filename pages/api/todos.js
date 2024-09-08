import { supabase } from '../../lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { data, error } = await supabase.from('todos').select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
  } else if (req.method === 'POST') {
    const { title, dueDate, priority, userId } = req.body;
    const { data, error } = await supabase
      .from('todos')
      .insert([{ title, due_date: dueDate, priority, user_id: userId, completed: false }])
      .single();
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
  }
}