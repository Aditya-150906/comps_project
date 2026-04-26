const Cycle = require('../models/Cycle');

// Get all cycles
exports.getCycles = async (req, res) => {
  try {
    const cycles = await Cycle.find();
    res.status(200).json(cycles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single cycle
exports.getCycleById = async (req, res) => {
  try {
    const cycle = await Cycle.findById(req.params.id);
    if (!cycle) return res.status(404).json({ message: 'Cycle not found' });
    res.status(200).json(cycle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new cycle (for admin/seeding)
exports.createCycle = async (req, res) => {
  const cycle = new Cycle({
    name: req.body.name,
    type: req.body.type,
    price: req.body.price,
    range: req.body.range,
    speed: req.body.speed,
    img: req.body.img
  });

  try {
    const newCycle = await cycle.save();
    res.status(201).json(newCycle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
