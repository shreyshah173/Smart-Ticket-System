const User = require('../models/User.js');

// Create a new user
exports.createUser = async (req, res) => {
  const { mobile, email, name, dob, address, country, state, city } = req.body;

  try {
    // Check if a user with the same mobile or email already exists
    const existingUser = await User.findOne({ $or: [{ mobile }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this mobile or email already exists' });
    }

    // Create a new user
    const user = new User({
      mobile,
      email,
      name,
      dob,
      address,
      country,
      state,
      city,
    });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update existing user details
exports.updateUser = async (req, res) => {
  const { mobile, email, name, dob, address, country, state, city } = req.body;

  try {
    // Find the user by mobile number and update details
    const user = await User.findOneAndUpdate(
      { mobile: mobile }, // Search by mobile number
      { email, name, dob, address, country, state, city }, // Update details
      { new: true } // Return the updated document
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
