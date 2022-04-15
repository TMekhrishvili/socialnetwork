const express = require('express');
const { postRoutes } = require('./postRoutes');
const { apiRoutes } = require('./apiRoutes');

const router = express.Router();
router.use('/auth', apiRoutes);
router.use('/post', postRoutes);

module.exports.apiRoutes = router;
