const Item = require('../models/itemModel');

// Create Item
exports.createItem = async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get Item by ID
exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Filter Items
exports.filterItems = async (req, res) => {
  const { email, expiryDate, insertDate, quantity } = req.query;
  try {
    const filter = {};
    if (email) filter.email = email;
    if (expiryDate) filter.expiryDate = { $gte: new Date(expiryDate) };
    if (insertDate) filter.insertDate = { $gte: new Date(insertDate) };
    if (quantity) filter.quantity = { $gte: parseInt(quantity) };
    const items = await Item.find(filter);
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
