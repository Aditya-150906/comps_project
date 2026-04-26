require('dotenv').config();
require('./config/db'); // ✅ MySQL connection

const express = require('express');
const cors = require('cors');

const cycleRoutes = require('./routes/cycles');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// Routes
app.use('/api/cycles', cycleRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});