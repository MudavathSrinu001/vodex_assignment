const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  itemName: { type: String, required: true },
  quantity: { type: Number, required: true },
  expiryDate: { type: Date, required: true },
  insertDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Item', itemSchema);
