const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  // We'll keep a reference to who created it if needed, but not strictly required.
  // For now, we'll keep it simple and just store the invoice data.
  invoiceNo: { type: String, required: true, unique: true },
  invoiceDate: { type: String, required: true },
  
  // Client Details
  customerName: { type: String, required: true },
  customerAddress: { type: String, required: true },
  customerPan: { type: String },
  customerGstin: { type: String },
  
  // Service Details
  deliveryCity: { type: String },
  servicePeriodFrom: { type: String },
  servicePeriodTo: { type: String },
  
  // Particulars
  particulars: { type: String, default: 'Vehicle Rental Service' },
  amount: { type: Number, required: true },
  
  // Additional Info
  bankName: { type: String },
  accountNo: { type: String },
  ifscCode: { type: String },
  sacNo: { type: String },
  reverseCharge: { type: String },
  applyGst: { type: String },
  
  // Taxes & Total
  cgst: { type: Number, required: true },
  sgst: { type: Number, required: true },
  grandTotal: { type: Number, required: true },
  
  status: { type: String, enum: ['Paid', 'Pending', 'Completed'], default: 'Pending' }
}, {
  timestamps: true
});

module.exports = mongoose.model('Invoice', invoiceSchema);
