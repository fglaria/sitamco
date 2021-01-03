var mongoose = require('mongoose');
require('dotenv').config();

var user = process.env.DB_USER;
var password = process.env.DB_PASS;
var host = process.env.DB_HOST;
var database = process.env.DB_DATABASE;

mongoose.connect(
  `mongodb+srv://${user}:${password}@${host}/${database}?retryWrites=true&w=majority`,
  {useNewUrlParser: true, useUnifiedTopology: true}
);
