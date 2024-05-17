var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});
//esta rodando aqui
router.get('/teste', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
