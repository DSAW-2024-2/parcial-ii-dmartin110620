const express = require('express');
const { login, getWeather } = require('../controller/weatherController');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/login', login);
router.get('/weather', authenticateToken, getWeather);

module.exports = router;