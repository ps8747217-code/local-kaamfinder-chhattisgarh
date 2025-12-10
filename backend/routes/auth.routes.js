const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// POST /api/auth/send-otp
router.post('/send-otp', authController.sendOTP);

// POST /api/auth/verify-otp
router.post('/verify-otp', authController.verifyOTP);

// POST /api/auth/logout
router.post('/logout', authController.logout);

module.exports = router;
