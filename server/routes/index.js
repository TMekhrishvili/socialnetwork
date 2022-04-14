const express = require('express');
const { postRoutes } = require('./postRoutes');

const router = express.Router();
router.use('/post', postRoutes);

module.exports.apiRoutes = router;
