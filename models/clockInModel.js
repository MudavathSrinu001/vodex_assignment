const mongoose = require('mongoose');

const clockInSchema = new mongoose.Schema({
  email: { type: String, required: true },
  location: { type: String, required: true },
  insertDateTime: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ClockIn', clockInSchema);
