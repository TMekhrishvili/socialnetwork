const express = require('express');
const { signup } = require('./auth.controller');
const validateInput = require('./auth.validation');

const router = express.Router();

router.get('/', (req, res) => res.send('hal'));
router.post('/sign-up', validateInput('register'), signup);

module.exports = router;
