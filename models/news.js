var mongoose = require('mongoose');

var News = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    imgUrl: { type: String }
});

module.exports = mongoose.model('News', News);
