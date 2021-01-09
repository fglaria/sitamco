var mongoose = require('mongoose');
require('dotenv').config();

// var connectionString = `mongodb+srv://${host}:${port}/${database}?retryWrites=true&w=majority`;
var options = { useNewUrlParser: true, useUnifiedTopology: true }

module.exports = () => mongoose.connect(process.env.DB_CONNECTION_STRING, options);
