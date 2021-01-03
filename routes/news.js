var express = require('express');
var router = express.Router();
var News = require('../models/News');

var path = require('path');

router.get('/', function(req, res, next) {
  res.sendFile(path.resolve("views/news/noticias.html"))
});

router.get('/test', function(req, res, next) {
  News.create({
    title: "TITULOOOOO",
    content: "na"
  });

  res.sendFile(path.resolve("views/noticias.html"))
});

router.get('/list', function(req, res, next) {
    News.find({

    }).then(function(news){
        res.json(news);
    });
});



module.exports = router;
