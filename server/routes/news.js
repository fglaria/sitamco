var express = require('express');
var path = require('path');
var multer  = require('multer');

var upload = multer({ dest: './public/images/news/' });

var News = require('../models/News');

var router = express.Router();

router.get('/', function(req, res) {
  res.sendFile(path.resolve("views/news/noticias.html"))
});

router.get('/crear', function(req, res) {
  res.sendFile(path.resolve("views/news/createNews.html"))
});

router.post('/createNews', upload.single('image'), function(req, res) {
  var title = req.body.title;
  var body = req.body.body;

  News.create({
    title: title,
    body: body,
    imgUrl: req.file.path
  }).then(function(news){
    res.send('News created: ' + news.title);
  });
});

router.get('/list', function(req, res, next) {
  News.find({
  }).then(function(news){
    res.header({ 'Access-Control-Allow-Origin': '*' });
    res.json(news);
  });
});



module.exports = router;
