const express = require('express');
const connectDB = require('./config/db');

// Import routes
const itemRoutes = require('./routes/itemRoutes');
const clockRoutes = require('./routes/clockRoutes');

const app = express();

// Middleware
app.use(express.json()); // Body parser to parse JSON requests

// Connect to the database
connectDB();

// Use routes
app.use('/api/items', itemRoutes);
app.use('/api/clock-in', clockRoutes);

// Error handling
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

// Set the port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
