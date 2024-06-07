var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var exampleRouter = require("./routes/example");

var calculadoraRouter = require("./routes/calculadora");
var caloricExpenditureRouter = require("./routes/caloricExpendieture");
var ifspRouter = require('./routes/ifspRoute');
var devOps3MarkUpRouter = require("./routes/dev-ops-3-mark-up");

var geomcalcRouter = require("./routes/geomcalcRouter");

var infsRouter = require("./routes/infsRoute");
var irrfRouter = require("./routes/irrf.routes");

var markup8Router = require('./routes/markup-8');

var planetweightRouter = require("./routes/planetweight_routes");

var roiRouter = require("./routes/roi-devops14");

var SDIRouter = require("./routes/SDI");

var {temperatureRouter} = require("./routes/temperature");
var tmbRouter = require("./routes/tmb.routes");

var contForcaRouter = require("./routes/contForca");

var etecRouter = require("./routes/etec.routes");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Definir suas rotas
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/example", exampleRouter);
app.use('/ifsp', ifspRouter);
app.use("/calculadora", calculadoraRouter);
app.use("/caloricExpenditure", caloricExpenditureRouter);

app.use("/dev-ops-3-mark-up", devOps3MarkUpRouter);

app.use("/geomcalc", geomcalcRouter);

app.use("/irrf", irrfRouter);
app.use("/infs", infsRouter);

app.use('/markup-8', markup8Router);

app.use("/planetweight", planetweightRouter);

app.use("/roi", roiRouter);

app.use("/SDI", SDIRouter);

app.use("/temperature", temperatureRouter);
app.use("/tmb", tmbRouter);

app.use("/contForca",contForcaRouter);

app.use("/etec", etecRouter);

// catch 404 and forward to error handler
app.use(function(_req, _res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
