const express = require('express');
const router = express.Router();

// @route   GET /api/transactions/test
// @desc    Test transactions route
// @access  Public
router.get('/test', (req, res) => {
  res.json({ message: 'Transactions route is working!' });
});

module.exports = router;
