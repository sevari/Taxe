const VatRecord = require('../models/VatRecord');

exports.createVatRecord = (req, res, next) => {
  const vatRecord = new VatRecord({
    date: req.body.date,
    description: req.body.description,
    amount: req.body.amount,
    vatAmount: req.body.vatAmount
  });

  vatRecord.save().then(createdRecord => {
    res.status(201).json({
      message: 'VAT record added successfully',
      vatRecordId: createdRecord._id
    });
  });
};

