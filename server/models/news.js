var mongoose = require('mongoose');

var News = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String },
  body: { type: String, required: true },
  imgUrl: { type: String },
  created_at : { type: Date, default: Date.now },
  modified_at : { type: Date },
  deleted_at : { type: Date },
  deleted: { type: Boolean, default:false },
  comments: [{ body: String, date: Date, author: String }],
  meta: {
    views: { type: Number, default: 0 }
  }
});

module.exports = mongoose.model('News', News);
