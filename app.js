var createError = require('http-errors');
const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var markupRouter = require('./routes/markup'); // Importar o novo roteador

const app = express();
const calcularMarkup = require(path.join(__dirname, 'public', 'javascripts', 'calculoMarkup.js'));
const cors = require('cors'); // Importar o pacote cors

app.use(cors());
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
app.use('/markup', markupRouter); // Usar o novo roteador

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
app.use(express.static('public'));
// eslint-disable-next-line no-undef
module.exports = app;
process.on('uncaughtException', function(err) {
    console.error('Ocorreu um erro não tratado:', err);
});