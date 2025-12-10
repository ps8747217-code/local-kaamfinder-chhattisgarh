const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware');

// GET /api/users/profile
router.get('/profile', authMiddleware, userController.getProfile);

// PUT /api/users/profile
router.put('/profile', authMiddleware, userController.updateProfile);

// DELETE /api/users/account
router.delete('/account', authMiddleware, userController.deleteAccount);

module.exports = router;
