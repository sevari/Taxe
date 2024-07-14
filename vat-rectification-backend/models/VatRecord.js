const mongoose = require('mongoose');

const vatRecordSchema = mongoose.Schema({
  date: { type: Date, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  vatAmount: { type: Number, required: true }
});

module.exports = mongoose.model('VatRecord', vatRecordSchema);
