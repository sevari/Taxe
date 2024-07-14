const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const vatRoutes = require('./routes/vat');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/vat', vatRoutes);

module.exports = app;
