const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const invoiceRoutes = require('./invoiceRoutes');

// Health check route
router.get('/', (req, res) => {
  res.status(200).json({ message: 'API is running' });
});

router.use('/auth', authRoutes);
router.use('/invoices', invoiceRoutes);

module.exports = router;
