var express = require('express');
var router = express.Router();

var path = require('path');

/* GET home page 1. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve("views/index.html"))
});

/* GET home page 2. */
router.get('/home', function(req, res, next) {
  res.sendFile(path.resolve("views/home.html"))
});

router.get('/somos', function(req, res, next) {
  res.sendFile(path.resolve("views/somos.html"))
});

router.get('/beneficios', function(req, res, next) {
  res.sendFile(path.resolve("views/beneficios.html"))
});

router.get('/unete', function(req, res, next) {
  res.sendFile(path.resolve("views/unete.html"))
});

router.get('/contacto', function(req, res, next) {
  res.sendFile(path.resolve("views/contacto.html"))
});

module.exports = router;
