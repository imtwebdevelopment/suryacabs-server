const Payslip = require('../models/Payslip');
const User = require('../models/User');

// @desc    Create a payslip
// @route   POST /api/payslips
// @access  Private/Admin
const createPayslip = async (req, res) => {
  const { employeeId, month, year, basicSalary, allowances, deductions } = req.body;

  try {
    const employee = await User.findById(employeeId);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    const netSalary = Number(basicSalary) + Number(allowances || 0) - Number(deductions || 0);

    const payslip = await Payslip.create({
      employeeId,
      month,
      year,
      basicSalary,
      allowances,
      deductions,
      netSalary
    });

    res.status(201).json(payslip);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all payslips
// @route   GET /api/payslips
// @access  Private/Admin
const getPayslips = async (req, res) => {
  try {
    const payslips = await Payslip.find().populate('employeeId', 'name email');
    res.json(payslips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get payslip by ID
// @route   GET /api/payslips/:id
// @access  Private
const getPayslipById = async (req, res) => {
  try {
    const payslip = await Payslip.findById(req.params.id).populate('employeeId', 'name email');

    if (payslip) {
      res.json(payslip);
    } else {
      res.status(404).json({ message: 'Payslip not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPayslip,
  getPayslips,
  getPayslipById
};
