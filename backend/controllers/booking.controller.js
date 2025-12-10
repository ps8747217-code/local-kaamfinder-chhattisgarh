const { db } = require('../config/firebase.config');

exports.createBooking = async (req, res) => {
  try {
    const customerId = req.user.uid;
    const bookingData = req.body;
    
    const bookingRef = db.collection('bookings').doc();
    await bookingRef.set({
      ...bookingData,
      id: bookingRef.id,
      customerId,
      status: 'pending',
      paymentStatus: 'pending',
      createdAt: new Date().toISOString(),
    });

    res.json({ 
      success: true, 
      message: 'Booking created successfully',
      bookingId: bookingRef.id
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const userId = req.user.uid;
    const { userType } = req.query;
    
    const field = userType === 'worker' ? 'workerId' : 'customerId';
    const bookingsSnapshot = await db.collection('bookings')
      .where(field, '==', userId)
      .orderBy('createdAt', 'desc')
      .get();

    const bookings = [];
    bookingsSnapshot.forEach(doc => bookings.push(doc.data()));

    res.json({ success: true, data: bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    const bookingDoc = await db.collection('bookings').doc(id).get();
    
    if (!bookingDoc.exists) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    res.json({ success: true, data: bookingDoc.data() });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const updates = {
      status,
      updatedAt: new Date().toISOString(),
    };

    if (status === 'completed') {
      updates.completedAt = new Date().toISOString();
    }

    await db.collection('bookings').doc(id).update(updates);

    res.json({ success: true, message: 'Booking status updated' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.addReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating, review } = req.body;
    
    await db.collection('bookings').doc(id).update({
      rating,
      review,
      updatedAt: new Date().toISOString(),
    });

    res.json({ success: true, message: 'Review added successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
