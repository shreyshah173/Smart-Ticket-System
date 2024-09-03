const express = require('express');
const router = express.Router();
const { createUser, updateUser } = require('../controllers/userController');

router.post('/create-user', createUser);
router.post('/update-user', updateUser);  // Add this line for the update route

module.exports = router;
