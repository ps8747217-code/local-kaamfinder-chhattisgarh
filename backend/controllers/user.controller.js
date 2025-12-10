const { db } = require('../config/firebase.config');

exports.getProfile = async (req, res) => {
  try {
    const userId = req.user.uid;
    const userDoc = await db.collection('users').doc(userId).get();
    
    if (!userDoc.exists) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    res.json({ 
      success: true, 
      data: userDoc.data() 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.uid;
    const updates = req.body;
    
    await db.collection('users').doc(userId).update({
      ...updates,
      updatedAt: new Date().toISOString(),
    });

    res.json({ 
      success: true, 
      message: 'Profile updated successfully' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    const userId = req.user.uid;
    
    await db.collection('users').doc(userId).update({
      isActive: false,
      deletedAt: new Date().toISOString(),
    });

    res.json({ 
      success: true, 
      message: 'Account deleted successfully' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};
