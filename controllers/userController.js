const User = require('../models/User.js');

// Update user details
exports.updateUser = async (req, res) => {
  const { mobile, email, name, dob, address, country, state, city } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { mobile: mobile }, // Search by mobile number
      { email, name, dob, address, country, state, city }, // Update details
      { new: true, upsert: true } // Return the updated document or insert if not found
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
