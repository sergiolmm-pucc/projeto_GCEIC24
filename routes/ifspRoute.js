var express = require('express');
var router = express.Router();
var path = require('path');

// Middleware para fazer parse dos dados enviados no corpo da requisição
router.use(express.urlencoded({ extended: true }));

// Rota para a página de Imposto
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'html', 'ifsp.html'));
});

module.exports = router;

