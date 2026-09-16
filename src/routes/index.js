const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const payslipRoutes = require('./payslipRoutes');

// Health check route
router.get('/', (req, res) => {
  res.status(200).json({ message: 'API is running' });
});

router.use('/auth', authRoutes);
router.use('/payslips', payslipRoutes);

module.exports = router;
