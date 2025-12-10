const express = require('express');
const router = express.Router();
const workerController = require('../controllers/worker.controller');
const authMiddleware = require('../middleware/auth.middleware');

// GET /api/workers/nearby
router.get('/nearby', workerController.getNearbyWorkers);

// GET /api/workers/:id
router.get('/:id', workerController.getWorkerById);

// POST /api/workers/register
router.post('/register', authMiddleware, workerController.registerWorker);

// PUT /api/workers/availability
router.put('/availability', authMiddleware, workerController.updateAvailability);

// GET /api/workers/earnings
router.get('/earnings', authMiddleware, workerController.getEarnings);

module.exports = router;
