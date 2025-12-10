const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment.controller');
const authMiddleware = require('../middleware/auth.middleware');

// POST /api/payments/create-order
router.post('/create-order', authMiddleware, paymentController.createOrder);

// POST /api/payments/verify
router.post('/verify', authMiddleware, paymentController.verifyPayment);

// POST /api/payments/subscription
router.post('/subscription', authMiddleware, paymentController.createSubscription);

module.exports = router;
