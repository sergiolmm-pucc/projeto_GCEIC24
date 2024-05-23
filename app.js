var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var irrfRouter = require('./routes/irrf.routes');
var tmbRouter = require('./routes/tmb.routes')

var exampleRouter = require('./routes/example');
var devOps3MarkUpRouter = require('./routes/dev-ops-3-mark-up');
var temperatureRouter = require('./routes/temperature');

var exampleRouter = require('./routes/example');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/irrf', irrfRouter);
app.use('/example', exampleRouter);
app.use('/dev-ops-3-mark-up', devOps3MarkUpRouter);
app.use('/temperature', temperatureRouter);
app.use('/tmb', tmbRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
