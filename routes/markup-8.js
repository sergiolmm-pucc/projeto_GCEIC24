var express = require('express');
var router = express.Router();
var fs = require('fs');
var { calcularMarkup } = require('../public/javascripts/calculoMarkup-8.js');

/* GET home page. */
router.get('/', function(_req, res) {
  fs.readFile('./public/html/markup-8.html', function (err, html) {
    if (err) {
      throw err;
    }
    else {
      res.writeHeader(200, {"Content-Type": "text/html"});
      res.write(html);
      res.end();
    }
  });
});

router.post('/', function(req, res) {
  var { custo, markup } = req.body;
  try {
    var mk = calcularMarkup(parseFloat(custo), parseFloat(markup));
    var cf = custo + mk;
    res.json({ mk, cf, custoFinal: cf });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;
