const { db } = require('../config/firebase.config');

exports.getAllCategories = async (req, res) => {
  try {
    const categoriesSnapshot = await db.collection('categories')
      .where('isActive', '==', true)
      .orderBy('order', 'asc')
      .get();

    const categories = [];
    categoriesSnapshot.forEach(doc => categories.push(doc.data()));

    res.json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const categoryDoc = await db.collection('categories').doc(id).get();
    
    if (!categoryDoc.exists) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }

    res.json({ success: true, data: categoryDoc.data() });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
