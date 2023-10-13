const express = require('express');
const router = express.Router();

// Import controllers
const { handleMSSV, handleIndex, handleMessage } = require('../controllers/controller');

// Routes
router.get('/', handleIndex);
router.get('/:MSSV/:id', handleMSSV);
router.post('/:MSSV/:id', handleMSSV);
router.get('/message/:id?', handleMessage);

module.exports = router;