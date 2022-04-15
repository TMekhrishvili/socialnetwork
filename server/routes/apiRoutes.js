const express = require('express');
const {
    signUp
} = require('../controllers/apiController');

const router = express.Router();
router.post('/sign-up', signUp);

module.exports.apiRoutes = router;
