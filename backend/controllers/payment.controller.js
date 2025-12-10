const Razorpay = require('razorpay');
const crypto = require('crypto');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.createOrder = async (req, res) => {
  try {
    const { amount, currency = 'INR' } = req.body;
    
    const options = {
      amount: amount * 100, // Convert to paise
      currency,
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    res.json({ 
      success: true, 
      data: order 
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    
    const sign = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest('hex');

    if (razorpay_signature === expectedSign) {
      res.json({ 
        success: true, 
        message: 'Payment verified successfully' 
      });
    } else {
      res.status(400).json({ 
        success: false, 
        message: 'Invalid signature' 
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createSubscription = async (req, res) => {
  try {
    const { plan } = req.body;
    
    const planAmounts = {
      silver: 99,
      gold: 199,
    };

    const amount = planAmounts[plan];
    if (!amount) {
      return res.status(400).json({ success: false, message: 'Invalid plan' });
    }

    const options = {
      amount: amount * 100,
      currency: 'INR',
      receipt: `sub_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    res.json({ success: true, data: order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
