const express = require('express');
const router = express.Router();
const { updateUser } = require('../controllers/userController');

router.post('/update-user', updateUser);

module.exports = router;
