const db = require('../config/db');

// Get all cycles
exports.getCycles = (req, res) => {
  const query = "SELECT * FROM cycles";

  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ message: err.message });

    res.status(200).json(results);
  });
};

// Get single cycle
exports.getCycleById = (req, res) => {
  const query = "SELECT * FROM cycles WHERE id = ?";

  db.query(query, [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ message: err.message });

    if (results.length === 0) {
      return res.status(404).json({ message: "Cycle not found" });
    }

    res.status(200).json(results[0]);
  });
};

// Create cycle
exports.createCycle = (req, res) => {
  const { name, type, price, range, speed, img } = req.body;

  const query = `
    INSERT INTO cycles (name, type, price, range_km, speed, img)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [name, type, price, range, speed, img], (err, result) => {
    if (err) return res.status(400).json({ message: err.message });

    res.status(201).json({ message: "Cycle added" });
  });
};