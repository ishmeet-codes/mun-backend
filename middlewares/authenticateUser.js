const supabase = require('../supabaseClient');

const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  const { data: user, error } = await supabase.auth.getUser(token);

  if (error || !user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  req.user = user; // Pass user to next middleware
  next();
};

module.exports = authenticateUser;
