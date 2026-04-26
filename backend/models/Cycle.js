const mongoose = require('mongoose');

const cycleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  range: {
    type: String,
    default: 'N/A'
  },
  speed: {
    type: String,
    default: 'N/A'
  },
  img: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Cycle', cycleSchema);
