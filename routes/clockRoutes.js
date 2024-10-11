const express = require('express');
const { createClockIn, getClockInById, filterClockIn } = require('../controllers/clockInController');

const router = express.Router();

router.post('/', createClockIn);
router.get('/:id', getClockInById);
router.get('/filter', filterClockIn);

module.exports = router;
