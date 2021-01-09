var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var subdomain = require('express-subdomain');
var bodyParser = require('body-parser');

var connect = require('./database');

var indexRouter = require('./routes/index');
var newsRouter = require('./routes/news');
var usersRouter = require('./routes/users');

var app = express();

connect()
  .then(() => console.log('Connected to database!'))
  .catch(console.log.bind(null, 'Error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
//app.use(upload.array());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/noticias', newsRouter);
app.use('/users', usersRouter);

//app.use(subdomain('noticias', newsRouter));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
