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
  var imgUrl = req.file.path.replace('public\\', '').replace(/\\/g, '/');

  console.log(req.file);

  News.create({
    title: title,
    body: body,
    imgUrl: imgUrl
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
