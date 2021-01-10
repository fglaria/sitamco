var express = require('express');
var path = require('path');

var router = express.Router();

/* GET home page 1. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve("views/home/index.html"))
});

/* GET home page 2. */
router.get('/home', function(req, res, next) {
  res.sendFile(path.resolve("views/home/home.html"))
});

router.get('/somos', function(req, res, next) {
  res.sendFile(path.resolve("views/home/somos.html"))
});

router.get('/beneficios', function(req, res, next) {
  res.sendFile(path.resolve("views/home/beneficios.html"))
});

router.get('/unete', function(req, res, next) {
  res.sendFile(path.resolve("views/home/unete.html"))
});

router.get('/contacto', function(req, res, next) {
  res.sendFile(path.resolve("views/home/contacto.html"))
});

module.exports = router;
