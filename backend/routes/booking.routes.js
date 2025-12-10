const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking.controller');
const authMiddleware = require('../middleware/auth.middleware');

// POST /api/bookings
router.post('/', authMiddleware, bookingController.createBooking);

// GET /api/bookings
router.get('/', authMiddleware, bookingController.getBookings);

// GET /api/bookings/:id
router.get('/:id', authMiddleware, bookingController.getBookingById);

// PUT /api/bookings/:id/status
router.put('/:id/status', authMiddleware, bookingController.updateBookingStatus);

// POST /api/bookings/:id/review
router.post('/:id/review', authMiddleware, bookingController.addReview);

module.exports = router;
