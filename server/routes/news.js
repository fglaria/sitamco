var express = require('express');
var path = require('path');
var multer  = require('multer');


var upload = multer({ storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/images/news/")
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1E9)
      const extension = path.extname(file.originalname).toLowerCase()
      cb(null, uniqueSuffix + extension); // generate new name
    }
  })
});

var News = require('../models/news');

var router = express.Router();

router.get('/', function(req, res) {
  res.sendFile(path.resolve("views/news/noticias.html"))
});

router.get('/crear', function(req, res) {
  res.sendFile(path.resolve("views/news/createNews.html"))
});

router.post('/createNews', function(req, res) {
  News.create({
    title: req.body.title,
    body: req.body.body,
    image: req.body.image
  }).then(function(news){
    res.send('News created: ' + news.title);
  });
});

router.get('/list', function(req, res) {
  News.find({
  }).then(function(news){
    res.json(news);
  });
});

router.get('/read/:id', function(req, res) {
  News.findById(req.params.id)
  .then(function(oneNews){
    res.json(oneNews);
  }).catch(function(err){       // NOT SURE THIS IS THE WAY TO HANDLE ERROR
    res.send(err);
  });
});


module.exports = router;
