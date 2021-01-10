const express = require('express');
const ImageKit = require('imagekit');

require('dotenv').config();

var router = express.Router();

const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGEKIT_URL_END_POINT,
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

// allow cross-origin requests
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/auth', function (req, res) {
  var result = imagekit.getAuthenticationParameters();
  res.send(result);
});

router.get('/test', function(req, res){
  res.send('Hola');
});


module.exports = router;
