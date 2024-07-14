const express = require('express');
const router = express.Router();
const vatController = require('../controllers/vatController');

router.post('', vatController.createVatRecord);


module.exports = router;
