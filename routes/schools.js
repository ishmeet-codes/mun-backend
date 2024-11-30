const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');

// Register a school and students
router.post('/', async (req, res) => {
  const { school, students } = req.body;

  // Add school
  const { data: schoolData, error: schoolError } = await supabase.from('schools').insert([school]).select();
  if (schoolError) return res.status(500).json({ error: schoolError.message });

  const schoolId = schoolData[0].id;

  // Add students
  const studentData = students.map((student) => ({ ...student, school_id: schoolId }));
  const { error: studentError } = await supabase.from('students').insert(studentData);

  if (studentError) return res.status(500).json({ error: studentError.message });

  res.status(201).json({ message: 'School and students registered successfully' });
});

module.exports = router;
