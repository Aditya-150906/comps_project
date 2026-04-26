const express = require('express');
const router = express.Router();
const cycleController = require('../controllers/cycleController');

// GET all cycles
router.get('/', cycleController.getCycles);

// GET single cycle
router.get('/:id', cycleController.getCycleById);

// POST new cycle
router.post('/', cycleController.createCycle);

module.exports = router;
