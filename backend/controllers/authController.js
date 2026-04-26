const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db'); // ✅ use MySQL connection

// REGISTER
exports.register = (req, res) => {
  const { email, password } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).json({ error: err.message });

    const query = "INSERT INTO users (email, password) VALUES (?, ?)";

    db.query(query, [email, hashedPassword], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      res.json({ message: "User registered" });
    });
  });
};

// LOGIN
exports.login = (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM users WHERE email = ?";

  db.query(query, [email], async (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    if (results.length === 0) {
      return res.status(400).json({ error: "User not found" });
    }

    const user = results[0];

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ error: "Wrong password" });
    }

    const token = jwt.sign({ id: user.id }, "secretkey", {
      expiresIn: "1d"
    });

    res.json({ token });
  });
};