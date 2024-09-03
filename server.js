const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Parse JSON bodies
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Routes
app.use('/api', require('./routes/userRoutes'));

app.get('/', (req, res) => {
  res.send('Yoo babes');
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
