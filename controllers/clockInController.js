// Example of clockInController.js

// Assuming you're using Mongoose or a similar library
const ClockInRecord = require('../models/clockInModel');

// Create Clock-In Record
exports.createClockIn = async (req, res) => {
  try {
    const newClockIn = new ClockInRecord(req.body);
    const savedClockIn = await newClockIn.save();
    res.status(201).json(savedClockIn);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get Clock-In Record by ID
exports.getClockInById = async (req, res) => {
  try {
    const clockInRecord = await ClockInRecord.findById(req.params.id);
    if (!clockInRecord) return res.status(404).json({ message: 'Record not found' });
    res.status(200).json(clockInRecord);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Filter Clock-In Records
exports.filterClockIn = async (req, res) => {
  try {
    const { email, location, insertDateTime } = req.query;
    let query = {};

    if (email) query.email = email;
    if (location) query.location = location;
    if (insertDateTime) query.insertDateTime = { $gt: new Date(insertDateTime) };

    const records = await ClockInRecord.find(query);
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export all controller functions
