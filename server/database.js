var mongoose = require('mongoose');
require('dotenv').config();

var options = { useNewUrlParser: true, useUnifiedTopology: true };

module.exports = () => mongoose.connect(process.env.DB_CONNECTION_STRING, options);
