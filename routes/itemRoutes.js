const express = require('express');
const { createItem, getItemById, filterItems } = require('../controllers/itemsController');

const router = express.Router();

router.post('/', createItem);
router.get('/:id', getItemById);
router.get('/filter', filterItems);

module.exports = router; // Export the router
