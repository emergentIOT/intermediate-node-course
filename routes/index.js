const express = require('express');
const authRoutes = require('./auth.route');

const router = express.Router();

/*
ENDPOINT:  api/auth/endpoint/xyz
*/
router.use('/auth', authRoutes);

module.exports = router;