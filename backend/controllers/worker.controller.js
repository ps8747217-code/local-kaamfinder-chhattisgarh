const { db } = require('../config/firebase.config');
const { getDistance } = require('geolib');

exports.getNearbyWorkers = async (req, res) => {
  try {
    const { latitude, longitude, categoryId, radius = 10 } = req.query;
    
    const workersSnapshot = await db.collection('workers')
      .where('isAvailable', '==', true)
      .where('isVerified', '==', true)
      .get();

    const workers = [];
    workersSnapshot.forEach(doc => {
      const worker = doc.data();
      if (worker.location) {
        const distance = getDistance(
          { latitude: parseFloat(latitude), longitude: parseFloat(longitude) },
          { latitude: worker.location.latitude, longitude: worker.location.longitude }
        ) / 1000; // Convert to km

        if (distance <= radius) {
          workers.push({ ...worker, distance: distance.toFixed(2) });
        }
      }
    });

    // Sort by distance
    workers.sort((a, b) => a.distance - b.distance);

    res.json({ success: true, data: workers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getWorkerById = async (req, res) => {
  try {
    const { id } = req.params;
    const workerDoc = await db.collection('workers').doc(id).get();
    
    if (!workerDoc.exists) {
      return res.status(404).json({ success: false, message: 'Worker not found' });
    }

    res.json({ success: true, data: workerDoc.data() });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.registerWorker = async (req, res) => {
  try {
    const userId = req.user.uid;
    const workerData = req.body;
    
    await db.collection('workers').doc(userId).set({
      ...workerData,
      id: userId,
      isVerified: false,
      isAvailable: false,
      rating: 0,
      totalJobs: 0,
      totalReviews: 0,
      createdAt: new Date().toISOString(),
    });

    res.json({ success: true, message: 'Worker registered successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateAvailability = async (req, res) => {
  try {
    const userId = req.user.uid;
    const { isAvailable } = req.body;
    
    await db.collection('workers').doc(userId).update({
      isAvailable,
      updatedAt: new Date().toISOString(),
    });

    res.json({ success: true, message: 'Availability updated' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getEarnings = async (req, res) => {
  try {
    const userId = req.user.uid;
    
    const bookingsSnapshot = await db.collection('bookings')
      .where('workerId', '==', userId)
      .where('status', '==', 'completed')
      .get();

    let totalEarnings = 0;
    const earnings = [];
    
    bookingsSnapshot.forEach(doc => {
      const booking = doc.data();
      totalEarnings += booking.finalPrice || 0;
      earnings.push(booking);
    });

    res.json({ 
      success: true, 
      data: { 
        totalEarnings, 
        completedJobs: earnings.length,
        earnings 
      } 
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
