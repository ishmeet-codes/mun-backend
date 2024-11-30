const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');

// Get all committees
router.get('/', async (req, res) => {
  const { data, error } = await supabase.from('committees').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Add a committee
router.post('/', async (req, res) => {
  const { name, description } = req.body;
  const { data, error } = await supabase.from('committees').insert([{ name, description }]);
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
});

module.exports = router;
