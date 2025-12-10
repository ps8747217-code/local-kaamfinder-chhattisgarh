const { auth, db } = require('../config/firebase.config');

exports.sendOTP = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    
    // In production, use Twilio or Firebase Auth to send OTP
    // For now, return success
    
    res.json({ 
      success: true, 
      message: 'OTP sent successfully' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

exports.verifyOTP = async (req, res) => {
  try {
    const { phoneNumber, otp, name, userType } = req.body;
    
    // Verify OTP logic here
    // Create or update user in Firestore
    
    const userRef = db.collection('users').doc();
    await userRef.set({
      id: userRef.id,
      name,
      phone: phoneNumber,
      userType: userType || 'customer',
      createdAt: new Date().toISOString(),
      isActive: true,
    });

    res.json({ 
      success: true, 
      message: 'OTP verified successfully',
      userId: userRef.id
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

exports.logout = async (req, res) => {
  try {
    res.json({ 
      success: true, 
      message: 'Logged out successfully' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};
