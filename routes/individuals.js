const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');

// Register an individual participant
router.post('/', async (req, res) => {
  const { individual } = req.body;

  const { data, error } = await supabase.from('individuals').insert([individual]);
  if (error) return res.status(500).json({ error: error.message });

  res.status(201).json({ message: 'Individual registered successfully' });
});

module.exports = router;
