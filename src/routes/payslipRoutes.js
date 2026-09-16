const express = require('express');
const router = express.Router();
const { createPayslip, getPayslips, getPayslipById } = require('../controllers/payslipController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
  .post(protect, admin, createPayslip)
  .get(protect, getPayslips);

router.route('/:id')
  .get(protect, getPayslipById);

module.exports = router;
