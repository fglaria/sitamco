var mongoose = require('mongoose');
require('dotenv').config();

var user = process.env.DB_USER;
var password = process.env.DB_PASS;
var host = process.env.DB_HOST;
var database = process.env.DB_DATABASE;
var port = process.env.DB_PORT || 27017;

var connectionString = `mongodb+srv://${user}:${password}@${host}:${port}/${database}?retryWrites=true&w=majority`;

var options = { useNewUrlParser: true, useUnifiedTopology: true }

console.log('connectionString', connectionString);
console.log('');
console.log('');

module.exports = () => mongoose.connect(connectionString, options);
